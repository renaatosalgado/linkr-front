import React, { useEffect, useState } from 'react';
import { Icon, Count } from './style';
import useComments from '../../hooks/useComments';
import { IconContext } from 'react-icons';
import { AiOutlineComment } from 'react-icons/ai';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';

function CommentsIcon({ postId }) {
    const [comments, setComments] = useState([]);
    const { commentsOpen, setCommentsOpen } = useComments();
    const { auth } = useAuth();

    useEffect(() => {
        getComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getComments() {
        try {
            const response = await api.getComments(postId, auth.token);
            setComments(response.data);
        } catch (error) {}
    }

    function openComments(e) {
        if (
            commentsOpen.postId === postId ||
            commentsOpen.postId === '' ||
            !commentsOpen.isOpen
        ) {
            setCommentsOpen({ isOpen: !commentsOpen.isOpen, postId });
        } else {
            setCommentsOpen({ isOpen: commentsOpen.isOpen, postId });
        }
    }

    return (
        <>
            <Icon>
                <IconContext.Provider
                    value={{
                        color: 'white',
                        size: '1.7em',
                    }}
                >
                    <AiOutlineComment onClick={(e) => openComments(e)} />
                </IconContext.Provider>
            </Icon>
            <Count>{`${comments.length} comment${
                comments?.length === 1 ? '' : 's'
            }`}</Count>
        </>
    );
}

export default CommentsIcon;
