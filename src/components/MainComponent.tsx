import { useEffect, useState } from "react"
import { languages } from "../utils/Languages"
import { get } from "../service/get";

const MainComponent = () => {
    const [optionValues, setOptionValues] = useState<string[]>([]);
    const [fromText, setFromText] = useState<string>("");
    const [toText, setToText] = useState<string>("")
    const [selectedFromLanguage, setSelectedFromLanguage] = useState<string>("Turkish");
    const [selectedToLanguage, setSelectedToLanguage] = useState<string>("English");


    useEffect(() => {
        setOptionValues(Object.values(languages).map(item => item))
    }, [])

    return (
        <div className='box'>
            <div className="tool-bar">
                <select value={selectedFromLanguage}
                    onChange={(e) => setSelectedFromLanguage(e.target.value)}>
                    {
                        optionValues.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
                <select value={selectedToLanguage} onChange={(e) => setSelectedToLanguage(e.target.value)}>
                    {
                        optionValues.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className="input-group">
                <textarea id="fromText" onChange={(e) => setFromText(e.target.value)}></textarea>
                <textarea id="toText" readOnly value={toText}></textarea>
            </div>
            <button className="btn-translate" onClick={() => {
                get(fromText, selectedFromLanguage, selectedToLanguage, setToText)
            }}>Translate</button>
        </div >
    )
}

export default MainComponent


// <FontAwesomeIcon icon={faVolumeLow} />
// <FontAwesomeIcon icon={faVolumeHigh} /> volume high