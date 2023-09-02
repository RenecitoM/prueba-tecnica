import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbarstep = () => {
    const location = useLocation();

    return (
        <div>
            <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                <div className="bg-dark p-4">
                    <h5 className="text-body-emphasis h4">This is my technical test, I hope you like it ❤</h5>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className="navbar-brand">
                        {location.pathname === "/" ? "Step 1" : location.pathname === "/payment" ? "Step 2" : "Step 3"}
                    </h1>
                    {location.pathname !== "/" && (
                        <Link to="/" className="btn btn-link text-white text-decoration-none">
                        <span className=''>◀︎</span>
                    </Link>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbarstep;

