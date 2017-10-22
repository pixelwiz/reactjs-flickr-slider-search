import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './state/store/configureStore';

window.store = configureStore();

ReactDOM.render(
  <Provider store={window.store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

