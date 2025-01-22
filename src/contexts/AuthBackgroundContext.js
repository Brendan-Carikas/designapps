import React, { createContext, useContext, useState, useEffect } from 'react';

const AUTH_BG_KEY = 'auth_background_visible';
const AUTH_BG_IMAGE_KEY = 'auth_background_image';
const AUTH_BG_ALIGN_KEY = 'auth_background_align';
const AUTH_MODAL_KEY = 'auth_background_modal';
const AUTH_TWO_COLUMN_KEY = 'auth_background_two_column';
const AuthBackgroundContext = createContext();

export function useAuthBackground() {
  const context = useContext(AuthBackgroundContext);
  if (!context) {
    throw new Error('useAuthBackground must be used within an AuthBackgroundProvider');
  }
  return context;
}

export function AuthBackgroundProvider({ children }) {
  const [showBackground, setShowBackground] = useState(() => {
    const saved = localStorage.getItem(AUTH_BG_KEY);
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [alignLeft, setAlignLeft] = useState(() => {
    const saved = localStorage.getItem(AUTH_BG_ALIGN_KEY);
    return saved !== null ? JSON.parse(saved) : false;
  });

  const [customImage, setCustomImage] = useState(() => {
    const saved = localStorage.getItem(AUTH_BG_IMAGE_KEY);
    return saved || null;
  });
  
  const [isModal, setIsModal] = useState(() => {
    const saved = localStorage.getItem(AUTH_MODAL_KEY);
    return saved !== null ? JSON.parse(saved) : false;
  });

  const [isTwoColumn, setIsTwoColumn] = useState(() => {
    const saved = localStorage.getItem(AUTH_TWO_COLUMN_KEY);
    return saved !== null ? JSON.parse(saved) : false;
  });
  
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  
  const handleShowBackgroundChange = (newValue) => {
    setShowBackground(newValue);
    setUnsavedChanges(true);
  };

  const handleAlignLeftChange = (newValue) => {
    setAlignLeft(newValue);
    setUnsavedChanges(true);
  };

  const handleCustomImageChange = (newValue) => {
    setCustomImage(newValue);
    setUnsavedChanges(true);
  };

  const handleIsModalChange = (newValue) => {
    setIsModal(newValue);
    setUnsavedChanges(true);
  };

  const handleIsTwoColumnChange = (newValue) => {
    setIsTwoColumn(newValue);
    setUnsavedChanges(true);
  };
  
  const saveChanges = () => {
    localStorage.setItem(AUTH_BG_KEY, JSON.stringify(showBackground));
    localStorage.setItem(AUTH_BG_ALIGN_KEY, JSON.stringify(alignLeft));
    if (customImage) {
      localStorage.setItem(AUTH_BG_IMAGE_KEY, customImage);
    } else {
      localStorage.removeItem(AUTH_BG_IMAGE_KEY);
    }
    localStorage.setItem(AUTH_MODAL_KEY, JSON.stringify(isModal));
    localStorage.setItem(AUTH_TWO_COLUMN_KEY, JSON.stringify(isTwoColumn));
    setUnsavedChanges(false);
  };

  useEffect(() => {
    localStorage.setItem(AUTH_BG_KEY, JSON.stringify(showBackground));
  }, [showBackground]);

  useEffect(() => {
    localStorage.setItem(AUTH_BG_ALIGN_KEY, JSON.stringify(alignLeft));
  }, [alignLeft]);

  useEffect(() => {
    if (customImage) {
      localStorage.setItem(AUTH_BG_IMAGE_KEY, customImage);
    } else {
      localStorage.removeItem(AUTH_BG_IMAGE_KEY);
    }
  }, [customImage]);

  useEffect(() => {
    localStorage.setItem(AUTH_MODAL_KEY, JSON.stringify(isModal));
  }, [isModal]);

  useEffect(() => {
    localStorage.setItem(AUTH_TWO_COLUMN_KEY, JSON.stringify(isTwoColumn));
  }, [isTwoColumn]);

  useEffect(() => {
    setUnsavedChanges(true);
  }, [showBackground, alignLeft, customImage, isModal, isTwoColumn]);

  const value = {
    showBackground,
    setShowBackground: handleShowBackgroundChange,
    alignLeft,
    setAlignLeft: handleAlignLeftChange,
    customImage,
    setCustomImage: handleCustomImageChange,
    isModal,
    setIsModal: handleIsModalChange,
    isTwoColumn,
    setIsTwoColumn: handleIsTwoColumnChange,
    unsavedChanges,
    saveChanges
  };

  return (
    <AuthBackgroundContext.Provider value={value}>
      {children}
    </AuthBackgroundContext.Provider>
  );
}
