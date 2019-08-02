export interface SidebarItem {
  title: string;
  route: string;
  subItems?: SidebarItem[];
}
