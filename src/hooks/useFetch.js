//to work with home_v3; uses custom hook
import { useState, useEffect } from 'react';

const useFetch= (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok)
                    throw Error('could not fetch');
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            }) // wrap within setTimeout to simulate loading screen
            .catch(e => {
                setIsLoading(false);
                setError(e.message);
            })
    }, [url]);
    
    return { data, isLoading, error };
};

export default useFetch;