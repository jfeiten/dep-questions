import React from 'react';
import { Grid } from '@material-ui/core';

import Header from './components/header/Header';
import UserForm from './pages/UserForm';

class App extends React.Component {
  
  render() {
    
    return(
      <div className = 'App'>
      <Grid container direction='column'>
        <Grid item> <Header /> </Grid>
        <Grid item container>
          <Grid item xs={1} sm={3} />
          <Grid item xs={10} sm={6}>
          <UserForm />
          </Grid>
          <Grid item xs={1} sm={3} />
       
        </Grid>
      </Grid>
       
      
      </div>
    )
  }
}

export default App;
