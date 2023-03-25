import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '../navbar';
import { Box, Container } from '@chakra-ui/react';
import Footer from '../footer';
import MyHeading from '../my-heading';


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yannick's homepage" />
        <meta name="author" content="Yannick-Noel AKA" />
        <meta name="author" content="codecaiine" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Yannick-Noel AKA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@codecaiine" />
        <meta name="twitter:creator" content="@codecaiine" />
        <meta name="twitter:image" content="https://www.github.com/codecaiine" />
        <meta property="og:site_name" content="Yannick-Noel AKA" />
        <meta name="og:title" content="Yannick-Noel AKA" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.github.com/codecaiine" />
        <title>Yannick-Noel - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <MyHeading/>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
