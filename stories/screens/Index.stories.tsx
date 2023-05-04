import Index from "../../pages";
import { Meta } from "@storybook/react";

export default {
  title: "screens/Index",
  component: IndexScreen,
} as Meta<typeof IndexScreen>;

function IndexScreen() {
  return <Index></Index>;
}
