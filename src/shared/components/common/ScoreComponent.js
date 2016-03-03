import React from 'react';


class ScoreComponent extends React.Component {


  render() {

    var MAX_SCORE = 5;

    var starList = [];

    for( var i =0; i < this.props.score; i++){
      starList.push(<span className="glyphicon glyphicon-star yellow"> </span>);
    }
    for( var i =0; i < MAX_SCORE - this.props.score; i++){
      starList.push(<span className="glyphicon glyphicon-star grey"> </span>);
    }

    var reviewTag = this.props.reviewCount === 0 ? 'Donnez votre avis'
                                                 : <a href="#" className="avis"> ({this.props.reviewCount} avis)</a> ;

    return <span> {starList} {reviewTag} </span>;
  }
}

export default ScoreComponent;
