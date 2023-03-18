import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () =>{

    return (
        <Container>
            <Box borderRadius="lg" bg="red" mb={6} p={3} textAlign="center">
            Hello, I&apos;m an software Engineer from Côte d&apos;Ivoire based in Yamoussoukro!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Yannick-Noel
                    </Heading>
                    <p>Digital Enthousiast (Developer/ Entrepreneur)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page;