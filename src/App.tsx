import { useRef, useState } from 'react'
import RangeSelector from './lib/RangeSelector'

function App() {
  const [ranges, setRanges] = useState<{
    start: Date;
    end: Date;
  }[]>([])
  const ref_zoomTo = useRef<(date: Date) => void>()
  const ref_save = useRef(false)
  return (
    <>
      <h1>Range Selector Demo</h1>
      <RangeSelector ranges={ranges} setRanges={setRanges} ref_zoomTo={ref_zoomTo} ref_save={ref_save} />
    </>
  )
}

export default App
