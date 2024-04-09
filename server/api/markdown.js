import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
import { getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const requestedSlug = query.slug;

  const contentDir = path.resolve("content");
  const filenames = fs.readdirSync(contentDir);

  const matchingFiles = filenames.filter(filename => filename.replace(/\.md$/, "") === requestedSlug);

  if (matchingFiles.length === 0) {
    return { error: "No content found for the requested slug." };
  }

  const filePath = path.join(contentDir, matchingFiles[0]);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: metadata, content } = matter(fileContent);
  const htmlContent = marked(content);

  return {
    slug: requestedSlug,
    htmlContent,
    metadata,
  };
});
