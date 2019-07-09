import React from 'react';
import './index.css';

const renderArr = ['全部', '已完成', '未完成'];     // 定义出来简化书写

function FilterOptions(props) {
    let { renderValue, setRenderValue } = props;
    return (
        <div className='options'>
            {/* <button style={{backgroundColor: renderValue === 2 ? 'orange' : null}} onClick={() => setRenderValue(2)}>已完成</button>
            <button style={{backgroundColor: renderValue === 3 ? 'orange' : null}} onClick={() => setRenderValue(3)}>未完成</button>
            <button style={{backgroundColor: renderValue === 1 ? 'orange' : null}} onClick={() => setRenderValue(1)}>全部</button> */}
            {
                renderArr.map((item, idx) => {
                    return (
                        <button 
                            key={idx} 
                            style={{backgroundColor: renderValue === idx + 1 ? 'orange' : null}} 
                            onClick={() => setRenderValue(idx + 1)}
                        >{item}</button>
                    )
                })
            }
        </div>
    )
}

export default FilterOptions;