import { extendTheme } from '@chakra-ui/react';
import { selectTheme } from './SelectTheme';
import { inputTheme } from './InputTheme';

export const theme = extendTheme({
  components: { Select: selectTheme, Input: inputTheme },
});
