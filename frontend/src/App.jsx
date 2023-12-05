import{BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ProductsPage from './pages/ProductsPage'
import ProductsFormPage from './pages/ProductsFormPage'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from "./context/AuthContext"
import { ProductsProvider } from './context/ProductsContext'
import { ProvedorProvider } from './context/ProvedorContext'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'
import ProvedorPage from './pages/ProvedorPage'
import ProvedorFormPage from './pages/ProvedorFormPage'

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <ProvedorProvider>
          <BrowserRouter>
            <main className='container mx-auto px-10'>
              <NavBar/>
              <Routes>
                <Route path= "/" element={<HomePage/>} />
                <Route path= "/login" element={<LoginPage/>} />
                <Route path= "/register" element={<RegisterPage/>} />
    
                  {/*Seccion de rutas protegidas*/}
                {/*<Route element={<ProtectedRoute/>}>*/}
                  <Route path= "/profile" element={<ProfilePage/>} />
                  <Route path= "/products" element={<ProductsPage/>} />
                  <Route path= "/products/new" element={<ProductsFormPage/>} />
                  <Route path= "/products/:id" element={<ProductsFormPage/>} />
                  <Route path='/provedor' element={<ProvedorPage/>}/>
                  <Route path='/provedor/new' element={<ProvedorFormPage/>}/>
                  <Route path='/provedor/:id' element={<ProvedorFormPage/>}/>
                {/*</Route>*/}
                <Route path='*' element={<NotFound/>} />
    
              </Routes>
            </main>
          </BrowserRouter>
        </ProvedorProvider>
      </ProductsProvider>
    </AuthProvider>
  )
}

export default App
