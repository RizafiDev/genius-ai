import Logo from './assets/images/logo.png'

function Footer(){
    return(
        <>
        <div className="container mx-auto pb-10 px-20 flex items-center justify-between">
            <div className="left flex flex-col">
            <div className="brand ">
                <a href="" className='font-semibold text-3xl inline-flex items-center gap-3'>
                <img src={Logo} alt="" srcset="" className='w-10' />
                Genius AI
                </a>
            </div>
            <p className='font-normal text-2xl'>Change Command To Amazing<br />Visuals</p>
            <p className='font-medium text-lg mt-20'>©2024 RizafiDev || All Right Reserved</p>
            </div>
            <div className="right flex flex-col justify-between items-end">
                <div className="link flex items-start gap-10 jus">
                    <ul className='inline-flex items-start flex-col gap-3'>
                        <li className='font-semibold'><a href="">Explore</a></li>
                        <li className='text-gray-400'><a href="">AI Tools & Feature</a></li>
                        <li className='text-gray-400'><a href="">Pricing</a></li>
                    </ul>
                    <ul className='inline-flex items-start flex-col gap-3'>
                        <li className='font-semibold'><a href="">Support</a></li>
                        <li className='text-gray-400'><a href="">Help Center</a></li>
                        <li className='text-gray-400'><a href="">Community Forum</a></li>
                    </ul>
                    <ul className='inline-flex items-start flex-col gap-10 '>
                        <li className='font-semibold -mb-3'><a href="">Get App</a></li>
                        <li className=''><a href="" className='space-x-2 border-[1px] border-gray-200 p-3 rounded-full px-4'><i class="ri-windows-fill ri-xl"></i><span className='font-medium'>Windows</span></a></li>
                        <li className=''><a href="" className='space-x-2 border-[1px] border-gray-200 p-3 rounded-full px-4'><i class="ri-apple-fill ri-xl"></i><span className='font-medium'>MacOs</span></a></li>
                    </ul>
                </div>
                <div className='font-normal text-sm mt-20 flex gap-6 right-0'>
                    <p className='text-gray-500'>Cookies</p>
                    <p className='text-gray-500'>Privacy & Policy</p>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Footer