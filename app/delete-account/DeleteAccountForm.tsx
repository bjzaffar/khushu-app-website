"use client";

import { FormEvent, useState } from "react";

export function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.sessionStorage.setItem(
      "khushu-deletion-request",
      JSON.stringify({ email, request: "Delete account", reason }),
    );
    window.location.assign("/delete-account/confirm");
  }

  return (
    <form className="deletion-form" onSubmit={handleSubmit}>
      <label>
        <span>Account email</span>
        <input
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
        />
      </label>

      <label>
        <span>Request</span>
        <select defaultValue="delete-account" aria-label="Request type">
          <option value="delete-account">Delete account</option>
        </select>
      </label>

      <label>
        <span>
          Reason <em>(optional)</em>
        </span>
        <textarea
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          placeholder="Tell us why you cannot access the app or your account."
          rows={4}
        />
      </label>

      <p className="form-note">
        You&apos;ll review your request on the next page before sending it. The
        optional reason is not required to process your deletion.
      </p>

      <button className="button button-primary deletion-submit" type="submit">
        Continue
      </button>
    </form>
  );
}
