import glob from "fast-glob";

interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
  image?: string;
  imageUrl?: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}
export async function importArticle(
  articleFilename: string
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article & { image?: string };
  };
  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ""),
    ...article,
    image: article.image || undefined,
  };
}


export async function getAllArticles(): Promise<ArticleWithSlug[]> {
  let articleFilenames = await glob("*/page.mdx", {
    cwd: "./src/app/articles",
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));
  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}