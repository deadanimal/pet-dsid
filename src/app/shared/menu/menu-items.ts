export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-warning'
  },
  {
    path: '/admin/instruction',
    title: 'Instruction',
    type: 'sub',
    icontype: 'far fa-list-alt text-indigo',
    collapse: 'instruction',
    isCollapsed: true,
    children: [
      { path: 'list', title: 'List', type: 'link' }
    ]
  },
  {
    path: '/admin/notice',
    title: 'Notice of Operation',
    type: 'sub',
    icontype: 'far fa-calendar-alt text-pink',
    collapse: 'notice',
    isCollapsed: true,
    children: [
      { path: 'list', title: 'List', type: 'link' }
    ]
  },
  {
    path: '/admin/database',
    title: 'Database',
    type: 'sub',
    icontype: 'fas fa-database text-blue',
    collapse: 'database',
    isCollapsed: true,
    children: [
      { path: 'rig', title: 'Rig', type: 'link' },
      { path: 'location', title: 'Location', type: 'link' },
      { path: 'vendor', title: 'Vendor', type: 'link' }
    ]
  },
  {
    path: '/admin/profile',
    title: 'Profile',
    type: 'link',
    icontype: 'far fa-id-badge text-red'
  },
  {
    path: '/admin/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-green'
  }
];

/*
{
  path: '',
  title: '',
  type: 'link',
  icontype: ''
}
*/