import React, { useState } from "react";
import styled from "styled-components";

//icons &b logo
import Logo from "../svg/logo-rounded-inside.svg";
import Search from "./Search";

//helper
import { fetcher } from "../api/fetcher";

export default function Navbar({ setIsSearching, data, setData, isSearching }) {
    const [searchActive, setSearchActive] = useState(false);
    async function handle_back() {
        setIsSearching(false);
        const await_data = fetcher(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
        setData(await await_data);
    }
    return (
        <Nav style={{ height: searchActive && "9rem", paddingBottom: searchActive && "5rem" }}>
            <Logo_container>
                <img src={Logo} alt="Arad Taghikhani" />
            </Logo_container>
            {data.coins && <Back_to_market onClick={() => handle_back()}>Markets</Back_to_market>}
            <Search searchActive={searchActive} setSearchActive={setSearchActive} isSearching={isSearching} setIsSearching={setIsSearching} setData={setData} data={data} />
        </Nav>
    );
}

//💅🏻styling

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background-color: #00000017;
    backdrop-filter: blur(6px);
    z-index: 1000;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 100ms;
`;
const Logo_container = styled.div`
    height: 100%;
    padding: 0.7rem;
    > img {
        height: 100%;
    }
    cursor: pointer;
`;
const Back_to_market = styled.button`
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
