import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';


import configureStore from './redux/store';
import   Home  from './pages/Home';
const store = configureStore();


ReactDOM.render(<App store={store} />, document.getElementById('root'));
 registerServiceWorker();

// ReactDOM.render(
//     <React.StrictMode>
//       <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

