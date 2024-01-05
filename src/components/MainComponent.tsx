import { useEffect, useState } from "react"
import { languages } from "../utils/Languages"
import { get } from "../service/get";
import ToolsLeft from "./ToolsLeft";
import ToolsRight from "./ToolsRight";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainComponent = () => {
    const [fromText, setFromText] = useState<string>("");
    const [toText, setToText] = useState<string>("")
    const [selectedFromLanguage, setSelectedFromLanguage] = useState<string>("tr-TR");
    const [selectedToLanguage, setSelectedToLanguage] = useState<string>("en-GB");
    const [displayLeft, setDisplayLeft] = useState<string>("display")
    const [displayRight, setDisplayRight] = useState<string>("display")
    const [audioAnimation, setAudioAnimation] = useState<boolean>(false)

    const controlFromText = () => {
        if (fromText === "") {
            setDisplayLeft("display");
            setToText("")
        } else setDisplayLeft("")
    }
    const controlToText = () => {
        if (toText === "") {
            setDisplayRight("display")
        } else setDisplayRight("")
    }


    useEffect(() => {
        controlFromText()
        controlToText()
    }, [fromText, toText])

    return (
        <div className='box'>
            <div className="tool-bar">
                <select value={selectedFromLanguage} onChange={(e) => setSelectedFromLanguage(e.target.value)}>
                    {Object.entries(languages).map(([code, languageName]) => (
                        <option key={code} value={code}>
                            {languageName}
                        </option>
                    ))}
                </select>
                <FontAwesomeIcon className="exchange" icon={faRightLeft} />
                <select value={selectedToLanguage} onChange={(e) => setSelectedToLanguage(e.target.value)}>
                    {Object.entries(languages).map(([code, languageName]) => (
                        <option key={code} value={code}>
                            {languageName}
                        </option>
                    ))}
                </select>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
                get(fromText, selectedFromLanguage, selectedToLanguage, setToText)
            }}>
                <div className="input-group">
                    <textarea
                        id="fromText"
                        onChange={(e) => setFromText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                get(fromText, selectedFromLanguage, selectedToLanguage, setToText)
                            }
                        }}
                    >
                    </textarea>
                    <textarea id="toText" readOnly value={toText}></textarea>
                    <ToolsLeft
                        display={displayLeft}
                        fromText={fromText}
                        selectedFromLanguage={selectedFromLanguage}
                        audioAnimation={audioAnimation}
                        setAudioAnimation={setAudioAnimation}
                    />
                    <ToolsRight
                        display={displayRight}
                        toText={toText}
                        selectedToLanguage={selectedToLanguage}
                        audioAnimation={audioAnimation}
                        setAudioAnimation={setAudioAnimation}
                    />
                </div>
                <button
                    type="submit"
                    className="btn-translate">
                    Translate
                </button>
            </form >
        </div >
    )
}

export default MainComponent


// <FontAwesomeIcon icon={faVolumeLow} />
// <FontAwesomeIcon icon={faVolumeHigh} /> volume high
