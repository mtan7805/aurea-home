export interface ISubMenuItem {
  id: number;
  name: string;
}

export interface ICategoryMenuItem {
  id: number;
  title: string;
  childrens: ISubMenuItem[];
}

export interface IProjectMenuItem {
  id: number;
  name: string;
}
