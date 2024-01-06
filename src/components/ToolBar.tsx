import { languages } from '../utils/Languages'
import { TranslationContext } from '../context/Context'
import { useContext } from 'react'
import { get } from '../service/get'
import { Exchange } from '../assets/svg/SVGs'



const ToolBar = () => {
    const { toText, setToText, fromText, setFromText,
        selectedFromLanguage, setSelectedFromLanguage,
        selectedToLanguage, setSelectedToLanguage, setLoading, setToast } = useContext(TranslationContext)

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

    return (
        <div className="tool-bar">
            <select
                value={selectedFromLanguage}
                onChange={(e) => setSelectedFromLanguage(e.target.value)}>
                {Object.entries(languages).map(([code, languageName]) => (
                    <option key={code} value={code}>
                        {languageName}
                    </option>
                ))}
            </select>
            <Exchange
                className="exchange"
                onClick={() => exchange()}
            />
            <select
                value={selectedToLanguage}
                onChange={(e) => {
                    setSelectedToLanguage(e.target.value)
                    get({ fromText, selectedFromLanguage, selectedToLanguage: e.target.value, setToText, setLoading, setToast })
                }}>
                {Object.entries(languages).map(([code, languageName]) => (
                    <option key={code} value={code}>
                        {languageName}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ToolBar