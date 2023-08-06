import Link from "next/link"

export const Header = () => {
   return (
      <header>
        <nav>
          <Link href="/" legacyBehavior passHref>
            <a> Home</a>
          </Link>
          <Link href="/events" legacyBehavior passHref>
            <a> Events</a>
          </Link>
          <Link href="/about-us" legacyBehavior passHref>
            <a> About Us</a>
          </Link>
        </nav>
      </header>
   )
}