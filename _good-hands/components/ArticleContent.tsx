'use client'

import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

interface ArticleContentProps {
  content: string
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="editorial-content prose prose-lg max-w-none">
      <ReactMarkdown
        components={{
        // Custom components for better styling
        h2: ({ children }) => (
          <h2 className="text-3xl font-serif text-ink mt-12 mb-4">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-serif text-ink mt-8 mb-3">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-harbor text-lg leading-relaxed mb-6">{children}</p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-gold pl-6 italic text-xl text-harbor/80 my-8">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className="list-none space-y-3 my-6">
            {children}
          </ul>
        ),
        li: ({ children }) => (
          <li className="flex items-start gap-3 text-harbor text-lg">
            <span className="text-gold mt-1.5">•</span>
            <span>{children}</span>
          </li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-ink">{children}</strong>
        ),
        a: ({ href, children }) => (
          <Link 
            href={href || '#'} 
            className="text-gold hover:text-gold/80 transition-colors underline"
          >
            {children}
          </Link>
        ),
      }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

