//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import { Text, Line, Grid } from "uu5g05-elements";
import { Checkbox } from "uu5g05-forms";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ShoppingList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingList",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface
    let shop = {
      id: "1234",
      name: "Lidl Shopping List",
      items: [{
        id: "1",
        name: "paprika",
        category: "zelenina",
        count: "3",
        unit: "pc"
      }, {
        id: "1",
        name: "okurek",
        category: "zelenina",
        count: "4",
        unit: "pc"
      }, {
        id: "1",
        name: "paprika",
        category: "zelenina",
        count: "3",
        unit: "pc"
      }, {
        id: "1",
        name: "paprika",
        category: "zelenina",
        count: "5",
        unit: "pc"
      }]
    }
    //@@viewOn:render
    return (
      <div className="shopping-list">
        <Text category="expose" segment="default" type="hero">{shop.name}</Text>
        <Grid>
          <Line></Line>
          <Grid templateColumns="1fr 9fr 2fr 2fr" display="block" justifyContent="center" justifyItems="start" columnGap="1%">
            <Text>Bought</Text>
            <Text>Item</Text>
            <Text>Category</Text>
            <Text>Quantity</Text>
          </Grid>
          <Line></Line>
          {shop.items.map((item) => {
            return (<Grid templateColumns="1fr 9fr 2fr 2fr" display="block" justifyContent="center" justifyItems="start" columnGap="1%">
              <Checkbox></Checkbox>
              <Text>{item.name}</Text>
              <Text>{item.category}</Text>
              <Text>{item.count} {item.unit}</Text>
            </Grid>
            )
          })}

        </Grid>
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingList };
export default ShoppingList;
//@@viewOff:exports
