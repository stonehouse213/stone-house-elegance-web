import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, schema }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Stone House Granite NJ" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {schema && (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    )}
  </>
);

export default SEO; 