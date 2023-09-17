import React, { useEffect, useState, useRef } from 'react';
import { Text, Box, Button } from "@chakra-ui/react";

import Carousel from "../components/homePageComponents/01-carousel";
import Services from '../components/homePageComponents/02-services';
import AboutUs from '../components/homePageComponents/03-aboutUs';
import ArticlesGrid from '../components/homePageComponents/04-articlesGrid';
import CountryArticlesGrid from '../components/homePageComponents/05-counrtyArticlesGrid'
import Testimonies from '../components/homePageComponents/06-testimonies';

const Home = () => {
   
   

    return (
        <>
            <Box bg='brown.10'>
                <Carousel />
                <Services />
                <AboutUs/>
                <ArticlesGrid/>
                <CountryArticlesGrid/>
                <Testimonies/>
            </Box>
        </>
    );
};

export default Home;
