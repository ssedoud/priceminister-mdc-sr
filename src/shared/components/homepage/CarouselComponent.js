import React from 'react';


class CarouselComponent extends React.Component {

  render() {
      return  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                           <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                           <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                           <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                           <div className="item active">
                           <img src="http://pmcdn.staticpmrk.com/visuels/2015-08-17_SBP/746x215_megabanner.png"
                            className="img-responsive center-block" alt="carousel1" border="0"/>
                           </div>
                           <div className="item">
                           <img src="http://pmcdn.staticpmrk.com/visuels/_merch/746x215_S7.jpg"
                               className="img-responsive center-block" alt="carousel2" border="0"/>
                           </div>
                           <div className="item">
                           <img src="http://pmcdn.staticpmrk.com/visuels/_merch/746x215_CO.jpg"
                               className="img-responsive center-block" alt="carousel3" border="0"/>
                           </div>
                        </div>
                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                </div>;
  }
}

export default CarouselComponent;
