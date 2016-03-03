import React from 'react';

import ProductListComponent from './ProductListComponent';

class ProductListPage extends React.Component {
  render(){
    console.log("ProductListPage  " + this.props.params.searchKeyword);
    return  <div className="col-md-7">
               <ProductListComponent pageNumber="1" keyword={this.props.params.searchKeyword}/>
            </div> ;
  }
}

export default ProductListPage;
