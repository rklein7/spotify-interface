import { CircleUser } from 'lucide-react';
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image';


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-50 bg-zinc-800 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <Image src="/Pulse.png" width={104} height={104} content='center' alt='Capa Pink Floyd'/>
          <nav className='space-y-5 mt-3'>
            <h1 className='text-purple-300'>Welcome To Pulse</h1>
            <a href="" className="flex itens-center gap-3 text-sm font-semibold text-purple-300">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex itens-center gap-3 text-sm font-semibold text-purple-300">
              <Search />
              Search
            </a>
            <a href="" className="flex itens-center gap-3 text-sm font-semibold text-purple-300">
              <Library />
              Your Library
            </a>
            <a href="" className="flex itens-center gap-3 text-sm font-semibold text-purple-300">
              <CircleUser />
              Profile
            </a>
          </nav>

          <nav className='mt-7 pt-7 border-t border-zinc-700 flex flex-col gap-3'>
            <a href="" className='text-sm text-purple-400 hover:text-zinc-100'>Hot Hits Brasil</a>
            <a href="" className='text-sm text-purple-400 hover:text-zinc-100'>Funk 2024</a>
            <a href="" className='text-sm text-purple-400 hover:text-zinc-100'>Aniversário</a>
            <a href="" className='text-sm text-purple-400 hover:text-zinc-100'>Sertanejo Antigas</a>
            <a href="" className='text-sm text-purple-400 hover:text-zinc-100'>Coding and Music</a>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-purple-900/40">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/20 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/20 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoom Rafael, your last songs!</h1>

          <div className='grid grid-cols-4 gap-6 mt-5'>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Dark_Side_of_the_Moon.png" width={104} height={104} alt='Capa Pink Floyd'/>
              <strong>Money</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-purple-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Dark_Side_of_the_Moon.png" width={104} height={104} alt='Capa Pink Floyd'/>
              <strong>Money</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-purple-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Dark_Side_of_the_Moon.png" width={104} height={104} alt='Capa Pink Floyd'/>
              <strong>Money</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-purple-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Dark_Side_of_the_Moon.png" width={104} height={104} alt='Capa Pink Floyd'/>
              <strong>Money</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-purple-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Dark_Side_of_the_Moon.png" width={104} height={104} alt='Capa Pink Floyd'/>
              <strong>Money</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-purple-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Dark_Side_of_the_Moon.png" width={104} height={104} alt='Capa Pink Floyd'/>
              <strong>Money</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-purple-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Dark_Side_of_the_Moon.png" width={104} height={104} alt='Capa Pink Floyd'/>
              <strong>Money</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-purple-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Dark_Side_of_the_Moon.png" width={104} height={104} alt='Capa Pink Floyd'/>
              <strong>Money</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-purple-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Rafael Klein</h2>

          <div className='grid grid-cols-7 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Dark_Side_of_the_Moon.png" className='w-full' width={120} height={120} alt='Capa Pink Floyd'/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Hugo e Guilerme, Henrique e Juliano and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Dark_Side_of_the_Moon.png" className='w-full' width={120} height={120} alt='Capa Pink Floyd'/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Hugo e Guilerme, Henrique e Juliano and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Dark_Side_of_the_Moon.png" className='w-full' width={120} height={120} alt='Capa Pink Floyd'/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Hugo e Guilerme, Henrique e Juliano and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Dark_Side_of_the_Moon.png" className='w-full' width={120} height={120} alt='Capa Pink Floyd'/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Hugo e Guilerme, Henrique e Juliano and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Dark_Side_of_the_Moon.png" className='w-full' width={120} height={120} alt='Capa Pink Floyd'/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Hugo e Guilerme, Henrique e Juliano and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
      </footer>
    </div>
  );
}
