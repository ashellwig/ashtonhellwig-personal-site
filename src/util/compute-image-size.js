/**
 * Computes proper image size to display based on reported vuetify breakpoint.
 *
 * Computes proper image size to display based on vuetify breakpoint. Ensure
 * the argument resembles `this.$vuetify.breakpoint.name` if using from a vue
 * single file component.
 *
 * @since      0.1.0
 *
 * @global
 *
 * @param  {string} breakpoint - String specified by `vuetify.breakpoint.name`
 *
 * @return {string} Height of image to be displayed based on breakpoint string
 * specified.
 */
export default function computeImageSize (breakpoint) {
  switch (breakpoint) {
    case 'xs':
      return '100px'
    case 'sm':
      return '150px'
    case 'md':
      return '200px'
    case 'lg':
      return '250px'
    case 'xl':
      return '300px'
    default:
      return '250px'
  }
}
