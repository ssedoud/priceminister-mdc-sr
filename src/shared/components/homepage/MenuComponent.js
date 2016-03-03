import React from 'react';

class MenuComponent extends React.Component {
  render(){
    return <div className="col-md-3">
                   <div className="list-group">
                      <a href="#" className="list-group-item disabled">Parcourir toutes les catégories</a>
                      <a href="#" className="list-group-item">Livres et BD</a>
                      <a href="#" className="list-group-item">Musique et CD</a>
                      <a href="#" className="list-group-item">DVD, Blu-Ray et VOD</a>
                      <a href="#" className="list-group-item">Jeux vidéo et consoles</a>
                      <a href="#" className="list-group-item">Téléphonie et tablettes</a>
                      <a href="#" className="list-group-item">Informatique et logiciels</a>
                      <a href="#" className="list-group-item">Image et son</a>
                      <a href="#" className="list-group-item">Maison, Electro et Brico</a>
                      <a href="#" className="list-group-item">Jardin et Animalerie</a>
                      <a href="#" className="list-group-item">Sports et Loisirs</a>
                      <a href="#" className="list-group-item">Mode et Beauté</a>
                      <a href="#" className="list-group-item">Jouets et Enfants</a>
                      <a href="#" className="list-group-item">Art et Collection</a>
                    </div>
           </div>;
  }
}

export default MenuComponent;
