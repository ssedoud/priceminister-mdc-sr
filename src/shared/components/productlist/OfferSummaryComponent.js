import React from 'react';


class OfferSummaryComponent extends React.Component {

   render() {

     var usedOfferTag;

     if(this.props.advertsUsedCount != 0 ){
       usedOfferTag =
       <div>
         <span className="offerSummary"> {this.props.advertsUsedCount} occasion dès </span>
         <a href ="#">
          <span className="smallPrice">{this.props.usedBestPrice} €</span>
         </a>
       </div>;
     }else{
       usedOfferTag ='';
     }

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
               <span className="offerSummary"> {this.props.advertNewCount} neufs dès </span>
               <a href ="#">
                  <span className="smallPrice">{this.props.newBestPrice} </span>
               </a>
               <br/>
               {usedOfferTag}
             </div>;
   }

}

export default OfferSummaryComponent;
