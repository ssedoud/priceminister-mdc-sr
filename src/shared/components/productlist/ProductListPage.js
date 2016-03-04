import React from 'react';

import MenuComponent from '../homepage/MenuComponent';
import ProductListComponent from './ProductListComponent';
import ProductListPaginationComponent from './ProductListPaginationComponent';
import FooterComponent from '../common/FooterComponent';

class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber : 1
    }
  }

  changePageNumber() {
    console.log("add number");
    this.setState({
      pageNumber : this.state.pageNumber + 1
    });
  }

  componentDidUpdate() {
  window.scrollTo(0, 0)
}

  render(){
    console.log("ProductListPage  " + this.props.params.searchKeyword + ", " + this.state.pageNumber);
    return <div>
      <MenuComponent/>
      <div className="col-md-7">
        <ProductListComponent pageNumber={this.state.pageNumber} keyword={this.props.params.searchKeyword}/>
        <ProductListPaginationComponent changePageNumber={this.changePageNumber.bind(this)} currentPageNumber={this.state.pageNumber}/>
      </div>
      <div className="row">
        <div className="col-md-12">
          <FooterComponent/>
        </div>
      </div>

    </div>;
  }
}

export default ProductListPage;
