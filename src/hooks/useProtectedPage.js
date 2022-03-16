import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { goToFeedPage } from '../routes/coordinators.js'

const useProtectedPage = () => {
   const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        token && goToFeedPage(navigate);
    }, [navigate]);
};
export default useProtectedPage;