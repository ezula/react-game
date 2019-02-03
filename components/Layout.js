import Head from 'next/head'
import Header from './Header'
import { Container } from 'reactstrap'

const layoutStyle = {
    margin: 20,
    padding: 20
}

const Layout = (props) => (
  <div>
    <Head>
      <title>svunz</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>
      <Header />
      {props.children}
    </Container>
  </div>
)

export default Layout;