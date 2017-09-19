import Link from 'next/link'
import FontAwesome from 'react-fontawesome'

const Header = () => (
  <nav>
    <Link href="/">
      <a><FontAwesome name="snowflake-o" /></a>
    </Link>

    <FontAwesome name="bars" />

    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/">
        <a>Blog</a>
      </Link>
      <Link href="/">
        <a>Contact</a>
      </Link>
    </div>
  </nav>
)

export default Header
