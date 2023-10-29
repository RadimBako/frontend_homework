//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import { Box, Text, Line, Button, Toggle, Grid } from "uu5g05-elements";
import "./shop.css"

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

const NavBar = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "NavBar",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:render
    return (
      <div className="nav-bar">
        <Grid display="block" flow="column" justifyContent="end" columnGap="1%">
          <Toggle box={true} label="Dark Mode" />
          <Button colorScheme="dark-green">Sign In</Button>
        </Grid>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NavBar };
export default NavBar;
//@@viewOff:exports
