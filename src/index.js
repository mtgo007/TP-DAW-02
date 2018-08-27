import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import './Css/login.css';
import './Css/signUp.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
