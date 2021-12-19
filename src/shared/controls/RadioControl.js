import React, { useEffect, useRef } from 'react';

const RadioControl = React.memo(({
    title,
    onChecked,
    checked,
    name
}) => {
    const input_Ref = useRef();

    useEffect(() => {
        try {
            if (!!checked) {
                input_Ref.current.checked = true;
            } else {
                input_Ref.current.checked = false;
            }
        }
        catch (e) {
            console.log("e: ", e)
        }
    }, [checked])
    return (
        <div>
            <label className="inline-flex items-center">
                <input type="radio" className="form-radio" onFocus={() => onChecked()} ref={input_Ref} name={name} />
                <span className="mr-0.5">{title}</span>
            </label>
        </div>
    )
})
export default RadioControl;