import { combineReducers } from 'redux';
import { ADD_TASK, DELETE_TASK } from '../actions/types';

// const tasksReducer = () => {
//   return [
//     { text: 'Wash floor', id: '1'},
//     { text: 'Cook dinner', id: '2'},
//     { text: 'Iron clothes', id: '3'},
//     { text: 'Go shopping', id: '4'},
//     { text: 'Go walking outside', id: '5'}
//   ];
// };

const INITIAL_STATE = { items: [] } ;

const tasks = (state = INITIAL_STATE, action) => {
  switch (action.type) {    
    case ADD_TASK:
      // фіconsole.log('action', action) 
      const todoItem = {id: action.id, text: action.text}
      return {...state, items: [...state.items, todoItem]}
    case DELETE_TASK: 
      console.log('action', action)     
      const items = state.items.filter(({ id })=> id !== action.id)      
      return  {...state, items};     
    
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
