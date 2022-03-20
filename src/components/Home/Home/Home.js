import React, { useEffect } from 'react';
import Doctors from '../../Doctors/Doctors';
import Pricing from '../../Pricing/Pricing';
import Test from '../../Test/Test';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
const Home = () => {
    useEffect(()=>{
        document.title='Medicare';
      },[]);
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Test></Test>
            <Doctors></Doctors>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;