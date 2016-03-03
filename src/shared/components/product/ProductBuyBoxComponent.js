import React from 'react';
import QualityComponent from '../common/QualityComponent';

class ProductBuyBoxComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  // TODO : adapter si la bestOffer est à used (new or used)
  renderBestOffer() {
    console.log("renderBestOffer");

    var buyBoxAdverts = [];
    if (this.props.product.bestOffers.new != "undefined") {
      buyBoxAdverts = this.props.product.bestOffers.new;
    }
    else if (this.props.product.bestOffers.used != "undefined") {
      buyBoxAdverts = this.props.product.bestOffers.used;
    }

    var advert = buyBoxAdverts.adverts[0];
    return <div className="marginTop_15">
        <span className="price"> {advert.salePrice} € <QualityComponent quality={advert.quality} /> </span>
        &nbsp;&nbsp;<span className="stock"><span className="glyphicon glyphicon-ok"></span>&nbsp;En stock (1)</span>

        <br />
        <span className="free-shipping">Livraison Gratuite</span>
        <br /><br />

        <img src="img/rsp_icon.png" width="20" height="20" alt="rsp" />
        <span className="rsp">70 Super Points</span> à cumuler

        <br /><br />
        Commentaire du vendeur :
        <br />
        <div className="summary">
          {advert.sellerComment}
        </div>
        <br />

        <img src="img/truck.jpeg" width="20" height="20" alt="truck" /> &nbsp;
        <a href="#" className="shippingMode">Mode d'expédition</a>

        <br /><br />

        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default bkColorPM"><span className="glyphicon glyphicon-shopping-cart">  </span> &nbsp; Ajouter au panier</button>
          <button type="button" className="btn btn-default btn-contact-seller"><span className="glyphicon glyphicon-send"> </span>  &nbsp;Contacter le vendeur</button>
        </div>

        <br /><br />

        <span className="offerSummary"> 21 neufs dès </span>
        <a href ="#"><span className="smallPrice">{this.props.product.newBestPrice} € </span> </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="offerSummary">72 occasions dès </span>
        <a href ="#"><span className="smallPrice">{this.props.product.usedBestPrice} € </span> </a>
      </div>;
  }

  render() {
    if (Object.keys(this.props.product).length === 0 || JSON.stringify(this.props.product) === JSON.stringify({})) {
      return <div className="col-md-7"></div>;
    } else {
      return <div className="col-md-7">
               {this.renderBestOffer()}
             </div>;
    }
  }
}

export default ProductBuyBoxComponent;
