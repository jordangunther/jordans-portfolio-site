import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

export default function ApiPractice() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery(['characters', page], async () => {
    const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    return res.data;
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">API Pagination Practice</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.results.map((char) => (
          <div key={char.id} className="p-4 bg-white rounded shadow">
            <img src={char.image} alt={char.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{char.name}</h2>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
