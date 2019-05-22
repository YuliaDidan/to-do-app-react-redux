import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_TASK } from './types';


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

export const completeTask = (id, text) => {
  return {
    type: COMPLETE_TASK,
    id,
    text
  };
};

export const changeTask = (id, text) => {
  console.log('id', id, 'text', text);
  return {
    type: CHANGE_TASK,
    id,
    text
  }
}


export const selectTask= (task) => {
  // Return an action
  return {
    type: 'TASK_SELECTED',
    payload: task
  };
};