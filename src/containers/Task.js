import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';

const Task = ({ task, index }) => {
  
const removeTask = () => deleteTask(index);
  
  return  <form>
            <input defaultValue={task} index={index} readOnly />
            <button type="button">
              Save
            </button>            
            <button type="button">              
              Complete
            </button>            
            <button type="button" onClick={removeTask}>
              Delete
            </button>
          </form>  
}

export default connect(null, { deleteTask })(Task);




