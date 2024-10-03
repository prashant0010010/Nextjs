import { Card } from "@/components/Card";
import SimpleLayout from "@/components/SimpleLayout";
import { ArticleWithSlug, getAllArticles } from "@/lib/article";
import { formatDate } from "@/lib/formateDate";
import React from "react";

const Article = ({ article, index }: { article: ArticleWithSlug, index: number }) => {
  // Define different images for the first three articles
  const images = [
    "/img/boost-website-traffic-seo.jpg", // Image for the first article
    "/img/digital-traditional-marketing-comparison.jpg",
    "/img/digital-marketing-strategies.jpg",
    "/img/seo-career-path.jpg", //fourth image
    "/img/mastering-on-page-seo.jpg",
    "/img/what-is-on-page-seo.jpg",
    "/img/how-to-start-seo-career.jpg",
    // "/img/.jpg",
    "/img/banner.jpg",
    "/img/banner.jpg",
    // "img/seo-",
  ];

  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      {/* Start of Article Card */}
      <Card className="md:col-span-4">
        <Card.Image
          src={images[index] || article.imageUrl || "/img/banner.jpg"} // Use different images for the first three articles
          alt={article.title}
          width={500}
          height={300}
          className="my-custom-class"
        />
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      {/* End of Article Card */}
      
           <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
};

const AriclePage = async () => {
  const articles = await getAllArticles();
  return (
    <SimpleLayout
title="Mastering E-Commerce SEO: Essential Strategies for Success"
  intro="Discover comprehensive strategies and insights to optimize your e-commerce site for search engines. Learn how to enhance your visibility, attract more traffic, and boost your online sales with expert SEO techniques tailored for e-commerce."
>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article, index) => (
            <Article key={article.slug} article={article} index={index} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
};

export default AriclePage;
