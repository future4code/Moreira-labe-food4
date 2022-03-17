import axios from 'axios';
import { useState } from 'react';
import { showToast } from '../constants/ui-lib';

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
            showToast({type: "error",message: "Infelizmente não foi possível fazer o cadastro"});
        }
        finally {
            return data;
        };
    };

    return [requestData, isLoading];
};
export default useRequest;