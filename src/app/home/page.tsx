import { Card } from "@/components/Card";
import Section from "@/components/Section";
import { ArticleWithSlug, getAllArticles } from "@/lib/article";
import { formatDate } from "@/lib/formateDate";
import { GetStaticProps } from "next";

const ToolsSection = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) => {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
};

const Tool = ({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) => {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
};
// export const getStaticProps: GetStaticProps = async () => {
//   const articles = await getAllArticles();
//   return {
//     props: {
//       articles: articles.slice(0, 3), // Fetch last 3 articles
//     },
//   };
// };
const HomePage = async () => {
  // Fetch articles server-side
  const articles: ArticleWithSlug[] = await getAllArticles();

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div
        className="hero-section bg-cover bg-center text-white py-20 text-center"
        style={{
          backgroundImage: "url('/img/banner.jpg')",
          backgroundColor: "#1c1c1c",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to The E-com</h1>
        <p className="text-lg mb-6">
          Your Ultimate Guide to E-Commerce, SEO, and Digital Marketing
        </p>
        <a href="/articles" className="btn btn-lg btn-white">
          Explore Articles
        </a>
      </div>

      {/* Recent Articles Section */}
      <Section title="Recent Articles">
        {articles.slice(0, 3).map((article, index) => (
          <article key={article.slug} className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3 custom-style">
              <Card.Image
                src={article.imageUrl || "/img/default.jpg"}  // Fallback image
                alt={article.title}
                width={600}
                height={350}
              />
              <Card.Title href={`/articles/${article.slug}`}>
                {article.title}
              </Card.Title>
              <Card.Eyebrow as="time" dateTime={article.date} decorate>
                {formatDate(article.date)}
              </Card.Eyebrow>
              <Card.Description>{article.description}</Card.Description>
              <Card.Cta>Read article</Card.Cta>
            </Card>
          </article>
        ))}
      </Section>

      {/* Tools Section */}
      <ToolsSection title="E-Commerce Tools">
        <Tool title="Shopify: Build and Grow Your Online Store">
          Shopify is the go-to platform for setting up your e-commerce store.
          With an array of features and easy integration, it&apos;s perfect for beginners and pros alike.
        </Tool>
        <Tool title="Google Analytics: Track and Optimize Performance">
          Get detailed insights into your website&apos;s traffic, user behavior, and conversion rates with Google Analytics. Essential for any serious e-commerce site.
        </Tool>
        <Tool title="Ahrefs: Master SEO for E-Commerce Success">
          Ahrefs provides powerful tools for SEO research, backlinks analysis, and keyword tracking, helping you dominate the search engine results.
        </Tool>
      </ToolsSection>

      <ToolsSection title="Digital Marketing Strategies">
        <Tool title="Email Marketing with Mailchimp">
          Leverage the power of email marketing to engage your customers and drive more sales. Mailchimp offers powerful tools for automation, segmentation, and analytics.
        </Tool>
        <Tool title="Social Media Marketing with Buffer">
          Schedule and manage your social media posts with ease using Buffer. Build your brand presence on platforms like Instagram, Facebook, and Twitter.
        </Tool>
        <Tool title="SEO Content Strategy with SEMrush">
          Use SEMrush to find the best keywords, analyze competitors, and optimize your content strategy for e-commerce growth.
        </Tool>
      </ToolsSection>
    </div>
  );
};

export default HomePage;