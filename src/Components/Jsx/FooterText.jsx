import '../Css/FooterText.css';

function FooterText({ text, fontSize }) {
    return (
        <p style={{ fontSize: fontSize, margin: 0 }}> { text } </p>
    );
}

export default FooterText;