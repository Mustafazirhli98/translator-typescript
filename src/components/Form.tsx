import React, { useContext } from 'react'
import { TranslationContext } from '../context/Context'

import Tools from './Tools'
import { get } from '../service/get'

const Form = () => {
    const { fromText, setFromText, toText, setToText, selectedFromLanguage, selectedToLanguage, loading, setLoading, displayLeft, displayRight, audioAnimationLeft, setAudioAnimationLeft, audioAnimationRight, setAudioAnimationRight } = useContext(TranslationContext)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            get(fromText, selectedFromLanguage, selectedToLanguage, setToText, setLoading)
        }}>
            <div className="input-group">
                <textarea
                    value={fromText}
                    id="fromText"
                    onChange={(e) => setFromText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            get(fromText, selectedFromLanguage, selectedToLanguage, setToText, setLoading)
                        }
                    }}
                >
                </textarea>
                <textarea id="toText" readOnly value={loading ? "Loading..." : toText}></textarea>
                <Tools
                    display={displayLeft}
                    text={fromText}
                    selectedLanguage={selectedFromLanguage}
                    audioAnimation={audioAnimationLeft}
                    setAudioAnimation={setAudioAnimationLeft}
                    side={"from"}
                />
                <Tools
                    display={displayRight}
                    text={toText}
                    selectedLanguage={selectedToLanguage}
                    audioAnimation={audioAnimationRight}
                    setAudioAnimation={setAudioAnimationRight}
                    side={"to"}
                />
            </div>
            <button
                type="submit"
                className="btn-translate">
                Translate
            </button>
        </form >
    )
}

export default Form