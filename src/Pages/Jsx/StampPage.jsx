import TitleText from "../../Components/Jsx/TitleText.jsx";
import {DEV_NAME, STAMP_TITLE_POINT_TEXT, STAMP_TITLE_TEXT} from "../../Js/Texts.js";
import PointText from "../../Components/Jsx/PointText.jsx";
import StampCard from "../../Components/Jsx/StampCard.jsx";
import StartButton from "../../Components/Jsx/StartButton.jsx";
import FooterText from "../../Components/Jsx/FooterText.jsx";

function StampPage() {
    return (
        <>
            <div style={{ backgroundColor: "green", textAlign: "center", }}>
                <TitleText text={STAMP_TITLE_TEXT} style={{ color: "white", fontSize: "32px", paddingTop: "100px" }}/>
                <PointText text={STAMP_TITLE_POINT_TEXT} style={{ color: "white", marginTop: "5px", marginBottom: "20px" }} />
                <div style={{ display: "flex",   justifyContent: "center", margin: 0, padding: 0, marginBottom: "50px" }}>
                    <StampCard />
                    <StampCard />
                    <StampCard />
                    <StampCard />
                </div>
                <StartButton />
                <FooterText text={DEV_NAME} style={{ marginTop: "100px" }} />
            </div>
        </>
    );
}

export default StampPage;