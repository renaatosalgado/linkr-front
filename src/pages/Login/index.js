import React, { useEffect, useState } from 'react';
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
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';

function Login() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { login } = useAuth();
    const auth = JSON.parse(localStorage?.getItem('auth'));
    const navigation = useNavigate();

    useEffect(() => {
        if (auth && auth !== '') {
            authValidation();
        }
        // eslint-disable-next-line
    }, []);

    async function authValidation() {
        try {
            await api.authToken(auth.token);
            navigation('/timeline');
        } catch {
            alert('Login to continue');
        }
    }

    function handleChange({ target }) {
        setFormData({ ...formData, [target.name]: target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const user = { ...formData };

        try {
            const { data } = await api.login(user);
            login(data);
            navigation('/timeline');
        } catch ({ response }) {
            if (response.data === 401) {
                alert('Email or password incorrect');
            } else {
                alert('Something went wrong! Try again');
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
            <FormContainer>
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
                    <Button disabled={loading} type="submit">
                        Log in
                    </Button>
                </Form>

                <StyledLink to="/sign-up" disabled={loading}>
                    First time? Create an account!
                </StyledLink>
            </FormContainer>
        </Container>
    );
}

export default Login;
