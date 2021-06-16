import React, { Component } from 'react'
import KeypadComponet from './Component/KeypadComponet'
import ResultComponent from './Component/ResultComponent'

import './Ap.css';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            result:""
        }
    }
    addToInput = button => {
        if(button==="="){
            this.calculate()

        }else if(button==="C"){
            this.reset()

        }else if(button==="CE"){
            this.backspace()
        } else {
            this.setState({
                result:this.state.result + button
            })
        }

    }
     calculate = () => {
         try{
             this.setState({
                 result:(eval(this.state.result) || '') +""
             })
         } catch(e){
           this.setState({
               result:"Error"
           })
         }

     }
     reset = () => {
         this.setState({
             result:""
             })
     }
       backspace= () => {
           this.setState({
               result:this.state.result.slice(0,-1)
           })
       }



    render() {
        return (
            <div className="calc-body">
               <h1> Simple Calculator</h1>
             
                <ResultComponent result={this.state.result} />
                <KeypadComponet  addToInput={this.addToInput}/>

                
            </div>
        )
    }
}
