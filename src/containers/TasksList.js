import React from 'react';
import { connect } from 'react-redux';
import Task from './Task'

const TasksList = props => {
  let renderList = () => {    
    return props.items.map((task) => {
      return (        
          <Task 
            key={task.id}
            index={task.id}
            task={task.text}            
          />       
      );
    });
  }
           
    return (
  <div className="ui divided list">{renderList()}</div>
    ) 
  
}

// const mapDispatchToProps = {
//   deleteTask: deleteTask
// }

// const mapStateToProps = state =>({
//   // console.log('state', state)
//   items: state.tasks.items
// })

const mapStateToProps = state => {
  console.log('stateItems', state)
  return {items: state.tasks.items}
}

export default connect(mapStateToProps)(TasksList);
