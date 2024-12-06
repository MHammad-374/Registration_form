import React from 'react'
import { NavLink } from 'react-router-dom'

function RegistrationForm({ heading, inputFeilds, paragraph, link, linkTo, value, setValue, registrationFunction }) {

    const handleChange = (e, index) => {
        setValue(prev => {
            prev[index] = e.target.value
            return [...prev]
        })
    }
    return (
        <>
            <form className="px-8 md:px-10 pt-3 border-2 flex flex-col items-center justify-center rounded-lg">
                <h1 className='text-2xl md:text-3xl text-gray-800 text-center mb-7'>{heading}</h1>
                {
                    inputFeilds.map((item, index) => {
                        return (
                            <div key={item.id} class="w-full md:flex md:items-center mb-6">
                                <div className="w-24">
                                    <label className="text-sm block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        {item.label}
                                    </label>
                                </div>
                                <div className="">
                                    <input
                                        className="text-sm md:text-base bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                                        type={item.type}
                                        value={value[index]}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
                <button
                    className="text-sm md:text-base mx-auto shadow bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={registrationFunction}
                >
                    {heading}
                </button>
                <p className='text-sm md:text-base mt-3'>
                    {paragraph}
                    <NavLink className='text-sm md:text-base' to={linkTo}>{link}</NavLink>
                </p>
            </form>
        </>
    )
}

export default RegistrationForm;
