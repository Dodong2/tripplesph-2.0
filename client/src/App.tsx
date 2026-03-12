import { authClient } from "./lib/auth-client"

type userWithRole = {
  id: string
  email: string
  name: string
  image?: string | null
  role: "user" | "writer" | "admin" | "super_admin"
}

function App() {
  const { data: session, isPending } = authClient.useSession()

  const user = session?.user as userWithRole | undefined
  if(isPending) return <p>Loading...</p>

  return (
    <div> 
    {user ? (
      <div>
        <p>Logged in as: {user.email}</p>
        <p>Role: {user.role}</p>
        <button onClick={() => authClient.signOut()}>
          Sign Out
        </button>

      </div>
    ) : (
      <button onClick={() => authClient.signIn.social({
        provider: "google",
        callbackURL: "http://localhost:5173"
      })}>
        Sign in with Google
      </button>
    ) }  
    </div>
  )
}

export default App
