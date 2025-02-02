'use client';
import { useState, useEffect } from 'react';
import { pb } from '../utils/pocketbase';
import RichTextEditor from '../components/RichTextEditor';
import { NewsSkeleton } from '../components/NewsSkeleton';

function NewsItem({ item, onEdit, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={`https://dsrn.pockethost.io/api/files/nyheder/${item.id}/${item.image}`}
          alt={item.title}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 hover:text-blue-700 mb-2"
        >
          {expanded ? 'Vis mindre' : 'Vis mere'}
        </button>

        {expanded && (
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: item.article }}
          />
        )}

        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={() => onEdit(item)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Rediger
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Slet
          </button>
        </div>
      </div>
    </div>
  );
}

function NewsForm({ news = null, onClose, onSave }) {
  const isEditing = !!news;
  const [formData, setFormData] = useState({
    hashtag: news?.hashtag || '',
    title: news?.title || '',
    date: news?.date ? new Date(news.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    article: news?.article || '',
  });
  const [newImage, setNewImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await pb.collection('nyheder').update(news.id, formData);

        if (newImage) {
          const formFile = new FormData();
          formFile.append('image', newImage);
          await pb.collection('nyheder').update(news.id, formFile);
        }
      } else {
        if (!newImage) {
          alert('Vælg et billede..');
          return;
        }
        
        const record = await pb.collection('nyheder').create(formData);
        
        const formFile = new FormData();
        formFile.append('image', newImage);
        await pb.collection('nyheder').update(record.id, formFile);
      }

      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving news:', error);
      alert('Kan ikke gemme nyheden: ' + error.message);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        {isEditing ? 'Rediger' : 'Opret'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {isEditing && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Billede</label>
            <img
              src={`https://dsrn.pockethost.io/api/files/nyheder/${news.id}/${news.image}`}
              alt="Current"
              className="w-48 h-32 object-cover mt-1 rounded"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {isEditing ? 'Nyt billede' : 'Billede'} {!isEditing && <span className="text-red-500">*</span>}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full"
            required={!isEditing}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Hashtag</label>
          <input
            type="text"
            value={formData.hashtag}
            onChange={(e) => setFormData({ ...formData, hashtag: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Titel <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Dato <span className="text-red-500">*</span></label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Artikel <span className="text-red-500">*</span>
          </label>
          <RichTextEditor
            content={formData.article}
            onChange={(newContent) => 
              setFormData({ ...formData, article: newContent })
            }
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Fortryd
          </button>
          <button
            type="submit"
            onClick={(e) => {
              if (e.target.type !== 'submit') {
                e.preventDefault();
              }
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isEditing ? 'Gem' : 'Opret'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function AdminPage() {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const records = await pb.collection('nyheder').getList(1, 50);
      setNews(records.items);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading news:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Er du sikker på du vil slette denne nyhed?')) {
      try {
        await pb.collection('nyheder').delete(id);
        await loadNews();
      } catch (error) {
        console.error('Error deleting news:', error);
      }
    }
  };

  if (isLoading) {
    return (
      <div>
        <div className="mb-6 flex justify-end">
          <div className="w-32 h-10 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <NewsSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (editingNews || isCreating) {
    return (
      <NewsForm
        news={editingNews}
        onClose={() => {
          setEditingNews(null);
          setIsCreating(false);
        }}
        onSave={loadNews}
      />
    );
  }

  return (
    <div>
      <div className="mb-6 flex justify-end">
        <button
          onClick={() => setIsCreating(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Opret nyhed
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((item) => (
          <NewsItem 
            key={item.id} 
            item={item}
            onEdit={setEditingNews}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}