import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import ContentComponent from './contents';

const App = () => (
    <BrowserRouter>
        <ContentComponent />
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
