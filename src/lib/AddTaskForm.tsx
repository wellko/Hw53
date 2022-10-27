import React from "react";

const AddTaskForm: React.FC<AddTaskProps> = (props) => {
	return (<div>
		<form className="form" onSubmit={props.onSubmit}>
			<input placeholder="Add new task" type='text' name='input'/>
			<button type="submit" className="addBtn">Add</button>
		</form>
	</div>)
}

interface AddTaskProps extends React.PropsWithChildren {
	onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default AddTaskForm;