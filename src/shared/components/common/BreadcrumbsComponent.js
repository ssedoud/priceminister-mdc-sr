import React from 'react';


class BreadcrumbsComponent extends React.Component {

  renderBreadcrumbs() {
    var displayedBreadcrumb = [];
    var breadcrumbsSize = this.props.breadcrumbs.length;

    for (var i = 0; i < breadcrumbsSize; i++) {
      if (i > 0) {
        displayedBreadcrumb.push(this.props.breadcrumbs[i].label);
        if (i < (breadcrumbsSize - 1)) {
          displayedBreadcrumb.push(" > ");
        }
      }
    }
    return <span>{displayedBreadcrumb}</span>;
  }

  render() {
    console.log(this.props.breadcrumbs);

    if (typeof this.props.breadcrumbs === "undefined") {
      return <span></span>
    } else {
      return <span>{this.renderBreadcrumbs()}</span>;
    }
  }
}

export default BreadcrumbsComponent;
