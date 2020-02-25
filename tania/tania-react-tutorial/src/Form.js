import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
        }

        this.state = this.initialState;
    }

    // handleChange(event) {
    //     const { name, value } = event.target;

    //     console.log(name);

    //     // this.setState({
    //     //     [name]: value
    //     // })
    // }

    handleChange = event => {
        const { name, value } = event.target
      
        this.setState({
          [name]: value,
        })
      }

      submitForm = () => {
          this.props.handleSubmit(this.state);
          this.setState(this.initialState);
      }

    render() {
        const { name, job } = this.state;
        return (
            <form>
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    id="name"
                    onChange={this.handleChange}
                />

                <label for="job">job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}
                />
                <input type="button" onClick={this.submitForm} value="Submit"/>
            </form>
        )
    }
}

export default Form;