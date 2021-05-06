import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)        
    }

    clearMemory() {
        console.log('limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }

    render() {
        return (
            <div className="calculator">
                <Display value={100}/>                
                <Button lable="AC" />                                
                <Button lable="/" />                            
                <Button lable="7" />                
                <Button lable="8" />                
                <Button lable="9" />                
                <Button lable="*" />                
                <Button lable="4" />                
                <Button lable="5" />                
                <Button lable="6" />                
                <Button lable="-" />                
                <Button lable="1" />                
                <Button lable="2" />                
                <Button lable="3" />                
                <Button lable="+" />                
                <Button lable="0" />                
                <Button lable="." />                
                <Button lable="=" />                
            </div>
        )
    }
}