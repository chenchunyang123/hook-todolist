import React from 'react';
import './index.css';

// 改变当前选中的change方法(参数：当前点击的text值以及渲染的所有数组值)
const changeDone = (id, all) => {
	all.forEach(item => {
		if(item.id === id) {
			item.done = !item.done;
		}
	})
	// 返回新的渲染数组(直接返回all的话不会进行更新，会造成修改的数据丢失)
	return [...all];
}

// 删除某一个事件的方法
const deleteOne = (id, all) => {
	let newArr = all.filter(item => item.id !== id);
	return [...newArr];
}

// 根据条件过滤todo的方法
const filterTodo = (value, all) => {
	switch (value) {
		case 1:
			return all;
		case 2: 
			return all.filter(item => item.done === true);
		case 3:
			return all.filter(item => item.done === false);
		default:
			throw new Error('过滤条件错误');
	}
}

function List(props) {
	let { renderValue, todoThings, setTodo } = props;
	// 根据renderValue过滤一次todoThings数组
	let renderArr = filterTodo(renderValue, todoThings);
	return (
		<ul className='listWrap'>
			{
				renderArr.length ? 
				renderArr.map((item, idx) => {
					return (
						<li key={idx} style={{width: '200px'}}>
							<div
								style={{
									textDecoration: item.done ? 'line-through' : 'none',
									float: 'left',
								}}
								onClick={() => setTodo(changeDone(item.id, todoThings))}
							>{item.text}</div>
							<div 
								className='close'
								onClick={() => setTodo(deleteOne(item.id, todoThings))}
							>X</div>
						</li>
					)
				}) :
				null
			}
		</ul>
	);
}

export default List;
