import React from 'react'

const InputItem = (props) => {
  return (
    <div className={props.clase}>
        <label htmlFor="" className={props.labelClass}>{props.label}</label>
        <input type="text" className={props.inputClass} />
    </div>
  )
}

export default InputItem