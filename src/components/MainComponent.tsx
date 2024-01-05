import { useEffect, useState } from "react"
import { languages } from "../utils/Languages"
import { get } from "../service/get";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tools from "./Tools";

const MainComponent = () => {
    const [fromText, setFromText] = useState<string>("");
    const [toText, setToText] = useState<string>("")
    const [selectedFromLanguage, setSelectedFromLanguage] = useState<string>("tr-TR");
    const [selectedToLanguage, setSelectedToLanguage] = useState<string>("en-GB");
    const [displayLeft, setDisplayLeft] = useState<string>("display")
    const [displayRight, setDisplayRight] = useState<string>("display")
    const [audioAnimationLeft, setAudioAnimationLeft] = useState<boolean>(false)
    const [audioAnimationRight, setAudioAnimationRight] = useState<boolean>(false)

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

    const exchange = () => {
        // Text exchange
        if (toText !== "") {
            const prevFromText = fromText;
            setFromText(toText);
            setToText(prevFromText);
        } else {
            console.log("exchange için kelime yok");
        }

        // Lang exchange
        const prevSelectedFromLang = selectedFromLanguage;
        setSelectedFromLanguage(selectedToLanguage);
        setSelectedToLanguage(prevSelectedFromLang);
    };


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
                <FontAwesomeIcon className="exchange" icon={faRightLeft} onClick={() => exchange()} />
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
                        value={fromText}
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
                    <Tools
                        display={displayLeft}
                        text={fromText}
                        selectedLanguage={selectedFromLanguage}
                        audioAnimation={audioAnimationLeft}
                        setAudioAnimation={setAudioAnimationLeft}
                        side={"from"}
                    />
                    <Tools
                        display={displayRight}
                        text={toText}
                        selectedLanguage={selectedToLanguage}
                        audioAnimation={audioAnimationRight}
                        setAudioAnimation={setAudioAnimationRight}
                        side={"to"}
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
