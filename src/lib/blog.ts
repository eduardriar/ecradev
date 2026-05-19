import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "./content";

const BLOG_ROOT = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

function blogDir(locale: Locale) {
  return path.join(BLOG_ROOT, locale);
}

export function getAllPosts(locale: Locale): BlogPost[] {
  const dir = blogDir(locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files.filter(filename => !filename.includes('test-')).map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string, locale: Locale): BlogPost | null {
  if (!/^[a-z0-9\-_]+$/i.test(slug)) return null;
  const filePath = path.join(blogDir(locale), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    content,
  };
}
