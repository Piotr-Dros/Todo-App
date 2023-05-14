import useTodoContext from '../hooks/useTodoContext';
import Card from './Card';

type FilterMenuProps = {
  isDesktop: boolean;
};

type Filter = {
  label: string;
  type: TodoFilterType;
};

const filters: Filter[] = [
  {
    type: 'all',
    label: 'All',
  },
  {
    type: 'completed',
    label: 'Completed',
  },
  {
    type: 'active',
    label: 'Active',
  },
];

const FilterMenu = ({ isDesktop }: FilterMenuProps) => {
  const { filter: currentFilterType, setFilter } = useTodoContext();

  const classes = 'flex gap-2 justify-center text-xs';

  const renderedFilters = (
    <>
      {filters.map((filter) => (
        <span
          className={`cursor-pointer ${
            currentFilterType === filter.type
              ? 'text-primary'
              : 'text-blue-placeholder'
          }`}
          key={filter.type}
          onClick={() => setFilter(filter.type)}
        >
          {filter.label}
        </span>
      ))}
    </>
  );

  if (isDesktop) {
    return <div className={`${classes}`}>{renderedFilters}</div>;
  }
  return (
    <Card className={`${classes} rounded-md mt-2`}>{renderedFilters}</Card>
  );
};

export default FilterMenu;
