export type Post = {
    frontmatter: {
        title: string;
        author: string;
        description: string;
        image: {
            url: string;
            alt: string;
        };
        pubDate: string;
        tags: string[];
    };
    content: string;
    url: string;
}