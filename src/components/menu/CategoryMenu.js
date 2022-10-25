import classes from './CategoryMenu.module.css';

const categories = [
  { name: 'Hamburgers', href: '#' },
  { name: 'Hot dogs', href: '#' },
  { name: 'Pizza', href: '#' },
  { name: 'Tacos', href: '#' },
  { name: 'Salads', href: '#' },
  { name: 'Steaks', href: '#' },
  { name: 'Sea food', href: '#' },
  { name: 'Drinks', href: '#' },
  { name: 'Desserts', href: '#' },
];

function CategoryMenu() {
  return (
    <ul className={classes.categories}>
      {categories.map((category, index) => (
        <li key={index}>
          <a
            className={
              index === 0
                ? `${classes.category} ${classes['category--selected']}`
                : classes.category
            }
            href={category.href}
          >
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CategoryMenu;
