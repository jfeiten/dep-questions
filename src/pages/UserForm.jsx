import React, { Component } from 'react';
import FormSession1 from '../components/form-session/FormSession1';
import FormSession2 from '../components/form-session/FormSession2';
import Confirm from './Confirm';
import Welcome from './Welcome.component'

export default class UserForm extends Component {
    state = {
        id: this.props.id,
        token: this.props.token,
        step: 1,
        email: '',
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const { step } = this.state;
        const { q1, q2, q3, q4, q5, q6 } = this.state;
        const values = { q1, q2, q3, q4, q5, q6 };

        switch(step) {
            case 1:
                return(
                    <Welcome nextStep={this.nextStep} id={this.props.id} />   
                )
            case 2:
                return(
                    <FormSession1 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} /> 
                )
            case 3:
                return (
                    <FormSession2 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            case 4:
                return (
                    <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />
                )
        }
   
    
    }
}

