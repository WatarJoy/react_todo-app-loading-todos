import React from 'react';
import { ErrorNotificationProps } from '../types/Props';

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({
  error,
}) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={`notification is-danger is-light has-text-weight-normal ${error ? '' : 'hidden'}`}
    >
      <button data-cy="HideErrorButton" type="button" className="delete" />
      {error}
    </div>
  );
};
