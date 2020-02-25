import React, { Component } from 'react'

class FlavoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            selected: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert('你喜欢的风味是: ' + this.state.selected);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>选择你喜欢的风味：
                    <select value={this.state.selected} onChange = {this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input  type="submit" value="submit" />
            </form>
        )
    }
}

export default FlavoForm;