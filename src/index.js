import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Images from './images';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Images />, document.getElementById('root'));
registerServiceWorker();
