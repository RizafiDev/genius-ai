import Trek from './assets/images/trek.png'
import Dragon from './assets/images/dragon.png'

function Tagline(){
    return(
        <>
<div className="container mx-auto flex flex-col items-center justify-center py-11 relative my-16">
    <div className="content flex flex-col items-center justify-center gap-4 pb-9">
        <div className="header text-7xl flex flex-col items-center justify-center -space-y-6">
            <h1 className="quantum">boost your</h1>
            <h1 className="quantum">creative</h1>
        </div>
        <p>Change your minutes into a amazing AI Generated images!</p>
        <a
            href="#start"
            className="items-center bg-custom-gradient py-2 px-5 rounded-full text-sm "
          >
            START GENERATING
          </a>
    </div>
    <div className="fade w-full h-full absolute bg-gradient-to-b from-[#a430cb3c] to-transparent -z-50"></div>
    <div className="fade w-full h-full absolute bg-gradient-to-t from-[#30cb713f] to-transparent -z-50"></div>
    <div className="image flex items-center justify-center absolute bottom-0 space-x-[700px]">
<img src={Trek} alt="" className='h-[28rem]' />
<img src={Dragon} alt="" className='h-[28rem]' />
    </div>
</div>
        </>
    )
}
export default Tagline