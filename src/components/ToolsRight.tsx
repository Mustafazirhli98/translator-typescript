import { faCopy, faVolumeHigh, faVolumeLow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { copy, speak } from '../utils/Utils'


interface IProps {
    display: Object,
    toText: string,
    selectedToLanguage: string,
    audioAnimation: boolean,
    setAudioAnimation: (param: boolean) => void,
}

const ToolsRight = ({ display, toText, selectedToLanguage, audioAnimation, setAudioAnimation }: IProps) => (

    <>
        {
            audioAnimation === false ?
                <FontAwesomeIcon
                    className={`speaker speaker-to ${display}`}
                    id='to'
                    icon={faVolumeLow}
                    onClick={(e) => speak(toText, selectedToLanguage, e.currentTarget.id, setAudioAnimation)}
                /> :
                <FontAwesomeIcon
                    className={`speaker speaker-to ${display}`}
                    id='to'
                    icon={faVolumeHigh}
                    onClick={(e) => speak(toText, selectedToLanguage, e.currentTarget.id, setAudioAnimation)}
                />
        }
        <FontAwesomeIcon className={`copy copy-to ${display}`} icon={faCopy} onClick={() => copy(toText)} />

    </>

)

export default ToolsRight