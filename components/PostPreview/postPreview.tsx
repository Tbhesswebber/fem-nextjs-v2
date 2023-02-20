import Image from "next/image";
import { BlogPost } from "libs/cms";

import styles from "./postPreview.module.css";

interface PostPreviewProps {
  post: BlogPost;
}

function PostPreview({ post }: PostPreviewProps) {
  return (
    <article className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          src={"/leaves.jpg"}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.img}
        />
      </div>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.lede}>{post.lede}</p>
      <p className={styles.date}>{post["created-at"]}</p>
    </article>
  );
}

export default PostPreview;
