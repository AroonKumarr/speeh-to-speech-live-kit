"use client";

import React, { useEffect } from "react";
import { usePlaygroundState } from "@/hooks/use-playground-state";

export function Auth() {
  const { dispatch, setShowAuthDialog } = usePlaygroundState();

  useEffect(() => {
    // 1️⃣ Automatically set a dummy key so frontend thinks it has a key
    dispatch({ type: "SET_API_KEY", payload: "backend-managed-key" });

    // 2️⃣ Hide the Auth dialog completely
    setShowAuthDialog(false);
  }, [dispatch, setShowAuthDialog]);

  return (
    <div className="flex items-center gap-2">
      {/* Green indicator showing backend is ready */}
      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-xs font-semibold text-neutral-700">
        Ready to Connect
      </span>
    </div>
  );
}

// Dummy AuthDialog: completely disabled
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
