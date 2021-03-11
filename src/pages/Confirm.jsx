import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { NavigateBefore, ExitToApp } from '@material-ui/icons';



export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    };
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {

        return (
            <React.Fragment>
                <p /> Thank you for participating. <p />
                
                <Button
                variant="contained"
                color="default"
                startIcon={<NavigateBefore />}
                onClick={this.back}>
                Back
                </Button>

                <Button
                variant="contained"
                color="primary"
                startIcon={<ExitToApp />}
                >
                Sign out!
                </Button>



            </React.Fragment>
        );
    }
}

export default Confirm;