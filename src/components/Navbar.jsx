import React from 'react';

const Navbar = ({ setView }) => {

    const ascCalc = () => {
        setView("ascCalc");
    }

    const spentMoraCalc = () => {
        setView("spentMoraCalc");
    }

    const goHome = () => {
        setView("");
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow rounded">
            <div className="container-fluid justify-content-center">
                <button className="btn btn-dark mx-1 mb-2" onClick={goHome}>Primo Calculator</button>
                <button className="btn btn-dark mx-1 mb-2" onClick={ascCalc}>Ascension Material/Talent Book Calculator</button>
                <button className="btn btn-dark mx-1 mb-2" onClick={spentMoraCalc}>Spent Mora Calculator</button>
            </div>
        </nav>
    )
}

export default Navbar;