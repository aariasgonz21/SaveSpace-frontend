import React, { Component } from 'react';
class SearchForm extends Component {

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.props.submitHandler}>
          <div className="three fields">
            <div className="field ui input focus term">
            <input value={this.props.term} onChange={this.props.changeHandler} type="" placeholder="ie. Cocktail Bar" name="term"/>
            </div>
            <div className="field ui input focus">
              <select name="location" className="ui fluid dropdown" onChange={this.props.changeHandler}>
                <option value="Queens">Queens</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Bronx">Bronx</option>
                <option value="Staten-Island">Staten Island</option>
              </select>
            </div>
            <div className="button">
              <button className="submit ui button black"> Search</button>
           </div>
         </div>
        </form>
      </div>
    );
  }

}

export default SearchForm;
