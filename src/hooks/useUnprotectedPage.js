import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { goToLoginPage } from '../routes/coordinators.js'

const useUnprotectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        !token && goToLoginPage(navigate);
    }, [navigate]);
};
export default useUnprotectedPage;