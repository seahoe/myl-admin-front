const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/time",
  component: Layout,
  redirect: "/time/index",
  meta: {
    icon: "twemoji:antenna-bars",
    title: "时间管理",
    rank: 1
  },
  children: [
    {
      path: "/time/index",
      name: "time",
      component: () => import("@/views/time/index.vue"),
      meta: {
        title: "时间管理",
      }
    }
  ]
} as RouteConfigsTable;
