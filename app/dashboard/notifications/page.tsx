"use client";

import { useState } from "react";
import {
  Bell,
  Heart,
  MessageCircle,
  UserPlus,
  FileText,
  Check,
} from "lucide-react";

interface Notification {
  id: number;
  type: "like" | "comment" | "follow" | "article";
  name: string;
  message: string;
  time: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "like",
    name: "Rahul Sharma",
    message: "liked your article",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "comment",
    name: "Ananya Reddy",
    message: "commented on your article",
    time: "30 minutes ago",
    read: false,
  },
  {
    id: 3,
    type: "follow",
    name: "Arjun Kumar",
    message: "started following you",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    type: "article",
    name: "Publication Team",
    message: "published your article successfully",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 5,
    type: "like",
    name: "Sneha Patel",
    message: "liked your article",
    time: "Yesterday",
    read: true,
  },
];

function NotificationIcon({ type }: { type: Notification["type"] }) {
  if (type === "like") {
    return <Heart size={18} />;
  }

  if (type === "comment") {
    return <MessageCircle size={18} />;
  }

  if (type === "follow") {
    return <UserPlus size={18} />;
  }

  return <FileText size={18} />;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAsRead = (id: number) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Bell size={28} className="text-gray-800" />

              <h1 className="text-3xl font-bold text-gray-900">
                Notifications
              </h1>
            </div>

            <p className="mt-2 text-gray-500">
              Stay updated with activity on your articles and profile.
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <Check size={16} />
              Mark all as read
            </button>
          )}
        </div>

        {/* Notification Summary */}
        <div className="mb-6 rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Unread notifications</p>

          <p className="mt-1 text-3xl font-bold text-gray-900">
            {unreadCount}
          </p>
        </div>

        {/* Notifications */}
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex gap-4 border-b p-5 last:border-b-0 ${
                  !notification.read ? "bg-gray-50" : "bg-white"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                    !notification.read
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <NotificationIcon type={notification.type} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-800">
                    <span className="font-semibold">
                      {notification.name}
                    </span>{" "}
                    {notification.message}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {notification.time}
                  </p>
                </div>

                {/* Read button */}
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="self-center rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    Mark read
                  </button>
                )}

                {!notification.read && (
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                )}
              </div>
            ))
          ) : (
            <div className="p-12 text-center">
              <Bell
                size={40}
                className="mx-auto mb-3 text-gray-300"
              />

              <h2 className="font-semibold text-gray-800">
                No notifications
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                You are all caught up!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}