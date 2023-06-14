import { render, screen } from '@testing-library/react';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux';

test('renders Logout page', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const name = screen.getByPlaceholderText(/Name/i);
    expect(name).toBeInTheDocument();
});
