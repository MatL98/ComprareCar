
import React, {useState , useEffect} from "react";





const LoadingComponent = () =>{

    const [loading, setLoaded] = useState[true]


    useEffect(()=> {
        setTimeout(()=>{
            setLoaded(false);
        }, 3000)
    }, [])


    return (<>
            {loading ? <div></div> : <div></div>}
            </>)    
}

export default LoadingComponent;

