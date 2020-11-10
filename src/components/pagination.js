import React from 'react';
import _ from 'lodash';

const Pagination = props => {
    const { itemsForPage , currentPage , totalItems , onPressPag } = props;
    const pageCount = Math.ceil(totalItems/itemsForPage);
    if(pageCount === 1) return null;
    const pages = _.range(1 , pageCount + 1);
    return ( 
        <ul className='pagination'>
            {pages.map(page =>
                <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'}>
                    <a className='page-link' onClick={()=> onPressPag(page)}>
                        {page}
                    </a>
                </li>
                )}
        </ul>
     );
}
 
export default Pagination;