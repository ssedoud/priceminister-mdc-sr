import React from 'react';
import ScoreComponent from '../common/ScoreComponent';

class ProductTitleComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return <div className="product-title-box">
             <span className="title">{this.props.product.headline}</span>&nbsp;
             <ScoreComponent score={this.props.product.reviewsAverageNote}
                             reviewCount={this.props.product.nbReviews}/>
           </div>
  }
}

export default ProductTitleComponent;
