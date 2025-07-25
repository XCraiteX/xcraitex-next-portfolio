import '@/css/background.css'

export default function Background(){
    return (
        <div className="absolute flex w-full h-screen overflow-hidden -z-10 bg-linear-20 bg-gradient-to-tr from-black to-blue-900/30">
            <div className='back back1 absolute left-120 bottom-50 w-[520px] h-[520px]'></div>
            {/* <div className='back back2 absolute left-120 bottom-50 w-[520px] h-[520px]'></div> */}
            <div className='absolute w-full h-screen backdrop-blur-xl'></div>
        </div>
    )
}