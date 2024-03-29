import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

//Imported the two font type from the font awesome library
library.add(faCheckCircle, faTrashAlt)

ReactDOM.render(<App />, document.getElementById('root'));

//Changing unregister to register makes the app work offline.
serviceWorker.unregister();
