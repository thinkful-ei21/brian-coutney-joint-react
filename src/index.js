import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Background from './background';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Background />, document.getElementById('root'));
registerServiceWorker();
