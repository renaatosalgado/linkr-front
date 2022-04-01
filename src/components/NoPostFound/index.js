import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { NoPostFoundWrapper } from './style';

export function NoPostFound() {
  const { auth } = useAuth();
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.isFollowUser(auth?.token, auth?.user.id).then(({ data }) => {
      checkStatusOfMessageIfUserFollowsSomeone(data)
    })
  }, [auth?.token, auth?.user.id])

  function checkStatusOfMessageIfUserFollowsSomeone(data) {
    setMessage(data.message);
  }

  return (
    <NoPostFoundWrapper>
      {message}
    </NoPostFoundWrapper>
  )
}