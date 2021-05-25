import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Auth() {
  let history = useHistory();
  Axios.get('/api/auth').then((response) => {
    if (response.data.status === false) {
      return history.push('/');
    } else {
      return;
    }
  });
}
