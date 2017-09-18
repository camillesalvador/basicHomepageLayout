import Link from 'next/link'
import FontAwesome from 'react-fontawesome'

const Footer = () => (
  <footer>
      <Link href="#">
        <a><FontAwesome name="facebook" /></a>
      </Link>
      <Link href="#">
        <a><FontAwesome name="twitter" /></a>
      </Link>
      <Link href="#">
        <a><FontAwesome name="youtube" /></a>
      </Link>
      <Link href="#">
        <a><FontAwesome name="google-plus" /></a>
      </Link>
  </footer>
)

export default Footer
