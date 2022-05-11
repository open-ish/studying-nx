import { DSBaseView, DSSnippetGroup } from '@studying-nx/ds';
import { useState } from 'react';

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
      <DSSnippetGroup listCommands={listCommands} />
    </DSBaseView>
  );
}

export default PackagesAffected;
