import { Box, Snackbar, Alert, Button } from '@mui/material';
import { useNotification } from '../contexts/NotificationContext';

const NotificationStack = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        maxWidth: '400px',
        pointerEvents: 'none',
        '@media (max-width: 600px)': {
          left: 10,
          right: 10,
          maxWidth: 'none',
          bottom: 10,
        },
      }}
    >
      {notifications.map((notification) => (
        <Box
          key={notification.id}
          sx={{
            pointerEvents: 'auto',
            animation: 'slideIn 0.3s ease-out',
            '@keyframes slideIn': {
              from: {
                transform: 'translateX(450px)',
                opacity: 0,
              },
              to: {
                transform: 'translateX(0)',
                opacity: 1,
              },
            },
          }}
        >
          <Alert
            onClose={() => removeNotification(notification.id)}
            severity={notification.severity}
            sx={{
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              borderRadius: 1.5,
              animation: 'fadeOut 0.3s ease-out forwards',
              animationDelay: `${notification.duration - 300}ms`,
              '@keyframes fadeOut': {
                to: {
                  opacity: 0,
                  transform: 'translateX(450px)',
                },
              },
              '& .MuiAlert-message': {
                width: '100%',
              },
            }}
            action={
              notification.action ? (
                <Button
                  color="inherit"
                  size="small"
                  onClick={() => {
                    notification.action?.onClick?.();
                    removeNotification(notification.id);
                  }}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  {notification.action.label}
                </Button>
              ) : undefined
            }
          >
            {notification.message}
          </Alert>
        </Box>
      ))}
    </Box>
  );
};

export default NotificationStack;
