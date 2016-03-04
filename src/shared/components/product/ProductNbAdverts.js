import React from 'react';

class ProductNbAdverts extends React.Component {
  render() {
    if (this.props.nbAdverts > 0 && this.props.bestPrice > 0) {
      return <span><span className="offerSummary">
          {this.props.nbAdverts} {this.props.advertType === "new" ? 'neuf' : 'occasion'}{this.props.nbAdverts > 1 ? 's' : ''} dès
          </span>
          <a href ="#">
            <span className="smallPrice"> {this.props.bestPrice} € </span>
          </a>
          </span>;
    }
    else {
      return <span></span>;
    }

  }
}

export default ProductNbAdverts;
