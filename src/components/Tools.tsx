import { faCopy, faVolumeHigh, faVolumeLow } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { copy, speak } from "../utils/Utils"

interface IProps {
    display: Object,
    text: string,
    selectedLanguage: string,
    audioAnimation: boolean,
    setAudioAnimation: (param: boolean) => void;
    side: string;
}

const Tools = ({ display, text, selectedLanguage, audioAnimation, setAudioAnimation, side }: IProps) => (
    <>
        {
            audioAnimation === false ?
                <FontAwesomeIcon
                    className={`speaker speaker-${side} ${display}`}
                    id={side}
                    icon={faVolumeLow}
                    onClick={(e) => speak(text, selectedLanguage, e.currentTarget.id, setAudioAnimation)} // e.target yerine e.currentTarget kullanıldı
                /> :
                <FontAwesomeIcon
                    className={`speaker speaker-${side} ${display}`}
                    id={side}
                    icon={faVolumeHigh}
                    onClick={(e) => speak(text, selectedLanguage, e.currentTarget.id, setAudioAnimation)} // e.target yerine e.currentTarget kullanıldı
                />
        }

        <FontAwesomeIcon className={`copy copy-${side} ${display}`} icon={faCopy} onClick={() => copy(text)} />
    </>

)

export default Tools