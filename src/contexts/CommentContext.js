import { createContext, useState } from 'react';

const CommentContext = createContext();

export function CommentProvider({ children }) {
    const [commentsOpen, setCommentsOpen] = useState({
        isOpen: false,
        postId: '',
    });

    return (
        <CommentContext.Provider value={{ commentsOpen, setCommentsOpen }}>
            {children}
        </CommentContext.Provider>
    );
}

export default CommentContext;
