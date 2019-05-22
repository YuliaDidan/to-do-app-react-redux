import React from 'react';
// import { connect } from 'react-redux';
// import { completeTask } from '../actions';

const CompletedTask = ({ task, index }) => {
  return <form>
            <input value={task} index={index} readOnly />
            <button type="submit">
              Delete
            </button>
            <button type="submit">
              To Tasks
            </button>
          </form>
}

export default CompletedTask;

