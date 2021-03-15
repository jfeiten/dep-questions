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
                    content.filter((x,i) => [4, 5, 0].includes(i)).map((q) => (
                <div>
                <p />
                <Question question={q.question} options={q.options}/>
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