import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

import { observer } from 'mobx-react-lite';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
 
  return (
    <Fragment >
       <Route path='/' exact component={HomePage} />
       <Route 
       path={'/(.+)'}
      render={() => (
          <>
          <NavBar />
                <Container style={{ marginTop: '7em' }}>
                
                
                  <Route path='/activities' exact component={ActivityDashboard} />
                  <Route path='/activities/:id' component={ActivityDetails} />
                  <Route key={location.key} path={['/createActivity','/manage/:id']} component={ActivityForm} />
                </Container>
          </>

       )}       
       />
      

    </Fragment>
  );
}

export default observer(App);
