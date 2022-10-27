import React from "react";
import trash from "../trash.svg";

const Task: React.FC<TaskProps> = props => {
	return (
		<div className='toDo'>
			<div className={props.done}>
			<span>{props.text}</span>
			<input type='checkbox' onChange={props.change}/>
			<img src={trash} onClick={props.delete} alt='Trash'/>
			</div>
		</div>
	)
}


interface TaskProps extends React.PropsWithChildren {
	text: string;
	id?: string;
	done: string;
	delete?: React.MouseEventHandler;
	change?: React.ChangeEventHandler<HTMLInputElement>;
}

export default Task;