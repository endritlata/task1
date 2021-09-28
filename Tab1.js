import { useState } from "react";

import MenuContents from "./MenuContents";

const Tab1 = (props) => {
    const [activeMenu, setActiveMenu] = useState('menu1_1');
    //const [theWord, setTheWord] = useState();

    const firstMenuHandler = () => {
        setActiveMenu('menu1_1');
    };
    const secondMenuHandler = () => {
        setActiveMenu('menu2_1');
    };

    /* let theWord = '';

    const getTheWordHandler = (word) => {
        theWord = word;
        console.log(theWord);
    };
 */


    // const menu = .map(meal => <li>{meal.name}</li>)
    return <div>
        <div>
            <button onClick={firstMenuHandler}>Menu 1</button>
            <button onClick={secondMenuHandler}>Menu 2</button>
        </div>
            <MenuContents activeMenu={activeMenu} chosenTab={props.tab} />
    </div>
};

export default Tab1;