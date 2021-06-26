import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Suspense, lazy } from 'react';

// import Artists from './Artists';

// class App extends React.Component {
//     render(){
//         return(
//             <div className="App">
//             <Artists />
//             </div>
//         );
//     }
// }

const Artists = lazy(() => import('./Artists'))
const Performers = lazy(() => import('./Performers'))

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={(<h1>Loading...</h1>)}>
                <Artists />
            </Suspense>
            <Suspense fallback={(<h1>Loading...</h1>)}>
                <Performers />
            </Suspense>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
