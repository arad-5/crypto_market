import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

//context
import { Markets_data_context } from "../context/Markets_data_context_provider";

//components
import Coin from "./Coin";
import Loading from "../searchResults/Loading";

//icons
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Markets = ({ data, setData, isSearching }) => {
    const [displayData, setDisplayData] = useState([]);
    const {markets_data , setPage , page} = useContext(Markets_data_context);
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
    console.log(markets_data);
    return (
        <Container>
            {markets_data.length ? markets_data.map((data) => <Coin key={data.id} coin={data} />) : <Loading />}
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
