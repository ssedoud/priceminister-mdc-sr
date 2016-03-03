import React from 'react';

class FooterComponent extends React.Component {

  render() {
    return (
    <div className="footer-box">
    <img src="http://jp.rakuten-static.com/1/bu/corp/global/im/news/rakuten-logo-global.jpg" width = "150"
    className="img-responsive center-block" alt="imagesUrls"/>
    <p className="text-center">
    Tous les services Rakuten :  Allemagne - Autriche - Brésil - Etats-Unis - Espagne - Japon - Royaume Uni - Taiwan - International
    <br/><br/> © PriceMinister 2000-2016 </p>
    </div>
    );
  }

}

export default FooterComponent;
