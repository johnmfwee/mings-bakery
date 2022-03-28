import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
  Link,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Card } from '../components/card'
import Layout from '../components/layouts/article'
import DividerWithText from '../components/divider'
import { useRouter } from 'next/router'
import { useAuth } from '../lib/auth-context'
import useMounted from '../lib/use-mounted'

const Login = () => {
  const router = useRouter()
  const { signInWithGoogle, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const mounted = useMounted()

  function handleRedirect() {
    router.push('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please enter your email and password',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return
    }
    // Login logic
    setIsSubmitting(true)
    login(email, password)
      .then((res) => {
        handleRedirect()
      })
      .catch((err) => {
        toast({
          title: 'Error',
          description: err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
      .finally(() => {
        mounted.current && setIsSubmitting(false)
      })
  }

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Login
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form onSubmit={(e) => handleSubmit(e)}>
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                id='email'
                type='email'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                id='password'
                type='password'
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type='submit'
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
              variantColor='teal'
              mt={4}
              mr={4}
              size='lg'
            >
              Sign In
            </Button>
          </Stack>
        </chakra.form>
        <HStack justifyContent='space=between' my={4}>
          <Button
            variant='link'
            onClick={() => router.push('/forgot-password')}
          >
            Forgot Password?
          </Button>
          <Button variant='link' onClick={() => router.push('/register')}>
            Register
          </Button>
        </HStack>
        <DividerWithText>OR</DividerWithText>
        <Button
          variaantColor='teal'
          type='submit'
          isFullWidth
          leftIcon={<FaGoogle />}
          size='lg'
          mr={4}
          mt={4}
          onClick={() =>
            signInWithGoogle()
              .then((user) => {
                handleRedirect()
                console.log(user)
              })
              .catch((e) => console.log(e.message))
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  )
}

export default Login
