import React from 'react';
import './main.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import Product from './views/Product';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './views/Login';
import AdminDashboard from './views/Admin/Admin_Dashboard';
import ProductCreate from './views/Admin/Product_Create';
import ProductUpdate from './views/Admin/Product_Update';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/product">
            <Nav />
            <Products />
            <Footer />
          </Route>
          <Route exact path="/product/:id">
            <Nav />
            <Product />
            <Footer />
          </Route>
          <Route exact path="/admin/login" component={Login} />
          <Route exact path="/admin/" component={AdminDashboard} />

          <Route exact path="/admin/create" component={ProductCreate} />
          <Route exact path="/admin/update" component={ProductUpdate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
