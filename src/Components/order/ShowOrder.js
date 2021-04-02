import React from 'react';

const ShowOrder = (props) => {
    const { pdName, wight, price, date} = props.order;

    return (
        <>
            <tbody>
                <tr>
                    <td>{pdName}</td>
                    <td>{new Date(date).toDateString('dd/mm/yyyy')}</td>
                    <td>{wight}</td>
                    <td>&#2547; {parseInt(price) + parseInt(price / 10)}</td>
                </tr>
            </tbody>
        </>
    );
};

export default ShowOrder;