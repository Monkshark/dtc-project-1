import '../Css/TitleText.css';

function TitleText({ text, style }) {
    return (
        <p style={{ fontFamily: "GangwonEduPowerExtraBoldA", ...style}}> { text } </p>
    );
}

export default TitleText;