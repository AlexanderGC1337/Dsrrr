// app/news/page.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://dsrn.pockethost.io');

function NewsCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 bg-gray-200 animate-pulse" />
      <div className="p-4">
        <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse mb-2" />
        <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse mb-2" />
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
}

function NewsGridSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export default function NewsPage() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const records = await pb.collection('nyheder').getFullList({
          sort: '-created',
        });
        setNews(records);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchNews();
  }, []);

  if (!news) {
    return <NewsGridSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8">Seneste nyheder</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news
        .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, newest first
        .map((article) => {
        const imageUrl = article.image ? `${pb.baseUrl}/api/files/${article.collectionId}/${article.id}/${article.image}` : '/placeholder.jpg';
        
        return (
          <Link
            key={article.id}
            href={`/nyheder/${article.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <img
                src={imageUrl}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-2">
                {article.hashtag}
              </span>
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">
                {new Date(article.date).toLocaleDateString('da-DK')}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
  );
}