import '../Css/TitleText.css';

function TitleText({ text, style }) {
    return (
        <p style={{ fontFamily: "GangwonEduPowerExtraBoldA", ...style, margin: 0 }} > { text } </p>
    );
}

export default TitleText;