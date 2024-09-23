import Img1 from './assets/images/features/1.png'
import Img2 from './assets/images/features/2.png'
import Img3 from './assets/images/features/3.png'
import Img4 from './assets/images/features/4.png'
import Img5 from './assets/images/features/5.png'
import Img6 from './assets/images/features/6.png'
import Img7 from './assets/images/features/7.png'
import Img8 from './assets/images/features/8.png'
import Img9 from './assets/images/features/9.png'
import Img10 from './assets/images/features/10.png'


function Features(){
    return(
        <>
        <div className="container mx-auto items-center justify-center flex relative " id='feature'>
            <div className="image-container grid grid-cols-5 gap-5">
                <img src={Img1} alt="" className='w-56 rounded-lg'/>
                <img src={Img2} alt="" className='w-56 rounded-lg'/>
                <img src={Img3} alt="" className='w-56 rounded-lg'/>
                <img src={Img4} alt="" className='w-56 rounded-lg'/>
                <img src={Img5} alt="" className='w-56 rounded-lg'/>
                <img src={Img6} alt="" className='w-56 rounded-lg'/>
                <img src={Img7} alt="" className='w-56 rounded-lg'/>
                <img src={Img8} alt="" className='w-56 rounded-lg'/>
                <img src={Img9} alt="" className='w-56 rounded-lg'/>
                <img src={Img10} alt="" className='w-56 rounded-lg'/>
            </div>
            <div className="sub absolute bg-[#07001352] backdrop-blur-sm w-full flex flex-col items-center gap-4 pb-14">
                <div className="text  text-8xl items-center flex flex-col justify-center -space-y-8">
                    <h1 className='quantum'>start your</h1>
                    <h1 className='quantum'>ai journey</h1>
                </div>
                <p className='font-medium'>Unlock new experience with amazing AI Engine</p>
                <div className="action inline-flex items-center gap-5 text-sm font-medium">
                <a href="#sign-in" className='px-6 rounded-full py-2 bg-[#fafafa3b] border-[1px] border-white'>Sign In</a>
                <a href="#sign-up" className='bg-custom-gradient px-6 rounded-full py-2'>Sign Up</a>
            </div>
            </div>
        </div>
        </>
    )
}
export default Features