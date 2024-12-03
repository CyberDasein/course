import { useState, useEffect, useCallback } from "react";

export default function useFetch(initialUrl) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUrl = useCallback(async (url, options = {}) => {
        setIsLoading(true);

        try {
            const { params = {}, ...restOptions } = options;
            const queryString = new URLSearchParams(params).toString();
            const fullUrl = queryString ? `${url}?${queryString}` : url;

            const response = await fetch(fullUrl, restOptions);
            const responseData = await response.json();

            if (response.ok) {
                setData(responseData);
                setIsLoading(false);
                setError(null);
            } else {
                setError("Ошибка загрузки данных");
            }
        } catch (e) {
            setError(e.message);
        }
    }, []);

    useEffect(() => {
        fetchUrl(initialUrl);
    }, [initialUrl]);

    const refetch = useCallback((options = {}) => {
        fetchUrl(initialUrl, options);
    });

    return {
        data,
        isLoading,
        error,
        refetch,
    };
}
