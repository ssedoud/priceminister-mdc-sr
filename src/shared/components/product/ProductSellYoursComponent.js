import React from 'react';

class ProductSellYoursComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  defaultSalePrice() {
    if (this.props.product.newBestPrice > 0 && this.props.product.usedBestPrice) {
      if (this.props.product.newBestPrice < this.props.product.usedBestPrice) {
        return
      }
    }

    return
  }

  render() {
    var defaultSalePrice="";
    if (this.props.product.newBestPrice > 0
    && this.props.product.newBestPrice < this.props.product.usedBestPrice) {
      defaultSalePrice=this.props.product.newBestPrice;
    }
    else if (this.props.product.usedBestPrice > 0
          && this.props.product.usedBestPrice < this.props.product.newBestPrice) {
      defaultSalePrice=this.props.product.usedBestPrice;
    }

    return <div className="row">
             <div className="col-md-12">
               <div className="confiancePM align-right">
                 <span className="category ">Livraison garantie par Priceminister et Service clients à votre écoutes <a href="#">(?)</a></span>
               </div>
               <div className="col-md-2">
                 <div className="input-group input-group-sm">
                   <span className="input-group-btn">
                     <button className="btn btn-default bkColorPM" type="button">Vendez le vôtre</button>
                   </span>
                   <input type="text" className="form-control" placeholder={defaultSalePrice} />
                 </div>
               </div>
             </div>
           </div>;
  }
}

export default ProductSellYoursComponent;
