export interface IButton {
  href?: string;
  loading: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  content: string;
}

export interface IInputBox {
  id: string;
  name: string;
  type?: string;
  value: string;
  changeValue: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface IMenuProps {
  data: Array<IMenuItem>;
}

export interface IMenuItem {
  key: number;
  icon?: string;
  url: string;
  title: string;
  children?: Array<IMenuItem>;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IPromiseReturn {
  data: Array<string>;
  headers: object;
  config: object;
  request: object;
  status: number;
  statusText: string;
}
