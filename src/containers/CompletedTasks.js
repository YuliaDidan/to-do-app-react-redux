import React from 'react';
import { connect } from 'react-redux';
import CompletedTask from './CompletedTask';

const CompletedTasks = props => {
  const completedItems = props.itemsCompleted;
  let notesCompleted;
  if (completedItems.length > 0 ) {
      notesCompleted = completedItems.map((task) => {
        return (        
            <CompletedTask 
              key={task.id}
              index={task.id}
              task={task.text}            
            />       
        );
      });
    } else {
      notesCompleted = <p>You have yet to complete any tasks</p>
    }; 
    return <ul className="ui divided list" style={{margin: 0}}>{notesCompleted}</ul>
};

const mapStateToProps = state => {
  return  { itemsCompleted: state.tasks.itemsCompleted };
};

export default connect(mapStateToProps)(CompletedTasks);