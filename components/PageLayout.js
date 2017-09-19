import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <title>Basic Homepage Layout</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
