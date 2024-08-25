import { React, useState, useEffect } from 'react'
import axios from 'axios'

const useRequestData = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    

    const makeRequest = async (apiUrl) => {

        setIsLoading(true)

        try {
            let response = await axios.get('https://dansksuperrally-cms.pockethost.io/api/collections/stilling/records?perPage=100')

            if (response && response.data != undefined) {
                setData(response.data)
                setError(null)
            } else {
                throw new Error("Tomt response/ingen data.")
            }
        } catch (error) {
            console.log(error);
            setError('Der er opstået en fejl: ' + error.message)
            setData(null)
        } finally {
            setIsLoading(false)
        }
    }

    return { data, isLoading, error, makeRequest }
}



export default useRequestData



