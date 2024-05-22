import {StampCardCss} from "../Css/StampCardCss.js";
import TitleText from "./TitleText.jsx";
import ContentText from "./ContentText.jsx";
import {STAMP_CARD_TEXT} from "../../Js/Texts.js";

function StampCard({ cardTitle, hasStamp = false, }) {
    return (
        <>
            <div style={{ ...StampCardCss }}>
                <TitleText text={cardTitle} style={{ fontSize: "14px", color: "black", textAlign: "center" }} />
                <img src="/Stamp.png" alt="Stamp"/>
                <ContentText text={STAMP_CARD_TEXT} style={{ color: "black", fontSize: "10px", padding: "15px" }} />

            </div>
        </>
    );
}

export default StampCard;