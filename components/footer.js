import { Box } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => {
  return (
    <Box align='center' opacity={0.4} fontSize='sm'>
      &copy; {new Date().getFullYear()} John Wee. All Rights Reserved.
      <div>
        <Link href='/contactus'>Contact Us</Link>
      </div>
    </Box>
  )
}

export default Footer
