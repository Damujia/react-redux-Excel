import Demo1 from '@/views/demo/Demo1'
import Demo2 from '@/views/demo/Demo2'
import Demo3 from '@/views/demo/Demo3'
import Main from '@/views/Main'

export const routes = [
  {path: '/menu/demo1', component: Demo1},
  {path: '/menu/demo2', component: Demo2}, 
  {path: '/menu/demo3', component: Demo3},
  {path: '/main', component: Main}
]