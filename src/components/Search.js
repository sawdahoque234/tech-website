import React from 'react';
import { useGlobalContext } from './context';

const Search = () => {
    const{searchPost,query}=useGlobalContext()
    return (
        <div className='main'>
            <form action="" onSubmit={(e)=>e.preventDefault()}>
                <input type="text" placeholder='search here' value={query} onChange={(e)=>searchPost(e.target.value)}/>
            </form>
        </div>
    );
};

export default Search;