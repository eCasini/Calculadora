import React from 'react'
import './Button.css'

// export default props => 
//     <button className='button'>{props.lable}</button>

export default props =>
    <button className= {` 
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
        `}
        onClick={e => props.click && props.click(props.lable)}>                      
        {props.lable}
    </button>
    