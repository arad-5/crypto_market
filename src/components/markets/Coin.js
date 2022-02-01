import React from "react";
import styled from "styled-components";

//icons
import { BiDollar } from "react-icons/bi";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
const Coin = ({ coin }) => {
    const { name, symbol, id, image, current_price, price_change_percentage_24h, market_cap_rank, market_cap } = coin;
    return (
        <Container>
            <Market_cap>
                <BiDollar />
                {market_cap.toLocaleString()}
            </Market_cap>
            <Label>
                <img src={image} alt={id} />
                <Name>
                    <div>{name}</div>
                    <span>{symbol}</span>
                </Name>
            </Label>
            <Price>
                <Price_change status={Math.sign(price_change_percentage_24h)}>
                    <span>24hr</span>%{price_change_percentage_24h}
                </Price_change>
                <Current_price>
                    <BiDollar />
                    {current_price}
                </Current_price>
            </Price>
            {/* absolute 👇🏻*/}
            <Rank>{market_cap_rank}</Rank>
            <Arrow status={Math.sign(price_change_percentage_24h)}>{Math.sign(price_change_percentage_24h) === -1 ? <AiOutlineFall /> : <AiOutlineRise />}</Arrow>
            <Down_row>
                <Down_rank>{market_cap_rank}</Down_rank>
                <Market_cap>
                    <BiDollar />
                    {market_cap.toLocaleString()}
                </Market_cap>
            </Down_row>
        </Container>
    );
};

// 💅🏻styling
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
    @media (max-width: 940px) {
        margin: 1rem 0 2.5rem 0;
    }
    @media (max-width: 800px) {
        border-radius: 0;
    }
`;
const Label = styled.div`
    height: 100%;
    display: flex;
    > img {
        height: 100%;
        margin-right: 0.5rem;
    }
    overflow-y: auto;
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
    @media (max-width: 630px) {
        flex-direction: column-reverse;
        align-items: flex-end;
    }
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
    position: relative;
    font-weight: 500;
    color: ${(props) => (props.status === -1 ? "#f00" : "#008c06")};
    > span {
        font-weight: 600;
        font-size: 0.7rem;
        margin-right: 0.5rem;
        color: #aaa;
        @media (min-width: 630px) {
            position: absolute;
            top: -0.5rem;
            left: -2rem;
        }
    }
`;

//absolute👇🏻
const Rank = styled.div`
    position: absolute;
    left: -1rem;
    transform: translateX(-100%);
    background-color: #0021ff;
    box-shadow: 0 0 30px 5px #0021ff;
    min-width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 1.1rem;
    color: #fff;
    padding: 0 0.5rem;
    @media (max-width: 940px) {
        display: none;
    }
`;
const Arrow = styled.div`
    position: absolute;
    right: -3rem;
    height: 3rem;
    width: 3rem;
    line-height: 3rem;
    text-align: center;
    font-size: 2rem;
    color: ${(props) => (props.status === -1 ? "#f00" : "#00ff0a")};
    @media (max-width: 940px) {
        display: none;
    }
`;
//down row
const Down_row = styled.div`
    width: 90%;
    height: 1.5rem;
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    justify-content: space-between;
    padding: 0 0.5rem;
    display: none;
    @media (max-width: 940px) {
        display: flex;
    }
`;
const Down_rank = styled.div`
    background-color: #0021ff;
    background-color: #0021ff;
    box-shadow: 0 0 30px 5px #0021ff;
    min-width: 2rem;
    height: 2rem;
    border-radius: 0 0 1rem 1rem;
    line-height: 2rem;
    text-align: center;
    font-size: 1.1rem;
    color: #fff;
    padding: 0 0.5rem;
`;
const Market_cap = styled.div`
    &:nth-child(1) {
        position: absolute;
        transform: translateX(-50%);
        top: 0;
        left: 50%;
        @media (max-width: 940px) {
            display: none;
        }
    }
    background-color: #0021ff;
    min-width: 2rem;
    height: 2rem;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 1.1rem;
    color: #fff;
    padding: 0 0.5rem;
    overflow: auto;
    box-shadow: 0 0 10px 1px #0021ff;
`;

export default Coin;
