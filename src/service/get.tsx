import axios from "axios"

export const get = async (fromTextVALUE: string, fromLangVALUE: string, toLangVALUE: string, setToText: (param: string) => void, setLoading: (param1: boolean) => void) => {
    setLoading(true)
    const response = await axios.get(`https://api.mymemory.translated.net/get?q=${fromTextVALUE}!&langpair=${fromLangVALUE}|${toLangVALUE}`)
    setLoading(false)
    const translatedText = response.data.responseData.translatedText
    setToText(translatedText)

}