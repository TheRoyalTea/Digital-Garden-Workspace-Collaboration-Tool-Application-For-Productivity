import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dark,
  gruvboxDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  savedContent: string;
  selectedLanguage: string;
};
const CodeSnipItem = ({ savedContent, selectedLanguage }: Props) => {
  return (
    <SyntaxHighlighter
      language={selectedLanguage}
      style={gruvboxDark}
      PreTag="div"
    >
      {savedContent}
    </SyntaxHighlighter>
  );
};

export default CodeSnipItem;
