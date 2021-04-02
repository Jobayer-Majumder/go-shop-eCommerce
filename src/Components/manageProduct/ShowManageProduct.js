import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ShowManageProduct = (props) => {
    const { pdName, wight, price, _id} = props.product;
    

    const handleDeleteProduct = () => {
        fetch(`https://mysterious-sands-64603.herokuapp.com/deleteProduct/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => console.log(result))
    };

    return (
        <>
            <tbody>
                <tr>
                    <td>{pdName}</td>
                    <td>{wight}</td>
                    <td>&#2547; {price}</td>
                    <td> 
                        <span className='text-success'><FontAwesomeIcon icon={faEdit} /> </span>
                        <span onClick={handleDeleteProduct} className='text-danger'><FontAwesomeIcon icon={faTrashAlt} /></span>
                     </td>
                </tr>
            </tbody>
        </>
    );
};

export default ShowManageProduct;