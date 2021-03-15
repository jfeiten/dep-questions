import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { NavigateNext } from '@material-ui/icons';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export class Welcome extends Component {
    
    state = {
        q0: 1
    }
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    handleChange = input => e => {
        this.setState({[input]: Number(e.target.value) });
        console.log('input:', input, Number(e.target.value));
        console.log(this.state);
    };

    render() {
        
        return (
            <div>

            <h1>Welcome {this.props.values.email}</h1>

                <FormControl component="fieldset">
                    <FormLabel component="legend">Isso é difícil?</FormLabel>
                    <RadioGroup aria-label="kkkkk" name="animal1" onChange={this.handleChange('q0')} value={this.state.q0}>
                        
                        <FormControlLabel value={1}
                            control={<Radio required={true} />}
                            label='No'
                        />

                        <FormControlLabel value={2}
                            control={<Radio required={true} />}
                            label='Yes'
                        />
                    
                        </RadioGroup>
                </FormControl>

            <Button
                variant="contained"
                color="default"
                startIcon={<NavigateNext />}
                onClick={this.continue}>
                Next
                </Button>

            </div>
        );
    }
}

export default Welcome;