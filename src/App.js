import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducer
import reducer from './reducers';

// import Top from './components/pages/Top/index';
import Counter from './components/pages/Counter/index';

// counter reducer

const App = () => (
  <Provider store={createStore(reducer)}>
    <Counter />
  </Provider>
);

export default App;
