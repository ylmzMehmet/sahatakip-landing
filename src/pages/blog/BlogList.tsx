import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export default function BlogList() {
  useEffect(() => {
    document.title = 'Blog | SahaTakip';
  }, []);

  return (
    <section className="max-w-[900px] mx-auto px-6 lg:px-8 pt-36 pb-24">
      <div className="mb-14">
        <span className="text-[13px] font-semibold text-brand-dark tracking-wide uppercase">Blog</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mt-3 mb-4">
          Saha Yönetimi Rehberleri
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl">
          Saha takip, saha ekibi yönetimi ve saha satış operasyonları hakkında pratik rehberler ve içgörüler.
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map(post => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block bg-white border border-slate-200 rounded-2xl p-8 hover:border-brand/40 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 text-[13px] text-slate-500 mb-3">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-dark transition-colors">
              {post.title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">{post.description}</p>
            <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-dark">
              Devamını oku
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
