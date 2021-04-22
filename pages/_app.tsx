import React, { FC } from 'react'
import App, { AppProps } from 'next/app'
import NProgress from '~/components/NProgress'
import AppNav from '~/components/layout/AppNav'
import { AnimatePresence } from 'framer-motion'
import { KleeProvider, useTheme } from '@liinkiing/klee'

const MyApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  const theme = useTheme()

  return (
    <>
      <NProgress color={theme.colors.red['400']} spinner={false} />
      <AppNav />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

const MyAppWithProviders = ({ ...props }: AppProps) => (
  <KleeProvider>
    <MyApp {...props} />
  </KleeProvider>
)

export default MyAppWithProviders
