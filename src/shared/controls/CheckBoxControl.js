import React, { useEffect, useRef } from 'react';

const CheckBoxControl = React.memo(({
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
                <input type="checkbox" className="form-radio" onClick={() => onChecked()} ref={input_Ref} name={name} />
                <span className="mr-0.5">{title}</span>
            </label>
        </div>
    )
})
export default CheckBoxControl;