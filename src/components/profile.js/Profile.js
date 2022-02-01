import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

//image
import Image from "./profile_picture.jpg";

//icons
import { MdOutlineClose } from "react-icons/md";

const Profile = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            {!toggle && (
                <Picture_button onClick={() => setToggle(true)}>
                    <img src={Image} alt="arad" />
                </Picture_button>
            )}

            <Profile_modal_container toggle={toggle}>
                <Profile_modal>
                    <Profile_info>
                        <Profile_image href="https://github.com/arad-5" target="_blank">
                            <img src={Image} alt="profile picture" />
                        </Profile_image>
                        <div>
                            <h1>Arad</h1>
                            <h2>arad-5</h2>
                        </div>
                    </Profile_info>
                    <Code>
                        function <span style={{ color: "#58a6ff" }}>source_code</span>
                        <div>()&#123;</div> <br /> <span style={{ color: "#ddd", marginLeft: "2rem" }}>return</span> <a href="https://github.com/arad-5/crypto_market">crypto_market</a>
                        <span style={{ color: "#ddd" }}>;</span>
                        <br />
                        <div>&#125;</div>
                        <br />
                        <span style={{ color: "#858585" }}>//contact </span>
                        <br />
                        const 📫 <span style={{ color: "#ddd" }}>= </span>
                        <a href="mailto:arad5@outlook.com">"arad5@outlook.com"</a>
                        <span style={{ color: "#ddd" }}>;</span>
                    </Code>
                    {/* absolute */}
                    <Profile_close onClick={() => setToggle(false)}>
                        <MdOutlineClose />
                    </Profile_close>
                    <a href="https://github.com/arad-5" target="_blank">
                        <Star>
                            ⭐<span>star</span>
                        </Star>
                    </a>
                </Profile_modal>
            </Profile_modal_container>
        </>
    );
};

//💅🏻styling
const Picture_button = styled.button`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
    > img {
        height: 100%;
        object-fit: contain;
    }
    cursor: pointer;
`;
const backgroundAnimation = keyframes`
    100% {
        background-color: #00000099;
    }
`;
const Profile_modal_container = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: ${(props) => (props.toggle ? "flex" : "none")};
    animation: ${(props) => props.toggle && backgroundAnimation} 1s forwards;
    padding: 0.7rem 2.7rem;
    z-index: 10;
    align-items: center;
    justify-content: center;
`;

const Profile_modal = styled.div`
    width: 20rem;
    background-color: #0d1117;
    border: 2px solid #21262d;
    border-radius: 1rem;
    padding: 1rem;
    position: relative;
    background: linear-gradient(to top, #010409, #21262d); ;
`;
const Profile_image = styled.a`
    display: block;
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    margin-right: 1rem;
    > img {
        height: 100%;
        object-fit: contain;
    }
    object-fit: contain;
    border-radius: 50%;
    border: 0.5rem solid #21262d;
    transition: 200ms;
    &:hover {
        box-shadow: 0 0 20px 1px #000;
    }
`;
const Profile_info = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    h1 {
        color: #c9d1d9;
    }
    h2 {
        font-size: 1rem;
        font-weight: 400;
        color: #58a6ff;
        display: inline;
        &:hover {
            text-decoration: underline;
        }
    }
`;
const Code = styled.code`
    a {
        font-weight: 400;
        color: #58a6ff;
        display: inline;
        text-shadow: 0 0 3px #100fff;
        &:hover {
            text-decoration: underline;
        }
    }
    div {
        display: inline;
        color: #9ad0ff;
    }
    > span {
        color: #fa7a18;
    }
    color: #ff9b4f;
`;

//absolute
const Profile_close = styled.button`
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #010409 linear-gradient(-55deg, #d80000, #700000);
    font-size: 1rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    transition: 200ms;
    &:hover {
        box-shadow: 0 0 20px 1px #700000;
    }
`;
const Star = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 2rem;
    background: #010409 linear-gradient(to top, #010409, #21262d);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    transition: 200ms;
    > span {
        color: #ddd;
    }
    &:hover {
        box-shadow: 0 0 50px 7px #58a6ff, 0 0 50px 15px #000;
    }
`;
export default Profile;
