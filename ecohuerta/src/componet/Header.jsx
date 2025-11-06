export default function Header({ title, subtitle }) {
  return (
    <header className="text-center bg-green-600 text-white rounded-2xl p-6 shadow-md w-full max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-lg opacity-90">{subtitle}</p>
    </header>
  );
}