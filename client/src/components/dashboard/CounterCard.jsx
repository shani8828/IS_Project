export default function CounterCard({ title, value }) {
  return (
    <div className="bg-gray-900 text-white rounded-xl p-6 shadow-md w-60">
      <h3 className="text-lg mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}