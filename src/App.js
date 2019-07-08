import React from 'react';
//import of components
import MainComponent from './components/main-component';
// import Reducers
import deviceData from './components/reducers/devicedata.reducer';

// import Provider / Redux
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

// Store setup
const store = createStore(combineReducers({deviceData}));

function App() {
  return (
    <Provider store={store}>
      <MainComponent/>
    </Provider>
  );
}

export default App;
