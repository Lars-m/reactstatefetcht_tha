import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ReactState from './components/ReactStateExam';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactState />, document.getElementById('root'));
registerServiceWorker();
