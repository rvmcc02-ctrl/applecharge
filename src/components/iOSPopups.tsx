import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message?: string;
  actions: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'destructive' | 'cancel';
  }[];
}

export const IOSAlert: React.FC<AlertProps> = ({ isOpen, onClose, title, message, actions }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[270px] overflow-hidden rounded-[14px] bg-white/80 backdrop-blur-xl shadow-2xl"
          >
            <div className="p-4 text-center">
              <h3 className="text-[17px] font-semibold leading-tight text-black">{title}</h3>
              {message && (
                <p className="mt-1 text-[13px] leading-tight text-black/80">{message}</p>
              )}
            </div>
            
            <div className={cn(
              "flex border-t border-black/10",
              actions.length > 2 ? "flex-col" : "flex-row"
            )}>
              {actions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    action.onClick();
                    onClose();
                  }}
                  className={cn(
                    "flex-1 px-4 py-3 text-[17px] active:bg-black/10 transition-colors",
                    action.variant === 'destructive' ? "text-ios-red font-normal" : 
                    action.variant === 'cancel' ? "text-ios-blue font-semibold" : 
                    "text-ios-blue font-normal",
                    actions.length <= 2 && idx === 0 && actions.length > 1 && "border-r border-black/10",
                    actions.length > 2 && idx < actions.length - 1 && "border-b border-black/10"
                  )}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface ActionSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  actions: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'destructive';
  }[];
  cancelLabel?: string;
}

export const IOSActionSheet: React.FC<ActionSheetProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  actions,
  cancelLabel = "Cancel"
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-2 pb-safe">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-[400px] space-y-2"
          >
            <div className="overflow-hidden rounded-[14px] bg-white/80 backdrop-blur-xl">
              {(title || message) && (
                <div className="border-b border-black/10 p-4 text-center">
                  {title && <h3 className="text-[13px] font-semibold text-ios-gray uppercase tracking-wide">{title}</h3>}
                  {message && <p className="text-[13px] text-ios-gray">{message}</p>}
                </div>
              )}
              <div className="flex flex-col">
                {actions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      action.onClick();
                      onClose();
                    }}
                    className={cn(
                      "w-full px-4 py-4 text-[20px] active:bg-black/10 transition-colors border-b border-black/10 last:border-0",
                      action.variant === 'destructive' ? "text-ios-red" : "text-ios-blue"
                    )}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="w-full rounded-[14px] bg-white py-4 text-[20px] font-semibold text-ios-blue active:bg-gray-100 transition-colors"
            >
              {cancelLabel}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
