"use client";

export type Comment = {
  id: string;
  articleId: number;
  author: string;
  text: string;
  date: string;
};

const COMMENTS_KEY = "publishhub_comments";

function getAllComments(): Comment[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(COMMENTS_KEY);

    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveComments(comments: Comment[]) {
  localStorage.setItem(
    COMMENTS_KEY,
    JSON.stringify(comments)
  );
}

export function getComments(articleId: number): Comment[] {
  return getAllComments().filter(
    (comment) => comment.articleId === articleId
  );
}

export function addComment(
  articleId: number,
  author: string,
  text: string
): Comment {
  const comments = getAllComments();

  const newComment: Comment = {
    id: `${Date.now()}`,
    articleId,
    author,
    text,
    date: new Date().toLocaleDateString(),
  };

  comments.push(newComment);

  saveComments(comments);

  return newComment;
}

export function removeComment(commentId: string) {
  const comments = getAllComments();

  const updatedComments = comments.filter(
    (comment) => comment.id !== commentId
  );

  saveComments(updatedComments);
}