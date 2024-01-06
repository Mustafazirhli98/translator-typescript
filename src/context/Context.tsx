import { createContext, useState } from 'react'
import { ContextTypes } from './types'

const defaultState = {
    fromText: "",
    setFromText: () => { },
    toText: "",
    setToText: () => { },
    selectedFromLanguage: "tr-TR",
    setSelectedFromLanguage: () => { },
    selectedToLanguage: "en-GB",
    setSelectedToLanguage: () => { },
    displayLeft: "display",
    setDisplayLeft: () => { },
    displayRight: "display",
    setDisplayRight: () => { },
    audioAnimationLeft: false,
    setAudioAnimationLeft: () => { },
    audioAnimationRight: false,
    setAudioAnimationRight: () => { },
    loading: false,
    setLoading: () => { },
    toast: { state: "", text: "" },
    setToast: () => { }

}


interface ContextProvideProps {
    children: React.ReactNode
}
const TranslationContext = createContext<ContextTypes>(defaultState)

const ContextProvider = ({ children }: ContextProvideProps) => {
    //#region states
    const [fromText, setFromText] = useState<string>("");
    const [toText, setToText] = useState<string>("")
    const [selectedFromLanguage, setSelectedFromLanguage] = useState<string>("tr-TR");
    const [selectedToLanguage, setSelectedToLanguage] = useState<string>("en-GB");
    const [displayLeft, setDisplayLeft] = useState<string>("display");
    const [displayRight, setDisplayRight] = useState<string>("display");
    const [audioAnimationLeft, setAudioAnimationLeft] = useState<boolean>(false);
    const [audioAnimationRight, setAudioAnimationRight] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [toast, setToast] = useState({ state: "", text: "" })
    //#endregion
    return (
        <TranslationContext.Provider
            value={{
                fromText, setFromText, toText, setToText,
                selectedFromLanguage, setSelectedFromLanguage,
                selectedToLanguage, setSelectedToLanguage,
                displayLeft, setDisplayLeft, displayRight, setDisplayRight,
                audioAnimationLeft, setAudioAnimationLeft, audioAnimationRight,
                setAudioAnimationRight, loading, setLoading,
                toast, setToast
            }}>
            {children}
        </TranslationContext.Provider>
    )

}
export {
    ContextProvider,
    TranslationContext
}


