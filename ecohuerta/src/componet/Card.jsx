export default function Card({ title, description, children }) {
  return (
    <article className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition w-full">
      <h2 className="text-xl font-semibold mb-2 text-green-700">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <div>{children}</div>
    </article>
  );
}