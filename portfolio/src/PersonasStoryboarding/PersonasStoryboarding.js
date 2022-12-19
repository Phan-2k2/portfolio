import "./PersonasStoryboarding.css"
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar";
import TitleArea from "./TitlePagePersonas/TitleArea";
import ContentArea from "./ContentArea/ContentArea";
import {useRef} from "react";
import {useIsVisible} from "../MainPage/MainPage";
function PersonasStoryboarding () {

    const titleRef = useRef();
    const isVisibleTitle = useIsVisible(titleRef);
    const navRef = useRef();

    return (

        <div id="contentArea">
            <ProjectsNavbar isVisibleTitle={isVisibleTitle} navbarRef={navRef}/>
            <TitleArea titleRef={titleRef} isVisibleTitle={isVisibleTitle}/>
            <ContentArea/>
        </div>
    )
}
export default PersonasStoryboarding;