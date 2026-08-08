"use client";

import { useState } from "react";
import {
  Search,
  Send,
  MoreVertical,
  MessageCircle,
  Plus,
  UserRound,
  BellOff,
  Trash2,
  Ban,
} from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "me" | "reader";
  time: string;
};

type Conversation = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  messages: Message[];
  muted?: boolean;
  blocked?: boolean;
};

type Reader = {
  id: number;
  name: string;
  avatar: string;
  followers: string;
};

const initialConversations: Conversation[] = [
  {
    id: 1,
    name: "Rahul",
    avatar: "R",
    lastMessage: "I really liked your article!",
    time: "10:30 AM",
    unread: 2,
    messages: [
      {
        id: 1,
        text: "Hi! I really liked your article about AI.",
        sender: "reader",
        time: "10:28 AM",
      },
      {
        id: 2,
        text: "Thank you! I'm glad you found it useful.",
        sender: "me",
        time: "10:29 AM",
      },
      {
        id: 3,
        text: "Can you write more about Generative AI?",
        sender: "reader",
        time: "10:30 AM",
      },
    ],
    muted: false,
    blocked: false,
  },

  {
    id: 2,
    name: "Priya",
    avatar: "P",
    lastMessage: "Can you explain React Hooks?",
    time: "Yesterday",
    unread: 0,
    messages: [
      {
        id: 1,
        text: "Can you explain React Hooks?",
        sender: "reader",
        time: "Yesterday",
      },
      {
        id: 2,
        text: "Sure! I'll write an article about it soon.",
        sender: "me",
        time: "Yesterday",
      },
    ],
    muted: false,
    blocked: false,
  },

  {
    id: 3,
    name: "Arjun",
    avatar: "A",
    lastMessage: "Thanks for your response!",
    time: "Monday",
    unread: 0,
    messages: [
      {
        id: 1,
        text: "Your article helped me understand Next.js.",
        sender: "reader",
        time: "Monday",
      },
      {
        id: 2,
        text: "That's great to hear! 😊",
        sender: "me",
        time: "Monday",
      },
    ],
    muted: false,
    blocked: false,
  },
];

/* ================= MOCK FOLLOWERS ================= */

const mockReaders: Reader[] = [
  {
    id: 101,
    name: "Ananya",
    avatar: "A",
    followers: "Following you",
  },
  {
    id: 102,
    name: "Vikram",
    avatar: "V",
    followers: "Following you",
  },
  {
    id: 103,
    name: "Sneha",
    avatar: "S",
    followers: "Following you",
  },
  {
    id: 104,
    name: "Karthik",
    avatar: "K",
    followers: "Following you",
  },
  {
    id: 105,
    name: "Meera",
    avatar: "M",
    followers: "Following you",
  },
];

