import React, {useState} from 'react';
import './App.css';
import Task from "./lib/Task";
import AddTaskForm from "./lib/AddTaskForm";


function App() {
	const [task, setTask] = useState([
		{text: 'Wake up', id: '0', done: ''},
		{text: 'Go to the bathroom', id: '1', done: ''}
	])

	const AddTask = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newBlock = {...task[0]};
		newBlock.text = event.target.input.value;
		const newBlockCopy = [...task];
		newBlockCopy.push(newBlock);
		setTask(newBlockCopy);
		event.target.input.value = '';
		setChecked(new Array(task.length + 1).fill(false))
	}

	const deleteTask = (index: number) => {
		const taskCopy = [...task];
		taskCopy.splice(index, 1);
		setTask(taskCopy);
	}


	let [checked, setChecked] = useState(new Array(task.length).fill(false));

	const changeCheckBox = (position: number) => {
		const newCheck = checked.map((item, index) => (index === position)? !item : item)
		setChecked(newCheck);
	}


	let Tasks = (
		<div>
			{task.map((task, i) => (
				<Task
					done={checked[i] ? 'done' : ''}
					key={i}
					text={task.text}
					delete={() => deleteTask(i)}
					change={() => changeCheckBox(i)}
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
