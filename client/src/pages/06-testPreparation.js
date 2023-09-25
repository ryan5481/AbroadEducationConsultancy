import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Image, Grid } from '@chakra-ui/react';

const TestPrepration = () => {
    const navigate = useNavigate()
    const testLogos = [
        {
            logo: "PTE_logo.png",
            href: "/pte"
        },
        {
            logo: "IELTS_logo.png",
            href: "/ielts"
        },
        {
            logo: "TOEFL_logo.png",
            href: "/toefl"
        },
        {
            logo: "GRE_logo.png",
            href: "/gre"
        },
        {
            logo: "SAT_logo.png",
            href: "/sat"
        }
    ]
    return (<>
        <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }} p={10} gap={10}>

            {testLogos.map((item, index) => (
                <>

                    <Box
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        // data-aos-delay="500"
                        maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        justifySelf='center'
                        onClick={() => navigate(`${item.href}-test`)}
                    >
                        <Image
                            m={10}
                            w="xs"
                            rounded="lg"
                            src={require(`../uploads/00-languageTestLogos/${item.logo}`)}
                        />
                    </Box>
                </>
            ))
            }
        </Grid>
    </>)
}

export default TestPrepration
