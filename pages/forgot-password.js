import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Card } from '../components/card'
import DividerWithText from '../components/divider'
import Layout from '../components/layouts/article'
import { useAuth } from '../lib/auth-context'

const ForgotPassword = () => {
  const router = useRouter()
  const { forgotPassword } = useAuth()
  const toast = useToast()

  const [email, setEmail] = useState('')

  const handleResetPassword = async (e) => {
    e.preventDefault()
    try {
      await forgotPassword(email)
      toast({
        description: `An email has been sent to ${email} with a link to reset your password.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      router.push('/login')
    } catch (error) {
      console.log(error.message)
      toast({
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Forgot Password
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form onSubmit={(e) => handleResetPassword(e)}>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email Address</FormLabel>
              <Input
                name='email'
                type='email'
                placeholder='Email Address'
                autoComplete='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Button
              type='submit'
              mr={4}
              mt={4}
              variantColor='teal'
              isLoading={false}
              isDisabled={!email}
            >
              Submit
            </Button>
          </Stack>
        </chakra.form>
        <DividerWithText>Already have an account?</DividerWithText>
        <Center>
          <Button
            variantColor='teal'
            variant='outline'
            mr={4}
            mt={4}
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
        </Center>
      </Card>
    </Layout>
  )
}

export default ForgotPassword
