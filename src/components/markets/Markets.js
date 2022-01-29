import React, { useState, useEffect } from "react";
import { fetcher } from "../../api/fetcher";
import styled from "styled-components";

//components
import Coin from "./Coin";

const Markets = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetch_data() {
            const await_data = fetcher("coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            setData(await await_data);
        }
        fetch_data();
    }, []);

    return (
        <Container>
            {data.map((data) => (
                <Coin key={data.id} coin={data} />
            ))}
        </Container>
    );
};
// 💅🏻styling
const Container = styled.div`
    margin: 0% auto;
    width: 100%;
    max-width: 50rem;
    padding: 3rem;
`;
export default Markets;
