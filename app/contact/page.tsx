"use client";
import React from "react";

export default function ContactPage() {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" />
      <button>Submit</button>
    </form>
  );
}

function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;

  if (form.checkValidity()) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    return fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => form.reset());
  }
}
