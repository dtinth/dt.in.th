import { CompiledNote } from '@notes/types';
export type * from '@notes/types';
export interface CompileMarkdownResult {
    compiled: CompiledNote;
    errors: string[];
    debuggingInfo: DebuggingInfo;
    log: [time: number, message: string][];
}
export interface DebuggingInfo {
    vueTemplate?: string;
    ssrEsm?: string;
    ssrCjs?: string;
    clientEsm?: string;
}
export declare function compileMarkdown(source: string, slug: string): Promise<CompileMarkdownResult>;
