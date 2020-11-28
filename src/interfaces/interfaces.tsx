export interface IButton {
  href?: string,
  loading: boolean,
  type: "button" | "submit" | "reset" | undefined,
  content: string
}

export interface IInputBox {
  id: string,
  name: string,
  type?: string,
  value: string,
  changeValue: (e: React.FormEvent<HTMLInputElement>) => void
}

export interface IMenuProps {
  data: Array<IMenuItem>,
}

export interface IMenuItem {
  key: number,
  icon?: string,
  url: string,
  title: string,
  children?: Array<IMenuItem>
}