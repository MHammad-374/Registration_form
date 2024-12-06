import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Home({ setNavbar }) {
    const navigate = useNavigate();

    useEffect(() => {
        setNavbar('')
    }, [])


    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Data to enrich your <br /> online business</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Streamline your data management with our powerful, intuitive solutions <br /> designed to help you organize, secure, and optimize your data for <br /> seamless business operations</p>
            </div>
        </main>
    )
}

export default Home
