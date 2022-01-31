import React, { useRef } from "react";
import styled from "styled-components";

//icons
import { MdSearch } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

//helpers
import { fetcher } from "../api/fetcher";

const Search = ({ searchActive, setSearchActive, isSearching, setIsSearching ,  setData}) => {

    const handleSearch = async (event) => {
        event.preventDefault();
        setSearchActive(false);
        let query = event.target[1].value;
        if (!query) {
            return
        }
        setIsSearching(true);
        setData({})
        const await_data = fetcher(`search?query=${query}`);
        const result = await await_data;
        setData(result);
    };

    const searchInput = useRef(null);

    return (
        <Container>
            <Button
                onClick={() => {
                    setSearchActive(!searchActive);
                    searchInput.current.focus();
                }}
            >
                {searchActive ? <BsArrowRightShort /> : <MdSearch />}
            </Button>

            <Form_container style={{ transform: searchActive && "translateX(0%)" }}>
                <Search_form onSubmit={(event) => handleSearch(event)}>
                    <Form_button type="submit">
                        <MdSearch />
                    </Form_button>
                    <input type="text" ref={searchInput} />
                    <Select>
                        <option value="true">All coins</option>
                        <option>This page</option>
                    </Select>
                </Search_form>
            </Form_container>
        </Container>
    );
};

// 💅🏻styling

const Container = styled.div`
    display: flex;
`;
const Select = styled.select`
    background-color: #0021ff;
    padding: 0.5rem;
    border-radius: 10px;
    color: #fff;
    > option {
        color: #000;
        background-color: #fff;
    }
`;
const Form_container = styled.div`
    width: 100%;
    max-width: 20rem;
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 10px;
    margin-left: 1rem;
    position: fixed;
    right: 1rem;
    top: 5rem;
    transition: 200ms;
    transform: translateX(150%);
`;
const Button = styled.button`
    margin-left: 1rem;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    color: #fff;
    background-color: #0021ff;
    box-shadow: 0 0 15px 1px #0021ff;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 100ms;
    &:hover {
        box-shadow: 0 0 30px 2px #0021ff;
    }
`;
const Form_button = styled.button`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    color: #fff;
    background-color: #0021ff;
    font-size: 1.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;
const Search_form = styled.form`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
export default Search;
