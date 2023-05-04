import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"
// useAuth hook or context Api
const useAuth = () => {
    return useContext(AuthContext);

}
export default useAuth;