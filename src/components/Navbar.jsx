import React from 'react';

const Navbar = ({ setView }) => {

    const ascCalc = () => {
        setView("ascCalc");
    }

    const goHome = () => {
        setView("");
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow rounded">
            <div className="container-fluid justify-content-center">
                <button className="btn btn-dark mx-1" onClick={goHome}>Primo Calculator</button>
                <span title="Work in progress"><button className="btn btn-dark mx-1" onClick={ascCalc}>Ascension Material/Talent Book Calculator</button></span>
            </div>
        </nav>
    )
}

export default Navbar;