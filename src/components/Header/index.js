import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import api from '../../services/api';
import { TopBar, Arrow, Logo, Photo, LogoutButton } from './style';
import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const ref = useRef(null);
    const navigation = useNavigate();
    const { pathname } = useLocation();
    const auth = JSON.parse(localStorage?.getItem('auth'));
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
        setLoading(true);
        try {
            await api.logout(auth.token);
            localStorage.clear();
            navigation('/');
            setLoading(false);
            setIsMenuOpen(false);
        } catch (error) {
            setLoading(false);
            alert('Something went wrong! Try again');
        }
    }

    return (
        !isHomePage && (
            <TopBar>
                <Logo to={'/'}>linkr</Logo>
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
                    <LogoutButton
                        onClick={() => logoutHandler()}
                        ref={ref}
                        disabled={loading}
                    >
                        Lougout
                    </LogoutButton>
                )}
            </TopBar>
        )
    );
}

export default Header;
