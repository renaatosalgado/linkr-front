import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import {
  TopBar,
  Arrow,
  Logo,
  Photo,
  LogoutButton,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FoundUsers,
  SingleUser,
  SingleUserAvatar,
} from "./style";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const { auth, login } = useAuth();
  const isHomePage = pathname === `/` || pathname === `/sign-up`;
  const [searchName, setSearchName] = useState("");
  const [foundUser, setFoundUser] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const checkClick = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", checkClick);

    return () => {
      document.removeEventListener("click", checkClick);
    };
  }, [isMenuOpen]);

  async function logoutHandler() {
    try {
      await api.logout(auth.token);
      login("");
      navigation("/");
      setIsMenuOpen(false);
    } catch (error) {
      console.log(error);
      alert("Tente novamente");
    }
  }

  useEffect(() => {
    console.log("rodei");
    if (searchName.length < 3) {
      console.log("entrei");
      return setIsSearching(false);
    }

    api
      .searchUser(searchName)
      .then((res) => {
        setIsSearching(true);
        setFoundUser(res.data);
        console.log("then");
      })
      .catch(setIsSearching(false));

    console.log("fim");
  }, [searchName]);

  return (
    !isHomePage && (
      <TopBar>
        <Link to="/timeline">
          <Logo>linkr</Logo>
        </Link>

        <SearchContainer>
          <DebounceInput
            minLength={3}
            debounceTimeout={300}
            onChange={(e) => setSearchName(e.target.value)}
            value={searchName}
            element={SearchInput}
            placeholder="Search for people and friends"
            required
          />
          <SearchIcon>
            <AiOutlineSearch size="25px" />
          </SearchIcon>
          <FoundUsers isSearching={isSearching}>
            {foundUser.map((user) => (
              <SingleUser key={user.id}>
                <Link to={`/user/${user.id}`}>
                  <SingleUserAvatar
                    onClick={() => {
                      setIsSearching(false);
                      setSearchName("");
                    }}
                  >
                    <img src={user.image} alt="profile" />
                  </SingleUserAvatar>
                </Link>
                <Link to={`/user/${user.id}`}>
                  <p
                    onClick={() => {
                      setIsSearching(false);
                      setSearchName("");
                    }}
                  >
                    {user.name}{" "}
                    {user.isFollowingLoggedUser ? (
                      <span> • following</span>
                    ) : (
                      ""
                    )}
                  </p>
                </Link>
              </SingleUser>
            ))}
          </FoundUsers>
        </SearchContainer>

        <Arrow onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IconContext.Provider
            value={{
              color: "white",
              size: "2em",
            }}
          >
            {isMenuOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </IconContext.Provider>
        </Arrow>
        <Photo
          src={`${auth?.user ? auth?.user.image : ""}`}
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
