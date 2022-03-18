import axios from 'axios';
import { useState } from 'react';
import { showToast } from '../constants/ui-lib';

const useRequest = () => {
    const [isLoading, setIsLoading] = useState(false);

    const requestData = async (url, method, header, body) => {
        let data;
        setIsLoading(true);
        try {
            const res = await axios[method](url, header, body);
            setIsLoading(false);
            data = res.data;
        }
        catch (err) {
            setIsLoading(false);
            console.log(err.response)
            showToast({type: "error",message: "Infelizmente não foi possível fazer o cadastro"});
        }
        finally {
            return data;
        };
    };

    return [requestData, isLoading];
};
export default useRequest;