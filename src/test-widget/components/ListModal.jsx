import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ItemList from './ItemList';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function ListModal(props) {
    const {data, checkedItem, checkedChanges} = props;
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState([...checkedItem]);
    const [selectValue, setSelectValue] = useState(-1);
    const [filterValue, setFilterValue] = useState('');


    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
        setChecked(checkedItem);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseAndApplyChanges = () => {
        checkedChanges(checked);
        handleClose();
    };

    const onCheckedChanges = (value) => {
        setChecked(value)
    };

    const handleSelectChange = (event) => {
        setSelectValue(Number(event.target.value));
    };

    const handleChanges = (event) => {
        setFilterValue(event.target.value);
    };

    return (
        <div className='list-modal-main'>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
                className="widget-button"
            >
                Изменить свой выбор
            </Button>
            <Dialog
                fullWidth={true}
                scroll="paper"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Изменить выбор</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Выберите не более трех опций!
                    </DialogContentText>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="filter"
                            label="Фильтер 1"
                            type="text"
                            value={filterValue}
                            onChange={handleChanges}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-label">Фильтер 2</InputLabel>
                        <Select
                            labelId="select-label"
                            id="select"
                            value={selectValue}
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={10}> >10 </MenuItem>
                            <MenuItem value={30}> >30 </MenuItem>
                            <MenuItem value={50}> >50 </MenuItem>
                            <MenuItem value={-1}> all </MenuItem>
                        </Select>
                    </FormControl>

                    <ItemList
                        selectValue={selectValue}
                        filterValue={filterValue}
                        data={data}
                        checkedItem={checked}
                        checkedChanges={onCheckedChanges}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleCloseAndApplyChanges} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
