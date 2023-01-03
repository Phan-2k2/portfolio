import {Container, Grow, Typography} from "@mui/material";
import './AboutArea.css'
import profilePhoto from "../../Images/ADP06474.jpg"
import React from "react";

function AboutArea (props) {

    return(
        <div id="aboutArea" ref={props.aboutRef}>
            <Grow in={props.isVisible} timeout={1000}>
                <div id="aboutAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>About Me</b>
                    </Typography>
                    <div id="aboutInfo">
                        <Typography variant="subtitle1" sx={{maxWidth:{xs : "100%", sm : "50%"}}} id="aboutWords">
                            Hey! I'm Austin Phan. Welcome to my portfolio! This portfolio project was created for one of
                            my classes, CS1300 (User Interfaces and User Experiences), as a way to show the work completed for that class.
                            I'm from the great state of New Hampshire, and currently
                            go to Brown University. I'm currently concentrating in Computer Science. I enjoy programming,
                            with frontend design being one of my favorites. But, when I'm not programming you can find
                            me playing video games or practicing Taekwondo.
                            My favorite video games include:
                            <ul>
                                <li>Assetto Corsa</li>
                                <li>Valorant</li>
                                <li>Apex Legends</li>
                                <li>Minecraft</li>
                            </ul>
                            Additionally, I've spent a fair amount of time doing photography, and it's been a fun hobby for me. I really
                            love shooting photos, and making people look awesome! Anyway, you can find my portfolio below.
                            Click on any of the projects to learn more. Thanks for visiting!
                        </Typography>
                        <Container sx={{display:{xs:"none", sm:"block"}, textAlign: "center"}}>
                            <img id="profilePhoto" src={profilePhoto} alt={"Austin's Portrait"}/>
                        </Container>
                    </div>
                </div>
            </Grow>
        </div>
    )
}
export default AboutArea;