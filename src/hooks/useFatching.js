import { useState } from "react"

export const useFethcing = (callback)=>{
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const featching = async ()=>{
        try{
            setIsLoading(true)
            await callback()
        }catch(e){
            setError(e)
        }finally{
            setIsLoading(false)
        }
    }
    return [featching, isLoading, error]
}