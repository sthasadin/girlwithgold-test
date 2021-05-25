const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const path = require('path');
require('dotenv').config();

//image upload to mongodb
const storage = new GridFsStorage({
  url: `${process.env.MONGODB}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: function (req, file) {
    return new Promise((resolve, reject) => {
      const ext = path.extname(file.originalname).toLowerCase();
      const filename = `${file.fieldname}-${Date.now()
        .toExponential()
        .slice(2, 14)}${ext}`;
      const fileInfo = { filename: filename, bucketName: 'image' };
      resolve(fileInfo);
    });
  },
});

function fileFilter(req, file, cb) {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif') {
    return cb(null, true);
  }
  return cb(
    new Error(`The image with extension ${ext} is not permitted.`),
    false
  );
}

const upload = multer({ storage: storage, fileFilter: fileFilter });
router.post(
  '/files',

  upload.array('image', 5),
  function (req, res) {
    res.json(req.files);
  }
);

router.post(
  '/file',

  upload.single('image'),
  function (req, res) {
    res.json(req.file);
  }
);
//---------------------------------------------------------------------
// image retrieved from mongodb

//establishing connection to mongodb server
const conn = mongoose.createConnection(process.env.MONGODB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let gfs;
conn.once('open', function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('image'); //name has to be same as during upload

  //close
});

const chunkSchema = new mongoose.Schema({
  n: { type: Number },
});
const fileSchema = new mongoose.Schema({
  filename: { type: String },
});
const Chunk = mongoose.model('image.chunks', chunkSchema);
const File = mongoose.model('image.files', fileSchema);

//showing all images metadata
router.get('/files', function (req, res) {
  gfs.files.find().toArray(function (err, files) {
    if (err) {
      return res.status(404).json({
        err: 'Something went wrong, please try again later',
      });
    }
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist',
      });
    }
    //if files exists
    return res.json(files);
  });
});

//showing single image metadata
router.get('/files/:id', function (req, res) {
  File.findOne({ _id: req.params.id }, function (err, file) {
    if (err) {
      return res.status(404).json({
        err: 'Something went wrong, please try again later',
      });
    }
    if (!file) {
      return res.status(404).json({
        err: 'No such file exists',
      });
    }
    //if files exists
    return res.json(file);
  });
});

//showing single image
router.get('/stream/:id', function (req, res) {
  File.findOne({ _id: req.params.id }, function (err, file) {
    if (err) {
      return res.status(404).json({
        err: 'Something went wrong, please try again later',
      });
    }
    if (!file) {
      return res.status(404).json({
        err: 'No such file exists',
      });
    }
    //show image
    const readstream = gfs.createReadStream(file._id);
    readstream.pipe(res);
  });
});

router.delete('/files/delete', function (req, res) {
  //first deletes all the file documents that has provided IDs
  File.deleteMany({ _id: { $in: req.body } }, function (err, gridStore) {
    if (err) {
      return console.log(err);
    }

    //Looks for all the chunk documents with referenced fileID
    const filesID = req.body.map((item) => mongoose.Types.ObjectId(item));
    Chunk.find(
      {
        files_id: { $in: filesID },
      },
      function (err, response) {
        if (err) {
          return console.log(err);
        }
        const CHUNKS = response.map((item) => item._id);

        //Deletes all the chunks with the retrieved chunks IDs. Couldn't delete chunk with referenced fileIDs because it just refused
        //to get deleted. I don't understand it.
        Chunk.deleteMany({ _id: { $in: CHUNKS } }, function (err, result) {
          if (err) {
            return console.log(err);
          }
          res.json(result);
          console.log({ deletedCount: result.deletedCount });
        });
      }
    );
  });
});

module.exports = router;
