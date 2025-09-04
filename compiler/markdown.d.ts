export declare function markdownToVue(text: string, log?: (message: string) => void): Promise<MarkdownToVueResult>;
interface MarkdownToVueResult {
    vueTemplate: string;
    frontMatter: Record<string, any>;
}
export {};
