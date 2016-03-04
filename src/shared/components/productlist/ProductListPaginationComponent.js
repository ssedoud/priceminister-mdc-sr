import React from 'react';
import ajax from 'superagent';

class ProductListPaginationComponent extends React.Component {

  changePageNumber() {
    this.props.changePageNumber(1);
  }

  render() {
    return <div className="im-centered">
      <div className="row">
        <div className="text-center">
          <div className="next-product">
          <button type="button" onClick={this.changePageNumber.bind(this)} className="btn btn-primary btn-next-product">Voir les produits suivants</button>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default ProductListPaginationComponent;
