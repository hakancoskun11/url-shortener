import React from "react";
import styled from "styled-components";
import Clouds from "./Clouds/Clouds";
import Navbar from "./NavigationBar/Navbar";
import Shorter from "./Shorter/Shorter";

const Folksdev= () => {

const Pages = [
    {
        id:0,
        path:"/",
        components: [
            {
                id:0,
                name:"Navigation Bar",
                component:<Navbar/>
            },
            {
                id:1,
                name:"Shorter",
                component:<Shorter/>
            },
            // {
            //     id:2,
            //     name:"Clouds",
            //     component:<Clouds/>
            // }
        ]
    }
]

    return (
        <PageRender style={{
            position:"relative",
            zindex:0,
        }}>
            {Pages[0].components.map(component_ => {
                return component_.component
            })}
        </PageRender>
    )
}

const PageRender = styled.div`
background:linear-gradient(to bottom, #9086F4,#E18EF5);
max-height:100vh;
width:100vw;
height:100vh;
`

export default Folksdev;