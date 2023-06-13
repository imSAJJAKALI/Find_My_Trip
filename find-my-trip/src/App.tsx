import * as React from "react"
import {
  ChakraProvider,
  Box,

  theme,
} from "@chakra-ui/react"

import { Logo } from "./Logo"
import Navbar from "./Components/Navbar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      
      
    </Box>
    <h3>its Working........</h3>
  </ChakraProvider>
)
