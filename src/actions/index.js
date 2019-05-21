import { ADD_TASK, DELETE_TASK } from './types';


export const addTask = text => {
  return {
    type: ADD_TASK,
    id: Date.now(),
    text    
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id
  };
};

export const selectTask= (task) => {
  // Return an action
  return {
    type: 'TASK_SELECTED',
    payload: task
  };
};