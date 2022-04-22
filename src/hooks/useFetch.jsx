import { useState, useEffect } from 'react';

const useFetch = (url, options) => {    

    const [data, setData]= useState([]);
    const [error, setError] = useState([]);

    const getGenres = async() => {
        try {
            const res = await fetch(url, options);
            const data  = await res.json();
            setData(data)
        } catch (error) {
            setError(error);
        }        
    }

    useEffect(() => {
        getGenres();
    }, []);
    
    return {data, error}
}

export default useFetch;

/*const useFetch = () =>  {

    const [data, setData] = useState();
    const [error, setError] = useState([]);

    
    const fetchData = async (url, options) => {
        try {
            const result = await fetch(url, options);
            const data = await result.json();
            setData(data);      
        } catch (error) {
            setError(error);
        }
      
    };
  
    return { fetchData, data, error };
  }

export default useFetch;*/