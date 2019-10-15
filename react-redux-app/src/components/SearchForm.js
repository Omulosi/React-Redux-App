import React, { useState } from 'react';
import * as actionCreators from '../state/actionCreators';
import { connect } from 'react-redux';
import * as actions from '../state/actions';

const SearchForm = (props) =>  {

  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = location;
    props.updateLocation(newLocation);
    setLocation('');
  }

  const handleChange = (e) => {
      setLocation(e.target.value);
  }

  return (
    <div className="search-form">
      <form id="user-location" onSubmit={handleSubmit}>
        <input type="text" name="location" id="location" value={location}
          onChange={handleChange}/>
        <button type="submit" className="btn">Search</button>
      </form>
    </div>
  );
}


export default connect(
  state => state,
  actionCreators
)(SearchForm);

