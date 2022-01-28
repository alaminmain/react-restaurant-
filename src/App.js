import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import myStore from './redux/store';
import { Provider } from 'react-redux';
import './App.css';
import MainComponent from './components/MainComponent';

function App() {
  console.log("App.Js", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
