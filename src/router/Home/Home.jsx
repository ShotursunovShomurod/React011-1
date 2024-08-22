import React from 'react'
import Hero from '../../components/Hero/Hero'
import Featured from '../../components/Featured/Featured'
import Stayhome from '../../components/StayHome/Stayhome.jsx'
import Collection from '../../components/Collection/Collection'

const Home = () => {
    return (
        <>
            <Hero/>
            <Featured/>
            <Stayhome/>
            <Collection/>
        </>
    )
}

export default Home