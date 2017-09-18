import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <title>Basic Homepage Layout</title>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
