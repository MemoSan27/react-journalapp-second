import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult( result );
        //console.log({credentials});
        const { displayName, photoURL, email, uid } = result.user;
        //console.log({user});

        return {
            ok: true,
            //User info
            displayName, 
            email, 
            photoURL, 
            uid
        }
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        /* const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error); */

       //console.log(error);

        return{
            ok: false,
            errorMessage,
        }
    }
}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        //console.log(resp);
        
        await updateProfile( FirebaseAuth.currentUser, { displayName } );
        

        return{
            ok: true,
            uid, 
            photoURL, 
            email, 
            displayName,
        }
        
    } catch (error) {
        const errorMessage = error.message;
        //console.log(error);
        return { ok: false, errorMessage }
    }
}

export const loginWithEmailPassword = async({email, password}) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        //console.log(result);
        const { uid, photoURL, email: correo, displayName } = result.user;

        return{
            ok: true,
            correo,
            uid,
            photoURL,
            displayName
        }

    } catch (error) {
        const errorMessage = error.message;
        //console.log(error);
        return { ok: false, errorMessage }
    }
}