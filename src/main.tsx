import { StrictMode } from 'react'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import './main.scss'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
)
