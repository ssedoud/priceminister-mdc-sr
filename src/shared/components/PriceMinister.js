import React, { PropTypes } from 'react';
import MenuComponent from './homepage/MenuComponent';
import { Link, RouteHandler } from 'react-router';
import HeaderComponent from './HeaderComponent';


class PriceMinister extends React.Component {

  render(){
    return <div id="web-box">
    <HeaderComponent history={this.context.router}/>
            <div className="row">
              <MenuComponent/>
              <RouteHandler />
            </div>
          </div> ;
  }
}

PriceMinister.contextTypes = {
router: function() { return React.PropTypes.func.isRequired; }
};

export default PriceMinister;
