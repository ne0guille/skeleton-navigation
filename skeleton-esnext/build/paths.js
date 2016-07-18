var appRoot = 'src/';

var exportSrvRoot = 'export/';
var contentRoot = 'styles/';
var libRoot = 'lib/';

var outputRoot = 'dist/';
var outputContent = 'styles/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  content: {
    root: contentRoot,
    styles: [contentRoot + '**/*.scss'],
    foundation: libRoot + '**/*foundation*/**/scss/',
    css: [
      libRoot + '**/font-awesome*/**/css/font-awesome.css',      
    ],
    fonts: [
      libRoot + '**/font-awesome*/**/fonts/*.*',
    ]
  },
  style: 'styles/**/*.css',
  output: outputRoot,
  outputContent: outputContent,
  exportSrv: exportSrvRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
 // content: {
 //   root: contentRoot,
 //   styles: [contentRoot + '**/*.scss'],
 //   foundation: libRoot + '**/*foundation*/**/scss/',
 //   css: [
 //     libRoot + '**/font-awesome*/**/css/font-awesome.css',
 //     libRoot + '**/swiper*/**/css/swiper.css',
 //   ],
 //   fonts: [
 //     libRoot + '**/font-awesome*/**/fonts/*.*',
 //   ]
 // }