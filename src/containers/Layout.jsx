import   * as React       from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { motion         } from "framer-motion"
import { theme          } from "./theme"
import   styled            from 'styled-components'

const Layout =({ children, delay=0 })=> { return (

  <ChakraProvider theme={theme}>
<motion.div 
  initial=   {{ y: 10, opacity: 0 }}
  animate=   {{ y: 0,  opacity: 1 }}
  transition={{ duration: 0.2, delay: delay }}
  viewport=  {{ once: false }}
  __css=     {{backgroundColor: "transparent"}}
>
  <SLayout id="thelayout">
    {children}
  </SLayout>
</motion.div>
  </ChakraProvider>

)  }; export { Layout };

const SLayout = styled.div`
  text-align: center;
  border-radius: 15px;
  color: white;
  margin: 0px auto;
  width: 90%;
  display: grid;
  place-content: center;
  min-width: 480px;
  min-height: 100vh;
  max-width: 480px;
  z-index: 0;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar{
    display: none;
  }
  background: linear-gradient(13deg, rgba(189,141,251,1) 7%, rgba(248,251,250,1) 53%, rgba(176,202,224,1) 87%);
  box-shadow:  20px 20px 40px #98a8b8,
              -20px -20px 40px #ffffff;
`