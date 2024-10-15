import { Todo } from './Todo';
export interface ErrorNotificationProps {
  error: string | null;
}

export interface FooterProps {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

export interface HeaderProps {
  allCompleted: boolean;
}

export interface TodoItemProps {
  todo: Todo;
}

export interface TodoListProps {
  todos: Todo[];
}
