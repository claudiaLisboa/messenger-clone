import React from 'react';
import '../App.css';

function App() {
  return (
    <div style={{ fontFamily :'Sono, sans-serif' }}>
      <Router>
        {
          <Switch>
            <Router path= "/" component={Login}/>

          </Switch>
        }
      </Router>
    </div>
  );
}

export default App;
