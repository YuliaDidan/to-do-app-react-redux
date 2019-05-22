import React from 'react';
import { connect } from 'react-redux';
import Task from './Task'

const TasksList = props => {
  const tasks = props.items;
  let notesRendered;    
  if (tasks.length > 0) {
    notesRendered = tasks.map((task) => {
        return (        
            <Task 
              key={task.id}
              index={task.id}
              task={task.text}            
            />       
        );
      });
    } else {
    notesRendered = <p>You have nothing to-do</p>
  } 
           
    return (
  <div className="ui divided list">{notesRendered}</div>
    ) 
  
}

const mapStateToProps = state => {
  return {items: state.tasks.items}
}

export default connect(mapStateToProps)(TasksList);