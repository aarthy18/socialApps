import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(formProps) {
    this.props.createPost(formProps)
    .then(
      () => {
        this.context.router.push("/");
      });
  }

  render() {
    const { fields: { name, description, timestamp, location, createdBy, tags }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>New Activity</h3>
        <div className={`form-group ${name.invalid && name.touched ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...name}/>
          <div className="text-help">
            { name.touched ? name.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea type="text" className="form-control" {...description}/>
          <div className="text-help">
            { description.touched ? description.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>When</label>
          <input className="form-control" {...timestamp}/>
          <div className="text-help">
            { timestamp.touched ? timestamp.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Where</label>
          <input className="form-control" {...location}/>
          <div className="text-help">
            { location.touched ? location.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Tags</label>
          <input className="form-control" {...tags}/>
          <div className="text-help">
            { tags.touched ? tags.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Create</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a title";
  }

  if(!values.category) {
    errors.category = "Enter a category";
  }

  if(!values.content) {
    errors.content = "Enter content";
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['name', 'description', 'timestamp', 'location', 'createdBy', 'tags'],
  //validate
}, null, { createPost })(PostsNew);
