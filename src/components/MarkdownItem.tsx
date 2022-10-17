import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

type Props = {
    content: string;
    setContent: (content: string) => void;
    savedContent: string;
    setSavedContent: (savedContent: string) => void;
}

const MarkdownItem = ({content, setContent, savedContent, setSavedContent}: Props) => {
  return (
    <ReactMarkdown children={savedContent} remarkPlugins={[remarkGfm]}/>
  )
}

export default MarkdownItem;