import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <>
            <div className="nav flex-column nav-pills" >
                <Link className="nav-link" to="/manageProduct"><FontAwesomeIcon icon={faThLarge} /> Manage Product</Link>
                <Link className="nav-link" to="/addProduct"><FontAwesomeIcon icon={faPlus} /> Add Product</Link>
                <Link className="nav-link" to="/editProduct"><FontAwesomeIcon icon={faEdit} /> Edit Product</Link>
            </div>
        </>
    );
};

export default Sidebar;