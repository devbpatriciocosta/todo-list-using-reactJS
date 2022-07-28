import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/subtitle';
import Header from '../src/components/header/Header';
import Form from '../src/components/form/Form';
import ToDoItem from '../src/components/listItem/ToDoItem';
import { Container, List } from '@mui/material';
import { style } from '@mui/system';
import { useState } from 'react';

function App() {

  const [toDos, setToDos] = useState([]); 

  const addToDo = (toDo) => {
    setToDos([...toDos, toDo])
  }

  const deleteToDo = (id) => {
    var filtered = toDos.filter((toDo) => toDo.id !== id)
    setToDos(filtered)
  }

  return (
    <>
    <div>
      <Header />
    </div>
    
    <div>
      <Title text="Hello World - To do List - First React Project"/>
      <Subtitle text="Created by - @devbpatriciocosta"/>
    </div>
    
    <div> 
      <Container maxWidth="xs" style={{ marginTop:"40px" }}>

        <Form addToDo={addToDo}/>

        <List sx={{ marginTop: "40px"}}> 
          {toDos.map((toDo) => (
            <div key={toDo.id} style={{ marginTop: "12px" }}>
              <ToDoItem toDo={toDo} deleteToDo={deleteToDo}/> 
            </div>             
          ))}   
        </List>

      </Container>   
    </div>    

    </>
  )
}

export default App;