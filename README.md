# Newly Featured Date Range Selector

## Motivate
I faced to create timeline that dynamically changes, and I tried to find proper package, but I couldn't it.
So I have decided to create this package.

![image](https://github.com/user-attachments/assets/c36e57c8-2998-44d6-af92-878c732b1e4a)

## How to install
```npm i @toygr/date-range-selector```

```
import { useRef, useState } from 'react'
import { RangeSelector } from '@toygr/date-range-selector'
import './App.css'

import '@toygr/date-range-selector/dist/style.css'

function App() {
  const [ranges, setRanges] = useState<{
    start: Date;
    end: Date;
  }[]>([])
  const ref_zoomTo = useRef<(date: Date) => void>()
  const ref_save = useRef(false)

  return (
    <>
      <h1>Demo</h1>
      <RangeSelector ranges={ranges} setRanges={setRanges} ref_zoomTo={ref_zoomTo} ref_save={ref_save} />
    </>
  )
}

export default App
```

## Demo

```
https://toygr.github.io/date-range-selector
```
