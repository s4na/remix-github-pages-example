import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App | Articles" },
    { description: "Articles" },
  ];
};

const articles = [
  { title: "article1", url: "/articles/1" },
  { title: "article2", url: "https://example/articles/2" },
  { title: "article3", url: "https://example/articles/3" },
];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a
              target="_blank"
              href={article.url}
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
