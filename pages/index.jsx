import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/subtitle';
import Header from '../src/components/header/Header';
import Form from '../src/components/form/Form';
import ToDoItem from '../src/components/listItem/ToDoItem';
import { Container, List } from '@mui/material';
import { style } from '@mui/system';
import { useState } from 'react';

function App() {

  const [toDos, setTodos] = useState([]); 

  const toDoHandler = (toDo) => {
    setTodos([...toDos, toDo])
  }

  return (
    <>
    <div>
      <Header />
    </div>
    
    <div>
      <Title text="Hello World - To do List - Project"/>
      <Subtitle text="Created by - @devbpatriciocosta"/>
    </div>

    <div> 
      <Container maxWidth="xs" style={{ marginTop:"40px" }}>

        <Form toDoHandler={toDoHandler}/>

        <List sx={{ marginTop: "40px"}}> 
          {toDos.map((todo) => (
            <div style={{ marginTop: "12px" }}>
              <ToDoItem /> 
            </div>             
          ))}   
        </List>

      </Container>   
    </div>    

    </>
  )
}

export default App;