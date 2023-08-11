import {
  IconApps,
  IconList,
  IconBulb,
  IconSettings,
} from "@arco-design/web-vue/es/icon";
const menuList = [
  {
    name: "home",
    path: "/",
    key: "index",
    icon: IconSettings,
  },
  {
    name: "about",
    path: "/about",
    key: "about",
    icon: IconBulb,
  },
  {
    name: "helloworld",
    path: "/helloworld",
    key: "helloworld",
    icon: IconBulb,
  },
  {
    name: "user",
    path: "/user",
    key: "user",
    icon: IconBulb,
  },
  {
    name: "hello",
    path: "/hello",
    key: "hello",
    icon: IconBulb,
  },
  {
    name: "资产概况",
    path: "/asset",
    key: "asset",
    icon: IconApps,
  },
  {
    name: "资源目录",
    path: "/resource-directory",
    key: "resource-directory",
    children: [
      {
        name: "目录管理",
        path: "/resource-directory/directory",
        key: "directory",
      },
      {
        name: "资源管理",
        path: "/resource-directory/resource",
        key: "resource",
      },
    ],
  },
  {
    name: "数据源管理",
    path: "/datasource",
    key: "datasource",
    children: [
      {
        name: "数据库资源",
        path: "/datasource/database",
        key: "database",
      },
      {
        name: "NAS资源",
        path: "/datasource/nas",
        key: "nas",
      },
    ],
  },
  {
    name: "数据汇聚",
    path: "/data-aggregation",
    key: "data-aggregation",
    children: [
      {
        name: "数据源注册",
        path: "/data-aggregation/registration",
        key: "registration",
      },
      {
        name: "数据接入",
        path: "/data-aggregation/access",
        key: "access",
      },
      {
        name: "汇聚任务管理",
        path: "/data-aggregation/task",
        key: "task",
      },
      {
        name: "三维模型入库",
        path: "/data-aggregation/3dmodel-storage",
        key: "3dmodel-storage",
      },
    ],
  },
  {
    name: "数据融合",
    path: "/data-fusion",
    key: "data-fusion",
    children: [
      {
        name: "数据规范性质检",
        path: "/data-fusion/quality-test",
        key: "quality-test",
      },
      {
        name: "多源数据空间融合",
        path: "/data-fusion/multi-source-space",
        key: "multi-source-space",
      },
      {
        name: "项目数据串接融合",
        path: "/data-fusion/project-data-concatenation",
        key: "project-data-concatenation",
      },
      {
        name: "数据全周期管理",
        path: "/data-fusion/lifecycle",
        key: "lifecycle",
      },
    ],
  },
  {
    name: "数据管理",
    path: "/data",
    key: "data",
    children: [
      {
        name: "数据更新管理",
        path: "/data/update",
        key: "update",
      },
      {
        name: "数据关联管理",
        path: "/data/relation",
        key: "relation",
      },
    ],
  },
];
export default menuList;
