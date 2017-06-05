<!DOCTYPE html>
<!-- saved from url=(0033)https://www.zybuluo.com/mdeditor# -->
<html class="webkit chrome chrome56 win js theme theme-white orientation_landscape maxw_1920" manifest="https://www.zybuluo.com/static/zybuluo.mdeditor.appcache"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    
    <meta name="description" content="Cmd Markdown 编辑阅读器，支持实时同步预览，区分写作和阅读模式，支持在线存储，分享文稿网址。">
    <meta name="author" content="Jiawei Zhang">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    
    <title>开发报告 - 作业部落 Cmd Markdown 编辑阅读器</title>


    <link href="https://www.zybuluo.com/static/img/favicon.png" type="image/x-icon" rel="icon">

    <link href="./README_files/1bc053c8.base.lib.min.css" rel="stylesheet" media="screen">


    
    <!-- id="prettify-style" will be used to get the link element below and change href to change prettify code, so it can't be in beginmin/endmin block. -->
    <link id="prettify-style" href="./README_files/prettify-cmd.css" type="text/css" rel="stylesheet">
    <!--
    <link id="mermaid-style" href="https://www.zybuluo.com/static/editor/libs/mermaid/mermaid.forest.css" type="text/css" rel="stylesheet">
    -->
    <link href="./README_files/45c7d56d.layout.min.css" rel="stylesheet" media="screen">


    
    <link href="./README_files/2e85637e.mdeditor.lib.min.css" rel="stylesheet" media="screen">
    <style type="text/css" id="customized-font-css"></style>
    <style type="text/css" id="customized-style-css">
#wmd-preview h1  {
    color: #0077bb; /* 将标题改为蓝色 */
}</style>


    <script async="" src="./README_files/analytics.js.下载"></script><script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-44461741-1', 'zybuluo.com');
      ga('send', 'pageview');
    </script>
