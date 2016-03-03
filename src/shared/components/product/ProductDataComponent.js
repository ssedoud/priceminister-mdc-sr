import React from 'react';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';

class ProductDataComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  renderImages() {
    console.log(this.props.product.imagesUrls);

    if (this.props.product != undefined && this.props.product.imagesUrls != undefined && this.props.product.imagesUrls.length > 0) {
      return this.props.product.imagesUrls.map((imageUrl) =>
             <h3>
               <img src={imageUrl}
                    className="img-responsive center-block"
                    alt="Responsive image" />
             </h3>
           );
    }
    else {
      return <h3>
               <img src="img/default_img.gif"
                  className="img-responsive center-block"
                  alt="Responsive image" />
             </h3>;
    }
  }

  render() {
    return <div className="col-md-5">

             <div className="row">
               <div className="single-item">
                 <div>
                   {this.renderImages()}
                 </div>
               </div>
             </div>

             <div className="row marginTop_15">
               <div id="toolbar">
                 <div className='wrapper text-center'>
                   <div className="btn-group btn-group-sm" role="group" aria-label="...">
                     <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-share-alt">  </span> &nbsp;Partager</button>
                     <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-bell"> </span>  &nbsp;Alerte Prix</button>
                     <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-heart"> </span>  &nbsp;Favoris</button>
                   </div>
                 </div>
               </div>
             </div>

             <div className="category">
               <BreadcrumbsComponent breadcrumbs={this.props.product.breadcrumbs} />
             </div>

             <div>
               <a href="#" className="descriptif">Voir le descriptif</a>
             </div>

           </div>;
  }
}

export default ProductDataComponent;
