import { useAuth } from "../hooks/useAuth"
import { signOut } from "../services/auth.service"

const WriterDashboard = () => {
    const { user } = useAuth()
    return (
        <div>
            <h1>Writer Dashboard</h1>
            <p>Welcome, {user?.name}</p>
            <p>Role: {user?.role}</p>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}

export default WriterDashboard