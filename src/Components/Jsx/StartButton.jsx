import { buttonStyle } from "../Css/StartButtonCss.js";
import '../Css/StartButtonFont.css';

function StartButton() {

    return (
        <button style={{...buttonStyle, fontFamily: 'GangwonEduPowerExtraBoldA'}} >시작하기</button>
    );
}


export default StartButton;