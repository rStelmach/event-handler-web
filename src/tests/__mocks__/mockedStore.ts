import configureStore from 'redux-mock-store';

const initialState = {
  value: [
    {
      firstName: 'test',
      lastName: 'test',
      email: '123@test.pl',
      date: '22-04.2022',
    },
  ],
};
const mockStore = configureStore();

export const store = mockStore(initialState);
