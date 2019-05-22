import React from 'react';
import { connect } from 'react-redux';
import CompletedTask from './CompletedTask';


const CompletedTasks = props => {
  let renderList = () => {    
    return props.items.map((task) => {
      return (        
          <CompletedTask 
            key={task.id}
            index={task.id}
            task={task.text}            
          />       
      );
    });
  }
      
    return <ul className="ui divided list" style={{margin: 0}}>{renderList()}</ul>
  
}

const mapStateToProps = state => {
  // console.log('itemsCompleted', state)
  return  { items: state.tasks.itemsCompleted }
}

export default connect(mapStateToProps)(CompletedTasks);