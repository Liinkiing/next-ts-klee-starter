import { HStack, klee } from '@liinkiing/klee'
import React from 'react'

import AppLink from '~/components/AppLink'

const AppNav: React.FC = () => (
  <klee.nav p={4}>
    <HStack as="ul" sx={{ listStyle: 'none' }} spacing={2}>
      <klee.li>
        <AppLink href="/">Home</AppLink>
      </klee.li>
      <klee.li>
        <AppLink href="/about">About</AppLink>
      </klee.li>
    </HStack>
  </klee.nav>
)

export default AppNav
