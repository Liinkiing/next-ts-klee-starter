import { NextPage } from 'next'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import { Box, Heading, KleeHeadingSize, Text } from '@liinkiing/klee'

const About: NextPage = () => (
  <Page>
    <AppHead title="About" />
    <Heading as="h1" size={KleeHeadingSize.Xl}>
      About Page
    </Heading>
    <Box mt={2}>
      <Text>Hello from about page</Text>
    </Box>
  </Page>
)

export default About
