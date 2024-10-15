import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

// Set your registered user ID here
export const USER_ID = 123; // Replace with your actual user ID

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};
