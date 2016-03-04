import React from 'react';
import ProductNbAdverts from '../product/ProductNbAdverts';


class OfferSummaryComponent extends React.Component {

   render() {
     var carrierReturn = this.props.advertsNewCount > 0 && this.props.advertsUsedCount > 0 ? <br/> : '';
     return  <div className="col-md-4">
               <a className="price" href="#" >{this.props.bestPrice} € </a> Comme Neuf
               <br/>
               <a className="shipping" href="#">+ 2,90 € (frais de port) </a>
               <br/><br/>
               <button className="btn btn-default btn-sm bkColorPM">
                 <span className="glyphicon glyphicon-shopping-cart"></span> Ajouter au panier
               </button>
               <br/><br/>
               <span className="sellerSummary">Voir tous les vendeurs</span>
               <br/>
               <ProductNbAdverts nbAdverts={this.props.advertsNewCount} bestPrice={this.props.newBestPrice} advertType="new" />
               {carrierReturn}
               <ProductNbAdverts nbAdverts={this.props.advertsUsedCount} bestPrice={this.props.usedBestPrice} advertType="used" />
             </div>;
   }

}

export default OfferSummaryComponent;
