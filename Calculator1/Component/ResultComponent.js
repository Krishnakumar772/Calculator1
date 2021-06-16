import React, { Component } from 'react'
import '../Ap.css'

export default class ResultComponent extends Component {
    render() {
        const {result} =this.props;
        return (
            <div className="result">
                <p>{result}</p>
                </div>
        )
    }
}
