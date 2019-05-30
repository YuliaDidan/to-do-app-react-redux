import { ADD_TASK, 
         DELETE_TASK, 
         COMPLETE_TASK, 
         CHANGE_TASK, 
         DELETE_COMPLETED_TASK, 
         BACK_TO_TASKS } from './types';


export const addTask = text => {
  return {
    type: ADD_TASK,
    payload: {
      id: Date.now(),
      text: text,
    }        
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id: id
    }
  };
};

export const completeTask = (id, text) => {
  return {
    type: COMPLETE_TASK,
    payload: {
      id: id,
      text: text
    }   
  };
};

export const changeTask = (id, text) => {
  return {
    type: CHANGE_TASK,
    payload: {
      id: id,
      text: text
    }  
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
    payload: {
      id: id,
      text: text
    } 
  };
}; 