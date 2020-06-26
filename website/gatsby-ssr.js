/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
      className: 'bg-nd-yellow text-nd-magenta font-light font-plex-sans mx-auto'
    });
};
