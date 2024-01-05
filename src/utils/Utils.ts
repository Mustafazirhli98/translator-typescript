export const copy = (text: string) => {
    navigator.clipboard.writeText(text)
}

export const speak = (text: string, lang: string, id: string, setAudioAnimation: any) => {
    let utterance;
    utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
    setAudioAnimation()

    utterance.onstart = () => {
        setAudioAnimation(true)
    }
    utterance.onend = () => {
        setAudioAnimation(false)
    }
}