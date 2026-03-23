import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RoleDirect = () => {
    const { user, isPending, isLoggedIn } = useAuth()

    if(isPending) return <p>Loading...</p>

    if(!isLoggedIn) return <Navigate to='/manage' replace />

    switch(user?.role) {
        case "super_admin":
            case "admin" :
            return <Navigate to='/admin' replace/>
        case "writer":
            return <Navigate to="/writer" replace/>
        default:
            return <Navigate to="/" replace/>
    }
}

export default RoleDirect