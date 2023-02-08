import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-3.5 rounded-full font-bold focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
  {
    variants: {
      intent: {
        primary: 'bg-slate-blue text-white hover:bg-tropical-indigo',
        secondary:
          'bg-off-white text-slate-blue hover:bg-opacity-25 hover:bg-slate-blue',
        danger:
          'bg-indian-red text-white focus:ring-indian-red hover:bg-light-red',
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-md', 'py-2', 'px-4'],
        large: ['text-lg', 'py-8', 'px-6'],
      },
      fullWidth: {
        true: 'w-full',
      },
    },

    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export function Button({ intent, fullWidth, ...props }: Props) {
  return (
    <ButtonOrLink className={buttonStyles({ intent, fullWidth })} {...props} />
  );
}
