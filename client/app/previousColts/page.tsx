import React from 'react';
import ColtRow from '@/components/ColtRow';
import Link from 'next/link';

function PreviousColts() {
  // Simulating the JSON data
  const coltsData = [
    { editor: "user", title: "testing", date: "Oct 12, 2024", episodes: 2, score: 0 },
    { editor: "user", title: "david (5)", date: "Oct 12, 2024", episodes: 0, score: 0 },
    { editor: "user", title: "david (4)", date: "Oct 12, 2024", episodes: 0, score: 0 },
    { editor: "user", title: "david (3)", date: "Oct 12, 2024", episodes: 0, score: 0 },
    { editor: "user", title: "French test", date: "Oct 11, 2024", episodes: 0, score: 0 },
    { editor: "user", title: "David", date: "Oct 11, 2024", episodes: 0, score: 0 }
  ];

  return (
    <div className="w-full p-4">
      {/* Link to go back to the home page */}
      <Link href="/home" className="text-blue-600 hover:underline mb-4 inline-block">
        Back to top
      </Link>
      <h2 className="text-3xl font-semibold mb-4">COLTs</h2>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 border-b">Select</th>
            <th className="py-3 px-4 border-b">Editor</th>
            <th className="py-3 px-4 border-b">Title</th>
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">Episodes</th>
            <th className="py-3 px-4 border-b">Score</th>
            <th className="py-3 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {coltsData.map((colt, index) => (
            <ColtRow
              key={index}
              editor={colt.editor}
              title={colt.title}
              date={colt.date}
              episodes={colt.episodes}
              score={colt.score}
            />
          ))}
        </tbody>
      </table>

      <footer className="mt-6 text-xs text-gray-500 text-center">
        © 2016 HOKKAIDO UNIVERSITY OF EDUCATION. All rights reserved.
      </footer>
    </div>
  );
}

export default PreviousColts;






