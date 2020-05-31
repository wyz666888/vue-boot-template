import Menu11 from './routers/menu1'
import Menu12 from './routers/menu2'

export default {
  path: 'menu1',
  component: () => import('./components'),
  name: 'Menu1',
  meta: { title: 'Menu1' },
  children: [
    Menu11,
    Menu12
  ]
}