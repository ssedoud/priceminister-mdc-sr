import React from 'react';

class ProductNbAdverts extends React.Component {
  render() {
    if (this.props.nbAdverts > 0) {
      return <span><span className="offerSummary">
          {this.props.nbAdverts} {this.props.advertType === "new" ? 'neufs' : 'occasions'} dès
          </span>
          <a href ="#">
            <span className="smallPrice"> {this.props.bestPrice} € </span>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;</span>;
    }
    else {
      return <span></span>;
    }

  }
}

export default ProductNbAdverts;
