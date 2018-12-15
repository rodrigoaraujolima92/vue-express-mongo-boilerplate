// REQUIREMENTS
require('dotenv').config();
let fs = require('fs');
let sass = require('node-sass');
let postcss = require('postcss');
let cssnano = require('cssnano');
let autoprefixer = require('autoprefixer');
let tildeImporter = require('node-sass-tilde-importer');

// CONSTANTS
// path to scss sources
const distroSourcePath = "./Client/Build/scss/";
// path where the compiled files should be saved
const distroResourcePath = "./Client/Resources/Public/css/";

// name of the 'main' file (without extension)
const mainFileName = "main";


// FUNCTION DECLARATION
function compileSass(options = {}) {
    // set default options
    options = Object.assign({
        importer: tildeImporter,
        includePaths: [ distroSourcePath ],
        sourceMapsEnabled: false,
    }, options);

    sass.render({
        file: options.src,
        importer: options.importer,
        includePaths: options.includePaths,
        outFile: options.dest,
        sourceMap: options.sourceMapsEnabled,
        sourceMapContents: options.sourceMapsEnabled,
    }, (error, result) => {
        // show error if some occured
        if (error) {
            let message = `
ERROR on LINE: ${error.line}, COLUMN: ${error.column},
MESSAGE: ${error.message}`;
            console.log(message);
        } else {
            // autoprefixer
            let pluginsForPostCSS = [autoprefixer()];
            // use minifier only when in 'prod' ENV
            if (process.env.ENV === "prod") {
                pluginsForPostCSS.push(cssnano({ preset: 'default', zindex: false, reduceIdents: false }));
            }

            // post compile resources (mainly for autoprefixer and minfier)
            postcss(pluginsForPostCSS)
                .process( result.css.toString(), {
                    from: options.src,
                    to: options.dest,
                    map: (options.sourceMapsEnabled) ? {inline: false} : false,
                })
                .then(
                    (prefixedResult) => {
                        // write the result to file
                        fs.writeFile(options.dest, prefixedResult.css, (err) => {
                            // show error if one is thrown while writing file
                            if(err) { throw err; } else {
                                // log successful compilation to terminal
                                console.log(`[BUILDING] File "${options.dest}" built and saved.`);
                            }
                        });
                        if ( result.map ) {
                            // write the sourcemap to file
                            fs.writeFile(`${options.dest}.map`, result.map, (err) => {
                                // show error if one is thrown while writing file
                                if(err) { throw err; } else {
                                    // log successful compilation to terminal
                                    console.log(`[BUILDING] File "${options.dest}.map" built and saved.`);
                                }
                            });
                        }
                    },
                    (err) => { throw err; }
                    );
        }
    });
}


// SHOW INFOS
console.log(`Current ENVIRONMENT: '${process.env.ENV}'`);

// BUILD TASKS
// main
compileSass({
    src : `${distroSourcePath}${mainFileName}.scss`,
    dest : `${distroResourcePath}${mainFileName}.css`,
    sourceMapsEnabled: true,
});