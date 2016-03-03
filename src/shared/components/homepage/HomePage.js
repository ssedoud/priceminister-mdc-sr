import React from 'react';
import MenuComponent from './MenuComponent';
import { Link, RouteHandler } from 'react-router';
import CarouselComponent from './CarouselComponent';
import MaterialComponent from '../common/MaterialComponent';
import FooterComponent from '../common/FooterComponent';

class HomePage extends React.Component {
  render(){
            return  <div><div className="row">
                        <MenuComponent/>
                        <div className="col-md-7">
                            <CarouselComponent/>
                        </div>
                        <MaterialComponent/>
                      </div>
                       <div className="row">
                        <div className="col-md-12">
                        <FooterComponent/>
                        </div>
                       </div></div>

;
  }
}

export default HomePage;
