import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import AuthContextProvider from '../lib/auth-context'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function useResetHistory() {
  const router = useRouter()

  useEffect(() => {
    document.addEventListener('snipcart.ready', () => {
      Snipcart.events.on('snipcart.initialized', (snipcartState) => {
        router.replace(router.asPath)
      })
    })
  }, [])
}

const App = ({ Component, pageProps, router }) => {
  return (
    <Chakra>
      <Fonts />
      <AuthContextProvider>
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </AuthContextProvider>
    </Chakra>
  )
}

export default App
