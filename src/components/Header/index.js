import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';
import { TopBar, Arrow, Logo, Photo, LogoutButton } from './style';
import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function Header() {
    const [logoutButton, setLogoutButton] = useState(false);
    const navigation = useNavigate();
    const { pathname } = useLocation();
    const {
        auth: { user },
        login,
    } = useAuth();
    const isHomePage = pathname === `/` || pathname === `/sign-up`;

    async function logoutHandler() {
        try {
            await api.logout(user.id);
            login('');
            navigation('/');
            setLogoutButton(false);
        } catch (error) {
            console.log(error);
            alert('Tente novamente');
        }
    }

    return (
        !isHomePage && (
            <TopBar>
                <Logo>linkr</Logo>
                <Arrow onClick={() => setLogoutButton(!logoutButton)}>
                    <IconContext.Provider
                        value={{
                            color: 'white',
                            size: '2em',
                        }}
                    >
                        {logoutButton ? (
                            <IoChevronUpOutline />
                        ) : (
                            <IoChevronDownOutline />
                        )}
                    </IconContext.Provider>
                </Arrow>
                <Photo src={`${user ? user.image : ''}`} alt="Foto" />
                {logoutButton && (
                    <LogoutButton onClick={() => logoutHandler()}>
                        Lougout
                    </LogoutButton>
                )}
            </TopBar>
        )
    );
}

export default Header;
