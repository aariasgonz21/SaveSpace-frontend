import React, { Component } from 'react';

class ReviewForm extends Component {

  state={
    name: '',
    establishment_name: this.props.establishment.name,
    women_rating: 1,
    poc_rating: 1,
    lgbtq_rating: 1,
    review: '',
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state.establishment_name)

    return (
      <div>
        <h1>Add Review For {this.state.establishment_name}</h1>

        <form className="ui form" onSubmit={(e) => {this.props.reviewSubmitHandler(e, this.state)}}>
        <div className="field">
          <label className="form-labels">Review Title</label>
          <input type="text" name="name" placeholder="Review Title" onChange={this.changeHandler}/>
        </div>

        <div className="field">
          <label className="form-labels">How inclusive is {this.props.establishment.name} to Women?</label>
          <select name="women_rating" className="ui fluid dropdown" onChange={this.changeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="n/a">n/a</option>
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
            <option value="n/a">n/a</option>
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
            <option value="n/a">n/a</option>
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
