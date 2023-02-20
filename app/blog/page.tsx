import { PostPreview } from "components/PostPreview";
import { getAllContent } from "libs/cms";
import Link from "next/link";
import styles from "./blogHome.module.css";

export async function generateStaticParams() {
  const content = await getAllContent();

  return content.map(({ slug }) => ({ slug }));
}

export default async function BlogHome() {
  const posts = await getAllContent();

  return (
    <section aria-label="blog posts" className={styles.posts}>
      {posts.map((post) => (
        <Link
          href={"/blog/" + post.slug}
          key={post.slug}
          className={styles.postLink}
        >
          <PostPreview post={post} />
        </Link>
      ))}
    </section>
  );
}
