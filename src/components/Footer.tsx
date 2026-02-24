import content from "@/lib/content.json";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {content.footer.copyright}</p>
        <div className="flex gap-4">
          {content.footer.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
