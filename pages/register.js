import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Card } from '../components/card'
import DividerWithText from '../components/divider'
import Layout from '../components/layouts/article'
import { useAuth } from '../lib/auth-context'

const Register = () => {
  const router = useRouter()
  const { signInWithGoogle, register } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if (!email || !password) {
      toast({
        description: 'Credentials not valid.',
        status: 'error',
        duration: 9000,
        isClosable: true
      })
      return
    }
    // your register logic here
    setIsSubmitting(true)
    register(email, password)
      .then(res => {})
      .catch(error => {
        console.log(error.message)
        toast({
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      })
      .finally(() => {
        mounted.current && setIsSubmitting(false)
        router.push('/login')
      })
  }

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Register
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form onSubmit={e => handleSubmit(e)}>
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                name='password'
                type='password'
                autoComplete='password'
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type='submit'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
              
            >
              Sign Up
            </Button>
          </Stack>
        </chakra.form>
        <Center my={4}>
          <Button
            type='submit'
            onClick={() => router.push('/login')}
            isFullWidth
            fontSize='md'
            size='lg'
          >
            Login
          </Button>
        </Center>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isFullWidth
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then(user => console.log(user))
              .catch(e => console.log(e.message))
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  )
}

export default Register
