import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const TasksList = props => {
  const tasks = props.items;
  let tasksRendered =  tasks.length > 0 ? (tasks.map((task) => {
    return (
        <Task
          key={task.id}
          index={task.id}
          task={task.text}
        />
    );
  })) : (
    <p>You have nothing to-do</p>
  )

    return (
  <div className="ui divided list">{tasksRendered}</div>
    )

}

const mapStateToProps = state => {
  return {
    items: state.tasks.get('items').toJS()
  }
}

export default connect(mapStateToProps)(TasksList);
