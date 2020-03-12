import {Chip} from "@material-ui/core";
import ListModal from "./components/ListModal";
import React, {useState} from "react";

const getItems = () => {
    const result = [];
    for (let i = 0; i < 300; i++) {
        result.push(`item ${i}`);
    }
    return result;
};

const TestWidget = () => {
    const [chips, setChips] = useState([]);
    const [data] = useState(getItems);

    const handleDeleteAction = (value) => {
        setChips(chips.filter(item => item !== value));
    };

    const updateChips = (value) => {
        setChips(value);
    };

    return (
        <div className="widget-main">
            {!chips.length && <div className="no-value">У вас ничего не выбрано</div>}
            {chips.map(item => {
                return (
                    <Chip
                        key={item}
                        onDelete={() => handleDeleteAction(item)}
                        label={item}
                        className="chips"
                    />
                )
            })}
            <ListModal
                data={data}
                buttonName="Изменить свой выбор"
                checkedItem={chips}
                checkedChanges={updateChips}
            />
        </div>
    )
};

export default TestWidget;
