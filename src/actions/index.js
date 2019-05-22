import { ADD_TASK, 
         DELETE_TASK, 
         COMPLETE_TASK, 
         CHANGE_TASK, 
         DELETE_COMPLETED_TASK, 
         BACK_TO_TASKS } from './types';


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
  return {
    type: CHANGE_TASK,
    id,
    text
  };
};

export const deleteCompletedTask = (id) => {
  return {
    type: DELETE_COMPLETED_TASK,
    id
  };
};

export const backToTasks = (id, text) => {  
  return {
    type: BACK_TO_TASKS,
    id,
    text
  };
}; 