import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Timeline from './pages/Timeline';
import { AuthProvider } from './contexts/AuthContext';
import { GlobalStyle } from './css/style';
import Header from './components/Header';
import HashtagPage from './pages/HashtagPage';
import UserPage from './pages/UserPage';

function App() {
    return (
        <>
            <GlobalStyle />
            <AuthProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/timeline" element={<Timeline />} />
                        <Route
                            path="/hashtag/:hashtag"
                            element={<HashtagPage />}
                        />
                        <Route path="/user/:id" element={<UserPage />}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
