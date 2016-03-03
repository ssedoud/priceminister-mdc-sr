import React from 'react';


class CarouselComponent extends React.Component {

  render() {
      return  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                           <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                           <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                           <div className="item active">
                           <img src="http://pmcdn.staticpmrk.com/visuels/2016-02-19_jardin_megaban/746x215_megabanner_jardinb.jpg"
                            className="img-responsive center-block" alt="..." border="0"/>
                           </div>
                           <div className="item">
                              <img src="http://pmcdn.staticpmrk.com/visuels/2016-02-19_jardin_megaban/746x215_megabanner_jardinb.jpg"
                               className="img-responsive center-block" alt="..." border="0"/>
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
