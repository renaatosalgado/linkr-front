import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Timeline from './pages/Timeline';
import { AuthProvider } from './contexts/AuthContext';
import { GlobalStyle } from './css/style';
//import Header from './components/Header';

function App() {
    return (
        <>
            <GlobalStyle />
            <AuthProvider>
                <BrowserRouter>
                    {/*<Header />*/}
                    <Routes>
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/timeline" element={<Timeline />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
