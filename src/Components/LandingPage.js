import { useDispatch, useSelector } from "react-redux";
import LPimage from "../assets/LPimage.png";
import { authActions } from "../store/auth";

const LandingPage = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch();
    const handleSignUp = () => {
        dispatch(authActions.signup())
    }

    return (
        <main> 

            <div className="main-container">

                <div className="image-container">
                    <img className="main-image" src={LPimage} alt="blablabla" />
                </div>

                <div className="text-container">
                    <h1>Take Breakful Breaks!</h1>

                    <ul>
                        <li>A system that makes taking breaks an easy and fun task</li>
                        <li>Easily schedule breaks based on your Google Calendar</li>
                        <li>Feel free to choose your breaks duration and content</li>
                    </ul>
                    

                </div>

                <div className="sign-up-container">
                    {!isLoggedIn ? <button onClick={handleSignUp}>Sign up with Google Account</button> : <h3>Welcome back!</h3>}
                </div>

            </div>
            
        </main>
    )
}

export default LandingPage; 