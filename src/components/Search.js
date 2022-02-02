import React, { useRef, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";

//context
import { Markets_data_context } from "./context/Markets_data_context_provider";

//icons
import { MdSearch } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

//helpers
import { fetcher } from "../api/fetcher";

const Search = ({ searchActive, setSearchActive }) => {
    const { setMarkets_data, markets_data, page } = useContext(Markets_data_context);

    //selected elements
    const searchInput = useRef(null);
    const select = useRef(null);

    //search functions
    const handleAllSearch = async (event) => {
        
        searchInput.current.blur();
        event.preventDefault();

        setSearchActive(false);

        const query = searchInput.current.value;

        const result_coins = await fetcher(`search?query=${query}`);
        setMarkets_data({
            ...markets_data,
            all_coins_search_results: [],
        });

        result_coins &&
            setMarkets_data({
                ...markets_data,
                all_coins_search_results: result_coins.coins,
            });
    };
    const handlePageSearch = () => {
        const query = searchInput.current.value;
        const filtered_coins = markets_data.markets.filter((coin) => coin.id.includes(query.toLowerCase()));
        searchInput.current.style.color = !!filtered_coins.length ? "#000" : "#f00";
        !!filtered_coins.length &&
            setMarkets_data({
                ...markets_data,
                display: filtered_coins,
            });
    };

    useEffect(() => {
        searchInput.current.value = "";
    }, [page]);

    return (
        <Container>
            <Button
                onClick={() => {
                    setSearchActive((curr) => !curr);
                    searchInput.current.focus();
                }}
            >
                {searchActive ? <BsArrowRightShort /> : <MdSearch />}
            </Button>
            <Form_container style={{ transform: searchActive && "translateX(0%)" }}>
                <Search_form
                    onSubmit={(event) => {
                        select.current.value === "all" && handleAllSearch(event);
                    }}
                    onChange={(event) => {
                        select.current.value === "page" && handlePageSearch(event.target.value);
                    }}
                >
                    {select.current && select.current.value === "all" ? (
                        <Form_button type="submit">
                            <MdSearch />
                        </Form_button>
                    ) : (
                        <Searching_animation />
                    )}

                    <input type="text" ref={searchInput} />
                    <Select
                        ref={select}
                        onChange={() => {
                            setMarkets_data({
                                ...markets_data,
                                display: markets_data.markets,
                            });
                        }}
                    >
                        <option value="all">All coins</option>
                        {!!!markets_data.all_coins_search_results.length && <option value="page">page {page}</option>}
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

const animation = keyframes`
    100% {
        transform: translate(-0% , -50%)
    }
`;
const Searching_animation = styled.div`
    height: 2rem;
    width: 2rem;
    font-size: 1.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:after {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: #0021ff;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        animation: ${animation} 1s infinite alternate-reverse;
    }
`;
export default Search;
