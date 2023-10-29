import UunShoppingListApp from "uun_ShoppingList_app-hi";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`UunShoppingListApp.Bricks.ShoppingListDetail.Footer`, () => {
  testProperties(UunShoppingListApp.Bricks.ShoppingListDetail.Footer, CONFIG);
});
