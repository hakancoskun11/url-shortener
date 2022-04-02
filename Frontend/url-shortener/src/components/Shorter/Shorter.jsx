import React from "react";
import styled from "styled-components";
import { Arrow90degRight } from "styled-icons/bootstrap";
import BotImage from "../../assets/botresmi.png"

import {Axios, AxiosPost, AxiosGet} from "../../utilities/Axios";

const Shorter = () => {

    const [text,setText] = React.useState("")
    const [url,setUrl] = React.useState("")
    const[modal,setModalState] = React.useState(false)

    const [data,setData] = React.useState({
        message:"Data yüklendi",
        status:false
    });

    const linkSendHandler = () => {
        AxiosPost("/",{
            url:text,
        }).then(
            res=> {
                setUrl(res.data.code);
                console.log(res.data.code)
                linkGetterHandler(url);
            }
        )
    }

    const linkGetterHandler = () => {
      console.log(url)
    }

    return (
        <PaddingBox>
            <div style={{Flex:.1}}>
                <h1>HakanUrlShortener</h1>
                <pre>Tek link. Tek tık.<Arrow90degRight/></pre>
                <CustomInput>
                    <input type="text" placeholder="URL Giriniz"

                    value={
                        text
                    }
                    onChange={(e) => {
                        setText(e.currentTarget.value)
                    }}
                    />
                </CustomInput>
                <Button
                onClick={linkSendHandler}
                >
                    <span>Kısalt</span>
                </Button>
            </div>
            <RightSide>
                <img src={BotImage}></img>
            </RightSide>
        </PaddingBox>
    )
}

const RightSide = styled.div`
    flex:0.5
    padding-right=30px;
    padding-top:0px;
    padding-bottom:0px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    img{
        width:50%;
        height:70%;
        transform:scale(1.2);
        object-fit:contain;
    }
`

const Button = styled.button `
    border:none;
    outline:none;
    background:var(--primary);
    width:540px;
    align-items:center;
    justify-content:center;
    padding:20px;
    border-radius:180px;
    margin-top:40px;
    color:white;
    font-size:25px;
`

const CustomInput = styled.div`
    background:white;
    padding:20px 20px;
    width:500px;
    border-radius:180px;
    input {
        font-size:20px;
        width:100%;
        border:none;
        outline:none;
        background:transperent;
    }
`

const PaddingBox = styled.div`
    padding-left:100px;
    padding-right:100px;
    padding-top:100px;
    display:Flex;
    h1{
        font-family: 'Teko', sans-serif;
        color:white;
    }
    pre {
        color:white;
        font-size:20px;
        position:relative;
        width:500px;
        white-space:pre-wrap;
        height:100px;
        svg{
            // position:absolute;
            // bottom:0;
            // right:0;
            margin-top:20px;
            width:60px;
            margin-left:10px;
            transform: rotate(90deg);
        }
    }
`

export default Shorter;