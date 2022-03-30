import React from 'react';
import { useState, useEffect } from 'react';
import { FollowButtonBox } from './style'
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';

export default function FollowButton({followedId,isLoadingPosts}){
    const {user} = JSON.parse(localStorage.getItem('auth'));
    const [isFollowing, setIsFollowing] = useState();
    const [disableButton, setDisableButton] = useState();
    const { auth } = useAuth();

    useEffect(() => {
        api.isFollow(followedId,auth?.token).then((res) => {
            if(res.data === 0){
                setIsFollowing(false)
            }else{
                setIsFollowing(true)
            }
            
          })
          .catch((err) => {
            console.log(err);
          });
      }, [auth,followedId]);
    
    async function Follow(){
        setIsFollowing(!isFollowing)
        setDisableButton(true)
        try {
            await api.followUser(followedId,auth?.token);
        } catch (error) {
            setIsFollowing(!isFollowing)
            alert('Something went wrong, please try again');
        }
        setDisableButton(false)
     }
    return(
        <FollowButtonBox 
        disabled ={disableButton}
        isLoadingPosts={isLoadingPosts}
        sameUser={user.id === parseInt(followedId)}
        isFollowing={isFollowing}
        onClick={Follow} >{isFollowing ? "Unfollow" : "Follow"}

        </FollowButtonBox>
    )
}