import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    document.title = post ? `${post.title} | SahaTakip` : 'Yazı Bulunamadı | SahaTakip';
  }, [post]);

  if (!post) {
    return (
      <section className="max-w-[720px] mx-auto px-6 lg:px-8 pt-36 pb-24 text-center">
        <h1 className="text-3xl font-black text-slate-900 mb-4">Yazı Bulunamadı</h1>
        <p className="text-slate-600 mb-8">Aradığınız blog yazısı mevcut değil.</p>
        <Link to="/blog" className="text-brand-dark font-semibold">Blog'a dön</Link>
      </section>
    );
  }

  return (
    <article className="max-w-[720px] mx-auto px-6 lg:px-8 pt-36 pb-24">
      <Link to="/blog" className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand-dark mb-8">
        <ArrowLeft className="w-4 h-4" />
        Blog'a dön
      </Link>

      <div className="flex items-center gap-3 text-[13px] text-slate-500 mb-4">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-8 leading-tight">
        {post.title}
      </h1>

      <div className="space-y-5">
        {post.content.map((paragraph, i) => (
          <p key={i} className="text-slate-700 leading-relaxed text-[16px]">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200">
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-semibold text-[14px] px-6 py-3 rounded-full transition-all duration-300"
        >
          Demo Talep Et
        </a>
      </div>
    </article>
  );
}
