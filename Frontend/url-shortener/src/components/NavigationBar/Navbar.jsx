import React from "react";
import styled from "styled-components";
import {Home,InfoCircle} from "styled-icons/fa-solid"


const Navbar = () => {
    return <div>
            <NavbarContent>
                <h1>HakanUrlShortener</h1>
                <ul>
                    <li>
                        <Home/>
                        Anasayfa
                    </li>
                    <li>
                        <InfoCircle></InfoCircle>
                        Hakkımızda
                    </li>
                </ul>
            </NavbarContent>
        </div>;
};

const NavbarContent = styled.div`
    background: transperent;
    display:flex;
    justify-content:space-between;
    align-items:center; 
    padding:50px;
    padding-top:10px;
    h1 {
        font-family: 'Teko', sans-serif;
        color:white;
    }
    ul {
        list-style:none;
        display:flex;
        li{
            padding:10px;
            font-size:20px;
            color:white;
            display:flex;
            align-items:center;

            svg{
                width:20px;
                margin-right:10px;
            }
        }
    }
 `



export default Navbar;