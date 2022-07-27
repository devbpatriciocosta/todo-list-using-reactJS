import React from 'react';
import { TextField, Button, Paper } from '@mui/material';
import styles from './Form.module.css';

function Form() {
  return (
    <Paper className={styles.form}>
        <TextField id="outlined-basic" label="Task" variant="outlined" />
        <Button variant="contained">Add</Button>
    </Paper>
  )
}

export default Form