import React from 'react';

import Button from '@material-ui/core/Button';

import { NavigateNext, NavigateBefore } from '@material-ui/icons';

const NextPrevButtons = (props) => (
    <div>
    
    <Button
    variant="contained"
    color="default"
    startIcon={<NavigateBefore />}
    onClick={props.back}>
    Back
    </Button>

    <Button
    variant="contained"
    color="default"
    startIcon={<NavigateNext />}
    onClick={props.continue}>
    Next
    </Button>

    </div>
    
    
)

export default NextPrevButtons;