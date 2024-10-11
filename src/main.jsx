import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  reducer , {initialState} from "./contex/reducer /reducer.jsx"
import { StateProvider } from './contex/StateProvider/Stateprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);