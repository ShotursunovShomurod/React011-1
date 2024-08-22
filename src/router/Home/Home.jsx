import React from 'react'
import Hero from '../../components/Hero/Hero'
import Featured from '../../components/Featured/Featured'

import Collection from '../../components/Collection/Collection'
import Stayhome from '../../components/Stayhome/StayHome.jsx'

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