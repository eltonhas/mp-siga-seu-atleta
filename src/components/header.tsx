import Image from 'next/image'
import Link from 'next/link'

import Br from '@/assets/br.jpg'
export function Header() {
  return (
    <header className="flex w-full max-w-6xl items-center justify-between">
      <Link href={'/'} className="flex items-center gap-2">
        <Image
          src={Br}
          alt="bandeira brasil"
          width={999}
          height={999}
          className="h-5 w-6"
        />
        <p className="text-2xl font-semibold">Siga seu atleta</p>
      </Link>
      <Link href={'/about'} className="text-xl">
        Sobre
      </Link>
    </header>
  )
}
