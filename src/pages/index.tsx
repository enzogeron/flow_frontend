import { NextPage } from 'next'

import { Container, P } from '../components/atoms'
import { HeadSeo, Layout } from '../components/templates'

const IndexPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Flow Desafio" />

      <Layout>
        <Container>
          <P size="sm">Flow desafio</P>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
