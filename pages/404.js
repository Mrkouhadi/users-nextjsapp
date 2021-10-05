import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1)
            router.push('/')
        }, 3000)
    },[]) // [] means run only when first mounted
    return (
        <div className="not-found">
            <h1>Ooooooooops...</h1>
            <h2>That page cannnot be found.</h2>
            <p>Go back  to 
                <Link href="/"><a> Homepage</a></Link>
            </p>
        </div>
    )
}

export default NotFound;
