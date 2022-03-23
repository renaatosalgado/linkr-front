import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';
import { TopBar, Arrow, Logo, Photo, LogoutButton } from './style';
import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function Header() {
    const [logoutButtonOpen, setLogoutButtonOpen] = useState(false);
    const ref = useRef(null);
    const navigation = useNavigate();
    const { pathname } = useLocation();
    const {
        auth: { user },
        login,
    } = useAuth();
    const isHomePage = pathname === `/` || pathname === `/sign-up`;

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (
                logoutButtonOpen &&
                ref.current &&
                !ref.current.contains(e.target)
            ) {
                setLogoutButtonOpen(false);
            }
        };

        document.addEventListener('click', checkIfClickedOutside);

        return () => {
            document.removeEventListener('click', checkIfClickedOutside);
        };
    }, [logoutButtonOpen]);

    async function logoutHandler() {
        try {
            await api.logout(user.id);
            login('');
            navigation('/');
            setLogoutButtonOpen(false);
        } catch (error) {
            console.log(error);
            alert('Tente novamente');
        }
    }

    return (
        !isHomePage && (
            <TopBar>
                <Logo>linkr</Logo>
                <Arrow onClick={() => setLogoutButtonOpen(!logoutButtonOpen)}>
                    <IconContext.Provider
                        value={{
                            color: 'white',
                            size: '2em',
                        }}
                    >
                        {logoutButtonOpen ? (
                            <IoChevronUpOutline />
                        ) : (
                            <IoChevronDownOutline />
                        )}
                    </IconContext.Provider>
                </Arrow>
                <Photo
                    src={`${user ? user.image : ''}`}
                    alt="Foto"
                    onClick={() => setLogoutButtonOpen(!logoutButtonOpen)}
                />
                {logoutButtonOpen && (
                    <LogoutButton onClick={() => logoutHandler()} ref={ref}>
                        Lougout
                    </LogoutButton>
                )}
            </TopBar>
        )
    );
}

export default Header;
