import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';

export default function ItemList(props) {
    const {data, checkedItem, filterValue, selectValue, checkedChanges} = props;

    let isDisabled = checkedItem.length > 2;

    const handleCheck = value => () => {
        const currentIndex = checkedItem.indexOf(value);
        const newChecked = [...checkedItem];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        checkedChanges(newChecked);
    };

    return (
        <List dense component="div" role="list">
            {data.map((value, idx) => {
                const labelId = `transfer-list-all-item-${value}-label`;
                if ((!filterValue || ~value.indexOf(filterValue)) && idx > selectValue) {
                    return (
                        <ListItem
                            disabled={isDisabled && checkedItem.indexOf(value) === -1}
                            key={value}
                            role="listitem"
                            button
                            onClick={handleCheck(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checkedItem.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value}/>
                        </ListItem>
                    )
                }
            })}
        </List>
    );
}


