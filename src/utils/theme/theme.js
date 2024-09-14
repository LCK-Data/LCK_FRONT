import { extendTheme } from '@chakra-ui/react';
import { selectTheme } from './SelectTheme';
import { inputTheme } from './InputTheme';
import { tableTheme } from './TableTheme';

export const theme = extendTheme({
  components: {
    Select: selectTheme,
    Input: inputTheme,
    Table: tableTheme,
  },
});
