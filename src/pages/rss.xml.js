import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('blogs');
    return rss({
        title: 'yuuma | ブログ',
        description: 'Astroを学ぶ旅',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `posts/${post.id}/`,
        })),
        customData: `<language>ja-jp</language>`,
    });
}