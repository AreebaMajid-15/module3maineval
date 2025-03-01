import { StrictMode } from 'react'
import { Provider  as ChakraProvider} from "./components/ui/provider"
import { Provider } from './components/ui/provider'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

     <BrowserRouter>
    
    <ChakraProvider>
    <App />

    </ChakraProvider>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
