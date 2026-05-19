import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import { getContent } from "@/lib/content";
import { getLocale } from "@/lib/get-locale";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  const { metadata } = getContent(getLocale());
  return {
    title: metadata.blog.title,
    description: metadata.blog.description,
  };
}

export default function BlogPage() {
  const locale = getLocale();
  const content = getContent(locale);
  const posts = getAllPosts(locale);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-2 text-3xl font-bold">{content.blog.heading}</h1>
      <p className="mb-10 text-muted">
        {content.blog.intro}
      </p>

      {posts.length === 0 ? (
        <p className="text-muted">{content.blog.emptyState}</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
