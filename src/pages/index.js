import Image from 'next/image'
import { Inter } from 'next/font/google'
import { dividerClasses } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className='text-5xl underline'>TOP画面</h1>
    </div>

  )
}
