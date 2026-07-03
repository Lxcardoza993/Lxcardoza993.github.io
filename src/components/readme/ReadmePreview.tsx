import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

export function ReadmePreview({ content }: Props) {
  return (
    <div className="mb-8 bg-[#161b22] border border-[#30363d] rounded-md p-4 prose prose-invert max-w-none prose-sm">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
