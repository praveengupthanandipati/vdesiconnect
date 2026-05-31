import React from 'react'
import Homehero from '../components/Homehero'
import Homefeatures from '../components/Homefeatures'
import Homeservices from '../components/Homeservices'
import Homenewarrivals from '../components/Homenewarrivals'
import Dealsoftheday from '../components/Dealsoftheday'
import Homebestsellers from '../components/Homebestsellers'
import Homevendorbanner from '../components/Homevendorbanner'
import Homegroupproducts from '../components/Homegroupproducts'

const Home = () => {
  return (
    <React.Fragment>
        <Homehero />        
        <Homeservices />
        <Homenewarrivals />
        <Dealsoftheday />
        <Homebestsellers />
        <Homevendorbanner />
        <Homegroupproducts />
        <Homefeatures />
    </React.Fragment>
  )
}

export default Home
