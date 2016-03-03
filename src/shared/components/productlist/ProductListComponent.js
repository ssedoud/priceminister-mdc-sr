import React from 'react';
import ajax from 'superagent';
import ProductListDetailComponent from './ProductListDetailComponent';

class ProductListComponent extends React.Component {

  constructor(props) {
      super(props);
      console.log('Contructor');
      this.state = {
          productItemList : []
      };
  }

  getProductList(keyword,pageNumber){
    console.log("ProductListComponent  " + this.props.keyword);
    var keyword = keyword;
    var pageNumber = pageNumber;
    var baseUrl = 'http://ws.sse-deb-dev.priceminister.lan/rest/navigation/v1/list?'

    var keywordParam = '';
    if(keyword != undefined){
      keywordParam =`&kw=${keyword}`;
    }

    var pageParam = 1;
    if(pageNumber != undefined){
      pageParam = `&pageNumber=${pageNumber}`;
    }
    ajax
    .get(`${baseUrl}channel=hackathon${keywordParam}${pageParam}`)
     // .set('User-Agent', "some spoofed agent")
        .end((error, response) => {
            if (!error && response) {
                this.setState({ productItemList : response.body['result'].products });
            } else {
                console.log(`Error fetching`, error);
            }
        }
    );

  }

componentWillMount(){
  console.log('ajax Mount call');
   this.getProductList(this.props.keyword,this.props.pageNumber);
}

   componentWillReceiveProps(nextProps) {
      this.getProductList(nextProps.keyword,nextProps.pageNumber);

   }


   render() {
     console.log('rendering list');
       return (<div>
         {this.state.productItemList.map((item,index) => {
              console.log('rendering item list');
              return (
                <ProductListDetailComponent key={index} product={item}/>
              );
          })}

         </div>);
   }


}


export default ProductListComponent;
