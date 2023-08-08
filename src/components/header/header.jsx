import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            src={"/images/events.png"}
            width={100}
            height={30}
            alt="logo"
          />
          <nav>
            <Link href="/" legacyBehavior passHref>
              <a> Home</a>
            </Link>
            <Link href="/events" legacyBehavior passHref>
              <a> Events</a>
            </Link>
            <Link href="/about-us" legacyBehavior passHref>
              <a> About us</a>
            </Link>
          </nav>
        </div>
        <h1>Excepteur sint occaecat</h1>
      </div>
    </header>
  );
};
