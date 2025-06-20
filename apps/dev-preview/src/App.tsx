import { useState, useEffect } from 'react'

import dayjs from 'dayjs'

import { Button, Calendar, Watermark, Icon, createFromIconFont, createIcon, Space, ConfigProvider, useMessage } from '@2haha/components'
import { useHover, useCookie } from '@2haha/hooks'

function MessageTest() {
  const message = useMessage()
  return (
    <button
      onClick={() => {
        message?.add({
          content: '请求成功',
        })
      }}
    >
      成功
    </button>
  )
}

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

  // icon
  const IconAdd = createIcon({
    content: (
      <>
        <path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
      </>
    ),
  })

  const HeartSvg = () => (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 1024 1024"
    >
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  )

  const IconFont = createFromIconFont('//at.alicdn.com/t/font_3286126_wwyk59664s.js')

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

      <h2>Icon</h2>
      <div>
        <IconAdd />
        <IconAdd size="40px" />
        <Icon
          component={HeartSvg}
          style={{ fontSize: '20px', color: 'hotpink' }}
          spin
        />
        <IconFont
          type="icon-xihuan"
          size="40px"
        />
        <IconFont
          type="icon-shezhi"
          fill="blue"
          spin
        />
        <IconFont
          type="icon-tongzhi"
          style={{ color: 'blue', fontSize: '50px' }}
        />
      </div>

      <h2>Space</h2>
      <ConfigProvider space={{ size: 10 }}>
        <Space>
          <Button>1</Button>
          <Button>2</Button>
        </Space>
        <Space direction="vertical">
          <Button>1</Button>
          <Button>2</Button>
        </Space>
        <h2>Message</h2>
        <MessageTest />
      </ConfigProvider>
    </div>
  )
}

export default App
