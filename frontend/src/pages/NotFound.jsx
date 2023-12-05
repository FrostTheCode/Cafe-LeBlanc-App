import { Navigate } from "react-router-dom"

function NotFound() {
  return (
    <Navigate to='/login' replace/>
  )
}

export default NotFound