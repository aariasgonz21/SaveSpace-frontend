import React from 'react';

function SearchResults(props) {
    return (
      <div className="box" onClick={(e) => props.clickHandler(e, props.result)}>
        <img className="search-img" alt={props.result.name} src={props.result.image_url}/>
        <h2 className="search-text">{props.result.name}</h2>
        <h3 className="search-text">
        {props.result.location.address1}</h3>
        <h3 className="search-text pt2">
        {props.result.location.city}, {props.result.location.state} {props.result.location.zip_code}</h3>
        <h3 className="search-text pt3">
        {props.result.phone}</h3>
        <div className="search-rating-bar">
          <h3 className="five wide column"><span className="search-rating">{
          props.result.poc ? props.result.poc : 'n/a' }</span> POC Friendly</h3>
          <h3 className="five wide column"><span className="search-rating">{props.result.women ? props.result.women : 'n/a'}</span> Women Friendly</h3>
          <h3 className="five wide column"><span className="search-rating">{props.result.lgbtq ? props.result.lgbtq : 'n/a'}</span> LGBTQ Friendly</h3>
        </div>
      </div>
    );
}
export default SearchResults;
