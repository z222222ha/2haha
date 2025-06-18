import { useState, useEffect } from 'react'

import dayjs from 'dayjs'

import { Button, Calendar, Watermark } from '@2haha/components'
import { useHover, useCookie } from '@2haha/hooks'

function App() {
  const [count, setCount] = useState(0)

  // useHover
  const element = (hovered: boolean) => <div>Hover me! {hovered && 'Thanks'}</div>

  const [hoverable, hovered] = useHover(element)

  // useCookie
  const [cookie, updateCookie, deleteCookie] = useCookie('hanhui')

  useEffect(() => {
    deleteCookie()
  }, [])

  const updateCookieHandler = () => {
    updateCookie('666')
  }

  return (
    <div style={{ padding: 20 }}>
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

      <h2>Watermark</h2>
      <Watermark
        content={['测试水印', '夕阳无限好']}
        gap={[0, 0]}
        font={{
          color: 'green',
        }}
      >
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
            sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
            sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
            sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
            sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
            sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
            sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
            sapiente? Eveniet, id provident!
          </p>
        </div>
      </Watermark>

      <h2>useHover</h2>
      <div style={{ height: 100 }}>
        {hoverable}
        <div>{hovered ? 'HOVERED' : ''}</div>
      </div>

      <h2>useCookie</h2>
      <div>
        <p>cookie 值: {cookie}</p>
        <button onClick={updateCookieHandler}>更新 Cookie</button>
        <br />
        <button onClick={deleteCookie}>删除 Cookie</button>
      </div>
    </div>
  )
}

export default App
