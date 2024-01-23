
import './App.css'
import { useState } from "react";
import AddTableRow from './components/AddTableRow/AddTableRow'
import Table from './components/Table/Table'



// Mandatory functionality of the application:
// ✅ Render a list sourced from mockapi.io/todos or https://jsonplaceholder.typicode.com/ .
// ✅ Ability to modify a list item.
// ✅ Ability to delete a list item.
// ✅ Ability to add an item to the list.
// ✅🌟 Application styling using MUI.


// Division of functionality into folders:
// ✅components
// ✅services
// ✅🌟 constants
// ✅🌟 hooks


// 🌟 The implementation of the functionality will be a plus:
// Ability to filter the list.
// Ability to change the color of the list/list items.
// Ability to sort the list.
// 🌟 Ability to store filtering/color settings in localStorage/sessionStorage.

// 🌟 It will be a plus to use hooks:
// useMemo
// Own Hooks
// memo



function App() {
  const [input, setInput] = useState("");
  const [click, setClick] = useState(0);
  return (
    <>
      <AddTableRow input={input} setInput={setInput} setClick={setClick} click={click}></AddTableRow>
      <Table input={input} click={click}></Table>
    </>
  );
}

export default App
