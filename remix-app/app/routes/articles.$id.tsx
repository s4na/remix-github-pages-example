import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type Article = {
  id: string;
  title: string;
  content: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  const articleId = params.id!;
  return json<Article>({
    id: articleId,
    title: `記事タイトル ${articleId}`,
    content: `ここに記事ID ${articleId} の内容が入ります。`,
  });
};

export default function ArticlePage() {
  const article = useLoaderData<Article>();
  
  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </article>
  );
}
