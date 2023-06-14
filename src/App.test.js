import { render, screen } from '@testing-library/react';
import App from './App';
import { store } from 'redux';
import { React } from 'react';
import { Provider } from 'react-redux';

test('renders Logout page', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const login = screen.getByText(/Login Here/i);
    expect(login).toBeInTheDocument();
});
