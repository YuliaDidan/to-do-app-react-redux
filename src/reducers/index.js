import { combineReducers } from 'redux';
import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_TASK } from '../actions/types';

const INITIAL_STATE = { items: [], itemsCompleted: [] } ;

const tasks = (state = INITIAL_STATE, action) => {
 
  switch (action.type) {    
    case ADD_TASK:         
      const todoItem = {id: action.id, text: action.text}
      return {...state, items: [...state.items, todoItem]}
    case DELETE_TASK:            
      const items = state.items.filter(({ id })=> id !== action.id)      
      return  {...state, items};      
    case COMPLETE_TASK:      
      const itemsToComplete = state.items.filter(({id}) => id !== action.id);      
      const itemCompleted = {id: action.id, text: action.text};      
      return {...state, items: itemsToComplete, itemsCompleted: [...state.itemsCompleted, itemCompleted]};
    case CHANGE_TASK:
      console.log('action', action);
      const getIndex = (arr, id) => {
        for (let el of arr) {
          if(el.id === id) {
             return arr.indexOf(el)  
          }
        }
      } 
      let itemsForChange = [...state.items];      
      itemsForChange.splice(getIndex(state.items, action.id), 1, action);
        return {...state, items: itemsForChange};    
    default: 
      return state;
  }
}


// const selectedTaskReducer = (selectedTask=null, action) => {
//   switch (action.type){
//     case 'TASK_SELECTED':
//       return action.payload;
//     default:
//       return selectedTask;
//   } 
// };

export default combineReducers ({
  tasks: tasks  
});

// export default tasks;  
