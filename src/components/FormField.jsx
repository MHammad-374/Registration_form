import React from 'react'

function FormField({ inputArr, value, setValue }) {

    const handleOnChange = (e, ind) => {
        setValue(prev => {
            prev[ind] = e.target.value
            return [...prev]
        })
    }

    return (
        <form className="w-full max-w-sm">
            {
                inputArr.map((input, index) => {
                    return (
                        <div key={input.id} className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    {input.label}
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="text"
                                    value={value[index]}
                                    onChange={(e) => handleOnChange(e, index)}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </form>
    )
}

export default FormField
