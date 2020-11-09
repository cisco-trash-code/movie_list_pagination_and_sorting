import React from 'react';

const List = props => {
    const { list } = props;
    return ( 
        <table className='table'>
            <thead className='thead-dark'>
                <tr>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Year</th>
                    <th>Rating</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>aaa</td>
                    <td>bbb</td>
                    <td>ccc</td>
                    <td>ddd</td>
                    <td>eee</td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default List;