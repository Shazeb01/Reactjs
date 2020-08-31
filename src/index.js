import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

const App = () => {
    return (
        <div>
            <Header/>
            <h1>Hi from Shazeb</h1>
            <h2>NareshIT</h2>
            <div>
                develop by Shazeb
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))