export interface IMenuProps {
  data: Array<IMenuItem>,
}

interface IMenuItem {
  key: number,
  icon?: string,
  url: string,
  title: string,
  text?: string
  children?: Array<IMenuItem>
}