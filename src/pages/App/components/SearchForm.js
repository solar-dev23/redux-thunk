import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button,FormGroup } from 'reactstrap';
import renderField from './renderField';

const validate = (values) => {
  const errors = {};
  if (!values.keyword) {
    errors.keyword = 'Required';
  }
  return errors;
};

const SearchForm = ({ handleSubmit, pristine, submitting/*, fields: {keyword}*/ }) => {
  
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
        //{...keyword}
      />
      <div>
        <FormGroup>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </FormGroup>
      </div>
    </form>
  );
};
/*function mapStateToProps(state){
  return {
    initialValues: {'keyword':'some'}
  }
}*/
export default reduxForm({
  form: 'searchForm',
  validate,
  //fields: ['keyword']
}/*, mapStateToProps*/ )(SearchForm);
