import Link from "next/link";
import { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-xl border border-border p-6 transition-colors group-hover:border-accent/40">
        <time className="text-xs text-muted">{post.date}</time>
        <h3 className="mt-1 text-lg font-semibold group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-2 text-sm text-muted line-clamp-2">
            {post.excerpt}
          </p>
        )}
      </article>
    </Link>
  );
}
