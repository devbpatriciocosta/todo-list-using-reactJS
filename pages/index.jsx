import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/subtitle';
import Header from '../src/components/header/Header';
import Form from '../src/components/form/Form';
import ToDoItem from '../src/components/listItem/ToDoItem';
import { Container } from '@mui/material';

function App() {
  return (
    <>
    <div>
      <Header />
    </div>
    
    <div>
      <Title text="Hello World - To do List - Project"/>
      <Subtitle text="Created by - @devbpatriciocosta"/>
    </div>

    <Container maxWidth="xs" style={{ marginTop:"1em" }}>
      <Form />
      <ToDoItem />
    </Container>      
      
    </>
  )
}

export default App;