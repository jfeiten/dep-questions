import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// add  onChange={handleChange} in RadioGroup

const Question = (props) => (
    <FormControl component="fieldset">
        <FormLabel component="legend">{props.question}</FormLabel>
        <RadioGroup aria-label="animal" name="animal1">
            {
                props.options.map((option) => (

                    <FormControlLabel value={option.value} control={<Radio required={true} />} label={option.label} />

                ))
            }
        </RadioGroup>
    </FormControl>
)

export default Question;