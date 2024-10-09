import { useState } from "react"

export default function Toggle({
    offvalue="0",
    onvalue="1",
    className=''
}) {

    const [value, setValue] =  useState(offvalue);

    const handleChange = (e) => {
        if (e.target.checked){
            setValue(onvalue);
        }
        else {
            setValue(offvalue);
        }
    }

    return (
        <label className="h-8 w-14 bg-white border  rounded-full inline-block relative hover:cursor-pointer">
            <input
                type="checkbox"
                className="hidden"
                value={value}
                onChange={handleChange}
            />

            {
               value == offvalue && 
                <span className="absolute transition ease-in-out duration-200 left-1 top-1 h-6 w-6 rounded-full bg-[#64645f]"></span>
            }

            {
                value == onvalue && 
                <span className="absolute transition ease-in-out duration-200 right-1 top-1 h-6 w-6 rounded-full bg-[#21808d]"></span>
            }
        </label>
    )
}