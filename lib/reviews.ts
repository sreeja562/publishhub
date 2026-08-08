"use client";

export type Review = {
  id: string;
  articleId: number;
  author: string;
  rating: number;
  text: string;
  date: string;
};

const REVIEWS_KEY = "publishhub_reviews";

function getAllReviews(): Review[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(REVIEWS_KEY);

    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveReviews(reviews: Review[]) {
  localStorage.setItem(
    REVIEWS_KEY,
    JSON.stringify(reviews)
  );
}

export function getReviews(articleId: number): Review[] {
  return getAllReviews().filter(
    (review) => review.articleId === articleId
  );
}

export function addReview(
  articleId: number,
  author: string,
  rating: number,
  text: string
): Review {
  const reviews = getAllReviews();

  const newReview: Review = {
    id: `${Date.now()}`,
    articleId,
    author,
    rating,
    text,
    date: new Date().toLocaleDateString(),
  };

  reviews.push(newReview);

  saveReviews(reviews);

  return newReview;
}

export function removeReview(reviewId: string) {
  const reviews = getAllReviews();

  const updatedReviews = reviews.filter(
    (review) => review.id !== reviewId
  );

  saveReviews(updatedReviews);
}