export default function MessagesPage() {
  const [conversations, setConversations] =
    useState<Conversation[]>(initialConversations);

  const [selectedId, setSelectedId] = useState(1);

  const [message, setMessage] = useState("");

  const [search, setSearch] = useState("");

  /* New Message State */

  const [showNewMessage, setShowNewMessage] =
    useState(false);

  const [readerSearch, setReaderSearch] =
    useState("");

  /* Three-dot menu state */

  const [showChatMenu, setShowChatMenu] =
    useState(false);

  const selectedConversation = conversations.find(
    (conversation) =>
      conversation.id === selectedId
  );

  /* Search existing conversations */

  const filteredConversations =
    conversations.filter((conversation) =>
      conversation.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  /* Search readers */

  const filteredReaders = mockReaders.filter(
    (reader) =>
      reader.name
        .toLowerCase()
        .includes(readerSearch.toLowerCase())
  );

  /* ================= SEND MESSAGE ================= */

  const sendMessage = () => {
    if (!message.trim()) return;

    if (selectedConversation?.blocked) {
      alert("This reader is blocked.");
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      text: message.trim(),
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === selectedId
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                newMessage,
              ],
              lastMessage: message.trim(),
              time: "Just now",
            }
          : conversation
      )
    );

    setMessage("");
  };

  /* ================= SELECT CONVERSATION ================= */

  const handleSelectConversation = (id: number) => {
    setSelectedId(id);

    setShowChatMenu(false);

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              unread: 0,
            }
          : conversation
      )
    );
  };

  /* ================= START NEW CONVERSATION ================= */

  const startNewConversation = (
    reader: Reader
   ) => {
    const existingConversation =
      conversations.find(
        (conversation) =>
          conversation.name === reader.name
      );

    if (existingConversation) {
      setSelectedId(existingConversation.id);
      setShowNewMessage(false);
      setReaderSearch("");
      return;
     }

        const newConversation: Conversation = {
      id: Date.now(),
      name: reader.name,
      avatar: reader.avatar,
      lastMessage: "New conversation",
      time: "Just now",
      unread: 0,
      messages: [],
      muted: false,
      blocked: false,
    };

    setConversations((prev) => [
      newConversation,
      ...prev,
    ]);

    setSelectedId(newConversation.id);

    setShowNewMessage(false);

    setReaderSearch("");
  };

  /* ================= VIEW PROFILE ================= */

  const viewProfile = () => {
    if (!selectedConversation) return;

    alert(
      `Viewing ${selectedConversation.name}'s profile`
    );

    setShowChatMenu(false);
  };

  /* ================= MUTE / UNMUTE ================= */

  const toggleMute = () => {
    if (!selectedConversation) return;

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === selectedId
          ? {
              ...conversation,
              muted: !conversation.muted,
            }
          : conversation
      )
    );

    setShowChatMenu(false);
  };

  /* ================= CLEAR CHAT ================= */

  const clearChat = () => {
    if (!selectedConversation) return;

    const confirmed = window.confirm(
      `Clear all messages with ${selectedConversation.name}?`
    );

    if (!confirmed) return;

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === selectedId
          ? {
              ...conversation,
              messages: [],
              lastMessage: "No messages",
              time: "Just now",
            }
          : conversation
      )
    );

    setShowChatMenu(false);
  };

  /* ================= BLOCK READER ================= */

  const toggleBlock = () => {
    if (!selectedConversation) return;

    const action = selectedConversation.blocked
      ? "unblock"
      : "block";

    const confirmed = window.confirm(
      `Are you sure you want to ${action} ${selectedConversation.name}?`
    );

    if (!confirmed) return;

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === selectedId
          ? {
              ...conversation,
              blocked: !conversation.blocked,
            }
          : conversation
      )
    );

    setShowChatMenu(false);
  };

  return (
    <div className="relative flex h-[calc(100vh-80px)] overflow-hidden rounded-xl border bg-white">

      {/* ================================================= */}
      {/* LEFT SIDE */}
      {/* ================================================= */}

      <div className="w-full border-r md:w-80">

        {/* HEADER */}

        <div className="border-b p-4">

          <div className="flex items-center justify-between">

            <h1 className="text-xl font-semibold text-gray-900">
              Messages
            </h1>

            {/* NEW MESSAGE BUTTON */}

            <button
              type="button"
              onClick={() =>
                setShowNewMessage(true)
              }
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
              title="New message"
            >
              <Plus size={18} />
            </button>

          </div>

          {/* SEARCH */}

          <div className="relative mt-4">

            <Search
              className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search conversations..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-lg bg-gray-100 py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

        </div>

        {/* CONVERSATIONS */}

        <div className="overflow-y-auto">

          {filteredConversations.length === 0 ? (

            <div className="p-6 text-center">

              <MessageCircle
                size={28}
                className="mx-auto text-gray-300"
              />

              <p className="mt-3 text-sm text-gray-500">
                No conversations found.
              </p>

            </div>

          ) : (

            filteredConversations.map(
              (conversation) => (

                <button
                  key={conversation.id}
                  type="button"
                  onClick={() =>
                    handleSelectConversation(
                      conversation.id
                    )
                  }
                  className={`flex w-full gap-3 border-b p-4 text-left transition hover:bg-gray-50 ${
                    selectedId === conversation.id
                      ? "bg-blue-50"
                      : ""
                  }`}
                >

                  {/* AVATAR */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                    {conversation.avatar}
                  </div>

                  {/* DETAILS */}

                  <div className="min-w-0 flex-1">

                    <div className="flex justify-between">

                      <p className="font-medium text-gray-900">
                        {conversation.name}
                      </p>

                      <span className="text-xs text-gray-400">
                        {conversation.time}
                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <p className="truncate text-sm text-gray-500">
                        {conversation.lastMessage}
                      </p>

                      {conversation.unread > 0 && (

                        <span className="ml-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs text-white">
                          {conversation.unread}
                        </span>

                      )}

                    </div>

                  </div>

                </button>

              )
            )

          )}

        </div>

      </div>


      {/* ================================================= */}
      {/* RIGHT SIDE CHAT */}
      {/* ================================================= */}

      {selectedConversation ? (

        <div className="hidden flex-1 flex-col md:flex">

          {/* CHAT HEADER */}

          <div className="relative flex items-center justify-between border-b p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                {selectedConversation.avatar}
              </div>

              <div>

                <h2 className="font-semibold text-gray-900">
                  {selectedConversation.name}
                </h2>

                <p
                  className={`text-xs ${
                    selectedConversation.blocked
                      ? "text-red-500"
                      : selectedConversation.muted
                      ? "text-gray-400"
                      : "text-green-600"
                  }`}
                >
                  {selectedConversation.blocked
                    ? "Blocked"
                    : selectedConversation.muted
                    ? "Notifications muted"
                    : "Reader"}
                </p>

              </div>

            </div>


            {/* ================= THREE DOT MENU ================= */}

            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setShowChatMenu(
                    !showChatMenu
                  )
                }
                className="rounded-full p-2 transition hover:bg-gray-100"
                aria-label="Chat options"
              >
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </button>


              {/* DROPDOWN */}

              {showChatMenu && (

                <div className="absolute right-0 top-11 z-50 w-52 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-xl">

                  {/* VIEW PROFILE */}

                  <button
                    type="button"
                    onClick={viewProfile}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-50"
                  >
                    <UserRound size={17} />
                    View Profile
                  </button>


                  {/* MUTE */}

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-50"
                  >

                    <BellOff size={17} />

                    {selectedConversation.muted
                      ? "Unmute Notifications"
                      : "Mute Notifications"}

                  </button>


                  {/* CLEAR CHAT */}

                  <button
                    type="button"
                    onClick={clearChat}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-50"
                  >
                    <Trash2 size={17} />
                    Clear Chat
                  </button>


                  {/* BLOCK */}

                  <button
                    type="button"
                    onClick={toggleBlock}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
                  >
                    <Ban size={17} />

                    {selectedConversation.blocked
                      ? "Unblock Reader"
                      : "Block Reader"}

                  </button>

                </div>

              )}

            </div>

          </div>


          {/* ================================================= */}
          {/* MESSAGES */}
          {/* ================================================= */}

          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-6">

            {selectedConversation.blocked ? (

              <div className="flex h-full items-center justify-center">

                <div className="text-center">

                  <Ban
                    size={35}
                    className="mx-auto text-red-300"
                  />

                  <p className="mt-3 text-sm font-medium text-gray-600">
                    {selectedConversation.name} is blocked
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Unblock this reader from the menu
                    to continue messaging.
                  </p>

                </div>

              </div>

            ) : selectedConversation.messages.length ===
              0 ? (

              <div className="flex h-full items-center justify-center">

                <div className="text-center">

                  <MessageCircle
                    size={35}
                    className="mx-auto text-gray-300"
                  />

                  <p className="mt-3 text-sm text-gray-500">
                    Start a conversation with{" "}
                    {selectedConversation.name}
                  </p>

                </div>

              </div>

            ) : (

              selectedConversation.messages.map(
                (msg) => (

                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "me"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >

                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                        msg.sender === "me"
                          ? "rounded-br-sm bg-blue-600 text-white"
                          : "rounded-bl-sm bg-white text-gray-800 shadow-sm"
                      }`}
                    >

                      <p className="text-sm">
                        {msg.text}
                      </p>

                      <p
                        className={`mt-1 text-[10px] ${
                          msg.sender === "me"
                            ? "text-blue-100"
                            : "text-gray-400"
                        }`}
                      >
                        {msg.time}
                      </p>

                    </div>

                  </div>

                )
              )

            )}

          </div>


          {/* ================================================= */}
          {/* MESSAGE INPUT */}
          {/* ================================================= */}

          <div className="border-t bg-white p-4">

            <div className="flex items-center gap-3">

              <input
                type="text"
                placeholder={
                  selectedConversation.blocked
                    ? "Reader is blocked"
                    : "Write a message..."
                }
                value={message}
                disabled={
                  selectedConversation.blocked
                }
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                className="flex-1 rounded-full bg-gray-100 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              />

              <button
                type="button"
                disabled={
                  selectedConversation.blocked
                }
                onClick={sendMessage}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <Send className="h-5 w-5" />
              </button>

            </div>

          </div>

        </div>

      ) : (

        <div className="hidden flex-1 items-center justify-center md:flex">

          <div className="text-center">

            <MessageCircle
              size={40}
              className="mx-auto text-gray-300"
            />

            <p className="mt-3 text-sm text-gray-500">
              Select a conversation
            </p>

          </div>

        </div>

      )}


      {/* ================================================= */}
      {/* NEW MESSAGE MODAL */}
      {/* ================================================= */}

      {showNewMessage && (

        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30 p-4">

          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">

            {/* MODAL HEADER */}

            <div className="flex items-center justify-between border-b p-5">

              <div>

                <h2 className="text-lg font-semibold">
                  New Message
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Search your followers to start a
                  conversation.
                </p>

              </div>

              <button
                type="button"
                onClick={() => {
                  setShowNewMessage(false);
                  setReaderSearch("");
                }}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                ✕
              </button>

            </div>


            {/* SEARCH READERS */}

            <div className="p-5">

              <div className="relative">

                <Search
                  size={17}
                  className="absolute left-3 top-3 text-gray-400"
                />

                <input
                  type="text"
                  autoFocus
                  placeholder="Search followers..."
                  value={readerSearch}
                  onChange={(e) =>
                    setReaderSearch(e.target.value)
                  }
                  className="w-full rounded-xl bg-gray-100 py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>


              {/* FOLLOWERS */}

              <div className="mt-4 max-h-72 overflow-y-auto">

                {filteredReaders.length === 0 ? (

                  <div className="py-8 text-center">

                    <p className="text-sm text-gray-500">
                      No followers found.
                    </p>

                  </div>

                ) : (

                  filteredReaders.map((reader) => (

                    <button
                      key={reader.id}
                      type="button"
                      onClick={() =>
                        startNewConversation(
                          reader
                        )
                      }
                      className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-gray-50"
                    >

                      {/* AVATAR */}

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                        {reader.avatar}
                      </div>


                      {/* USER */}

                      <div>

                        <p className="text-sm font-medium text-gray-900">
                          {reader.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          {reader.followers}
                        </p>

                      </div>

                    </button>

                  ))

                )}

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}