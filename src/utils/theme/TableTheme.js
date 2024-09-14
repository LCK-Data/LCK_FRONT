import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { withTheme } from 'styled-components';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  th: {
    background: '#282830',
    color: 'white',
    borderColor: '#282830',
  },
  td: {
    color: 'white', // change the td text color
    background: '#3D4764',
    borderBottom: '1px solid #282830',
  },
  tr: {
    borderColor: '#282830',
  },
});

export const tableTheme = defineMultiStyleConfig({ baseStyle });
