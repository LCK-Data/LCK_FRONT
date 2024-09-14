import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    color: '#ffffff',
    background: '#3D4764',
    backgroundColor: '#3D4764',
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
