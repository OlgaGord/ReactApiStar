import React from 'react';
import Header from "../header/header";
import DayPict from "../dayPict/dayPict";
import PictDetails from "../pictDetails/pictDetails";
import './app.css';


function App() {

    return (
        <React.Fragment>
            <div className="header">
                <Header />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <DayPict />
                </div>

                <div className="col-md-6">
                    <PictDetails />
                </div>
            </div>
        </React.Fragment>


    )
}
export default App;

