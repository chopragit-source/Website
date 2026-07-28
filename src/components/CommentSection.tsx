"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  replies: Reply[];
}

interface Reply {
  id: string;
  author: string;
  content: string;
  date: string;
}

export default function CommentSection({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyName, setReplyName] = useState("");
  const [replyContent, setReplyContent] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(`comments-${postSlug}`);
    if (stored) {
      setComments(JSON.parse(stored));
    }
  }, [postSlug]);

  function saveComments(updated: Comment[]) {
    setComments(updated);
    localStorage.setItem(`comments-${postSlug}`, JSON.stringify(updated));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: name.trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      replies: [],
    };

    saveComments([newComment, ...comments]);
    setName("");
    setContent("");
  }

  function handleReply(commentId: string) {
    if (!replyName.trim() || !replyContent.trim()) return;

    const updated = comments.map((c) => {
      if (c.id === commentId) {
        return {
          ...c,
          replies: [
            ...c.replies,
            {
              id: Date.now().toString(),
              author: replyName.trim(),
              content: replyContent.trim(),
              date: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
            },
          ],
        };
      }
      return c;
    });

    saveComments(updated);
    setReplyingTo(null);
    setReplyName("");
    setReplyContent("");
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">
        Comments ({comments.length})
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-apple text-sm"
          />
          <textarea
            placeholder="Share your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-apple text-sm resize-none"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-apple"
          >
            Post Comment
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-5 rounded-2xl border border-[var(--border)]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-xs font-semibold">
                {comment.author[0]?.toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium">{comment.author}</p>
                <p className="text-xs text-[var(--muted)]">{comment.date}</p>
              </div>
            </div>
            <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
              {comment.content}
            </p>

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="mt-4 ml-8 space-y-4">
                {comment.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className="p-4 rounded-xl bg-[var(--card-bg)]"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-[var(--muted)] flex items-center justify-center text-white text-[10px] font-semibold">
                        {reply.author[0]?.toUpperCase()}
                      </div>
                      <p className="text-xs font-medium">{reply.author}</p>
                      <p className="text-xs text-[var(--muted)]">
                        {reply.date}
                      </p>
                    </div>
                    <p className="text-sm text-[var(--muted)] mt-1">
                      {reply.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Reply Button */}
            <button
              onClick={() =>
                setReplyingTo(replyingTo === comment.id ? null : comment.id)
              }
              className="mt-3 text-xs text-[var(--accent)] hover:underline"
            >
              {replyingTo === comment.id ? "Cancel" : "Reply"}
            </button>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <div className="mt-4 ml-8 space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={replyName}
                  onChange={(e) => setReplyName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-apple text-xs"
                />
                <textarea
                  placeholder="Write a reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-apple text-xs resize-none"
                />
                <button
                  onClick={() => handleReply(comment.id)}
                  className="px-4 py-2 rounded-full bg-[var(--accent)] text-white text-xs font-medium hover:bg-[var(--accent-hover)] transition-apple"
                >
                  Post Reply
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <p className="text-sm text-[var(--muted)] text-center py-8">
          No comments yet. Be the first to share your thoughts!
        </p>
      )}
    </div>
  );
}
