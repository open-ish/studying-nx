import Button, { ButtonProps } from '@mui/material/Button';

interface DSButtonProps extends ButtonProps {
  children: React.ReactNode;
  textTransform?: 'none' | 'uppercase' | 'lowercase';
}

export function DSButton({
  children,
  textTransform = 'none',
  ...props
}: DSButtonProps) {
  return (
    <Button sx={{ textTransform }} {...props}>
      {children}
    </Button>
  );
}

export default DSButton;
