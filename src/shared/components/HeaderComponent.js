import React from 'react';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      url:'',
    };

  }

handleSearchClick(){
  var nextUrl = '/productList/' + this.state.keyword;
  this.props.history.replace(nextUrl);
}

handleTextChange(e){
  this.setState({keyword: e.target.value});
  this.setState({url: '/productList/' + e.target.value});
}

  render(){

    return  <div className="row">
                <div className="header">
                   <div className="row">
                      <div className="col-md-3 vcenter">
                         <img src="http://www.accengage.com/wp-content/uploads/2014/09/logo-price-minister-rakuten-group.png"
                            className="img-responsive center-block" alt="Responsive image"/>
                      </div>
                      <div className="col-md-6 vcenter">
                         <div className="input-group ">
                            <div className="input-group-btn search-panel">
                               <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                               <span id="search_concept">Catégorie</span> <span className="caret"></span>
                               </button>
                               <ul className="dropdown-menu">
                                  <li><a href="#">Livres et BD</a></li>
                                  <li><a href="#">Musique et CD</a></li>
                                  <li><a href="#">DVD, Blu-Ray et VOD</a></li>
                                  <li><a href="#">Jeux vidéo et consoles</a></li>
                                  <li><a href="#">Livres et BD</a></li>
                                  <li><a href="#">Musique et CD</a></li>
                                  <li><a href="#">DVD, Blu-Ray et VOD</a></li>
                                  <li><a href="#">Jeux vidéo et consoles</a></li>
                                  <li><a href="#">Téléphonie et tablettes</a></li>
                                  <li><a href="#">Informatique et logiciels</a></li>
                                  <li><a href="#">Image et son</a></li>
                                  <li><a href="#">Maison, Electro et Brico</a></li>
                                  <li><a href="#">Jardin et Animalerie</a></li>
                                  <li><a href="#">Sports et Loisirs</a></li>
                                  <li><a href="#">Mode et Beauté</a></li>
                                  <li><a href="#">Jouets et Enfants</a></li>
                                  <li><a href="#">Art et Collection</a></li>
                               </ul>
                            </div>
                            <input type="hidden" name="search_param" value="all" id="search_param"/>
                            <input id="query" name="query" type="text" className="form-control" onChange={this.handleTextChange.bind(this)} placeholder="Rechercher ..."/>
                            <span className="input-group-btn">
                            <button className="btn btn-default bkColorPM"  onClick={this.handleSearchClick.bind(this)}  type="button" >
                              <span className="glyphicon glyphicon-search"></span>
                            </button>
                            </span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>;
  }
}

export default HeaderComponent;
