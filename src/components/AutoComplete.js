import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';

export const AutoComplete = ({initValue, setValue, label}) => {

    return (
        <Autocomplete
        options={top100Films}
        getOptionLabel={(value)=>value.title}
        onChange={(event, newValue) => {
           newValue ? setValue(newValue) : setValue(initValue)
        }}
        renderInput={(params) => <TextField {...params} label={label} margin="normal" />}
      />
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];