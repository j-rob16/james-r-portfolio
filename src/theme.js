import { createContext, useState, useMemo } from 'react';

export const tokens = (mode) => ({
  ...(mode === 'light' ? {
    background: {
      
    }
  } : {
    background: {
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414"
    }
  }
  )
});

'#fff'