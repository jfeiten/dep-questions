import React, { Component } from 'react';
import FormSession1 from '../components/form-session/FormSession1';
import FormSession2 from '../components/form-session/FormSession2';
import Confirm from './Confirm';
import Welcome from './Welcome.component'

export default class UserForm extends Component {
    state = {
        step: 1,
        email: 'nenhum',
        questions: {
            s1: [0, 0, 0], 
            s2: [0, 0, 0]
        }
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

    handleChange = (session, i) => e => {
        const new_state = this.state.questions;
        new_state[session][i] = Number(e.target.value);
        
        this.setState({
            questions: new_state
        });
    };

    render() {
        const { step } = this.state;
        const { email, questions } = this.state;
        const current_values = { step, email, questions };

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
                    <FormSession2 nextStep={this.nextStep} prevStep={this.prevStep} values={current_values} handleChange = {this.handleChange}/>
                )
            case 4:
                return (
                    <Confirm nextStep={this.nextStep} prevStep={this.prevStep} />
                )
        }
   
    
    }
}

