import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup';

interface DSButtonGroupProps extends ButtonGroupProps {
  children: React.ReactNode;
}

export function DSButtonGroup({ children, ...props }: DSButtonGroupProps) {
  return (
    <ButtonGroup sx={{ color: 'white' }} {...props}>
      {children}
    </ButtonGroup>
  );
}

export default DSButtonGroup;
