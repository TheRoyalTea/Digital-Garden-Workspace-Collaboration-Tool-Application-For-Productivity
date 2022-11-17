import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "react-grid-layout/css/styles.css";
type Props = {
  savedContent: string;
};

const MarkdownItem = ({ savedContent }: Props) => {
  return <ReactMarkdown children={savedContent} remarkPlugins={[remarkGfm]} />;
};

export default MarkdownItem;
