import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import About from './About';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
