export function InputSports() {
  return (
    <div className="flex w-40 items-center border-2 border-black bg-white p-3">
      <input
        placeholder="Pesquise um esporte"
        className="w-32 font-bold text-black focus:outline-none"
        defaultValue={'Todos os esportes'}
      />
    </div>
  )
}
