import { Component } from 'react';

class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputs: this.props.inputs,
            // checked: false
        };
    };

    handleChange = e => {
        console.log(e.target)
        const { type, checked, value, name } = e.target;
        const val = type === 'checkbox' ? checked : value
        this.setState(ps => ({ 
            inputs : {
            ...ps.inputs,
            [name]: val
            }
        }));
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.submit(this.state.inputs);
        this.setState({ inputs: this.props.inputs });
    };

    render() {
        return this.props.render({
            inputs: this.state.inputs,
            checked: this.state.checked,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit
        })
    }
    
};


export default Form;