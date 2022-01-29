import React from "react";
import styled from "styled-components";

//icons
import { BiDollar } from "react-icons/bi";

const Coin = ({ coin }) => {
    const { name, symbol, id, image, current_price, price_change_percentage_24h, market_cap_rank } = coin;
    console.log(coin);
    return (
        <Container>
            <Label>
                <img src={image} alt={id} />
                <Name>
                    <div>{name}</div>
                    <span>{symbol}</span>
                </Name>
            </Label>
            <Price>
                <Price_change>%{price_change_percentage_24h}</Price_change>
                <Current_price>
                    <BiDollar />
                    {current_price}
                </Current_price>
            </Price>
            {/* absolute 👇🏻*/}
            <Rank>{market_cap_rank}</Rank>
        </Container>
    );
};
const Container = styled.div`
    display: flex;
    height: 4rem;
    padding: 0.5rem 1rem;
    background-color: #fff;
    margin: 1rem 0;
    border-radius: 1rem;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;
const Label = styled.div`
    height: 100%;
    display: flex;
    > img {
        height: 100%;
        margin-right: 0.5rem;
    }
`;
const Name = styled.div`
    color: #606060;
    font-weight: 600;
    > span {
        color: #858585;
        font-weight: 400;
    }
`;
const Price = styled.div`
    display: flex;
`;
const Current_price = styled.div`
    line-height: 1rem;
    display: flex;
    align-items: center;
    padding: 0.2rem 0.5rem;
    background-color: #000;
    color: #fff;
    font-weight: 500;
    border-radius: 5px;
`;
const Price_change = styled.span`
    margin-right: 1rem;
`;

//absolute👇🏻
const Rank = styled.div`
    position: absolute;
    left: -3rem;
    background-color: #0021ff;
    box-shadow: 0 0 30px 5px blue;
    min-width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 1.1rem;
    color: #fff;
`;
export default Coin;
