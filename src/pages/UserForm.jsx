import React, { Component } from 'react';
import FormSession1 from '../components/form-session/FormSession1';
import FormSession2 from '../components/form-session/FormSession2';
import Confirm from './Confirm';
import Welcome from './Welcome.component'

export default class UserForm extends Component {
    state = {
        step: 1,
        email: 'nenhum',
        questions: [2, 2, 2, 2, 2]
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
        this.setState({[input]: Number(e.target.value) });
        console.log('input:', input, Number(e.target.value));
        console.log(this.state);
    };

    render() {
        const { step } = this.state;
        const { email, questions } = this.state;
        const current_values = { email, questions };

        switch(step) {
            case 1:
                return(
                    <Welcome nextStep={this.nextStep} values = {current_values}/>   
                )
            case 2:
                return(
                    <FormSession1 nextStep={this.nextStep} prevStep={this.prevStep} values={current_values} handleChange = {this.handleChange}/> 
                )
            case 3:
                return (
                    <FormSession2 nextStep={this.nextStep} prevStep={this.prevStep} />
                )
            case 4:
                return (
                    <Confirm nextStep={this.nextStep} prevStep={this.prevStep} />
                )
        }
   
    
    }
}

