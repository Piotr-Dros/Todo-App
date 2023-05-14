import classNames from 'classnames';
import { ChangeEvent, HTMLAttributes } from 'react';

type CheckboxProps = HTMLAttributes<HTMLInputElement> & {
  isChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox = ({ onChange, isChecked, ...rest }: CheckboxProps) => {
  const classes = classNames(
    'block w-5 aspect-square rounded-full',
    'border border-blue-placeholder',
    'grid place-items-center cursor-pointer',
    'hover:border-primary',
    {
      'bg-gradient': isChecked,
    }
  );

  return (
    <label>
      <input
        {...rest}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="hidden"
      />
      <span className={classes}>
        {isChecked && <img src="/src/assets/images/icon-check.svg" />}
      </span>
    </label>
  );
};

export default Checkbox;
