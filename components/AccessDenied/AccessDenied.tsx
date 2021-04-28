import HeadTitle from "@components/HeadTitle/HeadTitle"
import { signIn } from "next-auth/client"
import { FaGithub } from "react-icons/fa"

const AccessDenied = () => {
  return (
    <div className="page">
      <HeadTitle title={`Pokénex | Access Denied`} />
      <h1>Access Denied</h1>
      <p>You must be signed in to view this page</p>
      <button className="signin-button" type="button" onClick={() => signIn("github")}>
        <span>
          Sign in with <FaGithub />
        </span>
      </button>
    </div>
  )
}

export default AccessDenied
