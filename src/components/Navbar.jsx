import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    let navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow rounded">
            <div className="container-fluid justify-content-center">
                <button className="btn btn-dark mx-1" onClick={() => navigate("/")}>Primo Calculator</button>
                <button className="btn btn-dark mx-1" onClick={() => navigate("/ascension-calc")}>Ascension Material/Talent Book Calculator</button>
                <button className="btn btn-dark mx-1" onClick={() => navigate("/spent-mora-calc")}>Spent Mora Calculator</button>
            </div>
        </nav>
    )
}

export default Navbar;