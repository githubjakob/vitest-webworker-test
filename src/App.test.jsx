import { describe, test, expect } from 'vitest';  // Import from Vitest
import { render, screen, fireEvent } from '@testing-library/react';
import App from "./App";


describe('WebWorkerComponent', () => {
    test('shows correct calculation', async () => {
      render(<App />);

      const input = screen.getByPlaceholderText('Enter a number');
      const button = screen.getByText('Calculate');

      fireEvent.change(input, { target: { value: '10' } });

      fireEvent.click(button);

      expect(screen.getByText('Loading...')).toBeInTheDocument();

      const result = await screen.findByText(/Result: \d+/);

      expect(result).toHaveTextContent('Result: 55');
    });
  });