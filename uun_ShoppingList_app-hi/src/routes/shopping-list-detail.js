//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import NavBar from "../bricks/shopping-list-detail/nav-bar.js"
import ShoppingList from "../bricks/shopping-list-detail/shopping-list.js";
import Footer from "../bricks/shopping-list-detail/footer.js";
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

const ShoppingListDetail = createVisualComponent({
    //@@viewOn:statics
    uu5Tag: Config.TAG + "ShoppingListDetail",
    nestingLevel: ["areaCollection", "area"],
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {},
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {},
    //@@viewOff:defaultProps

    render() {
        //@@viewOn:render
        return (
            <div>
                <NavBar />
                <ShoppingList />
                <Footer />
            </div>
        )
        //@@viewOff:render
    }
});

//@@viewOn:exports
export { ShoppingListDetail };
export default ShoppingListDetail;
//@@viewOff:exports
