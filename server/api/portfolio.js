import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

export default defineEventHandler(async (event) => {
  const portfolioDir = path.resolve('content/portfolio');

  const filenames = fs.readdirSync(portfolioDir);

  const portfolioItems = filenames.map(filename => {
    const filePath = path.join(portfolioDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, htmlContent } = parseMarkdown(fileContent);
    return { ...frontmatter, content: htmlContent, slug: filename.replace(/\.md$/, '') };
  });

  return portfolioItems;
});

function parseMarkdown(markdownContent) {
  const { data: frontmatter, content } = matter(markdownContent);
  const htmlContent = marked(content);
  return { frontmatter, htmlContent };
}

