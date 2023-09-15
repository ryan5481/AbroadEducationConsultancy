import React, { useEffect, useState, useRef } from 'react';
import { Text, Box, Button } from "@chakra-ui/react";

import Carousel from "../components/imageGallery/carousel";
import Services from '../components/homePageComponents/services';
import AboutUs from '../components/homePageComponents/aboutUs';
import ArticlesGrid from '../components/homePageComponents/articlesGrid';

const Home = () => {
   
   

  

    return (
        <>
            <Box bg='brown.10'>
                <Carousel />
                <Services />
                <AboutUs/>
                <ArticlesGrid/>
            </Box>
        </>
    );
};

export default Home;
