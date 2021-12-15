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
            <label class="inline-flex items-center">
                <input type="radio" class="form-radio" onFocus={() => onChecked()} ref={input_Ref} name={name} />
                <span class="mr-0.5">{title}</span>
            </label>
        </div>
    )
})
export default RadioControl;