import PropTypes from 'prop-types';
import { Block } from 'components/Filter/Filter.styled';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChange }) => {
  const inputFilter = nanoid();

  return (
    <Block>
      <label htmlFor={inputFilter}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={onChange}
        id={inputFilter}
      />
    </Block>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
