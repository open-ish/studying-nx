import Typography, { TypographyProps } from '@mui/material/Typography';

interface DSTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

export function DSTypo({ children, ...props }: DSTypographyProps) {
  return <Typography {...props}>{children}</Typography>;
}

export default DSTypo;
