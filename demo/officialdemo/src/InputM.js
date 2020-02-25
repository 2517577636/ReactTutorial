import React, { Component } from 'react'
import { tsThisType } from '@babel/types';

class InputM extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputMes: '',
        }
    }

    stateChangeHandle = (event) => {
        const { value } = event.target;
        this.setState({
            inputMes: value
        })
    }
    addItemHandle = () => {
       if (this.state.inputMes !== "") this.props.inputHandle(this.state.inputMes);
       this.setState({
           inputMes: ''
       });
    }


    render() {
        // const { inputMes } = this.state;
        return (
            <div className="inputM">
                <h3 className="title">Input your message</h3>
                <input type="text" name="input"  onChange={this.stateChangeHandle} />
                <div>
                    <button className="submit-btn" onClick={this.addItemHandle} >add item</button>
                </div>
            </div>
        )
    }
}

export default InputM;