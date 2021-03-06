import React from 'react';
import AddTask from '../containers/AddTask';
import TasksList from '../containers/TasksList';
import CompletedTasks from '../containers/CompletedTasks'


const App = () => {
  return (     
      <div className="ui container">
      <AddTask />
      <TasksList />
      <CompletedTasks />
      </div>    
  ); 
};

export default App;