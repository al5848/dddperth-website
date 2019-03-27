interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
}

const breakpointSizes: Breakpoints = {
  xs: 480,
  // tslint:disable-next-line:object-literal-sort-keys
  sm: 768,
  md: 992,
  lg: 1200,
}

export const breakpoint = (size: keyof Breakpoints) => `@media (min-width: ${breakpointSizes[size]}px)`
