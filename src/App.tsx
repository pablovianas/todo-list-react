import { useEffect, useState } from 'react';
import * as C from './App.styles';
import {Item} from './types/item'
import { ListItem } from './components/ListItem';
import { Area } from './components/Area';
import { AddArea } from './components/AddArea';


const App = () =>  {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
    localStorage.setItem('task', JSON.stringify(newList));
  }
  
   const handleChange = (id: number, done: boolean) => { 
    let newList = [...list];
    newList.forEach((item, index)=>{
      if (newList[index].id === id){
        newList[index].done = done;
      }
    })
    setList(newList);
    localStorage.setItem("task", JSON.stringify(newList));
  }

  useEffect(() => {
    const storedList = localStorage.getItem('task')
    let output = storedList !== null ? JSON.parse(storedList) : ''
    setList(output);
  },[]);

  return (
    <C.Container>
      <Area>
        <>
          <C.Header>Todo List</C.Header>
          <AddArea onEnter={handleAddTask}></AddArea>
          {Array.isArray(list) ? list?.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  item={item}
                  onChange={handleChange}
                ></ListItem>
              );
          }):null}
        </>
      </Area>
    </C.Container>
  );
}

export default App;
