const reducer = (state, action) => {
   switch(action.type){
    case 'loading':
        return{
            ...state,
            isLoading:true
        }
    case 'get_data':
        return {
            ...state,
            isLoading:false,

            hits:action.payload.hits,
            nbPages:action.payload.nbPages
        }
        case "remove":
            return{
                ...state,
                hits:state.hits.filter((currentElement)=>(

                    currentElement.objectID !== action.payload
                )
                )
            }
        case "search":
            return{
                ...state,
                query:action.payload
            }
        case 'getNext':
            let pageNumN=state.page+1
            if(pageNumN >= state.nbPages){
                pageNumN=0
            }
            return{
                ...state,
                page:pageNumN
            }
        case 'getpre':
            let pageNum=state.page-1
            if(pageNum<=0){
                pageNum=0
            }
            return{
                ...state,
                page:pageNum
            }
    default:
       return state;
   }
}
export {reducer}
