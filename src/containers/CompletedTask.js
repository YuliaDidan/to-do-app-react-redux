import React from 'react';
import { connect } from 'react-redux';
import { deleteCompletedTask, backToTasks } from '../actions';

const CompletedTask = ({ task, index, deleteCompletedTask, backToTasks }) => {
  const removeTask = () => deleteCompletedTask(index);
  const returnToTask = () => backToTasks(index, task);

  return <form>
            <input value={task} index={index} readOnly />
            <button type="button" onClick={removeTask}>
              Delete
            </button>
            <button type="button" onClick={returnToTask}>
              Back to Tasks
            </button>
          </form>
}

export default connect(null, { deleteCompletedTask, backToTasks })(CompletedTask);

