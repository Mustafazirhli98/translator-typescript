import { useContext } from "react";
import { Copy, SpeakerHigh, SpeakerLow } from "../assets/svg/SVGs";
import { copy, showToast, speak } from "../utils/Utils"
import { TranslationContext } from "../context/Context";

interface IProps {
    display: Object,
    text: string,
    selectedLanguage: string,
    audioAnimation: boolean,
    setAudioAnimation: (param: boolean) => void;
    side: string;
}

const Tools = ({ display, text, selectedLanguage, audioAnimation, setAudioAnimation, side }: IProps) => {
    const { setToast } = useContext(TranslationContext)
    return (
        <>
            {
                audioAnimation === false ?
                    <SpeakerLow
                        className={`speaker speaker-${side} ${display}`}
                        id={side}
                        onClick={(e) => speak({ text, selectedLanguage, setAudioAnimation })}
                    />
                    :
                    <SpeakerHigh
                        className={`speaker speaker-${side} ${display}`}
                        id={side}
                        onClick={(e) => speak({ text, selectedLanguage, setAudioAnimation })}
                    />
            }
            <Copy
                className={`copy copy-${side} ${display}`}
                onClick={() => {
                    copy(text)
                    showToast({ setToast, toastValue: "Copied!" });
                }}
            />
        </>
    )
}
export default Tools