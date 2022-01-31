import React from "react";
import styled from "styled-components";
import Searching from "./Searching";
const SearchResults = ({ data }) => {
    console.log(data.coins);
    return (
        <>
            {!!data.coins ? (
                <Result_container>
                    {data.coins.map((coin) => (
                        <Result_coin key={coin.id}>
                            <Image src={coin.large} alt={coin.id} />
                            <Name>{coin.id}</Name>
                            <Symbol>{coin.Symbol}</Symbol>
                            <Rank>{coin.market_cap_rank}</Rank>
                        </Result_coin>
                    ))}
                </Result_container>
            ) : (
                <Searching />
            )}
        </>
    );
};

//styling 💅🏻

const Result_container = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Result_coin = styled.div`
    background-color: #fff;
    width: 15rem;
    border-radius: 1rem;
    margin: 0 0.5rem;
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Image = styled.img`
    width: 100%;
    height: 50%;
    object-fit: contain;
    margin-bottom: 1rem;
`;

const Name = styled.h3`
    color: #404040;
    font-weight: 500;
`;
const Symbol = styled.div`
    color: #404040;
`;
const Rank = styled.div`
    background-color: #0021ff;
    box-shadow: 0 0 10px 1px #0021ff;
    min-width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 1.1rem;
    color: #fff;
    padding: 0 0.5rem;
    display: inline-block;
`;
export default SearchResults;