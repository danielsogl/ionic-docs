# Theming with Sass
Sass based theming allows for total control over the CSS generated for all of the Ionic Components; however, this requires a build step. CSS generated will still have CSS properties in them and it is recommended that these variables are not changed to allow your applications to use other themes easily.  However, in the case of a completely custom application that requires no runtime theming, all the Sass is available for customization.

## Colors
Sass variable theming concepts are very similar to that of CSS properties. In its simplest form, a custom theme can be generated by changing colors in the color map. Since most components use the primary color, this is the fastest way to get a custom look.

```sass
$colors:  (
  primary: (
    base:          #ff0000,
    contrast:      #ffffff,
    shade:         #c60000,
    tint:          #f71818
  )
);
```

If you need to, add a custom color to that make, and get a custom color for use in components in return. You can do that by simply adding your color to the color map.

```sass
$colors:              (
  quaternary: (
    base:       #ff0000,
    contrast:   #ffffff,
    shade:      #ae0000,
    tint:       #ff3633
  )
)
```

Helper methods `get-color-shade` and `get-color-tint` are also provided to make this easier to change. By default, shade will be a 12% mix of black and tint will be a 10% tint of white.

```sass
$my-primary: $ff0000;
$colors:  (
  primary: (
    base:         $my-primary,
    contrast:     #ffffff,
    shade:        get-color-shade($my-primary),
    tint:         get-color-tint($my-primary)
  )
);
```

Additionally, colors can be changed for a specific mode by adding to the color map for that mode. Material Design uses `$colors-md` whereas iOS uses `$colors-ios`.

```sass
$colors-md:  (
  primary: (
    base:          #ff0000,
    contrast:      #ffffff,
    shade:         #c60000,
    tint:          #f71818
  )
);
```

## CSS Property Generation
CSS properties, also known as CSS variables, are generated using the `css-var` function. A CSS variable can be generated as simply as providing a name and a value. 

```sass
$text-color:        css-var(#000000, text-color);
```

$text-color would then have a value of

```css
var(--ion-text-color, #000000);
```


`css-var` is also mode aware and will automatically provide fallbacks. For example, providing a Material Design only color is as simple as including “-md-” in your css variable name.

```sass
$text-md-color:     css-var(#000000, text-md-color);
```

$text-color would then have a value of

```css
var(--ion-text-md-color, var(--ion-text-color, #000000));
```
