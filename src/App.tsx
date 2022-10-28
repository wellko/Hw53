import React, {useState} from 'react';
import './App.css';
import Task from "./lib/Task";
import AddTaskForm from "./lib/AddTaskForm";


function App() {

	const [task, setTask] = useState([
		{text: 'Wake up', id: '0', done: 'flexBox', checked: false},
		{text: 'Go to the bathroom', id: '1', done: 'flexBox', checked: false}
	])

	const AddTask = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		let number = 0;
		const newBlock = {...task[task.length - 1]};
		newBlock.text = event.target.input.value;
		if (task.length > 0){
			number = parseInt(newBlock.id);
		}
		newBlock.id = (number + 1).toString();
		newBlock.checked = false;
		const newBlockCopy = [...task];
		newBlockCopy.push(newBlock);
		setTask(newBlockCopy);
		event.target.input.value = '';
	}

	const deleteTask = (index:string) => {
		const taskCopy = [...task];
		const rightTask = taskCopy.find(task => task.id === index)!
		taskCopy.splice(taskCopy.indexOf(rightTask), 1);
		setTask(taskCopy);
	}


	const changeCheckBox = (id: string) => {
		const newCheck = task.map((item) => {
			if (item.id === id){
				return item.checked = !item.checked;
			} return false
		})
		const rightTask = task.find(task => task.id === id)!
		const rightTaskIndex = task.indexOf(rightTask);
		const newChecked = {...task[rightTaskIndex]};
		newChecked.checked = newCheck[rightTaskIndex];
		const taskCopy = [...task];
		taskCopy[rightTaskIndex] = newChecked;
		setTask(taskCopy);
	}


	let Tasks = (
		<div>
			{task.map((task, i) => (
				<Task
					done={task.checked ? 'flexBox done' : 'flexBox'}
					key={i}
					text={task.text}
					delete={() => deleteTask(task.id)}
					change={() => changeCheckBox(task.id)}
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
