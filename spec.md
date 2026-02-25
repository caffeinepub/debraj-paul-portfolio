# Specification

## Summary
**Goal:** Rebuild the admin inbox page so it reliably displays all contact form submissions behind a simple password gate (password: `debrajhero`), without requiring Internet Identity login.

**Planned changes:**
- Update the admin password in `useAdminAuth` hook to `debrajhero` (case-sensitive), persisted in sessionStorage
- Rebuild `AdminPage.tsx` at the `/admin` route, protected by `AdminPasswordGate`, rendering `AdminInbox` after correct password entry; includes a logout button
- Rebuild `AdminInbox.tsx` to fetch and display all contact form submissions (name, phone, business type, message, timestamp) from the backend without any Internet Identity check; includes refresh, loading, error, and empty states
- Update `backend/main.mo` so `getAllInquiries` is callable by any identity without principal-based restrictions, preserving existing data
- Add a dedicated `/admin` route in `App.tsx` that renders `AdminPage` without appearing in public navigation

**User-visible outcome:** Visiting `/admin` shows a password prompt; entering `debrajhero` unlocks the inbox displaying all contact form submissions in a structured list with the ability to refresh or log out.
