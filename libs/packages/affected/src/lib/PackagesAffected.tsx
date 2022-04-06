import { DSBaseView, DSCodeSnippet } from '@studying-nx/ds';
import { useState } from 'react';
import { Styles } from './styles';

export function PackagesAffected() {
  const [listCommands, setListCommands] = useState([
    {
      commandName: 'Graph',
      title: 'See the project structure affected running',
      code: 'nx affected:dep-graph',
    },
    {
      commandName: 'Testing',
      title: 'Running test in affected packages only',
      code: 'nx affected:test',
    },
  ]);
  return (
    <DSBaseView
      title="Affected command"
      shortDescription="Avoid running build, test, and lint scripts in unaffected packages"
    >
      <Styles.CardContainer>
        {listCommands.length &&
          listCommands.map(({ title, code, commandName }) => {
            return (
              <Styles.Card key={commandName}>
                <h2>{commandName}</h2>
                <DSCodeSnippet title={title} code={code} />
              </Styles.Card>
            );
          })}
      </Styles.CardContainer>
    </DSBaseView>
  );
}

export default PackagesAffected;
