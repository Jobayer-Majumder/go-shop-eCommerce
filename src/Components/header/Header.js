import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <Link className="navbar-brand text-primary" to="/home">Go-Shop eCommerce</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto font-weight-bold">
                        <Link className="nav-link text-primary" to="/orders">Orders</Link>
                        <Link className="nav-link text-primary" to="/admin">Admin</Link>
                        <Link className="nav-link text-primary" to="/deals">Deals</Link>
                        {
                            loggedInUser.email ? <Link to='/home' className="nav-link">{loggedInUser.displayName}</Link> :
                            <Link to='/login'><button className="btn btn-outline-primary">Login</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;