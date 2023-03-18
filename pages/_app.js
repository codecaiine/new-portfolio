import { ChakraProvider } from "@chakra-ui/react"
import { layout } from "@chakra-ui/react"

const Website = ({ Component, pageProps, router }) => {

return (  
   <ChakraProvider>
      <layout router={router}>
        <Component {...pageProps} key={router.route}/>
      </layout>
   </ChakraProvider>
)
}

export default Website