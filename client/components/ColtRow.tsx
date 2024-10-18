// ColtRow.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface ColtRowProps {
  editor: string;
  title: string;
  date: string;
  episodes: number;
  score: number;
  isOddRow: boolean; // Added prop for row styling
}

function ColtRow({ editor, title, date, episodes, score, isOddRow }: ColtRowProps) {
  return (
    <tr className={isOddRow ? 'bg-gray-50' : 'bg-white'}>
      <td><input type="checkbox" aria-label={`Select row for ${title}`} /></td>
      <td>
        <Link href={`/edit/${title}`} className="text-blue-500 hover:underline">
          {editor}
        </Link>
      </td>
      <td>
        <Link href={`/view/${title}`} className="text-blue-500 hover:underline">
          {title}
        </Link>
      </td>
      <td>{date}</td>
      <td>{episodes}</td>
      <td>{score}</td>
      <td>
        <Link href={`/edit/${title}`} className="text-blue-500 hover:underline" aria-label={`Edit ${title}`}>
          Edit
        </Link>
        {' | '}
        <Link href={`/video/${title}`} className="text-blue-500 hover:underline ml-2" aria-label={`Watch video for ${title}`}>
          Video
        </Link>
        {' | '}
        <Link href="#" className="text-red-500 hover:underline ml-2" aria-label={`Remove ${title}`}>
          Remove
        </Link>
      </td>
    </tr>
  );
}

export default ColtRow;

