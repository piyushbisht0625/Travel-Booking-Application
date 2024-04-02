import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TripForm from './components/TripForm';
import TripList from './components/TripList';
import MapView from './components/MapView';
import TripForm from './components/TripForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create-trip" component={TripForm} />
          <Route path="/trips" component={TripList} />
          <Route path="/map" component={MapView} />
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
