import React from 'react';
import { useGlobalContext } from './context';

const Pagination = () => {
    const{getP,getN,page,nbPages}=useGlobalContext()
    return (
        <div className='page_btn'>
            <button onClick={()=>getP()} className="btn">Previous</button>
            <p>{page+1} of {nbPages}</p>
            <button onClick={()=>getN()} className="btn">Next</button>
            
        </div>
    );
};

export default Pagination;