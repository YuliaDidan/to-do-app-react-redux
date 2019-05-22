import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, completeTask, changeTask } from '../actions';

class Task extends React.Component {
  state = {task: ""}

onChange = (e) => {
  this.setState({task: e.target.value});
}

onFormSubmit = (event) => {
  event.preventDefault();
  if(this.state.task){
    this.props.changeTask(this.props.index, this.state.task);
    this.setState({task: ''});
  }   
}
  
removeTask = () => this.props.deleteTask(this.props.index);
toCompleteTask = () => this.props.completeTask(this.props.index, this.props.task);
  
render() {  return (  
          <form onSubmit={this.onFormSubmit}>
            <input defaultValue={this.props.task} index={this.props.index} onChange={this.onChange} />
            <button type="submit">
              Save
            </button>            
            <button type="button" onClick={this.toCompleteTask}>              
              Complete
            </button>            
            <button type="button" onClick={this.removeTask}>
              Delete
            </button>
          </form>
    )  
  }
}

export default connect(null, { deleteTask, completeTask, changeTask })(Task);




