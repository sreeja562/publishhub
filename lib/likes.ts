"use client";

const LIKES_KEY = "publishhub_likes";

type LikesData = Record<number, number>;

function getLikesData(): LikesData {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const stored = localStorage.getItem(LIKES_KEY);

    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveLikesData(data: LikesData) {
  localStorage.setItem(LIKES_KEY, JSON.stringify(data));
}

export function getLikes(articleId: number): number {
  const likes = getLikesData();

  return likes[articleId] ?? 128;
}

export function isLiked(articleId: number): boolean {
  const liked = localStorage.getItem(
    `publishhub_liked_${articleId}`
  );

  return liked === "true";
}

export function addLike(articleId: number): number {
  const likes = getLikesData();

  const currentLikes = likes[articleId] ?? 128;

  likes[articleId] = currentLikes + 1;

  saveLikesData(likes);

  localStorage.setItem(
    `publishhub_liked_${articleId}`,
    "true"
  );

  return likes[articleId];
}

export function removeLike(articleId: number): number {
  const likes = getLikesData();

  const currentLikes = likes[articleId] ?? 128;

  likes[articleId] = Math.max(0, currentLikes - 1);

  saveLikesData(likes);

  localStorage.setItem(
    `publishhub_liked_${articleId}`,
    "false"
  );

  return likes[articleId];
}