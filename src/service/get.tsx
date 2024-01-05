import axios from "axios"

export const get = async (fromTextVALUE: string, fromLangVALUE: string, toLangVALUE: string, setToText: (param: string) => void) => {
    const response = await axios.get(`https://api.mymemory.translated.net/get?q=${fromTextVALUE}!&langpair=${fromLangVALUE}|${toLangVALUE}`)
    const translatedText = response.data.responseData.translatedText
    setToText(translatedText)

}