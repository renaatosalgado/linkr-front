import React, { useState } from 'react';
import api from '../../services/api';
import {
    Container,
    Form,
    Input,
    Button,
    StyledLink,
    FormContainer,
} from '../../components/FormComponents';
import { Logo, LogoContainer, Text } from '../../components/Logo';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

function SignUp() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
        picture: '',
    });
    const navigation = useNavigate();
    const { pathname } = useLocation();

    function handleChange({ target }) {
        setFormData({ ...formData, [target.name]: target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const user = { ...formData };

        try {
            await api.createUser(user);
            navigation('/');
        } catch ({ response }) {
            if (response.status === 409) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ops!',
                    text: 'Email already in use',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Something went wrong! Try again',
                });
            }
            setLoading(false);
        }
    }

    return (
        <Container>
            <LogoContainer>
                <Logo>linkr</Logo>
                <Text>save, share and discover the best links on the web</Text>
            </LogoContainer>
            <FormContainer page={pathname}>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="e-mail"
                        type="email"
                        disabled={loading}
                        onChange={(e) => handleChange(e)}
                        name="email"
                        value={formData.email}
                        required
                    />
                    <Input
                        placeholder="password"
                        type="password"
                        disabled={loading}
                        onChange={(e) => handleChange(e)}
                        name="password"
                        value={formData.password}
                        required
                    />
                    <Input
                        placeholder="username"
                        type="text"
                        disabled={loading}
                        onChange={(e) => handleChange(e)}
                        name="username"
                        value={formData.name}
                        required
                    />
                    <Input
                        placeholder="picture url"
                        type="url"
                        disabled={loading}
                        onChange={(e) => handleChange(e)}
                        name="picture"
                        value={formData.confirmPassword}
                        required
                    />
                    <Button type="submit" disabled={loading}>
                        Sign Up
                    </Button>
                </Form>
                <StyledLink to="/" disabled={loading}>
                    Switch back to log in
                </StyledLink>
            </FormContainer>
        </Container>
    );
}

export default SignUp;
