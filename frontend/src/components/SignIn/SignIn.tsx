import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';

export function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    agreeToTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isSignUp) {
      console.log('Sign up:', formData);
    } else {
      console.log('Sign in:', { email: formData.email, password: formData.password });
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      agreeToTerms: false,
    });
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">
        {isSignUp ? 'Create your account' : 'Welcome back!'}
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        {isSignUp ? 'Already have an account? ' : 'Do not have an account yet? '}
        <Anchor size="sm" component="button" onClick={toggleMode}>
          {isSignUp ? 'Sign in' : 'Create account'}
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <TextInput
              label="Full name"
              placeholder="Your name"
              value={formData.name}
              onChange={(event) => handleInputChange('name', event.currentTarget.value)}
              required
            />
          )}
          
          <TextInput
            label="Email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(event) => handleInputChange('email', event.currentTarget.value)}
            required
            mt={isSignUp ? 'md' : 0}
          />
          
          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={formData.password}
            onChange={(event) => handleInputChange('password', event.currentTarget.value)}
            required
            mt="md"
          />

          {isSignUp && (
            <PasswordInput
              label="Confirm password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(event) => handleInputChange('confirmPassword', event.currentTarget.value)}
              required
              mt="md"
            />
          )}

          {isSignUp && (
            <Checkbox
              label="I agree to the terms and conditions"
              checked={formData.agreeToTerms}
              onChange={(event) => handleInputChange('agreeToTerms', event.currentTarget.checked)}
              mt="md"
            />
          )}

          {!isSignUp && (
            <Group justify="space-between" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
          )}

          <Button type="submit" fullWidth mt="xl">
            {isSignUp ? 'Sign up' : 'Sign in'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
