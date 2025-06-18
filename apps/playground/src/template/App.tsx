import { useState } from 'react'
import './App.css'
import { Button, Calendar } from '@2haha/components'
import { useHover } from '@2haha/hooks'
import dayjs from 'dayjs'

function App() {
  const [count, setCount] = useState(0)

  // useHover
  const element = (hovered: boolean) => <div>Hover me! {hovered && 'Thanks'}</div>

  const [hoverable, hovered] = useHover(element)

  return (
    <>
      <h1>Hello World {count}</h1>
      <Button
        type="default"
        onClick={() => setCount((count) => count + 1)}
      >
        +1
      </Button>

      <h1>useHover</h1>
      <div style={{ height: 100 }}>
        {hoverable}
        <div>{hovered ? 'HOVERED' : ''}</div>
      </div>

      <h1>Calendar</h1>
      <Calendar
        value={dayjs(new Date())}
        // renderCell={(date) => {
        //   return <div style={{ background: "yellowgreen" }}>{date.format("YYYY-MM-DD")}</div>;
        // }}
        // renderCellContent={(date) => {
        //   return <div style={{ background: 'yellowgreen' }}>{date.format('YYYY-MM-DD')}</div>
        // }}
        locale="en-US"
        onChange={(date) => {
          console.log('click:', date.format('YYYY-MM-DD'))
        }}
      />
    </>
  )
}

export default App
