import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

import NextPrevButtons from '../next-prev-button/next-prev-buttons.component';
import Question from '../question/question.component';
import content from '../../data/data';

export class FormSession1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };



    render() {
        const { values, handleChange } = this.props;
        console.log(content[1].question)

        return (
            <React.Fragment>

                {/* email */}
                <p />
                <TextField
                    variant="outlined"
                    label='Seu melhor e-mail'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    fullWidth
                />
                <br />
                <p />

                {
                    content.filter((x,i) => [0, 1, 2].includes(i)).map((q) => (
                <div>
                <p />
                <Question question={q.question} options={q.options} />
                <br />
                <p />

                </div>
                
                    ))
                }
               
                <NextPrevButtons back={this.back} continue={this.continue} />

            </React.Fragment>
        );
    }
}

export default FormSession1;