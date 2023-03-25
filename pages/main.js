import Head from 'next/head';
import Navbar from '../components/navbar';
import { Box, Container, Heading } from '@chakra-ui/react';

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
             <Head>
             <meta name="viewport" content="width=device-width, initial-scale=1" />
             <title>Yannick-Noel - Homepage</title>
             </Head>
             <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
            {children}
            <Footer />
        </Container>
        </Box>
    )
}

export default Main;