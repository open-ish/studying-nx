import { Styles } from './styles';

export interface DSBaseViewProps {
  shortDescription?: string;
  title: string;
  children: React.ReactNode;
}

export function DSBaseView({
  title,
  shortDescription,
  children,
}: DSBaseViewProps) {
  return (
    <section>
      <Styles.Title>{title}</Styles.Title>
      {shortDescription && <p>{shortDescription}</p>}

      <Styles.Content>{children}</Styles.Content>
    </section>
  );
}

export default DSBaseView;
