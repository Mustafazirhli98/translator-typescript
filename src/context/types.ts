export interface ContextTypes {
    fromText: string,
    setFromText: (param: string) => void,
    toText: string,
    setToText: (param: string) => void
    selectedFromLanguage: string,
    setSelectedFromLanguage: (param: string) => void
    selectedToLanguage: string,
    setSelectedToLanguage: (param: string) => void
    displayLeft: string,
    setDisplayLeft: (param: string) => void,
    displayRight: string,
    setDisplayRight: (param: string) => void
    audioAnimationLeft: boolean,
    setAudioAnimationLeft: (param: boolean) => void
    audioAnimationRight: boolean,
    setAudioAnimationRight: (param: boolean) => void
    loading: boolean,
    setLoading: (param: boolean) => void
}