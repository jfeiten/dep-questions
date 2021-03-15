import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// add  onChange={handleChange} in RadioGroup

class Question extends Component {

    render() {

        const values = this.props.values;

        return (
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">{this.props.question}</FormLabel>
                    <RadioGroup aria-label="animal" name="animal1" onChange={this.props.handleChange} value={this.props.initial_value}>
                        {
                            this.props.options.map((option) => (

                                <FormControlLabel value={option.value}
                                    control={<Radio required={true} />}
                                    label={option.label}
                                />

                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

export default Question;