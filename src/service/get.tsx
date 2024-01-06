import axios from "axios"

interface GetMethod {
    fromText: string,
    selectedFromLanguage: string,
    selectedToLanguage: string,
    setToText: (param: string) => void,
    setLoading: (param1: boolean) => void
}

export const get = async ({ fromText, selectedFromLanguage, selectedToLanguage, setToText, setLoading }: GetMethod) => {
    setLoading(true);
    const response = await
        axios.get(`https://api.mymemory.translated.net/get?q=${fromText}!&langpair=${selectedFromLanguage}|${selectedToLanguage}`);
    setLoading(false);
    const translatedText = response.data.responseData.translatedText;
    setToText(translatedText);

}