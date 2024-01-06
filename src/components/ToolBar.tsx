import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { languages } from '../utils/Languages'
import { TranslationContext } from '../context/Context'
import { useContext } from 'react'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { get } from '../service/get'


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
            <FontAwesomeIcon
                className="exchange"
                icon={faRightLeft}
                onClick={() => exchange()} />
            <select
                value={selectedToLanguage}
                onChange={(e) => {
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