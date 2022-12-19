import "./IterativeDesign.css"
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar";
import TitleArea from "./TitlePageIterative/TitleArea";
import ContentArea from "./ContentArea/ContentArea";
import {useRef} from "react";
import {useIsVisible} from "../MainPage/MainPage";
function IterativeDesign () {
    const titleRef = useRef();
    const isVisibleTitle = useIsVisible(titleRef);
    const navRef = useRef();

    return (

        <div>
            <ProjectsNavbar isVisibleTitle={isVisibleTitle} navbarRef={navRef}/>
            <TitleArea titleRef={titleRef} isVisibleTitle={isVisibleTitle}/>
            <ContentArea/>
        </div>
    )
}
export default IterativeDesign;