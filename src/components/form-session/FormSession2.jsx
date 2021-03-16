import React, {Component} from 'react';

import NextPrevButtons from '../next-prev-button/next-prev-buttons.component';
import Question from '../question/question.component';
import content from '../../data/data';

export class FormSession2 extends Component {
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

        return (
            <React.Fragment>
           
            {
                content.filter((x, i) => [3, 4, 5].includes(i)).map((q, i) => (
                    <div>
                        <p />
                        <Question question={q.question}
                            options={q.options}
                            initial_value={values.questions.s2[i]}
                            s='s2'
                            n={i}
                            handleChange={this.props.handleChange} />
                        <br />
                        <p />

                    </div>

                ))
            }
           
            <NextPrevButtons back={this.back} continue = {this.continue} />
            
            </React.Fragment>
        );
    }
}

export default FormSession2;