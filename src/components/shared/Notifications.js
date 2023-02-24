import { NotificationManager } from 'react-notifications';

const createNotification = (type) => () => {
  switch (type) {
    case 'info':
      NotificationManager.info('Demo version, working on this feature...');
      break;
    case 'success':
      NotificationManager.success('Success message', 'Title here');
      break;
    case 'warning':
      NotificationManager.warning(
        'Warning message',
        'Close after 3000ms',
        3000,
      );
      break;
    case 'error':
      NotificationManager.error('Error message', 'Click me!', 5000, () => {
        alert('callback');
      });
      break;
    default:
      break;
  }
};

export default createNotification;
