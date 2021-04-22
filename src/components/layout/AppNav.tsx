import { Box, HStack } from '@liinkiing/klee'
import React from 'react'

import AppLink from '~/components/AppLink'

const AppNav: React.FC = () => (
  <Box as="nav" p={4}>
    <HStack as="ul" sx={{ listStyle: 'none' }} spacing={2}>
      <Box as="li">
        <AppLink href="/">Home</AppLink>
      </Box>
      <Box as="li">
        <AppLink href="/about">About</AppLink>
      </Box>
    </HStack>
  </Box>
)

export default AppNav
