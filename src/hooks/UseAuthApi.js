import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from 'services/auth/AuthApi';

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleLogin = async (email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await login(email, password);
            setIsLoading(false);
            if (data.results[0].role === 'Admin') {
                history.push('/admin');
            } else if (data.results[0].role === 'User') {
                history.push('/user');
            } else {
                throw new Error('Role invalid.');
            }
            return data;
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };
    return { handleLogin, isLoading, error };
};