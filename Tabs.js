import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Tabs = (props) => {
    return <div>
        {props.activatedTab === 'firstTab' ? <Tab1 tab={props.activatedTab} /> : <Tab2 tab={props.activatedTab} />}
    </div>
};

export default Tabs;