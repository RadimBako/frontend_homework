//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import { Box, Text, Line, Button, Toggle, Grid } from "uu5g05-elements";
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

const Footer = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Footer",
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

    //@@viewOn:render


    return (
      <div className="footer">
        <Grid templateColumns="9fr 1fr 1fr 1fr" display="block" justifyContent="center" justifyItems="start" columnGap="1%">
          <Text>Author Name: Radim Bako <br></br>Date: 13.12.2023
          </Text>
          <Button width="100%" colorScheme="blue">Update</Button>
          <Button width="100%">Archive</Button>
          <Button width="100%" colorScheme="red">Delete</Button>
        </Grid>
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Footer };
export default Footer;
//@@viewOff:exports
