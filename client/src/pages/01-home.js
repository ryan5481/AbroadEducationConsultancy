import React, { useEffect, useState, useRef } from 'react';
import { Text, Box, Button } from "@chakra-ui/react";

import Carousel from "../components/homePageComponents/01-carousel";
import ServicesGrid from '../components/homePageComponents/02-servicesGrid';
import AboutUs from '../components/homePageComponents/03-aboutUs';
import ArticlesGrid from '../components/homePageComponents/04-articlesGrid';
import CountryArticlesGrid from '../components/homePageComponents/05-counrtyArticlesGrid'
import Testimonies from '../components/homePageComponents/06-testimonies';
import Universities from '../components/homePageComponents/07-universitiesCarousel';
import LineChart from '../components/homePageComponents/08-lineChart'

const Home = () => {
   

    return (
        <>
            <Box>
                <Carousel />
                <ServicesGrid displayAll={false} fromHomePage={true} />
                <AboutUs/>
                <ArticlesGrid/>
                <CountryArticlesGrid fromHomePage='true' />
                <Testimonies/>
                <Box >
                <Universities />
                <LineChart />
                </Box>
            </Box>
        </>
    );
};

export default Home;
