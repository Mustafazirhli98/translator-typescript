import axios from "axios"
import { showToast } from "../utils/Utils";

interface GetMethod {
    fromText: string,
    selectedFromLanguage: string,
    selectedToLanguage: string,
    setToText: (param: string) => void,
    setLoading: (param1: boolean) => void,
    setToast: React.Dispatch<React.SetStateAction<{ state: string; text: string }>>;
}

export const get = async ({ fromText, selectedFromLanguage, selectedToLanguage, setToText, setLoading, setToast }: GetMethod) => {
    setLoading(true);
    try {
        const response = await
            axios.get(`https://api.mymemory.translated.net/get?q=${fromText}&langpair=${selectedFromLanguage}|${selectedToLanguage}`);
        setLoading(false);
        let translatedText = "";
        if (response.data.responseData.translatedText !== null) {
            translatedText = response.data.responseData.translatedText;
            setToText(translatedText);
        } else showToast({ setToast, toastValue: "Can't translate this language right now. Please come back later..." })

    } catch {
        showToast({ setToast, toastValue: "Can't translate this language right now. Please come back later..." })
    }
}