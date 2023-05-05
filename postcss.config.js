module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nesting'),
    require('tailwindcss'),
    // ------
    require('postcss-import'),
    require('tailwindcss/nesting'),
  ],
};
