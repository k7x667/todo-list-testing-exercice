import '@testing-library/jest-dom';

import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Empty } from '../Empty';

//test d'exemple pour vous permettre de vous lancer

test('loads and displays greeting', async () => {
  render(<Empty />);

  expect(screen.getByText('You have no tasks')).toBeInTheDocument();
  expect(
    screen.getByText('Add a task and organize the things you have to do')
  ).toBeInTheDocument();
});
