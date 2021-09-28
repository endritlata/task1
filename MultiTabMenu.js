import { useState } from "react";

import Tabs from "./Tabs";

const MultiTabMenu = () => {
    const [activeTab, setActiveTab] = useState('firstTab');

    const firstTabHandler = () => {
        setActiveTab('firstTab');
    };
    const secondTabHandler = () => {
        setActiveTab('secondTab');
    };

    return (
        <div>
            <button onClick={firstTabHandler}>Tab 1</button>
            <button onClick={secondTabHandler}>Tab 2</button>
            <Tabs activatedTab={activeTab} />
        </div>

    );
};

export default MultiTabMenu;