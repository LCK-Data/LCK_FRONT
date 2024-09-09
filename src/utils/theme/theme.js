import { extendTheme } from '@chakra-ui/react';
import { selectTheme } from './SelectTheme';

export const theme = extendTheme({
  components: { Select: selectTheme },
});
