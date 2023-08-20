import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Component/Routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='px-[120px'>
    <RouterProvider router={routes} ></RouterProvider>
  </div>
)
