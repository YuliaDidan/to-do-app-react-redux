import React from 'react';
import TasksList from '../containers/TasksList';
import AddTask from '../containers/AddTask'

const App = () => {
  return (     
      <div className="ui container">
      <AddTask />
      <TasksList />
      </div>    
  ); 
};

export default App;