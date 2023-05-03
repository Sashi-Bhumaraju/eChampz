import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

async function SigninByEmail (email,password) {
  
   try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in 
        const user = userCredential.user;
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
    }
}

export default SigninByEmail;
