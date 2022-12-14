import { auth, googleAuthProvider } from '../lib/firebase';
import styles from '../styles/Home.module.css'
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Enter(props) {
    const { user } = useContext(UserContext)

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      {user ? <SignOutButton /> : <SignInButton />}
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <div className={styles.main}>
        <button className="btn-google" onClick={signInWithGoogle}>
        <img src={'/google.png'} /> Sign in with Google
        </button>
    </div>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}