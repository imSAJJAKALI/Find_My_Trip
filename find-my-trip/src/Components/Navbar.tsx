import React from 'react'
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { NavLink } from 'react-router-dom'
import style from '../styles/navbar.module.css'
import { Button, Drawer, Input, useDisclosure, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from "@chakra-ui/react"


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()


  return (
    <div className={style.navbar} style={{zIndex:"5"}}>
      <div className={style.logoDiv}>
     <img  src='https://github.com/imSAJJAKALI/purring-root-8/assets/112471219/be02d43f-211f-4200-8208-a8f4bb0271eb' alt="logo" />
        <Input size='sm' placeholder='Serach for Destinations' border='1px' bg='transparent' borderRadius='25px' />
      </div>
      <div className={style.navRoutes}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Home </NavLink>
        <NavLink to="/Destinations" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Destinations </NavLink>
        <NavLink to="/Booking" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Booking </NavLink>
        <NavLink to="/Reviews" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Reviews </NavLink>
        <NavLink to="/ContactUs" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Contact Us </NavLink>
      </div>
      <div className={style.switchDiv}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <span className="material-symbols-outlined"><NavLink to={'/login'}>person</NavLink></span>
        <div className={style.hymberger}>
          <Button p='0px' bg='transparent'  onClick={onOpen}><span className="material-symbols-outlined">menu</span></Button>
        </div>

        <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='xs'>
          <DrawerOverlay />
          <DrawerContent  >
            <DrawerCloseButton />
            <DrawerBody>
              <div className={style.menuDiv}>
                <NavLink to="/" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
                  Home </NavLink>
                <NavLink to="/destinations" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
                  Destinations </NavLink>
                <NavLink to="/booking" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
                  Booking </NavLink>
                <NavLink to="/reviews" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
                  Reviews </NavLink>
                <NavLink to="/contact-us" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
                  Contact Us </NavLink>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      </div>
    </div>
  )
}

export default Navbar