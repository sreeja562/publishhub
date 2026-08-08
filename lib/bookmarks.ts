export interface BookmarkedArticle {
  id: number;
  title: string;
  description: string;
  author: string;
  username: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  avatar: string;
}

const BOOKMARKS_KEY = "publishhub-bookmarks";

export function getBookmarks(): BookmarkedArticle[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const saved = localStorage.getItem(BOOKMARKS_KEY);

    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function isBookmarked(id: number): boolean {
  return getBookmarks().some((article) => article.id === id);
}

export function addBookmark(article: BookmarkedArticle): void {
  const bookmarks = getBookmarks();

  if (bookmarks.some((item) => item.id === article.id)) {
    return;
  }

  localStorage.setItem(
    BOOKMARKS_KEY,
    JSON.stringify([...bookmarks, article])
  );
}

export function removeBookmark(id: number): void {
  const bookmarks = getBookmarks();

  const updatedBookmarks = bookmarks.filter(
    (article) => article.id !== id
  );

  localStorage.setItem(
    BOOKMARKS_KEY,
    JSON.stringify(updatedBookmarks)
  );
}