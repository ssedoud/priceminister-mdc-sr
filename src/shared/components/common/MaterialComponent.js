import React from 'react';


class MaterialComponent extends React.Component {

  render() {
    return (<ul id="menu" className="mfb-component--br mfb-zoomin hidden-desktop" data-mfb-toggle="hover">
          <li className="mfb-component__wrap">
            <a href="#" className="mfb-component__button--main">
              <i className="mfb-component__main-icon--resting ion-plus-round"></i>
              <i className="mfb-component__main-icon--active ion-close-round"></i>
            </a>
            <ul className="mfb-component__list">
              <li>
                <a href="#" data-mfb-label="Mettre en vendre en 3 clics" className="mfb-component__button--child">
                  <b><span className="mfb-component__child-icon size13">Vendre</span></b>
                </a>
              </li>

              <li>
                <a href="#" data-mfb-label="Mon compte" className="mfb-component__button--child">
                  <span className="mfb-component__child-icon  glyphicon glyphicon-user"> </span>
                </a>
              </li>

              <li>
                <a href="#" data-mfb-label="Mon panier" className="mfb-component__button--child">
                  <span className="mfb-component__child-icon  glyphicon glyphicon-shopping-cart"> </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>);

  }

}

export default MaterialComponent;
