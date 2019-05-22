import { combineReducers } from 'redux';
import { ADD_TASK, 
         DELETE_TASK, 
         COMPLETE_TASK, 
         CHANGE_TASK, 
         DELETE_COMPLETED_TASK, 
         BACK_TO_TASKS } from '../actions/types';

const INITIAL_STATE = { items: [], itemsCompleted: [] };

const tasks = (state = INITIAL_STATE, action) => {
  switch (action.type) {    
    case ADD_TASK:         
      const todoItem = {id: action.id, text: action.text}
      return {...state, items: [...state.items, todoItem]};
    case DELETE_TASK:            
      const items = state.items.filter(({ id })=> id !== action.id)      
      return  {...state, items};      
    case COMPLETE_TASK:      
      const itemsToComplete = state.items.filter(({id}) => id !== action.id);      
      const itemCompleted = {id: action.id, text: action.text};      
      return {...state, items: itemsToComplete, itemsCompleted: [...state.itemsCompleted, itemCompleted]};
    case CHANGE_TASK:      
      const getIndex = (arr, id) => {
        for (let el of arr) {
          if(el.id === id) {
             return arr.indexOf(el);  
          };
        };
      }; 
        let itemsForChange = [...state.items];      
        itemsForChange.splice(getIndex(state.items, action.id), 1, action);
        return {...state, items: itemsForChange};
      case DELETE_COMPLETED_TASK:        
        const itemsCompletedAfterDelete = state.itemsCompleted.filter(({id}) => id !== action.id);
        return {...state, itemsCompleted: itemsCompletedAfterDelete};
      case BACK_TO_TASKS:       
        const itemsCompleted = state.itemsCompleted.filter(({id}) => id !== action.id);
        const itemToTask = {id: action.id, text: action.text}; 
        return {...state, items: [...state.items, itemToTask ], itemsCompleted: itemsCompleted};  
      default: 
      return state;
  };
};

export default combineReducers ({
  tasks: tasks  
});

// export default tasks;  
