import React from 'react';
import MenuComponent from './MenuComponent';
import { Link, RouteHandler } from 'react-router';
import CarouselComponent from './CarouselComponent';


class HomePage extends React.Component {
  render(){
            return  <div className="row">
                        <MenuComponent/>
                        <div className="col-md-7">
                            <CarouselComponent/>
                        <br/>
                        </div>
                      </div>;
  }
}

export default HomePage;
