import { Styles } from './styles';

export interface DSCodeSnippetProps {
  title: string;
  code: string;
}

export function DSCodeSnippet({ title, code }: DSCodeSnippetProps) {
  return (
    <Styles.Pre>
      <span># {title}:</span>
      <Styles.Code>{code}</Styles.Code>
    </Styles.Pre>
  );
}

export default DSCodeSnippet;
