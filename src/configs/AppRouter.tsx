import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from '../components/login/LoginPage.tsx'
import HomePage from "../components/home/HomePage.tsx"
import {useAuth} from "../hooks/useAuth.tsx"
import LayoutPage from "../components/layout/LayoutPage.tsx"
import ProtectedPage from "../components/protected/ProtectedPage.tsx"

import '../assets/screen.css'

const AppRouter = () => {
    const auth = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LayoutPage/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"auth/login"} element={<LoginPage/>}/>
                    <Route path={"protected"} element={auth.isAuthenticated ? <ProtectedPage/> : <LoginPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter