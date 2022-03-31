import { useContext } from 'react';
import CommentContext from '../contexts/CommentContext';

export default function useComments() {
    return useContext(CommentContext);
}
