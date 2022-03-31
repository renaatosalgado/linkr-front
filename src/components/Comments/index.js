import React, { useEffect, useState } from 'react';
import {
    CommentContainer,
    AuthorData,
    CommentText,
    CommentUserImage,
    CommentUserName,
    AuthorRelation,
    InnerContainer,
    Spacer,
    FormContainer,
    Form,
    Input,
    Send,
} from './style';
import useComments from '../../hooks/useComments';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';
import { IconContext } from 'react-icons';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';

function Comments({ postId }) {
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const { commentsOpen } = useComments();
    const { auth } = useAuth();
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        getComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getComments() {
        try {
            const response = await api.getComments(postId, auth.token);
            setComments(response.data);
            // console.log(comments);
        } catch (error) {}
    }

    console.log(comments);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await api.createComment({ text: commentText }, postId, auth.token);
            setLoading(false);
            setCommentText('');
            getComments();
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Something went wrong! Try again',
            });

            setLoading(false);
        }
    }

    if (!commentsOpen.isOpen) {
        return null;
    }
    if (commentsOpen.postId === postId) {
        return (
            <>
                {comments.map((comment) => (
                    <CommentContainer key={comment.id}>
                        <CommentUserImage
                            src={comment.userImage}
                            alt={'user image'}
                        />
                        <InnerContainer>
                            <AuthorData>
                                <CommentUserName
                                    to={`/user/${comment.commentUserId}`}
                                >
                                    {comment.userName}
                                </CommentUserName>
                                {comment.commentUserId ===
                                    comment.postUserId && (
                                    <AuthorRelation>
                                        {`• post’s author`}
                                    </AuthorRelation>
                                )}
                            </AuthorData>
                            <CommentText>{comment.text}</CommentText>
                        </InnerContainer>
                        <Spacer />
                    </CommentContainer>
                ))}
                <FormContainer>
                    <CommentUserImage src={auth.user.image} />
                    <Form onSubmit={handleSubmit}>
                        <Input
                            placeholder="write a comment..."
                            type="text"
                            disabled={loading}
                            onChange={({ target }) =>
                                setCommentText(target.value)
                            }
                            name="commentText"
                            value={commentText}
                            required
                        />
                        <Send disabled={loading} type="submit">
                            <IconContext.Provider
                                value={{
                                    color: 'white',
                                    size: '1em',
                                }}
                            >
                                <IoPaperPlaneOutline />
                            </IconContext.Provider>
                        </Send>
                    </Form>
                </FormContainer>
            </>
        );
    } else {
        return null;
    }
}

export default Comments;
