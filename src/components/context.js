import React ,{useContext,useReducer,useEffect}from "react";
import { reducer } from "./reducer";
const appContext=React.createContext()
let API='http://hn.algolia.com/api/v1/search?'

const initialState={
    query:'',
    nbPages:0,
    page:0,
    isLoading:true,
    hits:[]
}

const AppProvider=({children})=>{

const [state, dispatch] = useReducer(reducer, initialState)

const apiData=async(url)=>{
    dispatch({type:'loading'})

    try{
        const res=await fetch(url)
        const data=await res.json()
        dispatch({type:"get_data",
        payload:{
            hits:data.hits,
            nbPages:data.nbPages
        }})
    }catch(err){
        console.log(err)
    }
}
//useeffect
useEffect(() => {
apiData(`${API}query=${state.query}&page=${state.page}`)
}, [state.query,state.page])

//remove 
const removePost=(postid)=>{
    dispatch({type:'remove',payload:postid})
}
const searchPost=(searchQuery)=>{
    dispatch({type:'search',payload:searchQuery})
}
const getP=()=>{
    dispatch({type:'getpre'})
}
const getN=()=>{
    dispatch({type:'getNext'})
}

    return <appContext.Provider value={{...state,removePost,searchPost,getP,getN}}>{children}</appContext.Provider>
}
//serach


// custom hooks
const useGlobalContext=()=>{
return useContext(appContext)
}
export {appContext,AppProvider,useGlobalContext,}