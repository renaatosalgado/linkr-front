import React from 'react';
import { Container } from './style';
import { useParams } from 'react-router-dom';

function UserPage() {
    const { id } = useParams();
    return <Container />;
}

export default UserPage;
