import React, {useState} from 'react';
import { TextField, Button, Paper } from '@mui/material';
import styles from './Form.module.css';

function Form({ addToDo }) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    //TODO CREATE

    const toDoCreate = (text) => {
      const toDoObject = 
      { 
        text: text, 
        id: id 
      };
      setId(id + 1);
      addToDo(toDoObject);
      document.getElementById("outlined-basic").value = null;
    }

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
            onClick={() => toDoCreate(text)}>Add
              </Button>

    </Paper>
  )
}

export default Form