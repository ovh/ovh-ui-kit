# Installation

```js
angular.module('myModule', ['oui.circleChart']);
```

# API

## Component `oui-circle-chart`

| Attribute          | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----               | ----      | ----      | ----              | ----              | ----      | ----
| `aria-description` | string    | @?        | yes               | n/a               | n/a       | chart description for screen-readers
| `aria-title`       | string    | @?        | yes               | n/a               | n/a       | chart title for screen-readers
| `chart-subtitle`   | string    | @?        | yes               | n/a               | n/a       | chart subtitle (displayed in center)
| `chart-title`      | string    | @?        | yes               | n/a               | n/a       | chart title (displayed in center)
| `max-bound`        | number    | @?        | yes               | n/a               | 0         | the max value for chart
| `min-bound`        | number    | @?        | yes               | n/a               | 100       | the min value for chart
| `segments`         | array     | =         | no                | n/a               | []        | the list of segments, containing title, description and value
| `with-legends`     | boolean   | <?        | yes               | `true`, `false`   | `false`   | show legends for chart segments
