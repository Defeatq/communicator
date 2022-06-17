function CardSearchForm(props) {
  const { onSearchChange, onFormSubmit, searchValue } = props;

  return (
    <form className="wrapper form__search" onSubmit={ onFormSubmit }>
      <input className="form__search__input" type="text" value={ searchValue } onChange={ onSearchChange } />
      <input className="form__search__submit" type="submit" value="" />
    </form>
  )
}

export default CardSearchForm;
