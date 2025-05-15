/* const Home = () => {
    return <div / >
}

export const getServerSideProps = async() => {
    return {
        redirect: {
            permanent: true,
            destination: '/cleanstarenergy',
        }
    }
} */

import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home = () => {
    const router = useRouter()
    useEffect(() => {
        router.replace('/cleanstarenergy')
    }, [])
    return <div>Loading...</div>
}


export default Home;