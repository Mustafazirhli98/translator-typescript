export const copy = (text: string) => {
    navigator.clipboard.writeText(text)
}

interface Speak {
    text: string,
    selectedLanguage: string,
    setAudioAnimation: (param: boolean) => void
}
export const speak = ({ text, selectedLanguage, setAudioAnimation }: Speak) => {
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.lang = selectedLanguage;
    speechSynthesis.speak(utterance);

    utterance.onstart = () => {
        setAudioAnimation(true)
    }
    utterance.onend = () => {
        setAudioAnimation(false)
    }
}

interface ControlFromText {
    fromText: string,
    setToText: (param: string) => void,
    setDisplayLeft: (param: string) => void
}
export const controlFromText = ({ fromText, setToText, setDisplayLeft }: ControlFromText): void => {
    if (fromText === "") {
        setDisplayLeft("display");
        setToText("")
    } else setDisplayLeft("")
}

interface ControlToText {
    toText: string,
    setDisplayRight: (param: string) => void
}
export const controlToText = ({ toText, setDisplayRight }: ControlToText) => {
    if (toText === "") {
        setDisplayRight("display")
    } else setDisplayRight("")
}

interface Toast {
    setToast: React.Dispatch<React.SetStateAction<{ state: boolean; text: string }>>;
    toastValue: string;
}
export const showToast = ({ setToast, toastValue }: Toast) => {
    setToast({ state: true, text: toastValue });
    setTimeout(() => {
        setToast({ state: false, text: "" });
    }, 3000)
};