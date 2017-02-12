var gulp = require('gulp');
var del = require('del');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var argv = require('minimist')(process.argv.slice(2));
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var htmlreplace = require('gulp-html-replace');
var sass = require('gulp-sass');

var version = gutil.date('yyyymmddHHMMss');

var IS_RELEASE_BUILD = !!argv.release;

gutil.log(gutil.colors.gray("Build:" + new Date()));
gutil.log(gutil.colors.gray("--------------------------------------------------------------------"));

// 语法检查
gulp.task('jshint', function() {
   gulp.src('src/module/**/*.js')
   .pipe(jshint())
   .pipe(jshint.reporter('default'));
});

// 清空“缓存”文件
gulp.task('clean', function() {
   del(['build']);
});

// 目标文件夹路径
var destFolder = "..";

// 文件拷贝
gulp.task('bulid-debug', function() {
   /*********************   lib start  *********************/
   gulp.src(['src/lib/lodash/js/*.min.js'])
      .pipe(gulp.dest(destFolder + '/lib/lodash/js'));

   gulp.src(['src/lib/moment-2.10.6/*.min.js'])
      .pipe(gulp.dest(destFolder + '/lib/moment-2.10.6'));

   gulp.src(["src/lib/ionic/js/*.min.js"])
      .pipe(gulp.dest(destFolder + '/lib/ionic/js'));

   gulp.src(["src/lib/angular/js/angular-ios9-uiwebview-patch.min.js"])
      .pipe(gulp.dest(destFolder + '/lib/angular/js'));

   gulp.src(["src/lib/angular/js/angular-translate.min.js"])
      .pipe(gulp.dest(destFolder + '/lib/angular/js'));

   gulp.src(["src/lib/angular/js/angular-scrollto.js"])
      .pipe(gulp.dest(destFolder + '/lib/angular/js'));

   gulp.src(["src/lib/require/*.min.js"])
      .pipe(gulp.dest(destFolder + '/lib/require'));

   gulp.src(["src/lib/zrender/**/*.*"])
      .pipe(gulp.dest(destFolder + '/lib/zrender'));

   gulp.src(["src/lib/echarts/**/*.*"])
      .pipe(gulp.dest(destFolder + '/lib/echarts'));

   gulp.src(['src/lib/wechat/**/*.min.*'])
      .pipe(gulp.dest(destFolder + '/lib/wechat'));

   gulp.src(['src/lib/wechat/**/*.*'])
      .pipe(gulp.dest(destFolder + '/lib/wechat'));

   gulp.src(["src/lib/signature/*.min.js"])
      .pipe(gulp.dest(destFolder + '/lib/signature'));

   gulp.src(["src/lib/cache/js/*.js"])
      .pipe(gulp.dest(destFolder + '/lib/cache/js'));

   gulp.src(["src/lib/aliyun-oss/*.min.js"])
      .pipe(gulp.dest(destFolder + '/lib/aliyun-oss'));

   gulp.src(['src/lib/ionic/css/ionic.css'])
      .pipe(gulp.dest(destFolder + '/lib/ionic/css/'));

   gulp.src(['src/lib/ionic/css/ionic.min.css'])
      .pipe(gulp.dest(destFolder + '/lib/ionic/css/'));

   gulp.src(['src/lib/ionic/css/ionic.radio.css'])
      .pipe(gulp.dest(destFolder + '/lib/ionic/css/'));

   gulp.src(['src/lib/timeline/*.js'])
      .pipe(gulp.dest(destFolder + '/lib/timeline'));

   gulp.src(['src/lib/timeline/*.css'])
      .pipe(gulp.dest(destFolder + '/lib/timeline'));

   gulp.src(['src/lib/mfb/*.js'])
      .pipe(gulp.dest(destFolder + '/lib/mfb'));

   gulp.src(['src/lib/mfb/*.css'])
      .pipe(gulp.dest(destFolder + '/lib/mfb'));

   gulp.src('src/lib/**/fonts/*.*')
      .pipe(gulp.dest(destFolder + '/lib'));
   /*********************   lib end  *********************/

   /*********************   component start  *********************/
   gulp.src('src/component/Assets/scss/rt.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('src/component/Assets/css/'));

   gulp.src('src/component/Assets/scss/rt.theme.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('rt.xmobile.theme.css'))
      .pipe(gulp.dest(destFolder + '/component/css/'));

   gulp.src(['src/component/Assets/font/*.css', 'src/component/Assets/css/*.css'])
      .pipe(concat('rt.xmobile.css'))
      .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
      .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.css' })))
      .pipe(gulp.dest(destFolder + '/component/css/'));

   gulp.src(['src/component/Assets/font/fonts/*.*'])
      .pipe(gulp.dest(destFolder + '/component/css/fonts/'));

   gulp.src('src/component/Assets/img/*.*')
      .pipe(gulp.dest(destFolder + '/component/img'));

   gulp.src(['src/component/rt.xmobile.app.js'])
      .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
      .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
      .pipe(gulp.dest(destFolder + "/component/js"));

   gulp.src('src/component/*/language/*.js')
      .pipe(concat('rt.xmobile.language.js'))
      .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
      .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
      .pipe(gulp.dest(destFolder + "/component/js"));

   gulp.src([
      'src/component/Services/rt*Service.js',
      'src/component/Services/rtServices.js',
      'src/component/*Controller.js',
      'src/component/**/*Controller.js',
      'src/component/Directives/*.js'
   ]).pipe(concat('rt.xmobile.js'))
   .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
   .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
   .pipe(gulp.dest(destFolder + '/component/js'));

   gulp.src('src/component/*.html')
      .pipe(gulp.dest(destFolder + '/component'));
   /*********************   component end  *********************/

   /*********************   app start  *********************/
   gulp.src('src/app/**/*Module.js')
      .pipe(concat('modules.js'))
      .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
      .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
      .pipe(gulp.dest(destFolder + '/app'));

   gulp.src('src/app/**/*Service.js')
        .pipe(concat('services.js'))
        .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
        .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
        .pipe(gulp.dest(destFolder + '/app'));

   gulp.src('src/app/**/*Controller.js')
      .pipe(concat('controllers.js'))
      .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
      .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
      .pipe(gulp.dest(destFolder + '/app'));

   gulp.src('src/app/*/language/*.js')
      .pipe(concat('languages.js'))
      .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
      .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
      .pipe(gulp.dest(destFolder + '/app'));

   gulp.src('src/app/**/*.html')
      .pipe(gulp.dest(destFolder + '/app'));
   /*********************   app end  *********************/

   gulp.src(['src/assets/**'])
      .pipe(gulp.dest(destFolder + '/assets'));

   /*********************   module start  *********************/
   gulp.src('src/module/**/*Module.js')
      .pipe(concat('modules.js'))
      .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
      .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
      .pipe(gulp.dest(destFolder + '/module'));

   gulp.src('src/module/**/*Service.js')
      .pipe(concat('services.js'))
      .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
      .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
      .pipe(gulp.dest(destFolder + '/module'));

   gulp.src('src/module/**/*Controller.js')
      .pipe(concat('controllers.js'))
      .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
      .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
      .pipe(gulp.dest(destFolder + '/module'));

   gulp.src('src/module/*/language/*.js')
      .pipe(concat('languages.js'))
      .pipe(gulpif(IS_RELEASE_BUILD, uglify()))
      .pipe(gulpif(IS_RELEASE_BUILD, rename({ extname: '.min.js' })))
      .pipe(gulp.dest(destFolder + '/module'));

   gulp.src('src/module/**/*.html')
      .pipe(gulp.dest(destFolder + '/module'));

   gulp.src('src/authorize.html')
      .pipe(gulp.dest(destFolder + '/'));
   /*********************   module end  *********************/

   var min = IS_RELEASE_BUILD ? ".min" : "";
   var jsExt = min + '.js?v=' + version;
   var cssExt = min + '.css?v=' + version;

   gulp.src('src/index.html')
      .pipe(htmlreplace({
         js: [
            "lib/lodash/js/lodash.min.js?v=" + version,
            "lib/moment-2.10.6/moment-with-locales.min.js?v=" + version,
            "lib/wechat/js/jweixin-1.2.0.js?v=" + version,
            "lib/aliyun-oss/aliyun-oss-sdk-4.4.4.min.js?v=" + version,
            "lib/ionic/js/ionic.bundle.min.js?v=" + version,
            "lib/angular/js/angular-translate.min.js?v=" + version,
            "lib/angular/js/angular-scrollto.js?v=" + version,
            "lib/angular/js/angular-ios9-uiwebview-patch.min.js?v=" + version,
            "lib/require/require.min.js?v=" + version,
            "lib/cache/js/cache-1.0.js?v=" + version,
            "lib/mfb/mfb.js?v=" + version,

            "component/js/rt.xmobile.app" + jsExt,
            "component/js/rt.xmobile" + jsExt,
            "component/js/rt.xmobile.language" + jsExt,

            "app/modules" + jsExt,
            // "app/services" + jsExt,
            "app/controllers" + jsExt,
            "app/languages" + jsExt,

            "module/modules" + jsExt,
            "module/services" + jsExt,
            "module/controllers" + jsExt,
            "module/languages" + jsExt
         ],
         css: [
            "lib/ionic/css/ionic.min.css?v=" + version,
            "lib/ionic/css/ionic.radio.css?v=" + version,
            "lib/timeline/timeline.css?v=" + version,
            "lib/mfb/mfb.css?v=" + version,
            "lib/wechat/css/weui.min.css?v=" + version,
            "component/css/rt.xmobile.css?v=" + version
         ]
      })).pipe(gulp.dest(destFolder + '/'));
});

// 注册缺省任务
gulp.task('default', ['jshint', 'bulid-debug']);
