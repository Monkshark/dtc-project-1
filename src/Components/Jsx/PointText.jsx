import '../Css/PointText.css';

function PointText({ text, style}) {
    return (
        <p style={{ fontFamily: "GangwonEduSaeeum_OTFMediumA", ...style }}> { text } </p>
    );
}

export default PointText;