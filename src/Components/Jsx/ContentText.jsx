import '../Css/ContentText.css';

function ContentText({ text, style}) {
    return (
        <p style={{ fontFamily: "TheJamsil1Light", ...style, margin: 0 }}> { text } </p>
    );
}

export default ContentText;