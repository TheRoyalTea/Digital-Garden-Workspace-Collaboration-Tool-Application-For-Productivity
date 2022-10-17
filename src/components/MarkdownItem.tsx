import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  savedContent: string;
};

const MarkdownItem = ({ savedContent }: Props) => {
  return (<div className="m-5"><ReactMarkdown children={savedContent} remarkPlugins={[remarkGfm]} /></div>);
};

export default MarkdownItem;
