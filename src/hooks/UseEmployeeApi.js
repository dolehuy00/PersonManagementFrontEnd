
import { useState, useEffect, useRef } from 'react';
import { getPageEmployee } from 'services/management/EmployeeApi.js';

export const useGetPageEmployee = (page, pageSize) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        const getData = async () => {
            setLoading(true);
            try {
                const result = await getPageEmployee(page, pageSize);
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
    }, [page, pageSize]);

    return { data, loading, error };
};
