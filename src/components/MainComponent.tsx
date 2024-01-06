import { useContext, useEffect } from "react"
import { TranslationContext } from "../context/Context";
import ToolBar from "./ToolBar";
import Form from "./Form";
import { controlFromText, controlToText } from "../utils/Utils";

const MainComponent = () => {

    const { fromText, toText, setToText, setDisplayLeft, setDisplayRight, } = useContext(TranslationContext)

    useEffect(() => {
        controlFromText({ fromText, setDisplayLeft, setToText })
        controlToText({ toText, setDisplayRight })
    },)
    
    return (
        <div className='box'>
            <ToolBar />
            <Form />
        </div >
    )
}

export default MainComponent