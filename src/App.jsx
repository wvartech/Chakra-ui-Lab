import { Box, ChakraProvider, Flex, Spacer } from '@chakra-ui/react';
import Header from './components/Header';

function App() {

  return (
    <ChakraProvider>
      <Flex direction="column" alignItems="center" justifyContent="center" height="100vh" maxWidth="100%">
          <Flex as="header" alignItems="center" justifyContent="center" height="20vh" marginBottom={10} >
            <Header title="Domina el terreno" btn1="Ver detalles" btn2="Ver Video"/>
          </Flex>
          <Flex flexGrow={1} width="100%" direction="row">
            <Flex as="aside" width="20%" align="flex-start" justify="flex-start">
              <Header sidebar={true} title="Domina el terreno" btn1="Ver detalles" btn2="Ver Video"/>
            </Flex>
          </Flex>


      </Flex>
    </ChakraProvider>
  )
}

export default App
