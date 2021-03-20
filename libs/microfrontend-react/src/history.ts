import { History } from 'history';

export const initHistory = (history: History) => {
  (window as any).microfrontend_history = history;
};

export const history = () => (window as any).microfrontend_history as History;
