/*import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
    return (
      <>
        <p className={css.title}>Find contacts by name</p>
        <input className={css.input} type="text" name="filter" value={filter} onChange={onChange} />
      </>
    );
}

export default Filter;*/

import css from './Filter.module.css';

import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => (
  <>
    <p className={css.title}>Find contacts by name</p>
    <input className={css.input} type="text" name="filter" onChange={onChange} />
  </>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};