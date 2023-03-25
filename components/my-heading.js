import { Box, Heading } from "@chakra-ui/react";


const MyHeading = () => {
    return (
        <Box
            backgroundImage="url(../public/images/blog/cottonbro.jpg)"
            backgroundSize="cover"
            backgroundPosition="center"
            h="200px" // adjust the height as needed
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <Heading size="xl" color="white">
                My Heading
            </Heading>
        </Box>
      )
}

export default MyHeading