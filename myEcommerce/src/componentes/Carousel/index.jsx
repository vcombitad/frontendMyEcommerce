import Layout from "../Layout";


let slides=[
    './assets/assets1.jpg',
    './assets/assets2.jpg',
    './assets/assets3.jpg'
  ]
  
const Carousel=({slides})=>{
    return (
        <div className='flex flex-row w-full overflow-hidden relative'>
            {slides.map((s)=>{
                return <img className='h-44' src={s}/>
            })}
        </div>
    );
}


export default Carousel