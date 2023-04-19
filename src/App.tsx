import { useState } from 'react'
import { Button } from 'primereact/button';    
import { InputText } from 'primereact/inputtext';     
import './App.scss'

import "primereact/resources/themes/md-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";                                       
         

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [text, setText] = useState('')

  return (
    <div className='App'>
      <InputText value={text} onChange={e => setText(e.target.value)}></InputText>
      <br></br>
      <Button type='button' label='Submit' icon='pi pi-check'></Button>
      <br></br>
      {text}
    </div>
  )
}

export default App
