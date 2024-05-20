import '../Css/FooterText.css';

function FooterText({ text, style }) {
    return (
        <p style={{ ...style, fontFamily: "GangwonEdu_OTFBoldA" }}> { text } </p>
    );
}

export default FooterText;