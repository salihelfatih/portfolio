"use client";

const Footer = () => {
  return (
    <footer className="py-4 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-black/60 dark:text-white/60">
          <p>© 2026 Salih Elfatih. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
