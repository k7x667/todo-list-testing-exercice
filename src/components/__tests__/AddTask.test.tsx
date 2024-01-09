import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddTask } from '../AddTask';
import { test, expect, describe, vi } from 'vitest';


describe('AddTask component', () => {
  test('renders AddTask component', () => {
    render(<AddTask handleAddTask={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    expect(inputElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(<AddTask handleAddTask={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Add a new task');

    fireEvent.change(inputElement, { target: { value: 'Test Task' } });

    expect(inputElement.value).toBe('Test Task');
  });

  test('handles form submission', () => {
    const handleAddTaskMock = vi.fn(() => 0);
    render(<AddTask handleAddTask={handleAddTaskMock} />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    const formElement = screen.getByRole('form');

    fireEvent.change(inputElement, { target: { value: 'Test Task' } });
    fireEvent.submit(formElement);

    expect(handleAddTaskMock).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Test Task',
      })
    );
  });
});
