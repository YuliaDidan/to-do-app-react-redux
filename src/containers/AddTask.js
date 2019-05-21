import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class AddTask extends React.Component {
  state = {text: ''}

  onChange = (event) => {       
    this.setState({text: event.target.value});    
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.text){
      this.props.addTask(this.state.text);
      this.setState({text: ''});
    }   
  }

  render() {    
    return <div>
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Task"          
          value={this.state.text}
          onChange={this.onChange} 
        />
        <button>Add task</button>
      </form>      
      </div>
  }
}

export default connect(null, { addTask })(AddTask);