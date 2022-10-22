import { Fragment } from 'react';
import CategoryMenu from '../components/dishes/CategoryMenu';
import DishList from '../components/dishes/DishList';
import DishPage from '../components/dishes/DishPage';

function MenuPage() {
  return (
    <Fragment>
      <div className='container grid grid--3-cols'>
        <CategoryMenu />
        <DishList />
        <DishPage />
      </div>
    </Fragment>
  );
}

export default MenuPage;
