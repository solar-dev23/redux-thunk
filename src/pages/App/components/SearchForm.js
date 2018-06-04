import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';
import renderField from './renderField';

const validate = (values) => {
  const errors = {};
  if (!values.keyword) {
    errors.keyword = 'Required';
  }
  return errors;
};

const SearchForm = ({ handleSubmit, pristine, submitting }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}>
      <Field
        name="keyword"
        component={renderField}
        type="text"
        label="Keyword"
        placeholder="Enter a keyword"
      />
      <div>
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'searchForm',
  validate,
})(SearchForm);
