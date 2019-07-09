import React, { useState } from 'react';
import './App.css';

// 引入相关组件
import InputBox from './components/InputBox';
import List from './components/List';
import FilterOptions from './components/FilterOptions';

function App() {
	// 定义所有的state
	const [inputValue, setValue] = useState('');	// 输入内容相关
	const [todoThings, setTodo] = useState([{ id: 1, text: '学习hook', done: true }]);	// 待办事项列表相关
	const [renderValue, setRenderValue] =  useState(1);		// 1为全部， 2为已完成， 3为未完成

	// 往下穿的对象
	const InputBoxProps = {
		inputValue,
		setValue,
		todoThings,
		setTodo,
	}
	const ListProps = {
		renderValue,
		todoThings,
		setTodo,
	}
	const optionsProps = {
		renderValue,
		setRenderValue,
	}

	return (
		<div className='box'>
			<h2>TODO计划表</h2>
			{/* 下面是三个组件 */}
			<InputBox {...InputBoxProps} />
			<List {...ListProps} />
			<FilterOptions {...optionsProps} />
		</div>
	);
}

export default App;
