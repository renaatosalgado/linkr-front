import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';
import { TopBar, Arrow, Logo, Photo, LogoutButton } from './style';
import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref = useRef(null);
    const navigation = useNavigate();
    const { pathname } = useLocation();
    const { auth, login } = useAuth();
    const isHomePage = pathname === `/` || pathname === `/sign-up`;

    useEffect(() => {
        const checkClick = (e) => {
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', checkClick);

        return () => {
            document.removeEventListener('click', checkClick);
        };
    }, [isMenuOpen]);

    async function logoutHandler() {
        try {
            await api.logout(auth.token);
            login('');
            navigation('/');
            setIsMenuOpen(false);
        } catch (error) {
            console.log(error);
            alert('Tente novamente');
        }
    }

    return (
        !isHomePage && (
            <TopBar>
                <Logo>linkr</Logo>
                <Arrow onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IconContext.Provider
                        value={{
                            color: 'white',
                            size: '2em',
                        }}
                    >
                        {isMenuOpen ? (
                            <IoChevronUpOutline />
                        ) : (
                            <IoChevronDownOutline />
                        )}
                    </IconContext.Provider>
                </Arrow>
                <Photo
                    src={`${auth?.user ? auth?.user.image : ''}`}
                    alt="Foto"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                {isMenuOpen && (
                    <LogoutButton onClick={() => logoutHandler()} ref={ref}>
                        Lougout
                    </LogoutButton>
                )}
            </TopBar>
        )
    );
}

export default Header;
