import React from 'react';
import { connect } from 'react-redux';
import CompletedTask from './CompletedTask';

const CompletedTasks = props => {
  const completedItems = props.itemsCompleted;
  let notesCompleted = completedItems.length > 0 ? (completedItems.map((task) => {
    return (        
        <CompletedTask 
          key={task.id}
          index={task.id}
          task={task.text}            
        />       
    )}
  )) : (
    <p>You have yet to complete any tasks</p>
  );
  
  return <ul className="ui divided list" style={{margin: 0}}>{notesCompleted}</ul>
};

const mapStateToProps = state => {
  return  { itemsCompleted: state.tasks.get('itemsCompleted').toJS()};
};

export default connect(mapStateToProps)(CompletedTasks);