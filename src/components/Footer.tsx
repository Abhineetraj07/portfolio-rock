export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-700 py-6 text-center">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Abhineet Raj. All Rights Reserved.
      </p>
      <p className="text-neon text-xs mt-2 italic">
        “Turning ideas into code, like riffs into songs.”
      </p>
    </footer>
  );
}