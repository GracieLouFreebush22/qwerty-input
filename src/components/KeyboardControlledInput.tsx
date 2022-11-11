import {useState} from "react";

export function KeyboardControlledInput() {
    const [ typedMessage, setTypedMessage] = useState("");

    return(
        <>
            <input
                value= {typedMessage}
                onChange={(event) => {
                    setTypedMessage(event.target.value);
                }}
            />
            <button
                onClick={()=>
                    console.log(
                        "KeyboardControlledInput: \n",
                        typedMessage,
                        "\n\n which we could process in some way"
                    )
                }
            >
            Log input
            </button>
        </>
    )
}

export default KeyboardControlledInput;