import React from 'react'
import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react'

const ErrorMessage = ({ message }) => {
  return (
    <Box
      position='absolute'
      top='0'
      left='0'
      right='0'
      bottom='0'
      zIndex='100'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bg='red.50'
    >
      <Alert status='error' mb={4}>
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </Box>
  )
}

export default ErrorMessage
