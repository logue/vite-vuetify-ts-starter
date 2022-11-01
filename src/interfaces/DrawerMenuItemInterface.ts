import type { RouteLocationRaw } from 'vue-router';

/** Drawer Menu Item Interface */
export default interface DrawerMenuItem {
  /** Item Name */
  title: string | '-';
  /** Item Icon */
  icon?: string;
  /** Router Location */
  to?: RouteLocationRaw;
  /** is active */
  active?: boolean;
  /** Sub Items */
  items?: DrawerMenuItem[];
}
