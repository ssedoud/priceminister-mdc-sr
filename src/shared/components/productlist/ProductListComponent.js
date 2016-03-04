import React from 'react';
import ajax from 'superagent';

import ProductListDetailComponent from './ProductListDetailComponent';
import ProductListPaginationComponent from './ProductListPaginationComponent';

class ProductListComponent extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          productItemList : []
      };
  }

  getProductList(keyword, pageNumber){
    var keyword = keyword;
    var baseUrl = 'http://ws.sse-deb-dev.priceminister.lan/rest/navigation/v1/list?'

    var keywordParam = '';
    if(keyword != undefined){
      keywordParam =`&kw=${keyword}`;
    }

    var pageParam = `&pageNumber=1`;
    if(pageNumber != undefined){
      pageParam =`&pageNumber=${pageNumber}`;
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
     this.getProductList(this.props.keyword, this.props.pageNumber);
  }

  componentWillReceiveProps(nextProps) {
    console.log('next prpps' + nextProps.pageNumber);
    this.getProductList(nextProps.keyword, nextProps.pageNumber);
  }

  render() {
     return (<div>
       {this.state.productItemList.map((item,index) => {
            return (
              <ProductListDetailComponent key={index} product={item}/>
            );
        })}
       </div>);
  }

}



export default ProductListComponent;
