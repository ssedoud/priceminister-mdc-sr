import React from 'react';


class QualityComponent extends React.Component {

  getQuality(quality) {
    switch (quality) {
      case "NEW":
        return "Neuf";
      case "LIKE_NEW":
        return "Comme neuf";
      case "VERY_GOOD":
        return "Très bon état";
      case "GOOD":
        return "Bon état";
      case "LIKE_NEW":
        return "Etat correct";
      case "OUT_OF_ORDER":
        return "Hors service";
    }
  }

  render() {
    return <span>{this.getQuality(this.props.quality)}</span>;
  }
  
}

export default QualityComponent;
