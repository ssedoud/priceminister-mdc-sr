import React from 'react';
import QualityComponent from '../common/QualityComponent';
import ProductNbAdverts from './ProductNbAdverts';

class ProductBuyBoxComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  shipping(advert) {
    if (advert.shippingAmount == 0) {
      return <span className="free-shipping">Livraison Gratuite</span>;
    }
    return <span className="shippingMode">+ {advert.shippingAmount} € (frais de port) </span>;
  }

  getBuyBoxAdvert(bestOffers) {
    if (typeof bestOffers.new !== 'undefined' && typeof bestOffers.used !== 'undefined') {
      if (bestOffers.new.score > bestOffers.used.score) {
        return this.props.product.bestOffers.new.adverts[0];
      }
      else {
        return this.props.product.bestOffers.used.adverts[0];
      }
    }
    else if (typeof bestOffers.new !== 'undefined') {
      return bestOffers.new.adverts[0];
    }
    else if (typeof bestOffers.used !== 'undefined') {
      return bestOffers.used.adverts[0];
    }
    return [];
  }

  renderBestOffer() {
    var advert = this.getBuyBoxAdvert(this.props.product.bestOffers);

    return <div className="marginTop_15">
        <span className="price"> {advert.salePrice} € <QualityComponent quality={advert.quality} /> </span>
        &nbsp;&nbsp;<span className="stock"><span className="glyphicon glyphicon-ok"></span>&nbsp;En stock (1)</span>

        <br />
        {this.shipping(advert)}
        <br /><br />

        <img src="http://www.man-deb-dev.priceminister.lan/photo/940666431.jpg"
             width="20"
             height="20"
             alt="rsp" />
        <span className="rsp">{Number((advert.salePrice).toFixed(1))} Super Points</span> à cumuler

        <br /><br />
        Commentaire du vendeur :
        <br />
        <div className="summary">
          {advert.sellerComment}
        </div>
        <br />


        <img src="https://image.freepik.com/free-icon/logistics-delivery-truck-in-movement_318-61800.png"
             width="20"
             height="20"
             alt="truck" /> &nbsp;
        <a href="#" className="shippingMode">Mode d'expédition</a>

        <br /><br />

        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default bkColorPM"><span className="glyphicon glyphicon-shopping-cart">  </span> &nbsp; Ajouter au panier</button>
          <button type="button" className="btn btn-default btn-contact-seller"><span className="glyphicon glyphicon-send"> </span>  &nbsp;Contacter le vendeur</button>
        </div>

        <br /><br />

        <ProductNbAdverts nbAdverts={this.props.product.nbNewAdverts} bestPrice={this.props.product.newBestPrice} advertType='new' />
        <ProductNbAdverts nbAdverts={this.props.product.nbUsedAdverts} bestPrice={this.props.product.usedBestPrice} advertType='used' />
          <br /><br />
          <div className="seller-box">
            <div className="seller-summary-box">
              <div className="col-md-2 vcenter">
                <img src="https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png"
                     width="40"
                     height="40"
                     className="img-responsive img-circle center-block"
                     alt="Responsive image" />
              </div>
              <div className="col-md-4 vcenter nopadding">
                <span className="center-block"><a href="#">{advert.seller.login}</a></span>
                4,6/5 - 1234 Ventes
              </div>
            </div>
          </div>

      </div>;
  }

  render() {
    if (Object.keys(this.props.product).length === 0
     || JSON.stringify(this.props.product) === JSON.stringify({})
     || typeof this.props.product.bestOffers === 'undefined') {
      return <div className="col-md-7"></div>;
    } else {
      return <div className="col-md-7">
               {this.renderBestOffer()}
             </div>;
    }
  }
}

export default ProductBuyBoxComponent;
