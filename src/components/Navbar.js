import React, { useState, useContext } from "react";
import styled from "styled-components";

//context
import { Markets_data_context } from "./context/Markets_data_context_provider";

//icons & logo
import Logo from "../svg/logo-rounded-inside.svg";
import Search from "./Search";

//profile
import Profile from "./profile.js/Profile";

export default function Navbar({ searchActive, setSearchActive }) {
    const { markets_data, setMarkets_data } = useContext(Markets_data_context);
    const { all_coins_search_results } = markets_data;

    function handle_back() {
        setMarkets_data({
            ...markets_data,
            display: markets_data.markets,
            all_coins_search_results: [],
        });
    }

    return (
        <Nav style={{ height: searchActive && "9rem", paddingBottom: searchActive && "5rem" }}>
            <Profile_container>
                <Profile />
            </Profile_container>
            {!!all_coins_search_results.length && <Back_to_market onClick={() => handle_back()}>Markets</Back_to_market>}
            <Search searchActive={searchActive} setSearchActive={setSearchActive} />
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
const Profile_container = styled.div`
    height: 100%;
    padding: 0.7rem;
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
