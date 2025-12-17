"use client";

import React, { useEffect } from "react";
import { usePlaygroundState } from "@/hooks/use-playground-state";

export function Auth() {
  const { dispatch, setShowAuthDialog } = usePlaygroundState();

  useEffect(() => {
    // 1. Automatically set a dummy key so the app allows connection
    dispatch({ type: "SET_API_KEY", payload: "backend-managed-key" });
    
    // 2. Force the dialog to close immediately
    setShowAuthDialog(false);
  }, [dispatch, setShowAuthDialog]);

  return (
    <div className="flex items-center gap-2">
      {/* Visual indicator that we are connected via backend */}
      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-xs font-semibold text-neutral-700">
        Ready to Connect
      </span>
    </div>
  );
}

// We replace the complex dialog with a component that returns NULL.
// It is physically impossible for this to show a popup.
export function AuthDialog({
  open,
  onOpenChange,
  onAuthComplete,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthComplete: () => void;
}) {
  return null;
}