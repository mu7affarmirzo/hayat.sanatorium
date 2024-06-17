import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warning: 'warning',
};

interface ToastProps {
  message: string;
  type?: keyof typeof toastTypes;
  duration?: number;
  onClose?: () => void;
}

const Toast = ({
  message,
  type = 'info',
  duration = 5000,
  onClose,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(false), duration);
    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [message, duration]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.(); // Call external onClose handler if provided
  };

  const getToastClass = () => {
    switch (type) {
      case toastTypes.success:
        return 'toast-success';
      case toastTypes.error:
        return 'toast-error';
      case toastTypes.info:
        return 'toast-info';
      case toastTypes.warning:
        return 'toast-warning';
      default:
        return 'toast'; // Default class for unknown types
    }
  };

  return (
    <CSSTransition
      in={isVisible}
      timeout={300} // Transition duration (optional)
      classNames="toast"
      unmountOnExit // Remove toast from DOM after animation
    >
      <div className={`toast ${getToastClass()}`}>
        <div className="toast-message">{message}</div>
        <button className="toast-close" onClick={handleClose}>
          &times;
        </button>
      </div>
    </CSSTransition>
  );
};

export default Toast;

// Usage example:

// const MyComponent = () => {
//   const [showToast, setShowToast] = useState(false);
//   const [toastType, setToastType] = useState('info');

//   const handleShowToast = (type) => {
//     setShowToast(true);
//     setToastType(type);
//   };

//   return (
//     <div>
//       <button onClick={() => handleShowToast(toastTypes.success)}>
//         Success
//       </button>
//       <button onClick={() => handleShowToast(toastTypes.error)}>Error</button>
//       <button onClick={() => handleShowToast(toastTypes.info)}>Info</button>
//       <button onClick={() => handleShowToast(toastTypes.warning)}>
//         Warning
//       </button>

//       {showToast && (
//         <Toast message="This is a toast message!" type={toastType} />
//       )}
//     </div>
//   );
// };
