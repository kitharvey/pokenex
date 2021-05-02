import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import React from 'react'
import { FaGithub } from 'react-icons/fa';



const LandingPage = () => {
    const router = useRouter()
        return (
            <div className='landing-page' >
                <h1>Pokédex app in card style</h1>
                <p>Swipe through pokemon cards or guess who's that pokemon?</p>
                <p className='signin' >Record you score and collect your favorite pokemons by <span> <button type="button" onClick={() => signIn("github")}>signing in with <FaGithub /></button></span> </p>

                <div className='button-wrapper' >
                    <button type='button' className='black-button' onClick={() => router.push('/explore')} >Explore</button>
                    <button type='button' className='black-button' onClick={() => router.push('/play')} >Play</button>
                </div>
            </div>
        );
}


export default LandingPage