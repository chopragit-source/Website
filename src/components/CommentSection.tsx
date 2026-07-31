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
    if (stored) setComments(JSON.parse(stored));
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
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
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
          replies: [...c.replies, {
            id: Date.now().toString(),
            author: replyName.trim(),
            content: replyContent.trim(),
            date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
          }],
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
      <h2 className="text-2xl font-bold mb-8">
        💬 Comments ({comments.length})
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-12">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast"
          />
          <textarea
            placeholder="Share your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-[#ff3b30] text-white text-sm font-bold hover:scale-105 transition-medium"
          >
            Post Comment
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="p-6 rounded-2xl bg-[#111111] border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff3b30] to-[#ff9500] flex items-center justify-center text-white text-xs font-bold">
                {comment.author[0]?.toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold">{comment.author}</p>
                <p className="font-mono text-[10px] text-[#666666]">{comment.date}</p>
              </div>
            </div>
            <p className="text-sm text-[#999999] leading-relaxed">{comment.content}</p>

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="mt-4 ml-8 space-y-4 border-l-2 border-white/5 pl-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id}>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs font-semibold">{reply.author}</p>
                      <p className="font-mono text-[10px] text-[#666666]">{reply.date}</p>
                    </div>
                    <p className="text-sm text-[#999999]">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className="mt-4 text-xs font-semibold text-[#ff3b30] hover:text-white transition-fast"
            >
              {replyingTo === comment.id ? "Cancel" : "Reply"}
            </button>

            {replyingTo === comment.id && (
              <div className="mt-4 ml-8 space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={replyName}
                  onChange={(e) => setReplyName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast text-sm"
                />
                <textarea
                  placeholder="Write a reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast text-sm resize-none"
                />
                <button
                  onClick={() => handleReply(comment.id)}
                  className="px-5 py-2 rounded-full bg-[#ff3b30] text-white text-xs font-bold hover:scale-105 transition-medium"
                >
                  Post Reply
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <p className="text-sm text-[#666666] text-center py-10">
          No comments yet. Be the first to share your thoughts.
        </p>
      )}
    </div>
  );
}
