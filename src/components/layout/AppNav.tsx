import { HStack, klee } from '@liinkiing/klee'
import type { FC } from 'react'

import AppLink from '~/components/AppLink'

const AppNav: FC = () => (
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
