// eslint-disable-next-line no-unused-vars
import React from 'react'; 
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import { AppContext } from '../src/context/AppContext';

describe('App component', () => {
  it('renders Imagify heading', () => {
    render(
      <AppContext.Provider value={{
        showLogin: false,
        setShowLogin: () => {},
        user: null,
        logout: () => {},
        credit: 0
      }}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </AppContext.Provider>
    );

   expect(screen.getAllByText(/imagify/i).length).toBeGreaterThan(0);

  });
});
