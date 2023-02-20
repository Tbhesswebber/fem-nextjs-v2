import { readFile, stat } from "fs/promises";
import { readdir } from "fs/promises";
import { delay } from "libs/util/delay";

export interface BlogPost {
  "created-at": string;
  title: string;
  slug: string;
  lede: string;
  content: string[];
}

export async function getAllContent(): Promise<BlogPost[]> {
  const contents = await readdir("./public/data/blog");

  const blogs = await Promise.all(
    contents.filter(async (name) =>
      (await stat(`./public/data/blog/${name}`)).isFile()
    )
  );

  await delay(3000);

  return Promise.all(
    blogs.map(async (name) => {
      const fileData = await readFile(`./public/data/blog/${name}`);
      return JSON.parse(fileData.toString());
    })
  );
}

export async function getContent(slug: string): Promise<BlogPost> {
  const blogs = await getAllContent();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    throw new Error("No blog post found with slug: " + slug);
  }

  return blog;
}
