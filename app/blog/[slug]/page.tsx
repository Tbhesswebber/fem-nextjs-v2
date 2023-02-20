import { getContent } from "libs/cms";

interface BlogPostPageParams {
  params: { slug: string };
  searchParams: {};
}

export default async function BlogPostPage({
  params: { slug },
}: BlogPostPageParams) {
  const post = await getContent(slug);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post["created-at"]}</p>
      <main>
        {post.content.map((c) => (
          <p key={c}>{c}</p>
        ))}
      </main>
    </main>
  );
}
