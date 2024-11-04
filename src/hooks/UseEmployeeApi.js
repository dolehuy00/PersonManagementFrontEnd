
import { useState, useEffect, useRef } from 'react';
import { getPageEmployee } from 'services/management/EmployeeApi';

export const useGetPageEmployee = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        const getData = async () => {
            setLoading(true);
            try {
                const result = await getPageEmployee(1, 10);
                if (isMounted.current) {
                    setData(result);
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted.current) {
                    setLoading(false);
                    setError(error);
                }
            }
        };

        getData();

        return () => {
            isMounted.current = false;
        };
    }, []);

    return { data, loading, error };
};
