import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { NavigateNext } from '@material-ui/icons';


export class Welcome extends Component {
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
            <div>

            <h1>Seja bem-vindo(a)!</h1>

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