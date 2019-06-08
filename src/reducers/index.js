import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { ADD_TASK,
         DELETE_TASK,
         COMPLETE_TASK,
         CHANGE_TASK,
         DELETE_COMPLETED_TASK,
         BACK_TO_TASKS } from '../actions/types';

const INITIAL_STATE = fromJS({ items: [], itemsCompleted: [] });

const tasks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newItems = state.get('items').toJS();
      newItems.push(action.payload);
      return state.set('items', fromJS(newItems));

    case DELETE_TASK:
      const items = state.get('items').toJS();
      const filteredItems = items.filter(({ id })=> id !== action.payload.id);
      return  state.set('items', fromJS(filteredItems));

    case COMPLETE_TASK:
      const itemsForFilter = state.get('items').toJS();
      const itemsFiltered = itemsForFilter.filter(({id}) => id !== action.payload.id);
      const itemsForComplete = state.get('itemsCompleted');
      const itemsCompleted = itemsForComplete.push(action.payload);

      return state
              .set('items', fromJS(itemsFiltered))
              .set('itemsCompleted', fromJS( itemsCompleted));

      case CHANGE_TASK:
      const getIndex = (arr, id) => {
        for (let el of arr) {
          if(el.id === id) {
             return arr.indexOf(el);
          };
        };
      };
      let itemsForChange = state.get('items').toJS();
      itemsForChange.splice(getIndex(state.get('items').toJS(), action.payload.id), 1, action.payload);
      return state.set('items', fromJS(itemsForChange));

      case DELETE_COMPLETED_TASK:
      const itemsCompletedAfterDelete = state.get('itemsCompleted').toJS().filter(({id}) => id !== action.id);
      return state.set('itemsCompleted', fromJS(itemsCompletedAfterDelete));

      case BACK_TO_TASKS:
      const itmesAdded = state.get('items').toJS();
      itmesAdded.push(action.payload);
      const itemsCompletedFiltered = state.get('itemsCompleted').toJS().filter(({id}) => id !== action.payload.id);

      return state
            .set('items', fromJS(itmesAdded))
            .set('itemsCompleted', fromJS(itemsCompletedFiltered));

      default:
      return state;
  };
};

export default combineReducers ({
  tasks: tasks
});

// export default tasks;
