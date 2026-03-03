export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
