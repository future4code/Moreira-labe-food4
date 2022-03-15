import axios from 'axios';
import { useState, useEffect } from 'react';

const useRequest = () => {
    const [isLoading, setIsLoading] = useState(false);

    const requestData = async (url, method, body, header) => {
        let data;
        setIsLoading(true);
        try {
            const res = await axios[method](url, body, header);
            setIsLoading(false);
            data = res.data;
        }
        catch (err) {
            setIsLoading(false);
            console.log(err.response);
        }
        finally {
            return data;
        };
    };

    useEffect(() => {
        requestData();
    }, [url])

    return [requestData, isLoading];
};
export default useRequest;