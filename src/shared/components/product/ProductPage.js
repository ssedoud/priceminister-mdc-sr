import React from 'react';

import ProductPageDetailComponent from './ProductPageDetailComponent';

class ProductPage extends React.Component {
  render(){
    console.log("ProductPage  " + this.props.params.productId);
    return <ProductPageDetailComponent productId={this.props.params.productId} />;
  }
}

export default ProductPage;
