import React, { createContext, useState, useEffect } from "react";

//helper
import { fetcher } from "../../api/fetcher";

export const Markets_data_context = createContext();

export const Markets_data_context_provider = ({ children }) => {
    const [markets_data, setMarkets_data] = useState({
        markets: [],
        display: [],
        all_coins_search_results: [],
    });

    const [page, setPage] = useState(1);

    const fetch_data = async (page) => {
        let await_data = fetcher(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`);

        setMarkets_data({
            ...markets_data,
            markets: await await_data,
            display: await await_data,
        });
    };

    useEffect(() => {
        setMarkets_data({
            ...markets_data,
            display: [],
        });
        fetch_data(page);
    }, [page]);

    return <Markets_data_context.Provider value={{ markets_data, setMarkets_data, page, setPage }}>{children}</Markets_data_context.Provider>;
};
