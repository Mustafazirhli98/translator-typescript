import { faCopy, faVolumeHigh, faVolumeLow } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { copy, speak } from "../utils/Utils"

interface IProps {
    display: Object,
    fromText: string,
    selectedFromLanguage: string,
    audioAnimation: boolean,
    setAudioAnimation: (param: boolean) => void
}

const ToolsLeft = ({ display, fromText, selectedFromLanguage, audioAnimation, setAudioAnimation }: IProps) => (
    <>
        {
            audioAnimation === false ?
                <FontAwesomeIcon
                    className={`speaker speaker-from ${display}`}
                    id='from'
                    icon={faVolumeLow}
                    onClick={(e) => speak(fromText, selectedFromLanguage, e.currentTarget.id, setAudioAnimation)} // e.target yerine e.currentTarget kullanıldı
                /> :
                <FontAwesomeIcon
                    className={`speaker speaker-from ${display}`}
                    id='from'
                    icon={faVolumeHigh}
                    onClick={(e) => speak(fromText, selectedFromLanguage, e.currentTarget.id, setAudioAnimation)} // e.target yerine e.currentTarget kullanıldı
                />
        }

        <FontAwesomeIcon className={`copy copy-from ${display}`} icon={faCopy} onClick={() => copy(fromText)} />
    </>

)

export default ToolsLeft