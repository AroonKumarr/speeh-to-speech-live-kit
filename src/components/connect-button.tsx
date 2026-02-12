"use client";

import { useState, useCallback } from "react";
import clsx from "clsx";
import { useConnection } from "@/hooks/use-connection";

export function ConnectButton() {
  const { connect, disconnect, shouldConnect } = useConnection();
  const [connecting, setConnecting] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const backendUrl = "https://backendsts-production-e50c.up.railway.app";

  const startBackendSession = async () => {
    try {
      const res = await fetch(`${backendUrl}/start-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ room_name: "default-room" }),
      });

      const data = await res.json();
      console.log("Backend session started:", data);
      return data;
    } catch (err) {
      console.error("Failed to start backend session:", err);
      throw err;
    }
  };

  const initiateConnection = useCallback(async () => {
    setConnecting(true);
    try {
      await connect();
    } catch (err) {
      console.error("Connection failed:", err);
    } finally {
      setConnecting(false);
    }
  }, [connect]);

  const handleConnectionToggle = async () => {
    if (shouldConnect) {
      await disconnect();
      setIsActive(false);
    } else {
      setIsActive(true);

      // 1️⃣ Start backend session first
      await startBackendSession();

      // 2️⃣ Connect frontend to LiveKit
      await initiateConnection();
    }
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <button
      onClick={handleConnectionToggle}
      disabled={connecting}
      className={clsx(
        "relative cursor-pointer transition-transform duration-300 ease-in-out",
        "rounded-full grid place-items-center",
        "w-[32rem] h-[32rem] max-w-[60vmin] max-h-[60vmin]",
        "overflow-hidden border-none outline-none focus:outline-none"
      )}
      style={{ padding: 0 }}
      type="button"
    >
      {/* Video as button background */}
      <video
        className="absolute inset-0 w-full h-full object-cover rounded-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="orb.mp4" type="video/mp4" />
      </video>

      {/* Button text overlay */}
      <span className="relative z-10 text-white text-2xl font-semibold pointer-events-none select-none">
        {isActive ? "Connecting" : "Talk to Lemi"}
      </span>
    </button>
  );
}
