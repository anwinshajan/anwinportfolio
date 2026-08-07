"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { statusUpdates, type StatusUpdate } from "@/content/updates";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [updates, setUpdates] = useState<StatusUpdate[]>([]);
  const [newDate, setNewDate] = useState("");
  const [newCategory, setNewCategory] = useState<StatusUpdate["category"]>("Business");
  const [newText, setNewText] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDate, setEditDate] = useState("");
  const [editCategory, setEditCategory] = useState<StatusUpdate["category"]>("Business");
  const [editText, setEditText] = useState("");

  const [adminPassword, setAdminPassword] = useState("anwin123");
  const [changePassNew, setChangePassNew] = useState("");
  const [passMsg, setPassMsg] = useState("");

  const DEFAULT_USER = "anwin";

  // Load updates & password from localStorage
  useEffect(() => {
    const savedPass = localStorage.getItem("anwin_admin_password");
    if (savedPass) {
      setAdminPassword(savedPass);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === DEFAULT_USER && password === adminPassword) {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!changePassNew.trim()) return;
    setAdminPassword(changePassNew.trim());
    localStorage.setItem("anwin_admin_password", changePassNew.trim());
    setChangePassNew("");
    setPassMsg("Admin password updated successfully!");
    setTimeout(() => setPassMsg(""), 3000);
  };

  const saveUpdates = (newList: StatusUpdate[]) => {
    setUpdates(newList);
    localStorage.setItem("anwin_life_updates", JSON.stringify(newList));
    // Trigger custom window event so HeroTerminal updates instantly
    window.dispatchEvent(new Event("anwin_updates_changed"));
  };

  const handleAddUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;

    const newEntry: StatusUpdate = {
      id: `up_${Date.now()}`,
      date: newDate || "2026.08.08",
      category: newCategory,
      text: newText.trim(),
    };

    const updated = [...updates, newEntry];
    saveUpdates(updated);
    setNewText("");
    setSuccessMsg("Life update published successfully!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handleDelete = (id: string) => {
    const updated = updates.filter((u) => u.id !== id);
    saveUpdates(updated);
  };

  const handleStartEdit = (item: StatusUpdate) => {
    setEditingId(item.id);
    setEditDate(item.date);
    setEditCategory(item.category);
    setEditText(item.text);
  };

  const handleSaveEdit = (id: string) => {
    const updated = updates.map((u) =>
      u.id === id
        ? { ...u, date: editDate, category: editCategory, text: editText }
        : u
    );
    saveUpdates(updated);
    setEditingId(null);
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all life update logs?")) {
      saveUpdates([]);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-6 py-12">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-[#E5DDD5] shadow-xl">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D4521A]/10 text-[#D4521A] text-xs font-semibold uppercase tracking-wider mb-2">
              Admin Access
            </span>
            <h1
              className="text-3xl font-light text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Life & Business Admin
            </h1>
            <p className="text-xs text-[#7A746E] mt-1">
              Sign in to manage your terminal life updates
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D3935] mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="anwin"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5DDD5] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#D4521A]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D3935] mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5DDD5] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#D4521A]"
                required
              />
            </div>

            {loginError && (
              <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200">
                {loginError}
              </p>
            )}

            <button type="submit" className="w-full btn-coral py-3">
              Sign In to Admin Panel
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs font-medium text-[#7A746E] hover:text-[#1A1A1A]">
              ← Return to Portfolio Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5DDD5] pb-6">
          <div>
            <span className="text-xs font-mono text-[#D4521A] uppercase tracking-widest">
              ● Admin Dashboard
            </span>
            <h1
              className="text-4xl font-light text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Life & Business Updates Manager
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/" className="btn-ghost text-xs py-2 px-4">
              View Website
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-xs font-semibold text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Add New Update Form */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DDD5] shadow-sm">
          <h2
            className="text-2xl font-light text-[#1A1A1A] mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Publish New Life Update
          </h2>

          <form onSubmit={handleAddUpdate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746E] mb-1">
                  Date Format (YYYY.MM.DD)
                </label>
                <input
                  type="text"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  placeholder="2026.08.08"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DDD5] bg-[#FAF7F2] font-mono text-sm focus:outline-none focus:border-[#D4521A]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746E] mb-1">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as StatusUpdate["category"])}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DDD5] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#D4521A]"
                >
                  <option value="Business">Business</option>
                  <option value="Venture">Venture</option>
                  <option value="Life & Learning">Life & Learning</option>
                  <option value="Design & Tech">Design & Tech</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746E] mb-1">
                Update Log Message
              </label>
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="e.g. Scaling Anweo's client automations (WhatsApp funnels & Razorpay workflows)"
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5DDD5] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#D4521A]"
                required
              />
            </div>

            {successMsg && (
              <p className="text-xs text-green-700 bg-green-50 p-2.5 rounded-xl border border-green-200 font-medium">
                ✓ {successMsg}
              </p>
            )}

            <button type="submit" className="btn-coral text-xs py-3 px-6">
              Publish Terminal Update
            </button>
          </form>
        </div>

        {/* Existing Logs List */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DDD5] shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2
              className="text-2xl font-light text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Current Live Terminal Logs ({updates.length})
            </h2>

            {updates.length > 0 && (
              <button
                onClick={handleClearAll}
                className="text-xs font-semibold text-red-600 hover:text-red-800 border border-red-200 px-3 py-1 rounded-full bg-red-50"
              >
                Clear All Logs
              </button>
            )}
          </div>

          {updates.length === 0 ? (
            <div className="p-8 text-center border border-dashed border-[#E5DDD5] rounded-2xl text-[#7A746E] text-xs">
              No live updates right now. Use the form above to add your first life update!
            </div>
          ) : (
            <div className="space-y-3 font-mono text-xs">
              {updates.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[#0B0E14] text-[#DCE4EE] border border-[#1E2638] space-y-3"
                >
                  {editingId === item.id ? (
                    <div className="space-y-3 font-sans">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] uppercase text-[#8A98A8]">Date</label>
                          <input
                            type="text"
                            value={editDate}
                            onChange={(e) => setEditDate(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg border border-[#2A3448] bg-[#141A26] text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase text-[#8A98A8]">Category</label>
                          <select
                            value={editCategory}
                            onChange={(e) => setEditCategory(e.target.value as StatusUpdate["category"])}
                            className="w-full px-3 py-1.5 rounded-lg border border-[#2A3448] bg-[#141A26] text-xs text-white"
                          >
                            <option value="Business">Business</option>
                            <option value="Venture">Venture</option>
                            <option value="Life & Learning">Life & Learning</option>
                            <option value="Design & Tech">Design & Tech</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase text-[#8A98A8]">Update Message</label>
                        <textarea
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          rows={2}
                          className="w-full px-3 py-1.5 rounded-lg border border-[#2A3448] bg-[#141A26] text-xs text-white"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleSaveEdit(item.id)}
                          className="text-xs bg-[#D4521A] text-white px-3 py-1 rounded-lg font-semibold"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-xs bg-gray-700 text-gray-200 px-3 py-1 rounded-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[#00E5A3] font-bold">
                            LIFEUPDATE&#123;{item.date}&#125; &gt;&gt;
                          </span>
                          <span className="text-xs text-[#D4521A]">[{item.category}]</span>
                        </div>
                        <p className="text-xs text-[#9EAAB8]">{item.text}</p>
                      </div>

                      <div className="flex items-center gap-2 font-sans">
                        <button
                          onClick={() => handleStartEdit(item)}
                          className="text-xs text-blue-400 hover:text-blue-200 border border-blue-900/50 bg-blue-950/40 px-3 py-1 rounded-lg"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-xs text-red-400 hover:text-red-200 border border-red-900/50 bg-red-950/40 px-3 py-1 rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Change Admin Password Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DDD5] shadow-sm space-y-4">
          <h2
            className="text-2xl font-light text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Change Admin Password
          </h2>
          <form onSubmit={handleChangePassword} className="flex flex-col sm:flex-row gap-3 items-end">
            <div className="flex-1 w-full">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746E] mb-1">
                New Password
              </label>
              <input
                type="password"
                value={changePassNew}
                onChange={(e) => setChangePassNew(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5DDD5] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#D4521A]"
                required
              />
            </div>
            <button type="submit" className="btn-ghost text-xs py-2.5 px-6 whitespace-nowrap">
              Update Password
            </button>
          </form>
          {passMsg && (
            <p className="text-xs text-green-700 bg-green-50 p-2.5 rounded-xl border border-green-200 font-medium">
              ✓ {passMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
