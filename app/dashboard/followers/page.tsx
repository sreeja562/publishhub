"use client";

import { useState } from "react";
import { Search, UserPlus, UserMinus } from "lucide-react";

interface Follower {
  id: number;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  following: boolean;
}

const initialFollowers: Follower[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    username: "@rahulsharma",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Web developer and technology writer.",
    following: false,
  },
  {
    id: 2,
    name: "Ananya Reddy",
    username: "@ananyareddy",
    avatar: "https://i.pravatar.cc/150?img=47",
    bio: "UI/UX designer & creative thinker.",
    following: true,
  },
  {
    id: 3,
    name: "Arjun Kumar",
    username: "@arjunkumar",
    avatar: "https://i.pravatar.cc/150?img=33",
    bio: "Full-stack developer and open-source enthusiast.",
    following: false,
  },
  {
    id: 4,
    name: "Sneha Patel",
    username: "@snehapatel",
    avatar: "https://i.pravatar.cc/150?img=44",
    bio: "Writer sharing ideas about technology and life.",
    following: true,
  },
  {
    id: 5,
    name: "Vikram Singh",
    username: "@vikramsingh",
    avatar: "https://i.pravatar.cc/150?img=68",
    bio: "Software engineer | JavaScript | Next.js",
    following: false,
  },
];

export default function FollowersPage() {
  const [followers, setFollowers] = useState(initialFollowers);
  const [search, setSearch] = useState("");

  const filteredFollowers = followers.filter(
    (follower) =>
      follower.name.toLowerCase().includes(search.toLowerCase()) ||
      follower.username.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFollow = (id: number) => {
    setFollowers((current) =>
      current.map((follower) =>
        follower.id === id
          ? { ...follower, following: !follower.following }
          : follower
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Followers
          </h1>

          <p className="mt-2 text-gray-500">
            See the people who follow your publications and interact with
            your content.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Followers</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {followers.length}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Following</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {followers.filter((follower) => follower.following).length}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">New This Month</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">12</p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search followers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-gray-400"
            />
          </div>
        </div>

        {/* Followers List */}
        <div className="rounded-xl border bg-white shadow-sm">
          <div className="border-b px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              People following you
            </h2>
          </div>

          <div>
            {filteredFollowers.length > 0 ? (
              filteredFollowers.map((follower) => (
                <div
                  key={follower.id}
                  className="flex flex-col gap-4 border-b p-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={follower.avatar}
                      alt={follower.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {follower.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {follower.username}
                      </p>

                      <p className="mt-1 text-sm text-gray-600">
                        {follower.bio}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleFollow(follower.id)}
                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                      follower.following
                        ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {follower.following ? (
                      <>
                        <UserMinus size={16} />
                        Following
                      </>
                    ) : (
                      <>
                        <UserPlus size={16} />
                        Follow
                      </>
                    )}
                  </button>
                </div>
              ))
            ) : (
              <div className="p-10 text-center text-gray-500">
                No followers found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}