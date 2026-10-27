import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0% {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  15%, 85% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
`;

const AlertToast = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000000;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(239, 68, 68, 0.6);
  color: #ffffff;
  padding: 0.8rem 1.4rem;
  border-radius: 9999px;
  font-size: 0.88rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(239, 68, 68, 0.3);
  backdrop-filter: blur(12px);
  animation: ${slideDown} 3.5s forwards ease-in-out;
  pointer-events: none;

  span.icon {
    font-size: 1.1rem;
  }

  span.highlight {
    color: var(--text-accent);
  }
`;

export const AntiTheftGuard = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // 1. Block right click on images and design items
    const handleContextMenu = (e) => {
      const isImg = e.target.tagName === 'IMG' || e.target.closest('.protected-design') || e.target.closest('.watermark-container');
      if (isImg) {
        e.preventDefault();
      }
    };

    // 2. Block image drag
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // 3. Block keyboard shortcuts and intercept PrintScreen
    const handleKeyDown = (e) => {
      // PrintScreen detection
      if (e.key === 'PrintScreen') {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3500);

        // Attempt to protect clipboard
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('© Propiedad Intelectual protegida - José Chocobar');
          }
        } catch (_) {}
      }

      // Ctrl+S / Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
      }

      // Ctrl+P / Cmd+P (Print to PDF)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
      }

      // Ctrl+U / Cmd+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
      }
    };

    // 4. Anti-Snipping Tool: When window loses focus (e.g. Snipping tool opened), blur protected images
    const handleBlur = () => {
      document.body.classList.add('anti-screenshot-active');
    };

    const handleFocus = () => {
      document.body.classList.remove('anti-screenshot-active');
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('dragstart', handleDragStart);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      document.body.classList.remove('anti-screenshot-active');
    };
  }, []);

  if (!showAlert) return null;

  return (
    <AlertToast>
      <span className="icon">🛡️</span>
      <span>
        Captura restringida: logotipos y diseños protegidos por <span className="highlight">© José Chocobar</span>
      </span>
    </AlertToast>
  );
};

export default AntiTheftGuard;
