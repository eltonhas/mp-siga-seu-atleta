import { Input } from '../components/input'
import { InputSports } from '../components/input-sports'
import { OrderSelect } from '../components/order-select'
import { SearchOlimpicType } from '../components/search-olimpic-type'
import { Select } from '../components/select'

export default function Home() {
  return (
    <main className="flex w-full max-w-6xl flex-col gap-14 pt-14">
      <div className="flex justify-between">
        <div className="flex gap-8">
          <Input />
          <div className="flex gap-8">
            <SearchOlimpicType />
            <InputSports />
          </div>
        </div>
        <div className="flex gap-2">
          <Select />
          <OrderSelect />
        </div>
      </div>
    </main>
  )
}
