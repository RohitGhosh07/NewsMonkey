// Import necessary modules and components
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  // Define constants for page size and API key
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  // State for progress bar
  const [progress, setProgress] = useState(0);

  return (
    <div>
      {/* Set up React Router */}
      <Router>
        <NavBar />
        {/* Loading Bar */}
        <LoadingBar height={3} color='#f11946' progress={progress} />

        <Switch>
          {/* Define routes with News component */}
          <Route
            exact
            path='/'
            render={() => (
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='general1'
                pageSize={pageSize}
                country='in'
                category='general'
              />
            )}
          />
          <Route
            exact
            path='/business'
            render={() => (
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='business'
                pageSize={pageSize}
                country='in'
                category='business'
              />
            )}
          />
          <Route
            exact
            path='/entertainment'
            render={() => (
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='entertainment'
                pageSize={pageSize}
                country='in'
                category='entertainment'
              />
            )}
          />
          <Route
            exact
            path='/general'
            render={() => (
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='general'
                pageSize={pageSize}
                country='in'
                category='general'
              />
            )}
          />
          <Route
            exact
            path='/health'
            render={() => (
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='health'
                pageSize={pageSize}
                country='in'
                category='health'
              />
            )}
          />
          <Route
            exact
            path='/science'
            render={() => (
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='science'
                pageSize={pageSize}
                country='in'
                category='science'
              />
            )}
          />
          <Route
            exact
            path='/sports'
            render={() => (
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='sports'
                pageSize={pageSize}
                country='in'
                category='sports'
              />
            )}
          />
          <Route
            exact
            path='/technology'
            render={() => (
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='technology'
                pageSize={pageSize}
                country='in'
                category='technology'
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
