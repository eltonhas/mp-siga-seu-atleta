import { UserRound } from 'lucide-react'
import Image from 'next/image'

import Instagran from '@/assets/instagran.svg'
import Rebeca from '@/assets/rebeca.jpg'

export function AthleteCard() {
  return (
    <main className="max-w-[348px] border-2 border-black p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={Rebeca}
            alt="rebeca"
            className="size-16 rounded-full border-2 border-black"
            width={64}
            height={64}
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-black">
              Rebeca Andrade
            </span>
            <span className="font-medium text-search">Ginastica Artistica</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <UserRound className="size-5 text-black" />
          <span className="text-2xl font-semibold text-black">12M</span>
        </div>
      </div>
      <div className="py-6">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quod
          obcaecati. Temporibus iure nisi fugit at rerum porro dolorum,
          praesentium, vel ad cupiditate sequi obcaecati corporis, veniam
          impedit ea nobis!
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-xl font-bold text-black">@rebecarandrade</span>

        <span className="text-instagran flex items-center gap-1 font-medium">
          <Image src={Instagran} alt="instagran" width={14} height={14} />
          Ver no instagran
        </span>
      </div>
    </main>
  )
}
