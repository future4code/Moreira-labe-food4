import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../routes/coordinators.js'

const useUnprotectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        !token && goToHomePage(navigate);
    }, [navigate]);
};
export default useUnprotectedPage;