export const copy = (text: string) => {
    navigator.clipboard.writeText(text)
}

export const speak = (text: string, lang: string, id: string, setAudioAnimation: (param1: boolean) => void) => {
    let utterance;

    utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.lang = lang;
    speechSynthesis.speak(utterance);

    utterance.onstart = () => {
        setAudioAnimation(true)
    }
    utterance.onend = () => {
        setAudioAnimation(false)
    }
}

