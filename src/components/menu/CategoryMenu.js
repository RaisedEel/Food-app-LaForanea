import classes from './CategoryMenu.module.css';

const categories = [
  { name: 'Hamburgers' },
  { name: 'Hot dogs' },
  { name: 'Pizza' },
  { name: 'Tacos' },
  { name: 'Salads' },
  { name: 'Steaks' },
  { name: 'Sea food' },
  { name: 'Drinks' },
  { name: 'Desserts' },
];

function CategoryMenu() {
  return (
    <div className={classes.cntr}>
      <label>Categorías: </label>
      <select className={classes.categories}>
        {categories.map((category, index) => (
          <option key={index}>{category.name}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryMenu;
