import React from 'react';
import ajax from 'superagent';

import ProductTitleComponent from './ProductTitleComponent';
import ProductDataComponent from './ProductDataComponent';
import ProductBuyBoxComponent from './ProductBuyBoxComponent';
import ProductSellYoursComponent from './ProductSellYoursComponent';
import ProductOtherAdvertsComponent from './ProductOtherAdvertsComponent';

class ProductPageDetailComponent extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        result : {},
        product : {}
      };

  }

  componentDidMount() {
    var baseUrl = 'http://ws.sse-deb-dev.priceminister.lan/rest/product/v1/get';

    ajax.get(`${baseUrl}?advertType=ALL&productId=${this.props.productId}&channel=hackathon&loadProductDetails=true`)
        .set({
          //'User-Agent': 'HACKATHON Q1.2016',
          'Accept' : 'application/json'
        })
        .end((error, response) => {
            if (!error && response) {
                this.setState({
                  result : response.body.result,
                  product : {
                    "id" : response.body.result.id,
                    "urlName" : response.body.result.urlName,
                    "breadcrumbs" : response.body.result.breadcrumbs,
                    "headline" : response.body.result.headline,
                    "reviewsAverageNote" : response.body.result.reviewsAverageNote,
                    "nbReviews" : response.body.result.nbReviews,
                    "imagesUrls" : response.body.result.imagesUrls,
                    "isAvailable" : response.body.result.isAvailable,
                    "isMevFormAvailable" : response.body.result.isMevFormAvailable,
                    "newBestPrice" : response.body.result.newBestPrice,
                    "usedBestPrice" : response.body.result.usedBestPrice,
                    "bestOffers" : response.body.result.bestOffers,
                    "nbAdverts" : response.body.result.advertsCount,
                    "nbNewAdverts" : response.body.result.advertsNewCount,
                    "nbUsedAdverts" : response.body.result.advertsUsedCount,
                    "adverts" : response.body.result.adverts
                  }
                });
            } else {
                console.log("error occured during ajax request");
            }
        }
    );
  }

  // Mettre dans ProductPageDetailComponent.render() le contenu de la page
  render() {
    return <div>
            <div className="row">
              <div className="col-md-12">
                <div className="product-box2">
                  <ProductTitleComponent product={this.state.product}/>
                  <div className="row">
                    <ProductDataComponent product={this.state.product}/>
                    <ProductBuyBoxComponent product={this.state.product}/>
                    <ProductSellYoursComponent product={this.state.product}/>
                  </div>
                </div>
              </div>
            </div>
            {this.renderProductAdverts()}
            </div>;
  }

  renderProductAdverts() {
    if (!this.state.product || this.state.product.nbAdverts === 0) {
      return "";
    }
    else {
      return <ProductOtherAdvertsComponent product={this.state.product}/>
    }
  }

}

export default ProductPageDetailComponent;
