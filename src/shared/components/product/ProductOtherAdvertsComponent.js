import React from 'react';
import QualityComponent from '../common/QualityComponent';

class ProductOtherAdvertsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "showShippingModes" : false
    }
  }

  advertComment(advertComment) {
    if (typeof advertComment !== 'undefined') {
      return <span>{advertComment.substring(0, 200)}{advertComment.length > 200 ? '...' : ''}</span>;
    }
    return <span>Le vendeur n'a pas renseigné d'informations supplémentaires</span>;
  }

  sellerScore(averageScore) {
    if (typeof averageScore !== 'undefined') {
      return <span>{Number((averageScore).toFixed(1))}</span>;
    }
    return <span>5</span>;
  }

  renderAdvert() {
    return this.props.product.adverts.map((advert) =>
      <tr>

        <td className="col-md-2"><a className="price" href="#" > {advert.salePrice}€ <QualityComponent quality={advert.quality} /></a><br />
        <span className="stock-listing"><span className="glyphicon glyphicon-ok"></span>&nbsp;En stock</span>
        <div className="rsp-box-listing">
        <img src="http://www.man-deb-dev.priceminister.lan/photo/940666431.jpg"
             width="20"
             height="20"
             alt="rsp"/>
        <span className="rsp">{advert.rspMinimumAmount}</span>
        </div>
        </td>

        <td className="col-md-5">
        <div className="summary-listing">
        {this.advertComment(advert.sellerComment)}
        <br /><br />
        <img src="https://image.freepik.com/free-icon/logistics-delivery-truck-in-movement_318-61800.png"
             width="20"
             height="20"
             alt="truck"/> &nbsp;
        <a href="#" className="shippingMode">Modes d''expédition </a>
        </div>
        </td>

        <td className="col-md-3">
        <div className="vcenter">
        <span className="center-block"> <a href="#">{advert.seller.login}</a></span>
        {this.sellerScore(advert.seller.averageScore)}/5 - {advert.seller.totalSaleCount} Vente{advert.seller.totalSaleCount < 2 ? '' : 's'}
        </div>
        </td>

        <td>
        <button type="button" className="btn btn-default bkColorPM">
        <span className="glyphicon glyphicon-shopping-cart">  </span>
        <span className="buy-box-table"> &nbsp; Ajouter au panier</span>
        </button>
        </td>
      </tr>
    );
  }

  render() {
    if (Object.keys(this.props.product).length === 0 || JSON.stringify(this.props.product) === JSON.stringify({})) {
      return <div className="listing-box"></div>;
    }
    else {
      return <div className="listing-box">
          <h4>{this.props.product.nbAdverts} Vendeur{this.props.product.nbAdverts === 1 ? '' : 's'} pour {this.props.product.headline}</h4><br />
          <table className="table">
            <tbody>
              {this.renderAdvert()}
            </tbody>
          </table>
      </div>;
    }
  }
}

export default ProductOtherAdvertsComponent;
