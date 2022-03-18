import Link from "next/link";
import { useContext } from "react";
import { UserContext } from '../../lib/context'
export default function Navbar() {

  const {user, username} = useContext(UserContext)


  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Blog</button>
          </Link>
        </li>
        {/*user is signed in and has a username*/}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Escribe un Post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL}></img>
              </Link>
            </li>
          </>
        )}
        {/*user is not signed in and has a username*/}
        {!username && (
          <>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
