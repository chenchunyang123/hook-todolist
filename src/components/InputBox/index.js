import React from 'react';

// 添加一项的方法(参数： 输入框当前值和list事项的值)
const addOne = (value, all) => {
	return [...all, { id: new Date().getTime(), text: value, done: false }];
}

function InputBox(props) {
	let { inputValue, setValue, todoThings, setTodo } = props;
	return (
		<div>
			<input 
				placeholder='请输入待办事项' 
				type='text' 
				value={inputValue} 
				onChange={e => setValue(e.target.value)}
			/>
			<button 
				onClick={() => {
					inputValue && setTodo(addOne(inputValue, todoThings))
					// 增加完过后清空输入框
					setValue('')
				}}
			>ADD</button>
		</div>
	);
}

export default InputBox;
