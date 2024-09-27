import { Search } from 'lucide-react'

export function Input() {
  return (
    <div className="flex w-56 items-center gap-2 border-2 border-black bg-white p-3">
      <Search className="text-search size-3" />
      <input placeholder="Pesquisar" className="w-full focus:outline-none" />
    </div>
  )
}
