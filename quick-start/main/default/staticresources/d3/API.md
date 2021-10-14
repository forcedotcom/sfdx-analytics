# D3 API Reference

D3 is a [collection of modules](https://github.com/d3) that are designed to work together; you can use the modules independently, or you can use them together as part of the default build. The source and documentation for each module is available in its repository. Follow the links below to learn more. For changes between major versions, see [CHANGES](https://github.com/d3/d3/blob/master/CHANGES.md); see also the [release notes](https://github.com/d3/d3/releases) and the [3.x reference](https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md).

- [Arrays](#arrays-d3-array) ([Statistics](#statistics), [Search](#search), [Transformations](#transformations), [Histograms](#histograms))
- [Axes](#axes-d3-axis)
- [Brushes](#brushes-d3-brush)
- [Chords](#chords-d3-chord)
- [Collections](#collections-d3-collection) ([Objects](#objects), [Maps](#maps), [Sets](#sets), [Nests](#nests))
- [Colors](#colors-d3-color)
- [Color Schemes](#color-schemes-d3-scale-chromatic)
- [Contours](#contours-d3-contour)
- [Dispatches](#dispatches-d3-dispatch)
- [Dragging](#dragging-d3-drag)
- [Delimiter-Separated Values](#delimiter-separated-values-d3-dsv)
- [Easings](#easings-d3-ease)
- [Fetches](#fetches-d3-fetch)
- [Forces](#forces-d3-force)
- [Number Formats](#number-formats-d3-format)
- [Geographies](#geographies-d3-geo) ([Paths](#paths), [Projections](#projections), [Spherical Math](#spherical-math), [Spherical Shapes](#spherical-shapes), [Streams](#streams), [Transforms](#transforms))
- [Hierarchies](#hierarchies-d3-hierarchy)
- [Interpolators](#interpolators-d3-interpolate)
- [Paths](#paths-d3-path)
- [Polygons](#polygons-d3-polygon)
- [Quadtrees](#quadtrees-d3-quadtree)
- [Random Numbers](#random-numbers-d3-random)
- [Scales](#scales-d3-scale) ([Continuous](#continuous-scales), [Sequential](#sequential-scales), [Diverging](#diverging-scales), [Quantize](#quantize-scales), [Ordinal](#ordinal-scales))
- [Selections](#selections-d3-selection) ([Selecting](#selecting-elements), [Modifying](#modifying-elements), [Data](#joining-data), [Events](#handling-events), [Control](#control-flow), [Local Variables](#local-variables), [Namespaces](#namespaces))
- [Shapes](#shapes-d3-shape) ([Arcs](#arcs), [Pies](#pies), [Lines](#lines), [Areas](#areas), [Curves](#curves), [Links](#links), [Symbols](#symbols), [Stacks](#stacks))
- [Time Formats](#time-formats-d3-time-format)
- [Time Intervals](#time-intervals-d3-time)
- [Timers](#timers-d3-timer)
- [Transitions](#transitions-d3-transition)
- [Voronoi Diagrams](#voronoi-diagrams-d3-voronoi)
- [Zooming](#zooming-d3-zoom)

D3 uses [semantic versioning](http://semver.org/). The current version is exposed as d3.version.

## [Arrays (d3-array)](https://github.com/d3/d3-array/tree/v1.2.4)

Array manipulation, ordering, searching, summarizing, etc.

### [Statistics](https://github.com/d3/d3-array/blob/v1.2.4/README.md#statistics)

Methods for computing basic summary statistics.

- [d3.min](https://github.com/d3/d3-array/blob/v1.2.4/README.md#min) - compute the minimum value in an array.
- [d3.max](https://github.com/d3/d3-array/blob/v1.2.4/README.md#max) - compute the maximum value in an array.
- [d3.extent](https://github.com/d3/d3-array/blob/v1.2.4/README.md#extent) - compute the minimum and maximum value in an array.
- [d3.sum](https://github.com/d3/d3-array/blob/v1.2.4/README.md#sum) - compute the sum of an array of numbers.
- [d3.mean](https://github.com/d3/d3-array/blob/v1.2.4/README.md#mean) - compute the arithmetic mean of an array of numbers.
- [d3.median](https://github.com/d3/d3-array/blob/v1.2.4/README.md#median) - compute the median of an array of numbers (the 0.5-quantile).
- [d3.quantile](https://github.com/d3/d3-array/blob/v1.2.4/README.md#quantile) - compute a quantile for a sorted array of numbers.
- [d3.variance](https://github.com/d3/d3-array/blob/v1.2.4/README.md#variance) - compute the variance of an array of numbers.
- [d3.deviation](https://github.com/d3/d3-array/blob/v1.2.4/README.md#deviation) - compute the standard deviation of an array of numbers.

### [Search](https://github.com/d3/d3-array/blob/v1.2.4/README.md#search)

Methods for searching arrays for a specific element.

- [d3.scan](https://github.com/d3/d3-array/blob/v1.2.4/README.md#scan) - linear search for an element using a comparator.
- [d3.bisect](https://github.com/d3/d3-array/blob/v1.2.4/README.md#bisect) - binary search for a value in a sorted array.
- [d3.bisectRight](https://github.com/d3/d3-array/blob/v1.2.4/README.md#bisectRight) - binary search for a value in a sorted array.
- [d3.bisectLeft](https://github.com/d3/d3-array/blob/v1.2.4/README.md#bisectLeft) - binary search for a value in a sorted array.
- [d3.bisector](https://github.com/d3/d3-array/blob/v1.2.4/README.md#bisector) - bisect using an accessor or comparator.
- [_bisector_.left](https://github.com/d3/d3-array/blob/v1.2.4/README.md#bisector_left) - bisectLeft, with the given comparator.
- [_bisector_.right](https://github.com/d3/d3-array/blob/v1.2.4/README.md#bisector_right) - bisectRight, with the given comparator.
- [d3.ascending](https://github.com/d3/d3-array/blob/v1.2.4/README.md#ascending) - compute the natural order of two values.
- [d3.descending](https://github.com/d3/d3-array/blob/v1.2.4/README.md#descending) - compute the natural order of two values.

### [Transformations](https://github.com/d3/d3-array/blob/v1.2.4/README.md#transformations)

Methods for transforming arrays and for generating new arrays.

- [d3.cross](https://github.com/d3/d3-array/blob/v1.2.4/README.md#cross) - compute the Cartesian product of two arrays.
- [d3.merge](https://github.com/d3/d3-array/blob/v1.2.4/README.md#merge) - merge multiple arrays into one array.
- [d3.pairs](https://github.com/d3/d3-array/blob/v1.2.4/README.md#pairs) - create an array of adjacent pairs of elements.
- [d3.permute](https://github.com/d3/d3-array/blob/v1.2.4/README.md#permute) - reorder an array of elements according to an array of indexes.
- [d3.shuffle](https://github.com/d3/d3-array/blob/v1.2.4/README.md#shuffle) - randomize the order of an array.
- [d3.ticks](https://github.com/d3/d3-array/blob/v1.2.4/README.md#ticks) - generate representative values from a numeric interval.
- [d3.tickIncrement](https://github.com/d3/d3-array/blob/v1.2.4/README.md#tickIncrement) - generate representative values from a numeric interval.
- [d3.tickStep](https://github.com/d3/d3-array/blob/v1.2.4/README.md#tickStep) - generate representative values from a numeric interval.
- [d3.range](https://github.com/d3/d3-array/blob/v1.2.4/README.md#range) - generate a range of numeric values.
- [d3.transpose](https://github.com/d3/d3-array/blob/v1.2.4/README.md#transpose) - transpose an array of arrays.
- [d3.zip](https://github.com/d3/d3-array/blob/v1.2.4/README.md#zip) - transpose a variable number of arrays.

### [Histograms](https://github.com/d3/d3-array/blob/v1.2.4/README.md#histograms)

Bin discrete samples into continuous, non-overlapping intervals.

- [d3.histogram](https://github.com/d3/d3-array/blob/v1.2.4/README.md#histogram) - create a new histogram generator.
- [_histogram_](https://github.com/d3/d3-array/blob/v1.2.4/README.md#_histogram) - compute the histogram for the given array of samples.
- [_histogram_.value](https://github.com/d3/d3-array/blob/v1.2.4/README.md#histogram_value) - specify a value accessor for each sample.
- [_histogram_.domain](https://github.com/d3/d3-array/blob/v1.2.4/README.md#histogram_domain) - specify the interval of observable values.
- [_histogram_.thresholds](https://github.com/d3/d3-array/blob/v1.2.4/README.md#histogram_thresholds) - specify how values are divided into bins.
- [d3.thresholdFreedmanDiaconis](https://github.com/d3/d3-array/blob/v1.2.4/README.md#thresholdFreedmanDiaconis) - the Freedman–Diaconis binning rule.
- [d3.thresholdScott](https://github.com/d3/d3-array/blob/v1.2.4/README.md#thresholdScott) - Scott’s normal reference binning rule.
- [d3.thresholdSturges](https://github.com/d3/d3-array/blob/v1.2.4/README.md#thresholdSturges) - Sturges’ binning formula.

## [Axes (d3-axis)](https://github.com/d3/d3-axis/tree/v1.0.12)

Human-readable reference marks for scales.

- [d3.axisTop](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axisTop) - create a new top-oriented axis generator.
- [d3.axisRight](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axisRight) - create a new right-oriented axis generator.
- [d3.axisBottom](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axisBottom) - create a new bottom-oriented axis generator.
- [d3.axisLeft](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axisLeft) - create a new left-oriented axis generator.
- [_axis_](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#_axis) - generate an axis for the given selection.
- [_axis_.scale](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axis_scale) - set the scale.
- [_axis_.ticks](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axis_ticks) - customize how ticks are generated and formatted.
- [_axis_.tickArguments](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axis_tickArguments) - customize how ticks are generated and formatted.
- [_axis_.tickValues](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axis_tickValues) - set the tick values explicitly.
- [_axis_.tickFormat](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axis_tickFormat) - set the tick format explicitly.
- [_axis_.tickSize](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axis_tickSize) - set the size of the ticks.
- [_axis_.tickSizeInner](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axis_tickSizeInner) - set the size of inner ticks.
- [_axis_.tickSizeOuter](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axis_tickSizeOuter) - set the size of outer (extent) ticks.
- [_axis_.tickPadding](https://github.com/d3/d3-axis/blob/v1.0.12/README.md#axis_tickPadding) - set the padding between ticks and labels.

## [Brushes (d3-brush)](https://github.com/d3/d3-brush/tree/v1.1.5)

Select a one- or two-dimensional region using the mouse or touch.

- [d3.brush](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brush) - create a new two-dimensional brush.
- [d3.brushX](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brushX) - create a brush along the _x_-dimension.
- [d3.brushY](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brushY) - create a brush along the _y_-dimension.
- [_brush_](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#_brush) - apply the brush to a selection.
- [_brush_.move](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brush_move) - move the brush selection.
- [_brush_.clear](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brush_clear) - clear the brush selection.
- [_brush_.extent](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brush_extent) - define the brushable region.
- [_brush_.filter](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brush_filter) - control which input events initiate brushing.
- [_brush_.handleSize](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brush_handleSize) - set the size of the brush handles.
- [_brush_.touchable](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brush_touchable) - set the touch support detector.
- [_brush_.keyModifiers](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brush_keyModifiers) - enable or disable key interaction.
- [_brush_.on](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brush_on) - listen for brush events.
- [d3.brushSelection](https://github.com/d3/d3-brush/blob/v1.1.5/README.md#brushSelection) - get the brush selection for a given node.

## [Chords (d3-chord)](https://github.com/d3/d3-chord/tree/v1.0.6)

- [d3.chord](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#chord) - create a new chord layout.
- [_chord_](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#_chord) - compute the layout for the given matrix.
- [_chord_.padAngle](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#chord_padAngle) - set the padding between adjacent groups.
- [_chord_.sortGroups](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#chord_sortGroups) - define the group order.
- [_chord_.sortSubgroups](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#chord_sortSubgroups) - define the source and target order within groups.
- [_chord_.sortChords](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#chord_sortChords) - define the chord order across groups.
- [d3.ribbon](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#ribbon) - create a ribbon shape generator.
- [_ribbon_](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#_ribbon) - generate a ribbon shape.
- [_ribbon_.source](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#ribbon_source) - set the source accessor.
- [_ribbon_.target](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#ribbon_target) - set the target accessor.
- [_ribbon_.radius](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#ribbon_radius) - set the ribbon source or target radius.
- [_ribbon_.startAngle](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#ribbon_startAngle) - set the ribbon source or target start angle.
- [_ribbon_.endAngle](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#ribbon_endAngle) - set the ribbon source or target end angle.
- [_ribbon_.context](https://github.com/d3/d3-chord/blob/v1.0.6/README.md#ribbon_context) - set the render context.

## [Collections (d3-collection)](https://github.com/d3/d3-collection/tree/v1.0.7)

Handy data structures for elements keyed by string.

### [Objects](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#objects)

Methods for converting associative arrays (objects) to arrays.

- [d3.keys](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#keys) - list the keys of an associative array.
- [d3.values](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#values) - list the values of an associated array.
- [d3.entries](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#entries) - list the key-value entries of an associative array.

### [Maps](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#maps)

Like ES6 Map, but with string keys and a few other differences.

- [d3.map](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map) - create a new, empty map.
- [_map_.has](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_has) - returns true if the map contains the given key.
- [_map_.get](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_get) - get the value for the given key.
- [_map_.set](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_set) - set the value for the given key.
- [_map_.remove](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_remove) - remove the entry for given key.
- [_map_.clear](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_clear) - remove all entries.
- [_map_.keys](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_keys) - get the array of keys.
- [_map_.values](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_values) - get the array of values.
- [_map_.entries](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_entries) - get the array of entries (key-values objects).
- [_map_.each](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_each) - call a function for each entry.
- [_map_.empty](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_empty) - returns false if the map has at least one entry.
- [_map_.size](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#map_size) - compute the number of entries.

### [Sets](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#sets)

Like ES6 Set, but with string keys and a few other differences.

- [d3.set](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#set) - create a new, empty set.
- [_set_.has](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#set_has) - returns true if the set contains the given value.
- [_set_.add](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#set_add) - add the given value.
- [_set_.remove](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#set_remove) - remove the given value.
- [_set_.clear](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#set_clear) - remove all values.
- [_set_.values](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#set_values) - get the array of values.
- [_set_.each](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#set_each) - call a function for each value.
- [_set_.empty](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#set_empty) - returns true if the set has at least one value.
- [_set_.size](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#set_size) - compute the number of values.

### [Nests](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#nests)

Group data into arbitrary hierarchies.

- [d3.nest](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#nest) - create a new nest generator.
- [_nest_.key](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#nest_key) - add a level to the nest hierarchy.
- [_nest_.sortKeys](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#nest_sortKeys) - sort the current nest level by key.
- [_nest_.sortValues](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#nest_sortValues) - sort the leaf nest level by value.
- [_nest_.rollup](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#nest_rollup) - specify a rollup function for leaf values.
- [_nest_.map](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#nest_map) - generate the nest, returning a map.
- [_nest_.object](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#nest_object) - generate the nest, returning an associative array.
- [_nest_.entries](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#nest_entries) - generate the nest, returning an array of key-values tuples.

## [Colors (d3-color)](https://github.com/d3/d3-color/tree/v1.4.1)

Color manipulation and color space conversion.

- [d3.color](https://github.com/d3/d3-color/blob/v1.4.1/README.md#color) - parse the given CSS color specifier.
- [_color_.copy](https://github.com/d3/d3-color/blob/v1.4.1/README.md#color_copy) - return a copy of this color.
- [_color_.rgb](https://github.com/d3/d3-color/blob/v1.4.1/README.md#color_rgb) - compute the RGB equivalent of this color.
- [_color_.brighter](https://github.com/d3/d3-color/blob/v1.4.1/README.md#color_brighter) - create a brighter copy of this color.
- [_color_.darker](https://github.com/d3/d3-color/blob/v1.4.1/README.md#color_darker) - create a darker copy of this color.
- [_color_.displayable](https://github.com/d3/d3-color/blob/v1.4.1/README.md#color_displayable) - returns true if the color is displayable on standard hardware.
- [_color_.formatHex](https://github.com/d3/d3-color/blob/v1.4.1/README.md#color_formatHex) - returns the hexadecimal RGB string representation of this color.
- [_color_.formatHsl](https://github.com/d3/d3-color/blob/v1.4.1/README.md#color_formatHsl) - returns the RGB string representation of this color.
- [_color_.formatRgb](https://github.com/d3/d3-color/blob/v1.4.1/README.md#color_formatRgb) - returns the HSL string representation of this color.
- [_color_.toString](https://github.com/d3/d3-color/blob/v1.4.1/README.md#color_toString) - returns the RGB string representation of this color.
- [d3.rgb](https://github.com/d3/d3-color/blob/v1.4.1/README.md#rgb) - create a new RGB color.
- [d3.hsl](https://github.com/d3/d3-color/blob/v1.4.1/README.md#hsl) - create a new HSL color.
- [d3.lab](https://github.com/d3/d3-color/blob/v1.4.1/README.md#lab) - create a new Lab color.
- [d3.hcl](https://github.com/d3/d3-color/blob/v1.4.1/README.md#hcl) - create a new HCL color.
- [d3.lch](https://github.com/d3/d3-color/blob/v1.4.1/README.md#lch) - create a new HCL color.
- [d3.gray](https://github.com/d3/d3-color/blob/v1.4.1/README.md#gray) - create a new Lab gray.
- [d3.cubehelix](https://github.com/d3/d3-color/blob/v1.4.1/README.md#cubehelix) - create a new Cubehelix color.

## [Color Schemes (d3-scale-chromatic)](https://github.com/d3/d3-scale-chromatic/tree/v1.5.0)

Color ramps and palettes for quantitative, ordinal and categorical scales.

### Categorical

- [d3.schemeCategory10](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeCategory10) -
- [d3.schemeAccent](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeAccent) -
- [d3.schemeDark2](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeDark2) -
- [d3.schemePaired](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemePaired) -
- [d3.schemePastel1](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemePastel1) -
- [d3.schemePastel2](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemePastel2) -
- [d3.schemeSet1](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeSet1) -
- [d3.schemeSet2](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeSet2) -
- [d3.schemeSet3](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeSet3) -
- [d3.schemeTableau10](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeTableau10) -

### Diverging

- [d3.interpolateBrBG](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateBrBG) -
- [d3.interpolatePiYG](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolatePiYG) -
- [d3.interpolatePRGn](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolatePRGn) -
- [d3.interpolatePuOr](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolatePuOr) -
- [d3.interpolateRdBu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateRdBu) -
- [d3.interpolateRdGy](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateRdGy) -
- [d3.interpolateRdYlBu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateRdYlBu) -
- [d3.interpolateRdYlGn](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateRdYlGn) -
- [d3.interpolateSpectral](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateSpectral) -
- [d3.schemeBrBG](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeBrBG) -
- [d3.schemePiYG](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemePiYG) -
- [d3.schemePRGn](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemePRGn) -
- [d3.schemePuOr](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemePuOr) -
- [d3.schemeRdBu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeRdBu) -
- [d3.schemeRdGy](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeRdGy) -
- [d3.schemeRdYlBu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeRdYlBu) -
- [d3.schemeRdYlGn](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeRdYlGn) -
- [d3.schemeSpectral](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeSpectral) -

### Sequential (Single Hue)

- [d3.interpolateBlues](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateBlues) -
- [d3.interpolateGreens](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateGreens) -
- [d3.interpolateGreys](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateGreys) -
- [d3.interpolateOranges](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateOranges) -
- [d3.interpolatePurples](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolatePurples) -
- [d3.interpolateReds](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateReds) -
- [d3.schemeBlues](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeBlues) -
- [d3.schemeGreens](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeGreens) -
- [d3.schemeGreys](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeGreys) -
- [d3.schemeOranges](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeOranges) -
- [d3.schemePurples](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemePurples) -
- [d3.schemeReds](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeReds) -

### Sequential (Multi-Hue)

- [d3.interpolateBuGn](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateBuGn) -
- [d3.interpolateBuPu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateBuPu) -
- [d3.interpolateCividis](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateCividis) -
- [d3.interpolateCool](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateCool) -
- [d3.interpolateCubehelixDefault](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateCubehelixDefault) -
- [d3.interpolateGnBu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateGnBu) -
- [d3.interpolateInferno](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateInferno) -
- [d3.interpolateMagma](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateMagma) -
- [d3.interpolateOrRd](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateOrRd) -
- [d3.interpolatePlasma](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolatePlasma) -
- [d3.interpolatePuBu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolatePuBu) -
- [d3.interpolatePuBuGn](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolatePuBuGn) -
- [d3.interpolatePuRd](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolatePuRd) -
- [d3.interpolateRdPu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateRdPu) -
- [d3.interpolateTurbo](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateTurbo) -
- [d3.interpolateViridis](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateViridis) -
- [d3.interpolateWarm](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateWarm) -
- [d3.interpolateYlGn](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateYlGn) -
- [d3.interpolateYlGnBu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateYlGnBu) -
- [d3.interpolateYlOrBr](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateYlOrBr) -
- [d3.interpolateYlOrRd](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateYlOrRd) -
- [d3.schemeBuGn](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeBuGn) -
- [d3.schemeBuPu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeBuPu) -
- [d3.schemeGnBu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeGnBu) -
- [d3.schemeOrRd](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeOrRd) -
- [d3.schemePuBu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemePuBu) -
- [d3.schemePuBuGn](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemePuBuGn) -
- [d3.schemePuRd](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemePuRd) -
- [d3.schemeRdPu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeRdPu) -
- [d3.schemeYlGn](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeYlGn) -
- [d3.schemeYlGnBu](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeYlGnBu) -
- [d3.schemeYlOrBr](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeYlOrBr) -
- [d3.schemeYlOrRd](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeYlOrRd) -

### Cyclical

- [d3.interpolateRainbow](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateRainbow) - the “less-angry” rainbow
- [d3.interpolateSinebow](https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#interpolateSinebow) - the “sinebow” smooth rainbow

## [Contours (d3-contour)](https://github.com/d3/d3-contour/tree/v1.3.2)

Compute contour polygons using marching squares.

- [d3.contours](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#contours) - create a new contour generator.
- [contours](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#_contours) - compute the contours for a given grid of values.
- [contours.contour](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#contours_contour) -
- [contours.size](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#contours_size) -
- [contours.smooth](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#contours_smooth) -
- [contours.thresholds](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#contours_thresholds) -
- [d3.contourDensity](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#contourDensity) - create a new density estimator.
- [density](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#_density) - estimate the density of a given array of samples.
- [density.x](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#density_x) -
- [density.y](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#density_y) -
- [density.size](https://github.com/d3/d3-contour#density_size) -
- [density.cellSize](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#density_cellSize) -
- [density.thresholds](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#density_thresholds) -
- [density.bandwidth](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#density_bandwidth) -
- [density.weight](https://github.com/d3/d3-contour/blob/v1.3.2/README.md#density_weight) -

## [Dispatches (d3-dispatch)](https://github.com/d3/d3-dispatch/tree/v1.0.6)

Separate concerns using named callbacks.

- [d3.dispatch](https://github.com/d3/d3-dispatch/blob/v1.0.6/README.md#dispatch) - create a custom event dispatcher.
- [_dispatch_.on](https://github.com/d3/d3-dispatch/blob/v1.0.6/README.md#dispatch_on) - register or unregister an event listener.
- [_dispatch_.copy](https://github.com/d3/d3-dispatch/blob/v1.0.6/README.md#dispatch_copy) - create a copy of a dispatcher.
- [_dispatch_._call_](https://github.com/d3/d3-dispatch/blob/v1.0.6/README.md#dispatch_call) - dispatch an event to registered listeners.
- [_dispatch_._apply_](https://github.com/d3/d3-dispatch/blob/v1.0.6/README.md#dispatch_apply) - dispatch an event to registered listeners.

## [Dragging (d3-drag)](https://github.com/d3/d3-drag/tree/v1.2.5)

Drag and drop SVG, HTML or Canvas using mouse or touch input.

- [d3.drag](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#drag) - create a drag behavior.
- [_drag_](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#_drag) - apply the drag behavior to a selection.
- [_drag_.container](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#drag_container) - set the coordinate system.
- [_drag_.filter](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#drag_filter) - ignore some initiating input events.
- [_drag_.touchable](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#drag_touchable) - set the touch support detector.
- [_drag_.subject](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#drag_subject) - set the thing being dragged.
- [_drag_.clickDistance](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#drag_clickDistance) - set the click distance threshold.
- [_drag_.on](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#drag_on) - listen for drag events.
- [_event_.on](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#event_on) - listen for drag events on the current gesture.
- [d3.dragDisable](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#dragDisable) - prevent native drag-and-drop and text selection.
- [d3.dragEnable](https://github.com/d3/d3-drag/blob/v1.2.5/README.md#dragEnable) - enable native drag-and-drop and text selection.

## [Delimiter-Separated Values (d3-dsv)](https://github.com/d3/d3-dsv/tree/v1.2.0)

Parse and format delimiter-separated values, most commonly CSV and TSV.

- [d3.dsvFormat](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#dsvFormat) - create a new parser and formatter for the given delimiter.
- [_dsv_.parse](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#dsv_parse) - parse the given string, returning an array of objects.
- [_dsv_.parseRows](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#dsv_parseRows) - parse the given string, returning an array of rows.
- [_dsv_.format](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#dsv_format) - format the given array of objects.
- [_dsv_.formatBody](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#dsv_formatBody) - format the given array of objects.
- [_dsv_.formatRows](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#dsv_formatRows) - format the given array of rows.
- [_dsv_.formatRow](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#dsv_formatRow) - format the given row.
- [_dsv_.formatValue](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#dsv_formatValue) - format the given value.
- [d3.autoType](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#autoType) - automatically infer value types for the given object.
- [d3.csvParse](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#csvParse) - parse the given CSV string, returning an array of objects.
- [d3.csvParseRows](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#csvParseRows) - parse the given CSV string, returning an array of rows.
- [d3.csvFormat](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#csvFormat) - format the given array of objects as CSV.
- [d3.csvFormatBody](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#csvFormatBody) - format the given array of objects as CSV.
- [d3.csvFormatRows](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#csvFormatRows) - format the given array of rows as CSV.
- [d3.csvFormatRow](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#csvFormatRow) - format the given row as CSV.
- [d3.csvFormatValue](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#csvFormatValue) - format the given value as CSV.
- [d3.tsvParse](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#tsvParse) - parse the given TSV string, returning an array of objects.
- [d3.tsvParseRows](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#tsvParseRows) - parse the given TSV string, returning an array of rows.
- [d3.tsvFormat](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#tsvFormat) - format the given array of objects as TSV.
- [d3.tsvFormatBody](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#tsvFormatBody) - format the given array of objects as TSV.
- [d3.tsvFormatRows](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#tsvFormatRows) - format the given array of rows as TSV.
- [d3.tsvFormatRow](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#tsvFormatRow) - format the given row as TSV.
- [d3.tsvFormatValue](https://github.com/d3/d3-dsv/blob/v1.2.0/README.md#tsvFormatValue) - format the given value as TSV.

## [Easings (d3-ease)](https://github.com/d3/d3-ease/tree/v1.0.6)

Easing functions for smooth animation.

- [_ease_](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#_ease) - ease the given normalized time.
- [d3.easeLinear](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeLinear) - linear easing; the identity function.
- [d3.easePolyIn](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easePolyIn) - polynomial easing; raises time to the given power.
- [d3.easePolyOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easePolyOut) - reverse polynomial easing.
- [d3.easePolyInOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easePolyInOut) - symmetric polynomial easing.
- [_poly_.exponent](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#poly_exponent) - specify the polynomial exponent.
- [d3.easeQuad](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeQuad) - an alias for easeQuadInOut.
- [d3.easeQuadIn](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeQuadIn) - quadratic easing; squares time.
- [d3.easeQuadOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeQuadOut) - reverse quadratic easing.
- [d3.easeQuadInOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeQuadInOut) - symmetric quadratic easing.
- [d3.easeCubic](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeCubic) - an alias for easeCubicInOut.
- [d3.easeCubicIn](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeCubicIn) - cubic easing; cubes time.
- [d3.easeCubicOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeCubicOut) - reverse cubic easing.
- [d3.easeCubicInOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeCubicInOut) - symmetric cubic easing.
- [d3.easeSin](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeSin) - an alias for easeSinInOut.
- [d3.easeSinIn](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeSinIn) - sinusoidal easing.
- [d3.easeSinOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeSinOut) - reverse sinusoidal easing.
- [d3.easeSinInOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeSinInOut) - symmetric sinusoidal easing.
- [d3.easeExp](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeExp) - an alias for easeExpInOut.
- [d3.easeExpIn](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeExpIn) - exponential easing.
- [d3.easeExpOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeExpOut) - reverse exponential easing.
- [d3.easeExpInOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeExpInOut) - symmetric exponential easing.
- [d3.easeCircle](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeCircle) - an alias for easeCircleInOut.
- [d3.easeCircleIn](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeCircleIn) - circular easing.
- [d3.easeCircleOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeCircleOut) - reverse circular easing.
- [d3.easeCircleInOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeCircleInOut) - symmetric circular easing.
- [d3.easeElastic](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeElastic) - an alias for easeElasticOut.
- [d3.easeElasticIn](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeElasticIn) - elastic easing, like a rubber band.
- [d3.easeElasticOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeElasticOut) - reverse elastic easing.
- [d3.easeElasticInOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeElasticInOut) - symmetric elastic easing.
- [_elastic_.amplitude](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#elastic_amplitude) - specify the elastic amplitude.
- [_elastic_.period](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#elastic_period) - specify the elastic period.
- [d3.easeBack](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeBack) - an alias for easeBackInOut.
- [d3.easeBackIn](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeBackIn) - anticipatory easing, like a dancer bending his knees before jumping.
- [d3.easeBackOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeBackOut) - reverse anticipatory easing.
- [d3.easeBackInOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeBackInOut) - symmetric anticipatory easing.
- [_back_.overshoot](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#back_overshoot) - specify the amount of overshoot.
- [d3.easeBounce](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeBounce) - an alias for easeBounceOut.
- [d3.easeBounceIn](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeBounceIn) - bounce easing, like a rubber ball.
- [d3.easeBounceOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeBounceOut) - reverse bounce easing.
- [d3.easeBounceInOut](https://github.com/d3/d3-ease/blob/v1.0.6/README.md#easeBounceInOut) - symmetric bounce easing.

## [Fetches (d3-fetch)](https://github.com/d3/d3-fetch/tree/v1.1.2)

Convenience methods on top of the Fetch API.

- [d3.blob](https://github.com/d3/d3-fetch/blob/v1.1.2/README.md#blob) - get a file as a blob.
- [d3.buffer](https://github.com/d3/d3-fetch/blob/v1.1.2/README.md#buffer) - get a file as an array buffer.
- [d3.csv](https://github.com/d3/d3-fetch/blob/v1.1.2/README.md#csv) - get a comma-separated values (CSV) file.
- [d3.dsv](https://github.com/d3/d3-fetch/blob/v1.1.2/README.md#dsv) - get a delimiter-separated values (CSV) file.
- [d3.image](https://github.com/d3/d3-fetch/blob/v1.1.2/README.md#image) - get an image.
- [d3.json](https://github.com/d3/d3-fetch/blob/v1.1.2/README.md#json) - get a JSON file.
- [d3.text](https://github.com/d3/d3-fetch/blob/v1.1.2/README.md#text) - get a plain text file.
- [d3.tsv](https://github.com/d3/d3-fetch/blob/v1.1.2/README.md#tsv) - get a tab-separated values (TSV) file.

## [Forces (d3-force)](https://github.com/d3/d3-force/tree/v1.2.1)

Force-directed graph layout using velocity Verlet integration.

- [d3.forceSimulation](https://github.com/d3/d3-force/blob/v1.2.1/README.md#forceSimulation) - create a new force simulation.
- [_simulation_.restart](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_restart) - reheat and restart the simulation’s timer.
- [_simulation_.stop](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_stop) - stop the simulation’s timer.
- [_simulation_.tick](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_tick) - advance the simulation one step.
- [_simulation_.nodes](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_nodes) - set the simulation’s nodes.
- [_simulation_.alpha](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_alpha) - set the current alpha.
- [_simulation_.alphaMin](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_alphaMin) - set the minimum alpha threshold.
- [_simulation_.alphaDecay](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_alphaDecay) - set the alpha exponential decay rate.
- [_simulation_.alphaTarget](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_alphaTarget) - set the target alpha.
- [_simulation_.velocityDecay](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_velocityDecay) - set the velocity decay rate.
- [_simulation_.force](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_force) - add or remove a force.
- [_simulation_.find](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_find) - find the closest node to the given position.
- [_simulation_.on](https://github.com/d3/d3-force/blob/v1.2.1/README.md#simulation_on) - add or remove an event listener.
- [_force_](https://github.com/d3/d3-force/blob/v1.2.1/README.md#_force) - apply the force.
- [_force_.initialize](https://github.com/d3/d3-force/blob/v1.2.1/README.md#force_initialize) - initialize the force with the given nodes.
- [d3.forceCenter](https://github.com/d3/d3-force/blob/v1.2.1/README.md#forceCenter) - create a centering force.
- [_center_.x](https://github.com/d3/d3-force/blob/v1.2.1/README.md#center_x) - set the center _x_-coordinate.
- [_center_.y](https://github.com/d3/d3-force/blob/v1.2.1/README.md#center_y) - set the center _y_-coordinate.
- [d3.forceCollide](https://github.com/d3/d3-force/blob/v1.2.1/README.md#forceCollide) - create a circle collision force.
- [_collide_.radius](https://github.com/d3/d3-force/blob/v1.2.1/README.md#collide_radius) - set the circle radius.
- [_collide_.strength](https://github.com/d3/d3-force/blob/v1.2.1/README.md#collide_strength) - set the collision resolution strength.
- [_collide_.iterations](https://github.com/d3/d3-force/blob/v1.2.1/README.md#collide_iterations) - set the number of iterations.
- [d3.forceLink](https://github.com/d3/d3-force/blob/v1.2.1/README.md#forceLink) - create a link force.
- [_link_.links](https://github.com/d3/d3-force/blob/v1.2.1/README.md#link_links) - set the array of links.
- [_link_.id](https://github.com/d3/d3-force/blob/v1.2.1/README.md#link_id) - link nodes by numeric index or string identifier.
- [_link_.distance](https://github.com/d3/d3-force/blob/v1.2.1/README.md#link_distance) - set the link distance.
- [_link_.strength](https://github.com/d3/d3-force/blob/v1.2.1/README.md#link_strength) - set the link strength.
- [_link_.iterations](https://github.com/d3/d3-force/blob/v1.2.1/README.md#link_iterations) - set the number of iterations.
- [d3.forceManyBody](https://github.com/d3/d3-force/blob/v1.2.1/README.md#forceManyBody) - create a many-body force.
- [_manyBody_.strength](https://github.com/d3/d3-force/blob/v1.2.1/README.md#manyBody_strength) - set the force strength.
- [_manyBody_.theta](https://github.com/d3/d3-force/blob/v1.2.1/README.md#manyBody_theta) - set the Barnes–Hut approximation accuracy.
- [_manyBody_.distanceMin](https://github.com/d3/d3-force/blob/v1.2.1/README.md#manyBody_distanceMin) - limit the force when nodes are close.
- [_manyBody_.distanceMax](https://github.com/d3/d3-force/blob/v1.2.1/README.md#manyBody_distanceMax) - limit the force when nodes are far.
- [d3.forceX](https://github.com/d3/d3-force/blob/v1.2.1/README.md#forceX) - create an _x_-positioning force.
- [_x_.strength](https://github.com/d3/d3-force/blob/v1.2.1/README.md#x_strength) - set the force strength.
- [_x_.x](https://github.com/d3/d3-force/blob/v1.2.1/README.md#x_x) - set the target _x_-coordinate.
- [d3.forceY](https://github.com/d3/d3-force/blob/v1.2.1/README.md#forceY) - create an _y_-positioning force.
- [_y_.strength](https://github.com/d3/d3-force/blob/v1.2.1/README.md#y_strength) - set the force strength.
- [_y_.y](https://github.com/d3/d3-force/blob/v1.2.1/README.md#y_y) - set the target _y_-coordinate.
- [d3.forceRadial](https://github.com/d3/d3-force/blob/v1.2.1/README.md#forceRadial) - create a radial positioning force.
- [_radial_.strength](https://github.com/d3/d3-force/blob/v1.2.1/README.md#radial_strength) - set the force strength.
- [_radial_.radius](https://github.com/d3/d3-force/blob/v1.2.1/README.md#radial_radius) - set the target radius.
- [_radial_.x](https://github.com/d3/d3-force/blob/v1.2.1/README.md#radial_x) - set the target center _x_-coordinate.
- [_radial_.y](https://github.com/d3/d3-force/blob/v1.2.1/README.md#radial_y) - set the target center _y_-coordinate.

## [Number Formats (d3-format)](https://github.com/d3/d3-format/tree/v1.4.4)

Format numbers for human consumption.

- [d3.format](https://github.com/d3/d3-format/blob/v1.4.4/README.md#format) - alias for _locale_.format on the default locale.
- [d3.formatPrefix](https://github.com/d3/d3-format/blob/v1.4.4/README.md#formatPrefix) - alias for _locale_.formatPrefix on the default locale.
- [d3.formatSpecifier](https://github.com/d3/d3-format/blob/v1.4.4/README.md#formatSpecifier) - parse a number format specifier.
- [d3.formatLocale](https://github.com/d3/d3-format/blob/v1.4.4/README.md#formatLocale) - define a custom locale.
- [d3.formatDefaultLocale](https://github.com/d3/d3-format/blob/v1.4.4/README.md#formatDefaultLocale) - define the default locale.
- [_locale_.format](https://github.com/d3/d3-format/blob/v1.4.4/README.md#locale_format) - create a number format.
- [_locale_.formatPrefix](https://github.com/d3/d3-format/blob/v1.4.4/README.md#locale_formatPrefix) - create a SI-prefix number format.
- [d3.precisionFixed](https://github.com/d3/d3-format/blob/v1.4.4/README.md#precisionFixed) - compute decimal precision for fixed-point notation.
- [d3.precisionPrefix](https://github.com/d3/d3-format/blob/v1.4.4/README.md#precisionPrefix) - compute decimal precision for SI-prefix notation.
- [d3.precisionRound](https://github.com/d3/d3-format/blob/v1.4.4/README.md#precisionRound) - compute significant digits for rounded notation.

## [Geographies (d3-geo)](https://github.com/d3/d3-geo/tree/v1.12.0)

Geographic projections, shapes and math.

### [Paths](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#paths)

- [d3.geoPath](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoPath) - create a new geographic path generator.
- [_path_](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#_path) - project and render the specified feature.
- [_path_.area](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#path_area) - compute the projected planar area of a given feature.
- [_path_.bounds](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#path_bounds) - compute the projected planar bounding box of a given feature.
- [_path_.centroid](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#path_centroid) - compute the projected planar centroid of a given feature.
- [_path_.measure](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#path_measure) - compute the projected planar length of a given feature.
- [_path_.projection](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#path_projection) - set the geographic projection.
- [_path_.context](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#path_context) - set the render context.
- [_path_.pointRadius](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#path_pointRadius) - set the radius to display point features.

### [Projections](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projections)

- [_projection_](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#_projection) - project the specified point from the sphere to the plane.
- [_projection_.invert](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_invert) - unproject the specified point from the plane to the sphere.
- [_projection_.stream](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_stream) - wrap the specified stream to project geometry.
- [_projection_.clipAngle](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_clipAngle) - set the radius of the clip circle.
- [_projection_.clipExtent](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_clipExtent) - set the viewport clip extent, in pixels.
- [_projection_.angle](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_angle) - set the post-projection rotation.
- [_projection_.reflectX](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_reflectX) - reflect the _x_-dimension.
- [_projection_.reflectY](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_reflectY) - reflect the _y_-dimension.
- [_projection_.scale](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_scale) - set the scale factor.
- [_projection_.translate](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_translate) - set the translation offset.
- [_projection_.fitExtent](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_fitExtent) - set the scale and translate to fit a GeoJSON object.
- [_projection_.fitSize](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_fitSize) - set the scale and translate to fit a GeoJSON object.
- [_projection_.fitWidth](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_fitWidth) - set the scale and translate to fit a GeoJSON object.
- [_projection_.fitHeight](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_fitHeight) - set the scale and translate to fit a GeoJSON object.
- [_projection_.center](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_center) - set the center point.
- [_projection_.rotate](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_rotate) - set the three-axis spherical rotation angles.
- [_projection_.precision](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection_precision) - set the precision threshold for adaptive sampling.
- [_projection_.preclip](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection.preclip) - set the spherical clipping stream transform.
- [_projection_.postclip](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#projection.postclip) - set the planar clipping stream transform.
- [d3.geoClipAntimeridian](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoClipAntimeridian) - cuts spherical geometries that cross the antimeridian.
- [d3.geoClipCircle](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoClipCircle) - clips spherical geometries to a small circle.
- [d3.geoClipRectangle](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoClipRectangle) - clips planar geometries to a rectangular viewport.
- [d3.geoAlbers](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoAlbers) - the Albers equal-area conic projection.
- [d3.geoAlbersUsa](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoAlbersUsa) - a composite Albers projection for the United States.
- [d3.geoAzimuthalEqualArea](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoAzimuthalEqualArea) - the azimuthal equal-area projection.
- [d3.geoAzimuthalEquidistant](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoAzimuthalEquidistant) - the azimuthal equidistant projection.
- [d3.geoConicConformal](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoConicConformal) - the conic conformal projection.
- [d3.geoConicEqualArea](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoConicEqualArea) - the conic equal-area (Albers) projection.
- [d3.geoConicEquidistant](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoConicEquidistant) - the conic equidistant projection.
- [_conic_.parallels](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#conic_parallels) - set the two standard parallels.
- [d3.geoEqualEarth](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoEqualEarth) - the Equal Earth projection.
- [d3.geoEquirectangular](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoEquirectangular) - the equirectangular (plate carreé) projection.
- [d3.geoGnomonic](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoGnomonic) - the gnomonic projection.
- [d3.geoMercator](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoMercator) - the spherical Mercator projection.
- [d3.geoOrthographic](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoOrthographic) - the azimuthal orthographic projection.
- [d3.geoStereographic](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoStereographic) - the azimuthal stereographic projection.
- [d3.geoTransverseMercator](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoTransverseMercator) - the transverse spherical Mercator projection.
- [_project_](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#_project) - project the specified point from the sphere to the plane.
- [_project_.invert](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#project_invert) - unproject the specified point from the plane to the sphere.
- [d3.geoProjection](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoProjection) - create a custom projection.
- [d3.geoProjectionMutator](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoProjectionMutator) - create a custom configurable projection.
- [d3.geoAzimuthalEqualAreaRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoAzimuthalEqualAreaRaw) - the raw azimuthal equal-area projection.
- [d3.geoAzimuthalEquidistantRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoAzimuthalEquidistantRaw) - the raw azimuthal equidistant projection.
- [d3.geoConicConformalRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoConicConformalRaw) - the raw conic conformal projection.
- [d3.geoConicEqualAreaRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoConicEqualAreaRaw) - the raw conic equal-area (Albers) projection.
- [d3.geoConicEquidistantRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoConicEquidistantRaw) - the raw conic equidistant projection.
- [d3.geoEquirectangularRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoEquirectangularRaw) - the raw equirectangular (plate carreé) projection.
- [d3.geoGnomonicRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoGnomonicRaw) - the raw gnomonic projection.
- [d3.geoMercatorRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoMercatorRaw) - the raw Mercator projection.
- [d3.geoOrthographicRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoOrthographicRaw) - the raw azimuthal orthographic projection.
- [d3.geoStereographicRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoStereographicRaw) - the raw azimuthal stereographic projection.
- [d3.geoTransverseMercatorRaw](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoTransverseMercatorRaw) - the raw transverse spherical Mercator projection.

### [Spherical Math](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#spherical-math)

- [d3.geoArea](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoArea) - compute the spherical area of a given feature.
- [d3.geoBounds](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoBounds) - compute the latitude-longitude bounding box for a given feature.
- [d3.geoCentroid](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoCentroid) - compute the spherical centroid of a given feature.
- [d3.geoContains](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoContains) - test whether a point is inside a given feature.
- [d3.geoDistance](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoDistance) - compute the great-arc distance between two points.
- [d3.geoLength](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoLength) - compute the length of a line string or the perimeter of a polygon.
- [d3.geoInterpolate](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoInterpolate) - interpolate between two points along a great arc.
- [d3.geoRotation](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoRotation) - create a rotation function for the specified angles.
- [_rotation_](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#_rotation) - rotate the given point around the sphere.
- [_rotation_.invert](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#rotation_invert) - unrotate the given point around the sphere.

### [Spherical Shapes](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#spherical-shapes)

- [d3.geoCircle](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoCircle) - create a circle generator.
- [_circle_](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#_circle) - generate a piecewise circle as a Polygon.
- [_circle_.center](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#circle_center) - specify the circle center in latitude and longitude.
- [_circle_.radius](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#circle_radius) - specify the angular radius in degrees.
- [_circle_.precision](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#circle_precision) - specify the precision of the piecewise circle.
- [d3.geoGraticule](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoGraticule) - create a graticule generator.
- [_graticule_](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#_graticule) - generate a MultiLineString of meridians and parallels.
- [_graticule_.lines](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#graticule_lines) - generate an array of LineStrings of meridians and parallels.
- [_graticule_.outline](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#graticule_outline) - generate a Polygon of the graticule’s extent.
- [_graticule_.extent](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#graticule_extent) - get or set the major & minor extents.
- [_graticule_.extentMajor](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#graticule_extentMajor) - get or set the major extent.
- [_graticule_.extentMinor](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#graticule_extentMinor) - get or set the minor extent.
- [_graticule_.step](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#graticule_step) - get or set the major & minor step intervals.
- [_graticule_.stepMajor](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#graticule_stepMajor) - get or set the major step intervals.
- [_graticule_.stepMinor](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#graticule_stepMinor) - get or set the minor step intervals.
- [_graticule_.precision](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#graticule_precision) - get or set the latitudinal precision.
- [d3.geoGraticule10](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoGraticule10) - generate the default 10° global graticule.

### [Streams](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#streams)

- [d3.geoStream](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoStream) - convert a GeoJSON object to a geometry stream.
- [_stream_.point](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#stream_point) - indicates a point with the specified coordinates.
- [_stream_.lineStart](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#stream_lineStart) - indicates the start of a line or ring.
- [_stream_.lineEnd](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#stream_lineEnd) - indicates the end of a line or ring.
- [_stream_.polygonStart](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#stream_polygonStart) - indicates the start of a polygon.
- [_stream_.polygonEnd](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#stream_polygonEnd) - indicates the end of a polygon.
- [_stream_.sphere](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#stream_sphere) - indicates the sphere.

### [Transforms](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#transforms)

- [d3.geoIdentity](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoIdentity) - scale, translate or clip planar geometry.
- [d3.geoTransform](https://github.com/d3/d3-geo/blob/v1.12.0/README.md#geoTransform) - define a custom geometry transform.

## [Hierarchies (d3-hierarchy)](https://github.com/d3/d3-hierarchy/tree/v1.1.9)

Layout algorithms for visualizing hierarchical data.

- [d3.hierarchy](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#hierarchy) - constructs a root node from hierarchical data.
- [_node_.ancestors](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_ancestors) - generate an array of ancestors.
- [_node_.descendants](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_descendants) - generate an array of descendants.
- [_node_.leaves](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_leaves) - generate an array of leaves.
- [_node_.path](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_path) - generate the shortest path to another node.
- [_node_.links](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_links) - generate an array of links.
- [_node_.sum](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_sum) - evaluate and aggregate quantitative values.
- [_node_.sort](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_sort) - sort all descendant siblings.
- [_node_.count](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_count) - count the number of leaves.
- [_node_.each](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_each) - breadth-first traversal.
- [_node_.eachAfter](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_eachAfter) - post-order traversal.
- [_node_.eachBefore](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_eachBefore) - pre-order traversal.
- [_node_.copy](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#node_copy) - copy a hierarchy.
- [d3.stratify](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#stratify) - create a new stratify operator.
- [_stratify_](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#_stratify) - construct a root node from tabular data.
- [_stratify_.id](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#stratify_id) - set the node id accessor.
- [_stratify_.parentId](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#stratify_parentId) - set the parent node id accessor.
- [d3.cluster](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#cluster) - create a new cluster (dendrogram) layout.
- [_cluster_](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#_cluster) - layout the specified hierarchy in a dendrogram.
- [_cluster_.size](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#cluster_size) - set the layout size.
- [_cluster_.nodeSize](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#cluster_nodeSize) - set the node size.
- [_cluster_.separation](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#cluster_separation) - set the separation between leaves.
- [d3.tree](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#tree) - create a new tidy tree layout.
- [_tree_](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#_tree) - layout the specified hierarchy in a tidy tree.
- [_tree_.size](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#tree_size) - set the layout size.
- [_tree_.nodeSize](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#tree_nodeSize) - set the node size.
- [_tree_.separation](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#tree_separation) - set the separation between nodes.
- [d3.treemap](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap) - create a new treemap layout.
- [_treemap_](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#_treemap) - layout the specified hierarchy as a treemap.
- [_treemap_.tile](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap_tile) - set the tiling method.
- [_treemap_.size](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap_size) - set the layout size.
- [_treemap_.round](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap_round) - set whether the output coordinates are rounded.
- [_treemap_.padding](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap_padding) - set the padding.
- [_treemap_.paddingInner](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap_paddingInner) - set the padding between siblings.
- [_treemap_.paddingOuter](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap_paddingOuter) - set the padding between parent and children.
- [_treemap_.paddingTop](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap_paddingTop) - set the padding between the parent’s top edge and children.
- [_treemap_.paddingRight](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap_paddingRight) - set the padding between the parent’s right edge and children.
- [_treemap_.paddingBottom](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap_paddingBottom) - set the padding between the parent’s bottom edge and children.
- [_treemap_.paddingLeft](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemap_paddingLeft) - set the padding between the parent’s left edge and children.
- [d3.treemapBinary](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemapBinary) - tile using a balanced binary tree.
- [d3.treemapDice](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemapDice) - tile into a horizontal row.
- [d3.treemapSlice](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemapSlice) - tile into a vertical column.
- [d3.treemapSliceDice](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemapSliceDice) - alternate between slicing and dicing.
- [d3.treemapSquarify](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemapSquarify) - tile using squarified rows per Bruls _et. al._
- [d3.treemapResquarify](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#treemapResquarify) - like d3.treemapSquarify, but performs stable updates.
- [_squarify_.ratio](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#squarify_ratio) - set the desired rectangle aspect ratio.
- [d3.partition](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#partition) - create a new partition (icicle or sunburst) layout.
- [_partition_](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#_partition) - layout the specified hierarchy as a partition diagram.
- [_partition_.size](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#partition_size) - set the layout size.
- [_partition_.round](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#partition_round) - set whether the output coordinates are rounded.
- [_partition_.padding](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#partition_padding) - set the padding.
- [d3.pack](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#pack) - create a new circle-packing layout.
- [_pack_](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#_pack) - layout the specified hierarchy using circle-packing.
- [_pack_.radius](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#pack_radius) - set the radius accessor.
- [_pack_.size](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#pack_size) - set the layout size.
- [_pack_.padding](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#pack_padding) - set the padding.
- [d3.packSiblings](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#packSiblings) - pack the specified array of circles.
- [d3.packEnclose](https://github.com/d3/d3-hierarchy/blob/v1.1.9/README.md#packEnclose) - enclose the specified array of circles.

## [Interpolators (d3-interpolate)](https://github.com/d3/d3-interpolate/tree/v1.4.0)

Interpolate numbers, colors, strings, arrays, objects, whatever!

- [d3.interpolate](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolate) - interpolate arbitrary values.
- [d3.interpolateArray](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateArray) - interpolate arrays of arbitrary values.
- [d3.interpolateDate](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateDate) - interpolate dates.
- [d3.interpolateNumber](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateNumber) - interpolate numbers.
- [d3.interpolateNumberArray](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateNumberArray) - interpolate arrays of numbers.
- [d3.interpolateObject](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateObject) - interpolate arbitrary objects.
- [d3.interpolateRound](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateRound) - interpolate integers.
- [d3.interpolateString](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateString) - interpolate strings with embedded numbers.
- [d3.interpolateTransformCss](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateTransformCss) - interpolate 2D CSS transforms.
- [d3.interpolateTransformSvg](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateTransformSvg) - interpolate 2D SVG transforms.
- [d3.interpolateZoom](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateZoom) - zoom and pan between two views.
- [d3.interpolateRgb](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateRgb) - interpolate RGB colors.
- [d3.interpolateRgbBasis](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateRgbBasis) - generate a B-spline through a set of colors.
- [d3.interpolateRgbBasisClosed](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateRgbBasisClosed) - generate a closed B-spline through a set of colors.
- [d3.interpolateHsl](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateHsl) - interpolate HSL colors.
- [d3.interpolateHslLong](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateHslLong) - interpolate HSL colors, the long way.
- [d3.interpolateLab](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateLab) - interpolate Lab colors.
- [d3.interpolateHcl](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateHcl) - interpolate HCL colors.
- [d3.interpolateHclLong](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateHclLong) - interpolate HCL colors, the long way.
- [d3.interpolateCubehelix](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateCubehelix) - interpolate Cubehelix colors.
- [d3.interpolateCubehelixLong](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateCubehelixLong) - interpolate Cubehelix colors, the long way.
- [_interpolate_.gamma](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolate_gamma) - apply gamma correction during interpolation.
- [d3.interpolateHue](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateHue) - interpolate a hue angle.
- [d3.interpolateDiscrete](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateDiscrete) - generate a discrete interpolator from a set of values.
- [d3.interpolateBasis](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateBasis) - generate a B-spline through a set of values.
- [d3.interpolateBasisClosed](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#interpolateBasisClosed) - generate a closed B-spline through a set of values.
- [d3.piecewise](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#piecewise) - generate a piecewise linear interpolator from a set of values.
- [d3.quantize](https://github.com/d3/d3-interpolate/blob/v1.4.0/README.md#quantize) - generate uniformly-spaced samples from an interpolator.

## [Paths (d3-path)](https://github.com/d3/d3-path/tree/v1.0.9)

Serialize Canvas path commands to SVG.

- [d3.path](https://github.com/d3/d3-path/blob/v1.0.9/README.md#path) - create a new path serializer.
- [_path_.moveTo](https://github.com/d3/d3-path/blob/v1.0.9/README.md#path_moveTo) - move to the given point.
- [_path_.closePath](https://github.com/d3/d3-path/blob/v1.0.9/README.md#path_closePath) - close the current subpath.
- [_path_.lineTo](https://github.com/d3/d3-path/blob/v1.0.9/README.md#path_lineTo) - draw a straight line segment.
- [_path_.quadraticCurveTo](https://github.com/d3/d3-path/blob/v1.0.9/README.md#path_quadraticCurveTo) - draw a quadratic Bézier segment.
- [_path_.bezierCurveTo](https://github.com/d3/d3-path/blob/v1.0.9/README.md#path_bezierCurveTo) - draw a cubic Bézier segment.
- [_path_.arcTo](https://github.com/d3/d3-path/blob/v1.0.9/README.md#path_arcTo) - draw a circular arc segment.
- [_path_.arc](https://github.com/d3/d3-path/blob/v1.0.9/README.md#path_arc) - draw a circular arc segment.
- [_path_.rect](https://github.com/d3/d3-path/blob/v1.0.9/README.md#path_rect) - draw a rectangle.
- [_path_.toString](https://github.com/d3/d3-path/blob/v1.0.9/README.md#path_toString) - serialize to an SVG path data string.

## [Polygons (d3-polygon)](https://github.com/d3/d3-polygon/tree/v1.0.6)

Geometric operations for two-dimensional polygons.

- [d3.polygonArea](https://github.com/d3/d3-polygon/blob/v1.0.6/README.md#polygonArea) - compute the area of the given polygon.
- [d3.polygonCentroid](https://github.com/d3/d3-polygon/blob/v1.0.6/README.md#polygonCentroid) - compute the centroid of the given polygon.
- [d3.polygonHull](https://github.com/d3/d3-polygon/blob/v1.0.6/README.md#polygonHull) - compute the convex hull of the given points.
- [d3.polygonContains](https://github.com/d3/d3-polygon/blob/v1.0.6/README.md#polygonContains) - test whether a point is inside a polygon.
- [d3.polygonLength](https://github.com/d3/d3-polygon/blob/v1.0.6/README.md#polygonLength) - compute the length of the given polygon’s perimeter.

## [Quadtrees (d3-quadtree)](https://github.com/d3/d3-quadtree/tree/v1.0.7)

Two-dimensional recursive spatial subdivision.

- [d3.quadtree](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree) - create a new, empty quadtree.
- [_quadtree_.x](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_x) - set the _x_ accessor.
- [_quadtree_.y](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_y) - set the _y_ accessor.
- [_quadtree_.add](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_add) - add a datum to a quadtree.
- [_quadtree_.addAll](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_addAll) - add an array of data to a quadtree.
- [_quadtree_.remove](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_remove) - remove a datum from a quadtree.
- [_quadtree_.removeAll](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_removeAll) - remove an array of data from a quadtree.
- [_quadtree_.copy](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_copy) - create a copy of a quadtree.
- [_quadtree_.root](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_root) - get the quadtree’s root node.
- [_quadtree_.data](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_data) - retrieve all data from the quadtree.
- [_quadtree_.size](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_size) - count the number of data in the quadtree.
- [_quadtree_.find](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_find) - quickly find the closest datum in a quadtree.
- [_quadtree_.visit](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_visit) - selectively visit nodes in a quadtree.
- [_quadtree_.visitAfter](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_visitAfter) - visit all nodes in a quadtree.
- [_quadtree_.cover](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_cover) - extend the quadtree to cover a point.
- [_quadtree_.extent](https://github.com/d3/d3-quadtree/blob/v1.0.7/README.md#quadtree_extent) - extend the quadtree to cover an extent.

## [Random Numbers (d3-random)](https://github.com/d3/d3-random/tree/v1.1.2)

Generate random numbers from various distributions.

- [d3.randomUniform](https://github.com/d3/d3-random/blob/v1.1.2/README.md#randomUniform) - from a uniform distribution.
- [d3.randomNormal](https://github.com/d3/d3-random/blob/v1.1.2/README.md#randomNormal) - from a normal distribution.
- [d3.randomLogNormal](https://github.com/d3/d3-random/blob/v1.1.2/README.md#randomLogNormal) - from a log-normal distribution.
- [d3.randomBates](https://github.com/d3/d3-random/blob/v1.1.2/README.md#randomBates) - from a Bates distribution.
- [d3.randomIrwinHall](https://github.com/d3/d3-random/blob/v1.1.2/README.md#randomIrwinHall) - from an Irwin–Hall distribution.
- [d3.randomExponential](https://github.com/d3/d3-random/blob/v1.1.2/README.md#randomExponential) - from an exponential distribution.
- [_random_.source](https://github.com/d3/d3-random/blob/v1.1.2/README.md#random_source) - set the source of randomness.

## [Scales (d3-scale)](https://github.com/d3/d3-scale/tree/v2.2.2)

Encodings that map abstract data to visual representation.

### [Continuous Scales](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous-scales)

Map a continuous, quantitative domain to a continuous range.

- [_continuous_](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#_continuous) - compute the range value corresponding to a given domain value.
- [_continuous_.invert](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_invert) - compute the domain value corresponding to a given range value.
- [_continuous_.domain](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_domain) - set the input domain.
- [_continuous_.range](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_range) - set the output range.
- [_continuous_.rangeRound](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_rangeRound) - set the output range and enable rounding.
- [_continuous_.clamp](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_clamp) - enable clamping to the domain or range.
- [_continuous_.interpolate](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_interpolate) - set the output interpolator.
- [_continuous_.unknown](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_unknown) - set the output value for unknown inputs.
- [_continuous_.ticks](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_ticks) - compute representative values from the domain.
- [_continuous_.tickFormat](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_tickFormat) - format ticks for human consumption.
- [_continuous_.nice](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_nice) - extend the domain to nice round numbers.
- [_continuous_.copy](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#continuous_copy) - create a copy of this scale.
- [d3.scaleLinear](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleLinear) - create a quantitative linear scale.
- [d3.scalePow](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scalePow) - create a quantitative power scale.
- [_pow_](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#_pow) - compute the range value corresponding to a given domain value.
- [_pow_.invert](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_invert) - compute the domain value corresponding to a given range value.
- [_pow_.exponent](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_exponent) - set the power exponent.
- [_pow_.domain](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_domain) - set the input domain.
- [_pow_.range](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_range) - set the output range.
- [_pow_.rangeRound](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_rangeRound) - set the output range and enable rounding.
- [_pow_.clamp](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_clamp) - enable clamping to the domain or range.
- [_pow_.interpolate](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_interpolate) - set the output interpolator.
- [_pow_.ticks](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_ticks) - compute representative values from the domain.
- [_pow_.tickFormat](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_tickFormat) - format ticks for human consumption.
- [_pow_.nice](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_nice) - extend the domain to nice round numbers.
- [_pow_.copy](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#pow_copy) - create a copy of this scale.
- [d3.scaleSqrt](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleSqrt) - create a quantitative power scale with exponent 0.5.
- [d3.scaleLog](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleLog) - create a quantitative logarithmic scale.
- [_log_](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#_log) - compute the range value corresponding to a given domain value.
- [_log_.invert](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_invert) - compute the domain value corresponding to a given range value.
- [_log_.base](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_base) - set the logarithm base.
- [_log_.domain](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_domain) - set the input domain.
- [_log_.range](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_range) - set the output range.
- [_log_.rangeRound](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_rangeRound) - set the output range and enable rounding.
- [_log_.clamp](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_clamp) - enable clamping to the domain or range.
- [_log_.interpolate](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_interpolate) - set the output interpolator.
- [_log_.ticks](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_ticks) - compute representative values from the domain.
- [_log_.tickFormat](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_tickFormat) - format ticks for human consumption.
- [_log_.nice](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_nice) - extend the domain to nice round numbers.
- [_log_.copy](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#log_copy) - create a copy of this scale.
- [d3.scaleSymlog](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleSymlog) - create a symmetric logarithmic scale.
- [d3.scaleIdentity](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#identity) - create a quantitative identity scale.
- [d3.scaleTime](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleTime) - create a linear scale for time.
- [_time_](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#_time) - compute the range value corresponding to a given domain value.
- [_time_.invert](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#time_invert) - compute the domain value corresponding to a given range value.
- [_time_.domain](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#time_domain) - set the input domain.
- [_time_.range](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#time_range) - set the output range.
- [_time_.rangeRound](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#time_rangeRound) - set the output range and enable rounding.
- [_time_.clamp](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#time_clamp) - enable clamping to the domain or range.
- [_time_.interpolate](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#time_interpolate) - set the output interpolator.
- [_time_.ticks](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#time_ticks) - compute representative values from the domain.
- [_time_.tickFormat](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#time_tickFormat) - format ticks for human consumption.
- [_time_.nice](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#time_nice) - extend the domain to nice round times.
- [_time_.copy](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#time_copy) - create a copy of this scale.
- [d3.scaleUtc](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleUtc) - create a linear scale for UTC.
- [d3.tickFormat](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#tickFormat) - format ticks for human consumption.

### [Sequential Scales](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#sequential-scales)

Map a continuous, quantitative domain to a continuous, fixed interpolator.

- [d3.scaleSequential](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleSequential) - create a sequential scale.
- [_sequential_.interpolator](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#sequential_interpolator) - set the scale’s output interpolator.
- [d3.scaleSequentialLog](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleSequentialLog) -
- [d3.scaleSequentialPow](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleSequentialPow) -
- [d3.scaleSequentialSqrt](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleSequentialSqrt) -
- [d3.scaleSequentialSymlog](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleSequentialSymlog) -
- [d3.scaleSequentialQuantile](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleSequentialQuantile) -

### [Diverging Scales](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#diverging-scales)

Map a continuous, quantitative domain to a continuous, fixed interpolator.

- [d3.scaleDiverging](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleDiverging) - create a diverging scale.
- [_diverging_.interpolator](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#diverging_interpolator) - set the scale’s output interpolator.
- [d3.scaleDivergingLog](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleDivergingLog) -
- [d3.scaleDivergingPow](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleDivergingPow) -
- [d3.scaleDivergingSqrt](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleDivergingSqrt) -
- [d3.scaleDivergingSymlog](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleDivergingSymlog) -

### [Quantize Scales](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantize-scales)

Map a continuous, quantitative domain to a discrete range.

- [d3.scaleQuantize](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleQuantize) - create a uniform quantizing linear scale.
- [_quantize_](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#_quantize) - compute the range value corresponding to a given domain value.
- [_quantize_.invertExtent](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantize_invertExtent) - compute the domain values corresponding to a given range value.
- [_quantize_.domain](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantize_domain) - set the input domain.
- [_quantize_.range](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantize_range) - set the output range.
- [_quantize_.nice](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantize_nice) - extend the domain to nice round numbers.
- [_quantize_.ticks](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantize_ticks) - compute representative values from the domain.
- [_quantize_.tickFormat](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantize_tickFormat) - format ticks for human consumption.
- [_quantize_.copy](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantize_copy) - create a copy of this scale.
- [d3.scaleQuantile](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleQuantile) - create a quantile quantizing linear scale.
- [_quantile_](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#_quantile) - compute the range value corresponding to a given domain value.
- [_quantile_.invertExtent](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantile_invertExtent) - compute the domain values corresponding to a given range value.
- [_quantile_.domain](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantile_domain) - set the input domain.
- [_quantile_.range](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantile_range) - set the output range.
- [_quantile_.quantiles](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantile_quantiles) - get the quantile thresholds.
- [_quantile_.copy](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#quantile_copy) - create a copy of this scale.
- [d3.scaleThreshold](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleThreshold) - create an arbitrary quantizing linear scale.
- [_threshold_](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#_threshold) - compute the range value corresponding to a given domain value.
- [_threshold_.invertExtent](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#threshold_invertExtent) - compute the domain values corresponding to a given range value.
- [_threshold_.domain](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#threshold_domain) - set the input domain.
- [_threshold_.range](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#threshold_range) - set the output range.
- [_threshold_.copy](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#threshold_copy) - create a copy of this scale.

### [Ordinal Scales](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#ordinal-scales)

Map a discrete domain to a discrete range.

- [d3.scaleOrdinal](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleOrdinal) - create an ordinal scale.
- [_ordinal_](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#_ordinal) - compute the range value corresponding to a given domain value.
- [_ordinal_.domain](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#ordinal_domain) - set the input domain.
- [_ordinal_.range](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#ordinal_range) - set the output range.
- [_ordinal_.unknown](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#ordinal_unknown) - set the output value for unknown inputs.
- [_ordinal_.copy](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#ordinal_copy) - create a copy of this scale.
- [d3.scaleImplicit](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleImplicit) - a special unknown value for implicit domains.
- [d3.scaleBand](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scaleBand) - create an ordinal band scale.
- [_band_](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#_band) - compute the band start corresponding to a given domain value.
- [_band_.domain](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_domain) - set the input domain.
- [_band_.range](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_range) - set the output range.
- [_band_.rangeRound](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_rangeRound) - set the output range and enable rounding.
- [_band_.round](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_round) - enable rounding.
- [_band_.paddingInner](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_paddingInner) - set padding between bands.
- [_band_.paddingOuter](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_paddingOuter) - set padding outside the first and last bands.
- [_band_.padding](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_padding) - set padding outside and between bands.
- [_band_.align](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_align) - set band alignment, if there is extra space.
- [_band_.bandwidth](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_bandwidth) - get the width of each band.
- [_band_.step](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_step) - get the distance between the starts of adjacent bands.
- [_band_.copy](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#band_copy) - create a copy of this scale.
- [d3.scalePoint](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#scalePoint) - create an ordinal point scale.
- [_point_](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#_point) - compute the point corresponding to a given domain value.
- [_point_.domain](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#point_domain) - set the input domain.
- [_point_.range](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#point_range) - set the output range.
- [_point_.rangeRound](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#point_rangeRound) - set the output range and enable rounding.
- [_point_.round](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#point_round) - enable rounding.
- [_point_.padding](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#point_padding) - set padding outside the first and last point.
- [_point_.align](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#point_align) - set point alignment, if there is extra space.
- [_point_.bandwidth](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#point_bandwidth) - returns zero.
- [_point_.step](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#point_step) - get the distance between the starts of adjacent points.
- [_point_.copy](https://github.com/d3/d3-scale/blob/v2.2.2/README.md#point_copy) - create a copy of this scale.

## [Selections (d3-selection)](https://github.com/d3/d3-selection/tree/v1.4.1)

Transform the DOM by selecting elements and joining to data.

### [Selecting Elements](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selecting-elements)

- [d3.selection](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection) - select the root document element.
- [d3.select](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#select) - select an element from the document.
- [d3.selectAll](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selectAll) - select multiple elements from the document.
- [_selection_.select](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_select) - select a descendant element for each selected element.
- [_selection_.selectAll](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_selectAll) - select multiple descendants for each selected element.
- [_selection_.filter](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_filter) - filter elements based on data.
- [_selection_.merge](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_merge) - merge this selection with another.
- [d3.matcher](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#matcher) - test whether an element matches a selector.
- [d3.selector](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selector) - select an element.
- [d3.selectorAll](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selectorAll) - select elements.
- [d3.window](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#window) - get a node’s owner window.
- [d3.style](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#style) - get a node’s current style value.

### [Modifying Elements](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#modifying-elements)

- [_selection_.attr](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_attr) - get or set an attribute.
- [_selection_.classed](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_classed) - get, add or remove CSS classes.
- [_selection_.style](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_style) - get or set a style property.
- [_selection_.property](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_property) - get or set a (raw) property.
- [_selection_.text](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_text) - get or set the text content.
- [_selection_.html](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_html) - get or set the inner HTML.
- [_selection_.append](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_append) - create, append and select new elements.
- [_selection_.insert](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_insert) - create, insert and select new elements.
- [_selection_.remove](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_remove) - remove elements from the document.
- [_selection_.clone](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_clone) - insert clones of selected elements.
- [_selection_.sort](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_sort) - sort elements in the document based on data.
- [_selection_.order](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_order) - reorders elements in the document to match the selection.
- [_selection_.raise](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_raise) - reorders each element as the last child of its parent.
- [_selection_.lower](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_lower) - reorders each element as the first child of its parent.
- [d3.create](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#create) - create and select a detached element.
- [d3.creator](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#creator) - create an element by name.

### [Joining Data](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#joining-data)

- [_selection_.data](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_data) - bind elements to data.
- [_selection_.join](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_join) - enter, update or exit elements based on data.
- [_selection_.enter](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_enter) - get the enter selection (data missing elements).
- [_selection_.exit](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_exit) - get the exit selection (elements missing data).
- [_selection_.datum](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_datum) - get or set element data (without joining).

### [Handling Events](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#handling-events)

- [_selection_.on](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_on) - add or remove event listeners.
- [_selection_.dispatch](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_dispatch) - dispatch a custom event.
- [d3.event](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#event) - the current user event, during interaction.
- [d3.customEvent](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#customEvent) - temporarily define a custom event.
- [d3.mouse](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#mouse) - get the mouse position relative to a given container.
- [d3.touch](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#touch) - get a touch position relative to a given container.
- [d3.touches](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#touches) - get the touch positions relative to a given container.
- [d3.clientPoint](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#clientPoint) - get a position relative to a given container.

### [Control Flow](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#control-flow)

- [_selection_.each](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_each) - call a function for each element.
- [_selection_.call](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_call) - call a function with this selection.
- [_selection_.empty](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_empty) - returns true if this selection is empty.
- [_selection_.nodes](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_nodes) - returns an array of all selected elements.
- [_selection_.node](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_node) - returns the first (non-null) element.
- [_selection_.size](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_size) - returns the count of elements.

### [Local Variables](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#local-variables)

- [d3.local](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#local) - declares a new local variable.
- [_local_.set](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#local_set) - set a local variable’s value.
- [_local_.get](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#local_get) - get a local variable’s value.
- [_local_.remove](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#local_remove) - delete a local variable.
- [_local_.toString](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#local_toString) - get the property identifier of a local variable.

### [Namespaces](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#namespaces)

- [d3.namespace](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#namespace) - qualify a prefixed XML name, such as “xlink:href”.
- [d3.namespaces](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#namespaces) - the built-in XML namespaces.

## [Shapes (d3-shape)](https://github.com/d3/d3-shape/tree/v1.3.7)

Graphical primitives for visualization.

### [Arcs](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arcs)

Circular or annular sectors, as in a pie or donut chart.

- [d3.arc](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc) - create a new arc generator.
- [_arc_](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#_arc) - generate an arc for the given datum.
- [_arc_.centroid](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc_centroid) - compute an arc’s midpoint.
- [_arc_.innerRadius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc_innerRadius) - set the inner radius.
- [_arc_.outerRadius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc_outerRadius) - set the outer radius.
- [_arc_.cornerRadius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc_cornerRadius) - set the corner radius, for rounded corners.
- [_arc_.startAngle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc_startAngle) - set the start angle.
- [_arc_.endAngle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc_endAngle) - set the end angle.
- [_arc_.padAngle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc_padAngle) - set the angle between adjacent arcs, for padded arcs.
- [_arc_.padRadius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc_padRadius) - set the radius at which to linearize padding.
- [_arc_.context](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc_context) - set the rendering context.

### [Pies](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pies)

Compute the necessary angles to represent a tabular dataset as a pie or donut chart.

- [d3.pie](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pie) - create a new pie generator.
- [_pie_](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#_pie) - compute the arc angles for the given dataset.
- [_pie_.value](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pie_value) - set the value accessor.
- [_pie_.sort](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pie_sort) - set the sort order comparator.
- [_pie_.sortValues](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pie_sortValues) - set the sort order comparator.
- [_pie_.startAngle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pie_startAngle) - set the overall start angle.
- [_pie_.endAngle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pie_endAngle) - set the overall end angle.
- [_pie_.padAngle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pie_padAngle) - set the pad angle between adjacent arcs.

### [Lines](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#lines)

A spline or polyline, as in a line chart.

- [d3.line](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#line) - create a new line generator.
- [_line_](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#_line) - generate a line for the given dataset.
- [_line_.x](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#line_x) - set the _x_ accessor.
- [_line_.y](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#line_y) - set the _y_ accessor.
- [_line_.defined](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#line_defined) - set the defined accessor.
- [_line_.curve](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#line_curve) - set the curve interpolator.
- [_line_.context](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#line_context) - set the rendering context.
- [d3.lineRadial](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#lineRadial) - create a new radial line generator.
- [_lineRadial_](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#_lineRadial) - generate a line for the given dataset.
- [_lineRadial_.angle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#lineRadial_angle) - set the angle accessor.
- [_lineRadial_.radius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#lineRadial_radius) - set the radius accessor.
- [_lineRadial_.defined](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#lineRadial_defined) - set the defined accessor.
- [_lineRadial_.curve](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#lineRadial_curve) - set the curve interpolator.
- [_lineRadial_.context](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#lineRadial_context) - set the rendering context.

### [Areas](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#areas)

An area, defined by a bounding topline and baseline, as in an area chart.

- [d3.area](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area) - create a new area generator.
- [_area_](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#_area) - generate an area for the given dataset.
- [_area_.x](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_x) - set the _x0_ and _x1_ accessors.
- [_area_.x0](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_x0) - set the baseline _x_ accessor.
- [_area_.x1](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_x1) - set the topline _x_ accessor.
- [_area_.y](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_y) - set the _y0_ and _y1_ accessors.
- [_area_.y0](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_y0) - set the baseline _y_ accessor.
- [_area_.y1](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_y1) - set the topline _y_ accessor.
- [_area_.defined](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_defined) - set the defined accessor.
- [_area_.curve](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_curve) - set the curve interpolator.
- [_area_.context](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_context) - set the rendering context.
- [_area_.lineX0](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_lineX0) - derive a line for the left edge of an area.
- [_area_.lineX1](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_lineX1) - derive a line for the right edge of an area.
- [_area_.lineY0](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_lineY0) - derive a line for the top edge of an area.
- [_area_.lineY1](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_lineY1) - derive a line for the bottom edge of an area.
- [d3.radialArea](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialArea) - create a new radial area generator.
- [_radialArea_](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#_radialArea) - generate an area for the given dataset.
- [_radialArea_.angle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialArea_angle) - set the start and end angle accessors.
- [_radialArea_.startAngle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialArea_startAngle) - set the start angle accessor.
- [_radialArea_.endAngle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialArea_endAngle) - set the end angle accessor.
- [_radialArea_.radius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialArea_radius) - set the inner and outer radius accessors.
- [_radialArea_.innerRadius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialArea_innerRadius) - set the inner radius accessor.
- [_radialArea_.outerRadius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialArea_outerRadius) - set the outer radius accessor.
- [_radialArea_.defined](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialArea_defined) - set the defined accessor.
- [_radialArea_.curve](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialArea_curve) - set the curve interpolator.
- [_radialArea_.context](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialArea_context) - set the rendering context.
- [_radialArea_.lineStartAngle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_lineStartAngle) - derive a line for the start edge of an area.
- [_radialArea_.lineEndAngle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_lineEndAngle) - derive a line for the end edge of an area.
- [_radialArea_.lineInnerRadius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_lineInnerRadius) - derive a line for the inner edge of an area.
- [_radialArea_.lineOuterRadius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#area_lineOuterRadius) - derive a line for the outer edge of an area.

### [Curves](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curves)

Interpolate between points to produce a continuous shape.

- [d3.curveBasis](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveBasis) - a cubic basis spline, repeating the end points.
- [d3.curveBasisClosed](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveBasisClosed) - a closed cubic basis spline.
- [d3.curveBasisOpen](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveBasisOpen) - a cubic basis spline.
- [d3.curveBundle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveBundle) - a straightened cubic basis spline.
- [_bundle_.beta](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#bundle_beta) - set the bundle tension _beta_.
- [d3.curveCardinal](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveCardinal) - a cubic cardinal spline, with one-sided difference at each end.
- [d3.curveCardinalClosed](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveCardinalClosed) - a closed cubic cardinal spline.
- [d3.curveCardinalOpen](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveCardinalOpen) - a cubic cardinal spline.
- [_cardinal_.tension](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#cardinal_tension) - set the cardinal spline tension.
- [d3.curveCatmullRom](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveCatmullRom) - a cubic Catmull–Rom spline, with one-sided difference at each end.
- [d3.curveCatmullRomClosed](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveCatmullRomClosed) - a closed cubic Catmull–Rom spline.
- [d3.curveCatmullRomOpen](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveCatmullRomOpen) - a cubic Catmull–Rom spline.
- [_catmullRom_.alpha](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#catmullRom_alpha) - set the Catmull–Rom parameter _alpha_.
- [d3.curveLinear](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveLinear) - a polyline.
- [d3.curveLinearClosed](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveLinearClosed) - a closed polyline.
- [d3.curveMonotoneX](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveMonotoneX) - a cubic spline that, given monotonicity in _x_, preserves it in _y_.
- [d3.curveMonotoneY](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveMonotoneY) - a cubic spline that, given monotonicity in _y_, preserves it in _x_.
- [d3.curveNatural](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveNatural) - a natural cubic spline.
- [d3.curveStep](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveStep) - a piecewise constant function.
- [d3.curveStepAfter](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveStepAfter) - a piecewise constant function.
- [d3.curveStepBefore](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curveStepBefore) - a piecewise constant function.
- [_curve_.areaStart](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curve_areaStart) - start a new area segment.
- [_curve_.areaEnd](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curve_areaEnd) - end the current area segment.
- [_curve_.lineStart](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curve_lineStart) - start a new line segment.
- [_curve_.lineEnd](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curve_lineEnd) - end the current line segment.
- [_curve_.point](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#curve_point) - add a point to the current line segment.

### [Links](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#links)

A smooth cubic Bézier curve from a source to a target.

- [d3.linkVertical](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#linkVertical) - create a new vertical link generator.
- [d3.linkHorizontal](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#linkHorizontal) - create a new horizontal link generator.
- [_link_](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#_link) - generate a link.
- [_link_.source](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#link_source) - set the source accessor.
- [_link_.target](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#link_target) - set the target accessor.
- [_link_.x](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#link_x) - set the point _x_-accessor.
- [_link_.y](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#link_y) - set the point _y_-accessor.
- [_link_.context](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#link_context) - set the rendering context.
- [d3.linkRadial](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#linkRadial) - create a new radial link generator.
- [_radialLink_.angle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialLink_angle) - set the point _angle_ accessor.
- [_radialLink_.radius](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#radialLink_radius) - set the point _radius_ accessor.

### [Symbols](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbols)

A categorical shape encoding, as in a scatterplot.

- [d3.symbol](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbol) - create a new symbol generator.
- [_symbol_](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#_symbol) - generate a symbol for the given datum.
- [_symbol_.type](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbol_type) - set the symbol type.
- [_symbol_.size](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbol_size) - set the size of the symbol in square pixels.
- [_symbol_.context](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbol_context) - set the rendering context.
- [d3.symbols](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbols) - the array of built-in symbol types.
- [d3.symbolCircle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbolCircle) - a circle.
- [d3.symbolCross](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbolCross) - a Greek cross with arms of equal length.
- [d3.symbolDiamond](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbolDiamond) - a rhombus.
- [d3.symbolSquare](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbolSquare) - a square.
- [d3.symbolStar](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbolStar) - a pentagonal star (pentagram).
- [d3.symbolTriangle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbolTriangle) - an up-pointing triangle.
- [d3.symbolWye](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbolWye) - a Y shape.
- [d3.pointRadial](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pointRadial) -
- [_symbolType_.draw](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#symbolType_draw) - draw this symbol to the given context.

### [Stacks](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stacks)

Stack shapes, placing one adjacent to another, as in a stacked bar chart.

- [d3.stack](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stack) - create a new stack generator.
- [_stack_](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#_stack) - generate a stack for the given dataset.
- [_stack_.keys](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stack_keys) - set the keys accessor.
- [_stack_.value](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stack_value) - set the value accessor.
- [_stack_.order](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stack_order) - set the order accessor.
- [_stack_.offset](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stack_offset) - set the offset accessor.
- [d3.stackOrderAppearance](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOrderAppearance) - put the earliest series on bottom.
- [d3.stackOrderAscending](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOrderAscending) - put the smallest series on bottom.
- [d3.stackOrderDescending](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOrderDescending) - put the largest series on bottom.
- [d3.stackOrderInsideOut](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOrderInsideOut) - put earlier series in the middle.
- [d3.stackOrderNone](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOrderNone) - use the given series order.
- [d3.stackOrderReverse](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOrderReverse) - use the reverse of the given series order.
- [d3.stackOffsetExpand](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOffsetExpand) - normalize the baseline to zero and topline to one.
- [d3.stackOffsetDiverging](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOffsetDiverging) - positive above zero; negative below zero.
- [d3.stackOffsetNone](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOffsetNone) - apply a zero baseline.
- [d3.stackOffsetSilhouette](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOffsetSilhouette) - center the streamgraph around zero.
- [d3.stackOffsetWiggle](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#stackOffsetWiggle) - minimize streamgraph wiggling.

## [Time Formats (d3-time-format)](https://github.com/d3/d3-time-format/tree/v2.2.3)

Parse and format times, inspired by strptime and strftime.

- [d3.timeFormat](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#timeFormat) - alias for _locale_.format on the default locale.
- [d3.timeParse](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#timeParse) - alias for _locale_.parse on the default locale.
- [d3.utcFormat](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#utcFormat) - alias for _locale_.utcFormat on the default locale.
- [d3.utcParse](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#utcParse) - alias for _locale_.utcParse on the default locale.
- [d3.isoFormat](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#isoFormat) - an ISO 8601 UTC formatter.
- [d3.isoParse](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#isoParse) - an ISO 8601 UTC parser.
- [d3.timeFormatLocale](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#timeFormatLocale) - define a custom locale.
- [d3.timeFormatDefaultLocale](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#timeFormatDefaultLocale) - define the default locale.
- [_locale_.format](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#locale_format) - create a time formatter.
- [_locale_.parse](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#locale_parse) - create a time parser.
- [_locale_.utcFormat](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#locale_utcFormat) - create a UTC formatter.
- [_locale_.utcParse](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#locale_utcParse) - create a UTC parser.

## [Time Intervals (d3-time)](https://github.com/d3/d3-time/tree/v1.1.0)

A calculator for humanity’s peculiar conventions of time.

- [d3.timeInterval](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeInterval) - implement a new custom time interval.
- [_interval_](https://github.com/d3/d3-time/blob/v1.1.0/README.md#_interval) - alias for _interval_.floor.
- [_interval_.floor](https://github.com/d3/d3-time/blob/v1.1.0/README.md#interval_floor) - round down to the nearest boundary.
- [_interval_.round](https://github.com/d3/d3-time/blob/v1.1.0/README.md#interval_round) - round to the nearest boundary.
- [_interval_.ceil](https://github.com/d3/d3-time/blob/v1.1.0/README.md#interval_ceil) - round up to the nearest boundary.
- [_interval_.offset](https://github.com/d3/d3-time/blob/v1.1.0/README.md#interval_offset) - offset a date by some number of intervals.
- [_interval_.range](https://github.com/d3/d3-time/blob/v1.1.0/README.md#interval_range) - generate a range of dates at interval boundaries.
- [_interval_.filter](https://github.com/d3/d3-time/blob/v1.1.0/README.md#interval_filter) - create a filtered subset of this interval.
- [_interval_.every](https://github.com/d3/d3-time/blob/v1.1.0/README.md#interval_every) - create a filtered subset of this interval.
- [_interval_.count](https://github.com/d3/d3-time/blob/v1.1.0/README.md#interval_count) - count interval boundaries between two dates.
- [d3.timeMillisecond](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMillisecond), [d3.utcMillisecond](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMillisecond) - the millisecond interval.
- [d3.timeMilliseconds](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMillisecond), [d3.utcMilliseconds](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMillisecond) - aliases for millisecond.range.
- [d3.timeSecond](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSecond), [d3.utcSecond](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSecond) - the second interval.
- [d3.timeSeconds](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSecond), [d3.utcSeconds](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSecond) - aliases for second.range.
- [d3.timeMinute](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMinute), [d3.utcMinute](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMinute) - the minute interval.
- [d3.timeMinutes](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMinute), [d3.utcMinutes](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMinute) - aliases for minute.range.
- [d3.timeHour](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeHour), [d3.utcHour](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeHour) - the hour interval.
- [d3.timeHours](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeHour), [d3.utcHours](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeHour) - aliases for hour.range.
- [d3.timeDay](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeDay), [d3.utcDay](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeDay) - the day interval.
- [d3.timeDays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeDay), [d3.utcDays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeDay) - aliases for day.range.
- [d3.timeWeek](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeWeek), [d3.utcWeek](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeWeek) - aliases for sunday.
- [d3.timeWeeks](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeWeek), [d3.utcWeeks](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeWeek) - aliases for week.range.
- [d3.timeSunday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSunday), [d3.utcSunday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSunday) - the week interval, starting on Sunday.
- [d3.timeSundays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSunday), [d3.utcSundays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSunday) - aliases for sunday.range.
- [d3.timeMonday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMonday), [d3.utcMonday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMonday) - the week interval, starting on Monday.
- [d3.timeMondays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMonday), [d3.utcMondays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMonday) - aliases for monday.range.
- [d3.timeTuesday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeTuesday), [d3.utcTuesday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeTuesday) - the week interval, starting on Tuesday.
- [d3.timeTuesdays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeTuesday), [d3.utcTuesdays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeTuesday) - aliases for tuesday.range.
- [d3.timeWednesday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeWednesday), [d3.utcWednesday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeWednesday) - the week interval, starting on Wednesday.
- [d3.timeWednesdays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeWednesday), [d3.utcWednesdays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeWednesday) - aliases for wednesday.range.
- [d3.timeThursday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeThursday), [d3.utcThursday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeThursday) - the week interval, starting on Thursday.
- [d3.timeThursdays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeThursday), [d3.utcThursdays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeThursday) - aliases for thursday.range.
- [d3.timeFriday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeFriday), [d3.utcFriday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeFriday) - the week interval, starting on Friday.
- [d3.timeFridays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeFriday), [d3.utcFridays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeFriday) - aliases for friday.range.
- [d3.timeSaturday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSaturday), [d3.utcSaturday](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSaturday) - the week interval, starting on Saturday.
- [d3.timeSaturdays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSaturday), [d3.utcSaturdays](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeSaturday) - aliases for saturday.range.
- [d3.timeMonth](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMonth), [d3.utcMonth](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMonth) - the month interval.
- [d3.timeMonths](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMonth), [d3.utcMonths](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeMonth) - aliases for month.range.
- [d3.timeYear](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeYear), [d3.utcYear](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeYear) - the year interval.
- [d3.timeYears](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeYear), [d3.utcYears](https://github.com/d3/d3-time/blob/v1.1.0/README.md#timeYear) - aliases for year.range.

## [Timers (d3-timer)](https://github.com/d3/d3-timer/tree/v1.0.10)

An efficient queue for managing thousands of concurrent animations.

- [d3.now](https://github.com/d3/d3-timer/blob/v1.0.10/README.md#now) - get the current high-resolution time.
- [d3.timer](https://github.com/d3/d3-timer/blob/v1.0.10/README.md#timer) - schedule a new timer.
- [_timer_.restart](https://github.com/d3/d3-timer/blob/v1.0.10/README.md#timer_restart) - reset the timer’s start time and callback.
- [_timer_.stop](https://github.com/d3/d3-timer/blob/v1.0.10/README.md#timer_stop) - stop the timer.
- [d3.timerFlush](https://github.com/d3/d3-timer/blob/v1.0.10/README.md#timerFlush) - immediately execute any eligible timers.
- [d3.timeout](https://github.com/d3/d3-timer/blob/v1.0.10/README.md#timeout) - schedule a timer that stops on its first callback.
- [d3.interval](https://github.com/d3/d3-timer/blob/v1.0.10/README.md#interval) - schedule a timer that is called with a configurable period.

## [Transitions (d3-transition)](https://github.com/d3/d3-transition/tree/v1.3.2)

Animated transitions for [selections](#selections).

- [_selection_.transition](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#selection_transition) - schedule a transition for the selected elements.
- [_selection_.interrupt](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#selection_interrupt) - interrupt and cancel transitions on the selected elements.
- [d3.transition](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition) - schedule a transition on the root document element.
- [_transition_.select](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_select) - schedule a transition on the selected elements.
- [_transition_.selectAll](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_selectAll) - schedule a transition on the selected elements.
- [_transition_.filter](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_filter) - filter elements based on data.
- [_transition_.merge](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_merge) - merge this transition with another.
- [_transition_.selection](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_selection) - returns a selection for this transition.
- [_transition_.transition](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_transition) - schedule a new transition following this one.
- [_transition_.call](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_call) - call a function with this transition.
- [_transition_.nodes](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_nodes) - returns an array of all selected elements.
- [_transition_.node](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_node) - returns the first (non-null) element.
- [_transition_.size](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_size) - returns the count of elements.
- [_transition_.empty](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_empty) - returns true if this transition is empty.
- [_transition_.each](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_each) - call a function for each element.
- [_transition_.on](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_on) - add or remove transition event listeners.
- [_transition_.end](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_on) - await the end of a transition.
- [_transition_.attr](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_attr) - tween the given attribute using the default interpolator.
- [_transition_.attrTween](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_attrTween) - tween the given attribute using a custom interpolator.
- [_transition_.style](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_style) - tween the given style property using the default interpolator.
- [_transition_.styleTween](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_styleTween) - tween the given style property using a custom interpolator.
- [_transition_.text](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_text) - set the text content when the transition starts.
- [_transition_.textTween](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_textTween) - tween the text using a custom interpolator.
- [_transition_.remove](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_remove) - remove the selected elements when the transition ends.
- [_transition_.tween](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_tween) - run custom code during the transition.
- [_transition_.delay](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_delay) - specify per-element delay in milliseconds.
- [_transition_.duration](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_duration) - specify per-element duration in milliseconds.
- [_transition_.ease](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#transition_ease) - specify the easing function.
- [d3.active](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#active) - select the active transition for a given node.
- [d3.interrupt](https://github.com/d3/d3-transition/blob/v1.3.2/README.md#interrupt) - interrupt the active transition for a given node.

## [Voronoi Diagrams (d3-voronoi)](https://github.com/d3/d3-voronoi/tree/v1.1.4)

Compute the Voronoi diagram of a given set of points.

- [d3.voronoi](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#voronoi) - create a new Voronoi generator.
- [_voronoi_](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#_voronoi) - generate a new Voronoi diagram for the given points.
- [_voronoi_.polygons](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#voronoi_polygons) - compute the Voronoi polygons for the given points.
- [_voronoi_.triangles](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#voronoi_triangles) - compute the Delaunay triangles for the given points.
- [_voronoi_.links](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#voronoi_links) - compute the Delaunay links for the given points.
- [_voronoi_.x](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#voronoi_x) - set the _x_ accessor.
- [_voronoi_.y](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#voronoi_y) - set the _y_ accessor.
- [_voronoi_.extent](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#voronoi_extent) - set the observed extent of points.
- [_voronoi_.size](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#voronoi_size) - set the observed extent of points.
- [_diagram_.polygons](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#diagram_polygons) - compute the polygons for this Voronoi diagram.
- [_diagram_.triangles](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#diagram_triangles) - compute the triangles for this Voronoi diagram.
- [_diagram_.links](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#diagram_links) - compute the links for this Voronoi diagram.
- [_diagram_.find](https://github.com/d3/d3-voronoi/blob/v1.1.4/README.md#diagram_find) - find the closest point in this Voronoi diagram.

## [Zooming (d3-zoom)](https://github.com/d3/d3-zoom/tree/v1.8.3)

Pan and zoom SVG, HTML or Canvas using mouse or touch input.

- [d3.zoom](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom) - create a zoom behavior.
- [_zoom_](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#_zoom) - apply the zoom behavior to the selected elements.
- [_zoom_.transform](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_transform) - change the transform for the selected elements.
- [_zoom_.translateTo](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_translateTo) - translate the transform for the selected elements.
- [_zoom_.translateBy](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_translateBy) - translate the transform for the selected elements.
- [_zoom_.scaleBy](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_scaleBy) - scale the transform for the selected elements.
- [_zoom_.scaleTo](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_scaleTo) - scale the transform for the selected elements.
- [_zoom_.filter](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_filter) - control which input events initiate zooming.
- [_zoom_.touchable](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_touchable) - set the touch support detector.
- [_zoom_.wheelDelta](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_wheelDelta) - override scaling for wheel events.
- [_zoom_.clickDistance](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_clickDistance) - set the click distance threshold.
- [_zoom_.extent](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_extent) - set the extent of the viewport.
- [_zoom_.scaleExtent](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_scaleExtent) - set the allowed scale range.
- [_zoom_.translateExtent](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_translateExtent) - set the extent of the zoomable world.
- [_zoom_.constrain](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_constrain) - override the transform constraint logic.
- [_zoom_.duration](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_duration) - set the duration of zoom transitions.
- [_zoom_.interpolate](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_interpolate) - control the interpolation of zoom transitions.
- [_zoom_.on](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoom_on) - listen for zoom events.
- [d3.zoomTransform](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoomTransform) - get the zoom transform for a given element.
- [_transform_.scale](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_scale) - scale a transform by the specified amount.
- [_transform_.translate](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_translate) - translate a transform by the specified amount.
- [_transform_.apply](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_apply) - apply the transform to the given point.
- [_transform_.applyX](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_applyX) - apply the transform to the given _x_-coordinate.
- [_transform_.applyY](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_applyY) - apply the transform to the given _y_-coordinate.
- [_transform_.invert](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_invert) - unapply the transform to the given point.
- [_transform_.invertX](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_invertX) - unapply the transform to the given _x_-coordinate.
- [_transform_.invertY](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_invertY) - unapply the transform to the given _y_-coordinate.
- [_transform_.rescaleX](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_rescaleX) - apply the transform to an _x_-scale’s domain.
- [_transform_.rescaleY](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_rescaleY) - apply the transform to a _y_-scale’s domain.
- [_transform_.toString](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#transform_toString) - format the transform as an SVG transform string.
- [d3.zoomIdentity](https://github.com/d3/d3-zoom/blob/v1.8.3/README.md#zoomIdentity) - the identity transform.
