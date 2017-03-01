# oui-box

oui-box is a package which provide styles for the box component.

## Installation

```less
  @import 'oui-box/box';
```

## Usage

```html:preview
  <div class="oui-box">
    <h1>An awesome title for an awesome box</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus sapien erat, et molestie magna tristique non. Sed tincidunt eu augue tempor consectetur. Nullam iaculis, nibh mollis vulputate elementum, neque est iaculis nisi, et gravida turpis erat non dui. Nunc eget tortor et enim interdum euismod sed eget purus. Integer in metus ultrices, ultricies lacus in, fermentum nisi. Cras sed neque id dui fermentum faucibus. Mauris mollis arcu justo, eget convallis massa volutpat ac.
    </p>
  </div>

  <div class="oui-box oui-box_light">
    <h1>[Light] An awesome title for an awesome box</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus sapien erat, et molestie magna tristique non. Sed tincidunt eu augue tempor consectetur. Nullam iaculis, nibh mollis vulputate elementum, neque est iaculis nisi, et gravida turpis erat non dui. Nunc eget tortor et enim interdum euismod sed eget purus. Integer in metus ultrices, ultricies lacus in, fermentum nisi. Cras sed neque id dui fermentum faucibus. Mauris mollis arcu justo, eget convallis massa volutpat ac.
    </p>
  </div>
```

## Mixins

```less
  @import 'oui-box/_mixins';
```

### .box-base

Define the base styles for a box.

```less
#oui > .box-base();
```

```less
#oui > .box-base(
  @background-color: Color,
  @border-color: Color,
  @border-size: Number,
  @padding: Number
)
```

### .box-light

Define the base styles for a box.

```less
#oui > .box-light();
```

```less
#oui > .box-light(
  @background-color: Color,
  @border-color: Color,
  @border-size: Number
)
```
