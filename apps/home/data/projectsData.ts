interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Simple React Playground',
    description: `Developed a browser-based Playground using React , Monaco Editor , Babel , Import-maps and Web Workers , delivering real-time preview , automated type imports , dynamic theming , shareable compressed code links , and advanced performance optimizations.`,
    imgSrc: '/static/svg/react.svg',
    href: 'http://playground.djbgem.xyz',
  },
  {
    title: 'Cats Rescue Mini Program',
    description: `Built a WeChat Mini Program for campus stray cat rescue using Taro 3 , WeChat Mini Program ecosystem , React , Motion and Nest.js. 
    Responsibilities included backend API and frontend development , product page development by Next.js , and server deployment in AliYun.`,
    imgSrc: '/static/svg/cat.svg',
    href: 'http://cat.djbgem.xyz',
  },
]

export default projectsData
