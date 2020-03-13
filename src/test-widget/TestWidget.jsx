import {Chip} from "@material-ui/core";
import ListModal from "./components/ListModal";
import React, {useState} from "react";

const getItems = () => new Array(300).fill('item').map((item, idx) => `${item} ${idx}`);

const TestWidget = () => {
    const [chips, setChips] = useState([]);
    const [data] = useState(getItems);

    const handleDeleteAction = (value) => {
        setChips(chips.filter(item => item !== value));
    };

    const onCheckedChanges = (value) => {
        setChips(value);
    };

    return (
        <div className="widget-main">
            {!chips.length ? <div className="no-value">У вас ничего не выбрано</div> : null}
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
                checkedItem={chips}
                checkedChanges={onCheckedChanges}
            />
        </div>
    )
};

export default TestWidget;
