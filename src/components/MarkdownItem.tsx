import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  savedContent: string;
};

const MarkdownItem = ({ savedContent }: Props) => {
  return <ReactMarkdown children={savedContent} remarkPlugins={[remarkGfm]} />;
};

export default MarkdownItem;
