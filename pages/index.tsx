import { Box, Heading, Text } from '@liinkiing/klee'
import { NextPage } from 'next'

import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'

const Index: NextPage = () => (
  <Page>
    <AppHead title="Homepage" />
    <Heading as="h1">Index Page</Heading>
    <Box mt={2}>
      <Text>Hello from index page</Text>
    </Box>
  </Page>
)

export default Index
