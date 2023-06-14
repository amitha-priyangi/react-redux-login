import { render, screen } from '@testing-library/react';
import Login from '../Component/Login';
import store from '../app/store'
import { Provider } from 'react-redux';

describe('Login', () => {
    test('renders Login page with name placeholder', () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const name = screen.getByPlaceholderText(/Name/i);
        expect(name).toBeInTheDocument();
    });

    test('renders Login page with email placeholder', () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const email = screen.getByPlaceholderText(/Email/i);
        expect(email).toBeInTheDocument();
    });

    test('renders Login page with password placeholder', () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const password = screen.getByPlaceholderText(/Email/i);
        expect(password).toBeInTheDocument();
    });

    

    test('name input should be empty', () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const nameInput = screen.getByPlaceholderText(/Name/i);
        expect(nameInput.value).toBe('');
    });

    test('email input should be empty', () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const emailInput = screen.getByPlaceholderText(/Email/i);
        expect(emailInput.value).toBe('');
    });

    test('password input should be empty', () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const passwordInput = screen.getByPlaceholderText(/Password/i);
        expect(passwordInput.value).toBe('');
    });

    test('render the login page with 1 button', async () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const buttonCount = await screen.findAllByRole('button');
        expect(buttonCount).toHaveLength(1);
    });

    

});

