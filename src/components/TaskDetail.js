import React from 'react';
import { connect } from 'react-redux';

const TaskDetail = ({ task }) => {
  if (!task) {
    return <div>Select a song</div>
  }
  return <div>{task.text}</div>
};

const mapStateToProps = state => {  
  return { task: state.selectedTask }
} 

export default connect(mapStateToProps)(TaskDetail);