<style type="text/css">.MathJax_Hover_Frame {border-radius: .25em; -webkit-border-radius: .25em; -moz-border-radius: .25em; -khtml-border-radius: .25em; box-shadow: 0px 0px 15px #83A; -webkit-box-shadow: 0px 0px 15px #83A; -moz-box-shadow: 0px 0px 15px #83A; -khtml-box-shadow: 0px 0px 15px #83A; border: 1px solid #A6D ! important; display: inline-block; position: absolute}
.MathJax_Hover_Arrow {position: absolute; width: 15px; height: 11px; cursor: pointer}
</style><style type="text/css">#MathJax_About {position: fixed; left: 50%; width: auto; text-align: center; border: 3px outset; padding: 1em 2em; background-color: #DDDDDD; color: black; cursor: default; font-family: message-box; font-size: 120%; font-style: normal; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; z-index: 201; border-radius: 15px; -webkit-border-radius: 15px; -moz-border-radius: 15px; -khtml-border-radius: 15px; box-shadow: 0px 10px 20px #808080; -webkit-box-shadow: 0px 10px 20px #808080; -moz-box-shadow: 0px 10px 20px #808080; -khtml-box-shadow: 0px 10px 20px #808080; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
.MathJax_Menu {position: absolute; background-color: white; color: black; width: auto; padding: 2px; border: 1px solid #CCCCCC; margin: 0; cursor: default; font: menu; text-align: left; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; z-index: 201; box-shadow: 0px 10px 20px #808080; -webkit-box-shadow: 0px 10px 20px #808080; -moz-box-shadow: 0px 10px 20px #808080; -khtml-box-shadow: 0px 10px 20px #808080; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
.MathJax_MenuItem {padding: 2px 2em; background: transparent}
.MathJax_MenuArrow {position: absolute; right: .5em; color: #666666}
.MathJax_MenuActive .MathJax_MenuArrow {color: white}
.MathJax_MenuCheck {position: absolute; left: .7em}
.MathJax_MenuRadioCheck {position: absolute; left: 1em}
.MathJax_MenuLabel {padding: 2px 2em 4px 1.33em; font-style: italic}
.MathJax_MenuRule {border-top: 1px solid #CCCCCC; margin: 4px 1px 0px}
.MathJax_MenuDisabled {color: GrayText}
.MathJax_MenuActive {background-color: Highlight; color: HighlightText}
.MathJax_Menu_Close {position: absolute; width: 31px; height: 31px; top: -15px; left: -15px}
</style><style type="text/css">#MathJax_Zoom {position: absolute; background-color: #F0F0F0; overflow: auto; display: block; z-index: 301; padding: .5em; border: 1px solid black; margin: 0; font-weight: normal; font-style: normal; text-align: left; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; box-shadow: 5px 5px 15px #AAAAAA; -webkit-box-shadow: 5px 5px 15px #AAAAAA; -moz-box-shadow: 5px 5px 15px #AAAAAA; -khtml-box-shadow: 5px 5px 15px #AAAAAA; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
#MathJax_ZoomOverlay {position: absolute; left: 0; top: 0; z-index: 300; display: inline-block; width: 100%; height: 100%; border: 0; padding: 0; margin: 0; background-color: white; opacity: 0; filter: alpha(opacity=0)}
#MathJax_ZoomFrame {position: relative; display: inline-block; height: 0; width: 0}
#MathJax_ZoomEventTrap {position: absolute; left: 0; top: 0; z-index: 302; display: inline-block; border: 0; padding: 0; margin: 0; background-color: white; opacity: 0; filter: alpha(opacity=0)}
</style><style type="text/css">.MathJax_Preview {color: #888}
#MathJax_Message {position: fixed; left: 1em; bottom: 1.5em; background-color: #E6E6E6; border: 1px solid #959595; margin: 0px; padding: 2px 8px; z-index: 102; color: black; font-size: 80%; width: auto; white-space: nowrap}
#MathJax_MSIE_Frame {position: absolute; top: 0; left: 0; width: 0px; z-index: 101; border: 0px; margin: 0px; padding: 0px}
.MathJax_Error {color: #CC0000; font-style: italic}
</style><style id="ace_editor.css">.ace_editor {position: relative;overflow: hidden;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;/* jiawzhang NOTICE: change opacity to 0 below to fix bug github #161opacity: 1;*/opacity: 0;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}</style><style id="ace-tm">.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;border-radius: 2px;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}</style><style>    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }</style><style id="ace_searchbox">.ace_search {background-color: #ddd;border: 1px solid #cbcbcb;border-top: 0 none;max-width: 325px;overflow: hidden;margin: 0;padding: 4px;padding-right: 6px;padding-bottom: 0;position: absolute;top: 0px;z-index: 99;white-space: normal;}.ace_search.left {border-left: 0 none;border-radius: 0px 0px 5px 0px;left: 0;}.ace_search.right {border-radius: 0px 0px 0px 5px;border-right: 0 none;right: 0;}.ace_search_form, .ace_replace_form {border-radius: 3px;border: 1px solid #cbcbcb;float: left;margin-bottom: 4px;overflow: hidden;}.ace_search_form.ace_nomatch {outline: 1px solid red;}.ace_search_field {background-color: white;border-right: 1px solid #cbcbcb;border: 0 none;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;float: left;height: 22px;outline: 0;padding: 0 7px;width: 214px;margin: 0;}.ace_searchbtn,.ace_replacebtn {background: #fff;border: 0 none;border-left: 1px solid #dcdcdc;cursor: pointer;float: left;height: 22px;margin: 0;padding: 0;position: relative;}.ace_searchbtn:last-child,.ace_replacebtn:last-child {border-top-right-radius: 3px;border-bottom-right-radius: 3px;}.ace_searchbtn:disabled {background: none;cursor: default;}.ace_searchbtn {background-position: 50% 50%;background-repeat: no-repeat;width: 27px;}.ace_searchbtn.prev {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiSU1NZUAC/6E0I0yACYskCpsJiySKIiY0SUZk40FyTEgCjGgKwTRAgAEAQJUIPCE+qfkAAAAASUVORK5CYII=);    }.ace_searchbtn.next {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNpiTE1NZQCC/0DMyIAKwGJMUAYDEo3M/s+EpvM/mkKwCQxYjIeLMaELoLMBAgwAU7UJObTKsvAAAAAASUVORK5CYII=);    }.ace_searchbtn_close {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;border-radius: 50%;border: 0 none;color: #656565;cursor: pointer;float: right;font: 16px/16px Arial;height: 14px;margin: 5px 1px 9px 5px;padding: 0;text-align: center;width: 14px;}.ace_searchbtn_close:hover {background-color: #656565;background-position: 50% 100%;color: white;}.ace_replacebtn.prev {width: 54px}.ace_replacebtn.next {width: 27px}.ace_button {margin-left: 2px;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;overflow: hidden;opacity: 0.7;border: 1px solid rgba(100,100,100,0.23);padding: 1px;-moz-box-sizing: border-box;box-sizing:    border-box;color: black;}.ace_button:hover {background-color: #eee;opacity:1;}.ace_button:active {background-color: #ddd;}.ace_button.checked {border-color: #3399ff;opacity:1;}.ace_search_options{margin-bottom: 3px;text-align: right;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;}</style><style id="ace-dawn">.ace-dawn .ace_gutter {background: #F9F9F5;color: #2C3E50}.ace-dawn .ace_print-margin {width: 0px;background: #F9F9F5}.ace-dawn {background-color: #F9F9F5;color: #2C3E50}.ace-dawn .ace_cursor {color: #000000}.ace-dawn .ace_marker-layer .ace_selection {background: rgba(39, 95, 255, 0.30)}.ace-dawn.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #F9F9F5;border-radius: 2px}.ace-dawn .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}.ace-dawn .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(75, 75, 126, 0.50)}.ace-dawn .ace_marker-layer .ace_active-line {background: rgba(36, 99, 180, 0.12)}.ace-dawn .ace_gutter-active-line {background-color : #dcdcdc}.ace-dawn .ace_marker-layer .ace_selected-word {border: 1px solid rgba(39, 95, 255, 0.30)}.ace-dawn .ace_invisible {color: rgba(75, 75, 126, 0.50)}.ace-dawn .ace_keyword,.ace-dawn .ace_meta {color: #794938}.ace-dawn .ace_constant,.ace-dawn .ace_constant.ace_character,.ace-dawn .ace_constant.ace_character.ace_escape,.ace-dawn .ace_constant.ace_other {color: #811F24}.ace-dawn .ace_invalid.ace_illegal {text-decoration: underline;font-style: italic;color: #F8F8F8;background-color: #B52A1D}.ace-dawn .ace_invalid.ace_deprecated {text-decoration: underline;font-style: italic;color: #B52A1D}.ace-dawn .ace_support {color: #691C97}.ace-dawn .ace_support.ace_constant {color: #B4371F}.ace-dawn .ace_fold {background-color: #794938;border-color: #2C3E50}.ace-dawn .ace_list,.ace-dawn .ace_markup.ace_list,.ace-dawn .ace_support.ace_function {color: #693A17}.ace-dawn .ace_storage {font-style: italic;color: #A71D5D}.ace-dawn .ace_string {color: #0B6125}.ace-dawn .ace_string.ace_regexp {color: #CF5628}.ace-dawn .ace_comment {font-style: italic;color: #5A525F}.ace-dawn .ace_heading,.ace-dawn .ace_markup.ace_heading {color: #19356D}.ace-dawn .ace_variable {color: #234A97}.ace-dawn .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYLh/5+x/AAizA4hxNNsZAAAAAElFTkSuQmCC) right repeat-y}.ace-dawn .ace_string {color: #4271AE;}.ace-dawn .ace_strong {color: #2C3E50;font-weight: bold;}.ace-dawn .ace_emphasis {color: #2C3E50;font-style: italic;}.ace-dawn .ace_heading,.ace-dawn .ace_markup.ace_heading {color: #2C3E50;font-weight: bold;}.ace-dawn .ace_blockquote {color: #4271AE;}.ace-dawn .ace_support.ace_function {color: #4271AE;}.ace-dawn .ace_markup.ace_list {color: #2C3E50;font-weight: bold;}.ace-dawn .ace_list {color: #2C3E50;}.ace-dawn .ace_url,.ace-dawn .ace_markup.ace_underline {border: none;background: rgba(102, 128, 153, 0.15);border-radius: 4px;color: #2C3E50;text-decoration: none;}.ace-dawn .ace_marker-layer .ace_active-line {background: rgba(102, 128, 153, 0.05);}</style><style type="text/css">.MathJax_SVG_Display {text-align: center; margin: 1em 0em; position: relative; display: block; width: 100%}
#MathJax_SVG_Tooltip {background-color: InfoBackground; color: InfoText; border: 1px solid black; box-shadow: 2px 2px 5px #AAAAAA; -webkit-box-shadow: 2px 2px 5px #AAAAAA; -moz-box-shadow: 2px 2px 5px #AAAAAA; -khtml-box-shadow: 2px 2px 5px #AAAAAA; padding: 3px 4px; z-index: 401; position: absolute; left: 0; top: 0; width: auto; height: auto; display: none}
.MathJax_SVG {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; border: 0; padding: 0; margin: 0}
.MathJax_SVG * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.mjx-svg-href {fill: blue; stroke: blue}
.MathJax_SVG_Processing {visibility: hidden; position: absolute; top: 0; left: 0; width: 0; height: 0; overflow: hidden; display: block}
.MathJax_SVG_Processed {display: none!important}
.MathJax_SVG_ExBox {display: block; overflow: hidden; width: 1px; height: 60ex}
.MathJax_SVG .noError {vertical-align: ; font-size: 90%; text-align: left; color: black; padding: 1px 3px; border: 1px solid}
</style></head>

<body class="theme  pace-done theme-white"><div style="visibility: hidden; overflow: hidden; position: absolute; top: 0px; height: 1px; width: auto; padding: 0px; border: 0px; margin: 0px; text-align: left; text-indent: 0px; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal;"><div id="MathJax_SVG_Hidden"></div><svg><defs id="MathJax_SVG_glyphs"><path id="MJMATHI-45" stroke-width="1" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"></path><path id="MJMAIN-3D" stroke-width="1" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path><path id="MJMATHI-6D" stroke-width="1" d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path id="MJMATHI-63" stroke-width="1" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path><path id="MJMAIN-32" stroke-width="1" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJSZ1-2211" stroke-width="1" d="M61 748Q64 750 489 750H913L954 640Q965 609 976 579T993 533T999 516H979L959 517Q936 579 886 621T777 682Q724 700 655 705T436 710H319Q183 710 183 709Q186 706 348 484T511 259Q517 250 513 244L490 216Q466 188 420 134T330 27L149 -187Q149 -188 362 -188Q388 -188 436 -188T506 -189Q679 -189 778 -162T936 -43Q946 -27 959 6H999L913 -249L489 -250Q65 -250 62 -248Q56 -246 56 -239Q56 -234 118 -161Q186 -81 245 -11L428 206Q428 207 242 462L57 717L56 728Q56 744 61 748Z"></path><path id="MJMATHI-6E" stroke-width="1" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path><path id="MJMATHI-69" stroke-width="1" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path><path id="MJMAIN-31" stroke-width="1" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path id="MJMATHI-61" stroke-width="1" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path><path id="MJMAIN-30" stroke-width="1" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path></defs></svg></div><div id="MathJax_Message" style="display: none;"></div><div class="pace  pace-inactive"><div class="pace-progress" data-progress-text="100%" data-progress="99" style="width: 100%;">
  <div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div></div>

    <div id="global-prompt-alert" class="hide alert alert-warning">
        <span id="global-prompt-message"></span>
        <a id="close-global-prompt-alert" href="https://www.zybuluo.com/mdeditor">[关闭]</a>
    </div>

    <!-- zybuluo's body -->
    







<!-- mdeditor's body -->








<div id="container">
    <div id="editor-column" class="pull-left">
        <div id="wmd-button-bar" class="wmd-button-bar"><ul id="wmd-button-row" class="wmd-button-row"><li class="wmd-spacer"></li><li class="wmd-button" id="wmd-bold-button" title="粗体 &lt;strong&gt; Ctrl+B" style="left: 0px;"><span class="icon-bold muted" style="background-position: 0px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-button" id="wmd-italic-button" title="斜体 &lt;em&gt; Ctrl+I" style="left: 25px;"><span class="icon-italic muted" style="background-position: -20px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-spacer wmd-spacer1" id="wmd-spacer1"></li><li class="wmd-button" id="wmd-link-button" title="超链接 &lt;a&gt; Ctrl+L" style="left: 75px;"><span class="icon-link muted" style="background-position: -40px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-button" id="wmd-quote-button" title="段落引用 &lt;blockquote&gt; Ctrl+Q" style="left: 100px;"><span class="icon-quote-left muted" style="background-position: -60px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-button" id="wmd-code-button" title="代码样例 &lt;pre&gt;&lt;code&gt; Ctrl+K" style="left: 125px;"><span class="icon-code muted" style="background-position: -80px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-button" id="wmd-image-button" title="图片 &lt;img&gt; Ctrl+G" style="left: 150px;"><span class="icon-picture muted paid-user-color" style="background-position: -100px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-spacer wmd-spacer2" id="wmd-spacer2"></li><li class="wmd-button" id="wmd-olist-button" title="有序列表 &lt;ol&gt; Ctrl+O" style="left: 200px;"><span class="icon-list-ol muted" style="background-position: -120px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-button" id="wmd-ulist-button" title="无序列表 &lt;ul&gt; Ctrl+U" style="left: 225px;"><span class="icon-list-ul muted" style="background-position: -140px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-button" id="wmd-heading-button" title="标题 &lt;h1&gt;/&lt;h2&gt; Ctrl+H" style="left: 250px;"><span class="icon-list-alt muted" style="background-position: -160px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-button" id="wmd-hr-button" title="水平线 &lt;hr&gt; Ctrl+R" style="left: 275px;"><span class="icon-minus muted" style="background-position: -180px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-spacer wmd-spacer3" id="wmd-spacer3"></li><li class="wmd-button" id="wmd-undo-button" title="撤销 - Ctrl+Z" style="left: 325px;"><span class="icon-reply muted" style="background-position: -200px 0px; color: rgb(187, 187, 187);"></span></li><li class="wmd-button" id="wmd-redo-button" title="重复 - Ctrl+Y" style="left: 350px;"><span class="icon-share-alt muted" style="background-position: -220px 0px; color: rgb(187, 187, 187);"></span></li><li id="wmd-editor-save-button" class="wmd-button" title="自动保存" style="width: 70px; margin-left: 50px; display: none;"><span style="width: 70px; color: rgb(187, 187, 187); font-size: 14px;">已保存</span></li></ul></div>
        <!--in page editor buttons. -->
        <div class="in-page-editor-buttons" style="margin-left: 760px;">
            <ul>
                <li class="in-page-button" id="wmd-search-replace-button" title="查找 Ctrl+F 替换 Ctrl+Shift+F">
                    <span class="icon-search" style="color: rgba(102, 128, 153, 0.45098);"></span>
                </li>
                <li class="in-page-button" id="wmd-hidden-menu-button" title="隐藏工具栏 Ctrl+Alt+U">
                    <span class="icon-chevron-sign-up" style="color: rgba(102, 128, 153, 0.45098);"></span>
                </li>
                <li class="in-page-button" id="wmd-editor-full-button" title="编辑模式 Ctrl+M">
                    <span class="icon-desktop" style="color: rgba(102, 128, 153, 0.45098);"></span>
                </li>
                <li class="in-page-button" id="wmd-editor-small-button" title="预览模式 Ctrl+M" style="display: none;">
                    <span class="icon-columns" style="color: rgba(102, 128, 153, 0.45098);"></span>
                </li>
                <li class="in-page-button" id="wmd-help-button" title="Markdown 语法帮助 Ctrl+Alt+H">
                    <span class="icon-question-sign" style="color: rgba(102, 128, 153, 0.45098);"></span>
                </li>
            </ul>
        </div>
        <div id="wmd-panel-editor" class="wmd-panel-editor"><div style="display: block; font-size: 16px; line-height: 27px; font-family: Menlo, &quot;Ubuntu Mono&quot;, Consolas, &quot;Courier New&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; height: 854px;" class="wmd-input theme ace_editor ace-dawn theme-white" id="wmd-input" draggable="false"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; top: 508.856px; height: 27px; width: 8.79688px; left: 129.359px;"></textarea><div class="ace_gutter" style="display: none;"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="margin-top: -4.14447px; height: 957px; width: 41px;"><div class="ace_gutter-cell " style="height: 27px;">85</div><div class="ace_gutter-cell " style="height: 27px;">86<span class="ace_fold-widget ace_start ace_open" style="height: 27px;"></span></div><div class="ace_gutter-cell " style="height: 27px;">87</div><div class="ace_gutter-cell " style="height: 27px;">88</div><div class="ace_gutter-cell " style="height: 27px;">89</div><div class="ace_gutter-cell " style="height: 81px;">90</div><div class="ace_gutter-cell " style="height: 27px;">91</div><div class="ace_gutter-cell " style="height: 27px;">92</div><div class="ace_gutter-cell " style="height: 27px;">93</div><div class="ace_gutter-cell " style="height: 27px;">94<span class="ace_fold-widget ace_end ace_open" style="height: 27px;"></span></div><div class="ace_gutter-cell " style="height: 27px;">95</div><div class="ace_gutter-cell " style="height: 27px;">96</div><div class="ace_gutter-cell " style="height: 27px;">97</div><div class="ace_gutter-cell " style="height: 27px;">98</div><div class="ace_gutter-cell " style="height: 27px;">99</div><div class="ace_gutter-cell " style="height: 27px;">100</div><div class="ace_gutter-cell " style="height: 27px;">101</div><div class="ace_gutter-cell " style="height: 54px;">102</div><div class="ace_gutter-cell " style="height: 27px;">103</div><div class="ace_gutter-cell " style="height: 27px;">104</div><div class="ace_gutter-cell " style="height: 27px;">105</div><div class="ace_gutter-cell " style="height: 27px;">106</div><div class="ace_gutter-cell " style="height: 27px;">107</div><div class="ace_gutter-cell " style="height: 27px;">108</div><div class="ace_gutter-cell " style="height: 27px;">109</div><div class="ace_gutter-cell " style="height: 27px;">110</div><div class="ace_gutter-cell " style="height: 54px;">111</div><div class="ace_gutter-cell " style="height: 54px;">112</div><div class="ace_gutter-cell " style="height: 27px;">113</div><div class="ace_gutter-cell " style="height: 27px;">114</div></div><div class="ace_gutter-active-line" style="top: 508.856px; height: 27px;"></div></div><div class="ace_scroller" style="left: 0px; right: 17px; bottom: 0px;"><div class="ace_content" style="margin-top: -4.14447px; width: 907px; height: 935px; margin-left: 0px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 15px; visibility: visible;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_active-line" style="height:27px;top:513px;left:0;right:0;"></div></div><div class="ace_layer ace_text-layer" style="padding: 0px 15px;"><div class="ace_line_group" style="height:54px"><div class="ace_line" style="height:27px"><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_variable ace_language">window</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">jQuery</span> <span class="ace_keyword ace_operator">||</span> <span class="ace_variable ace_language">document</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function ace_dom">write</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'&lt;script </span></div><div class="ace_line" style="height:27px"><span class="ace_string">src="js/jquery-1.11.0.min.js"&gt;&lt;</span><span class="ace_constant ace_language ace_escape">\/</span><span class="ace_string">script&gt;'</span><span class="ace_paren ace_rparen">)</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">src</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"js/jquery-smartphoto.min.js?v=1"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px">    <span class="ace_keyword ace_operator">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_storage ace_type">function</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_paren ace_lparen">{</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_indent-guide">    </span>    <span class="ace_keyword ace_operator">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">".js-smartPhoto"</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">smartPhoto</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px">    <span class="ace_paren ace_rparen">})</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px">    <span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">body</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">html</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_text ace_xml"><span class="ace_cjk" style="width:17.59375px">示</span><span class="ace_cjk" style="width:17.59375px">例</span><span class="ace_cjk" style="width:17.59375px">代</span><span class="ace_cjk" style="width:17.59375px">码</span><span class="ace_cjk" style="width:17.59375px">中</span><span class="ace_cjk" style="width:17.59375px">，</span><span class="ace_cjk" style="width:17.59375px">我</span><span class="ace_cjk" style="width:17.59375px">们</span><span class="ace_cjk" style="width:17.59375px">需</span><span class="ace_cjk" style="width:17.59375px">要</span><span class="ace_cjk" style="width:17.59375px">的</span><span class="ace_cjk" style="width:17.59375px">便</span><span class="ace_cjk" style="width:17.59375px">只</span><span class="ace_cjk" style="width:17.59375px">有</span><span class="ace_cjk" style="width:17.59375px">：</span>  </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">link</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">rel</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"stylesheet"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">href</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"css/smartphoto.css"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:54px"><div class="ace_line" style="height:27px"><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_variable ace_language">window</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">jQuery</span> <span class="ace_keyword ace_operator">||</span> <span class="ace_variable ace_language">document</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function ace_dom">write</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'&lt;script </span></div><div class="ace_line" style="height:27px"><span class="ace_string">src="js/jquery-1.11.0.min.js"&gt;&lt;</span><span class="ace_constant ace_language ace_escape">\/</span><span class="ace_string">script&gt;'</span><span class="ace_paren ace_rparen">)</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">src</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"js/jquery-smartphoto.min.js?v=1"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px">    <span class="ace_keyword ace_operator">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_storage ace_type">function</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_paren ace_lparen">{</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_indent-guide">    </span>    <span class="ace_keyword ace_operator">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">".js-smartPhoto"</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">smartPhoto</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px">    <span class="ace_paren ace_rparen">})</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px">    <span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_support ace_function">```</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_support ace_function">&gt; * <span class="ace_cjk" style="width:17.59375px">自</span><span class="ace_cjk" style="width:17.59375px">制</span><span class="ace_cjk" style="width:17.59375px">的</span>JS<span class="ace_cjk" style="width:17.59375px">特</span><span class="ace_cjk" style="width:17.59375px">效</span></span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_support ace_function">&gt;</span></div></div><div class="ace_line_group" style="height:54px"><div class="ace_line" style="height:27px"><span class="ace_support ace_function">&gt;<span class="ace_cjk" style="width:17.59375px">这</span><span class="ace_cjk" style="width:17.59375px">个</span><span class="ace_cjk" style="width:17.59375px">特</span><span class="ace_cjk" style="width:17.59375px">效</span><span class="ace_cjk" style="width:17.59375px">是</span><span class="ace_cjk" style="width:17.59375px">一</span><span class="ace_cjk" style="width:17.59375px">个</span><span class="ace_cjk" style="width:17.59375px">可</span><span class="ace_cjk" style="width:17.59375px">隐</span><span class="ace_cjk" style="width:17.59375px">藏</span><span class="ace_cjk" style="width:17.59375px">的</span><span class="ace_cjk" style="width:17.59375px">类</span><span class="ace_cjk" style="width:17.59375px">似</span><span class="ace_cjk" style="width:17.59375px">于</span><span class="ace_cjk" style="width:17.59375px">导</span><span class="ace_cjk" style="width:17.59375px">航</span><span class="ace_cjk" style="width:17.59375px">栏</span><span class="ace_cjk" style="width:17.59375px">的</span><span class="ace_cjk" style="width:17.59375px">特</span><span class="ace_cjk" style="width:17.59375px">效</span><span class="ace_cjk" style="width:17.59375px">。</span><span class="ace_cjk" style="width:17.59375px">主</span><span class="ace_cjk" style="width:17.59375px">要</span><span class="ace_cjk" style="width:17.59375px">是</span><span class="ace_cjk" style="width:17.59375px">它</span><span class="ace_cjk" style="width:17.59375px">可</span><span class="ace_cjk" style="width:17.59375px">隐</span><span class="ace_cjk" style="width:17.59375px">藏</span><span class="ace_cjk" style="width:17.59375px">，</span><span class="ace_cjk" style="width:17.59375px">所</span><span class="ace_cjk" style="width:17.59375px">以</span><span class="ace_cjk" style="width:17.59375px">对</span><span class="ace_cjk" style="width:17.59375px">网</span><span class="ace_cjk" style="width:17.59375px">页</span><span class="ace_cjk" style="width:17.59375px">的</span><span class="ace_cjk" style="width:17.59375px">布</span><span class="ace_cjk" style="width:17.59375px">局</span><span class="ace_cjk" style="width:17.59375px">不</span><span class="ace_cjk" style="width:17.59375px">造</span><span class="ace_cjk" style="width:17.59375px">成</span><span class="ace_cjk" style="width:17.59375px">影</span><span class="ace_cjk" style="width:17.59375px">响</span><span class="ace_cjk" style="width:17.59375px">，</span><span class="ace_cjk" style="width:17.59375px">反</span><span class="ace_cjk" style="width:17.59375px">而</span><span class="ace_cjk" style="width:17.59375px">可</span><span class="ace_cjk" style="width:17.59375px">以</span><span class="ace_cjk" style="width:17.59375px">让</span><span class="ace_cjk" style="width:17.59375px">我</span></span></div><div class="ace_line" style="height:27px"><span class="ace_support ace_function"><span class="ace_cjk" style="width:17.59375px">的</span><span class="ace_cjk" style="width:17.59375px">各</span><span class="ace_cjk" style="width:17.59375px">个</span><span class="ace_cjk" style="width:17.59375px">网</span><span class="ace_cjk" style="width:17.59375px">页</span><span class="ace_cjk" style="width:17.59375px">联</span><span class="ace_cjk" style="width:17.59375px">系</span><span class="ace_cjk" style="width:17.59375px">更</span><span class="ace_cjk" style="width:17.59375px">加</span><span class="ace_cjk" style="width:17.59375px">密</span><span class="ace_cjk" style="width:17.59375px">切</span><span class="ace_cjk" style="width:17.59375px">。</span><span class="ace_cjk" style="width:17.59375px">关</span><span class="ace_cjk" style="width:17.59375px">键</span><span class="ace_cjk" style="width:17.59375px">代</span><span class="ace_cjk" style="width:17.59375px">码</span><span class="ace_cjk" style="width:17.59375px">如</span><span class="ace_cjk" style="width:17.59375px">下</span><span class="ace_cjk" style="width:17.59375px">：</span></span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_support ace_function">```</span><span class="ace_text ace_xml">xml</span></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"></div></div><div class="ace_line_group" style="height:27px"><div class="ace_line" style="height:27px"><span class="ace_text ace_xml">$('.side-btn').on('click', function () {</span></div></div><div class="ace_line_group" style="height: 27px;"><div class="ace_line" style="height:27px"><span class="ace_text ace_xml">    if (!show) {</span></div></div><div class="ace_line_group" style="height: 27px;"><div class="ace_line" style="height:27px"><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    $('.side-back').fadeIn(400);</span></div></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors"><div class="ace_cursor" style="left: 129.359px; top: 513px; width: 8.79688px; height: 27px;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 5292px;"></div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 0px; right: 17px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 907px;"></div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;"></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div></div>
    </div>
    <div id="preview-column" class="pull-right">
        <div id="preview-button-bar" class="preview-button-bar">
            <ul id="preview-button-row" class="preview-button-row pull-right">

                <li id="preview-button-row-notlogin" class="preview-link editor-only dropdown editor-reader-hidden">
                    <a id="signup" class="dropdown-toggle red-on-black" data-toggle="dropdown" data-hover="dropdown" data-delay="100" data-close-others="true" href="https://www.zybuluo.com/signup?return_to=https%3A%2F%2Fwww.zybuluo.com%2Fmdeditor">注册</a>
                    <a id="login" class="dropdown-toggle red-on-black" data-toggle="dropdown" data-hover="dropdown" data-delay="100" data-close-others="true" href="https://www.zybuluo.com/login?return_to=https%3A%2F%2Fwww.zybuluo.com%2Fmdeditor">登录</a>
                    <ul id="signup-login-intro" class="dropdown-menu theme-black pull-right" role="menu">
                        <li>
                        <span>注册/登录 获得更多功能</span>
                        </li>
                        <li class="divider"></li>
                        <li>
                        <span><i class="icon-refresh"></i> 实时，自动保存编辑中的文字</span>
                        </li>
                        <li>
                            <span><i class="icon-cloud-upload"></i> 云端存储，随时随地编辑阅读</span>
                        </li>
                        <li>
                            <span><i class="icon-cloud-download"></i> 从云端导出 Markdown，Html</span>
                        </li>
                        <li>
                            <span><i class="icon-share"></i> 在这里发布共享您编辑的作品</span>
                        </li>
                        <li>
                            <span><i class="icon-reorder"></i> 管理，编辑，阅读多个文本</span>
                        </li>
                        <li>
                            <span><i class="icon-group"></i> 成为作业部落成员，更多后续功能</span>
                        </li>
                    </ul>
                </li>

                <li id="preview-button-row-login" class="preview-link editor-only dropdown">
                    <a id="preview-button-row-loginuser" href="https://www.zybuluo.com/2234148120" class="white-on-black dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="100" data-close-others="true"><span>2234148120</span></a>
                    <ul class="dropdown-menu theme-black pull-right" role="menu">
                        <li><a id="mdeditor-user-settings-submenu" tabindex="-1" href="https://www.zybuluo.com/settings"><i class="icon-cogs"></i>用户设置</a></li>
                        <li><a id="mdeditor-payment-submenu" tabindex="-1" href="https://www.zybuluo.com/payment" class="paid-user-color" target="_blank"><i class="icon-chevron-sign-up"></i><span>升级会员<span></span></span></a></li>
                        <li><a id="mdeditor-logout-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-signout"></i>登出部落</a></li>
                    </ul>
                </li>


                <li class="wmd-spacer editor-only" id="preview-button-row-afterlogin"></li>

                <li class="preview-link editor-only" id="preview-file-button">
                    <div class="btn-group open">
                        <button class="dropdown-toggle" data-toggle="dropdown">
                            <span class="icon-file"></span>
                            文件
                        </button>
                        <ul id="file-menu" class="dropdown-menu theme-black pull-right" role="menu">
                            <li title="新建文稿 Ctrl+Alt+N"><a class="preview-new-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-file"></i>新文稿</a></li>
                            <li title="新建离线文稿，企业级私密"><a id="new-offline-file-submenu" class="paid-user-color" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-file"></i>新离线文稿</a></li>
                            <li title="读取本地文本文件"><a id="open-file-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-folder-open"></i>打开文本</a></li>
                            <li title="删除文稿 Ctrl+Alt+D"><a id="preview-delete-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-trash"></i>删除文稿</a></li>
                            <li title="手动保存历史"><a id="preview-revision-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-time"></i>手动保存历史</a></li>
                            <li class="divider"></li>
                            <li title="最近使用的文稿"><span id="latest-notes-label">最近使用：2 个</span></li>
                        </ul>
                        <ul id="latest-notes-list" class="dropdown-menu theme-black pull-right" role="menu" style="margin-top: 191px; max-height: 668px;">
                            <!--insert .latest-note by editorReader.js
                            <li class="latest-note"> <a note-id="" tabindex="-1" title=""> <span class="note-title"></span> </a> </li> -->
                        <li class="latest-note"> <a note-id="679751" tabindex="-1" title="开发报告"> <span class="note-title">开发报告</span> </a> </li><li class="latest-note"> <a note-id="679461" tabindex="-1" title="欢迎使用 Cmd Markdown 编辑阅读器"> <span class="note-title">欢迎使用 Cmd Mar...</span> </a> </li></ul>
                    </div>
                </li>
                <li class="preview-link editor-only" id="preview-published-button" style="display: none;">
                    <div class="btn-group">
                        <button class="dropdown-toggle" data-toggle="dropdown">
                            <span class="icon-share-sign"></span>
                            发布更新
                        </button>
                        <ul class="dropdown-menu theme-black pull-right" role="menu">
                            <li title="再次发布更新后的内容到固定链接 Ctrl+Alt+P"><a class="publish-updated-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-share-sign"></i>发布更新</a></li>
                            <li title="可以被分享给他人的固定链接"><a class="fixed-link-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-link"></i>固定链接</a></li>
                            <li title="清除已发布文稿的访问密码"><a id="remove-password-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-eraser"></i>清除密码</a></li>
                            <li title="撤销文本的分享，只有自己可见"><a id="revert-publish-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-share"></i>撤销发布</a></li>
                        </ul>
                    </div>
                </li>
                <li class="preview-link editor-only" id="preview-publish-button" title="立即发布 Ctrl+Alt+P">
                    <div class="btn-group">
                        <button>
                            <span class="icon-share"></span>
                            发布
                        </button>
                    </div>
                </li>
                <li class="wmd-spacer editor-only" id="preview-button-row-spacer"></li>
                <li class="preview-button dropdown" id="preview-list-button" title="文本列表 Ctrl+Alt+F">
                    <span class="dropdown-toggle icon-reorder" data-toggle="dropdown" style="color: rgb(187, 187, 187);"></span>
                    <ul id="file-list" class="dropdown-menu theme-black pull-right" role="menu" style="max-height: 806px;"><li><ul class="tag-list">
    <li class="tag-item item" tag-name="未分类">
        <span class="pull-left"><i class="icon-tag"></i><span class="tag-name">未分类</span></span>
        <span class="tag-count pull-right">2</span>
        <div class="clearfix"></div>
    </li>
    <!-- insert .file-item.item here -->
<li class="file-item item" file-created-date="2017-03-08 13:05:15">
        <a tabindex="-1" title="【未发布】 2017-06-05 22:18">
            <i class="icon-share"></i>
            <span id="679751" class="whiter-on-black">开发报告</span>
        </a>
    </li><li class="file-item item" file-created-date="2017-03-08 10:06:00">
        <a tabindex="-1" title="【未发布】 2017-03-08 12:56">
            <i class="icon-share"></i>
            <span id="679461">欢迎使用 Cmd Markdown 编辑阅读器</span>
        </a>
    </li></ul></li></ul>
                    <ul id="file-list-topbar" class="dropdown-menu theme-black pull-right" role="menu">
                        <li id="search-file-bar">
                            <i class="icon-search icon-large"></i>
                            <input type="text" id="search-file-textbox" placeholder="搜索我的文稿标题， * 显示全部">
                            <i class="icon-level-down icon-rotate-90 icon-large"></i>
                            <a href="https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#2-%E6%A0%87%E7%AD%BE%E5%88%86%E7%B1%BB" target="_blank" title="查看帮助">如何分类</a>
                        </li>
                        <li id="tag-file-bar">
                            以下【标签】将用于标记这篇文稿：
                        </li>
                    </ul>
                </li>
                <li class="preview-button dropdown editor-only" id="preview-info-button" title="文稿信息 Ctrl+Alt+I">
                    <span class="dropdown-toggle icon-th-large" data-toggle="dropdown" style="color: rgb(187, 187, 187);"></span>
                    <ul id="info-menu" class="dropdown-menu theme-black pull-right" role="menu">
                        <li>
                            <table>
                                <tbody>
                                    <tr title="可以被分享给他人的固定链接">
                                        <td class="menu-label">固定链接</td>
                                        <!--hide either of below -->
                                        <td id="preview-published-td" class="menu-field" style="display: none;">
                                            <a class="fixed-link-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#">链接地址</a>
                                        </td>
                                        <td id="preview-publish-td" class="menu-field">无 (未发布)</td>
                                    </tr>
                                    <tr title="公开文稿被阅读的次数">
                                        <td class="menu-label">文稿阅读</td>
                                        <td class="menu-field article-read">0</td><!--render by render.js-->
                                    </tr>
                                    <tr title="文稿的字数">
                                        <td class="menu-label">文稿字数</td>
                                        <td class="menu-field article-characters"></td>
                                    </tr>
                                    <tr title="最后修改文稿的日期">
                                        <td class="menu-label">修改日期</td>
                                        <td class="menu-field article-updated-date">2017-06-05 22:18</td><!--render by render.js-->
                                    </tr>
                                    <tr title="创建文稿的日期">
                                        <td class="menu-label">创建日期</td>
                                        <td class="menu-field article-created-date">2017-03-08 13:05</td><!--render by render.js-->
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                        <li title="当前文稿的历史版本"><span id="info-revision-label">历史版本：</span></li>
                    </ul>
                    <ul id="revision-list" class="dropdown-menu theme-black pull-right editor-reader-hidden" role="menu">
                        <!--insert 'ul.revision-item-template.editor-reader-hidden li.revision-item' below into here by editorReader.js-->
                    </ul>
                </li>
                <li class="preview-button dropdown editor-only" id="preview-settings-button" title="功能设置 Ctrl+Alt+R">
                    <span class="dropdown-toggle icon-gear" data-toggle="dropdown" style="color: rgb(187, 187, 187);"></span>
                    <ul id="settings-menu" class="dropdown-menu theme-black pull-right" role="menu">
                        <li title="立即同步本地和云端的所有文稿"><a id="sync-now-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-refresh"></i>立即同步</a></li>
                        <li><a id="sync-thirty-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><span class="yellow-on-black"><i class="icon-time"></i>每隔 30 分钟同步</span></a></li>
                        <li title="重新加载当前文档，编辑状态将无法撤销/重复"><a id="reload-current-usernote-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><span><i class="icon-double-angle-right"></i>重载当前文稿</span></a></li>
                        <li class="divider"></li>
                        <li title="自定义样式"><a id="customized-style-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-wrench"></i>自定义样式</a></li>
                        <li class="divider"></li>
                        <li title="导出 Markdown 文件"><a id="download-markdown-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-cloud-download"></i>导出 Markdown</a></li>
                        <li title="导出 Html 文件"><a id="download-html-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-cloud-download"></i>导出 Html</a></li>
                        <li title="导出带样式的 Html 文件"><a id="download-template-html-submenu" class="paid-user-color" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-cloud-download"></i>导出带样式的 Html</a></li>
                        <li title="导出 PDF 文件"><a id="download-pdf-submenu" class="paid-user-color" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-cloud-download"></i>导出 PDF 文件</a></li>
                        <li title="一键导出所有文稿"><a id="download-all-submenu" class="paid-user-color" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-cloud-download"></i>一键导出所有文稿</a></li>
                        <li class="divider"></li>
                        <li title="导出到印象笔记"><a id="upload-yinxiang-submenu" class="paid-user-color" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-cloud-upload"></i>导出到印象笔记</a></li>
                        <li title="导出到Evernote"><a id="upload-evernote-submenu" class="paid-user-color" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><i class="icon-cloud-upload"></i>导出到Evernote</a></li>
                        <li class="divider"></li>

                            <li title="普通模式"><a id="mode-normal-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><span class="blue-on-black"><i class="icon-pencil"></i>普通模式</span></a></li>
                            <li title="确认清楚该选项含义后选择，同时禁用浏览器的Vim插件"><a id="mode-vim-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><span><i class="icon-edit-sign"></i>Vim 模式</span></a></li>
                            <li title="确认清楚该选项含义后选择"><a id="mode-emacs-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><span><i class="icon-edit"></i>Emacs 模式</span></a></li>
                            <li title="在编辑区显示或关闭行号"><a id="show-line-number-submenu" tabindex="-1" href="https://www.zybuluo.com/mdeditor#"><span><i class="icon-sort-by-order"></i>显示行号</span></a></li>
                            <li class="divider"></li>
                            <li title="使用普通文本编辑器">
                                <a tabindex="-1" href="https://www.zybuluo.com/mdeditor_light">
                                    <i class="icon-check-empty"></i>轻量编辑器
                                </a>
                            </li>
                    </ul>
                </li>


                <!-- There is at least one item of 'wmd-spacer' must be in the ul list, otherwise, the hover on the button leads to page issue. -->
                <li class="wmd-spacer"></li>
                <li class="preview-button dropdown" id="preview-about-button" title="关于">
                    <span class="dropdown-toggle icon-info-sign" data-toggle="dropdown" data-hover="dropdown" data-delay="100" data-close-others="true" style="color: rgb(187, 187, 187);"></span>
                    <ul id="about-menu" class="dropdown-menu theme-black pull-right" role="menu">
                        <li id="download-client-submenu" title="下载全平台客户端"><a tabindex="-1" href="https://www.zybuluo.com/cmd" target="_blank"><i class="icon-laptop"></i>下载客户端</a></li>
                        <li id="change-history-submenu" title=""><a tabindex="-1" href="https://www.zybuluo.com/ghosert/note/102771" target="_blank"><i class="icon-wrench"></i>变更历史</a></li>
                        <li title="@ghosert"><a tabindex="-1" href="http://www.weibo.com/ghosert" target="_blank"><i class="icon-weibo"></i>关注开发者</a></li>
                        <li title=""><a tabindex="-1" href="https://github.com/ghosert/cmd-editor/issues" target="_blank"><i class="icon-github-alt"></i>报告问题，建议</a></li>
                        <li title="support@zybuluo.com"><a tabindex="-1" href="mailto:support@zybuluo.com" target="_blank"><i class="icon-envelope"></i>联系我们</a></li>
                    <li><a tabindex="-1" href="https://www.zybuluo.com/cmd" target="_blank">Web 端版本</a></li></ul>
                </li>
            </ul>
        </div>
        <!--in page preview buttons. -->
        <div class="in-page-preview-buttons" style="margin-left: 725px;">
            <ul>
                <li class="in-page-button dropdown" id="preview-toc-button" title="内容目录 Ctrl+Alt+O">
                    <span class="dropdown-toggle icon-list" data-toggle="dropdown" style="color: rgba(102, 128, 153, 0.45098);"></span>
                    <div id="toc-list" class="dropdown-menu theme pull-right theme-white"> <!-- Add theme means this element will be changed when apply theme color. -->
                        <h3>内容目录</h3>
                        <hr>
                        <div class="table-of-contents"><div class="toc">
<ul>
<li><a href="https://www.zybuluo.com/mdeditor#开发报告">开发报告</a><ul>
<li><a href="https://www.zybuluo.com/mdeditor#开发灵感">开发灵感</a></li>
<li><a href="https://www.zybuluo.com/mdeditor#设计思路">设计思路</a></li>
<li><a href="https://www.zybuluo.com/mdeditor#页面结构与说明">页面结构与说明</a></li>
<li><a href="https://www.zybuluo.com/mdeditor#技术指标">技术指标</a></li>
<li><a href="https://www.zybuluo.com/mdeditor#技术点说明">技术点说明</a></li>
<li><a href="https://www.zybuluo.com/mdeditor#开发心得">开发心得</a></li>
</ul>
</li>
</ul>
</div>
</div>
                    </div>
                </li>
                <li class="in-page-button editor-only" id="editor-reader-exchange-button" title="交换左右视图 Ctrl+Alt+X">
                    <span class="icon-chevron-sign-left" style="color: rgba(102, 128, 153, 0.45098);"></span>
                </li>
                <li class="in-page-button" id="preview-theme-button" title="主题切换 Ctrl+Alt+Y">
                    <span class="icon-adjust" style="color: rgba(102, 128, 153, 0.45098);"></span>
                </li>
                <li class="in-page-button" id="preview-reader-full-button" title="阅读模式 Ctrl+Alt+M">
                    <span class="icon-desktop" style="color: rgba(102, 128, 153, 0.45098);"></span>
                </li>
                <li class="in-page-button" id="preview-reader-small-button" title="预览模式 Ctrl+Alt+M" style="display: none;">
                    <span class="icon-columns" style="color: rgba(102, 128, 153, 0.45098);"></span>
                </li>
                <li class="in-page-button" id="preview-fullscreen-button" title="全屏模式 F11">
                    <span class="icon-fullscreen" style="color: rgba(102, 128, 153, 0.45098);"></span>
                </li>
            </ul>
        </div>
        <div id="wmd-panel-preview" class="wmd-panel-preview preview-container" style="height: 854px;">
            <div id="wmd-preview" class="wmd-preview" data-medium-element="true" style="height: auto; left: 0px;"><div class="md-section-divider"></div><div class="md-section-divider"></div><h1 data-anchor-id="2xuh" id="开发报告">开发报告</h1><div class="md-section-divider"></div><h2 data-anchor-id="iaqe" id="开发灵感">开发灵感</h2><hr><p data-anchor-id="r5gm">开发此个人网页的灵感主要来自于自己的兴趣爱好，由于我非常喜爱英雄联盟类游戏，而从接触到现在，英雄联盟已经陪伴我两年了。每个人都有自己的爱好，有人爱好运动，有人爱好音乐，而我爱好这类游戏，所以便下定决心做这个网页。</p><hr><div class="md-section-divider"></div><h2 data-anchor-id="exyo" id="设计思路">设计思路</h2><hr><p data-anchor-id="su7t">设计方面，我先是从主页设计开始，由于我准备设计的表单页有三个----英雄介绍页面，战队介绍页面和装备介绍页面。所以，主页的布局便大概想好了，在下边我会有所介绍。设计这个网页，也是想浏览这个网页的人对英雄的背景更加的了解，所以对英雄的背景有更多的关注。网页的内容多数来自于官网，其余的则是我在官方的一些周边网站找的官方资料。</p><hr><div class="md-section-divider"></div><h2 data-anchor-id="clro" id="页面结构与说明">页面结构与说明</h2><hr><p data-anchor-id="m3ko"><a href="https://easonyes.github.io/League-of-Legends/" target="_blank">个人网页链接</a> <br>
站点由一个主页，三个列表页，一个表单页和若干个详细页组成。由于模版相同，所以详细页只使用一个作为代表。</p><p data-anchor-id="8x0y"><a href="https://easonyes.github.io/League-of-Legends/" target="_blank">主页</a>的作用主要在于对其他各个网页的简要介绍，让浏览者能够一目了然此网页的具体内容以及其简要作用。</p><p data-anchor-id="w8pk"><a href="https://github.com/easonyes/League-of-Legends/blob/master/heroes.html" target="_blank">英雄介绍页</a>主要在于介绍各个英雄，而其<a href="https://github.com/easonyes/League-of-Legends/blob/master/renma.html" target="_blank">详细页</a>主要介绍英雄的背景故事以及其玩法，并且侧重于其背景故事。</p><p data-anchor-id="8fpw"><a href="https://github.com/easonyes/League-of-Legends/blob/master/teams.html" target="_blank">战队介绍页</a>主要在于介绍LPL赛区目前排名比较靠前的若干个战队，而其<a href="https://github.com/easonyes/League-of-Legends/blob/master/rng.html" target="_blank">详细页</a>主要在于介绍该战队的荣誉与其在役成员。</p><p data-anchor-id="zrgd"><a href="https://github.com/easonyes/League-of-Legends/blob/master/equips.html" target="_blank">装备介绍页</a>主页在于简要介绍各个装备的作用，而其<a href="https://github.com/easonyes/League-of-Legends/blob/master/equips.html" target="_blank">详细页</a>中会具体介绍每个装备的属性值与其主动或者被动特效。</p><p data-anchor-id="rv53"><a href="https://github.com/easonyes/League-of-Legends/blob/master/form.html" target="_blank">表单页</a>主要在于调查在各年龄段与各个段位之间的玩家，对此网页的作用有何评价。</p><hr><div class="md-section-divider"></div><h2 data-anchor-id="dot7" id="技术指标">技术指标</h2><hr><p data-anchor-id="matf">兼容的浏览器版本在IE9及以上，所用的HTML有部分HTML5的内容，所用的CSS中也有部分CSS3中的内容。</p><p data-anchor-id="rxjs">开发工具：</p><blockquote data-anchor-id="5uu5" class="white-blockquote">
  <ul>
  <li>浏览器：firefox与chorme</li>
  <li>编辑器：sublime_text 3</li>
  <li>辅助手册：w3school</li>
  </ul>
</blockquote><hr><div class="md-section-divider"></div><h2 data-anchor-id="twmd" id="技术点说明">技术点说明</h2><hr><blockquote data-anchor-id="8thu" class="white-blockquote">
  <ul>
  <li>float元素的使用</li>
  </ul>
  
  <p>因为主页的期望结构，所以想要一个大的块介绍一个列表页，而旁边有三个小块来介绍详细页。这个时候，用一个大的div包含两个小div，然后右边的div中又包含三个更小的div，再对中间的两个div使用float，就能达到预期的结果了。</p>
</blockquote><div class="md-section-divider"></div><pre class="prettyprint linenums prettyprinted" data-anchor-id="cxnz"><ol class="linenums"><li class="L0"><code class="language-xml"><span class="pln">&gt;   .a{</span></code></li><li class="L1"><code class="language-xml"><span class="pln">        height: 500px;</span></code></li><li class="L2"><code class="language-xml"><span class="pln">    }</span></code></li><li class="L3"><code class="language-xml"></code></li><li class="L4"><code class="language-xml"><span class="pln">&gt;   .b{</span></code></li><li class="L5"><code class="language-xml"><span class="pln">        margin: 5px;</span></code></li><li class="L6"><code class="language-xml"><span class="pln">        height: 480px;</span></code></li><li class="L7"><code class="language-xml"><span class="pln">        width: 49%;</span></code></li><li class="L8"><code class="language-xml"><span class="pln">        float: left;</span></code></li><li class="L9"><code class="language-xml"><span class="pln">    }</span></code></li><li class="L0"><code class="language-xml"></code></li><li class="L1"><code class="language-xml"><span class="pln">&gt;   .c{</span></code></li><li class="L2"><code class="language-xml"><span class="pln">        margin: 5px;</span></code></li><li class="L3"><code class="language-xml"><span class="pln">        height: 150px;</span></code></li><li class="L4"><code class="language-xml"><span class="pln">    }</span></code></li><li class="L5"><code class="language-xml"><span class="pln">&gt;   </span></code></li><li class="L6"><code class="language-xml"></code></li><li class="L7"><code class="language-xml"><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"a"</span><span class="pln"> </span><span class="tag">&gt;</span></code></li><li class="L8"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"b"</span><span class="tag">&gt;&lt;/div&gt;</span></code></li><li class="L9"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"b"</span><span class="tag">&gt;</span></code></li><li class="L0"><code class="language-xml"><span class="pln">        </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"c"</span><span class="tag">&gt;&lt;/div&gt;</span></code></li><li class="L1"><code class="language-xml"><span class="pln">        </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"c"</span><span class="tag">&gt;&lt;/div&gt;</span></code></li><li class="L2"><code class="language-xml"><span class="pln">        </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"c"</span><span class="tag">&gt;&lt;/div&gt;</span></code></li><li class="L3"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;/div&gt;</span></code></li><li class="L4"><code class="language-xml"><span class="pln"> </span><span class="tag">&lt;/div&gt;</span></code></li></ol></pre><blockquote data-anchor-id="f507" class="white-blockquote">
  <ul>
  <li>jquery的引用</li>
  </ul>
  
  <p>先进入<a href="http://www.htmleaf.com/jQuery/" target="_blank">jquery之家</a>寻找自己喜爱的特效。进去之后单击查看演示，进去演示页面后，单击右键点击检查，找到iframe元素。按F2，进入该元素下的网页。之后查看网页源代码，找到JS特效代码及CSS。再将其改为自己的网页所需要的样子。 <br>
  而主要需要搬过来的代码为script元素下的JS特效代码，以及在head代码下的link引入的css代码。 <br>
  示例代码：</p>
</blockquote><div class="md-section-divider"></div><pre class="prettyprint linenums prettyprinted" data-anchor-id="12if"><ol class="linenums"><li class="L0"><code class="language-xml"></code></li><li class="L1"><code class="language-xml"><span class="dec">&lt;!DOCTYPE html&gt;</span></code></li><li class="L2"><code class="language-xml"><span class="tag">&lt;html</span><span class="pln"> </span><span class="atn">lang</span><span class="pun">=</span><span class="atv">"zh"</span><span class="tag">&gt;</span></code></li><li class="L3"><code class="language-xml"><span class="tag">&lt;head&gt;</span></code></li><li class="L4"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;meta</span><span class="pln"> </span><span class="atn">charset</span><span class="pun">=</span><span class="atv">"UTF-8"</span><span class="tag">&gt;</span></code></li><li class="L5"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;meta</span><span class="pln"> </span><span class="atn">http-equiv</span><span class="pun">=</span><span class="atv">"X-UA-Compatible"</span><span class="pln"> </span><span class="atn">content</span><span class="pun">=</span><span class="atv">"IE=edge,chrome=1"</span><span class="tag">&gt;</span><span class="pln"> </span></code></li><li class="L6"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;meta</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"viewport"</span><span class="pln"> </span><span class="atn">content</span><span class="pun">=</span><span class="atv">"width=device-width, initial-scale=1.0"</span><span class="tag">&gt;</span></code></li><li class="L7"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;title&gt;</span><span class="pln">SmartPhoto-jquery移动手机响应式图片查看插件|DEMO_jQuery之家-自由分享jQuery、html5、css3的插件库</span><span class="tag">&lt;/title&gt;</span></code></li><li class="L8"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;link</span><span class="pln"> </span><span class="atn">rel</span><span class="pun">=</span><span class="atv">"stylesheet"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/css"</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"css/normalize.css"</span><span class="pln"> </span><span class="tag">/&gt;</span></code></li><li class="L9"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;link</span><span class="pln"> </span><span class="atn">rel</span><span class="pun">=</span><span class="atv">"stylesheet"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/css"</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"css/htmleaf-demo.css"</span><span class="tag">&gt;</span></code></li><li class="L0"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;link</span><span class="pln"> </span><span class="atn">rel</span><span class="pun">=</span><span class="atv">"stylesheet"</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"css/smartphoto.css"</span><span class="tag">&gt;</span></code></li><li class="L1"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;link</span><span class="pln"> </span><span class="atn">rel</span><span class="pun">=</span><span class="atv">"stylesheet"</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"css/style2.css"</span><span class="tag">&gt;</span></code></li><li class="L2"><code class="language-xml"><span class="tag">&lt;/head&gt;</span></code></li><li class="L3"><code class="language-xml"><span class="tag">&lt;body&gt;</span></code></li><li class="L4"><code class="language-xml"></code></li><li class="L5"><code class="language-xml"></code></li><li class="L6"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"http://cdn.bootcss.com/jquery/1.11.0/jquery.min.js"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/javascript"</span><span class="tag">&gt;&lt;/script&gt;</span></code></li><li class="L7"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;script&gt;</span><span class="pln">window</span><span class="pun">.</span><span class="pln">jQuery </span><span class="pun">||</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">write</span><span class="pun">(</span><span class="str">'&lt;script src="js/jquery-1.11.0.min.js"&gt;&lt;\/script&gt;'</span><span class="pun">)</span><span class="tag">&lt;/script&gt;</span></code></li><li class="L8"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"js/jquery-smartphoto.min.js?v=1"</span><span class="tag">&gt;&lt;/script&gt;</span></code></li><li class="L9"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;script&gt;</span></code></li><li class="L0"><code class="language-xml"><span class="pln">    $</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(){</span></code></li><li class="L1"><code class="language-xml"><span class="pln">		$</span><span class="pun">(</span><span class="str">".js-smartPhoto"</span><span class="pun">).</span><span class="pln">smartPhoto</span><span class="pun">();</span></code></li><li class="L2"><code class="language-xml"><span class="pln">    </span><span class="pun">});</span></code></li><li class="L3"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;/script&gt;</span></code></li><li class="L4"><code class="language-xml"><span class="tag">&lt;/body&gt;</span></code></li><li class="L5"><code class="language-xml"><span class="tag">&lt;/html&gt;</span></code></li><li class="L6"><code class="language-xml"></code></li><li class="L7"><code class="language-xml"><span class="pln">示例代码中，我们需要的便只有： </span><span class="tag">&lt;link</span><span class="pln"> </span><span class="atn">rel</span><span class="pun">=</span><span class="atv">"stylesheet"</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"css/smartphoto.css"</span><span class="tag">&gt;</span></code></li><li class="L8"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;script&gt;</span><span class="pln">window</span><span class="pun">.</span><span class="pln">jQuery </span><span class="pun">||</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">write</span><span class="pun">(</span><span class="str">'&lt;script src="js/jquery-1.11.0.min.js"&gt;&lt;\/script&gt;'</span><span class="pun">)</span><span class="tag">&lt;/script&gt;</span></code></li><li class="L9"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"js/jquery-smartphoto.min.js?v=1"</span><span class="tag">&gt;&lt;/script&gt;</span></code></li><li class="L0"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;script&gt;</span></code></li><li class="L1"><code class="language-xml"><span class="pln">    $</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(){</span></code></li><li class="L2"><code class="language-xml"><span class="pln">		$</span><span class="pun">(</span><span class="str">".js-smartPhoto"</span><span class="pun">).</span><span class="pln">smartPhoto</span><span class="pun">();</span></code></li><li class="L3"><code class="language-xml"><span class="pln">    </span><span class="pun">});</span></code></li><li class="L4"><code class="language-xml"><span class="pln">    </span><span class="tag">&lt;/script&gt;</span></code></li></ol></pre><blockquote data-anchor-id="6r12" class="white-blockquote">
  <ul>
  <li>自制的JS特效</li>
  </ul>
  
  <p>这个特效是一个可隐藏的类似于导航栏的特效。主要是它可隐藏，所以对网页的布局不造成影响，反而可以让我的各个网页联系更加密切。关键代码如下：</p>
</blockquote><div class="md-section-divider"></div><pre class="prettyprint linenums prettyprinted" data-anchor-id="nmcw"><ol class="linenums"><li class="L0"><code class="language-xml"></code></li><li class="L1"><code class="language-xml"><span class="pln">$('.side-btn').on('click', function () {</span></code></li><li class="L2"><code class="language-xml"><span class="pln">    if (!show) {</span></code></li><li class="L3"><code class="language-xml"><span class="pln">        $('.side-back').fadeIn(400);</span></code></li><li class="L4"><code class="language-xml"><span class="pln">        $('.side-area').animate({right: 0}, 300);</span></code></li><li class="L5"><code class="language-xml"><span class="pln">        $('body').css('overflow-y', 'hidden');</span></code></li><li class="L6"><code class="language-xml"><span class="pln">    } else {</span></code></li><li class="L7"><code class="language-xml"><span class="pln">        $('.side-back').fadeOut(400);</span></code></li><li class="L8"><code class="language-xml"><span class="pln">        $('.side-area').animate({right: -225}, 300);</span></code></li><li class="L9"><code class="language-xml"><span class="pln">        $('body').css('overflow-y', 'visible');</span></code></li><li class="L0"><code class="language-xml"><span class="pln">    }</span></code></li><li class="L1"><code class="language-xml"><span class="pln">    show = !show;</span></code></li><li class="L2"><code class="language-xml"><span class="pln">});</span></code></li><li class="L3"><code class="language-xml"></code></li><li class="L4"><code class="language-xml"><span class="pln">$('.side-back').on('click', function () {</span></code></li><li class="L5"><code class="language-xml"><span class="pln">    show = false;</span></code></li><li class="L6"><code class="language-xml"><span class="pln">    $('.side-back').fadeOut(400);</span></code></li><li class="L7"><code class="language-xml"><span class="pln">    $('.side-area').animate({right: -225}, 300);</span></code></li><li class="L8"><code class="language-xml"><span class="pln">    $('body').css('overflow-y', 'visible');</span></code></li><li class="L9"><code class="language-xml"><span class="pln">});</span></code></li></ol></pre><hr><div class="md-section-divider"></div><h2 data-anchor-id="dj8o" id="开发心得">开发心得</h2><hr><p data-anchor-id="0l1q">此次网页开发，让我和我的未来程序员之路又近了一步。我原以为网页的开发会非常困难，可是，经过这一次尝试后才知道。原来，只要自己努力了，其实开发一个网页并没有那么难。只要自己肯花费时间和精力去做，慢慢就会发现，其实学习这些东西并没有那么费劲。相反，在网页的开发过程中，自己会慢慢对它产生兴趣，看着自己一个个敲的代码变成一个网页，是真的有一定的成就感的。而对本门课程的展望的话，由于此次课程已经引起了我学习的兴趣，所以下学期我会选与WEB相关的课程，让自己的网页开发技术得到进一步的提高。<strong>粗体文本</strong></p><hr></div>
            <!-- jiawzhang NOTICE: the position in '.remark-icons' is 'absolute' so that '.wmd-panel-preview' above should be 'relative', so that they works on scrollbar. -->
            <div class="remark-icons"><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="2xuh">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="iaqe">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="r5gm">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="exyo">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="su7t">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="clro">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="m3ko">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="8x0y">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="w8pk">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="8fpw">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="zrgd">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="rv53">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="dot7">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="matf">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="rxjs">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="5uu5">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="twmd">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="8thu">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="cxnz">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="f507">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="top: 2361px; left: 921px; display: none;" data-anchor-id="12if">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count">+</span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="top:3120px;left:921px;" data-anchor-id="6r12">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count">+</span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="nmcw">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="dj8o">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div><div class="remark-icon unselectable remark-icon-empty" style="display: none;" data-anchor-id="0l1q">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div></div>
        </div>
    </div>

    <div class="clearfix"></div>
</div>

<!-- Hidden md-section-helper is used to calculate the height of md sections. -->

<!-- full editor reader, hidden when loading. -->
<div id="editor-reader-full" class="editor-reader-full-hidden">
</div>

<!-- reader full toolbar, hidden when loading. -->
<div id="reader-full-toolbar" class="reader-full-toolbar-hidden">
</div>
<ul id="reader-full-toolbar-tail" class="reader-full-toolbar-tail-hidden">
    <li class="preview-button-full-reader" id="preview-hidden-button" title="隐藏工具栏 Ctrl+Alt+I">
        <span class="icon-chevron-sign-right" style="color: rgb(187, 187, 187);"></span>
    </li>
</ul>

<!-- reader full topInfo, hidden when loading. -->
<div id="reader-full-topInfo" class="reader-full-topInfo-hidden">
    <span>
        <code class="article-author">@2234148120</code><!--render by render.js-->
    </span>
    <code><span class="article-updated-date">2017-06-05 22:18</span></code><!--render by render.js-->
    <code><span>字数 </span><span class="article-characters"></span></code>
    <code><span>阅读 </span><span class="article-read">0</span></code><!--render by render.js-->
</div>

<!-- Template for 'tag-list', this will be inserted into #file-list in render.js -->
<ul class="tag-list editor-reader-hidden">
    <li class="tag-item item" tag-name="">
        <span class="pull-left"><i class="icon-tag"></i><span class="tag-name"></span></span>
        <span class="tag-count pull-right"></span>
        <div class="clearfix"></div>
    </li>
    <!-- insert .file-item.item here -->
</ul>
<ul class="file-item-template editor-reader-hidden">
    <li class="file-item item" file-created-date="">
        <a tabindex="-1" title="">
            <i class=""></i>
            <span id=""></span>
        </a>
    </li>
</ul>
<ul class="revision-item-template editor-reader-hidden">
    <li class="revision-item" file-created-date="">
        <a id="" tabindex="-1" title="">
            <span class="revision-reason pull-left"></span>
            <span class="revision-time-diff pull-right" created_time_diff=""></span>
            <span class="clearfix"></span>
        </a>
    </li>
</ul>

<!-- Prompt on loading article, hidden when loading. -->
<div id="article-loading-alert" class="alert alert-info editor-reader-hidden">
    <button type="button" class="close" data-dismiss="alert">×</button>
    <strong>正在加载文章图片，请稍等片刻... </strong>
</div>

<!-- UML diagram, hidden always -->
<div id="uml-X-x-X-diagram" class="editor-reader-hidden-always"></div>

<!-- not really will be actually used, just for the mocked Markdown.Editor.(ace|light).js -->
<div id="wmd-preview-real" class="editor-reader-hidden-always"></div>






<!-- side remark, hidden when loading. -->
<div class="remark-list side-remark-hidden">
    <div class="remark-items"></div>
    <div class="leave-remark unselectable"><span class="icon-plus-sign-alt"></span><span>添加新批注</span></div>
    <div class="new-remark">
    <div class="remark-head"><a><img src="./README_files/default-head.jpg" style="width: 32px; height: 32px;"></a></div>
    <div class="remark-author unselectable"><strong>2234148120</strong></div>
    <div class="remark-editor" contenteditable="true" spellcheck="false"></div>
    <!-- this will be filled up by js.
    <div class="inline-error">402/400</div> for new remark
    <div class="inline-error">202/200</div> for new reply
    -->
    <div class="remark-footer unselectable">
        <button class="remark-save btn-link">保存</button>
        <button class="remark-cancel btn-link">取消</button>
    </div>

        <!-- clone the template $('.new-remark-reply').html() to here.-->
    </div>
</div>

<!-- template for new remark/reply -->
<div class="new-remark-reply side-remark-hidden">
    <div class="remark-head"><a><img src="./README_files/default-head.jpg"></a></div>
    <div class="remark-author unselectable"></div>
    <div class="remark-editor" contenteditable="true" spellcheck="false"></div>
    <!-- this will be filled up by js.
    <div class="inline-error">402/400</div> for new remark
    <div class="inline-error">202/200</div> for new reply
    -->
    <div class="remark-footer unselectable">
        <button class="remark-save btn-link">保存</button>
        <button class="remark-cancel btn-link">取消</button>
    </div>
</div>

<!-- template for .remark-item/.remark-reply -->
<div class="remark-item-reply side-remark-hidden">
    <div class="remark-head"><a><img src="./README_files/default-head.jpg"></a></div>
    <div class="remark-author unselectable"></div>
    <div class="remark-delete-link unselectable"><span class="icon-remove"></span></div> <!--This is mainly for deleting remark-reply, shown when author/remark hovering on remark-reply.-->
    <div class="remark-editor" contenteditable="true" spellcheck="false"></div>
    <!-- this will be filled up by js.
    <div class="inline-error">402/400</div> for new remark
    <div class="inline-error">202/200</div> for new reply
    -->
    <div class="remark-footer unselectable">
        <button class="remark-edit btn-link">修改</button>
        <button class="remark-save btn-link">保存</button>
        <button class="remark-cancel btn-link">取消</button>
        <button class="remark-delete btn-link">删除</button>
    </div>
</div>

<!-- template for remark-item-->
<div class="remark-item side-remark-hidden" data-rand-id="" data-version-id="">
    <div class="remark-published-link unselectable"><span class="icon-link icon-rotate-90"></span></div>
    <ul class="remark-options theme unselectable theme-white">
        <li class="remark-private"><span class="icon-eye-close"></span><span>私有</span></li>
        <li class="remark-public"><span class="icon-group"></span><span>公开</span></li>
        <li class="remark-delete"><span class="icon-remove"></span><span>删除</span></li>
    </ul>

    <!-- clone the template $('.remark-item-reply').html() to here.-->

    <button class="remark-reply-view-more btn-link">查看更早的 5 条回复</button>
    <div class="remark-replies">
        <!--
        <div class="remark-reply">
            clone the template $('.remark-item-reply').html() to here.
        </div>
        -->
    </div>

    <div class="leave-reply unselectable"><span>回复批注</span></div>
    <div class="new-reply">
        <!-- clone the template $('.new-remark-reply').html() to here.-->
    </div>
</div>

<!-- jiawzhang NOTICE: .remark-icons will be put to mdeditor.mako and user_note.mako, where next to .wmd-preview -->
<!-- <div class="remark-icons"></div> -->

<!-- template for remark-icon -->
<div class="remark-icon unselectable side-remark-hidden remark-icon-empty" style="display: none;">
    <span class="icon-stack">
        <i class="glyph-comment"></i>
        <span class="remark-count"></span>
    </span>
</div>


<!-- canvas, hidden always, this is used to convert svg to canvas and then convert canvas to png. -->
<canvas id="svg-canvas-image" class="editor-reader-hidden-always"></canvas>

<!-- This is the image panel to hold enlarged image/svg. -->
<div id="large-image-panel">
    <img id="large-image">
</div>


    


    <!-- Hidden Popup Modal -->
    <div id="notification-popup-window" class="modal hide fade theme theme-white" tabindex="-1" role="dialog" aria-labelledby="notification-title" aria-hidden="true" style="display: none;">
        <div class="modal-header theme theme-white">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h3 id="notification-title"></h3>
        </div>
        <div class="modal-body theme theme-white"><p></p></div>
        <div class="modal-footer theme theme-white">
            <button id="notification-cancel" class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
            <button id="notification-confirm" class="btn btn-primary" style="display: inline-block;">确认</button>
        </div>
    </div>

    <!-- zybuluo's foot -->

    <script src="./README_files/288313bb.base.lib.min.js.下载"></script>

    <script>
        Namespace('com.zybuluo.base');
        com.zybuluo.base.initData = {
            globalPromptUrl: "https://www.zybuluo.com/global/prompt",
        };
    </script>

    
    <!--mathjax-->
    <!--blacker: 1 below means font weight.-->
    <script type="text/x-mathjax-config;executed=true">
        MathJax.Hub.Config({ tex2jax: { inlineMath: [['$','$'], ["\\(","\\)"]], processEscapes: true }, TeX: { equationNumbers: { autoNumber: "AMS" } }, messageStyle: "none", SVG: { blacker: 1 }});
    </script>
    <script src="./README_files/mathJax.js.下载"></script>
    <!--mathjax source code is here: https://github.com/mathjax/MathJax.-->
    <script src="./README_files/mathJax.js(1).下载"></script>

    <script>
        Namespace('com.zybuluo.mdeditor.layout');
        com.zybuluo.mdeditor.layout.initData = {
            // '' means not logged in, otherwise the logged in username, for mdeditor.mako, this value will be reset in render.js otherwise, for user_note.mako, it's rendered by server side.
            loggedInUsername: '',
            isPageOwner: 'True' === 'True' ? true : false,
            loginComeFromUrl: 'https://www.zybuluo.com/login?return_to=https%3A%2F%2Fwww.zybuluo.com%2Fmdeditor',
            noteRemarksUrl: "https://www.zybuluo.com/note/current_id_placeholder/remarks", 
            newNoteRemarkUrl: "https://www.zybuluo.com/note/current_id_placeholder/remark/new", 
            updateNoteRemarkUrl: "https://www.zybuluo.com/note/current_id_placeholder/remark/update", 
            deleteNoteRemarkUrl: "https://www.zybuluo.com/note/current_id_placeholder/remark/delete", 
            publishNoteRemarkUrl: "https://www.zybuluo.com/note/current_id_placeholder/remark/publish", 
            newNoteRemarkReplyUrl: "https://www.zybuluo.com/note/current_id_placeholder/remark_reply/new", 
            updateNoteRemarkReplyUrl: "https://www.zybuluo.com/note/current_id_placeholder/remark_reply/update", 
            deleteNoteRemarkReplyUrl: "https://www.zybuluo.com/note/current_id_placeholder/remark_reply/delete", 
        };

        // BEGIN: pace.js configuration
        window.paceOptions = {
            // disable others, enable for ajax call only,
            ajax: true,
            document: false,
            elements: false,
            eventLag: false,
        };
        // jiawzhang NOTICE: to make sure pace.js is working for any ajax call especially the jquery ajax, add 'Pace.restart()' into jquery ajax call like '$.post'
        // Originally, pace 0.5.6 doesn't support jquery ajax, see details in: https://github.com/HubSpot/pace/issues/29
        // END: pace.js configuration

    </script>

    <script src="./README_files/7a70106e.layout.lib.min.js.下载"></script>

    <script src="./README_files/dc648f35.layout.min.js.下载"></script><div id="medium-editor-toolbar-1" class="medium-editor-toolbar" style=""><ul id="medium-editor-toolbar-actions" class="medium-editor-toolbar-actions clearfix" style=""><li><button data-action="remark" class=" medium-editor-button-first"><i class="icon-comment"></i></button></li><li><button data-action="highlight" class=" medium-editor-button-last"><i class="icon-pencil"></i></button></li></ul></div>



    

    <script src="./README_files/mermaid.min.js.下载"></script>
    <script>
        var mermaidConfig = {
            flowchart:{
                htmlLabels: false
            }
        };
        mermaid.initialize(mermaidConfig); // this config is added to avoid 'foreignObject' issue casued in fileManger.js
        mermaid.ganttConfig = {
            axisFormatter: [
            // Within a day
            ['%I:%M', function (d) {
                return d.getHours();
            }],
            // Monday a week
            ['%m/%d', function (d) { // redefine date here as '%m/%d'instead of 'w. %U', search mermaid.js
                return d.getDay() == 1;
            }],
            // Day within a week (not monday)
            ['%a %d', function (d) {
                return d.getDay() && d.getDate() != 1;
            }],
            // within a month
            ['%b %d', function (d) {
                return d.getDate() != 1;
            }],
            // Month
            ['%m-%y', function (d) {
                return d.getMonth();
            }]]
        };
        _.noConflict();
    </script>

        <script src="./README_files/0832e823.mdeditor.lib.min.js.下载"></script>

    <script>
        Namespace('com.zybuluo.mdeditor');
        com.zybuluo.mdeditor.initData = {
            loginComeFromUrl: 'https://www.zybuluo.com/login?return_to=https%3A%2F%2Fwww.zybuluo.com%2Fmdeditor',
            markdownHelpUrl: "https://www.zybuluo.com/mdeditor?url=https%3A%2F%2Fwww.zybuluo.com%2Fstatic%2Feditor%2Fmd-help.markdown",
            updateUserNoteUrl: "https://www.zybuluo.com/mdeditor/note/update",
            newUserNoteUrl: "https://www.zybuluo.com/mdeditor/note/new",
            deleteUserNoteUrl: "https://www.zybuluo.com/mdeditor/note/delete",
            publishUserNoteUrl: "https://www.zybuluo.com/mdeditor/note/publish",
            removePasswordUserNoteUrl: "https://www.zybuluo.com/mdeditor/note/removePassword",
            downloadPdfUrl: "https://www.zybuluo.com/mdeditor/note/downloadPdf",
            mdeditorNoteInfoUrl: "https://www.zybuluo.com/mdeditor/noteinfo/",
            mdeditorNoteSyncUrl: "https://www.zybuluo.com/mdeditor/note/sync",
            userNoteUrl: "https://www.zybuluo.com/loggedin_username_placeholder/note/",
            noteRevisionsUrl: "https://www.zybuluo.com/note/current_id_placeholder/revisions", 
            noteRevisionUrl: "https://www.zybuluo.com/note/current_id_placeholder/revision/", 
            noteRevisionSaveUrl: "https://www.zybuluo.com/note/current_id_placeholder/revision/save", 
            loginUserUrl: "https://www.zybuluo.com/",
            userTierUrl: "https://www.zybuluo.com/user_tier",
            uptokenUrl: "https://www.zybuluo.com/uptoken",
            userfileAuthUrl: "https://www.zybuluo.com/userfile/auth",
            userfileTrackUrl: "https://www.zybuluo.com/userfile/track",
            thirdPartyAccountUrl: "https://www.zybuluo.com/third_party_account/",
            thirdPartyAccountExportUrl: "https://www.zybuluo.com/third_party_account/export/",
            paymentUrl: "https://www.zybuluo.com/payment",
            cmdDesktopVersionUrl: "https://www.zybuluo.com/cmd_desktop_version",
            staticAssetsUrl: "https://www.zybuluo.com/static/assets/",
            staticImgUrl: "https://www.zybuluo.com/static/img/",
        };
        // jiawzhang NOTICE: switch textarea and ace editor
        window.lightMode = 'False' === 'True' ? true : false;
        window.desktopGui = null; // whether it's desktop or not.
        window.isMacDesktopApp = false;
        if (process && process.mainModule) { // true if it's node-webkit version
            var fs = require('fs'); // jiawzhang NOTICE: ace 1.1.7 will make this line break, upgrade ace to 1.1.9 resolve this, this line is for testing purpose for potential conflicts when upgrading node-webkit/ace in the future.
            window.desktopGui = global.window.nwDispatcher.requireNwGui();
            if (process.platform === "darwin") { // if it's OSX system and desktop version.
                window.isMacDesktopApp = true;
            }
        }
    </script>

    <script src="./README_files/7daebaf5.mdeditor.min.js.下载"></script>





    
<i title="Raphaël Colour Picker" style="display: none; color: white;"></i><div class="mermaidTooltip" style="opacity: 0;"></div></body></html>