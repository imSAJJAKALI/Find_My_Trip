import React, { useEffect, useState } from 'react'
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { NavLink, useNavigate } from 'react-router-dom'
import style from '../styles/navbar.module.css'
import { Button, Drawer, Input, useDisclosure, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverArrow, PopoverHeader, PopoverBody } from "@chakra-ui/react"
import { auth } from '../Pages/firebaseAuth'
import { signOut } from '@firebase/auth'
import { scale } from 'style-value-types'


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let Navigate = useNavigate()
  let [Auth, setAuth] = useState<string>('Login IN')

  useEffect(() => {
    auth.onAuthStateChanged((user) => user == null ? setAuth('Login IN') : setAuth(user.email || ''))
  }, [])


  return (
    <div className={style.navbar} style={{ zIndex: "5" }}>
      <div className={style.logoDiv}>


        <img onClick={() => Navigate('/')} src='https://github.com/imSAJJAKALI/purring-root-8/assets/112471219/be02d43f-211f-4200-8208-a8f4bb0271eb' alt="logo" />

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
        

        <Popover>
          <PopoverTrigger>
            <span className={`${style.profileIcon} material-symbols-outlined`}>person 
            <span className={style.authStatus} style={{position:'absolute',color:Auth==='Login IN'?'red':'green'}}>.</span>
            </span>
          </PopoverTrigger>
          <PopoverContent w='300px'>
            <PopoverArrow/>
            <PopoverCloseButton />
            <PopoverHeader ><p style={{fontSize:'15px'}}>{Auth}</p></PopoverHeader>
            <PopoverBody>{Auth==='Login IN'?
              <Button colorScheme='blue' onClick={()=>Navigate('/login')}>Login</Button>:
              <Button colorScheme='blue' onClick={()=>signOut(auth)}>Logout</Button>}
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <div className={style.hymberger}>
          <Button p='0px' bg='transparent' onClick={onOpen}><span className="material-symbols-outlined">menu</span></Button>
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