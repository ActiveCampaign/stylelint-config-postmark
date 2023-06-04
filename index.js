module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    // stylelint-config-recommended: Disable & Overwrite
    'block-no-empty': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,


    // stylelint-config-recommended: Set to warning
    'no-duplicate-selectors': [true, {'severity': 'warning'}],


    // stylelint-config-standard: Disable & Overwrite
    'color-hex-case': 'upper',
    'comment-empty-line-before': null,
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': null,
    'declaration-empty-line-before': null,
    'indentation': null,
    'max-empty-lines': 3,
    'max-line-length': null,
    'number-leading-zero': null,
    'rule-empty-line-before': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'string-quotes': 'single',
    'value-keyword-case': null,


    // stylelint-config-standard: Set to warning
    'declaration-block-no-redundant-longhand-properties': [true, {'severity': 'warning'}],
    'length-zero-no-unit': [true, {'severity': 'warning'}],
    'media-feature-name-no-vendor-prefix': [true, {'severity': 'warning'}],
    'property-no-vendor-prefix': [true, {'severity': 'warning'}],
    'selector-no-vendor-prefix': [true, {'severity': 'warning'}],
    'value-no-vendor-prefix': [true, {'severity': 'warning'}],


    // stylelint-config-recommended-scss
    'scss/at-extend-no-missing-placeholder': null,
    'scss/no-global-function-names': null,


    // stylelint-config-standard-scss
    'at-rule-empty-line-before': null,
    'scss/at-function-parentheses-space-before': 'always',
    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-pattern': null,


    // Custom rules
    'block-closing-brace-space-after': 'always-single-line',
    'block-opening-brace-newline-before': 'never-single-line',
    'color-named': 'never',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'font-family-name-quotes': 'always-where-recommended',
    'no-unknown-animations': true,
    'scss/at-each-key-value-single-line': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/selector-no-redundant-nesting-selector': true,
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-max-universal': 0,


    // Plugin stylelint-order
    // ----------------------

    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-order': [
      [
        // Generated content
        'content',

        // Grid child
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'grid-column',
        'grid-column-start',
        'grid-column-end',
        'grid-area',

        // Flexbox child
        'order',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',

        // Grid & Flexbox child alignment
        'place-self',
        'align-self',
        'justify-self',

        // Display
        'display',

        // Grid parent
        'grid',
        'grid-template',
        'grid-template-rows',
        'grid-template-columns',
        'grid-template-areas',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'gap',
        'row-gap',
        'column-gap',
        'grid-gap', // Old version of 'gap'
        'grid-row-gap',
        'grid-column-gap',

        // Flexbox parent
        'flex-flow',
        'flex-direction',
        'flex-wrap',

        // Grid & Flexbox alignment
        'place-items',
        'align-items',
        'justify-items',
        'place-content',
        'align-content',
        'justify-content',

        // Visual formatting
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'clear',
        'float',

        // Box model
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-radius',
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
        'border-top',
        'border-top-width',
        'border-top-style',
        'border-top-color',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-right',
        'border-right-width',
        'border-right-style',
        'border-right-color',
        'border-bottom',
        'border-bottom-width',
        'border-bottom-style',
        'border-bottom-color',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-left',
        'border-left-width',
        'border-left-style',
        'border-left-color',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'vertical-align',

        // Visual effects
        'overflow',
        'overflow-x',
        'overflow-y',
        'overflow-wrap',
        'overflow-scrolling',
        'clip',
        'visibility',

        // Colors and backgrounds
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-attachment',
        'background-position',
        'background-clip',
        'background-origin',
        'background-size',
        'color',
        'opacity',
        'box-shadow',

        // Fonts
        'font',
        'font-style',
        'font-weight',
        'font-size',
        'font-family',
        'font-smoothing',
        'src',
        'line-height',

        // Text
        'text-indent',
        'text-align',
        'text-decoration',
        'text-transform',
        'text-shadow',
        'text-overflow',
        'text-size-adjust',
        'letter-spacing',
        'word-spacing',
        'white-space',
        'list-style',

        // Tables
        'caption-side',
        'table-layout',
        'empty-cells',

        // UI
        'cursor',
        'outline',
        'pointer-events',

        // Transforms
        'transform',
        'transform-origin',

        // Transitions
        'transition',
        'transition-property',
        'transition-duration',
        'transition-timing-function',
        'transition-delay',

        // Animations
        'animation',
        'animation-name',
        'animation-duration',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode',
        'animation-play-state',
      ],
      {'severity': 'error'}
    ],
  }
}
