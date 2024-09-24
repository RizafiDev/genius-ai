import Logo from './assets/images/logo.png'
import './index.css'

function Nav(){
    return(
        <>
        <div className="navbar container mx-auto py-5 px-20 flex items-center justify-between" id='home'>
            <div className="brand ">
                <a href="" className='font-semibold text-3xl inline-flex items-center gap-3'>
                <img src={Logo} alt="" srcset="" className='w-10' />
                Genius AI
                </a>
            </div>
            <div className="nav-item">
                <ul className='font-medium text-lg inline-flex items-center gap-14 h-5'>
                    <li><a href="#home" className='hover-underline-animation'>Home</a></li>
                    <li><a href="#feature" className='hover-underline-animation'>Feature</a></li>
                    <li><a href="#service" className='hover-underline-animation'>Service</a></li>
                    <li><a href="#pricing" className='hover-underline-animation'>Pricing</a></li>
                    <li><a href="#contact" className='hover-underline-animation'>Contact</a></li>
                </ul>
            </div>
            <div className="action inline-flex items-center gap-10 text-lg font-medium">
                <a href="#sign-in" className=''>Sign In</a>
                <a href="#sign-up" className='border-2 border-purple-600 px-5 rounded-full py-2'>Sign Up</a>
            </div>
        </div>
        </>
    )
}

export default Nav