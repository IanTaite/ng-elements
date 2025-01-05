# NgElements

This is a proof-of-concept application for demonstrating that Angular can be used to create Web Components.

The project contains two entry points (versions of src/main.ts) and these are used by "ng build" and "ng serve" respectively. To get this to work, Angular.json was changed a fair amount, and tsconfig.app.json was replaced by tsconfig.build.json and tsconfig.serve.json respectively.

The project contains Angular Material.

## Building the Web Component for Production

To build the web component, just use "ng build". The output folder contains a main.js and style.css

## Serving the App for Local Development

To serve the application, use:

ng serve -o

## Serving the test harness

When working locally, just use "ng serve -o". There's nothing special about this; the AppComponent acts like a shell/container/test harness for the MfeDemoComponent.

## Issues

### Zone.js

When built, main.js contains Zone.js and this may conflict with Zone.js in the host application when the web component is brought into a host application via a script tag.

Some examples show a microfrontend wiring itself up to the Zone.js of its host if Zone.js is already loaded, otherwise it loads its own Zone.js. This needs more investigation.

### Global Styles

Not sure how to deal with global styles. "src/styles.scss" produces a "styles.css" file, and it would be better if this was a "styles.js" file instead.

### Post Processing

Right now, there's no concatenation of output files. It would be best if the build process could produce a single JS file and in some examples the concat module is used to combine the output JS files into a single file, as a separate build step.

### Testing

Have not tried running Karma, so that might be a TO DO.

