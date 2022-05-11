import { DSCodeSnippet } from '@studying-nx/ds';
import { Styles } from './styles';

export interface DSSnippetGroupProps {
  listCommands: {
    commandName: string;
    title: string;
    code: string;
  }[];
}

export function DSSnippetGroup({ listCommands }: DSSnippetGroupProps) {
  return (
    <Styles.SnippetGroupContainer>
      {listCommands.length &&
        listCommands.map(({ title, code, commandName }) => {
          return (
            <Styles.Card key={commandName}>
              <h2>{commandName}</h2>
              <DSCodeSnippet title={title} code={code} />
            </Styles.Card>
          );
        })}
    </Styles.SnippetGroupContainer>
  );
}

export default DSSnippetGroup;
