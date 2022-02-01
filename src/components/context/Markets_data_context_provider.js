import React, { createContext, useState, useEffect } from "react";

import { fetcher } from "../../api/fetcher";

export const Markets_data_context = createContext();
export const Markets_data_context_provider = ({ children }) => {
    const [markets_data, setMarkets_data] = useState([]);
    const [page, setPage] = useState(1);

    const fetch_data = async (page) => {
        let await_data = fetcher(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`);
        setMarkets_data(await await_data);
    };

    useEffect(() => {
        setMarkets_data([]);
        fetch_data(page);
    }, [page]);

    return <Markets_data_context.Provider value={{ markets_data, setPage, page }}>{children}</Markets_data_context.Provider>;
};
