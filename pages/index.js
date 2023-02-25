export default function Home() 
{
  return (
    <>


      <div className="w-full h-screen bg-white">
        <div className='flex flex-row w-full h-full bg-white'>
          
          <div className='w-1/6 bg-black'>

          </div>

          <div className='flex flex-col items-center w-2/3 h-full p-20 gap-10'>
            <div className='flex flex-col justify-center items-center w-full h-30 text-pink font-bold uppercase'>
              <h1 className='text-8xl'>Famous</h1>
              <h1 className='text-6xl'>Followers</h1>
            </div>
            <h1 className='text-pink text-2xl font-semibold opacity-60'>Find Out Who Follows You!</h1>

            <form className='flex flex-col items-center gap-5'>
              <input className='bg-gray-200 w-[60vw] h-32 rounded-full p-10 text-5xl text-center drop-shadow-lg' type="text" id="search" name="search"/>
              <button className='w-72 h-12 bg-maroon opacity-80 rounded-full text-white text-xl font-bold uppercase drop-shadow-md' type='submit'>Search</button>
            </form>
          </div>

          <div className='w-1/6 bg-black'>

          </div>

        </div>
      </div>


    </>
  )
}
