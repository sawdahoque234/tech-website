import React from 'react';
import { useGlobalContext } from './context';

const Stories = () => {
    const {hits,removePost,isLoading}=useGlobalContext()

    if(isLoading){
        return(
            <div className='main'>
            <h1>Loading...........</h1>
            </div>
        )
    }
    

    return (
        <div>
            {
                hits.map((current)=>{
                    const{objectID,title,num_comments,author,url}=current
                    return(
                        <div key={objectID} className='main'>
                            <div className="card">

                            <h5>{title}</h5>
                            <a href={url}>read more...</a>
                            <p>By {author} | {num_comments} comments</p>
                            <button onClick={()=>removePost(objectID)} className="btn">remove</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Stories;