import { klee, Text, Heading } from '@liinkiing/klee'
import type { NextPage } from 'next'

import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'

const Index: NextPage = () => (
  <Page>
    <AppHead title="Homepage" />
    <Heading as="h1">Index Page</Heading>
    <klee.div mt={2}>
      <Text>Hello from index page</Text>
    </klee.div>
  </Page>
)

export default Index
