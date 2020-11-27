export interface IMenuProps {
  data: Array<IMenuItem>,
}

export interface IMenuItem {
  key: number,
  icon?: string,
  url: string,
  title: string,
  text?: string
  children?: Array<IMenuItem>
}