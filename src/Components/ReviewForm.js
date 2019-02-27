import React, { Component } from 'react';

class ReviewForm extends Component {

  state={
    name: '',
    women_rating: 0,
    poc_rating: 0,
    lgbtq_rating: 0,
    review: '',
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Add Review For {this.props.establishment.name}</h1>

        <form className="ui form" onSubmit={(e) => {this.props.reviewSubmitHandler(e, this.state)}}>
        <div className="field">
          <label className="form-labels">Name</label>
          <input type="text" name="name" placeholder="Name" onChange={this.changeHandler}/>
        </div>

        <div className="field">
          <label className="form-labels">How inclusive is {this.props.establishment.name} to Women?</label>
          <select name="women_rating" className="ui fluid dropdown" onChange={this.changeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="field">
          <label className="form-labels">How inclusive is {this.props.establishment.name} to People of Color?</label>
          <select name="poc_rating" className="ui fluid dropdown" onChange={this.changeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="field">
          <label className="form-labels">How inclusive is {this.props.establishment.name} to the LGBTQ Community?</label>
          <select name="lgbtq_rating" className="ui fluid dropdown" onChange={this.changeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="field">
          <label className="form-labels">Review</label>
          <textarea rows="4" cols="50" placeholder="Review" name="review" onChange={this.changeHandler}/>
        </div>

        <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default ReviewForm;
