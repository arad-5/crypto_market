import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../svg/logo-rounded-inside.svg";
import Search from "./Search";
export default function Navbar({setIsSearching , setData}) {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Nav style={{ height: searchActive && "9rem", paddingBottom: searchActive && "5rem" }}>
            <Logo_container>
                <img src={Logo} alt="Arad Taghikhani" />
            </Logo_container>
            <Search  searchActive={searchActive} setSearchActive={setSearchActive} setIsSearching={setIsSearching} setData={setData} />
        </Nav>
    );
}
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
