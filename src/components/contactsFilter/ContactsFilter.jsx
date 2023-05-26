import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeValue } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  let value = useSelector(selectFilter);

  return (
    <>
      <Label>Find contacts by name </Label>
      <Input
        type="text"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => dispatch(onChangeValue(e.target.value))}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};
