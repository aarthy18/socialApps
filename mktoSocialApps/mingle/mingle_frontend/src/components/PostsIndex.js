import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/index';
import { Link } from 'react-router';
import ReactTable from "react-table";

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderActivities() {

      const data = [{
        id: '1',
        name: 'Poker',
        description: '$5 buy in, bring your own beer',
        timestamp: '11/12/2018 5:00pm',
        location: 'Leonardo 6th floor',
        createdBy: 'Charu',
        tags: ''
      },
      {
        id: '2',
        name: 'Movie night',
        description: '',
        timestamp: '11/13/2018 6:00pm',
        location: 'Theatre',
        createdBy: 'Aarthy',
        tags: ''
      }]

      const columns = [{
        Header: 'Activity',
        accessor: 'name'
      }, {
        Header: 'When',
        accessor: 'timestamp',
        //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        Header: 'Where',
        accessor: 'location'
      }, {
        Header: 'Owner',
        accessor: 'createdBy'
      }]

      return (
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
        />
      );
  }

  render() {
    return (
      <div>
        <div>
          <h3>All Activities</h3>
          {this.renderActivities()}
          <Link to="/posts/new" className="btn btn-primary">
          Add a post
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
 return { posts: state.posts.all };
}

export default connect (mapStateToProps, {fetchPosts})(PostsIndex);
