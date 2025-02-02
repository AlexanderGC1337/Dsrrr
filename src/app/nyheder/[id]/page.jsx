// app/news/[id]/page.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://dsrn.pockethost.io');

function ArticleSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/news" className="text-blue-600 hover:underline mb-6 block">
        ← Tilbage til nyhedsoversigt
      </Link>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="w-full h-64 bg-gray-200 animate-pulse" />
        <div className="p-6">
          <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse mb-4" />
          <div className="space-y-3 mb-4">
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
          </div>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-6" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function fetchArticle() {
      if (!params.id) return;
      
      try {
        const record = await pb.collection('nyheder').getOne(params.id);
        setArticle(record);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    }

    fetchArticle();
  }, [params.id]);

  if (!article) {
    return <ArticleSkeleton />;
  }

  const imageUrl = article.image ? `${pb.baseUrl}/api/files/${article.collectionId}/${article.id}/${article.image}` : '/placeholder.jpg';

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/nyheder" className="text-blue-600 hover:underline mb-6 block">
        ← Tilbage til nyhedsoversigt
      </Link>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
        <img
          src={imageUrl}
          alt={article.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          {article.hashtag && (
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
              {article.hashtag}
            </span>
          )}
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <p className="text-gray-600 mb-6">
            {new Date(article.created).toLocaleDateString('da-DK')}
          </p>
          {article.article && (
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: article.article }}
            />
          )}
        </div>
      </article>
    </div>
  );
}