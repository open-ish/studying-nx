import { DSBaseView, DSSnippetGroup } from '@studying-nx/ds';

export function PackagesHome() {
  const listCommands = [
    {
      commandName: 'Getting started here?',
      title: 'See the project structure running',
      code: 'nx graph',
    },
  ];
  return (
    <DSBaseView
      title="Exploring Nx features and its commands"
      shortDescription="Let's take a short look into Nx world"
    >
      <DSSnippetGroup listCommands={listCommands} />
    </DSBaseView>
  );
}

export default PackagesHome;
