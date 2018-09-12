import React from 'react';

const Input = ({title, state, name}, onChange) => {
    return (
        <div className='input'>
            <input key ={name} name ={name} value={state} onChange={onChange}/>
            <label>{title}</label>
        </div>
    )
}

export default Input;