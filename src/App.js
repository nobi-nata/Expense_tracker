import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import {
  PushToTalkButton,
  PushToTalkButtonContainer
} from '@speechly/react-ui';
import { useSpeechContext } from '@speechly/react-client';

import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const { listening } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (listening) {
      executeScroll();
    }
  }, [listening]);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems='center'
        justifyContent='center'
        style={{
          height: '100vh',
        }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title='Income' />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title='Expense' />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        {/* <ErrorPanel /> */}
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
