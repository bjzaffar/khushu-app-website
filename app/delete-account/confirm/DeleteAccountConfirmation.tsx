"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type DeletionRequest = {
  email: string;
  request: string;
  reason: string;
};

export function DeleteAccountConfirmation() {
  const [request, setRequest] = useState<DeletionRequest | null>(null);
  const [status, setStatus] = useState<"loading" | "idle" | "sending" | "sent" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedRequest = window.sessionStorage.getItem("khushu-deletion-request");

    if (!savedRequest) {
      setStatus("error");
      setMessage("We could not find a deletion request to confirm.");
      return;
    }

    try {
      setRequest(JSON.parse(savedRequest) as DeletionRequest);
      setStatus("idle");
    } catch {
      setStatus("error");
      setMessage("We could not read this deletion request. Please start again.");
    }
  }, []);

  async function sendRequest() {
    if (!request) return;

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "account-deletion-request",
          email: request.email,
          request: request.request,
          reason: request.reason || "Not provided",
        }).toString(),
      });

      if (!response.ok) throw new Error("Request failed");

      window.sessionStorage.removeItem("khushu-deletion-request");
      setStatus("sent");
      setMessage(
        "Your deletion request has been sent to our support team. We may contact you to verify account ownership before completing it.",
      );
    } catch {
      setStatus("error");
      setMessage(
        "We could not send your request. Please try again or email khushu.help@gmail.com.",
      );
    }
  }

  return (
    <section className="deletion-confirmation" aria-live="polite">
      {status === "sent" ? (
        <p className="form-status">{message}</p>
      ) : (
        <>
          <p>
            Send this deletion request for <strong>{request?.email || "your account"}</strong>.
            We will review it and may contact you to verify account ownership
            before completing the deletion.
          </p>
          {status === "loading" ? (
            <p className="form-status">
              Preparing your request…
            </p>
          ) : null}
          {status === "error" ? (
            <p className="form-status form-status-error">
              {message} <Link href="/delete-account">Start a new request</Link>.
            </p>
          ) : null}
          <button
            className="button button-primary deletion-submit"
            type="button"
            onClick={sendRequest}
            disabled={!request || status === "sending" || status === "error"}
          >
            {status === "sending" ? "Sending…" : "Send deletion request"}
          </button>
        </>
      )}
    </section>
  );
}
