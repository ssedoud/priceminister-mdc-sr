import React from 'react';
import QualityComponent from '../common/QualityComponent';

class ProductOtherAdvertsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "showShippingModes" : false
    }
  }

  renderAdvert() {
    console.log(this.props.product.adverts);
    return this.props.product.adverts.map((advert) =>
      <tr>

        <td className="col-md-2"><a className="price" href="#" > {advert.salePrice}€ <QualityComponent quality={advert.quality} /></a><br />
        <span className="stock-listing"><span className="glyphicon glyphicon-ok"></span>&nbsp;En stock</span>
        <div className="rsp-box-listing">
        <img src="img/rsp_icon.png" width="20" height="20" alt="rsp"/>
        <span className="rsp">{advert.rspMinimumAmount}</span>
        </div>
        </td>

        <td className="col-md-5">
        <div className="summary-listing">
        {advert.sellerComment}
        <br /><br />
        <img src="img/truck.jpeg" width="20" height="20" alt="truck"/> &nbsp;
        <a href="#" className="shippingMode">Modes d''expédition </a>
        </div>
        </td>

        <td className="col-md-3">
        <div className="vcenter">
        <span className="center-block"> <a href="#">{advert.seller.login}</a></span>
        {Number((advert.seller.averageScore).toFixed(1))}/5 - {advert.seller.totalSaleCount} Vente{advert.seller.totalSaleCount < 2 ? '' : 's'}
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
