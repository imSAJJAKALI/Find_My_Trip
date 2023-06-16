import * as React from "react"
import {
  ChakraProvider,
  Box,

  theme,
} from "@chakra-ui/react"

import { Logo } from "./Logo"
import Navbar from "./Components/Navbar"
import MainRoute from "./Pages/MainRoute"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Navbar/>
      <MainRoute/>
      
    </Box>
    <h1>Neelesh</h1>
    <h3>its Working........</h3>
  </ChakraProvider>
)
