import PointText from "../../Components/Jsx/PointText.jsx";
import TitleText from "../../Components/Jsx/TitleText.jsx";
import ContentText from "../../Components/Jsx/ContentText.jsx";
import {
    DEV_NAME,
    MAIN_CONTENT_TEXT_1,
    MAIN_CONTENT_TEXT_2,
    MAIN_TITLE_POINT_TEXT,
    MAIN_TITLE_TEXT
} from "../../Js/Texts.js";
import StartButton from "../../Components/Jsx/StartButton.jsx";
import FooterText from "../../Components/Jsx/FooterText.jsx";

function MainPage() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "yellow",  }}>
            <PointText text={MAIN_TITLE_POINT_TEXT} style={{ fontSize: "28px", color: "orange" }}/>
            <TitleText text={MAIN_TITLE_TEXT} style={{ fontSize: "64px", color: "#000000", }}/>
            <ContentText text={MAIN_CONTENT_TEXT_1} style={{ fontSize: "20px", color: "#000000", marginTop: 0, marginBottom: 0 }}/>
            <ContentText text={MAIN_CONTENT_TEXT_2} style={{ fontSize: "20px", color: "#000000", marginTop: 0 }}/>
            <StartButton/>
            <FooterText text={DEV_NAME} style={{ fontSize: "16px", color: "#000000" }}/>
        </div>
    );
}

export default MainPage;