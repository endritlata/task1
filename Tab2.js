import { useState } from "react";

import MenuContents from "./MenuContents";

const Tab2 = (props) => {
    const [activeMenu, setActiveMenu] = useState('menu1_2');

    const firstMenuHandler = () => {
        setActiveMenu('menu1_2');
    };
    const secondMenuHandler = () => {
        setActiveMenu('menu2_2');
    };

    const thirdMenuHandler = () => {
        setActiveMenu('menu3_2');
    };

    return (
        <div>
            <div>
                <button onClick={firstMenuHandler}>Menu 1</button>
                <button onClick={secondMenuHandler}>Menu 2</button>
                <button onClick={thirdMenuHandler}>Menu 3</button>
            </div>
            <MenuContents activeMenu={activeMenu} chosenTab={props.tab} />
        </div>
    )
};

export default Tab2;