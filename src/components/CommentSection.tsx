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
      <h2 className="font-display text-xl font-500 mb-6">
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
            className="w-full px-4 py-3 rounded-lg bg-[#1A1D23] border border-[#2A2D35] text-[#EDEDED] placeholder:text-[#9A9FA8]/50 focus:outline-none focus:border-[#5B8DEF] transition-smooth text-sm"
          />
          <textarea
            placeholder="Share your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-[#1A1D23] border border-[#2A2D35] text-[#EDEDED] placeholder:text-[#9A9FA8]/50 focus:outline-none focus:border-[#5B8DEF] transition-smooth text-sm resize-none"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-[#5B8DEF] text-white text-sm font-medium hover:bg-[#4A7CE0] transition-smooth"
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
            className="p-5 rounded-lg bg-[#1A1D23] border border-[#2A2D35]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 rounded-full bg-[#5B8DEF]/20 flex items-center justify-center text-[#5B8DEF] text-xs font-medium">
                {comment.author[0]?.toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium text-[#EDEDED]">
                  {comment.author}
                </p>
                <p className="font-mono text-[10px] text-[#9A9FA8]">
                  {comment.date}
                </p>
              </div>
            </div>
            <p className="text-sm text-[#9A9FA8] mt-3 leading-relaxed">
              {comment.content}
            </p>

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="mt-4 ml-6 space-y-3 border-l border-[#2A2D35] pl-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id}>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs font-medium text-[#EDEDED]">
                        {reply.author}
                      </p>
                      <p className="font-mono text-[10px] text-[#9A9FA8]">
                        {reply.date}
                      </p>
                    </div>
                    <p className="text-sm text-[#9A9FA8]">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Reply Button */}
            <button
              onClick={() =>
                setReplyingTo(replyingTo === comment.id ? null : comment.id)
              }
              className="mt-3 text-xs text-[#5B8DEF] hover:text-[#F2C94C] transition-smooth"
            >
              {replyingTo === comment.id ? "Cancel" : "Reply"}
            </button>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <div className="mt-4 ml-6 space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={replyName}
                  onChange={(e) => setReplyName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#0F1115] border border-[#2A2D35] text-[#EDEDED] placeholder:text-[#9A9FA8]/50 focus:outline-none focus:border-[#5B8DEF] transition-smooth text-xs"
                />
                <textarea
                  placeholder="Write a reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-[#0F1115] border border-[#2A2D35] text-[#EDEDED] placeholder:text-[#9A9FA8]/50 focus:outline-none focus:border-[#5B8DEF] transition-smooth text-xs resize-none"
                />
                <button
                  onClick={() => handleReply(comment.id)}
                  className="px-4 py-2 rounded-lg bg-[#5B8DEF] text-white text-xs font-medium hover:bg-[#4A7CE0] transition-smooth"
                >
                  Post Reply
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <p className="text-sm text-[#9A9FA8] text-center py-8">
          No comments yet. Be the first to share your thoughts.
        </p>
      )}
    </div>
  );
}
