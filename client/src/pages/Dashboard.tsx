import { useState } from "react"
import { useUsers } from "../hooks/useUsers"
import { useAuth } from "../hooks/useAuth"
import { signOut } from "./../services/auth.service"

const Dashboard = () => {
    const { user } = useAuth()
    const [page, setPage] = useState(1)
    const { data, isLoading, error } = useUsers(page)


    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user?.name}</p>
            <p>Role: {user?.role}</p>
            <button onClick={signOut}>Sign out</button>

            <div>
                {isLoading && <p>loading users</p>}
                {error && <p>Error: {error.message}</p>}
                <table border={1} cellPadding={8} cellSpacing={0}>
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Banned</th>
                        <th>Joined</th>
                    </thead>
                    <tbody>
                        {data?.data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name ?? '-'}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.banned ? 'Yes' : 'No'}</td>
                                <td>{new Date(user.createAt).toLocaleDateString()}</td>
                            </tr>
                        ))}

                        {data?.data.length === 0 && (
                            <tr>
                                <td colSpan={5}>No users found</td>
                            </tr>
                        )}
                    </tbody>

                    <div>
                        <button disabled={!data?.pagination.hasPrev} onClick={() => setPage(p => p - 1)}>
                            Previous
                        </button>
                        <p>Page {data?.pagination.page} of {data?.pagination.totalPages}</p>
                        <button disabled={!data?.pagination.hasNext} onClick={() => setPage(p => p + 1)}>
                            Next
                        </button>
                    </div>
                </table>
            </div>
        </div>
    )
}

export default Dashboard