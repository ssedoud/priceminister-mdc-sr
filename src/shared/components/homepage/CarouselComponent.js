import React from 'react';
import ajax from 'superagent';


class CarouselComponent extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          imagesUrls : []
      };
  }

    componentDidMount(){
      var baseUrl = 'http://ws.sse-deb-dev.priceminister.lan/rest/cms/v1/getContent?channel=buyerapp&site=MOB_WEBAPP&page=homepage.html?'

      ajax
      .get(`${baseUrl}`)
          .end((error, response) => {
              if (!error && response) {
                  var res = JSON.parse(response.body['result']);
                  this.setState({ imagesUrls : res['carousel']['elements']});
              } else {
                  console.log(`Error fetching`, error);
              }
          }
      );
    };


  render() {

    <div className="item active">
    <img src="http://pmcdn.staticpmrk.com/visuels/2015-08-17_SBP/746x215_megabanner.png"
     className="img-responsive center-block" alt="carousel1" border="0"/>
    </div>

      return  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                        {this.state.imagesUrls.map((item,index) => {
                          if(index === 0){
                             return (
                                <li data-target="#carousel-example-generic" data-slide-to={index} className="active"></li>
                             );
                           }else{
                             return (
                                <li data-target="#carousel-example-generic" data-slide-to={index}></li>
                             );
                           }
                         })}
                        </ol>

                        <div className="carousel-inner" role="listbox">
                        {this.state.imagesUrls.map((item,index) => {
                          var altc = "carousel"+index

                          if(index === 0){
                             return (
                               <div className="item active">
                               <img src={item.imageUrl}
                                className="img-responsive center-block" alt={altc} border="0"/>
                               </div>
                             );
                           }else{
                             return (
                               <div className="item">
                               <img src={item.imageUrl}
                                className="img-responsive center-block" alt={altc} border="0"/>
                               </div>
                             );
                           }
                         })}
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
