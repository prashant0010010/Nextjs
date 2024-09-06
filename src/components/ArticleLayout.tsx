"use client";
import React, { useContext, useState } from "react";
import Container from "./Container";
import { ArticleWithSlug } from "@/lib/article";
import { useRouter } from "next/navigation";
import { AppContext } from "@/app/providers";
import { BsArrowLeftCircle } from "react-icons/bs";
import { formatDate } from "@/lib/formateDate";
import { Prose } from "./Prose";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import social media icons

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ArticleLayout = ({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const { previousPathname } = useContext(AppContext);

  // State to manage comment form, success message, and social share options
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State for success message
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission (e.g., send data to the backend)
    console.log("Comment submitted:", { comment, email });
    
    // Show success message
    setMessage("Comment submitted, it will be posted once the admin verifies it");

    // Clear form fields
    setComment("");
    setEmail("");

    // Hide the message after 2-3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000); // 3 seconds
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <Container className="w-full">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-black dark:text-zinc-100">
                {article.title}
              </h1>

              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>

              {/* Author Section */}
              <p className="text-sm text-gray-500 mt-4">
                By{" "}
                <Link href="/author" className="text-blue-500 hover:underline">
                  Prashant Subedi
                </Link>
              </p>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>

            {/* Comment Section */}
            <section className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Leave a Comment</h3>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Submit Comment
                </button>
              </form>
              {/* Success Message */}
              {message && (
                <div className="mt-4 text-green-600 transition-opacity duration-300">
                  {message}
                </div>
              )}
            </section>

            {/* Share Button */}
            <div className="mt-8 justify-left">
              <button
                onClick={toggleShareOptions}
                className="bg-green-500 text-white px-4 py-2 rounded-md justify-center"
              >
                Share this article
              </button>
              {showShareOptions && (
                <div className="mt-4 ml-4 flex space-x-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </Container>
  );
};

export default ArticleLayout;
