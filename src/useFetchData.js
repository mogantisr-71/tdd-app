import  {useState, useEffect} from 'react';

export const useFetchData = (url) => {
    console.log('useFetchData---------')
    const [response, setResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const resp = await fetch(url)
                const response = await resp.json()
                setResponse(response)
                setIsLoading(false)
            } catch(e) {
                setIsLoading(false)
                setError(true)
            }   
        }
        fetchData()
        return () => {
            
        }
    }, [url])

    return {
        isLoading,
        response,
        error,
    }
}