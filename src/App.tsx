import React, {useState} from 'react';
import './App.css';
import Task from "./lib/Task";
import AddTaskForm from "./lib/AddTaskForm";


function App() {
	const [task, setTask] = useState([
		{text: 'Wake up', id: '99'},
		{text: 'Go to the bathroom', id: '100'}
	])

	const AddTask = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newBlock = {...task[0]};
		newBlock.text = event.target.input.value;
		const newBlockCopy = [...task];
		newBlockCopy.push(newBlock);
		setTask(newBlockCopy);
		event.target.input.value = '';
	}

	const deleteTask = (index: number) => {
		const taskCopy = [...task];
		taskCopy.splice(index, 1);
		setTask(taskCopy);
	}

	let Tasks = (
		<div>
			{task.map((task, i) => (
				<Task
					key={i}
					text={task.text}
					id={i.toString()}
					delete={() => deleteTask(i)}
				/>
			))}
		</div>
	);

	return (
		<div className="App">
			<AddTaskForm onSubmit={AddTask}/>
			{Tasks}
		</div>
	);
}

export default App;
