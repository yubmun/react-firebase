import { signOut } from "firebase/auth";
import { useState } from "react"
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";


export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = () => {
        setError(null); // 아직 에러가 없으니 null
        setIsPending(true); // 현재 통신중이니 true

        signOut(appAuth).then(() => {
            //로그아웃 성공
            dispatch({type: 'logout'});
            setError(null);
            setIsPending(false);
        }).catch((err) => {
            //로그아웃 실패
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
        })
    }
    return { error, isPending, logout }
}