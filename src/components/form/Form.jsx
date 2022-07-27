import React, {useState} from 'react';
import { TextField, Button, Paper } from '@mui/material';
import styles from './Form.module.css';

function Form({ toDoHandler }) {
    const [text, setText] = useState(null);

    //TODO CREATE

  return (
    <Paper className={styles.form}>

        <TextField 
          id="outlined-basic" 
            label="Task" 
              variant="outlined" 
                onChange={(userTask) => setText(userTask.target.value)} 
                  fullWidth
                    />

        <Button 
          variant="contained" 
            onClick={() => toDoHandler(text)}>Add
              </Button>

    </Paper>
  )
}

export default Form