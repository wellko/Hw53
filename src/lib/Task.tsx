import React from "react";
import trash from "../trash.svg";

const Task: React.FC<TaskProps> = props => {
	return (
		<div className='toDo'>
			<span>{props.text}</span>
			<img src={trash} onClick={props.delete} alt='Trash'/>
		</div>
	)
}


interface TaskProps extends React.PropsWithChildren {
	text: string;
	id: string;
	delete?: React.MouseEventHandler;
}

export default Task;