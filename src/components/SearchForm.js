import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SearchForm = (props) => {
  const {
    handleSubmit, pristine, submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="search">Search:</label>
        <Field
          name="search"
          id="search"
          component="input"
          type="text"
          placeholder="Search for images..."
        />
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'searchForm', // a unique identifier for this form
})(SearchForm);
