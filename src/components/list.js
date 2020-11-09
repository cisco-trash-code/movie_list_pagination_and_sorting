import React from 'react';

const List = props => {
    const { list , onDelete } = props;
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
                {list.map(movie => 
                    <tr key={movie.id}>
                    <td>{movie.name}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.year}</td>
                    <td>{movie.rate}</td>
                    <td><button onClick={()=> onDelete(movie.id)} className='btn btn-danger btn-sm m-2'>Delete</button></td>
                </tr>
                    )}
            </tbody>
        </table>
     );
}
 
export default List;