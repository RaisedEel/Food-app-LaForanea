import { NavLink } from 'react-router-dom';
import classes from './TabNav.module.css';

function TabNav(props) {
  return (
    <div className={classes['tabs-layout']}>
      <ul className={classes.tabs}>
        {props.data.map((tab) => (
          <li key={tab.id}>
            <NavLink
              to={props.path ? `${props.path}${tab.id}` : tab.id}
              className={(navData) =>
                navData.isActive
                  ? `${classes.tab} ${classes['tab--active']}`
                  : classes.tab
              }
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TabNav;
