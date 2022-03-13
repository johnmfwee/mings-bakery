import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { FaShoppingCart } from 'react-icons/fa'
import { useAuth } from '../lib/auth-context'
import { useState, useEffect } from 'react'

const LinkItem = ({ href, path, children, _target, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray20', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props) => {
  const { path } = props
  const { logout, currentUser } = useAuth()

  const [total, setTotal] = useState(0)
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total)
    }
  })

  const handleLogout = async (e) => {
    e.preventDefault()
    await logout()
  }
  return (
    <Box
      as='nav'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      position='fixed'
      w='100%'
      zIndex={1}
      css={{ backdropFilter: 'blur(10px)' }}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {!currentUser && (
            <LinkItem href='login' path={path}>
              Login
            </LinkItem>
          )}
          {!currentUser && (
            <LinkItem href='register' path={path}>
              Register
            </LinkItem>
          )}
          {/* {currentUser && ( */}
          <LinkItem href='/order' path={path}>
            Order
          </LinkItem>
          {/* )} */}
          {currentUser && (
            <LinkItem href='profile' path={path}>
              {currentUser.email}
            </LinkItem>
          )}
          {currentUser && (
            <LinkItem
              href='logout'
              path={path}
              onClick={(e) => handleLogout(e)}
            >
              Logout
            </LinkItem>
          )}
          {currentUser && (
            <LinkItem className='snipcart-checkout snipcart-summary' href='#'>
              <FaShoppingCart size={'1.5em'} />
              <span className='snipcart-total-price'>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(total)}
              </span>
            </LinkItem>
          )}
        </Stack>

        <Box flex={1} align='right'>
          <ThemeToggleButton />
          {/* Test */}
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                {!currentUser && (
                  <NextLink href='/login' passHref>
                    <MenuItem as={Link}>Login</MenuItem>
                  </NextLink>
                )}
                {!currentUser && (
                  <NextLink href='/register' passHref>
                    <MenuItem as={Link}>Register</MenuItem>
                  </NextLink>
                )}
                {currentUser && (
                  <NextLink href='/order' passHref>
                    <MenuItem as={Link}>Order</MenuItem>
                  </NextLink>
                )}
                {currentUser && (
                  <NextLink
                    className='snipcart-checkout snipcart-summary'
                    href='#'
                  >
                    <MenuItem as={Link}>
                      <span className='snipcart-total-price'>
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(total)}
                      </span>
                    </MenuItem>
                  </NextLink>
                )}
                {currentUser && (
                  <NextLink href='/profile' passHref>
                    <MenuItem as={Link}>Profile</MenuItem>
                  </NextLink>
                )}
                {currentUser && (
                  <NextLink href='/logout' passHref>
                    <MenuItem as={Link}>Logout</MenuItem>
                  </NextLink>
                )}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
