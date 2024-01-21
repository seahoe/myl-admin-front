import { MockMethod } from "vite-plugin-mock";

const res = [
  {
    date: "2024-01-02"
  },
  {
    date: "2024-01-04"
  },
  {
    date: "2024-01-11"
  },
  {
    date: "2024-01-17"
  },
  {
    date: "2024-01-18"
  }
];

export default [
  {
    url: "/getTimeRecord",
    method: "get",
    response: () => {
      return {
        success: true,
        data: res
      };
    }
  }
] as MockMethod[];
