import React from 'react';
import { Route,DefaultRoute, IndexRoute, Router, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'


import HomePage from './components/homepage/HomePage';
import PriceMinister from './components/PriceMinister';
import ProductListPage from './components/productlist/ProductListPage';
import ProductPage from './components/product/ProductPage';

export default (
      <Route name="Home" path="/" handler={PriceMinister}>
        <DefaultRoute name="Welcome" handler={HomePage}/>
        <Route name="productList"   path="productList/:searchKeyword" handler={ ProductListPage } />
        <Route name="productDetail" path="product/:productId" handler={ ProductPage } />
      </Route>

);
