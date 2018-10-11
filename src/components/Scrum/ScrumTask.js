import React from "react";
import { DragSource } from "react-dnd";

const ScrumTaskSource = {
  beginDrag(props) {
    console.log("drag");
    return props.task;
  },
  endDrag(props, monitor, component) {
    console.log(props.task.id);
    return props.handleDrop(props.task.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class ScrumTask extends React.Component {
  render() {
    const { isDragging, connectDragSource, task } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div className="scrum-task-page" style={{ opacity }}>
        <span>Задача: {task.name}</span>
        <span>Описание: {task.description}</span>
        <span>Приоритет: {task.priority}</span>
      </div>
    );
  }
}

export default DragSource("column", ScrumTaskSource, collect)(ScrumTask);
