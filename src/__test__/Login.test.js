import { render, screen } from '@testing-library/react';
import Login from '../Component/Login';
import store from '../app/store'
import { Provider } from 'react-redux';

describe('Login', () => {
    test('renders Logout page', () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const name = screen.getByPlaceholderText(/Name/i);
        expect(name).toBeInTheDocument();
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

    // test('render the login page with 3 input', async () => {
    //     render(
    //         <Provider store={store}>
    //             <Login />
    //         </Provider>
    //     );
    //     const inputCount = await screen.findAllByRole('button');
    //     expect(inputCount).toHaveLength(3);
    // });

});

