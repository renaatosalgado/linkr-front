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
import { useNavigate } from 'react-router';

function SignUp() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
        picture: '',
    });
    const navigation = useNavigate();

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
        } catch (error) {
            console.log(error);
            alert('Erro, tente novamente');
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
