import React, { useState, useEffect } from "react";
import { fetcher } from "../../api/fetcher";
import styled from "styled-components";

//components
import Coin from "./Coin";

//icons
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Markets = ({ data, setData }) => {
    const [page, setPage] = useState(1);

    async function fetch_data(page) {
        const await_data = fetcher(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`);
        setData(await await_data);
    }

    useEffect(() => {
        fetch_data(page);
    }, [page]);

    const pageChanger = (direction) => {
        const change = () => {
            setData([]);
            setPage(page + direction);
        };
        if (direction === -1) {
            page > 1 && change();
        } else {
            change();
        }
    };

    return (
        <Container>
            {data.length ? (
                data.map((data) => <Coin key={data.id} coin={data} />)
            ) : (
                <center>
                    <h1>loading</h1>
                </center>
            )}
            <Page_change>
                <Page_change_nutton onClick={() => pageChanger(-1)} style={{ opacity: page === 1 && "50%" }}>
                    <AiFillCaretLeft />
                </Page_change_nutton>
                <span>{page}</span>
                <Page_change_nutton onClick={() => pageChanger(1)}>
                    <AiFillCaretRight />
                </Page_change_nutton>
            </Page_change>
        </Container>
    );
};

// 💅🏻styling

const Container = styled.div`
    margin: 0% auto;
    width: 100%;
    max-width: 50rem;
    /* padding: 3rem; */
`;
const Page_change = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 0.5rem 1rem;
    z-index: 10;
    background-color: #00000017;
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
        padding: 0 1rem;
        height: 2rem;
        line-height: 2rem;
        margin: 0 1rem;
        background-color: #fff;
        border-radius: 10px;
        font-size: 1.4rem;
        font-weight: 600;
        color: #000;
    }
`;
const Page_change_nutton = styled.button`
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0021ff;
    box-shadow: 0 0 30px 1px blue;
    color: #fff;
`;
export default Markets;
