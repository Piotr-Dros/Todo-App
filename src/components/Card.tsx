import classNames from 'classnames';
import { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = ({ children, className }: CardProps) => {
  const classes = classNames(
    'bg-neutral-paper px-4 py-2 gap-4 items-center text-blue-main text-sm',
    className
  );
  return <div className={classes}>{children}</div>;
};

export default Card;
