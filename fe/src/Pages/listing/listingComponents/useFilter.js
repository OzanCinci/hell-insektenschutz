import { useEffect, useState, useCallback } from 'react';

const filterData = (filters, keyValuePairs) => {
    return Object.entries(keyValuePairs).reduce((acc, [key, value]) => {
        const matches = Object.entries(filters).every(([filterType, filterValue]) => {
            if (Array.isArray(filterValue)) {
                return filterValue.every(val => key.includes(val));
            }
            return key.includes(filterValue);
        });

        if (matches) {
            acc.push(value);
        }
        return acc;
    }, []);
};

const useFilter = (filterObj, rawData) => {
    const [data, setData] = useState(rawData);
    const [result, setResult] = useState(rawData);
    const [filterLoading, setFilterLoading] = useState(false);
    const [selection, setSelection] = useState({
        valid: false,
        filters: {},
    });

    useEffect(() => {
        if (rawData !== null) {
            const keyValuePairs = rawData.reduce((acc, item) => {
                const key = JSON.stringify({ ...item.properties, id: item.id });
                acc[key] = item;
                return acc;
            }, {});
            setData(keyValuePairs);
        }
    }, [rawData]);

    useEffect(() => {
        if (data === null) return;

        if (!selection.valid) {
            setResult(rawData);
        } else {
            const res = filterData(selection.filters, data);
            setResult(res);
        }
    }, [selection, data, rawData]);

    const handleFilterChange = useCallback((filterType, value) => {
        setFilterLoading(true);
        setSelection(prevSelection => {
            let temp;

            if (value === null || value.length === 0) {
                temp = {
                    valid: true,
                    filters: { ...prevSelection.filters }
                };
                delete temp.filters[filterType];
            } else {
                temp = {
                    valid: true,
                    filters: {
                        ...prevSelection.filters,
                        [filterType]: value
                    }
                };
            }

            return temp;
        });
        setTimeout(() => {
            setFilterLoading(false);
        }, 600);
    }, []);

    const handleFilterClick = useCallback((name, singleChoice, filterType) => {
        let value;
        if (singleChoice === false) {
            let currentFilter = selection.filters[filterType] || [];

            if (currentFilter.includes(name)) {
                value = currentFilter.filter(item => item !== name);
            } else {
                value = [...currentFilter, name];
            }
        } else {
            value = selection.filters[filterType] === name ? null : name;
        }
        
        handleFilterChange(filterType, value);
    }, [handleFilterChange, selection.filters]);


    const clearAllFilters = useCallback(() => {
        setFilterLoading(true);
        setSelection({
            valid: false,
            filters: {}
        });
        setTimeout(() => {
            setFilterLoading(false);
        }, 600);
    }, []);


    return [result, filterLoading, handleFilterClick, selection, clearAllFilters];
};

export default useFilter;
