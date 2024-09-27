export function SearchOlimpicType() {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        className="border-2 border-black bg-select-input p-3 text-sm font-bold text-black"
      >
        Todos
      </button>
      <button
        type="button"
        className="border-2 border-black p-3 text-sm font-medium text-black"
      >
        Olímpicos
      </button>
      <button
        type="button"
        className="border-2 border-black p-3 text-sm font-medium text-black"
      >
        Paralímpicos
      </button>
    </div>
  )
}
