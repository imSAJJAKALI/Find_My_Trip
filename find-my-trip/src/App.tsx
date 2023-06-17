import * as React from "react"
import {
  ChakraProvider,
  Box,

  theme,
} from "@chakra-ui/react"

import { Logo } from "./Logo"
import Navbar from "./Components/Navbar"

import Destinations from "./Pages/Destinations"
import Home from "./Pages/Home"
import MainRoute from "./Pages/mainRoute"
import Footer from "./Components/Footer"





export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar/>
   <MainRoute/>
  <Footer/>
  </ChakraProvider>
)
