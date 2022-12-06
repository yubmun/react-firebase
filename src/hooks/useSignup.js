import { useState } from "react"
import { appAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext";

// https://firebase.google.com/docs/auth/web/password-auth?authuser=0 비밀번호 인증에 대한 공식문서이며 createUserWithEmailAndPassword를 활용하여 반환되는 userCredential 을 통해 인증된 유저인지 검증이 가능하다

export const useSignup = () => {
    // 에러 정보를 저장
    const [error, setError] = useState(null);
    // 현재 서버와 통신중인 상태를 저장
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = (email, password, displayName) => {
        setError(null); // 아직 에러가 없으니 null 이다
        setIsPending(true); // 통신중이므로 true이다.

        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // sign in
                const user = userCredential.user;
                console.log(user);

                if(!user) {
                    throw new Error('회원가입에 실패했습니다');
                }
                updateProfile(appAuth.currentUser, {displayName})
                .then(() => {
                    dispatch({type: 'login', payload: user});
                    setError(null);
                    setIsPending(false);
                }).catch((err) => {
                    setError(err.message);
                    setIsPending(false);
                    console.log(err.message);
                })
            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
            })
    }
    return { error, isPending, signup }
}