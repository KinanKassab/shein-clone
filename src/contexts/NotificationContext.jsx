import { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = useCallback((message, options = {}) => {
    const {
      severity = 'success',
      duration = 4000,
      action = null,
    } = options;

    const id = Date.now();
    const notification = {
      id,
      message,
      severity,
      duration,
      action,
    };

    setNotifications((prev) => [...prev, notification]);

    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  }, []);

  const showSuccess = useCallback(
    (message, options) => showNotification(message, { ...options, severity: 'success' }),
    [showNotification]
  );

  const showError = useCallback(
    (message, options) => showNotification(message, { ...options, severity: 'error' }),
    [showNotification]
  );

  const showWarning = useCallback(
    (message, options) => showNotification(message, { ...options, severity: 'warning' }),
    [showNotification]
  );

  const showInfo = useCallback(
    (message, options) => showNotification(message, { ...options, severity: 'info' }),
    [showNotification]
  );

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        showNotification,
        removeNotification,
        showSuccess,
        showError,
        showWarning,
        showInfo,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
