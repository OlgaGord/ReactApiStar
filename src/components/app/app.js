import React from 'react';
import Header from "../header/header";
import DayPict from "../dayPict/dayPict";

import './app.css';


function App() {

    return (
        <React.Fragment>
            <div className="header">
                {Header}
            </div>
            <div className="row">
                <div className="col-md-6">
                    <DayPict />
                </div>

                <div className="col-md-6">
                    {/* <PictDetails /> */}
                    <h1>Pict Details</h1>
                </div>
            </div>
        </React.Fragment>


    )
}
export default App;

