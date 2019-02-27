// NavBar/Searchform
// establishments info
// ReviewCards

import React, { Component } from 'react';

class EstablishmentPage extends Component {

  render() {
    console.log("we made it lads")
    return (
      <div>
        <h1>{this.props.establishment.name}</h1>
      </div>
    );
  }

}

export default EstablishmentPage;
