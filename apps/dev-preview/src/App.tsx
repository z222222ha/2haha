import { useState } from 'react'

import dayjs from 'dayjs'

import { Button, Calendar } from '@2haha/components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>@2haha/components preview {count}</h1>

      <Button
        type="primary"
        onClick={() => setCount((count) => count + 1)}
      >
        Button +1
      </Button>

      <h2>Calendar</h2>
      <Calendar
        value={dayjs('2024-6-18')}
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
