(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.react-flow{direction:ltr;--xy-edge-stroke-default: #b1b1b7;--xy-edge-stroke-width-default: 1;--xy-edge-stroke-selected-default: #555;--xy-connectionline-stroke-default: #b1b1b7;--xy-connectionline-stroke-width-default: 1;--xy-attribution-background-color-default: rgba(255, 255, 255, .5);--xy-minimap-background-color-default: #fff;--xy-minimap-mask-background-color-default: rgba(240, 240, 240, .6);--xy-minimap-mask-stroke-color-default: transparent;--xy-minimap-mask-stroke-width-default: 1;--xy-minimap-node-background-color-default: #e2e2e2;--xy-minimap-node-stroke-color-default: transparent;--xy-minimap-node-stroke-width-default: 2;--xy-background-color-default: transparent;--xy-background-pattern-dots-color-default: #91919a;--xy-background-pattern-lines-color-default: #eee;--xy-background-pattern-cross-color-default: #e2e2e2;background-color:var(--xy-background-color, var(--xy-background-color-default));--xy-node-color-default: inherit;--xy-node-border-default: 1px solid #1a192b;--xy-node-background-color-default: #fff;--xy-node-group-background-color-default: rgba(240, 240, 240, .25);--xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(0, 0, 0, .08);--xy-node-boxshadow-selected-default: 0 0 0 .5px #1a192b;--xy-node-border-radius-default: 3px;--xy-handle-background-color-default: #1a192b;--xy-handle-border-color-default: #fff;--xy-selection-background-color-default: rgba(0, 89, 220, .08);--xy-selection-border-default: 1px dotted rgba(0, 89, 220, .8);--xy-controls-button-background-color-default: #fefefe;--xy-controls-button-background-color-hover-default: #f4f4f4;--xy-controls-button-color-default: inherit;--xy-controls-button-color-hover-default: inherit;--xy-controls-button-border-color-default: #eee;--xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, .08);--xy-edge-label-background-color-default: #ffffff;--xy-edge-label-color-default: inherit;--xy-resize-background-color-default: #3367d9}.react-flow.dark{--xy-edge-stroke-default: #3e3e3e;--xy-edge-stroke-width-default: 1;--xy-edge-stroke-selected-default: #727272;--xy-connectionline-stroke-default: #b1b1b7;--xy-connectionline-stroke-width-default: 1;--xy-attribution-background-color-default: rgba(150, 150, 150, .25);--xy-minimap-background-color-default: #141414;--xy-minimap-mask-background-color-default: rgba(60, 60, 60, .6);--xy-minimap-mask-stroke-color-default: transparent;--xy-minimap-mask-stroke-width-default: 1;--xy-minimap-node-background-color-default: #2b2b2b;--xy-minimap-node-stroke-color-default: transparent;--xy-minimap-node-stroke-width-default: 2;--xy-background-color-default: #141414;--xy-background-pattern-dots-color-default: #777;--xy-background-pattern-lines-color-default: #777;--xy-background-pattern-cross-color-default: #777;--xy-node-color-default: #f8f8f8;--xy-node-border-default: 1px solid #3c3c3c;--xy-node-background-color-default: #1e1e1e;--xy-node-group-background-color-default: rgba(240, 240, 240, .25);--xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(255, 255, 255, .08);--xy-node-boxshadow-selected-default: 0 0 0 .5px #999;--xy-handle-background-color-default: #bebebe;--xy-handle-border-color-default: #1e1e1e;--xy-selection-background-color-default: rgba(200, 200, 220, .08);--xy-selection-border-default: 1px dotted rgba(200, 200, 220, .8);--xy-controls-button-background-color-default: #2b2b2b;--xy-controls-button-background-color-hover-default: #3e3e3e;--xy-controls-button-color-default: #f8f8f8;--xy-controls-button-color-hover-default: #fff;--xy-controls-button-border-color-default: #5b5b5b;--xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, .08);--xy-edge-label-background-color-default: #141414;--xy-edge-label-color-default: #f8f8f8}.react-flow__background{background-color:var(--xy-background-color-props, var(--xy-background-color, var(--xy-background-color-default)));pointer-events:none;z-index:-1}.react-flow__container{position:absolute;width:100%;height:100%;top:0;left:0}.react-flow__pane{z-index:1}.react-flow__pane.draggable{cursor:grab}.react-flow__pane.dragging{cursor:grabbing}.react-flow__pane.selection{cursor:pointer}.react-flow__viewport{transform-origin:0 0;z-index:2;pointer-events:none}.react-flow__renderer{z-index:4}.react-flow__selection{z-index:6}.react-flow__nodesselection-rect:focus,.react-flow__nodesselection-rect:focus-visible{outline:none}.react-flow__edge-path{stroke:var(--xy-edge-stroke, var(--xy-edge-stroke-default));stroke-width:var(--xy-edge-stroke-width, var(--xy-edge-stroke-width-default));fill:none}.react-flow__connection-path{stroke:var(--xy-connectionline-stroke, var(--xy-connectionline-stroke-default));stroke-width:var(--xy-connectionline-stroke-width, var(--xy-connectionline-stroke-width-default));fill:none}.react-flow .react-flow__edges{position:absolute}.react-flow .react-flow__edges svg{overflow:visible;position:absolute;pointer-events:none}.react-flow__edge{pointer-events:visibleStroke}.react-flow__edge.selectable{cursor:pointer}.react-flow__edge.animated path{stroke-dasharray:5;animation:dashdraw .5s linear infinite}.react-flow__edge.animated path.react-flow__edge-interaction{stroke-dasharray:none;animation:none}.react-flow__edge.inactive{pointer-events:none}.react-flow__edge.selected,.react-flow__edge:focus,.react-flow__edge:focus-visible{outline:none}.react-flow__edge.selected .react-flow__edge-path,.react-flow__edge.selectable:focus .react-flow__edge-path,.react-flow__edge.selectable:focus-visible .react-flow__edge-path{stroke:var(--xy-edge-stroke-selected, var(--xy-edge-stroke-selected-default))}.react-flow__edge-textwrapper{pointer-events:all}.react-flow__edge .react-flow__edge-text{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.react-flow__arrowhead polyline{stroke:var(--xy-edge-stroke, var(--xy-edge-stroke-default))}.react-flow__arrowhead polyline.arrowclosed{fill:var(--xy-edge-stroke, var(--xy-edge-stroke-default))}.react-flow__connection{pointer-events:none}.react-flow__connection .animated{stroke-dasharray:5;animation:dashdraw .5s linear infinite}svg.react-flow__connectionline{z-index:1001;overflow:visible;position:absolute}.react-flow__nodes{pointer-events:none;transform-origin:0 0}.react-flow__node{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:all;transform-origin:0 0;box-sizing:border-box;cursor:default}.react-flow__node.selectable{cursor:pointer}.react-flow__node.draggable{cursor:grab;pointer-events:all}.react-flow__node.draggable.dragging{cursor:grabbing}.react-flow__nodesselection{z-index:3;transform-origin:left top;pointer-events:none}.react-flow__nodesselection-rect{position:absolute;pointer-events:all;cursor:grab}.react-flow__handle{position:absolute;pointer-events:none;min-width:5px;min-height:5px;width:6px;height:6px;background-color:var(--xy-handle-background-color, var(--xy-handle-background-color-default));border:1px solid var(--xy-handle-border-color, var(--xy-handle-border-color-default));border-radius:100%}.react-flow__handle.connectingfrom{pointer-events:all}.react-flow__handle.connectionindicator{pointer-events:all;cursor:crosshair}.react-flow__handle-bottom{top:auto;left:50%;bottom:0;transform:translate(-50%,50%)}.react-flow__handle-top{top:0;left:50%;transform:translate(-50%,-50%)}.react-flow__handle-left{top:50%;left:0;transform:translate(-50%,-50%)}.react-flow__handle-right{top:50%;right:0;transform:translate(50%,-50%)}.react-flow__edgeupdater{cursor:move;pointer-events:all}.react-flow__pane.selection .react-flow__panel{pointer-events:none}.react-flow__panel{position:absolute;z-index:5;margin:15px}.react-flow__panel.top{top:0}.react-flow__panel.bottom{bottom:0}.react-flow__panel.top.center,.react-flow__panel.bottom.center{left:50%;transform:translate(-15px) translate(-50%)}.react-flow__panel.left{left:0}.react-flow__panel.right{right:0}.react-flow__panel.left.center,.react-flow__panel.right.center{top:50%;transform:translateY(-15px) translateY(-50%)}.react-flow__attribution{font-size:10px;background:var(--xy-attribution-background-color, var(--xy-attribution-background-color-default));padding:2px 3px;margin:0}.react-flow__attribution a{text-decoration:none;color:#999}@keyframes dashdraw{0%{stroke-dashoffset:10}}.react-flow__edgelabel-renderer{position:absolute;width:100%;height:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;left:0;top:0}.react-flow__viewport-portal{position:absolute;width:100%;height:100%;left:0;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.react-flow__minimap{background:var( --xy-minimap-background-color-props, var(--xy-minimap-background-color, var(--xy-minimap-background-color-default)) )}.react-flow__minimap-svg{display:block}.react-flow__minimap-mask{fill:var( --xy-minimap-mask-background-color-props, var(--xy-minimap-mask-background-color, var(--xy-minimap-mask-background-color-default)) );stroke:var( --xy-minimap-mask-stroke-color-props, var(--xy-minimap-mask-stroke-color, var(--xy-minimap-mask-stroke-color-default)) );stroke-width:var( --xy-minimap-mask-stroke-width-props, var(--xy-minimap-mask-stroke-width, var(--xy-minimap-mask-stroke-width-default)) )}.react-flow__minimap-node{fill:var( --xy-minimap-node-background-color-props, var(--xy-minimap-node-background-color, var(--xy-minimap-node-background-color-default)) );stroke:var( --xy-minimap-node-stroke-color-props, var(--xy-minimap-node-stroke-color, var(--xy-minimap-node-stroke-color-default)) );stroke-width:var( --xy-minimap-node-stroke-width-props, var(--xy-minimap-node-stroke-width, var(--xy-minimap-node-stroke-width-default)) )}.react-flow__background-pattern.dots{fill:var( --xy-background-pattern-color-props, var(--xy-background-pattern-color, var(--xy-background-pattern-dots-color-default)) )}.react-flow__background-pattern.lines{stroke:var( --xy-background-pattern-color-props, var(--xy-background-pattern-color, var(--xy-background-pattern-lines-color-default)) )}.react-flow__background-pattern.cross{stroke:var( --xy-background-pattern-color-props, var(--xy-background-pattern-color, var(--xy-background-pattern-cross-color-default)) )}.react-flow__controls{display:flex;flex-direction:column;box-shadow:var(--xy-controls-box-shadow, var(--xy-controls-box-shadow-default))}.react-flow__controls.horizontal{flex-direction:row}.react-flow__controls-button{display:flex;justify-content:center;align-items:center;height:26px;width:26px;padding:4px;border:none;background:var(--xy-controls-button-background-color, var(--xy-controls-button-background-color-default));border-bottom:1px solid var( --xy-controls-button-border-color-props, var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default)) );color:var( --xy-controls-button-color-props, var(--xy-controls-button-color, var(--xy-controls-button-color-default)) );cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.react-flow__controls-button svg{width:100%;max-width:12px;max-height:12px;fill:currentColor}.react-flow__edge.updating .react-flow__edge-path{stroke:#777}.react-flow__edge-text{font-size:10px}.react-flow__node.selectable:focus,.react-flow__node.selectable:focus-visible{outline:none}.react-flow__node-input,.react-flow__node-default,.react-flow__node-output,.react-flow__node-group{padding:10px;border-radius:var(--xy-node-border-radius, var(--xy-node-border-radius-default));width:150px;font-size:12px;color:var(--xy-node-color, var(--xy-node-color-default));text-align:center;border:var(--xy-node-border, var(--xy-node-border-default));background-color:var(--xy-node-background-color, var(--xy-node-background-color-default))}.react-flow__node-input.selectable:hover,.react-flow__node-default.selectable:hover,.react-flow__node-output.selectable:hover,.react-flow__node-group.selectable:hover{box-shadow:var(--xy-node-boxshadow-hover, var(--xy-node-boxshadow-hover-default))}.react-flow__node-input.selectable.selected,.react-flow__node-input.selectable:focus,.react-flow__node-input.selectable:focus-visible,.react-flow__node-default.selectable.selected,.react-flow__node-default.selectable:focus,.react-flow__node-default.selectable:focus-visible,.react-flow__node-output.selectable.selected,.react-flow__node-output.selectable:focus,.react-flow__node-output.selectable:focus-visible,.react-flow__node-group.selectable.selected,.react-flow__node-group.selectable:focus,.react-flow__node-group.selectable:focus-visible{box-shadow:var(--xy-node-boxshadow-selected, var(--xy-node-boxshadow-selected-default))}.react-flow__node-group{background-color:var(--xy-node-group-background-color, var(--xy-node-group-background-color-default))}.react-flow__nodesselection-rect,.react-flow__selection{background:var(--xy-selection-background-color, var(--xy-selection-background-color-default));border:var(--xy-selection-border, var(--xy-selection-border-default))}.react-flow__nodesselection-rect:focus,.react-flow__nodesselection-rect:focus-visible,.react-flow__selection:focus,.react-flow__selection:focus-visible{outline:none}.react-flow__controls-button:hover{background:var( --xy-controls-button-background-color-hover-props, var(--xy-controls-button-background-color-hover, var(--xy-controls-button-background-color-hover-default)) );color:var( --xy-controls-button-color-hover-props, var(--xy-controls-button-color-hover, var(--xy-controls-button-color-hover-default)) )}.react-flow__controls-button:disabled{pointer-events:none}.react-flow__controls-button:disabled svg{fill-opacity:.4}.react-flow__controls-button:last-child{border-bottom:none}.react-flow__controls.horizontal .react-flow__controls-button{border-bottom:none;border-right:1px solid var( --xy-controls-button-border-color-props, var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default)) )}.react-flow__controls.horizontal .react-flow__controls-button:last-child{border-right:none}.react-flow__resize-control{position:absolute}.react-flow__resize-control.left,.react-flow__resize-control.right{cursor:ew-resize}.react-flow__resize-control.top,.react-flow__resize-control.bottom{cursor:ns-resize}.react-flow__resize-control.top.left,.react-flow__resize-control.bottom.right{cursor:nwse-resize}.react-flow__resize-control.bottom.left,.react-flow__resize-control.top.right{cursor:nesw-resize}.react-flow__resize-control.handle{width:5px;height:5px;border:1px solid #fff;border-radius:1px;background-color:var(--xy-resize-background-color, var(--xy-resize-background-color-default));translate:-50% -50%}.react-flow__resize-control.handle.left{left:0;top:50%}.react-flow__resize-control.handle.right{left:100%;top:50%}.react-flow__resize-control.handle.top{left:50%;top:0}.react-flow__resize-control.handle.bottom{left:50%;top:100%}.react-flow__resize-control.handle.top.left,.react-flow__resize-control.handle.bottom.left{left:0}.react-flow__resize-control.handle.top.right,.react-flow__resize-control.handle.bottom.right{left:100%}.react-flow__resize-control.line{border-color:var(--xy-resize-background-color, var(--xy-resize-background-color-default));border-width:0;border-style:solid}.react-flow__resize-control.line.left,.react-flow__resize-control.line.right{width:1px;transform:translate(-50%);top:0;height:100%}.react-flow__resize-control.line.left{left:0;border-left-width:1px}.react-flow__resize-control.line.right{left:100%;border-right-width:1px}.react-flow__resize-control.line.top,.react-flow__resize-control.line.bottom{height:1px;transform:translateY(-50%);left:0;width:100%}.react-flow__resize-control.line.top{top:0;border-top-width:1px}.react-flow__resize-control.line.bottom{border-bottom-width:1px;top:100%}.react-flow__edge-textbg{fill:var(--xy-edge-label-background-color, var(--xy-edge-label-background-color-default))}.react-flow__edge-text{fill:var(--xy-edge-label-color, var(--xy-edge-label-color-default))}._container_1ax9i_1{display:flex;flex-direction:column;gap:8px;height:100vh;min-height:0}._mapContainer_1ax9i_9{width:100%;flex:1;min-height:0}._sliStatusIcon_1qjea_1{display:flex;align-items:center;justify-content:center}._sliStatusIcon_1qjea_1._animated_1qjea_8{animation:_popIn_1qjea_1 .6s ease-out forwards}._sliStatusIcon_1qjea_1._recovered_1qjea_12>svg>path:nth-child(1){fill:var(--color-errors)}._sliStatusIcon_1qjea_1._breached_1qjea_16>svg>path:nth-child(1){fill:var(--color-faults)}@keyframes _popIn_1qjea_1{0%{transform:scale(0);opacity:0}50%{transform:scale(1.2);opacity:.8}80%{transform:scale(.9);opacity:.9}to{transform:scale(1);opacity:1}}._healthDonut_zp24a_1{position:relative;display:flex;justify-content:center;align-items:center}._absolute_1yflx_1{position:absolute;z-index:1}._donut_1jbrr_1{position:relative;display:flex;justify-content:center;align-items:center}._icon_1jbrr_8{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;display:flex;align-items:center;justify-content:center;color:var(--color-icon);z-index:1}._inverted_1jbrr_21{fill:var(--color-container-default)}._inverted_1jbrr_21 :is(path,line,circle,g,rect){fill:var(--color-container-default)}._health-donut-legend_z9qwp_1{position:absolute;width:fit-content;height:fit-content;background-color:var(--color-container-default);border-radius:2px;box-shadow:0 4px 6px #0000001a,0 1px 3px #00000014;z-index:10;left:50%;top:50%}._triangle-left_z9qwp_14:before,._triangle-right_z9qwp_15:before{content:"";position:absolute;top:25%;transform:translateY(-50%);width:0;height:0}._triangle-left_z9qwp_14{transform:translate(8px,-25%)}._triangle-left_z9qwp_14:before{left:-8px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid var(--color-container-default);filter:drop-shadow(-3px 0 2px rgba(0,0,0,.1))}._triangle-right_z9qwp_15{transform:translate(calc(-100% - 8px),-25%)}._triangle-right_z9qwp_15:before{right:-8px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid var(--color-container-default);filter:drop-shadow(3px 0 2px rgba(0,0,0,.1))}._health-donut-legend-content_z9qwp_48{width:fit-content;height:fit-content;padding:12px;display:flex;flex-direction:column;justify-content:start;gap:4px;white-space:nowrap}/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-800:oklch(42.4% .199 265.638);--color-purple-500:oklch(62.7% .265 303.9);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-black:#000;--color-white:#fff;--spacing:calc(var(--rem)*.25);--text-xs:calc(var(--rem)*.75);--text-xs--line-height:calc(calc(var(--rem)*1)/calc(var(--rem)*.75));--text-sm:calc(var(--rem)*.875);--text-sm--line-height:calc(calc(var(--rem)*1.25)/calc(var(--rem)*.875));--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-xs:calc(var(--rem)*.125);--radius-lg:calc(var(--rem)*.5);--radius-xl:calc(var(--rem)*.75);--radius-2xl:calc(var(--rem)*1);--animate-spin:spin 1s linear infinite;--blur-xs:4px;--aspect-video:16/9;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--rem:16px;--color-cl-red-100:#fff5f5;--color-cl-red-300:#ea7158;--color-cl-red-500:#d13313;--color-cl-blue-100:#d1f1ff;--color-cl-blue-300:#75cfff;--color-cl-blue-400:#42b4ff;--color-cl-blue-450:#7aa4f0;--color-cl-blue-500:#006ce0;--color-cl-blue-900:#002b66;--color-cl-squid-black:#151d26;--color-cl-amber-400:#f90;--color-cl-purple-500:#d476fd;--color-cl-gray-50:#ebebf0;--color-cl-gray-250:#eaeded;--color-cl-gray-350:#c6c6cd;--color-cl-gray-400:#b4b4bb;--color-cl-gary-500:#7d8998;--color-cl-gray-600:#687078;--color-cl-gray-650:#424650;--color-cl-gray-700:#545b64;--color-cl-gray-750:#232b37;--color-cl-gray-950:#0f141a;--color-container-default:light-dark(var(--color-white),var(--color-cl-squid-black));--color-container-breached:light-dark(var(--color-cl-red-100),var(--color-cl-squid-black));--color-status-default:light-dark(var(--color-cl-gary-500),var(--color-cl-gray-250));--color-status-breached:var(--color-cl-red-500);--color-status-default-hover:var(--color-cl-gray-400);--color-status-breached-hover:var(--color-cl-red-300);--color-divider-default:light-dark(var(--color-cl-gray-350),var(--color-cl-gray-650));--color-body-default:light-dark(var(--color-cl-gray-950),var(--color-cl-gray-350));--color-body-secondary:light-dark(var(--color-cl-gray-650),var(--color-cl-gray-350));--color-interactive:light-dark(var(--color-cl-blue-500),var(--color-cl-blue-400),);--color-link-default:light-dark(var(--color-cl-blue-500),var(--color-cl-blue-400));--color-link-hover:light-dark(var(--color-cl-blue-900),var(--color-cl-blue-300));--color-button-hover:var(--color-cl-blue-100);--color-ok:var(--color-cl-blue-450);--color-faults:var(--color-cl-red-500);--color-errors:var(--color-cl-amber-400);--color-requests:light-dark(var(--color-cl-gray-700),var(--color-white));--color-icon:var(--color-cl-gray-600);--color-spinner:var(--color-cl-gary-500);--color-map-dots:light-dark(var(--color-cl-gray-50),var(--color-cl-gray-750))}:root:has(body.awsui-polaris-dark-mode){--color-container-default:var(--color-cl-squid-black);--color-container-breached:var(--color-cl-squid-black);--color-status-default:var(--color-cl-gray-250);--color-status-breached:var(--color-cl-red-500);--color-status-default-hover:var(--color-cl-gray-400);--color-status-breached-hover:var(--color-cl-red-300);--color-divider-default:var(--color-cl-gray-650);--color-body-default:var(--color-cl-gray-350);--color-body-secondary:var(--color-cl-gray-350);--color-interactive:var(--color-cl-blue-400);--color-link-default:var(--color-cl-blue-400);--color-link-hover:var(--color-cl-blue-300);--color-button-hover:var(--color-cl-blue-100);--color-ok:var(--color-cl-blue-450);--color-faults:var(--color-cl-red-500);--color-errors:var(--color-cl-amber-400);--color-throttles:var(--color-cl-purple-500);--color-requests:var(--color-white);--color-spinner:var(--color-cl-gary-500);--color-map-dots:var(--color-cl-gray-750)}:root:has(#opensearch-dashboards-body){--color-cl-blue-500:#0268bc;--color-blue-500:#0268bc;--color-cl-red-500:#c61e25;--color-cl-amber-400:#eaae01}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.collapse{visibility:collapse!important}.visible{visibility:visible!important}.absolute{position:absolute!important}.fixed{position:fixed!important}.relative{position:relative!important}.static{position:static!important}.inset-0{inset:calc(var(--spacing)*0)!important}.top-0{top:calc(var(--spacing)*0)!important}.top-1\\/2{top:50%!important}.top-2{top:calc(var(--spacing)*2)!important}.top-15{top:calc(var(--spacing)*15)!important}.top-\\[14px\\]{top:14px!important}.-right-4{right:calc(var(--spacing)*-4)!important}.right-0{right:calc(var(--spacing)*0)!important}.right-4{right:calc(var(--spacing)*4)!important}.left-0{left:calc(var(--spacing)*0)!important}.z-1{z-index:1!important}.z-10{z-index:10!important}.z-50{z-index:50!important}.z-1000{z-index:1000!important}.z-9999{z-index:9999!important}.col-span-14{grid-column:span 14/span 14!important}.col-span-16{grid-column:span 16/span 16!important}.col-span-42{grid-column:span 42/span 42!important}.col-span-44{grid-column:span 44/span 44!important}.col-start-1{grid-column-start:1!important}.row-start-1{grid-row-start:1!important}.mx-2{margin-inline:calc(var(--spacing)*2)!important}.-mt-0\\.5{margin-top:calc(var(--spacing)*-.5)!important}.-mt-2{margin-top:calc(var(--spacing)*-2)!important}.mt-1{margin-top:calc(var(--spacing)*1)!important}.mr-0{margin-right:calc(var(--spacing)*0)!important}.mb-0\\.5{margin-bottom:calc(var(--spacing)*.5)!important}.-ml-0\\.5{margin-left:calc(var(--spacing)*-.5)!important}.box-border{box-sizing:border-box!important}.block{display:block!important}.contents{display:contents!important}.flex{display:flex!important}.grid{display:grid!important}.hidden{display:none!important}.inline-block{display:inline-block!important}.inline-flex{display:inline-flex!important}.aspect-square{aspect-ratio:1!important}.aspect-video{aspect-ratio:var(--aspect-video)!important}.h-4{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)!important}.h-8{height:calc(var(--spacing)*8)!important}.h-10{height:calc(var(--spacing)*10)!important}.h-24{height:calc(var(--spacing)*24)!important}.h-80{height:calc(var(--spacing)*80)!important}.h-full{height:100%!important}.min-h-24{min-height:calc(var(--spacing)*24)!important}.min-h-screen{min-height:100vh!important}.w-4{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)!important}.w-8{width:calc(var(--spacing)*8)!important}.w-10{width:calc(var(--spacing)*10)!important}.w-24{width:calc(var(--spacing)*24)!important}.w-58{width:calc(var(--spacing)*58)!important}.w-60{width:calc(var(--spacing)*60)!important}.w-68{width:calc(var(--spacing)*68)!important}.w-300{width:calc(var(--spacing)*300)!important}.w-full{width:100%!important}.flex-grow{flex-grow:1!important}.-translate-y-1\\/2{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.rotate-0{rotate:none!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)!important}.animate-spin{animation:var(--animate-spin)!important}.cursor-not-allowed{cursor:not-allowed!important}.cursor-pointer{cursor:pointer!important}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))!important}.grid-cols-58{grid-template-columns:repeat(58,minmax(0,1fr))!important}.flex-col{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.items-center{align-items:center!important}.items-end{align-items:flex-end!important}.justify-between{justify-content:space-between!important}.justify-center{justify-content:center!important}.gap-0\\.5{gap:calc(var(--spacing)*.5)!important}.gap-1\\.5{gap:calc(var(--spacing)*1.5)!important}.gap-2{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)!important}.gap-8{gap:calc(var(--spacing)*8)!important}.truncate{text-overflow:ellipsis!important;white-space:nowrap!important;overflow:hidden!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.rounded{border-radius:.25rem!important}.rounded-2xl{border-radius:var(--radius-2xl)!important}.rounded-full{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)!important}.rounded-xl{border-radius:var(--radius-xl)!important}.rounded-xs{border-radius:var(--radius-xs)!important}.border{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-0{border-style:var(--tw-border-style)!important;border-width:0!important}.border-2{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-8{border-style:var(--tw-border-style)!important;border-width:8px!important}.border-l-1{border-left-style:var(--tw-border-style)!important;border-left-width:1px!important}.border-dashed{--tw-border-style:dashed!important;border-style:dashed!important}.border-solid{--tw-border-style:solid!important;border-style:solid!important}.border-blue-400{border-color:var(--color-blue-400)!important}.border-blue-500{border-color:var(--color-blue-500)!important}.border-divider-default{border-color:var(--color-divider-default)!important}.border-gray-200{border-color:var(--color-gray-200)!important}.border-spinner{border-color:var(--color-spinner)!important}.border-status-breached{border-color:var(--color-status-breached)!important}.border-status-default{border-color:var(--color-status-default)!important}.border-b-transparent{border-bottom-color:#0000!important}.bg-blue-50{background-color:var(--color-blue-50)!important}.bg-blue-100{background-color:var(--color-blue-100)!important}.bg-blue-500{background-color:var(--color-blue-500)!important}.bg-blue-600{background-color:var(--color-blue-600)!important}.bg-container-breached{background-color:var(--color-container-breached)!important}.bg-container-default{background-color:var(--color-container-default)!important}.bg-container-default\\/50{background-color:color-mix(in srgb,light-dark(var(--color-white),var(--color-cl-squid-black))50%,transparent)!important}@supports (color:color-mix(in lab,red,red)){.bg-container-default\\/50{background-color:color-mix(in oklab,var(--color-container-default)50%,transparent)!important}}.bg-purple-500{background-color:var(--color-purple-500)!important}.bg-transparent{background-color:#0000!important}.bg-white{background-color:var(--color-white)!important}.object-cover{object-fit:cover!important}.p-0{padding:calc(var(--spacing)*0)!important}.p-2{padding:calc(var(--spacing)*2)!important}.p-3{padding:calc(var(--spacing)*3)!important}.p-4{padding:calc(var(--spacing)*4)!important}.px-2{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)!important}.py-1{padding-block:calc(var(--spacing)*1)!important}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)!important}.py-2{padding-block:calc(var(--spacing)*2)!important}.py-3{padding-block:calc(var(--spacing)*3)!important}.pr-1{padding-right:calc(var(--spacing)*1)!important}.pl-1{padding-left:calc(var(--spacing)*1)!important}.pl-2{padding-left:calc(var(--spacing)*2)!important}.pl-2\\.5{padding-left:calc(var(--spacing)*2.5)!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-sm{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.font-bold{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap!important}.text-black{color:var(--color-black)!important}.text-blue-800{color:var(--color-blue-800)!important}.text-body-default{color:var(--color-body-default)!important}.text-body-secondary{color:var(--color-body-secondary)!important}.text-errors{color:var(--color-errors)!important}.text-faults{color:var(--color-faults)!important}.text-gray-400{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)!important}.text-link-default{color:var(--color-link-default)!important}.text-white{color:var(--color-white)!important}.lowercase{text-transform:lowercase!important}.uppercase{text-transform:uppercase!important}.opacity-30{opacity:.3!important}.opacity-100{opacity:1!important}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline-2{outline-style:var(--tw-outline-style)!important;outline-width:2px!important}.outline-offset-4{outline-offset:4px!important}.outline-blue-500{outline-color:var(--color-blue-500)!important}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}.backdrop-blur-xs{--tw-backdrop-blur:blur(var(--blur-xs))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-all{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-transform{transition-property:transform,translate,scale,rotate!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s!important;transition-duration:.2s!important}.duration-300{--tw-duration:.3s!important;transition-duration:.3s!important}@media (hover:hover){.group-hover\\:rotate-90:is(:where(.group):hover *){rotate:90deg!important}.hover\\:cursor-pointer:hover{cursor:pointer!important}.hover\\:border-blue-600:hover{border-color:var(--color-blue-600)!important}.hover\\:border-status-breached-hover:hover{border-color:var(--color-status-breached-hover)!important}.hover\\:border-status-default-hover:hover{border-color:var(--color-status-default-hover)!important}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)!important}.hover\\:bg-white:hover{background-color:var(--color-white)!important}.hover\\:text-interactive:hover{color:var(--color-interactive)!important}.hover\\:text-link-hover:hover{color:var(--color-link-hover)!important}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}}.focus\\:outline-none:focus{--tw-outline-style:none!important;outline-style:none!important}@media (prefers-color-scheme:dark){.dark\\:shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}}.shadow-node-selected{box-shadow:0 6px 16px 2px #3b82f699}}.react-flow{background-color:var(--color-container-default)}.react-flow__handle{opacity:0!important;background-color:#0000!important;border-color:#0000!important}.react-flow__attribution{background-color:#0000}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Or = Object.defineProperty;
var $r = (e, t, n) => t in e ? Or(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Le = (e, t, n) => $r(e, typeof t != "symbol" ? t + "" : t, n);
import * as w from "react";
import Mt, { useState as Me, useCallback as W, createContext as m1, forwardRef as q, memo as be, useMemo as Ee, useContext as _t, useLayoutEffect as Tr, useEffect as ue, useRef as ce } from "react";
import Fr from "react-dom";
function $4(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var v3 = { exports: {} }, Qt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function Pr() {
  if (Cn) return Qt;
  Cn = 1;
  var e = Mt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, c) {
    var u, d = {}, f = null, h = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (u in l) r.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (a && a.defaultProps) for (u in l = a.defaultProps, l) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: a, key: f, ref: h, props: d, _owner: o.current };
  }
  return Qt.Fragment = n, Qt.jsx = s, Qt.jsxs = s, Qt;
}
var Jt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function jr() {
  return pn || (pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Mt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), C = Symbol.iterator, g = "@@iterator";
    function v(M) {
      if (M === null || typeof M != "object")
        return null;
      var D = C && M[C] || M[g];
      return typeof D == "function" ? D : null;
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(M) {
      {
        for (var D = arguments.length, z = new Array(D > 1 ? D - 1 : 0), ne = 1; ne < D; ne++)
          z[ne - 1] = arguments[ne];
        p("error", M, z);
      }
    }
    function p(M, D, z) {
      {
        var ne = L.ReactDebugCurrentFrame, he = ne.getStackAddendum();
        he !== "" && (D += "%s", z = z.concat([he]));
        var Ce = z.map(function(le) {
          return String(le);
        });
        Ce.unshift("Warning: " + D), Function.prototype.apply.call(console[M], console, Ce);
      }
    }
    var x = !1, _ = !1, y = !1, S = !1, k = !1, N;
    N = Symbol.for("react.module.reference");
    function V(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === i || k || M === o || M === c || M === u || S || M === h || x || _ || y || typeof M == "object" && M !== null && (M.$$typeof === f || M.$$typeof === d || M.$$typeof === s || M.$$typeof === a || M.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === N || M.getModuleId !== void 0));
    }
    function T(M, D, z) {
      var ne = M.displayName;
      if (ne)
        return ne;
      var he = D.displayName || D.name || "";
      return he !== "" ? z + "(" + he + ")" : z;
    }
    function O(M) {
      return M.displayName || "Context";
    }
    function F(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case a:
            var D = M;
            return O(D) + ".Consumer";
          case s:
            var z = M;
            return O(z._context) + ".Provider";
          case l:
            return T(M, M.render, "ForwardRef");
          case d:
            var ne = M.displayName || null;
            return ne !== null ? ne : F(M.type) || "Memo";
          case f: {
            var he = M, Ce = he._payload, le = he._init;
            try {
              return F(le(Ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, A = 0, I, $, R, Z, P, H, j;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function X() {
      {
        if (A === 0) {
          I = console.log, $ = console.info, R = console.warn, Z = console.error, P = console.group, H = console.groupCollapsed, j = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        A++;
      }
    }
    function K() {
      {
        if (A--, A === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, M, {
              value: I
            }),
            info: E({}, M, {
              value: $
            }),
            warn: E({}, M, {
              value: R
            }),
            error: E({}, M, {
              value: Z
            }),
            group: E({}, M, {
              value: P
            }),
            groupCollapsed: E({}, M, {
              value: H
            }),
            groupEnd: E({}, M, {
              value: j
            })
          });
        }
        A < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = L.ReactCurrentDispatcher, Q;
    function B(M, D, z) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (he) {
            var ne = he.stack.trim().match(/\n( *(at )?)/);
            Q = ne && ne[1] || "";
          }
        return `
` + Q + M;
      }
    }
    var U = !1, ie;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new re();
    }
    function te(M, D) {
      if (!M || U)
        return "";
      {
        var z = ie.get(M);
        if (z !== void 0)
          return z;
      }
      var ne;
      U = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ce;
      Ce = J.current, J.current = null, X();
      try {
        if (D) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (Ze) {
              ne = Ze;
            }
            Reflect.construct(M, [], le);
          } else {
            try {
              le.call();
            } catch (Ze) {
              ne = Ze;
            }
            M.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            ne = Ze;
          }
          M();
        }
      } catch (Ze) {
        if (Ze && ne && typeof Ze.stack == "string") {
          for (var se = Ze.stack.split(`
`), Ne = ne.stack.split(`
`), we = se.length - 1, ye = Ne.length - 1; we >= 1 && ye >= 0 && se[we] !== Ne[ye]; )
            ye--;
          for (; we >= 1 && ye >= 0; we--, ye--)
            if (se[we] !== Ne[ye]) {
              if (we !== 1 || ye !== 1)
                do
                  if (we--, ye--, ye < 0 || se[we] !== Ne[ye]) {
                    var Re = `
` + se[we].replace(" at new ", " at ");
                    return M.displayName && Re.includes("<anonymous>") && (Re = Re.replace("<anonymous>", M.displayName)), typeof M == "function" && ie.set(M, Re), Re;
                  }
                while (we >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        U = !1, J.current = Ce, K(), Error.prepareStackTrace = he;
      }
      var lt = M ? M.displayName || M.name : "", qe = lt ? B(lt) : "";
      return typeof M == "function" && ie.set(M, qe), qe;
    }
    function ee(M, D, z) {
      return te(M, !1);
    }
    function fe(M) {
      var D = M.prototype;
      return !!(D && D.isReactComponent);
    }
    function ge(M, D, z) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return te(M, fe(M));
      if (typeof M == "string")
        return B(M);
      switch (M) {
        case c:
          return B("Suspense");
        case u:
          return B("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case l:
            return ee(M.render);
          case d:
            return ge(M.type, D, z);
          case f: {
            var ne = M, he = ne._payload, Ce = ne._init;
            try {
              return ge(Ce(he), D, z);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, Se = {}, je = L.ReactDebugCurrentFrame;
    function De(M) {
      if (M) {
        var D = M._owner, z = ge(M.type, M._source, D ? D.type : null);
        je.setExtraStackFrame(z);
      } else
        je.setExtraStackFrame(null);
    }
    function Zt(M, D, z, ne, he) {
      {
        var Ce = Function.call.bind(ae);
        for (var le in M)
          if (Ce(M, le)) {
            var se = void 0;
            try {
              if (typeof M[le] != "function") {
                var Ne = Error((ne || "React class") + ": " + z + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              se = M[le](D, le, ne, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (we) {
              se = we;
            }
            se && !(se instanceof Error) && (De(he), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", z, le, typeof se), De(null)), se instanceof Error && !(se.message in Se) && (Se[se.message] = !0, De(he), b("Failed %s type: %s", z, se.message), De(null));
          }
      }
    }
    var It = Array.isArray;
    function Je(M) {
      return It(M);
    }
    function Ct(M) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, z = D && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return z;
      }
    }
    function Gt(M) {
      try {
        return pt(M), !1;
      } catch {
        return !0;
      }
    }
    function pt(M) {
      return "" + M;
    }
    function et(M) {
      if (Gt(M))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ct(M)), pt(M);
    }
    var st = L.ReactCurrentOwner, S1 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, M1, Rt;
    function N2(M) {
      if (ae.call(M, "ref")) {
        var D = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function Z2(M) {
      if (ae.call(M, "key")) {
        var D = Object.getOwnPropertyDescriptor(M, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function I2(M, D) {
      typeof M.ref == "string" && st.current;
    }
    function R2(M, D) {
      {
        var z = function() {
          M1 || (M1 = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        z.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function A2(M, D) {
      {
        var z = function() {
          Rt || (Rt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        z.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var O2 = function(M, D, z, ne, he, Ce, le) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: M,
        key: D,
        ref: z,
        props: le,
        // Record the component responsible for creating this element.
        _owner: Ce
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function $2(M, D, z, ne, he) {
      {
        var Ce, le = {}, se = null, Ne = null;
        z !== void 0 && (et(z), se = "" + z), Z2(D) && (et(D.key), se = "" + D.key), N2(D) && (Ne = D.ref, I2(D, he));
        for (Ce in D)
          ae.call(D, Ce) && !S1.hasOwnProperty(Ce) && (le[Ce] = D[Ce]);
        if (M && M.defaultProps) {
          var we = M.defaultProps;
          for (Ce in we)
            le[Ce] === void 0 && (le[Ce] = we[Ce]);
        }
        if (se || Ne) {
          var ye = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          se && R2(le, ye), Ne && A2(le, ye);
        }
        return O2(M, se, Ne, he, ne, st.current, le);
      }
    }
    var Yt = L.ReactCurrentOwner, _1 = L.ReactDebugCurrentFrame;
    function at(M) {
      if (M) {
        var D = M._owner, z = ge(M.type, M._source, D ? D.type : null);
        _1.setExtraStackFrame(z);
      } else
        _1.setExtraStackFrame(null);
    }
    var qt;
    qt = !1;
    function Ut(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function k1() {
      {
        if (Yt.current) {
          var M = F(Yt.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function T2(M) {
      return "";
    }
    var N1 = {};
    function F2(M) {
      {
        var D = k1();
        if (!D) {
          var z = typeof M == "string" ? M : M.displayName || M.name;
          z && (D = `

Check the top-level render call using <` + z + ">.");
        }
        return D;
      }
    }
    function Z1(M, D) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var z = F2(D);
        if (N1[z])
          return;
        N1[z] = !0;
        var ne = "";
        M && M._owner && M._owner !== Yt.current && (ne = " It was passed a child from " + F(M._owner.type) + "."), at(M), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, ne), at(null);
      }
    }
    function I1(M, D) {
      {
        if (typeof M != "object")
          return;
        if (Je(M))
          for (var z = 0; z < M.length; z++) {
            var ne = M[z];
            Ut(ne) && Z1(ne, D);
          }
        else if (Ut(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var he = v(M);
          if (typeof he == "function" && he !== M.entries)
            for (var Ce = he.call(M), le; !(le = Ce.next()).done; )
              Ut(le.value) && Z1(le.value, D);
        }
      }
    }
    function P2(M) {
      {
        var D = M.type;
        if (D == null || typeof D == "string")
          return;
        var z;
        if (typeof D == "function")
          z = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === d))
          z = D.propTypes;
        else
          return;
        if (z) {
          var ne = F(D);
          Zt(z, M.props, "prop", ne, M);
        } else if (D.PropTypes !== void 0 && !qt) {
          qt = !0;
          var he = F(D);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function j2(M) {
      {
        for (var D = Object.keys(M.props), z = 0; z < D.length; z++) {
          var ne = D[z];
          if (ne !== "children" && ne !== "key") {
            at(M), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), at(null);
            break;
          }
        }
        M.ref !== null && (at(M), b("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    var R1 = {};
    function A1(M, D, z, ne, he, Ce) {
      {
        var le = V(M);
        if (!le) {
          var se = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = T2();
          Ne ? se += Ne : se += k1();
          var we;
          M === null ? we = "null" : Je(M) ? we = "array" : M !== void 0 && M.$$typeof === t ? (we = "<" + (F(M.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : we = typeof M, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, se);
        }
        var ye = $2(M, D, z, he, Ce);
        if (ye == null)
          return ye;
        if (le) {
          var Re = D.children;
          if (Re !== void 0)
            if (ne)
              if (Je(Re)) {
                for (var lt = 0; lt < Re.length; lt++)
                  I1(Re[lt], M);
                Object.freeze && Object.freeze(Re);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              I1(Re, M);
        }
        if (ae.call(D, "key")) {
          var qe = F(M), Ze = Object.keys(D).filter(function(z2) {
            return z2 !== "key";
          }), Kt = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!R1[qe + Kt]) {
            var W2 = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Kt, qe, W2, qe), R1[qe + Kt] = !0;
          }
        }
        return M === r ? j2(ye) : P2(ye), ye;
      }
    }
    function D2(M, D, z) {
      return A1(M, D, z, !0);
    }
    function V2(M, D, z) {
      return A1(M, D, z, !1);
    }
    var H2 = V2, B2 = D2;
    Jt.Fragment = r, Jt.jsx = H2, Jt.jsxs = B2;
  }()), Jt;
}
process.env.NODE_ENV === "production" ? v3.exports = Pr() : v3.exports = jr();
var m = v3.exports;
function ke(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = ke(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Dr = { value: () => {
} };
function d2() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new G1(n);
}
function G1(e) {
  this._ = e;
}
function Vr(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
G1.prototype = d2.prototype = {
  constructor: G1,
  on: function(e, t) {
    var n = this._, r = Vr(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Hr(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ln(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ln(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new G1(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  }
};
function Hr(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ln(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Dr, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var y3 = "http://www.w3.org/1999/xhtml";
const mn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: y3,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function f2(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), mn.hasOwnProperty(t) ? { space: mn[t], local: e } : e;
}
function Br(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === y3 && t.documentElement.namespaceURI === y3 ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Wr(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function T4(e) {
  var t = f2(e);
  return (t.local ? Wr : Br)(t);
}
function zr() {
}
function V3(e) {
  return e == null ? zr : function() {
    return this.querySelector(e);
  };
}
function Xr(e) {
  typeof e != "function" && (e = V3(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, u = 0; u < s; ++u)
      (l = i[u]) && (c = e.call(l, l.__data__, u, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[u] = c);
  return new Fe(r, this._parents);
}
function Gr(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Yr() {
  return [];
}
function F4(e) {
  return e == null ? Yr : function() {
    return this.querySelectorAll(e);
  };
}
function qr(e) {
  return function() {
    return Gr(e.apply(this, arguments));
  };
}
function Ur(e) {
  typeof e == "function" ? e = qr(e) : e = F4(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Fe(r, o);
}
function P4(e) {
  return function() {
    return this.matches(e);
  };
}
function j4(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Kr = Array.prototype.find;
function Qr(e) {
  return function() {
    return Kr.call(this.children, e);
  };
}
function Jr() {
  return this.firstElementChild;
}
function e9(e) {
  return this.select(e == null ? Jr : Qr(typeof e == "function" ? e : j4(e)));
}
var t9 = Array.prototype.filter;
function n9() {
  return Array.from(this.children);
}
function r9(e) {
  return function() {
    return t9.call(this.children, e);
  };
}
function o9(e) {
  return this.selectAll(e == null ? n9 : r9(typeof e == "function" ? e : j4(e)));
}
function i9(e) {
  typeof e != "function" && (e = P4(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Fe(r, this._parents);
}
function D4(e) {
  return new Array(e.length);
}
function s9() {
  return new Fe(this._enter || this._groups.map(D4), this._parents);
}
function Q1(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Q1.prototype = {
  constructor: Q1,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function a9(e) {
  return function() {
    return e;
  };
}
function l9(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Q1(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function c9(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), u = t.length, d = i.length, f = new Array(u), h;
  for (a = 0; a < u; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", c.has(h) ? o[a] = l : c.set(h, l));
  for (a = 0; a < d; ++a)
    h = s.call(e, i[a], a, i) + "", (l = c.get(h)) ? (r[a] = l, l.__data__ = i[a], c.delete(h)) : n[a] = new Q1(e, i[a]);
  for (a = 0; a < u; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function u9(e) {
  return e.__data__;
}
function d9(e, t) {
  if (!arguments.length) return Array.from(this, u9);
  var n = t ? c9 : l9, r = this._parents, o = this._groups;
  typeof e != "function" && (e = a9(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var u = r[c], d = o[c], f = d.length, h = f9(e.call(u, u && u.__data__, c, r)), C = h.length, g = a[c] = new Array(C), v = s[c] = new Array(C), L = l[c] = new Array(f);
    n(u, d, g, v, L, h, t);
    for (var b = 0, p = 0, x, _; b < C; ++b)
      if (x = g[b]) {
        for (b >= p && (p = b + 1); !(_ = v[p]) && ++p < C; ) ;
        x._next = _ || null;
      }
  }
  return s = new Fe(s, r), s._enter = a, s._exit = l, s;
}
function f9(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function h9() {
  return new Fe(this._exit || this._groups.map(D4), this._parents);
}
function g9(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function C9(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], u = r[l], d = c.length, f = a[l] = new Array(d), h, C = 0; C < d; ++C)
      (h = c[C] || u[C]) && (f[C] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Fe(a, this._parents);
}
function p9() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function L9(e) {
  e || (e = m9);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, u = 0; u < a; ++u)
      (c = s[u]) && (l[u] = c);
    l.sort(t);
  }
  return new Fe(o, this._parents).order();
}
function m9(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function w9() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function x9() {
  return Array.from(this);
}
function v9() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function y9() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function b9() {
  return !this.node();
}
function E9(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function S9(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function M9(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function _9(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function k9(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function N9(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Z9(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function I9(e, t) {
  var n = f2(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? M9 : S9 : typeof t == "function" ? n.local ? Z9 : N9 : n.local ? k9 : _9)(n, t));
}
function V4(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function R9(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function A9(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function O9(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function $9(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? R9 : typeof t == "function" ? O9 : A9)(e, t, n ?? "")) : jt(this.node(), e);
}
function jt(e, t) {
  return e.style.getPropertyValue(t) || V4(e).getComputedStyle(e, null).getPropertyValue(t);
}
function T9(e) {
  return function() {
    delete this[e];
  };
}
function F9(e, t) {
  return function() {
    this[e] = t;
  };
}
function P9(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function j9(e, t) {
  return arguments.length > 1 ? this.each((t == null ? T9 : typeof t == "function" ? P9 : F9)(e, t)) : this.node()[e];
}
function H4(e) {
  return e.trim().split(/^|\s+/);
}
function H3(e) {
  return e.classList || new B4(e);
}
function B4(e) {
  this._node = e, this._names = H4(e.getAttribute("class") || "");
}
B4.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function W4(e, t) {
  for (var n = H3(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function z4(e, t) {
  for (var n = H3(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function D9(e) {
  return function() {
    W4(this, e);
  };
}
function V9(e) {
  return function() {
    z4(this, e);
  };
}
function H9(e, t) {
  return function() {
    (t.apply(this, arguments) ? W4 : z4)(this, e);
  };
}
function B9(e, t) {
  var n = H4(e + "");
  if (arguments.length < 2) {
    for (var r = H3(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? H9 : t ? D9 : V9)(n, t));
}
function W9() {
  this.textContent = "";
}
function z9(e) {
  return function() {
    this.textContent = e;
  };
}
function X9(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function G9(e) {
  return arguments.length ? this.each(e == null ? W9 : (typeof e == "function" ? X9 : z9)(e)) : this.node().textContent;
}
function Y9() {
  this.innerHTML = "";
}
function q9(e) {
  return function() {
    this.innerHTML = e;
  };
}
function U9(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function K9(e) {
  return arguments.length ? this.each(e == null ? Y9 : (typeof e == "function" ? U9 : q9)(e)) : this.node().innerHTML;
}
function Q9() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function J9() {
  return this.each(Q9);
}
function e7() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function t7() {
  return this.each(e7);
}
function n7(e) {
  var t = typeof e == "function" ? e : T4(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function r7() {
  return null;
}
function o7(e, t) {
  var n = typeof e == "function" ? e : T4(e), r = t == null ? r7 : typeof t == "function" ? t : V3(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function i7() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function s7() {
  return this.each(i7);
}
function a7() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function l7() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function c7(e) {
  return this.select(e ? l7 : a7);
}
function u7(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function d7(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function f7(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function h7(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function g7(e, t, n) {
  return function() {
    var r = this.__on, o, i = d7(t);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function C7(e, t, n) {
  var r = f7(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, u; l < c; ++l)
        for (o = 0, u = a[l]; o < i; ++o)
          if ((s = r[o]).type === u.type && s.name === u.name)
            return u.value;
    }
    return;
  }
  for (a = t ? g7 : h7, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function X4(e, t, n) {
  var r = V4(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function p7(e, t) {
  return function() {
    return X4(this, e, t);
  };
}
function L7(e, t) {
  return function() {
    return X4(this, e, t.apply(this, arguments));
  };
}
function m7(e, t) {
  return this.each((typeof t == "function" ? L7 : p7)(e, t));
}
function* w7() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var G4 = [null];
function Fe(e, t) {
  this._groups = e, this._parents = t;
}
function w1() {
  return new Fe([[document.documentElement]], G4);
}
function x7() {
  return this;
}
Fe.prototype = w1.prototype = {
  constructor: Fe,
  select: Xr,
  selectAll: Ur,
  selectChild: e9,
  selectChildren: o9,
  filter: i9,
  data: d9,
  enter: s9,
  exit: h9,
  join: g9,
  merge: C9,
  selection: x7,
  order: p9,
  sort: L9,
  call: w9,
  nodes: x9,
  node: v9,
  size: y9,
  empty: b9,
  each: E9,
  attr: I9,
  style: $9,
  property: j9,
  classed: B9,
  text: G9,
  html: K9,
  raise: J9,
  lower: t7,
  append: n7,
  insert: o7,
  remove: s7,
  clone: c7,
  datum: u7,
  on: C7,
  dispatch: m7,
  [Symbol.iterator]: w7
};
function Te(e) {
  return typeof e == "string" ? new Fe([[document.querySelector(e)]], [document.documentElement]) : new Fe([[e]], G4);
}
function v7(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function He(e, t) {
  if (e = v7(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const y7 = { passive: !1 }, l1 = { capture: !0, passive: !1 };
function G2(e) {
  e.stopImmediatePropagation();
}
function Ft(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Y4(e) {
  var t = e.document.documentElement, n = Te(e).on("dragstart.drag", Ft, l1);
  "onselectstart" in t ? n.on("selectstart.drag", Ft, l1) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function q4(e, t) {
  var n = e.document.documentElement, r = Te(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Ft, l1), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const $1 = (e) => () => e;
function b3(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: c,
  dispatch: u
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: u }
  });
}
b3.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function b7(e) {
  return !e.ctrlKey && !e.button;
}
function E7() {
  return this.parentNode;
}
function S7(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function M7() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function U4() {
  var e = b7, t = E7, n = S7, r = M7, o = {}, i = d2("start", "drag", "end"), s = 0, a, l, c, u, d = 0;
  function f(x) {
    x.on("mousedown.drag", h).filter(r).on("touchstart.drag", v).on("touchmove.drag", L, y7).on("touchend.drag touchcancel.drag", b).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(x, _) {
    if (!(u || !e.call(this, x, _))) {
      var y = p(this, t.call(this, x, _), x, _, "mouse");
      y && (Te(x.view).on("mousemove.drag", C, l1).on("mouseup.drag", g, l1), Y4(x.view), G2(x), c = !1, a = x.clientX, l = x.clientY, y("start", x));
    }
  }
  function C(x) {
    if (Ft(x), !c) {
      var _ = x.clientX - a, y = x.clientY - l;
      c = _ * _ + y * y > d;
    }
    o.mouse("drag", x);
  }
  function g(x) {
    Te(x.view).on("mousemove.drag mouseup.drag", null), q4(x.view, c), Ft(x), o.mouse("end", x);
  }
  function v(x, _) {
    if (e.call(this, x, _)) {
      var y = x.changedTouches, S = t.call(this, x, _), k = y.length, N, V;
      for (N = 0; N < k; ++N)
        (V = p(this, S, x, _, y[N].identifier, y[N])) && (G2(x), V("start", x, y[N]));
    }
  }
  function L(x) {
    var _ = x.changedTouches, y = _.length, S, k;
    for (S = 0; S < y; ++S)
      (k = o[_[S].identifier]) && (Ft(x), k("drag", x, _[S]));
  }
  function b(x) {
    var _ = x.changedTouches, y = _.length, S, k;
    for (u && clearTimeout(u), u = setTimeout(function() {
      u = null;
    }, 500), S = 0; S < y; ++S)
      (k = o[_[S].identifier]) && (G2(x), k("end", x, _[S]));
  }
  function p(x, _, y, S, k, N) {
    var V = i.copy(), T = He(N || y, _), O, F, E;
    if ((E = n.call(x, new b3("beforestart", {
      sourceEvent: y,
      target: f,
      identifier: k,
      active: s,
      x: T[0],
      y: T[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), S)) != null)
      return O = E.x - T[0] || 0, F = E.y - T[1] || 0, function A(I, $, R) {
        var Z = T, P;
        switch (I) {
          case "start":
            o[k] = A, P = s++;
            break;
          case "end":
            delete o[k], --s;
          case "drag":
            T = He(R || $, _), P = s;
            break;
        }
        V.call(
          I,
          x,
          new b3(I, {
            sourceEvent: $,
            subject: E,
            target: f,
            identifier: k,
            active: P,
            x: T[0] + O,
            y: T[1] + F,
            dx: T[0] - Z[0],
            dy: T[1] - Z[1],
            dispatch: V
          }),
          S
        );
      };
  }
  return f.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : $1(!!x), f) : e;
  }, f.container = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : $1(x), f) : t;
  }, f.subject = function(x) {
    return arguments.length ? (n = typeof x == "function" ? x : $1(x), f) : n;
  }, f.touchable = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : $1(!!x), f) : r;
  }, f.on = function() {
    var x = i.on.apply(i, arguments);
    return x === i ? f : x;
  }, f.clickDistance = function(x) {
    return arguments.length ? (d = (x = +x) * x, f) : Math.sqrt(d);
  }, f;
}
function B3(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function K4(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function x1() {
}
var c1 = 0.7, J1 = 1 / c1, Pt = "\\s*([+-]?\\d+)\\s*", u1 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ke = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _7 = /^#([0-9a-f]{3,8})$/, k7 = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), N7 = new RegExp(`^rgb\\(${Ke},${Ke},${Ke}\\)$`), Z7 = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${u1}\\)$`), I7 = new RegExp(`^rgba\\(${Ke},${Ke},${Ke},${u1}\\)$`), R7 = new RegExp(`^hsl\\(${u1},${Ke},${Ke}\\)$`), A7 = new RegExp(`^hsla\\(${u1},${Ke},${Ke},${u1}\\)$`), wn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
B3(x1, bt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: xn,
  // Deprecated! Use color.formatHex.
  formatHex: xn,
  formatHex8: O7,
  formatHsl: $7,
  formatRgb: vn,
  toString: vn
});
function xn() {
  return this.rgb().formatHex();
}
function O7() {
  return this.rgb().formatHex8();
}
function $7() {
  return Q4(this).formatHsl();
}
function vn() {
  return this.rgb().formatRgb();
}
function bt(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = _7.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? yn(t) : n === 3 ? new Oe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? T1(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? T1(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = k7.exec(e)) ? new Oe(t[1], t[2], t[3], 1) : (t = N7.exec(e)) ? new Oe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Z7.exec(e)) ? T1(t[1], t[2], t[3], t[4]) : (t = I7.exec(e)) ? T1(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = R7.exec(e)) ? Sn(t[1], t[2] / 100, t[3] / 100, 1) : (t = A7.exec(e)) ? Sn(t[1], t[2] / 100, t[3] / 100, t[4]) : wn.hasOwnProperty(e) ? yn(wn[e]) : e === "transparent" ? new Oe(NaN, NaN, NaN, 0) : null;
}
function yn(e) {
  return new Oe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function T1(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Oe(e, t, n, r);
}
function T7(e) {
  return e instanceof x1 || (e = bt(e)), e ? (e = e.rgb(), new Oe(e.r, e.g, e.b, e.opacity)) : new Oe();
}
function E3(e, t, n, r) {
  return arguments.length === 1 ? T7(e) : new Oe(e, t, n, r ?? 1);
}
function Oe(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
B3(Oe, E3, K4(x1, {
  brighter(e) {
    return e = e == null ? J1 : Math.pow(J1, e), new Oe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? c1 : Math.pow(c1, e), new Oe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Oe(vt(this.r), vt(this.g), vt(this.b), e2(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: bn,
  // Deprecated! Use color.formatHex.
  formatHex: bn,
  formatHex8: F7,
  formatRgb: En,
  toString: En
}));
function bn() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}`;
}
function F7() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}${xt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function En() {
  const e = e2(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${vt(this.r)}, ${vt(this.g)}, ${vt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function e2(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function vt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function xt(e) {
  return e = vt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Sn(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new We(e, t, n, r);
}
function Q4(e) {
  if (e instanceof We) return new We(e.h, e.s, e.l, e.opacity);
  if (e instanceof x1 || (e = bt(e)), !e) return new We();
  if (e instanceof We) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new We(s, a, l, e.opacity);
}
function P7(e, t, n, r) {
  return arguments.length === 1 ? Q4(e) : new We(e, t, n, r ?? 1);
}
function We(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
B3(We, P7, K4(x1, {
  brighter(e) {
    return e = e == null ? J1 : Math.pow(J1, e), new We(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? c1 : Math.pow(c1, e), new We(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Oe(
      Y2(e >= 240 ? e - 240 : e + 120, o, r),
      Y2(e, o, r),
      Y2(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new We(Mn(this.h), F1(this.s), F1(this.l), e2(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = e2(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Mn(this.h)}, ${F1(this.s) * 100}%, ${F1(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Mn(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function F1(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Y2(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const W3 = (e) => () => e;
function j7(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function D7(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function V7(e) {
  return (e = +e) == 1 ? J4 : function(t, n) {
    return n - t ? D7(t, n, e) : W3(isNaN(t) ? n : t);
  };
}
function J4(e, t) {
  var n = t - e;
  return n ? j7(e, n) : W3(isNaN(e) ? t : e);
}
const t2 = function e(t) {
  var n = V7(t);
  function r(o, i) {
    var s = n((o = E3(o)).r, (i = E3(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = J4(o.opacity, i.opacity);
    return function(u) {
      return o.r = s(u), o.g = a(u), o.b = l(u), o.opacity = c(u), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function H7(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function B7(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function W7(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = s1(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function z7(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Ue(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function X7(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = s1(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var S3 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, q2 = new RegExp(S3.source, "g");
function G7(e) {
  return function() {
    return e;
  };
}
function Y7(e) {
  return function(t) {
    return e(t) + "";
  };
}
function e0(e, t) {
  var n = S3.lastIndex = q2.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = S3.exec(e)) && (o = q2.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Ue(r, o) })), n = q2.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Y7(l[0].x) : G7(t) : (t = l.length, function(c) {
    for (var u = 0, d; u < t; ++u) a[(d = l[u]).i] = d.x(c);
    return a.join("");
  });
}
function s1(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? W3(t) : (n === "number" ? Ue : n === "string" ? (r = bt(t)) ? (t = r, t2) : e0 : t instanceof bt ? t2 : t instanceof Date ? z7 : B7(t) ? H7 : Array.isArray(t) ? W7 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? X7 : Ue)(e, t);
}
var _n = 180 / Math.PI, M3 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function t0(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * _n,
    skewX: Math.atan(l) * _n,
    scaleX: s,
    scaleY: a
  };
}
var P1;
function q7(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? M3 : t0(t.a, t.b, t.c, t.d, t.e, t.f);
}
function U7(e) {
  return e == null || (P1 || (P1 = document.createElementNS("http://www.w3.org/2000/svg", "g")), P1.setAttribute("transform", e), !(e = P1.transform.baseVal.consolidate())) ? M3 : (e = e.matrix, t0(e.a, e.b, e.c, e.d, e.e, e.f));
}
function n0(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, u, d, f, h, C) {
    if (c !== d || u !== f) {
      var g = h.push("translate(", null, t, null, n);
      C.push({ i: g - 4, x: Ue(c, d) }, { i: g - 2, x: Ue(u, f) });
    } else (d || f) && h.push("translate(" + d + t + f + n);
  }
  function s(c, u, d, f) {
    c !== u ? (c - u > 180 ? u += 360 : u - c > 180 && (c += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Ue(c, u) })) : u && d.push(o(d) + "rotate(" + u + r);
  }
  function a(c, u, d, f) {
    c !== u ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Ue(c, u) }) : u && d.push(o(d) + "skewX(" + u + r);
  }
  function l(c, u, d, f, h, C) {
    if (c !== d || u !== f) {
      var g = h.push(o(h) + "scale(", null, ",", null, ")");
      C.push({ i: g - 4, x: Ue(c, d) }, { i: g - 2, x: Ue(u, f) });
    } else (d !== 1 || f !== 1) && h.push(o(h) + "scale(" + d + "," + f + ")");
  }
  return function(c, u) {
    var d = [], f = [];
    return c = e(c), u = e(u), i(c.translateX, c.translateY, u.translateX, u.translateY, d, f), s(c.rotate, u.rotate, d, f), a(c.skewX, u.skewX, d, f), l(c.scaleX, c.scaleY, u.scaleX, u.scaleY, d, f), c = u = null, function(h) {
      for (var C = -1, g = f.length, v; ++C < g; ) d[(v = f[C]).i] = v.x(h);
      return d.join("");
    };
  };
}
var K7 = n0(q7, "px, ", "px)", "deg)"), Q7 = n0(U7, ", ", ")", ")"), J7 = 1e-12;
function kn(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function eo(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function to(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Y1 = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], u = s[0], d = s[1], f = s[2], h = u - a, C = d - l, g = h * h + C * C, v, L;
    if (g < J7)
      L = Math.log(f / c) / t, v = function(S) {
        return [
          a + S * h,
          l + S * C,
          c * Math.exp(t * S * L)
        ];
      };
    else {
      var b = Math.sqrt(g), p = (f * f - c * c + r * g) / (2 * c * n * b), x = (f * f - c * c - r * g) / (2 * f * n * b), _ = Math.log(Math.sqrt(p * p + 1) - p), y = Math.log(Math.sqrt(x * x + 1) - x);
      L = (y - _) / t, v = function(S) {
        var k = S * L, N = kn(_), V = c / (n * b) * (N * to(t * k + _) - eo(_));
        return [
          a + V * h,
          l + V * C,
          c * N / kn(t * k + _)
        ];
      };
    }
    return v.duration = L * 1e3 * t / Math.SQRT2, v;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Dt = 0, n1 = 0, e1 = 0, r0 = 1e3, n2, r1, r2 = 0, Et = 0, h2 = 0, d1 = typeof performance == "object" && performance.now ? performance : Date, o0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function z3() {
  return Et || (o0(no), Et = d1.now() + h2);
}
function no() {
  Et = 0;
}
function o2() {
  this._call = this._time = this._next = null;
}
o2.prototype = i0.prototype = {
  constructor: o2,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? z3() : +n) + (t == null ? 0 : +t), !this._next && r1 !== this && (r1 ? r1._next = this : n2 = this, r1 = this), this._call = e, this._time = n, _3();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, _3());
  }
};
function i0(e, t, n) {
  var r = new o2();
  return r.restart(e, t, n), r;
}
function ro() {
  z3(), ++Dt;
  for (var e = n2, t; e; )
    (t = Et - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Dt;
}
function Nn() {
  Et = (r2 = d1.now()) + h2, Dt = n1 = 0;
  try {
    ro();
  } finally {
    Dt = 0, io(), Et = 0;
  }
}
function oo() {
  var e = d1.now(), t = e - r2;
  t > r0 && (h2 -= t, r2 = e);
}
function io() {
  for (var e, t = n2, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : n2 = n);
  r1 = e, _3(r);
}
function _3(e) {
  if (!Dt) {
    n1 && (n1 = clearTimeout(n1));
    var t = e - Et;
    t > 24 ? (e < 1 / 0 && (n1 = setTimeout(Nn, e - d1.now() - h2)), e1 && (e1 = clearInterval(e1))) : (e1 || (r2 = d1.now(), e1 = setInterval(oo, r0)), Dt = 1, o0(Nn));
  }
}
function Zn(e, t, n) {
  var r = new o2();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var so = d2("start", "end", "cancel", "interrupt"), ao = [], s0 = 0, In = 1, k3 = 2, q1 = 3, Rn = 4, N3 = 5, U1 = 6;
function g2(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  lo(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: so,
    tween: ao,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: s0
  });
}
function X3(e, t) {
  var n = Ge(e, t);
  if (n.state > s0) throw new Error("too late; already scheduled");
  return n;
}
function Qe(e, t) {
  var n = Ge(e, t);
  if (n.state > q1) throw new Error("too late; already running");
  return n;
}
function Ge(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function lo(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = i0(i, 0, n.time);
  function i(c) {
    n.state = In, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var u, d, f, h;
    if (n.state !== In) return l();
    for (u in r)
      if (h = r[u], h.name === n.name) {
        if (h.state === q1) return Zn(s);
        h.state === Rn ? (h.state = U1, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[u]) : +u < t && (h.state = U1, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[u]);
      }
    if (Zn(function() {
      n.state === q1 && (n.state = Rn, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = k3, n.on.call("start", e, e.__data__, n.index, n.group), n.state === k3) {
      for (n.state = q1, o = new Array(f = n.tween.length), u = 0, d = -1; u < f; ++u)
        (h = n.tween[u].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = h);
      o.length = d + 1;
    }
  }
  function a(c) {
    for (var u = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = N3, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, u);
    n.state === N3 && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = U1, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function K1(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > k3 && r.state < N3, r.state = U1, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function co(e) {
  return this.each(function() {
    K1(this, e);
  });
}
function uo(e, t) {
  var n, r;
  return function() {
    var o = Qe(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function fo(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Qe(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === c && o.push(a);
    }
    i.tween = o;
  };
}
function ho(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Ge(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? uo : fo)(n, e, t));
}
function G3(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Qe(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Ge(o, r).value[t];
  };
}
function a0(e, t) {
  var n;
  return (typeof t == "number" ? Ue : t instanceof bt ? t2 : (n = bt(t)) ? (t = n, t2) : e0)(e, t);
}
function go(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Co(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function po(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Lo(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function mo(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function wo(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function xo(e, t) {
  var n = f2(e), r = n === "transform" ? Q7 : a0;
  return this.attrTween(e, typeof t == "function" ? (n.local ? wo : mo)(n, r, G3(this, "attr." + e, t)) : t == null ? (n.local ? Co : go)(n) : (n.local ? Lo : po)(n, r, t));
}
function vo(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function yo(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function bo(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && yo(e, i)), n;
  }
  return o._value = t, o;
}
function Eo(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && vo(e, i)), n;
  }
  return o._value = t, o;
}
function So(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = f2(e);
  return this.tween(n, (r.local ? bo : Eo)(r, t));
}
function Mo(e, t) {
  return function() {
    X3(this, e).delay = +t.apply(this, arguments);
  };
}
function _o(e, t) {
  return t = +t, function() {
    X3(this, e).delay = t;
  };
}
function ko(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Mo : _o)(t, e)) : Ge(this.node(), t).delay;
}
function No(e, t) {
  return function() {
    Qe(this, e).duration = +t.apply(this, arguments);
  };
}
function Zo(e, t) {
  return t = +t, function() {
    Qe(this, e).duration = t;
  };
}
function Io(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? No : Zo)(t, e)) : Ge(this.node(), t).duration;
}
function Ro(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Qe(this, e).ease = t;
  };
}
function Ao(e) {
  var t = this._id;
  return arguments.length ? this.each(Ro(t, e)) : Ge(this.node(), t).ease;
}
function Oo(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Qe(this, e).ease = n;
  };
}
function $o(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Oo(this._id, e));
}
function To(e) {
  typeof e != "function" && (e = P4(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new ot(r, this._parents, this._name, this._id);
}
function Fo(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], u = l.length, d = s[a] = new Array(u), f, h = 0; h < u; ++h)
      (f = l[h] || c[h]) && (d[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new ot(s, this._parents, this._name, this._id);
}
function Po(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function jo(e, t, n) {
  var r, o, i = Po(t) ? X3 : Qe;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Do(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ge(this.node(), n).on.on(e) : this.each(jo(n, e, t));
}
function Vo(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Ho() {
  return this.on("end.remove", Vo(this._id));
}
function Bo(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = V3(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), u, d, f = 0; f < l; ++f)
      (u = a[f]) && (d = e.call(u, u.__data__, f, a)) && ("__data__" in u && (d.__data__ = u.__data__), c[f] = d, g2(c[f], t, n, f, c, Ge(u, n)));
  return new ot(i, this._parents, t, n);
}
function Wo(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = F4(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, u, d = 0; d < c; ++d)
      if (u = l[d]) {
        for (var f = e.call(u, u.__data__, d, l), h, C = Ge(u, n), g = 0, v = f.length; g < v; ++g)
          (h = f[g]) && g2(h, t, n, g, f, C);
        i.push(f), s.push(u);
      }
  return new ot(i, s, t, n);
}
var zo = w1.prototype.constructor;
function Xo() {
  return new zo(this._groups, this._parents);
}
function Go(e, t) {
  var n, r, o;
  return function() {
    var i = jt(this, e), s = (this.style.removeProperty(e), jt(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function l0(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Yo(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = jt(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function qo(e, t, n) {
  var r, o, i;
  return function() {
    var s = jt(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), jt(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Uo(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Qe(this, e), c = l.on, u = l.value[i] == null ? a || (a = l0(t)) : void 0;
    (c !== n || o !== u) && (r = (n = c).copy()).on(s, o = u), l.on = r;
  };
}
function Ko(e, t, n) {
  var r = (e += "") == "transform" ? K7 : a0;
  return t == null ? this.styleTween(e, Go(e, r)).on("end.style." + e, l0(e)) : typeof t == "function" ? this.styleTween(e, qo(e, r, G3(this, "style." + e, t))).each(Uo(this._id, e)) : this.styleTween(e, Yo(e, r, t), n).on("end.style." + e, null);
}
function Qo(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Jo(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Qo(e, s, n)), r;
  }
  return i._value = t, i;
}
function e6(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Jo(e, t, n ?? ""));
}
function t6(e) {
  return function() {
    this.textContent = e;
  };
}
function n6(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function r6(e) {
  return this.tween("text", typeof e == "function" ? n6(G3(this, "text", e)) : t6(e == null ? "" : e + ""));
}
function o6(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function i6(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && o6(o)), t;
  }
  return r._value = e, r;
}
function s6(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, i6(e));
}
function a6() {
  for (var e = this._name, t = this._id, n = c0(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var u = Ge(l, t);
        g2(l, e, n, c, s, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new ot(r, this._parents, e, n);
}
function l6() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = Qe(this, r), u = c.on;
      u !== e && (t = (e = u).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var c6 = 0;
function ot(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function c0() {
  return ++c6;
}
var tt = w1.prototype;
ot.prototype = {
  constructor: ot,
  select: Bo,
  selectAll: Wo,
  selectChild: tt.selectChild,
  selectChildren: tt.selectChildren,
  filter: To,
  merge: Fo,
  selection: Xo,
  transition: a6,
  call: tt.call,
  nodes: tt.nodes,
  node: tt.node,
  size: tt.size,
  empty: tt.empty,
  each: tt.each,
  on: Do,
  attr: xo,
  attrTween: So,
  style: Ko,
  styleTween: e6,
  text: r6,
  textTween: s6,
  remove: Ho,
  tween: ho,
  delay: ko,
  duration: Io,
  ease: Ao,
  easeVarying: $o,
  end: l6,
  [Symbol.iterator]: tt[Symbol.iterator]
};
function u6(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var d6 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: u6
};
function f6(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function h6(e) {
  var t, n;
  e instanceof ot ? (t = e._id, e = e._name) : (t = c0(), (n = d6).time = z3(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && g2(l, e, t, c, s, n || f6(l, t));
  return new ot(r, this._parents, e, t);
}
w1.prototype.interrupt = co;
w1.prototype.transition = h6;
const j1 = (e) => () => e;
function g6(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function rt(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
rt.prototype = {
  constructor: rt,
  scale: function(e) {
    return e === 1 ? this : new rt(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new rt(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var C2 = new rt(1, 0, 0);
u0.prototype = rt.prototype;
function u0(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return C2;
  return e.__zoom;
}
function U2(e) {
  e.stopImmediatePropagation();
}
function t1(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function C6(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function p6() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function An() {
  return this.__zoom || C2;
}
function L6(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function m6() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function w6(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function d0() {
  var e = C6, t = p6, n = w6, r = L6, o = m6, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Y1, c = d2("start", "zoom", "end"), u, d, f, h = 500, C = 150, g = 0, v = 10;
  function L(E) {
    E.property("__zoom", An).on("wheel.zoom", k, { passive: !1 }).on("mousedown.zoom", N).on("dblclick.zoom", V).filter(o).on("touchstart.zoom", T).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", F).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  L.transform = function(E, A, I, $) {
    var R = E.selection ? E.selection() : E;
    R.property("__zoom", An), E !== R ? _(E, A, I, $) : R.interrupt().each(function() {
      y(this, arguments).event($).start().zoom(null, typeof A == "function" ? A.apply(this, arguments) : A).end();
    });
  }, L.scaleBy = function(E, A, I, $) {
    L.scaleTo(E, function() {
      var R = this.__zoom.k, Z = typeof A == "function" ? A.apply(this, arguments) : A;
      return R * Z;
    }, I, $);
  }, L.scaleTo = function(E, A, I, $) {
    L.transform(E, function() {
      var R = t.apply(this, arguments), Z = this.__zoom, P = I == null ? x(R) : typeof I == "function" ? I.apply(this, arguments) : I, H = Z.invert(P), j = typeof A == "function" ? A.apply(this, arguments) : A;
      return n(p(b(Z, j), P, H), R, s);
    }, I, $);
  }, L.translateBy = function(E, A, I, $) {
    L.transform(E, function() {
      return n(this.__zoom.translate(
        typeof A == "function" ? A.apply(this, arguments) : A,
        typeof I == "function" ? I.apply(this, arguments) : I
      ), t.apply(this, arguments), s);
    }, null, $);
  }, L.translateTo = function(E, A, I, $, R) {
    L.transform(E, function() {
      var Z = t.apply(this, arguments), P = this.__zoom, H = $ == null ? x(Z) : typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(C2.translate(H[0], H[1]).scale(P.k).translate(
        typeof A == "function" ? -A.apply(this, arguments) : -A,
        typeof I == "function" ? -I.apply(this, arguments) : -I
      ), Z, s);
    }, $, R);
  };
  function b(E, A) {
    return A = Math.max(i[0], Math.min(i[1], A)), A === E.k ? E : new rt(A, E.x, E.y);
  }
  function p(E, A, I) {
    var $ = A[0] - I[0] * E.k, R = A[1] - I[1] * E.k;
    return $ === E.x && R === E.y ? E : new rt(E.k, $, R);
  }
  function x(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function _(E, A, I, $) {
    E.on("start.zoom", function() {
      y(this, arguments).event($).start();
    }).on("interrupt.zoom end.zoom", function() {
      y(this, arguments).event($).end();
    }).tween("zoom", function() {
      var R = this, Z = arguments, P = y(R, Z).event($), H = t.apply(R, Z), j = I == null ? x(H) : typeof I == "function" ? I.apply(R, Z) : I, G = Math.max(H[1][0] - H[0][0], H[1][1] - H[0][1]), X = R.__zoom, K = typeof A == "function" ? A.apply(R, Z) : A, J = l(X.invert(j).concat(G / X.k), K.invert(j).concat(G / K.k));
      return function(Q) {
        if (Q === 1) Q = K;
        else {
          var B = J(Q), U = G / B[2];
          Q = new rt(U, j[0] - B[0] * U, j[1] - B[1] * U);
        }
        P.zoom(null, Q);
      };
    });
  }
  function y(E, A, I) {
    return !I && E.__zooming || new S(E, A);
  }
  function S(E, A) {
    this.that = E, this.args = A, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, A), this.taps = 0;
  }
  S.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, A) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = A.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = A.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = A.invert(this.touch1[0])), this.that.__zoom = A, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var A = Te(this.that).datum();
      c.call(
        E,
        this.that,
        new g6(E, {
          sourceEvent: this.sourceEvent,
          target: L,
          transform: this.that.__zoom,
          dispatch: c
        }),
        A
      );
    }
  };
  function k(E, ...A) {
    if (!e.apply(this, arguments)) return;
    var I = y(this, A).event(E), $ = this.__zoom, R = Math.max(i[0], Math.min(i[1], $.k * Math.pow(2, r.apply(this, arguments)))), Z = He(E);
    if (I.wheel)
      (I.mouse[0][0] !== Z[0] || I.mouse[0][1] !== Z[1]) && (I.mouse[1] = $.invert(I.mouse[0] = Z)), clearTimeout(I.wheel);
    else {
      if ($.k === R) return;
      I.mouse = [Z, $.invert(Z)], K1(this), I.start();
    }
    t1(E), I.wheel = setTimeout(P, C), I.zoom("mouse", n(p(b($, R), I.mouse[0], I.mouse[1]), I.extent, s));
    function P() {
      I.wheel = null, I.end();
    }
  }
  function N(E, ...A) {
    if (f || !e.apply(this, arguments)) return;
    var I = E.currentTarget, $ = y(this, A, !0).event(E), R = Te(E.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", G, !0), Z = He(E, I), P = E.clientX, H = E.clientY;
    Y4(E.view), U2(E), $.mouse = [Z, this.__zoom.invert(Z)], K1(this), $.start();
    function j(X) {
      if (t1(X), !$.moved) {
        var K = X.clientX - P, J = X.clientY - H;
        $.moved = K * K + J * J > g;
      }
      $.event(X).zoom("mouse", n(p($.that.__zoom, $.mouse[0] = He(X, I), $.mouse[1]), $.extent, s));
    }
    function G(X) {
      R.on("mousemove.zoom mouseup.zoom", null), q4(X.view, $.moved), t1(X), $.event(X).end();
    }
  }
  function V(E, ...A) {
    if (e.apply(this, arguments)) {
      var I = this.__zoom, $ = He(E.changedTouches ? E.changedTouches[0] : E, this), R = I.invert($), Z = I.k * (E.shiftKey ? 0.5 : 2), P = n(p(b(I, Z), $, R), t.apply(this, A), s);
      t1(E), a > 0 ? Te(this).transition().duration(a).call(_, P, $, E) : Te(this).call(L.transform, P, $, E);
    }
  }
  function T(E, ...A) {
    if (e.apply(this, arguments)) {
      var I = E.touches, $ = I.length, R = y(this, A, E.changedTouches.length === $).event(E), Z, P, H, j;
      for (U2(E), P = 0; P < $; ++P)
        H = I[P], j = He(H, this), j = [j, this.__zoom.invert(j), H.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== j[2] && (R.touch1 = j, R.taps = 0) : (R.touch0 = j, Z = !0, R.taps = 1 + !!u);
      u && (u = clearTimeout(u)), Z && (R.taps < 2 && (d = j[0], u = setTimeout(function() {
        u = null;
      }, h)), K1(this), R.start());
    }
  }
  function O(E, ...A) {
    if (this.__zooming) {
      var I = y(this, A).event(E), $ = E.changedTouches, R = $.length, Z, P, H, j;
      for (t1(E), Z = 0; Z < R; ++Z)
        P = $[Z], H = He(P, this), I.touch0 && I.touch0[2] === P.identifier ? I.touch0[0] = H : I.touch1 && I.touch1[2] === P.identifier && (I.touch1[0] = H);
      if (P = I.that.__zoom, I.touch1) {
        var G = I.touch0[0], X = I.touch0[1], K = I.touch1[0], J = I.touch1[1], Q = (Q = K[0] - G[0]) * Q + (Q = K[1] - G[1]) * Q, B = (B = J[0] - X[0]) * B + (B = J[1] - X[1]) * B;
        P = b(P, Math.sqrt(Q / B)), H = [(G[0] + K[0]) / 2, (G[1] + K[1]) / 2], j = [(X[0] + J[0]) / 2, (X[1] + J[1]) / 2];
      } else if (I.touch0) H = I.touch0[0], j = I.touch0[1];
      else return;
      I.zoom("touch", n(p(P, H, j), I.extent, s));
    }
  }
  function F(E, ...A) {
    if (this.__zooming) {
      var I = y(this, A).event(E), $ = E.changedTouches, R = $.length, Z, P;
      for (U2(E), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), Z = 0; Z < R; ++Z)
        P = $[Z], I.touch0 && I.touch0[2] === P.identifier ? delete I.touch0 : I.touch1 && I.touch1[2] === P.identifier && delete I.touch1;
      if (I.touch1 && !I.touch0 && (I.touch0 = I.touch1, delete I.touch1), I.touch0) I.touch0[1] = this.__zoom.invert(I.touch0[0]);
      else if (I.end(), I.taps === 2 && (P = He(P, this), Math.hypot(d[0] - P[0], d[1] - P[1]) < v)) {
        var H = Te(this).on("dblclick.zoom");
        H && H.apply(this, arguments);
      }
    }
  }
  return L.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : j1(+E), L) : r;
  }, L.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : j1(!!E), L) : e;
  }, L.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : j1(!!E), L) : o;
  }, L.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : j1([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), L) : t;
  }, L.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], L) : [i[0], i[1]];
  }, L.translateExtent = function(E) {
    return arguments.length ? (s[0][0] = +E[0][0], s[1][0] = +E[1][0], s[0][1] = +E[0][1], s[1][1] = +E[1][1], L) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, L.constrain = function(E) {
    return arguments.length ? (n = E, L) : n;
  }, L.duration = function(E) {
    return arguments.length ? (a = +E, L) : a;
  }, L.interpolate = function(E) {
    return arguments.length ? (l = E, L) : l;
  }, L.on = function() {
    var E = c.on.apply(c, arguments);
    return E === c ? L : E;
  }, L.clickDistance = function(E) {
    return arguments.length ? (g = (E = +E) * E, L) : Math.sqrt(g);
  }, L.tapDistance = function(E) {
    return arguments.length ? (v = +E, L) : v;
  }, L;
}
const Pe = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, f1 = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], f0 = ["Enter", " ", "Escape"], h0 = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var Vt;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Vt || (Vt = {}));
var yt;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(yt || (yt = {}));
var h1;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(h1 || (h1 = {}));
const g0 = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var dt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(dt || (dt = {}));
var Ht;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Ht || (Ht = {}));
var Y;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Y || (Y = {}));
const On = {
  [Y.Left]: Y.Right,
  [Y.Right]: Y.Left,
  [Y.Top]: Y.Bottom,
  [Y.Bottom]: Y.Top
};
function C0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const p0 = (e) => "id" in e && "source" in e && "target" in e, x6 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Y3 = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), v6 = (e, t, n) => {
  if (!e.id)
    return [];
  const r = /* @__PURE__ */ new Set();
  return n.forEach((o) => {
    o.source === e.id && r.add(o.target);
  }), t.filter((o) => r.has(o.id));
}, y6 = (e, t, n) => {
  if (!e.id)
    return [];
  const r = /* @__PURE__ */ new Set();
  return n.forEach((o) => {
    o.target === e.id && r.add(o.source);
  }), t.filter((o) => r.has(o.id));
}, v1 = (e, t = [0, 0]) => {
  const { width: n, height: r } = it(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, b6 = (e, t = { nodeOrigin: [0, 0] }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Y3(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? i2(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return p2(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return L2(n);
}, y1 = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = p2(n, i2(o)), r = !0);
  }), r ? L2(n) : { x: 0, y: 0, width: 0, height: 0 };
}, q3 = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...E1(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: u, selectable: d = !0, hidden: f = !1 } = c;
    if (s && !d || f)
      continue;
    const h = u.width ?? c.width ?? c.initialWidth ?? null, C = u.height ?? c.height ?? c.initialHeight ?? null, g = g1(a, Wt(c)), v = (h ?? 0) * (C ?? 0), L = i && g > 0;
    (!c.internals.handleBounds || L || g >= v || c.dragging) && l.push(c);
  }
  return l;
}, E6 = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function S6(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function M6({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = S6(e, s), l = y1(a), c = U3(l, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(c, {
    duration: s == null ? void 0 : s.duration,
    ease: s == null ? void 0 : s.ease,
    interpolate: s == null ? void 0 : s.interpolate
  }), Promise.resolve(!0);
}
function L0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, u = s.origin ?? r;
  let d = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", Pe.error005());
    else {
      const h = a.measured.width, C = a.measured.height;
      h && C && (d = [
        [l, c],
        [l + h, c + C]
      ]);
    }
  else a && zt(s.extent) && (d = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = zt(d) ? St(t, d, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Pe.error015())), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * u[0],
      y: f.y - c + (s.measured.height ?? 0) * u[1]
    },
    positionAbsolute: f
  };
}
async function _6({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const h = i.has(f.id), C = !h && f.parentId && s.find((g) => g.id === f.parentId);
    (h || C) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), u = E6(s, l);
  for (const f of l)
    a.has(f.id) && !u.find((C) => C.id === f.id) && u.push(f);
  if (!o)
    return {
      edges: u,
      nodes: s
    };
  const d = await o({
    nodes: s,
    edges: u
  });
  return typeof d == "boolean" ? d ? { edges: u, nodes: s } : { edges: [], nodes: [] } : d;
}
const Bt = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), St = (e = { x: 0, y: 0 }, t, n) => ({
  x: Bt(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Bt(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function m0(e, t, n) {
  const { width: r, height: o } = it(n), { x: i, y: s } = n.internals.positionAbsolute;
  return St(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const $n = (e, t, n) => e < t ? Bt(Math.abs(e - t), 1, t) / t : e > n ? -Bt(Math.abs(e - n), 1, t) / t : 0, w0 = (e, t, n = 15, r = 40) => {
  const o = $n(e.x, r, t.width - r) * n, i = $n(e.y, r, t.height - r) * n;
  return [o, i];
}, p2 = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Z3 = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), L2 = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Wt = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Y3(e) ? e.internals.positionAbsolute : v1(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, i2 = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Y3(e) ? e.internals.positionAbsolute : v1(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, x0 = (e, t) => L2(p2(Z3(e), Z3(t))), g1 = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Tn = (e) => ze(e.width) && ze(e.height) && ze(e.x) && ze(e.y), ze = (e) => !isNaN(e) && isFinite(e), v0 = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, b1 = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), E1 = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? b1(a, s) : a;
}, s2 = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function At(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function k6(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = At(e, n), o = At(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = At(e.top ?? e.y ?? 0, n), o = At(e.bottom ?? e.y ?? 0, n), i = At(e.left ?? e.x ?? 0, t), s = At(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function N6(e, t, n, r, o, i) {
  const { x: s, y: a } = s2(e, [t, n, r]), { x: l, y: c } = s2({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), u = o - l, d = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(u),
    bottom: Math.floor(d)
  };
}
const U3 = (e, t, n, r, o, i) => {
  const s = k6(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), u = Bt(c, r, o), d = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - d * u, C = n / 2 - f * u, g = N6(e, h, C, u, t, n), v = {
    left: Math.min(g.left - s.left, 0),
    top: Math.min(g.top - s.top, 0),
    right: Math.min(g.right - s.right, 0),
    bottom: Math.min(g.bottom - s.bottom, 0)
  };
  return {
    x: h - v.left + v.right,
    y: C - v.top + v.bottom,
    zoom: u
  };
}, C1 = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function zt(e) {
  return e != null && e !== "parent";
}
function it(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function y0(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function b0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Fn(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Z6() {
  let e, t;
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}
function I6(e) {
  return { ...h0, ...e || {} };
}
function a1(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Xe(e), a = E1({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: c } = n ? b1(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const K3 = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), E0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, R6 = ["INPUT", "SELECT", "TEXTAREA"];
function S0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : R6.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const M0 = (e) => "clientX" in e, Xe = (e, t) => {
  var i, s;
  const n = M0(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Pn = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / r,
      y: (a.top - n.top) / r,
      ...K3(s)
    };
  });
};
function _0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, u = Math.abs(l - e), d = Math.abs(c - t);
  return [l, c, u, d];
}
function D1(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function jn({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Y.Left:
      return [t - D1(t - r, i), n];
    case Y.Right:
      return [t + D1(r - t, i), n];
    case Y.Top:
      return [t, n - D1(n - o, i)];
    case Y.Bottom:
      return [t, n + D1(o - n, i)];
  }
}
function k0({ sourceX: e, sourceY: t, sourcePosition: n = Y.Bottom, targetX: r, targetY: o, targetPosition: i = Y.Top, curvature: s = 0.25 }) {
  const [a, l] = jn({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, u] = jn({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [d, f, h, C] = _0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: c,
    targetControlY: u
  });
  return [
    `M${e},${t} C${a},${l} ${c},${u} ${r},${o}`,
    d,
    f,
    h,
    C
  ];
}
function N0({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function A6({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function O6({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = p2(i2(e), i2(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return g1(s, L2(i)) > 0;
}
const $6 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, T6 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), F6 = (e, t) => {
  if (!e.source || !e.target)
    return v0("006", Pe.error006()), t;
  let n;
  return p0(e) ? n = { ...e } : n = {
    ...e,
    id: $6(e)
  }, T6(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Z0({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = N0({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Dn = {
  [Y.Left]: { x: -1, y: 0 },
  [Y.Right]: { x: 1, y: 0 },
  [Y.Top]: { x: 0, y: -1 },
  [Y.Bottom]: { x: 0, y: 1 }
}, P6 = ({ source: e, sourcePosition: t = Y.Bottom, target: n }) => t === Y.Left || t === Y.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Vn = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function j6({ source: e, sourcePosition: t = Y.Bottom, target: n, targetPosition: r = Y.Top, center: o, offset: i, stepPosition: s }) {
  const a = Dn[t], l = Dn[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + l.x * i, y: n.y + l.y * i }, d = P6({
    source: c,
    sourcePosition: t,
    target: u
  }), f = d.x !== 0 ? "x" : "y", h = d[f];
  let C = [], g, v;
  const L = { x: 0, y: 0 }, b = { x: 0, y: 0 }, [, , p, x] = N0({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (g = o.x ?? c.x + (u.x - c.x) * s, v = o.y ?? (c.y + u.y) / 2) : (g = o.x ?? (c.x + u.x) / 2, v = o.y ?? c.y + (u.y - c.y) * s);
    const y = [
      { x: g, y: c.y },
      { x: g, y: u.y }
    ], S = [
      { x: c.x, y: v },
      { x: u.x, y: v }
    ];
    a[f] === h ? C = f === "x" ? y : S : C = f === "x" ? S : y;
  } else {
    const y = [{ x: c.x, y: u.y }], S = [{ x: u.x, y: c.y }];
    if (f === "x" ? C = a.x === h ? S : y : C = a.y === h ? y : S, t === r) {
      const O = Math.abs(e[f] - n[f]);
      if (O <= i) {
        const F = Math.min(i - 1, i - O);
        a[f] === h ? L[f] = (c[f] > e[f] ? -1 : 1) * F : b[f] = (u[f] > n[f] ? -1 : 1) * F;
      }
    }
    if (t !== r) {
      const O = f === "x" ? "y" : "x", F = a[f] === l[O], E = c[O] > u[O], A = c[O] < u[O];
      (a[f] === 1 && (!F && E || F && A) || a[f] !== 1 && (!F && A || F && E)) && (C = f === "x" ? y : S);
    }
    const k = { x: c.x + L.x, y: c.y + L.y }, N = { x: u.x + b.x, y: u.y + b.y }, V = Math.max(Math.abs(k.x - C[0].x), Math.abs(N.x - C[0].x)), T = Math.max(Math.abs(k.y - C[0].y), Math.abs(N.y - C[0].y));
    V >= T ? (g = (k.x + N.x) / 2, v = C[0].y) : (g = C[0].x, v = (k.y + N.y) / 2);
  }
  return [[
    e,
    { x: c.x + L.x, y: c.y + L.y },
    ...C,
    { x: u.x + b.x, y: u.y + b.y },
    n
  ], g, v, p, x];
}
function D6(e, t, n, r) {
  const o = Math.min(Vn(e, t) / 2, Vn(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, u = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * u}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function I3({ sourceX: e, sourceY: t, sourcePosition: n = Y.Bottom, targetX: r, targetY: o, targetPosition: i = Y.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: u = 0.5 }) {
  const [d, f, h, C, g] = j6({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: u
  });
  return [d.reduce((L, b, p) => {
    let x = "";
    return p > 0 && p < d.length - 1 ? x = D6(d[p - 1], b, d[p + 1], s) : x = `${p === 0 ? "M" : "L"}${b.x} ${b.y}`, L += x, L;
  }, ""), f, h, C, g];
}
function Hn(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function V6(e) {
  var d;
  const { sourceNode: t, targetNode: n } = e;
  if (!Hn(t) || !Hn(n))
    return null;
  const r = t.internals.handleBounds || Bn(t.handles), o = n.internals.handleBounds || Bn(n.handles), i = Wn((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Wn(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Vt.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (d = e.onError) == null || d.call(e, "008", Pe.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || Y.Bottom, l = (s == null ? void 0 : s.position) || Y.Top, c = p1(t, i, a), u = p1(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: u.x,
    targetY: u.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Bn(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const r of e)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
  return {
    source: t,
    target: n
  };
}
function p1(e, t, n = Y.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? it(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Y.Top:
      return { x: o + s / 2, y: i };
    case Y.Right:
      return { x: o + s, y: i + a / 2 };
    case Y.Bottom:
      return { x: o + s / 2, y: i + a };
    case Y.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Wn(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function R3(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function H6(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = R3(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const I0 = 1e3, B6 = 10, Q3 = {
  nodeOrigin: [0, 0],
  nodeExtent: f1,
  elevateNodesOnSelect: !0,
  defaults: {}
}, W6 = {
  ...Q3,
  checkEquality: !0
};
function J3(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function z6(e, t, n) {
  const r = J3(Q3, n);
  for (const o of e.values())
    if (o.parentId)
      en(o, e, t, r);
    else {
      const i = v1(o, r.nodeOrigin), s = zt(o.extent) ? o.extent : r.nodeExtent, a = St(i, s, it(o));
      o.internals.positionAbsolute = a;
    }
}
function X6(e, t) {
  if (!e.handles)
    return e.measured ? t == null ? void 0 : t.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const o of e.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: e.id,
      x: o.x,
      y: o.y,
      position: o.position,
      type: o.type
    };
    o.type === "source" ? n.push(i) : o.type === "target" && r.push(i);
  }
  return {
    source: n,
    target: r
  };
}
function A3(e, t, n, r) {
  var c, u;
  const o = J3(W6, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o != null && o.elevateNodesOnSelect ? I0 : 0;
  t.clear(), n.clear();
  for (const d of e) {
    let f = a.get(d.id);
    if (o.checkEquality && d === (f == null ? void 0 : f.internals.userNode))
      t.set(d.id, f);
    else {
      const h = v1(d, o.nodeOrigin), C = zt(d.extent) ? d.extent : o.nodeExtent, g = St(h, C, it(d));
      f = {
        ...o.defaults,
        ...d,
        measured: {
          width: (c = d.measured) == null ? void 0 : c.width,
          height: (u = d.measured) == null ? void 0 : u.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: X6(d, f),
          z: R0(d, l),
          userNode: d
        }
      }, t.set(d.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (s = !1), d.parentId && en(f, t, n, r, i);
  }
  return s;
}
function G6(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function en(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = J3(Q3, r), l = e.parentId, c = t.get(l);
  if (!c) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  G6(e, n), o && !c.parentId && c.internals.rootParentIndex === void 0 && (c.internals.rootParentIndex = ++o.i, c.internals.z = c.internals.z + o.i * B6), o && c.internals.rootParentIndex !== void 0 && (o.i = c.internals.rootParentIndex);
  const u = i ? I0 : 0, { x: d, y: f, z: h } = Y6(e, c, s, a, u), { positionAbsolute: C } = e.internals, g = d !== C.x || f !== C.y;
  (g || h !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: g ? { x: d, y: f } : C,
      z: h
    }
  });
}
function R0(e, t) {
  return (ze(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Y6(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = it(e), l = v1(e, n), c = zt(e.extent) ? St(l, e.extent, a) : l;
  let u = St({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (u = m0(u, a, t));
  const d = R0(e, o), f = t.internals.z ?? 0;
  return {
    x: u.x,
    y: u.y,
    z: f >= d ? f + 1 : d
  };
}
function tn(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const c = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? Wt(l), u = x0(c, a.rect);
    i.set(a.parentId, { expandedRect: u, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, c) => {
    var p;
    const u = l.internals.positionAbsolute, d = it(l), f = l.origin ?? r, h = a.x < u.x ? Math.round(Math.abs(u.x - a.x)) : 0, C = a.y < u.y ? Math.round(Math.abs(u.y - a.y)) : 0, g = Math.max(d.width, Math.round(a.width)), v = Math.max(d.height, Math.round(a.height)), L = (g - d.width) * f[0], b = (v - d.height) * f[1];
    (h > 0 || C > 0 || L || b) && (o.push({
      id: c,
      type: "position",
      position: {
        x: l.position.x - h + L,
        y: l.position.y - C + b
      }
    }), (p = n.get(c)) == null || p.forEach((x) => {
      e.some((_) => _.id === x.id) || o.push({
        id: x.id,
        type: "position",
        position: {
          x: x.position.x + h,
          y: x.position.y + C
        }
      });
    })), (d.width < a.width || d.height < a.height || h || C) && o.push({
      id: c,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: g + (h ? f[0] * h - L : 0),
        height: v + (C ? f[1] * C - b : 0)
      }
    });
  }), o;
}
function q6(e, t, n, r, o, i) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], c = window.getComputedStyle(s), { m22: u } = new window.DOMMatrixReadOnly(c.transform), d = [];
  for (const f of e.values()) {
    const h = t.get(f.id);
    if (!h)
      continue;
    if (h.hidden) {
      t.set(h.id, {
        ...h,
        internals: {
          ...h.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const C = K3(f.nodeElement), g = h.measured.width !== C.width || h.measured.height !== C.height;
    if (!!(C.width && C.height && (g || !h.internals.handleBounds || f.force))) {
      const L = f.nodeElement.getBoundingClientRect(), b = zt(h.extent) ? h.extent : i;
      let { positionAbsolute: p } = h.internals;
      h.parentId && h.extent === "parent" ? p = m0(p, C, t.get(h.parentId)) : b && (p = St(p, b, C));
      const x = {
        ...h,
        measured: C,
        internals: {
          ...h.internals,
          positionAbsolute: p,
          handleBounds: {
            source: Pn("source", f.nodeElement, L, u, h.id),
            target: Pn("target", f.nodeElement, L, u, h.id)
          }
        }
      };
      t.set(h.id, x), h.parentId && en(x, t, n, { nodeOrigin: o }), a = !0, g && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: C
      }), h.expandParent && h.parentId && d.push({
        id: h.id,
        parentId: h.parentId,
        rect: Wt(x, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = tn(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function U6({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(a);
}
function zn(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const c = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, c.set(n, t));
  }
}
function A0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, u = `${i}-${a}--${o}-${s}`;
    zn("source", l, u, e, o, s), zn("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function O0(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : O0(n, t) : !1;
}
function Xn(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function K6(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !O0(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const a = e.get(i);
      a && o.set(i, {
        id: i,
        position: a.position || { x: 0, y: 0 },
        distance: {
          x: n.x - a.internals.positionAbsolute.x,
          y: n.y - a.internals.positionAbsolute.y
        },
        extent: a.extent,
        parentId: a.parentId,
        origin: a.origin,
        expandParent: a.expandParent,
        internals: {
          positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: a.measured.width ?? 0,
          height: a.measured.height ?? 0
        }
      });
    }
  return o;
}
function K2({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, a, l;
  const o = [];
  for (const [c, u] of t) {
    const d = (s = n.get(c)) == null ? void 0 : s.internals.userNode;
    d && o.push({
      ...d,
      position: u.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = (a = n.get(e)) == null ? void 0 : a.internals.userNode;
  return [
    i ? {
      ...i,
      position: ((l = t.get(e)) == null ? void 0 : l.position) || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function Q6({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = b1(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function J6({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, u = null, d = !1, f = null, h = !1, C = !1, g = null;
  function v({ noDragClassName: b, handleSelector: p, domNode: x, isSelectable: _, nodeId: y, nodeClickDistance: S = 0 }) {
    f = Te(x);
    function k({ x: O, y: F }) {
      const { nodeLookup: E, nodeExtent: A, snapGrid: I, snapToGrid: $, nodeOrigin: R, onNodeDrag: Z, onSelectionDrag: P, onError: H, updateNodePositions: j } = t();
      i = { x: O, y: F };
      let G = !1;
      const X = a.size > 1, K = X && A ? Z3(y1(a)) : null, J = X && $ ? Q6({
        dragItems: a,
        snapGrid: I,
        x: O,
        y: F
      }) : null;
      for (const [Q, B] of a) {
        if (!E.has(Q))
          continue;
        let U = { x: O - B.distance.x, y: F - B.distance.y };
        $ && (U = J ? {
          x: Math.round(U.x + J.x),
          y: Math.round(U.y + J.y)
        } : b1(U, I));
        let ie = null;
        if (X && A && !B.extent && K) {
          const { positionAbsolute: ee } = B.internals, fe = ee.x - K.x + A[0][0], ge = ee.x + B.measured.width - K.x2 + A[1][0], ae = ee.y - K.y + A[0][1], Se = ee.y + B.measured.height - K.y2 + A[1][1];
          ie = [
            [fe, ae],
            [ge, Se]
          ];
        }
        const { position: re, positionAbsolute: te } = L0({
          nodeId: Q,
          nextPosition: U,
          nodeLookup: E,
          nodeExtent: ie || A,
          nodeOrigin: R,
          onError: H
        });
        G = G || B.position.x !== re.x || B.position.y !== re.y, B.position = re, B.internals.positionAbsolute = te;
      }
      if (C = C || G, !!G && (j(a, !0), g && (r || Z || !y && P))) {
        const [Q, B] = K2({
          nodeId: y,
          dragItems: a,
          nodeLookup: E
        });
        r == null || r(g, a, Q, B), Z == null || Z(g, Q, B), y || P == null || P(g, B);
      }
    }
    async function N() {
      if (!u)
        return;
      const { transform: O, panBy: F, autoPanSpeed: E, autoPanOnNodeDrag: A } = t();
      if (!A) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [I, $] = w0(c, u, E);
      (I !== 0 || $ !== 0) && (i.x = (i.x ?? 0) - I / O[2], i.y = (i.y ?? 0) - $ / O[2], await F({ x: I, y: $ }) && k(i)), s = requestAnimationFrame(N);
    }
    function V(O) {
      var X;
      const { nodeLookup: F, multiSelectionActive: E, nodesDraggable: A, transform: I, snapGrid: $, snapToGrid: R, selectNodesOnDrag: Z, onNodeDragStart: P, onSelectionDragStart: H, unselectNodesAndEdges: j } = t();
      d = !0, (!Z || !_) && !E && y && ((X = F.get(y)) != null && X.selected || j()), _ && Z && y && (e == null || e(y));
      const G = a1(O.sourceEvent, { transform: I, snapGrid: $, snapToGrid: R, containerBounds: u });
      if (i = G, a = K6(F, A, G, y), a.size > 0 && (n || P || !y && H)) {
        const [K, J] = K2({
          nodeId: y,
          dragItems: a,
          nodeLookup: F
        });
        n == null || n(O.sourceEvent, a, K, J), P == null || P(O.sourceEvent, K, J), y || H == null || H(O.sourceEvent, J);
      }
    }
    const T = U4().clickDistance(S).on("start", (O) => {
      const { domNode: F, nodeDragThreshold: E, transform: A, snapGrid: I, snapToGrid: $ } = t();
      u = (F == null ? void 0 : F.getBoundingClientRect()) || null, h = !1, C = !1, g = O.sourceEvent, E === 0 && V(O), i = a1(O.sourceEvent, { transform: A, snapGrid: I, snapToGrid: $, containerBounds: u }), c = Xe(O.sourceEvent, u);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: F, transform: E, snapGrid: A, snapToGrid: I, nodeDragThreshold: $, nodeLookup: R } = t(), Z = a1(O.sourceEvent, { transform: E, snapGrid: A, snapToGrid: I, containerBounds: u });
      if (g = O.sourceEvent, (O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      y && !R.has(y)) && (h = !0), !h) {
        if (!l && F && d && (l = !0, N()), !d) {
          const P = Xe(O.sourceEvent, u), H = P.x - c.x, j = P.y - c.y;
          Math.sqrt(H * H + j * j) > $ && V(O);
        }
        (i.x !== Z.xSnapped || i.y !== Z.ySnapped) && a && d && (c = Xe(O.sourceEvent, u), k(Z));
      }
    }).on("end", (O) => {
      if (!(!d || h) && (l = !1, d = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: F, updateNodePositions: E, onNodeDragStop: A, onSelectionDragStop: I } = t();
        if (C && (E(a, !1), C = !1), o || A || !y && I) {
          const [$, R] = K2({
            nodeId: y,
            dragItems: a,
            nodeLookup: F,
            dragging: !1
          });
          o == null || o(O.sourceEvent, a, $, R), A == null || A(O.sourceEvent, $, R), y || I == null || I(O.sourceEvent, R);
        }
      }
    }).filter((O) => {
      const F = O.target;
      return !O.button && (!b || !Xn(F, `.${b}`, x)) && (!p || Xn(F, p, x));
    });
    f.call(T);
  }
  function L() {
    f == null || f.on(".drag", null);
  }
  return {
    update: v,
    destroy: L
  };
}
function ei(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    g1(o, Wt(i)) > 0 && r.push(i);
  return r;
}
const ti = 250;
function ni(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = ei(e, n, t + ti);
  for (const c of s) {
    const u = [...((a = c.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = c.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const d of u) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: h } = p1(c, d, d.position, !0), C = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(h - e.y, 2));
      C > t || (C < i ? (o = [{ ...d, x: f, y: h }], i = C) : C === i && o.push({ ...d, x: f, y: h }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const c = r.type === "source" ? "target" : "source";
    return o.find((u) => u.type === c) ?? o[0];
  }
  return o[0];
}
function $0(e, t, n, r, o, i = !1) {
  var c, u, d;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (c = s.internals.handleBounds) == null ? void 0 : c[t] : [...((u = s.internals.handleBounds) == null ? void 0 : u.source) ?? [], ...((d = s.internals.handleBounds) == null ? void 0 : d.target) ?? []], l = (n ? a == null ? void 0 : a.find((f) => f.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...p1(s, l, l.position, !0) } : l;
}
function T0(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function ri(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const F0 = () => !0;
function oi(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: u, flowId: d, panBy: f, cancelConnection: h, onConnectStart: C, onConnect: g, onConnectEnd: v, isValidConnection: L = F0, onReconnectEnd: b, updateConnection: p, getTransform: x, getFromHandle: _, autoPanSpeed: y, dragThreshold: S = 1, handleDomNode: k }) {
  const N = E0(e.target);
  let V = 0, T;
  const { x: O, y: F } = Xe(e), E = T0(i, k), A = a == null ? void 0 : a.getBoundingClientRect();
  let I = !1;
  if (!A || !E)
    return;
  const $ = $0(o, E, r, l, t);
  if (!$)
    return;
  let R = Xe(e, A), Z = !1, P = null, H = !1, j = null;
  function G() {
    if (!u || !A)
      return;
    const [re, te] = w0(R, A, y);
    f({ x: re, y: te }), V = requestAnimationFrame(G);
  }
  const X = {
    ...$,
    nodeId: o,
    type: E,
    position: $.position
  }, K = l.get(o);
  let Q = {
    inProgress: !0,
    isValid: null,
    from: p1(K, X, Y.Left, !0),
    fromHandle: X,
    fromPosition: X.position,
    fromNode: K,
    to: R,
    toHandle: null,
    toPosition: On[X.position],
    toNode: null,
    pointer: R
  };
  function B() {
    I = !0, p(Q), C == null || C(e, { nodeId: o, handleId: r, handleType: E });
  }
  S === 0 && B();
  function U(re) {
    if (!I) {
      const { x: ge, y: ae } = Xe(re), Se = ge - O, je = ae - F;
      if (!(Se * Se + je * je > S * S))
        return;
      B();
    }
    if (!_() || !X) {
      ie(re);
      return;
    }
    const te = x();
    R = Xe(re, A), T = ni(E1(R, te, !1, [1, 1]), n, l, X), Z || (G(), Z = !0);
    const ee = P0(re, {
      handle: T,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: L,
      doc: N,
      lib: c,
      flowId: d,
      nodeLookup: l
    });
    j = ee.handleDomNode, P = ee.connection, H = ri(!!T, ee.isValid);
    const fe = {
      // from stays the same
      ...Q,
      isValid: H,
      to: ee.toHandle && H ? s2({ x: ee.toHandle.x, y: ee.toHandle.y }, te) : R,
      toHandle: ee.toHandle,
      toPosition: H && ee.toHandle ? ee.toHandle.position : On[X.position],
      toNode: ee.toHandle ? l.get(ee.toHandle.nodeId) : null,
      pointer: R
    };
    p(fe), Q = fe;
  }
  function ie(re) {
    if (!("touches" in re && re.touches.length > 0)) {
      if (I) {
        (T || j) && P && H && (g == null || g(P));
        const { inProgress: te, ...ee } = Q, fe = {
          ...ee,
          toPosition: Q.toHandle ? Q.toPosition : null
        };
        v == null || v(re, fe), i && (b == null || b(re, fe));
      }
      h(), cancelAnimationFrame(V), Z = !1, H = !1, P = null, j = null, N.removeEventListener("mousemove", U), N.removeEventListener("mouseup", ie), N.removeEventListener("touchmove", U), N.removeEventListener("touchend", ie);
    }
  }
  N.addEventListener("mousemove", U), N.addEventListener("mouseup", ie), N.addEventListener("touchmove", U), N.addEventListener("touchend", ie);
}
function P0(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = F0, nodeLookup: u }) {
  const d = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: C } = Xe(e), g = s.elementFromPoint(h, C), v = g != null && g.classList.contains(`${a}-flow__handle`) ? g : f, L = {
    handleDomNode: v,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (v) {
    const b = T0(void 0, v), p = v.getAttribute("data-nodeid"), x = v.getAttribute("data-handleid"), _ = v.classList.contains("connectable"), y = v.classList.contains("connectableend");
    if (!p || !b)
      return L;
    const S = {
      source: d ? p : r,
      sourceHandle: d ? x : o,
      target: d ? r : p,
      targetHandle: d ? o : x
    };
    L.connection = S;
    const N = _ && y && (n === Vt.Strict ? d && b === "source" || !d && b === "target" : p !== r || x !== o);
    L.isValid = N && c(S), L.toHandle = $0(p, b, x, u, n, !0);
  }
  return L;
}
const O3 = {
  onPointerDown: oi,
  isValid: P0
};
function ii({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Te(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: u = 1, pannable: d = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const C = (p) => {
      if (p.sourceEvent.type !== "wheel" || !t)
        return;
      const x = n(), _ = p.sourceEvent.ctrlKey && C1() ? 10 : 1, y = -p.sourceEvent.deltaY * (p.sourceEvent.deltaMode === 1 ? 0.05 : p.sourceEvent.deltaMode ? 1 : 2e-3) * u, S = x[2] * Math.pow(2, y * _);
      t.scaleTo(S);
    };
    let g = [0, 0];
    const v = (p) => {
      (p.sourceEvent.type === "mousedown" || p.sourceEvent.type === "touchstart") && (g = [
        p.sourceEvent.clientX ?? p.sourceEvent.touches[0].clientX,
        p.sourceEvent.clientY ?? p.sourceEvent.touches[0].clientY
      ]);
    }, L = (p) => {
      const x = n();
      if (p.sourceEvent.type !== "mousemove" && p.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        p.sourceEvent.clientX ?? p.sourceEvent.touches[0].clientX,
        p.sourceEvent.clientY ?? p.sourceEvent.touches[0].clientY
      ], y = [_[0] - g[0], _[1] - g[1]];
      g = _;
      const S = r() * Math.max(x[2], Math.log(x[2])) * (h ? -1 : 1), k = {
        x: x[0] - y[0] * S,
        y: x[1] - y[1] * S
      }, N = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: k.x,
        y: k.y,
        zoom: x[2]
      }, N, a);
    }, b = d0().on("start", v).on("zoom", d ? L : null).on("zoom.wheel", f ? C : null);
    o.call(b, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: He
  };
}
const m2 = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Q2 = ({ x: e, y: t, zoom: n }) => C2.translate(e, t).scale(n), $t = (e, t) => e.target.closest(`.${t}`), j0 = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), si = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, J2 = (e, t = 0, n = si, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, D0 = (e) => {
  const t = e.ctrlKey && C1() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function ai({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (u) => {
    if ($t(u, t))
      return u.ctrlKey && u.preventDefault(), !1;
    u.preventDefault(), u.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (u.ctrlKey && s) {
      const v = He(u), L = D0(u), b = d * Math.pow(2, L);
      r.scaleTo(n, b, v, u);
      return;
    }
    const f = u.deltaMode === 1 ? 20 : 1;
    let h = o === yt.Vertical ? 0 : u.deltaX * f, C = o === yt.Horizontal ? 0 : u.deltaY * f;
    !C1() && u.shiftKey && o !== yt.Vertical && (h = u.deltaY * f, C = 0), r.translateBy(
      n,
      -(h / d) * i,
      -(C / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const g = m2(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l == null || l(u, g), e.panScrollTimeout = setTimeout(() => {
      c == null || c(u, g), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a == null || a(u, g));
  };
}
function li({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = $t(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function ci({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = m2(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function ui({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && j0(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, m2(i.transform)));
  };
}
function di({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && j0(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const l = m2(s.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function fi({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: u }) {
  return (d) => {
    var v;
    const f = e || t, h = n && d.ctrlKey, C = d.type === "wheel";
    if (d.button === 1 && d.type === "mousedown" && ($t(d, `${c}-flow__node`) || $t(d, `${c}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || u && !C || $t(d, a) && C || $t(d, l) && (!C || o && C && !e) || !n && d.ctrlKey && C)
      return !1;
    if (!n && d.type === "touchstart" && ((v = d.touches) == null ? void 0 : v.length) > 1)
      return d.preventDefault(), !1;
    if (!f && !o && !h && C || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || C) && g;
  };
}
function hi({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, u = e.getBoundingClientRect(), d = d0().scaleExtent([t, n]).translateExtent(r), f = Te(e).call(d);
  b({
    x: o.x,
    y: o.y,
    zoom: Bt(o.zoom, t, n)
  }, [
    [0, 0],
    [u.width, u.height]
  ], r);
  const h = f.on("wheel.zoom"), C = f.on("dblclick.zoom");
  d.wheelDelta(D0);
  function g(T, O) {
    return f ? new Promise((F) => {
      d == null || d.interpolate((O == null ? void 0 : O.interpolate) === "linear" ? s1 : Y1).transform(J2(f, O == null ? void 0 : O.duration, O == null ? void 0 : O.ease, () => F(!0)), T);
    }) : Promise.resolve(!1);
  }
  function v({ noWheelClassName: T, noPanClassName: O, onPaneContextMenu: F, userSelectionActive: E, panOnScroll: A, panOnDrag: I, panOnScrollMode: $, panOnScrollSpeed: R, preventScrolling: Z, zoomOnPinch: P, zoomOnScroll: H, zoomOnDoubleClick: j, zoomActivationKeyPressed: G, lib: X, onTransformChange: K, connectionInProgress: J, paneClickDistance: Q, selectionOnDrag: B }) {
    E && !c.isZoomingOrPanning && L();
    const U = A && !G && !E;
    d.clickDistance(B ? 1 / 0 : !ze(Q) || Q < 0 ? 0 : Q);
    const ie = U ? ai({
      zoomPanValues: c,
      noWheelClassName: T,
      d3Selection: f,
      d3Zoom: d,
      panOnScrollMode: $,
      panOnScrollSpeed: R,
      zoomOnPinch: P,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : li({
      noWheelClassName: T,
      preventScrolling: Z,
      d3ZoomHandler: h
    });
    if (f.on("wheel.zoom", ie, { passive: !1 }), !E) {
      const te = ci({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      d.on("start", te);
      const ee = ui({
        zoomPanValues: c,
        panOnDrag: I,
        onPaneContextMenu: !!F,
        onPanZoom: i,
        onTransformChange: K
      });
      d.on("zoom", ee);
      const fe = di({
        zoomPanValues: c,
        panOnDrag: I,
        panOnScroll: A,
        onPaneContextMenu: F,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      d.on("end", fe);
    }
    const re = fi({
      zoomActivationKeyPressed: G,
      panOnDrag: I,
      zoomOnScroll: H,
      panOnScroll: A,
      zoomOnDoubleClick: j,
      zoomOnPinch: P,
      userSelectionActive: E,
      noPanClassName: O,
      noWheelClassName: T,
      lib: X,
      connectionInProgress: J
    });
    d.filter(re), j ? f.on("dblclick.zoom", C) : f.on("dblclick.zoom", null);
  }
  function L() {
    d.on("zoom", null);
  }
  async function b(T, O, F) {
    const E = Q2(T), A = d == null ? void 0 : d.constrain()(E, O, F);
    return A && await g(A), new Promise((I) => I(A));
  }
  async function p(T, O) {
    const F = Q2(T);
    return await g(F, O), new Promise((E) => E(F));
  }
  function x(T) {
    if (f) {
      const O = Q2(T), F = f.property("__zoom");
      (F.k !== T.zoom || F.x !== T.x || F.y !== T.y) && (d == null || d.transform(f, O, null, { sync: !0 }));
    }
  }
  function _() {
    const T = f ? u0(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: T.x, y: T.y, zoom: T.k };
  }
  function y(T, O) {
    return f ? new Promise((F) => {
      d == null || d.interpolate((O == null ? void 0 : O.interpolate) === "linear" ? s1 : Y1).scaleTo(J2(f, O == null ? void 0 : O.duration, O == null ? void 0 : O.ease, () => F(!0)), T);
    }) : Promise.resolve(!1);
  }
  function S(T, O) {
    return f ? new Promise((F) => {
      d == null || d.interpolate((O == null ? void 0 : O.interpolate) === "linear" ? s1 : Y1).scaleBy(J2(f, O == null ? void 0 : O.duration, O == null ? void 0 : O.ease, () => F(!0)), T);
    }) : Promise.resolve(!1);
  }
  function k(T) {
    d == null || d.scaleExtent(T);
  }
  function N(T) {
    d == null || d.translateExtent(T);
  }
  function V(T) {
    const O = !ze(T) || T < 0 ? 0 : T;
    d == null || d.clickDistance(O);
  }
  return {
    update: v,
    destroy: L,
    setViewport: p,
    setViewportConstrained: b,
    getViewport: _,
    scaleTo: y,
    scaleBy: S,
    setScaleExtent: k,
    setTranslateExtent: N,
    syncViewport: x,
    setClickDistance: V
  };
}
var Xt;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Xt || (Xt = {}));
function gi({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const s = e - t, a = n - r, l = [s > 0 ? 1 : s < 0 ? -1 : 0, a > 0 ? 1 : a < 0 ? -1 : 0];
  return s && o && (l[0] = l[0] * -1), a && i && (l[1] = l[1] * -1), l;
}
function Gn(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), r = e.includes("left"), o = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: o
  };
}
function ct(e, t) {
  return Math.max(0, t - e);
}
function ut(e, t) {
  return Math.max(0, e - t);
}
function V1(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Yn(e, t) {
  return e ? !t : t;
}
function Ci(e, t, n, r, o, i, s, a) {
  let { affectsX: l, affectsY: c } = t;
  const { isHorizontal: u, isVertical: d } = t, f = u && d, { xSnapped: h, ySnapped: C } = n, { minWidth: g, maxWidth: v, minHeight: L, maxHeight: b } = r, { x: p, y: x, width: _, height: y, aspectRatio: S } = e;
  let k = Math.floor(u ? h - e.pointerX : 0), N = Math.floor(d ? C - e.pointerY : 0);
  const V = _ + (l ? -k : k), T = y + (c ? -N : N), O = -i[0] * _, F = -i[1] * y;
  let E = V1(V, g, v), A = V1(T, L, b);
  if (s) {
    let R = 0, Z = 0;
    l && k < 0 ? R = ct(p + k + O, s[0][0]) : !l && k > 0 && (R = ut(p + V + O, s[1][0])), c && N < 0 ? Z = ct(x + N + F, s[0][1]) : !c && N > 0 && (Z = ut(x + T + F, s[1][1])), E = Math.max(E, R), A = Math.max(A, Z);
  }
  if (a) {
    let R = 0, Z = 0;
    l && k > 0 ? R = ut(p + k, a[0][0]) : !l && k < 0 && (R = ct(p + V, a[1][0])), c && N > 0 ? Z = ut(x + N, a[0][1]) : !c && N < 0 && (Z = ct(x + T, a[1][1])), E = Math.max(E, R), A = Math.max(A, Z);
  }
  if (o) {
    if (u) {
      const R = V1(V / S, L, b) * S;
      if (E = Math.max(E, R), s) {
        let Z = 0;
        !l && !c || l && !c && f ? Z = ut(x + F + V / S, s[1][1]) * S : Z = ct(x + F + (l ? k : -k) / S, s[0][1]) * S, E = Math.max(E, Z);
      }
      if (a) {
        let Z = 0;
        !l && !c || l && !c && f ? Z = ct(x + V / S, a[1][1]) * S : Z = ut(x + (l ? k : -k) / S, a[0][1]) * S, E = Math.max(E, Z);
      }
    }
    if (d) {
      const R = V1(T * S, g, v) / S;
      if (A = Math.max(A, R), s) {
        let Z = 0;
        !l && !c || c && !l && f ? Z = ut(p + T * S + O, s[1][0]) / S : Z = ct(p + (c ? N : -N) * S + O, s[0][0]) / S, A = Math.max(A, Z);
      }
      if (a) {
        let Z = 0;
        !l && !c || c && !l && f ? Z = ct(p + T * S, a[1][0]) / S : Z = ut(p + (c ? N : -N) * S, a[0][0]) / S, A = Math.max(A, Z);
      }
    }
  }
  N = N + (N < 0 ? A : -A), k = k + (k < 0 ? E : -E), o && (f ? V > T * S ? N = (Yn(l, c) ? -k : k) / S : k = (Yn(l, c) ? -N : N) * S : u ? (N = k / S, c = l) : (k = N * S, l = c));
  const I = l ? p + k : p, $ = c ? x + N : x;
  return {
    width: _ + (l ? -k : k),
    height: y + (c ? -N : N),
    x: i[0] * k * (l ? -1 : 1) + I,
    y: i[1] * N * (c ? -1 : 1) + $
  };
}
const V0 = { width: 0, height: 0, x: 0, y: 0 }, pi = {
  ...V0,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Li(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function mi(e, t, n) {
  const r = t.position.x + e.position.x, o = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, a = n[0] * i, l = n[1] * s;
  return [
    [r - a, o - l],
    [r + i - a, o + s - l]
  ];
}
function wi({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = Te(e);
  let s = {
    controlDirection: Gn("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function a({ controlPosition: c, boundaries: u, keepAspectRatio: d, resizeDirection: f, onResizeStart: h, onResize: C, onResizeEnd: g, shouldResize: v }) {
    let L = { ...V0 }, b = { ...pi };
    s = {
      boundaries: u,
      resizeDirection: f,
      keepAspectRatio: d,
      controlDirection: Gn(c)
    };
    let p, x = null, _ = [], y, S, k, N = !1;
    const V = U4().on("start", (T) => {
      const { nodeLookup: O, transform: F, snapGrid: E, snapToGrid: A, nodeOrigin: I, paneDomNode: $ } = n();
      if (p = O.get(t), !p)
        return;
      x = ($ == null ? void 0 : $.getBoundingClientRect()) ?? null;
      const { xSnapped: R, ySnapped: Z } = a1(T.sourceEvent, {
        transform: F,
        snapGrid: E,
        snapToGrid: A,
        containerBounds: x
      });
      L = {
        width: p.measured.width ?? 0,
        height: p.measured.height ?? 0,
        x: p.position.x ?? 0,
        y: p.position.y ?? 0
      }, b = {
        ...L,
        pointerX: R,
        pointerY: Z,
        aspectRatio: L.width / L.height
      }, y = void 0, p.parentId && (p.extent === "parent" || p.expandParent) && (y = O.get(p.parentId), S = y && p.extent === "parent" ? Li(y) : void 0), _ = [], k = void 0;
      for (const [P, H] of O)
        if (H.parentId === t && (_.push({
          id: P,
          position: { ...H.position },
          extent: H.extent
        }), H.extent === "parent" || H.expandParent)) {
          const j = mi(H, p, H.origin ?? I);
          k ? k = [
            [Math.min(j[0][0], k[0][0]), Math.min(j[0][1], k[0][1])],
            [Math.max(j[1][0], k[1][0]), Math.max(j[1][1], k[1][1])]
          ] : k = j;
        }
      h == null || h(T, { ...L });
    }).on("drag", (T) => {
      const { transform: O, snapGrid: F, snapToGrid: E, nodeOrigin: A } = n(), I = a1(T.sourceEvent, {
        transform: O,
        snapGrid: F,
        snapToGrid: E,
        containerBounds: x
      }), $ = [];
      if (!p)
        return;
      const { x: R, y: Z, width: P, height: H } = L, j = {}, G = p.origin ?? A, { width: X, height: K, x: J, y: Q } = Ci(b, s.controlDirection, I, s.boundaries, s.keepAspectRatio, G, S, k), B = X !== P, U = K !== H, ie = J !== R && B, re = Q !== Z && U;
      if (!ie && !re && !B && !U)
        return;
      if ((ie || re || G[0] === 1 || G[1] === 1) && (j.x = ie ? J : L.x, j.y = re ? Q : L.y, L.x = j.x, L.y = j.y, _.length > 0)) {
        const ge = J - R, ae = Q - Z;
        for (const Se of _)
          Se.position = {
            x: Se.position.x - ge + G[0] * (X - P),
            y: Se.position.y - ae + G[1] * (K - H)
          }, $.push(Se);
      }
      if ((B || U) && (j.width = B && (!s.resizeDirection || s.resizeDirection === "horizontal") ? X : L.width, j.height = U && (!s.resizeDirection || s.resizeDirection === "vertical") ? K : L.height, L.width = j.width, L.height = j.height), y && p.expandParent) {
        const ge = G[0] * (j.width ?? 0);
        j.x && j.x < ge && (L.x = ge, b.x = b.x - (j.x - ge));
        const ae = G[1] * (j.height ?? 0);
        j.y && j.y < ae && (L.y = ae, b.y = b.y - (j.y - ae));
      }
      const te = gi({
        width: L.width,
        prevWidth: P,
        height: L.height,
        prevHeight: H,
        affectsX: s.controlDirection.affectsX,
        affectsY: s.controlDirection.affectsY
      }), ee = { ...L, direction: te };
      (v == null ? void 0 : v(T, ee)) !== !1 && (N = !0, C == null || C(T, ee), r(j, $));
    }).on("end", (T) => {
      N && (g == null || g(T, { ...L }), o == null || o({ ...L }), N = !1);
    });
    i.call(V);
  }
  function l() {
    i.on(".drag", null);
  }
  return {
    update: a,
    destroy: l
  };
}
var $3 = { exports: {} }, e3 = {}, H1 = { exports: {} }, t3 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function xi() {
  if (qn) return t3;
  qn = 1;
  var e = Mt;
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function a(d, f) {
    var h = f(), C = r({ inst: { value: h, getSnapshot: f } }), g = C[0].inst, v = C[1];
    return i(
      function() {
        g.value = h, g.getSnapshot = f, l(g) && v({ inst: g });
      },
      [d, h, f]
    ), o(
      function() {
        return l(g) && v({ inst: g }), d(function() {
          l(g) && v({ inst: g });
        });
      },
      [d]
    ), s(h), h;
  }
  function l(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var h = f();
      return !n(d, h);
    } catch {
      return !0;
    }
  }
  function c(d, f) {
    return f();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
  return t3.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, t3;
}
var n3 = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function vi() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h, C) {
      return h === C && (h !== 0 || 1 / h === 1 / C) || h !== h && C !== C;
    }
    function t(h, C) {
      u || o.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var g = C();
      if (!d) {
        var v = C();
        i(g, v) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      v = s({
        inst: { value: g, getSnapshot: C }
      });
      var L = v[0].inst, b = v[1];
      return l(
        function() {
          L.value = g, L.getSnapshot = C, n(L) && b({ inst: L });
        },
        [h, g, C]
      ), a(
        function() {
          return n(L) && b({ inst: L }), h(function() {
            n(L) && b({ inst: L });
          });
        },
        [h]
      ), c(g), g;
    }
    function n(h) {
      var C = h.getSnapshot;
      h = h.value;
      try {
        var g = C();
        return !i(h, g);
      } catch {
        return !0;
      }
    }
    function r(h, C) {
      return C();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = Mt, i = typeof Object.is == "function" ? Object.is : e, s = o.useState, a = o.useEffect, l = o.useLayoutEffect, c = o.useDebugValue, u = !1, d = !1, f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    n3.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), n3;
}
var Kn;
function H0() {
  return Kn || (Kn = 1, process.env.NODE_ENV === "production" ? H1.exports = xi() : H1.exports = vi()), H1.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function yi() {
  if (Qn) return e3;
  Qn = 1;
  var e = Mt, t = H0();
  function n(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return e3.useSyncExternalStoreWithSelector = function(c, u, d, f, h) {
    var C = i(null);
    if (C.current === null) {
      var g = { hasValue: !1, value: null };
      C.current = g;
    } else g = C.current;
    C = a(
      function() {
        function L(y) {
          if (!b) {
            if (b = !0, p = y, y = f(y), h !== void 0 && g.hasValue) {
              var S = g.value;
              if (h(S, y))
                return x = S;
            }
            return x = y;
          }
          if (S = x, r(p, y)) return S;
          var k = f(y);
          return h !== void 0 && h(S, k) ? (p = y, S) : (p = y, x = k);
        }
        var b = !1, p, x, _ = d === void 0 ? null : d;
        return [
          function() {
            return L(u());
          },
          _ === null ? void 0 : function() {
            return L(_());
          }
        ];
      },
      [u, d, f, h]
    );
    var v = o(c, C[0], C[1]);
    return s(
      function() {
        g.hasValue = !0, g.value = v;
      },
      [v]
    ), l(v), v;
  }, e3;
}
var r3 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function bi() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Mt, n = H0(), r = typeof Object.is == "function" ? Object.is : e, o = n.useSyncExternalStore, i = t.useRef, s = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    r3.useSyncExternalStoreWithSelector = function(c, u, d, f, h) {
      var C = i(null);
      if (C.current === null) {
        var g = { hasValue: !1, value: null };
        C.current = g;
      } else g = C.current;
      C = a(
        function() {
          function L(y) {
            if (!b) {
              if (b = !0, p = y, y = f(y), h !== void 0 && g.hasValue) {
                var S = g.value;
                if (h(S, y))
                  return x = S;
              }
              return x = y;
            }
            if (S = x, r(p, y))
              return S;
            var k = f(y);
            return h !== void 0 && h(S, k) ? (p = y, S) : (p = y, x = k);
          }
          var b = !1, p, x, _ = d === void 0 ? null : d;
          return [
            function() {
              return L(u());
            },
            _ === null ? void 0 : function() {
              return L(_());
            }
          ];
        },
        [u, d, f, h]
      );
      var v = o(c, C[0], C[1]);
      return s(
        function() {
          g.hasValue = !0, g.value = v;
        },
        [v]
      ), l(v), v;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), r3;
}
process.env.NODE_ENV === "production" ? $3.exports = yi() : $3.exports = bi();
var Ei = $3.exports;
const Si = /* @__PURE__ */ $4(Ei), Mi = {}, e5 = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, d) => {
    const f = typeof u == "function" ? u(t) : u;
    if (!Object.is(f, t)) {
      const h = t;
      t = d ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((C) => C(t, h));
    }
  }, o = () => t, l = { setState: r, getState: o, getInitialState: () => c, subscribe: (u) => (n.add(u), () => n.delete(u)), destroy: () => {
    (Mi ? "lib" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, c = t = e(r, o, l);
  return l;
}, _i = (e) => e ? e5(e) : e5, { useDebugValue: ki } = Mt, { useSyncExternalStoreWithSelector: Ni } = Si, Zi = (e) => e;
function B0(e, t = Zi, n) {
  const r = Ni(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return ki(r), r;
}
const t5 = (e, t) => {
  const n = _i(e), r = (o, i = t) => B0(n, o, i);
  return Object.assign(r, n), r;
}, Ii = (e, t) => e ? t5(e, t) : t5;
function ve(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e)
      if (!Object.is(o, t.get(r)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e)
      if (!t.has(r))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
const w2 = m1(null), Ri = w2.Provider, W0 = Pe.error001();
function de(e, t) {
  const n = _t(w2);
  if (n === null)
    throw new Error(W0);
  return B0(n, e, t);
}
function me() {
  const e = _t(w2);
  if (e === null)
    throw new Error(W0);
  return Ee(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const n5 = { display: "none" }, Ai = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, z0 = "react-flow__node-desc", X0 = "react-flow__edge-desc", Oi = "react-flow__aria-live", $i = (e) => e.ariaLiveMessage, Ti = (e) => e.ariaLabelConfig;
function Fi({ rfId: e }) {
  const t = de($i);
  return m.jsx("div", { id: `${Oi}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: Ai, children: t });
}
function Pi({ rfId: e, disableKeyboardA11y: t }) {
  const n = de(Ti);
  return m.jsxs(m.Fragment, { children: [m.jsx("div", { id: `${z0}-${e}`, style: n5, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), m.jsx("div", { id: `${X0}-${e}`, style: n5, children: n["edge.a11yDescription.default"] }), !t && m.jsx(Fi, { rfId: e })] });
}
const x2 = q(({ position: e = "top-left", children: t, className: n, style: r, ...o }, i) => {
  const s = `${e}`.split("-");
  return m.jsx("div", { className: ke(["react-flow__panel", n, ...s]), style: r, ref: i, ...o, children: t });
});
x2.displayName = "Panel";
function ji({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : m.jsx(x2, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: m.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Di = (e) => {
  const t = [], n = [];
  for (const [, r] of e.nodeLookup)
    r.selected && t.push(r.internals.userNode);
  for (const [, r] of e.edgeLookup)
    r.selected && n.push(r);
  return { selectedNodes: t, selectedEdges: n };
}, B1 = (e) => e.id;
function Vi(e, t) {
  return ve(e.selectedNodes.map(B1), t.selectedNodes.map(B1)) && ve(e.selectedEdges.map(B1), t.selectedEdges.map(B1));
}
function Hi({ onSelectionChange: e }) {
  const t = me(), { selectedNodes: n, selectedEdges: r } = de(Di, Vi);
  return ue(() => {
    const o = { nodes: n, edges: r };
    e == null || e(o), t.getState().onSelectionChangeHandlers.forEach((i) => i(o));
  }, [n, r, e]), null;
}
const Bi = (e) => !!e.onSelectionChangeHandlers;
function Wi({ onSelectionChange: e }) {
  const t = de(Bi);
  return e || t ? m.jsx(Hi, { onSelectionChange: e }) : null;
}
const G0 = [0, 0], zi = { x: 0, y: 0, zoom: 1 }, Xi = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig"
], r5 = [...Xi, "rfId"], Gi = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), o5 = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: f1,
  nodeOrigin: G0,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function Yi(e) {
  const { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: o, setTranslateExtent: i, setNodeExtent: s, reset: a, setDefaultNodesAndEdges: l } = de(Gi, ve), c = me();
  ue(() => (l(e.defaultNodes, e.defaultEdges), () => {
    u.current = o5, a();
  }), []);
  const u = ce(o5);
  return ue(
    () => {
      for (const d of r5) {
        const f = e[d], h = u.current[d];
        f !== h && (typeof e[d] > "u" || (d === "nodes" ? t(f) : d === "edges" ? n(f) : d === "minZoom" ? r(f) : d === "maxZoom" ? o(f) : d === "translateExtent" ? i(f) : d === "nodeExtent" ? s(f) : d === "ariaLabelConfig" ? c.setState({ ariaLabelConfig: I6(f) }) : d === "fitView" ? c.setState({ fitViewQueued: f }) : d === "fitViewOptions" ? c.setState({ fitViewOptions: f }) : c.setState({ [d]: f })));
      }
      u.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    r5.map((d) => e[d])
  ), null;
}
function i5() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function qi(e) {
  var r;
  const [t, n] = Me(e === "system" ? null : e);
  return ue(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const o = i5(), i = () => n(o != null && o.matches ? "dark" : "light");
    return i(), o == null || o.addEventListener("change", i), () => {
      o == null || o.removeEventListener("change", i);
    };
  }, [e]), t !== null ? t : (r = i5()) != null && r.matches ? "dark" : "light";
}
const s5 = typeof document < "u" ? document : null;
function L1(e = null, t = { target: s5, actInsideInputWithModifier: !0 }) {
  const [n, r] = Me(!1), o = ce(!1), i = ce(/* @__PURE__ */ new Set([])), [s, a] = Ee(() => {
    if (e !== null) {
      const c = (Array.isArray(e) ? e : [e]).filter((d) => typeof d == "string").map((d) => d.replace("+", `
`).replace(`

`, `
+`).split(`
`)), u = c.reduce((d, f) => d.concat(...f), []);
      return [c, u];
    }
    return [[], []];
  }, [e]);
  return ue(() => {
    const l = (t == null ? void 0 : t.target) ?? s5, c = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const u = (h) => {
        var v, L;
        if (o.current = h.ctrlKey || h.metaKey || h.shiftKey || h.altKey, (!o.current || o.current && !c) && S0(h))
          return !1;
        const g = l5(h.code, a);
        if (i.current.add(h[g]), a5(s, i.current, !1)) {
          const b = ((L = (v = h.composedPath) == null ? void 0 : v.call(h)) == null ? void 0 : L[0]) || h.target, p = (b == null ? void 0 : b.nodeName) === "BUTTON" || (b == null ? void 0 : b.nodeName) === "A";
          t.preventDefault !== !1 && (o.current || !p) && h.preventDefault(), r(!0);
        }
      }, d = (h) => {
        const C = l5(h.code, a);
        a5(s, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(h[C]), h.key === "Meta" && i.current.clear(), o.current = !1;
      }, f = () => {
        i.current.clear(), r(!1);
      };
      return l == null || l.addEventListener("keydown", u), l == null || l.addEventListener("keyup", d), window.addEventListener("blur", f), window.addEventListener("contextmenu", f), () => {
        l == null || l.removeEventListener("keydown", u), l == null || l.removeEventListener("keyup", d), window.removeEventListener("blur", f), window.removeEventListener("contextmenu", f);
      };
    }
  }, [e, r]), n;
}
function a5(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function l5(e, t) {
  return t.includes(e) ? "code" : "key";
}
const Ui = () => {
  const e = me();
  return Ee(() => ({
    zoomIn: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomOut: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1 / 1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomTo: (t, n) => {
      const { panZoom: r } = e.getState();
      return r ? r.scaleTo(t, { duration: n == null ? void 0 : n.duration }) : Promise.resolve(!1);
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, n) => {
      const { transform: [r, o, i], panZoom: s } = e.getState();
      return s ? (await s.setViewport({
        x: t.x ?? r,
        y: t.y ?? o,
        zoom: t.zoom ?? i
      }, n), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => {
      const [t, n, r] = e.getState().transform;
      return { x: t, y: n, zoom: r };
    },
    setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
    fitBounds: async (t, n) => {
      const { width: r, height: o, minZoom: i, maxZoom: s, panZoom: a } = e.getState(), l = U3(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
      return a ? (await a.setViewport(l, {
        duration: n == null ? void 0 : n.duration,
        ease: n == null ? void 0 : n.ease,
        interpolate: n == null ? void 0 : n.interpolate
      }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: r, snapGrid: o, snapToGrid: i, domNode: s } = e.getState();
      if (!s)
        return t;
      const { x: a, y: l } = s.getBoundingClientRect(), c = {
        x: t.x - a,
        y: t.y - l
      }, u = n.snapGrid ?? o, d = n.snapToGrid ?? i;
      return E1(c, r, d, u);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: r } = e.getState();
      if (!r)
        return t;
      const { x: o, y: i } = r.getBoundingClientRect(), s = s2(t, n);
      return {
        x: s.x + o,
        y: s.y + i
      };
    }
  }), []);
};
function Y0(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = [];
  for (const i of e)
    if (i.type === "add") {
      o.push(i);
      continue;
    } else if (i.type === "remove" || i.type === "replace")
      r.set(i.id, [i]);
    else {
      const s = r.get(i.id);
      s ? s.push(i) : r.set(i.id, [i]);
    }
  for (const i of t) {
    const s = r.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove")
      continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const a = { ...i };
    for (const l of s)
      Ki(l, a);
    n.push(a);
  }
  return o.length && o.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function Ki(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      typeof e.position < "u" && (t.position = e.position), typeof e.dragging < "u" && (t.dragging = e.dragging);
      break;
    }
    case "dimensions": {
      typeof e.dimensions < "u" && (t.measured ?? (t.measured = {}), t.measured.width = e.dimensions.width, t.measured.height = e.dimensions.height, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
      break;
    }
  }
}
function q0(e, t) {
  return Y0(e, t);
}
function U0(e, t) {
  return Y0(e, t);
}
function mt(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Tt(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const s = t.has(o);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), r.push(mt(i.id, s)));
  }
  return r;
}
function c5({ items: e = [], lookup: t }) {
  var o;
  const n = [], r = new Map(e.map((i) => [i.id, i]));
  for (const [i, s] of e.entries()) {
    const a = t.get(s.id), l = ((o = a == null ? void 0 : a.internals) == null ? void 0 : o.userNode) ?? a;
    l !== void 0 && l !== s && n.push({ id: s.id, item: s, type: "replace" }), l === void 0 && n.push({ item: s, type: "add", index: i });
  }
  for (const [i] of t)
    r.get(i) === void 0 && n.push({ id: i, type: "remove" });
  return n;
}
function u5(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const d5 = (e) => x6(e), Qi = (e) => p0(e);
function K0(e) {
  return q(e);
}
const Ji = typeof window < "u" ? Tr : ue;
function f5(e) {
  const [t, n] = Me(BigInt(0)), [r] = Me(() => es(() => n((o) => o + BigInt(1))));
  return Ji(() => {
    const o = r.get();
    o.length && (e(o), r.reset());
  }, [t]), r;
}
function es(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    }
  };
}
const Q0 = m1(null);
function ts({ children: e }) {
  const t = me(), n = W((a) => {
    const { nodes: l = [], setNodes: c, hasDefaultNodes: u, onNodesChange: d, nodeLookup: f, fitViewQueued: h } = t.getState();
    let C = l;
    for (const v of a)
      C = typeof v == "function" ? v(C) : v;
    const g = c5({
      items: C,
      lookup: f
    });
    u && c(C), g.length > 0 ? d == null || d(g) : h && window.requestAnimationFrame(() => {
      const { fitViewQueued: v, nodes: L, setNodes: b } = t.getState();
      v && b(L);
    });
  }, []), r = f5(n), o = W((a) => {
    const { edges: l = [], setEdges: c, hasDefaultEdges: u, onEdgesChange: d, edgeLookup: f } = t.getState();
    let h = l;
    for (const C of a)
      h = typeof C == "function" ? C(h) : C;
    u ? c(h) : d && d(c5({
      items: h,
      lookup: f
    }));
  }, []), i = f5(o), s = Ee(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return m.jsx(Q0.Provider, { value: s, children: e });
}
function ns() {
  const e = _t(Q0);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const rs = (e) => !!e.panZoom;
function Ie() {
  const e = Ui(), t = me(), n = ns(), r = de(rs), o = Ee(() => {
    const i = (d) => t.getState().nodeLookup.get(d), s = (d) => {
      n.nodeQueue.push(d);
    }, a = (d) => {
      n.edgeQueue.push(d);
    }, l = (d) => {
      var L, b;
      const { nodeLookup: f, nodeOrigin: h } = t.getState(), C = d5(d) ? d : f.get(d.id), g = C.parentId ? b0(C.position, C.measured, C.parentId, f, h) : C.position, v = {
        ...C,
        position: g,
        width: ((L = C.measured) == null ? void 0 : L.width) ?? C.width,
        height: ((b = C.measured) == null ? void 0 : b.height) ?? C.height
      };
      return Wt(v);
    }, c = (d, f, h = { replace: !1 }) => {
      s((C) => C.map((g) => {
        if (g.id === d) {
          const v = typeof f == "function" ? f(g) : f;
          return h.replace && d5(v) ? v : { ...g, ...v };
        }
        return g;
      }));
    }, u = (d, f, h = { replace: !1 }) => {
      a((C) => C.map((g) => {
        if (g.id === d) {
          const v = typeof f == "function" ? f(g) : f;
          return h.replace && Qi(v) ? v : { ...g, ...v };
        }
        return g;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((d) => ({ ...d })),
      getNode: (d) => {
        var f;
        return (f = i(d)) == null ? void 0 : f.internals.userNode;
      },
      getInternalNode: i,
      getEdges: () => {
        const { edges: d = [] } = t.getState();
        return d.map((f) => ({ ...f }));
      },
      getEdge: (d) => t.getState().edgeLookup.get(d),
      setNodes: s,
      setEdges: a,
      addNodes: (d) => {
        const f = Array.isArray(d) ? d : [d];
        n.nodeQueue.push((h) => [...h, ...f]);
      },
      addEdges: (d) => {
        const f = Array.isArray(d) ? d : [d];
        n.edgeQueue.push((h) => [...h, ...f]);
      },
      toObject: () => {
        const { nodes: d = [], edges: f = [], transform: h } = t.getState(), [C, g, v] = h;
        return {
          nodes: d.map((L) => ({ ...L })),
          edges: f.map((L) => ({ ...L })),
          viewport: {
            x: C,
            y: g,
            zoom: v
          }
        };
      },
      deleteElements: async ({ nodes: d = [], edges: f = [] }) => {
        const { nodes: h, edges: C, onNodesDelete: g, onEdgesDelete: v, triggerNodeChanges: L, triggerEdgeChanges: b, onDelete: p, onBeforeDelete: x } = t.getState(), { nodes: _, edges: y } = await _6({
          nodesToRemove: d,
          edgesToRemove: f,
          nodes: h,
          edges: C,
          onBeforeDelete: x
        }), S = y.length > 0, k = _.length > 0;
        if (S) {
          const N = y.map(u5);
          v == null || v(y), b(N);
        }
        if (k) {
          const N = _.map(u5);
          g == null || g(_), L(N);
        }
        return (k || S) && (p == null || p({ nodes: _, edges: y })), { deletedNodes: _, deletedEdges: y };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (d, f = !0, h) => {
        const C = Tn(d), g = C ? d : l(d), v = h !== void 0;
        return g ? (h || t.getState().nodes).filter((L) => {
          const b = t.getState().nodeLookup.get(L.id);
          if (b && !C && (L.id === d.id || !b.internals.positionAbsolute))
            return !1;
          const p = Wt(v ? L : b), x = g1(p, g);
          return f && x > 0 || x >= p.width * p.height || x >= g.width * g.height;
        }) : [];
      },
      isNodeIntersecting: (d, f, h = !0) => {
        const g = Tn(d) ? d : l(d);
        if (!g)
          return !1;
        const v = g1(g, f);
        return h && v > 0 || v >= f.width * f.height || v >= g.width * g.height;
      },
      updateNode: c,
      updateNodeData: (d, f, h = { replace: !1 }) => {
        c(d, (C) => {
          const g = typeof f == "function" ? f(C) : f;
          return h.replace ? { ...C, data: g } : { ...C, data: { ...C.data, ...g } };
        }, h);
      },
      updateEdge: u,
      updateEdgeData: (d, f, h = { replace: !1 }) => {
        u(d, (C) => {
          const g = typeof f == "function" ? f(C) : f;
          return h.replace ? { ...C, data: g } : { ...C, data: { ...C.data, ...g } };
        }, h);
      },
      getNodesBounds: (d) => {
        const { nodeLookup: f, nodeOrigin: h } = t.getState();
        return b6(d, { nodeLookup: f, nodeOrigin: h });
      },
      getHandleConnections: ({ type: d, id: f, nodeId: h }) => {
        var C;
        return Array.from(((C = t.getState().connectionLookup.get(`${h}-${d}${f ? `-${f}` : ""}`)) == null ? void 0 : C.values()) ?? []);
      },
      getNodeConnections: ({ type: d, handleId: f, nodeId: h }) => {
        var C;
        return Array.from(((C = t.getState().connectionLookup.get(`${h}${d ? f ? `-${d}-${f}` : `-${d}` : ""}`)) == null ? void 0 : C.values()) ?? []);
      },
      fitView: async (d) => {
        const f = t.getState().fitViewResolver ?? Z6();
        return t.setState({ fitViewQueued: !0, fitViewOptions: d, fitViewResolver: f }), n.nodeQueue.push((h) => [...h]), f.promise;
      }
    };
  }, []);
  return Ee(() => ({
    ...o,
    ...e,
    viewportInitialized: r
  }), [r]);
}
const h5 = (e) => e.selected, os = typeof window < "u" ? window : void 0;
function is({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = me(), { deleteElements: r } = Ie(), o = L1(e, { actInsideInputWithModifier: !1 }), i = L1(t, { target: os });
  ue(() => {
    if (o) {
      const { edges: s, nodes: a } = n.getState();
      r({ nodes: a.filter(h5), edges: s.filter(h5) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [o]), ue(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function ss(e) {
  const t = me();
  ue(() => {
    const n = () => {
      var o, i, s, a;
      if (!e.current || !(((i = (o = e.current).checkVisibility) == null ? void 0 : i.call(o)) ?? !0))
        return !1;
      const r = K3(e.current);
      (r.height === 0 || r.width === 0) && ((a = (s = t.getState()).onError) == null || a.call(s, "004", Pe.error004())), t.setState({ width: r.width || 500, height: r.height || 500 });
    };
    if (e.current) {
      n(), window.addEventListener("resize", n);
      const r = new ResizeObserver(() => n());
      return r.observe(e.current), () => {
        window.removeEventListener("resize", n), r && e.current && r.unobserve(e.current);
      };
    }
  }, []);
}
const v2 = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, as = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function ls({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: o = 0.5, panOnScrollMode: i = yt.Free, zoomOnDoubleClick: s = !0, panOnDrag: a = !0, defaultViewport: l, translateExtent: c, minZoom: u, maxZoom: d, zoomActivationKeyCode: f, preventScrolling: h = !0, children: C, noWheelClassName: g, noPanClassName: v, onViewportChange: L, isControlledViewport: b, paneClickDistance: p, selectionOnDrag: x }) {
  const _ = me(), y = ce(null), { userSelectionActive: S, lib: k, connectionInProgress: N } = de(as, ve), V = L1(f), T = ce();
  ss(y);
  const O = W((F) => {
    L == null || L({ x: F[0], y: F[1], zoom: F[2] }), b || _.setState({ transform: F });
  }, [L, b]);
  return ue(() => {
    if (y.current) {
      T.current = hi({
        domNode: y.current,
        minZoom: u,
        maxZoom: d,
        translateExtent: c,
        viewport: l,
        onDraggingChange: (I) => _.setState({ paneDragging: I }),
        onPanZoomStart: (I, $) => {
          const { onViewportChangeStart: R, onMoveStart: Z } = _.getState();
          Z == null || Z(I, $), R == null || R($);
        },
        onPanZoom: (I, $) => {
          const { onViewportChange: R, onMove: Z } = _.getState();
          Z == null || Z(I, $), R == null || R($);
        },
        onPanZoomEnd: (I, $) => {
          const { onViewportChangeEnd: R, onMoveEnd: Z } = _.getState();
          Z == null || Z(I, $), R == null || R($);
        }
      });
      const { x: F, y: E, zoom: A } = T.current.getViewport();
      return _.setState({
        panZoom: T.current,
        transform: [F, E, A],
        domNode: y.current.closest(".react-flow")
      }), () => {
        var I;
        (I = T.current) == null || I.destroy();
      };
    }
  }, []), ue(() => {
    var F;
    (F = T.current) == null || F.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: r,
      panOnScrollSpeed: o,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: a,
      zoomActivationKeyPressed: V,
      preventScrolling: h,
      noPanClassName: v,
      userSelectionActive: S,
      noWheelClassName: g,
      lib: k,
      onTransformChange: O,
      connectionInProgress: N,
      selectionOnDrag: x,
      paneClickDistance: p
    });
  }, [
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    a,
    V,
    h,
    v,
    S,
    g,
    k,
    O,
    N,
    x,
    p
  ]), m.jsx("div", { className: "react-flow__renderer", ref: y, style: v2, children: C });
}
const cs = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function us() {
  const { userSelectionActive: e, userSelectionRect: t } = de(cs, ve);
  return e && t ? m.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const o3 = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, ds = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function fs({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = h1.Full, panOnDrag: r, paneClickDistance: o, selectionOnDrag: i, onSelectionStart: s, onSelectionEnd: a, onPaneClick: l, onPaneContextMenu: c, onPaneScroll: u, onPaneMouseEnter: d, onPaneMouseMove: f, onPaneMouseLeave: h, children: C }) {
  const g = me(), { userSelectionActive: v, elementsSelectable: L, dragging: b, connectionInProgress: p } = de(ds, ve), x = L && (e || v), _ = ce(null), y = ce(), S = ce(/* @__PURE__ */ new Set()), k = ce(/* @__PURE__ */ new Set()), N = ce(!1), V = (R) => {
    if (N.current || p) {
      N.current = !1;
      return;
    }
    l == null || l(R), g.getState().resetSelectedElements(), g.setState({ nodesSelectionActive: !1 });
  }, T = (R) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      R.preventDefault();
      return;
    }
    c == null || c(R);
  }, O = u ? (R) => u(R) : void 0, F = (R) => {
    N.current && (R.stopPropagation(), N.current = !1);
  }, E = (R) => {
    var K, J;
    const { domNode: Z } = g.getState();
    if (y.current = Z == null ? void 0 : Z.getBoundingClientRect(), !y.current)
      return;
    const P = R.target === _.current;
    if (!P && !!R.target.closest(".nokey") || !e || !(i && P || t) || R.button !== 0 || !R.isPrimary)
      return;
    (J = (K = R.target) == null ? void 0 : K.setPointerCapture) == null || J.call(K, R.pointerId), N.current = !1;
    const { x: G, y: X } = Xe(R.nativeEvent, y.current);
    g.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: G,
        startY: X,
        x: G,
        y: X
      }
    }), P || (R.stopPropagation(), R.preventDefault());
  }, A = (R) => {
    const { userSelectionRect: Z, transform: P, nodeLookup: H, edgeLookup: j, connectionLookup: G, triggerNodeChanges: X, triggerEdgeChanges: K, defaultEdgeOptions: J, resetSelectedElements: Q } = g.getState();
    if (!y.current || !Z)
      return;
    const { x: B, y: U } = Xe(R.nativeEvent, y.current), { startX: ie, startY: re } = Z;
    if (!N.current) {
      const ae = t ? 0 : o;
      if (Math.hypot(B - ie, U - re) <= ae)
        return;
      Q(), s == null || s(R);
    }
    N.current = !0;
    const te = {
      startX: ie,
      startY: re,
      x: B < ie ? B : ie,
      y: U < re ? U : re,
      width: Math.abs(B - ie),
      height: Math.abs(U - re)
    }, ee = S.current, fe = k.current;
    S.current = new Set(q3(H, te, P, n === h1.Partial, !0).map((ae) => ae.id)), k.current = /* @__PURE__ */ new Set();
    const ge = (J == null ? void 0 : J.selectable) ?? !0;
    for (const ae of S.current) {
      const Se = G.get(ae);
      if (Se)
        for (const { edgeId: je } of Se.values()) {
          const De = j.get(je);
          De && (De.selectable ?? ge) && k.current.add(je);
        }
    }
    if (!Fn(ee, S.current)) {
      const ae = Tt(H, S.current, !0);
      X(ae);
    }
    if (!Fn(fe, k.current)) {
      const ae = Tt(j, k.current);
      K(ae);
    }
    g.setState({
      userSelectionRect: te,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, I = (R) => {
    var Z, P;
    R.button === 0 && ((P = (Z = R.target) == null ? void 0 : Z.releasePointerCapture) == null || P.call(Z, R.pointerId), !v && R.target === _.current && g.getState().userSelectionRect && (V == null || V(R)), g.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), N.current && (a == null || a(R), g.setState({
      nodesSelectionActive: S.current.size > 0
    })));
  }, $ = r === !0 || Array.isArray(r) && r.includes(0);
  return m.jsxs("div", { className: ke(["react-flow__pane", { draggable: $, dragging: b, selection: e }]), onClick: x ? void 0 : o3(V, _), onContextMenu: o3(T, _), onWheel: o3(O, _), onPointerEnter: x ? void 0 : d, onPointerMove: x ? A : f, onPointerUp: x ? I : void 0, onPointerDownCapture: x ? E : void 0, onClickCapture: x ? F : void 0, onPointerLeave: h, ref: _, style: v2, children: [C, m.jsx(us, {})] });
}
function T3({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const { addSelectedNodes: o, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: a, onError: l } = t.getState(), c = a.get(e);
  if (!c) {
    l == null || l("012", Pe.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), c.selected ? (n || c.selected && s) && (i({ nodes: [c], edges: [] }), requestAnimationFrame(() => {
    var u;
    return (u = r == null ? void 0 : r.current) == null ? void 0 : u.blur();
  })) : o([e]);
}
function J0({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: o, isSelectable: i, nodeClickDistance: s }) {
  const a = me(), [l, c] = Me(!1), u = ce();
  return ue(() => {
    u.current = J6({
      getStoreItems: () => a.getState(),
      onNodeMouseDown: (d) => {
        T3({
          id: d,
          store: a,
          nodeRef: e
        });
      },
      onDragStart: () => {
        c(!0);
      },
      onDragStop: () => {
        c(!1);
      }
    });
  }, []), ue(() => {
    var d, f;
    if (t)
      (d = u.current) == null || d.destroy();
    else if (e.current)
      return (f = u.current) == null || f.update({
        noDragClassName: n,
        handleSelector: r,
        domNode: e.current,
        isSelectable: i,
        nodeId: o,
        nodeClickDistance: s
      }), () => {
        var h;
        (h = u.current) == null || h.destroy();
      };
  }, [n, r, t, i, e, o]), l;
}
const hs = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function e8() {
  const e = me();
  return W((n) => {
    const { nodeExtent: r, snapToGrid: o, snapGrid: i, nodesDraggable: s, onError: a, updateNodePositions: l, nodeLookup: c, nodeOrigin: u } = e.getState(), d = /* @__PURE__ */ new Map(), f = hs(s), h = o ? i[0] : 5, C = o ? i[1] : 5, g = n.direction.x * h * n.factor, v = n.direction.y * C * n.factor;
    for (const [, L] of c) {
      if (!f(L))
        continue;
      let b = {
        x: L.internals.positionAbsolute.x + g,
        y: L.internals.positionAbsolute.y + v
      };
      o && (b = b1(b, i));
      const { position: p, positionAbsolute: x } = L0({
        nodeId: L.id,
        nextPosition: b,
        nodeLookup: c,
        nodeExtent: r,
        nodeOrigin: u,
        onError: a
      });
      L.position = p, L.internals.positionAbsolute = x, d.set(L.id, L);
    }
    l(d);
  }, []);
}
const nn = m1(null), gs = nn.Provider;
nn.Consumer;
const t8 = () => _t(nn), Cs = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), ps = (e, t, n) => (r) => {
  const { connectionClickStartHandle: o, connectionMode: i, connection: s } = r, { fromHandle: a, toHandle: l, isValid: c } = s, u = (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.id) === t && (l == null ? void 0 : l.type) === n;
  return {
    connectingFrom: (a == null ? void 0 : a.nodeId) === e && (a == null ? void 0 : a.id) === t && (a == null ? void 0 : a.type) === n,
    connectingTo: u,
    clickConnecting: (o == null ? void 0 : o.nodeId) === e && (o == null ? void 0 : o.id) === t && (o == null ? void 0 : o.type) === n,
    isPossibleEndHandle: i === Vt.Strict ? (a == null ? void 0 : a.type) !== n : e !== (a == null ? void 0 : a.nodeId) || t !== (a == null ? void 0 : a.id),
    connectionInProcess: !!a,
    clickConnectionInProcess: !!o,
    valid: u && c
  };
};
function Ls({ type: e = "source", position: t = Y.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: s, onConnect: a, children: l, className: c, onMouseDown: u, onTouchStart: d, ...f }, h) {
  var A, I;
  const C = s || null, g = e === "target", v = me(), L = t8(), { connectOnClick: b, noPanClassName: p, rfId: x } = de(Cs, ve), { connectingFrom: _, connectingTo: y, clickConnecting: S, isPossibleEndHandle: k, connectionInProcess: N, clickConnectionInProcess: V, valid: T } = de(ps(L, C, e), ve);
  L || (I = (A = v.getState()).onError) == null || I.call(A, "010", Pe.error010());
  const O = ($) => {
    const { defaultEdgeOptions: R, onConnect: Z, hasDefaultEdges: P } = v.getState(), H = {
      ...R,
      ...$
    };
    if (P) {
      const { edges: j, setEdges: G } = v.getState();
      G(F6(H, j));
    }
    Z == null || Z(H), a == null || a(H);
  }, F = ($) => {
    if (!L)
      return;
    const R = M0($.nativeEvent);
    if (o && (R && $.button === 0 || !R)) {
      const Z = v.getState();
      O3.onPointerDown($.nativeEvent, {
        handleDomNode: $.currentTarget,
        autoPanOnConnect: Z.autoPanOnConnect,
        connectionMode: Z.connectionMode,
        connectionRadius: Z.connectionRadius,
        domNode: Z.domNode,
        nodeLookup: Z.nodeLookup,
        lib: Z.lib,
        isTarget: g,
        handleId: C,
        nodeId: L,
        flowId: Z.rfId,
        panBy: Z.panBy,
        cancelConnection: Z.cancelConnection,
        onConnectStart: Z.onConnectStart,
        onConnectEnd: Z.onConnectEnd,
        updateConnection: Z.updateConnection,
        onConnect: O,
        isValidConnection: n || Z.isValidConnection,
        getTransform: () => v.getState().transform,
        getFromHandle: () => v.getState().connection.fromHandle,
        autoPanSpeed: Z.autoPanSpeed,
        dragThreshold: Z.connectionDragThreshold
      });
    }
    R ? u == null || u($) : d == null || d($);
  }, E = ($) => {
    const { onClickConnectStart: R, onClickConnectEnd: Z, connectionClickStartHandle: P, connectionMode: H, isValidConnection: j, lib: G, rfId: X, nodeLookup: K, connection: J } = v.getState();
    if (!L || !P && !o)
      return;
    if (!P) {
      R == null || R($.nativeEvent, { nodeId: L, handleId: C, handleType: e }), v.setState({ connectionClickStartHandle: { nodeId: L, type: e, id: C } });
      return;
    }
    const Q = E0($.target), B = n || j, { connection: U, isValid: ie } = O3.isValid($.nativeEvent, {
      handle: {
        nodeId: L,
        id: C,
        type: e
      },
      connectionMode: H,
      fromNodeId: P.nodeId,
      fromHandleId: P.id || null,
      fromType: P.type,
      isValidConnection: B,
      flowId: X,
      doc: Q,
      lib: G,
      nodeLookup: K
    });
    ie && U && O(U);
    const re = structuredClone(J);
    delete re.inProgress, re.toPosition = re.toHandle ? re.toHandle.position : null, Z == null || Z($, re), v.setState({ connectionClickStartHandle: null });
  };
  return m.jsx("div", { "data-handleid": C, "data-nodeid": L, "data-handlepos": t, "data-id": `${x}-${L}-${C}-${e}`, className: ke([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    p,
    c,
    {
      source: !g,
      target: g,
      connectable: r,
      connectablestart: o,
      connectableend: i,
      clickconnecting: S,
      connectingfrom: _,
      connectingto: y,
      valid: T,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!N || k) && (N || V ? i : o)
    }
  ]), onMouseDown: F, onTouchStart: F, onClick: b ? E : void 0, ref: h, ...f, children: l });
}
const Ae = be(K0(Ls));
function ms({ data: e, isConnectable: t, sourcePosition: n = Y.Bottom }) {
  return m.jsxs(m.Fragment, { children: [e == null ? void 0 : e.label, m.jsx(Ae, { type: "source", position: n, isConnectable: t })] });
}
function ws({ data: e, isConnectable: t, targetPosition: n = Y.Top, sourcePosition: r = Y.Bottom }) {
  return m.jsxs(m.Fragment, { children: [m.jsx(Ae, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, m.jsx(Ae, { type: "source", position: r, isConnectable: t })] });
}
function xs() {
  return null;
}
function vs({ data: e, isConnectable: t, targetPosition: n = Y.Top }) {
  return m.jsxs(m.Fragment, { children: [m.jsx(Ae, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const a2 = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, g5 = {
  input: ms,
  default: ws,
  output: vs,
  group: xs
};
function ys(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
    height: e.height ?? ((o = e.style) == null ? void 0 : o.height)
  };
}
const bs = (e) => {
  const { width: t, height: n, x: r, y: o } = y1(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: ze(t) ? t : null,
    height: ze(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`
  };
};
function Es({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = me(), { width: o, height: i, transformString: s, userSelectionActive: a } = de(bs, ve), l = e8(), c = ce(null);
  if (ue(() => {
    var f;
    n || (f = c.current) == null || f.focus({
      preventScroll: !0
    });
  }, [n]), J0({
    nodeRef: c
  }), a || !o || !i)
    return null;
  const u = e ? (f) => {
    const h = r.getState().nodes.filter((C) => C.selected);
    e(f, h);
  } : void 0, d = (f) => {
    Object.prototype.hasOwnProperty.call(a2, f.key) && (f.preventDefault(), l({
      direction: a2[f.key],
      factor: f.shiftKey ? 4 : 1
    }));
  };
  return m.jsx("div", { className: ke(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: m.jsx("div", { ref: c, className: "react-flow__nodesselection-rect", onContextMenu: u, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : d, style: {
    width: o,
    height: i
  } }) });
}
const C5 = typeof window < "u" ? window : void 0, Ss = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function n8({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: a, deleteKeyCode: l, selectionKeyCode: c, selectionOnDrag: u, selectionMode: d, onSelectionStart: f, onSelectionEnd: h, multiSelectionKeyCode: C, panActivationKeyCode: g, zoomActivationKeyCode: v, elementsSelectable: L, zoomOnScroll: b, zoomOnPinch: p, panOnScroll: x, panOnScrollSpeed: _, panOnScrollMode: y, zoomOnDoubleClick: S, panOnDrag: k, defaultViewport: N, translateExtent: V, minZoom: T, maxZoom: O, preventScrolling: F, onSelectionContextMenu: E, noWheelClassName: A, noPanClassName: I, disableKeyboardA11y: $, onViewportChange: R, isControlledViewport: Z }) {
  const { nodesSelectionActive: P, userSelectionActive: H } = de(Ss), j = L1(c, { target: C5 }), G = L1(g, { target: C5 }), X = G || k, K = G || x, J = u && X !== !0, Q = j || H || J;
  return is({ deleteKeyCode: l, multiSelectionKeyCode: C }), m.jsx(ls, { onPaneContextMenu: i, elementsSelectable: L, zoomOnScroll: b, zoomOnPinch: p, panOnScroll: K, panOnScrollSpeed: _, panOnScrollMode: y, zoomOnDoubleClick: S, panOnDrag: !j && X, defaultViewport: N, translateExtent: V, minZoom: T, maxZoom: O, zoomActivationKeyCode: v, preventScrolling: F, noWheelClassName: A, noPanClassName: I, onViewportChange: R, isControlledViewport: Z, paneClickDistance: a, selectionOnDrag: J, children: m.jsxs(fs, { onSelectionStart: f, onSelectionEnd: h, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: X, isSelecting: !!Q, selectionMode: d, selectionKeyPressed: j, paneClickDistance: a, selectionOnDrag: J, children: [e, P && m.jsx(Es, { onSelectionContextMenu: E, noPanClassName: I, disableKeyboardA11y: $ })] }) });
}
n8.displayName = "FlowRenderer";
const Ms = be(n8), _s = (e) => (t) => e ? q3(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function ks(e) {
  return de(W(_s(e), [e]), ve);
}
const Ns = (e) => e.updateNodeInternals;
function Zs() {
  const e = de(Ns), [t] = Me(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const r = /* @__PURE__ */ new Map();
    n.forEach((o) => {
      const i = o.target.getAttribute("data-id");
      r.set(i, {
        id: i,
        nodeElement: o.target,
        force: !0
      });
    }), e(r);
  }));
  return ue(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function Is({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = me(), i = ce(null), s = ce(null), a = ce(e.sourcePosition), l = ce(e.targetPosition), c = ce(t), u = n && !!e.internals.handleBounds;
  return ue(() => {
    i.current && !e.hidden && (!u || s.current !== i.current) && (s.current && (r == null || r.unobserve(s.current)), r == null || r.observe(i.current), s.current = i.current);
  }, [u, e.hidden]), ue(() => () => {
    s.current && (r == null || r.unobserve(s.current), s.current = null);
  }, []), ue(() => {
    if (i.current) {
      const d = c.current !== t, f = a.current !== e.sourcePosition, h = l.current !== e.targetPosition;
      (d || f || h) && (c.current = t, a.current = e.sourcePosition, l.current = e.targetPosition, o.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function Rs({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: o, onContextMenu: i, onDoubleClick: s, nodesDraggable: a, elementsSelectable: l, nodesConnectable: c, nodesFocusable: u, resizeObserver: d, noDragClassName: f, noPanClassName: h, disableKeyboardA11y: C, rfId: g, nodeTypes: v, nodeClickDistance: L, onError: b }) {
  const { node: p, internals: x, isParent: _ } = de((B) => {
    const U = B.nodeLookup.get(e), ie = B.parentLookup.has(e);
    return {
      node: U,
      internals: U.internals,
      isParent: ie
    };
  }, ve);
  let y = p.type || "default", S = (v == null ? void 0 : v[y]) || g5[y];
  S === void 0 && (b == null || b("003", Pe.error003(y)), y = "default", S = (v == null ? void 0 : v.default) || g5.default);
  const k = !!(p.draggable || a && typeof p.draggable > "u"), N = !!(p.selectable || l && typeof p.selectable > "u"), V = !!(p.connectable || c && typeof p.connectable > "u"), T = !!(p.focusable || u && typeof p.focusable > "u"), O = me(), F = y0(p), E = Is({ node: p, nodeType: y, hasDimensions: F, resizeObserver: d }), A = J0({
    nodeRef: E,
    disabled: p.hidden || !k,
    noDragClassName: f,
    handleSelector: p.dragHandle,
    nodeId: e,
    isSelectable: N,
    nodeClickDistance: L
  }), I = e8();
  if (p.hidden)
    return null;
  const $ = it(p), R = ys(p), Z = N || k || t || n || r || o, P = n ? (B) => n(B, { ...x.userNode }) : void 0, H = r ? (B) => r(B, { ...x.userNode }) : void 0, j = o ? (B) => o(B, { ...x.userNode }) : void 0, G = i ? (B) => i(B, { ...x.userNode }) : void 0, X = s ? (B) => s(B, { ...x.userNode }) : void 0, K = (B) => {
    const { selectNodesOnDrag: U, nodeDragThreshold: ie } = O.getState();
    N && (!U || !k || ie > 0) && T3({
      id: e,
      store: O,
      nodeRef: E
    }), t && t(B, { ...x.userNode });
  }, J = (B) => {
    if (!(S0(B.nativeEvent) || C)) {
      if (f0.includes(B.key) && N) {
        const U = B.key === "Escape";
        T3({
          id: e,
          store: O,
          unselect: U,
          nodeRef: E
        });
      } else if (k && p.selected && Object.prototype.hasOwnProperty.call(a2, B.key)) {
        B.preventDefault();
        const { ariaLabelConfig: U } = O.getState();
        O.setState({
          ariaLiveMessage: U["node.a11yDescription.ariaLiveMessage"]({
            direction: B.key.replace("Arrow", "").toLowerCase(),
            x: ~~x.positionAbsolute.x,
            y: ~~x.positionAbsolute.y
          })
        }), I({
          direction: a2[B.key],
          factor: B.shiftKey ? 4 : 1
        });
      }
    }
  }, Q = () => {
    var fe;
    if (C || !((fe = E.current) != null && fe.matches(":focus-visible")))
      return;
    const { transform: B, width: U, height: ie, autoPanOnNodeFocus: re, setCenter: te } = O.getState();
    if (!re)
      return;
    q3(/* @__PURE__ */ new Map([[e, p]]), { x: 0, y: 0, width: U, height: ie }, B, !0).length > 0 || te(p.position.x + $.width / 2, p.position.y + $.height / 2, {
      zoom: B[2]
    });
  };
  return m.jsx("div", { className: ke([
    "react-flow__node",
    `react-flow__node-${y}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [h]: k
    },
    p.className,
    {
      selected: p.selected,
      selectable: N,
      parent: _,
      draggable: k,
      dragging: A
    }
  ]), ref: E, style: {
    zIndex: x.z,
    transform: `translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,
    pointerEvents: Z ? "all" : "none",
    visibility: F ? "visible" : "hidden",
    ...p.style,
    ...R
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: P, onMouseMove: H, onMouseLeave: j, onContextMenu: G, onClick: K, onDoubleClick: X, onKeyDown: T ? J : void 0, tabIndex: T ? 0 : void 0, onFocus: T ? Q : void 0, role: p.ariaRole ?? (T ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": C ? void 0 : `${z0}-${g}`, "aria-label": p.ariaLabel, ...p.domAttributes, children: m.jsx(gs, { value: e, children: m.jsx(S, { id: e, data: p.data, type: y, positionAbsoluteX: x.positionAbsolute.x, positionAbsoluteY: x.positionAbsolute.y, selected: p.selected ?? !1, selectable: N, draggable: k, deletable: p.deletable ?? !0, isConnectable: V, sourcePosition: p.sourcePosition, targetPosition: p.targetPosition, dragging: A, dragHandle: p.dragHandle, zIndex: x.z, parentId: p.parentId, ...$ }) }) });
}
var As = be(Rs);
const Os = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function r8(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = de(Os, ve), s = ks(e.onlyRenderVisibleElements), a = Zs();
  return m.jsx("div", { className: "react-flow__nodes", style: v2, children: s.map((l) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    m.jsx(As, { id: l, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: a, nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, nodeClickDistance: e.nodeClickDistance, onError: i }, l)
  )) });
}
r8.displayName = "NodeRenderer";
const $s = be(r8);
function Ts(e) {
  return de(W((n) => {
    if (!e)
      return n.edges.map((o) => o.id);
    const r = [];
    if (n.width && n.height)
      for (const o of n.edges) {
        const i = n.nodeLookup.get(o.source), s = n.nodeLookup.get(o.target);
        i && s && O6({
          sourceNode: i,
          targetNode: s,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && r.push(o.id);
      }
    return r;
  }, [e]), ve);
}
const Fs = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return m.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, Ps = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return m.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, p5 = {
  [Ht.Arrow]: Fs,
  [Ht.ArrowClosed]: Ps
};
function js(e) {
  const t = me();
  return Ee(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(p5, e) ? p5[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", Pe.error009(e)), null);
  }, [e]);
}
const Ds = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: a = "auto-start-reverse" }) => {
  const l = js(t);
  return l ? m.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: a, refX: "0", refY: "0", children: m.jsx(l, { color: n, strokeWidth: s }) }) : null;
}, o8 = ({ defaultColor: e, rfId: t }) => {
  const n = de((i) => i.edges), r = de((i) => i.defaultEdgeOptions), o = Ee(() => H6(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r == null ? void 0 : r.markerStart,
    defaultMarkerEnd: r == null ? void 0 : r.markerEnd
  }), [n, r, t, e]);
  return o.length ? m.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: m.jsx("defs", { children: o.map((i) => m.jsx(Ds, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
o8.displayName = "MarkerDefinitions";
var Vs = be(o8);
function i8({ x: e, y: t, label: n, labelStyle: r, labelShowBg: o = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: a = 2, children: l, className: c, ...u }) {
  const [d, f] = Me({ x: 1, y: 0, width: 0, height: 0 }), h = ke(["react-flow__edge-textwrapper", c]), C = ce(null);
  return ue(() => {
    if (C.current) {
      const g = C.current.getBBox();
      f({
        x: g.x,
        y: g.y,
        width: g.width,
        height: g.height
      });
    }
  }, [n]), n ? m.jsxs("g", { transform: `translate(${e - d.width / 2} ${t - d.height / 2})`, className: h, visibility: d.width ? "visible" : "hidden", ...u, children: [o && m.jsx("rect", { width: d.width + 2 * s[0], x: -s[0], y: -s[1], height: d.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: a, ry: a }), m.jsx("text", { className: "react-flow__edge-text", y: d.height / 2, dy: "0.3em", ref: C, style: r, children: n }), l] }) : null;
}
i8.displayName = "EdgeText";
const Hs = be(i8);
function y2({ path: e, labelX: t, labelY: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: a, labelBgBorderRadius: l, interactionWidth: c = 20, ...u }) {
  return m.jsxs(m.Fragment, { children: [m.jsx("path", { ...u, d: e, fill: "none", className: ke(["react-flow__edge-path", u.className]) }), c ? m.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: c, className: "react-flow__edge-interaction" }) : null, r && ze(t) && ze(n) ? m.jsx(Hs, { x: t, y: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: a, labelBgBorderRadius: l }) : null] });
}
function L5({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === Y.Left || e === Y.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function s8({ sourceX: e, sourceY: t, sourcePosition: n = Y.Bottom, targetX: r, targetY: o, targetPosition: i = Y.Top }) {
  const [s, a] = L5({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o
  }), [l, c] = L5({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t
  }), [u, d, f, h] = _0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: s,
    sourceControlY: a,
    targetControlX: l,
    targetControlY: c
  });
  return [
    `M${e},${t} C${s},${a} ${l},${c} ${r},${o}`,
    u,
    d,
    f,
    h
  ];
}
function a8(e) {
  return be(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s, targetPosition: a, label: l, labelStyle: c, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: h, style: C, markerEnd: g, markerStart: v, interactionWidth: L }) => {
    const [b, p, x] = s8({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: a
    }), _ = e.isInternal ? void 0 : t;
    return m.jsx(y2, { id: _, path: b, labelX: p, labelY: x, label: l, labelStyle: c, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: h, style: C, markerEnd: g, markerStart: v, interactionWidth: L });
  });
}
const Bs = a8({ isInternal: !1 }), l8 = a8({ isInternal: !0 });
Bs.displayName = "SimpleBezierEdge";
l8.displayName = "SimpleBezierEdgeInternal";
function c8(e) {
  return be(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: a, labelShowBg: l, labelBgStyle: c, labelBgPadding: u, labelBgBorderRadius: d, style: f, sourcePosition: h = Y.Bottom, targetPosition: C = Y.Top, markerEnd: g, markerStart: v, pathOptions: L, interactionWidth: b }) => {
    const [p, x, _] = I3({
      sourceX: n,
      sourceY: r,
      sourcePosition: h,
      targetX: o,
      targetY: i,
      targetPosition: C,
      borderRadius: L == null ? void 0 : L.borderRadius,
      offset: L == null ? void 0 : L.offset,
      stepPosition: L == null ? void 0 : L.stepPosition
    }), y = e.isInternal ? void 0 : t;
    return m.jsx(y2, { id: y, path: p, labelX: x, labelY: _, label: s, labelStyle: a, labelShowBg: l, labelBgStyle: c, labelBgPadding: u, labelBgBorderRadius: d, style: f, markerEnd: g, markerStart: v, interactionWidth: b });
  });
}
const u8 = c8({ isInternal: !1 }), d8 = c8({ isInternal: !0 });
u8.displayName = "SmoothStepEdge";
d8.displayName = "SmoothStepEdgeInternal";
function f8(e) {
  return be(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return m.jsx(u8, { ...n, id: r, pathOptions: Ee(() => {
      var i;
      return { borderRadius: 0, offset: (i = n.pathOptions) == null ? void 0 : i.offset };
    }, [(o = n.pathOptions) == null ? void 0 : o.offset]) });
  });
}
const Ws = f8({ isInternal: !1 }), h8 = f8({ isInternal: !0 });
Ws.displayName = "StepEdge";
h8.displayName = "StepEdgeInternal";
function g8(e) {
  return be(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: a, labelShowBg: l, labelBgStyle: c, labelBgPadding: u, labelBgBorderRadius: d, style: f, markerEnd: h, markerStart: C, interactionWidth: g }) => {
    const [v, L, b] = Z0({ sourceX: n, sourceY: r, targetX: o, targetY: i }), p = e.isInternal ? void 0 : t;
    return m.jsx(y2, { id: p, path: v, labelX: L, labelY: b, label: s, labelStyle: a, labelShowBg: l, labelBgStyle: c, labelBgPadding: u, labelBgBorderRadius: d, style: f, markerEnd: h, markerStart: C, interactionWidth: g });
  });
}
const zs = g8({ isInternal: !1 }), C8 = g8({ isInternal: !0 });
zs.displayName = "StraightEdge";
C8.displayName = "StraightEdgeInternal";
function p8(e) {
  return be(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s = Y.Bottom, targetPosition: a = Y.Top, label: l, labelStyle: c, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: h, style: C, markerEnd: g, markerStart: v, pathOptions: L, interactionWidth: b }) => {
    const [p, x, _] = k0({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: a,
      curvature: L == null ? void 0 : L.curvature
    }), y = e.isInternal ? void 0 : t;
    return m.jsx(y2, { id: y, path: p, labelX: x, labelY: _, label: l, labelStyle: c, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: h, style: C, markerEnd: g, markerStart: v, interactionWidth: b });
  });
}
const Xs = p8({ isInternal: !1 }), L8 = p8({ isInternal: !0 });
Xs.displayName = "BezierEdge";
L8.displayName = "BezierEdgeInternal";
const m5 = {
  default: L8,
  straight: C8,
  step: h8,
  smoothstep: d8,
  simplebezier: l8
}, w5 = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, Gs = (e, t, n) => n === Y.Left ? e - t : n === Y.Right ? e + t : e, Ys = (e, t, n) => n === Y.Top ? e - t : n === Y.Bottom ? e + t : e, x5 = "react-flow__edgeupdater";
function v5({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: s, type: a }) {
  return m.jsx("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: s, className: ke([x5, `${x5}-${a}`]), cx: Gs(t, r, e), cy: Ys(n, r, e), r, stroke: "transparent", fill: "transparent" });
}
function qs({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: o, targetX: i, targetY: s, sourcePosition: a, targetPosition: l, onReconnect: c, onReconnectStart: u, onReconnectEnd: d, setReconnecting: f, setUpdateHover: h }) {
  const C = me(), g = (x, _) => {
    if (x.button !== 0)
      return;
    const { autoPanOnConnect: y, domNode: S, isValidConnection: k, connectionMode: N, connectionRadius: V, lib: T, onConnectStart: O, onConnectEnd: F, cancelConnection: E, nodeLookup: A, rfId: I, panBy: $, updateConnection: R } = C.getState(), Z = _.type === "target", P = (G, X) => {
      f(!1), d == null || d(G, n, _.type, X);
    }, H = (G) => c == null ? void 0 : c(n, G), j = (G, X) => {
      f(!0), u == null || u(x, n, _.type), O == null || O(G, X);
    };
    O3.onPointerDown(x.nativeEvent, {
      autoPanOnConnect: y,
      connectionMode: N,
      connectionRadius: V,
      domNode: S,
      handleId: _.id,
      nodeId: _.nodeId,
      nodeLookup: A,
      isTarget: Z,
      edgeUpdaterType: _.type,
      lib: T,
      flowId: I,
      cancelConnection: E,
      panBy: $,
      isValidConnection: k,
      onConnect: H,
      onConnectStart: j,
      onConnectEnd: F,
      onReconnectEnd: P,
      updateConnection: R,
      getTransform: () => C.getState().transform,
      getFromHandle: () => C.getState().connection.fromHandle,
      dragThreshold: C.getState().connectionDragThreshold,
      handleDomNode: x.currentTarget
    });
  }, v = (x) => g(x, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), L = (x) => g(x, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), b = () => h(!0), p = () => h(!1);
  return m.jsxs(m.Fragment, { children: [(e === !0 || e === "source") && m.jsx(v5, { position: a, centerX: r, centerY: o, radius: t, onMouseDown: v, onMouseEnter: b, onMouseOut: p, type: "source" }), (e === !0 || e === "target") && m.jsx(v5, { position: l, centerX: i, centerY: s, radius: t, onMouseDown: L, onMouseEnter: b, onMouseOut: p, type: "target" })] });
}
function Us({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: o, onDoubleClick: i, onContextMenu: s, onMouseEnter: a, onMouseMove: l, onMouseLeave: c, reconnectRadius: u, onReconnect: d, onReconnectStart: f, onReconnectEnd: h, rfId: C, edgeTypes: g, noPanClassName: v, onError: L, disableKeyboardA11y: b }) {
  let p = de((te) => te.edgeLookup.get(e));
  const x = de((te) => te.defaultEdgeOptions);
  p = x ? { ...x, ...p } : p;
  let _ = p.type || "default", y = (g == null ? void 0 : g[_]) || m5[_];
  y === void 0 && (L == null || L("011", Pe.error011(_)), _ = "default", y = (g == null ? void 0 : g.default) || m5.default);
  const S = !!(p.focusable || t && typeof p.focusable > "u"), k = typeof d < "u" && (p.reconnectable || n && typeof p.reconnectable > "u"), N = !!(p.selectable || r && typeof p.selectable > "u"), V = ce(null), [T, O] = Me(!1), [F, E] = Me(!1), A = me(), { zIndex: I, sourceX: $, sourceY: R, targetX: Z, targetY: P, sourcePosition: H, targetPosition: j } = de(W((te) => {
    const ee = te.nodeLookup.get(p.source), fe = te.nodeLookup.get(p.target);
    if (!ee || !fe)
      return {
        zIndex: p.zIndex,
        ...w5
      };
    const ge = V6({
      id: e,
      sourceNode: ee,
      targetNode: fe,
      sourceHandle: p.sourceHandle || null,
      targetHandle: p.targetHandle || null,
      connectionMode: te.connectionMode,
      onError: L
    });
    return {
      zIndex: A6({
        selected: p.selected,
        zIndex: p.zIndex,
        sourceNode: ee,
        targetNode: fe,
        elevateOnSelect: te.elevateEdgesOnSelect
      }),
      ...ge || w5
    };
  }, [p.source, p.target, p.sourceHandle, p.targetHandle, p.selected, p.zIndex]), ve), G = Ee(() => p.markerStart ? `url('#${R3(p.markerStart, C)}')` : void 0, [p.markerStart, C]), X = Ee(() => p.markerEnd ? `url('#${R3(p.markerEnd, C)}')` : void 0, [p.markerEnd, C]);
  if (p.hidden || $ === null || R === null || Z === null || P === null)
    return null;
  const K = (te) => {
    var ae;
    const { addSelectedEdges: ee, unselectNodesAndEdges: fe, multiSelectionActive: ge } = A.getState();
    N && (A.setState({ nodesSelectionActive: !1 }), p.selected && ge ? (fe({ nodes: [], edges: [p] }), (ae = V.current) == null || ae.blur()) : ee([e])), o && o(te, p);
  }, J = i ? (te) => {
    i(te, { ...p });
  } : void 0, Q = s ? (te) => {
    s(te, { ...p });
  } : void 0, B = a ? (te) => {
    a(te, { ...p });
  } : void 0, U = l ? (te) => {
    l(te, { ...p });
  } : void 0, ie = c ? (te) => {
    c(te, { ...p });
  } : void 0, re = (te) => {
    var ee;
    if (!b && f0.includes(te.key) && N) {
      const { unselectNodesAndEdges: fe, addSelectedEdges: ge } = A.getState();
      te.key === "Escape" ? ((ee = V.current) == null || ee.blur(), fe({ edges: [p] })) : ge([e]);
    }
  };
  return m.jsx("svg", { style: { zIndex: I }, children: m.jsxs("g", { className: ke([
    "react-flow__edge",
    `react-flow__edge-${_}`,
    p.className,
    v,
    {
      selected: p.selected,
      animated: p.animated,
      inactive: !N && !o,
      updating: T,
      selectable: N
    }
  ]), onClick: K, onDoubleClick: J, onContextMenu: Q, onMouseEnter: B, onMouseMove: U, onMouseLeave: ie, onKeyDown: S ? re : void 0, tabIndex: S ? 0 : void 0, role: p.ariaRole ?? (S ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": p.ariaLabel === null ? void 0 : p.ariaLabel || `Edge from ${p.source} to ${p.target}`, "aria-describedby": S ? `${X0}-${C}` : void 0, ref: V, ...p.domAttributes, children: [!F && m.jsx(y, { id: e, source: p.source, target: p.target, type: p.type, selected: p.selected, animated: p.animated, selectable: N, deletable: p.deletable ?? !0, label: p.label, labelStyle: p.labelStyle, labelShowBg: p.labelShowBg, labelBgStyle: p.labelBgStyle, labelBgPadding: p.labelBgPadding, labelBgBorderRadius: p.labelBgBorderRadius, sourceX: $, sourceY: R, targetX: Z, targetY: P, sourcePosition: H, targetPosition: j, data: p.data, style: p.style, sourceHandleId: p.sourceHandle, targetHandleId: p.targetHandle, markerStart: G, markerEnd: X, pathOptions: "pathOptions" in p ? p.pathOptions : void 0, interactionWidth: p.interactionWidth }), k && m.jsx(qs, { edge: p, isReconnectable: k, reconnectRadius: u, onReconnect: d, onReconnectStart: f, onReconnectEnd: h, sourceX: $, sourceY: R, targetX: Z, targetY: P, sourcePosition: H, targetPosition: j, setUpdateHover: O, setReconnecting: E })] }) });
}
var Ks = be(Us);
const Qs = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function m8({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: o, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: a, onEdgeMouseMove: l, onEdgeMouseLeave: c, onEdgeClick: u, reconnectRadius: d, onEdgeDoubleClick: f, onReconnectStart: h, onReconnectEnd: C, disableKeyboardA11y: g }) {
  const { edgesFocusable: v, edgesReconnectable: L, elementsSelectable: b, onError: p } = de(Qs, ve), x = Ts(t);
  return m.jsxs("div", { className: "react-flow__edges", children: [m.jsx(Vs, { defaultColor: e, rfId: n }), x.map((_) => m.jsx(Ks, { id: _, edgesFocusable: v, edgesReconnectable: L, elementsSelectable: b, noPanClassName: o, onReconnect: i, onContextMenu: s, onMouseEnter: a, onMouseMove: l, onMouseLeave: c, onClick: u, reconnectRadius: d, onDoubleClick: f, onReconnectStart: h, onReconnectEnd: C, rfId: n, onError: p, edgeTypes: r, disableKeyboardA11y: g }, _))] });
}
m8.displayName = "EdgeRenderer";
const Js = be(m8), ea = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function ta({ children: e }) {
  const t = de(ea);
  return m.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function na(e) {
  const t = Ie(), n = ce(!1);
  ue(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const ra = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function oa(e) {
  const t = de(ra), n = me();
  return ue(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function ia(e) {
  return e.connection.inProgress ? { ...e.connection, to: E1(e.connection.to, e.transform) } : { ...e.connection };
}
function sa(e) {
  return ia;
}
function aa(e) {
  const t = sa();
  return de(t, ve);
}
const la = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function ca({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: s, isValid: a, inProgress: l } = de(la, ve);
  return !(i && o && l) ? null : m.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: m.jsx("g", { className: ke(["react-flow__connection", C0(a)]), children: m.jsx(w8, { style: t, type: n, CustomComponent: r, isValid: a }) }) });
}
const w8 = ({ style: e, type: t = dt.Bezier, CustomComponent: n, isValid: r }) => {
  const { inProgress: o, from: i, fromNode: s, fromHandle: a, fromPosition: l, to: c, toNode: u, toHandle: d, toPosition: f, pointer: h } = aa();
  if (!o)
    return;
  if (n)
    return m.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: a, fromX: i.x, fromY: i.y, toX: c.x, toY: c.y, fromPosition: l, toPosition: f, connectionStatus: C0(r), toNode: u, toHandle: d, pointer: h });
  let C = "";
  const g = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: l,
    targetX: c.x,
    targetY: c.y,
    targetPosition: f
  };
  switch (t) {
    case dt.Bezier:
      [C] = k0(g);
      break;
    case dt.SimpleBezier:
      [C] = s8(g);
      break;
    case dt.Step:
      [C] = I3({
        ...g,
        borderRadius: 0
      });
      break;
    case dt.SmoothStep:
      [C] = I3(g);
      break;
    default:
      [C] = Z0(g);
  }
  return m.jsx("path", { d: C, fill: "none", className: "react-flow__connection-path", style: e });
};
w8.displayName = "ConnectionLine";
const ua = {};
function y5(e = ua) {
  const t = ce(e), n = me();
  ue(() => {
    var r, o;
    if (process.env.NODE_ENV === "development") {
      const i = /* @__PURE__ */ new Set([...Object.keys(t.current), ...Object.keys(e)]);
      for (const s of i)
        if (t.current[s] !== e[s]) {
          (o = (r = n.getState()).onError) == null || o.call(r, "002", Pe.error002());
          break;
        }
      t.current = e;
    }
  }, [e]);
}
function da() {
  const e = me(), t = ce(!1);
  ue(() => {
    var n, r;
    if (process.env.NODE_ENV === "development" && !t.current) {
      const o = document.querySelector(".react-flow__pane");
      o && window.getComputedStyle(o).zIndex !== "1" && ((r = (n = e.getState()).onError) == null || r.call(n, "013", Pe.error013("react"))), t.current = !0;
    }
  }, []);
}
function x8({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: o, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: a, onNodeMouseMove: l, onNodeMouseLeave: c, onNodeContextMenu: u, onSelectionContextMenu: d, onSelectionStart: f, onSelectionEnd: h, connectionLineType: C, connectionLineStyle: g, connectionLineComponent: v, connectionLineContainerStyle: L, selectionKeyCode: b, selectionOnDrag: p, selectionMode: x, multiSelectionKeyCode: _, panActivationKeyCode: y, zoomActivationKeyCode: S, deleteKeyCode: k, onlyRenderVisibleElements: N, elementsSelectable: V, defaultViewport: T, translateExtent: O, minZoom: F, maxZoom: E, preventScrolling: A, defaultMarkerColor: I, zoomOnScroll: $, zoomOnPinch: R, panOnScroll: Z, panOnScrollSpeed: P, panOnScrollMode: H, zoomOnDoubleClick: j, panOnDrag: G, onPaneClick: X, onPaneMouseEnter: K, onPaneMouseMove: J, onPaneMouseLeave: Q, onPaneScroll: B, onPaneContextMenu: U, paneClickDistance: ie, nodeClickDistance: re, onEdgeContextMenu: te, onEdgeMouseEnter: ee, onEdgeMouseMove: fe, onEdgeMouseLeave: ge, reconnectRadius: ae, onReconnect: Se, onReconnectStart: je, onReconnectEnd: De, noDragClassName: Zt, noWheelClassName: It, noPanClassName: Je, disableKeyboardA11y: Ct, nodeExtent: Gt, rfId: pt, viewport: et, onViewportChange: st }) {
  return y5(e), y5(t), da(), na(n), oa(et), m.jsx(Ms, { onPaneClick: X, onPaneMouseEnter: K, onPaneMouseMove: J, onPaneMouseLeave: Q, onPaneContextMenu: U, onPaneScroll: B, paneClickDistance: ie, deleteKeyCode: k, selectionKeyCode: b, selectionOnDrag: p, selectionMode: x, onSelectionStart: f, onSelectionEnd: h, multiSelectionKeyCode: _, panActivationKeyCode: y, zoomActivationKeyCode: S, elementsSelectable: V, zoomOnScroll: $, zoomOnPinch: R, zoomOnDoubleClick: j, panOnScroll: Z, panOnScrollSpeed: P, panOnScrollMode: H, panOnDrag: G, defaultViewport: T, translateExtent: O, minZoom: F, maxZoom: E, onSelectionContextMenu: d, preventScrolling: A, noDragClassName: Zt, noWheelClassName: It, noPanClassName: Je, disableKeyboardA11y: Ct, onViewportChange: st, isControlledViewport: !!et, children: m.jsxs(ta, { children: [m.jsx(Js, { edgeTypes: t, onEdgeClick: o, onEdgeDoubleClick: s, onReconnect: Se, onReconnectStart: je, onReconnectEnd: De, onlyRenderVisibleElements: N, onEdgeContextMenu: te, onEdgeMouseEnter: ee, onEdgeMouseMove: fe, onEdgeMouseLeave: ge, reconnectRadius: ae, defaultMarkerColor: I, noPanClassName: Je, disableKeyboardA11y: Ct, rfId: pt }), m.jsx(ca, { style: g, type: C, component: v, containerStyle: L }), m.jsx("div", { className: "react-flow__edgelabel-renderer" }), m.jsx($s, { nodeTypes: e, onNodeClick: r, onNodeDoubleClick: i, onNodeMouseEnter: a, onNodeMouseMove: l, onNodeMouseLeave: c, onNodeContextMenu: u, nodeClickDistance: re, onlyRenderVisibleElements: N, noPanClassName: Je, noDragClassName: Zt, disableKeyboardA11y: Ct, nodeExtent: Gt, rfId: pt }), m.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
x8.displayName = "GraphView";
const fa = be(x8), b5 = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: a, minZoom: l = 0.5, maxZoom: c = 2, nodeOrigin: u, nodeExtent: d } = {}) => {
  const f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), v = r ?? t ?? [], L = n ?? e ?? [], b = u ?? [0, 0], p = d ?? f1;
  A0(C, g, v);
  const x = A3(L, f, h, {
    nodeOrigin: b,
    nodeExtent: p,
    elevateNodesOnSelect: !1
  });
  let _ = [0, 0, 1];
  if (s && o && i) {
    const y = y1(f, {
      filter: (V) => !!((V.width || V.initialWidth) && (V.height || V.initialHeight))
    }), { x: S, y: k, zoom: N } = U3(y, o, i, l, c, (a == null ? void 0 : a.padding) ?? 0.1);
    _ = [S, k, N];
  }
  return {
    rfId: "1",
    width: o ?? 0,
    height: i ?? 0,
    transform: _,
    nodes: L,
    nodesInitialized: x,
    nodeLookup: f,
    parentLookup: h,
    edges: v,
    edgeLookup: g,
    connectionLookup: C,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: l,
    maxZoom: c,
    translateExtent: f1,
    nodeExtent: p,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: Vt.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: b,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !1,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: s ?? !1,
    fitViewOptions: a,
    fitViewResolver: null,
    connection: { ...g0 },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: v0,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: h0
  };
}, ha = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: a, minZoom: l, maxZoom: c, nodeOrigin: u, nodeExtent: d }) => Ii((f, h) => {
  async function C() {
    const { nodeLookup: g, panZoom: v, fitViewOptions: L, fitViewResolver: b, width: p, height: x, minZoom: _, maxZoom: y } = h();
    v && (await M6({
      nodes: g,
      width: p,
      height: x,
      panZoom: v,
      minZoom: _,
      maxZoom: y
    }, L), b == null || b.resolve(!0), f({ fitViewResolver: null }));
  }
  return {
    ...b5({
      nodes: e,
      edges: t,
      width: o,
      height: i,
      fitView: s,
      fitViewOptions: a,
      minZoom: l,
      maxZoom: c,
      nodeOrigin: u,
      nodeExtent: d,
      defaultNodes: n,
      defaultEdges: r
    }),
    setNodes: (g) => {
      const { nodeLookup: v, parentLookup: L, nodeOrigin: b, elevateNodesOnSelect: p, fitViewQueued: x } = h(), _ = A3(g, v, L, {
        nodeOrigin: b,
        nodeExtent: d,
        elevateNodesOnSelect: p,
        checkEquality: !0
      });
      x && _ ? (C(), f({ nodes: g, nodesInitialized: _, fitViewQueued: !1, fitViewOptions: void 0 })) : f({ nodes: g, nodesInitialized: _ });
    },
    setEdges: (g) => {
      const { connectionLookup: v, edgeLookup: L } = h();
      A0(v, L, g), f({ edges: g });
    },
    setDefaultNodesAndEdges: (g, v) => {
      if (g) {
        const { setNodes: L } = h();
        L(g), f({ hasDefaultNodes: !0 });
      }
      if (v) {
        const { setEdges: L } = h();
        L(v), f({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (g) => {
      const { triggerNodeChanges: v, nodeLookup: L, parentLookup: b, domNode: p, nodeOrigin: x, nodeExtent: _, debug: y, fitViewQueued: S } = h(), { changes: k, updatedInternals: N } = q6(g, L, b, p, x, _);
      N && (z6(L, b, { nodeOrigin: x, nodeExtent: _ }), S ? (C(), f({ fitViewQueued: !1, fitViewOptions: void 0 })) : f({}), (k == null ? void 0 : k.length) > 0 && (y && console.log("React Flow: trigger node changes", k), v == null || v(k)));
    },
    updateNodePositions: (g, v = !1) => {
      const L = [], b = [], { nodeLookup: p, triggerNodeChanges: x } = h();
      for (const [_, y] of g) {
        const S = p.get(_), k = !!(S != null && S.expandParent && (S != null && S.parentId) && (y != null && y.position)), N = {
          id: _,
          type: "position",
          position: k ? {
            x: Math.max(0, y.position.x),
            y: Math.max(0, y.position.y)
          } : y.position,
          dragging: v
        };
        k && S.parentId && L.push({
          id: _,
          parentId: S.parentId,
          rect: {
            ...y.internals.positionAbsolute,
            width: y.measured.width ?? 0,
            height: y.measured.height ?? 0
          }
        }), b.push(N);
      }
      if (L.length > 0) {
        const { parentLookup: _, nodeOrigin: y } = h(), S = tn(L, p, _, y);
        b.push(...S);
      }
      x(b);
    },
    triggerNodeChanges: (g) => {
      const { onNodesChange: v, setNodes: L, nodes: b, hasDefaultNodes: p, debug: x } = h();
      if (g != null && g.length) {
        if (p) {
          const _ = q0(g, b);
          L(_);
        }
        x && console.log("React Flow: trigger node changes", g), v == null || v(g);
      }
    },
    triggerEdgeChanges: (g) => {
      const { onEdgesChange: v, setEdges: L, edges: b, hasDefaultEdges: p, debug: x } = h();
      if (g != null && g.length) {
        if (p) {
          const _ = U0(g, b);
          L(_);
        }
        x && console.log("React Flow: trigger edge changes", g), v == null || v(g);
      }
    },
    addSelectedNodes: (g) => {
      const { multiSelectionActive: v, edgeLookup: L, nodeLookup: b, triggerNodeChanges: p, triggerEdgeChanges: x } = h();
      if (v) {
        const _ = g.map((y) => mt(y, !0));
        p(_);
        return;
      }
      p(Tt(b, /* @__PURE__ */ new Set([...g]), !0)), x(Tt(L));
    },
    addSelectedEdges: (g) => {
      const { multiSelectionActive: v, edgeLookup: L, nodeLookup: b, triggerNodeChanges: p, triggerEdgeChanges: x } = h();
      if (v) {
        const _ = g.map((y) => mt(y, !0));
        x(_);
        return;
      }
      x(Tt(L, /* @__PURE__ */ new Set([...g]))), p(Tt(b, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: g, edges: v } = {}) => {
      const { edges: L, nodes: b, nodeLookup: p, triggerNodeChanges: x, triggerEdgeChanges: _ } = h(), y = g || b, S = v || L, k = y.map((V) => {
        const T = p.get(V.id);
        return T && (T.selected = !1), mt(V.id, !1);
      }), N = S.map((V) => mt(V.id, !1));
      x(k), _(N);
    },
    setMinZoom: (g) => {
      const { panZoom: v, maxZoom: L } = h();
      v == null || v.setScaleExtent([g, L]), f({ minZoom: g });
    },
    setMaxZoom: (g) => {
      const { panZoom: v, minZoom: L } = h();
      v == null || v.setScaleExtent([L, g]), f({ maxZoom: g });
    },
    setTranslateExtent: (g) => {
      var v;
      (v = h().panZoom) == null || v.setTranslateExtent(g), f({ translateExtent: g });
    },
    resetSelectedElements: () => {
      const { edges: g, nodes: v, triggerNodeChanges: L, triggerEdgeChanges: b, elementsSelectable: p } = h();
      if (!p)
        return;
      const x = v.reduce((y, S) => S.selected ? [...y, mt(S.id, !1)] : y, []), _ = g.reduce((y, S) => S.selected ? [...y, mt(S.id, !1)] : y, []);
      L(x), b(_);
    },
    setNodeExtent: (g) => {
      const { nodes: v, nodeLookup: L, parentLookup: b, nodeOrigin: p, elevateNodesOnSelect: x, nodeExtent: _ } = h();
      g[0][0] === _[0][0] && g[0][1] === _[0][1] && g[1][0] === _[1][0] && g[1][1] === _[1][1] || (A3(v, L, b, {
        nodeOrigin: p,
        nodeExtent: g,
        elevateNodesOnSelect: x,
        checkEquality: !1
      }), f({ nodeExtent: g }));
    },
    panBy: (g) => {
      const { transform: v, width: L, height: b, panZoom: p, translateExtent: x } = h();
      return U6({ delta: g, panZoom: p, transform: v, translateExtent: x, width: L, height: b });
    },
    setCenter: async (g, v, L) => {
      const { width: b, height: p, maxZoom: x, panZoom: _ } = h();
      if (!_)
        return Promise.resolve(!1);
      const y = typeof (L == null ? void 0 : L.zoom) < "u" ? L.zoom : x;
      return await _.setViewport({
        x: b / 2 - g * y,
        y: p / 2 - v * y,
        zoom: y
      }, { duration: L == null ? void 0 : L.duration, ease: L == null ? void 0 : L.ease, interpolate: L == null ? void 0 : L.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      f({
        connection: { ...g0 }
      });
    },
    updateConnection: (g) => {
      f({ connection: g });
    },
    reset: () => f({ ...b5() })
  };
}, Object.is);
function v8({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: o, initialHeight: i, initialMinZoom: s, initialMaxZoom: a, initialFitViewOptions: l, fitView: c, nodeOrigin: u, nodeExtent: d, children: f }) {
  const [h] = Me(() => ha({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: c,
    minZoom: s,
    maxZoom: a,
    fitViewOptions: l,
    nodeOrigin: u,
    nodeExtent: d
  }));
  return m.jsx(Ri, { value: h, children: m.jsx(ts, { children: f }) });
}
function ga({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: o, width: i, height: s, fitView: a, fitViewOptions: l, minZoom: c, maxZoom: u, nodeOrigin: d, nodeExtent: f }) {
  return _t(w2) ? m.jsx(m.Fragment, { children: e }) : m.jsx(v8, { initialNodes: t, initialEdges: n, defaultNodes: r, defaultEdges: o, initialWidth: i, initialHeight: s, fitView: a, initialFitViewOptions: l, initialMinZoom: c, initialMaxZoom: u, nodeOrigin: d, nodeExtent: f, children: e });
}
const Ca = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function pa({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i, edgeTypes: s, onNodeClick: a, onEdgeClick: l, onInit: c, onMove: u, onMoveStart: d, onMoveEnd: f, onConnect: h, onConnectStart: C, onConnectEnd: g, onClickConnectStart: v, onClickConnectEnd: L, onNodeMouseEnter: b, onNodeMouseMove: p, onNodeMouseLeave: x, onNodeContextMenu: _, onNodeDoubleClick: y, onNodeDragStart: S, onNodeDrag: k, onNodeDragStop: N, onNodesDelete: V, onEdgesDelete: T, onDelete: O, onSelectionChange: F, onSelectionDragStart: E, onSelectionDrag: A, onSelectionDragStop: I, onSelectionContextMenu: $, onSelectionStart: R, onSelectionEnd: Z, onBeforeDelete: P, connectionMode: H, connectionLineType: j = dt.Bezier, connectionLineStyle: G, connectionLineComponent: X, connectionLineContainerStyle: K, deleteKeyCode: J = "Backspace", selectionKeyCode: Q = "Shift", selectionOnDrag: B = !1, selectionMode: U = h1.Full, panActivationKeyCode: ie = "Space", multiSelectionKeyCode: re = C1() ? "Meta" : "Control", zoomActivationKeyCode: te = C1() ? "Meta" : "Control", snapToGrid: ee, snapGrid: fe, onlyRenderVisibleElements: ge = !1, selectNodesOnDrag: ae, nodesDraggable: Se, autoPanOnNodeFocus: je, nodesConnectable: De, nodesFocusable: Zt, nodeOrigin: It = G0, edgesFocusable: Je, edgesReconnectable: Ct, elementsSelectable: Gt = !0, defaultViewport: pt = zi, minZoom: et = 0.5, maxZoom: st = 2, translateExtent: S1 = f1, preventScrolling: M1 = !0, nodeExtent: Rt, defaultMarkerColor: N2 = "#b1b1b7", zoomOnScroll: Z2 = !0, zoomOnPinch: I2 = !0, panOnScroll: R2 = !1, panOnScrollSpeed: A2 = 0.5, panOnScrollMode: O2 = yt.Free, zoomOnDoubleClick: $2 = !0, panOnDrag: Yt = !0, onPaneClick: _1, onPaneMouseEnter: at, onPaneMouseMove: qt, onPaneMouseLeave: Ut, onPaneScroll: k1, onPaneContextMenu: T2, paneClickDistance: N1 = 1, nodeClickDistance: F2 = 0, children: Z1, onReconnect: I1, onReconnectStart: P2, onReconnectEnd: j2, onEdgeContextMenu: R1, onEdgeDoubleClick: A1, onEdgeMouseEnter: D2, onEdgeMouseMove: V2, onEdgeMouseLeave: H2, reconnectRadius: B2 = 10, onNodesChange: M, onEdgesChange: D, noDragClassName: z = "nodrag", noWheelClassName: ne = "nowheel", noPanClassName: he = "nopan", fitView: Ce, fitViewOptions: le, connectOnClick: se, attributionPosition: Ne, proOptions: we, defaultEdgeOptions: ye, elevateNodesOnSelect: Re, elevateEdgesOnSelect: lt, disableKeyboardA11y: qe = !1, autoPanOnConnect: Ze, autoPanOnNodeDrag: Kt, autoPanSpeed: W2, connectionRadius: z2, isValidConnection: mr, onError: wr, style: xr, id: hn, nodeDragThreshold: vr, connectionDragThreshold: yr, viewport: br, onViewportChange: Er, width: Sr, height: Mr, colorMode: _r = "light", debug: kr, onScroll: O1, ariaLabelConfig: Nr, ...Zr }, Ir) {
  const X2 = hn || "1", Rr = qi(_r), Ar = W((gn) => {
    gn.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), O1 == null || O1(gn);
  }, [O1]);
  return m.jsx("div", { "data-testid": "rf__wrapper", ...Zr, onScroll: Ar, style: { ...xr, ...Ca }, ref: Ir, className: ke(["react-flow", o, Rr]), id: hn, role: "application", children: m.jsxs(ga, { nodes: e, edges: t, width: Sr, height: Mr, fitView: Ce, fitViewOptions: le, minZoom: et, maxZoom: st, nodeOrigin: It, nodeExtent: Rt, children: [m.jsx(fa, { onInit: c, onNodeClick: a, onEdgeClick: l, onNodeMouseEnter: b, onNodeMouseMove: p, onNodeMouseLeave: x, onNodeContextMenu: _, onNodeDoubleClick: y, nodeTypes: i, edgeTypes: s, connectionLineType: j, connectionLineStyle: G, connectionLineComponent: X, connectionLineContainerStyle: K, selectionKeyCode: Q, selectionOnDrag: B, selectionMode: U, deleteKeyCode: J, multiSelectionKeyCode: re, panActivationKeyCode: ie, zoomActivationKeyCode: te, onlyRenderVisibleElements: ge, defaultViewport: pt, translateExtent: S1, minZoom: et, maxZoom: st, preventScrolling: M1, zoomOnScroll: Z2, zoomOnPinch: I2, zoomOnDoubleClick: $2, panOnScroll: R2, panOnScrollSpeed: A2, panOnScrollMode: O2, panOnDrag: Yt, onPaneClick: _1, onPaneMouseEnter: at, onPaneMouseMove: qt, onPaneMouseLeave: Ut, onPaneScroll: k1, onPaneContextMenu: T2, paneClickDistance: N1, nodeClickDistance: F2, onSelectionContextMenu: $, onSelectionStart: R, onSelectionEnd: Z, onReconnect: I1, onReconnectStart: P2, onReconnectEnd: j2, onEdgeContextMenu: R1, onEdgeDoubleClick: A1, onEdgeMouseEnter: D2, onEdgeMouseMove: V2, onEdgeMouseLeave: H2, reconnectRadius: B2, defaultMarkerColor: N2, noDragClassName: z, noWheelClassName: ne, noPanClassName: he, rfId: X2, disableKeyboardA11y: qe, nodeExtent: Rt, viewport: br, onViewportChange: Er }), m.jsx(Yi, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: h, onConnectStart: C, onConnectEnd: g, onClickConnectStart: v, onClickConnectEnd: L, nodesDraggable: Se, autoPanOnNodeFocus: je, nodesConnectable: De, nodesFocusable: Zt, edgesFocusable: Je, edgesReconnectable: Ct, elementsSelectable: Gt, elevateNodesOnSelect: Re, elevateEdgesOnSelect: lt, minZoom: et, maxZoom: st, nodeExtent: Rt, onNodesChange: M, onEdgesChange: D, snapToGrid: ee, snapGrid: fe, connectionMode: H, translateExtent: S1, connectOnClick: se, defaultEdgeOptions: ye, fitView: Ce, fitViewOptions: le, onNodesDelete: V, onEdgesDelete: T, onDelete: O, onNodeDragStart: S, onNodeDrag: k, onNodeDragStop: N, onSelectionDrag: A, onSelectionDragStart: E, onSelectionDragStop: I, onMove: u, onMoveStart: d, onMoveEnd: f, noPanClassName: he, nodeOrigin: It, rfId: X2, autoPanOnConnect: Ze, autoPanOnNodeDrag: Kt, autoPanSpeed: W2, onError: wr, connectionRadius: z2, isValidConnection: mr, selectNodesOnDrag: ae, nodeDragThreshold: vr, connectionDragThreshold: yr, onBeforeDelete: P, debug: kr, ariaLabelConfig: Nr }), m.jsx(Wi, { onSelectionChange: F }), Z1, m.jsx(ji, { proOptions: we, position: Ne }), m.jsx(Pi, { rfId: X2, disableKeyboardA11y: qe })] }) });
}
var y8 = K0(pa);
function La(e) {
  const [t, n] = Me(e), r = W((o) => n((i) => q0(o, i)), []);
  return [t, n, r];
}
function ma(e) {
  const [t, n] = Me(e), r = W((o) => n((i) => U0(o, i)), []);
  return [t, n, r];
}
function wa({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return m.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: ke(["react-flow__background-pattern", n, r]) });
}
function xa({ radius: e, className: t }) {
  return m.jsx("circle", { cx: e, cy: e, r: e, className: ke(["react-flow__background-pattern", "dots", t]) });
}
var ht;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(ht || (ht = {}));
const va = {
  [ht.Dots]: 1,
  [ht.Lines]: 1,
  [ht.Cross]: 6
}, ya = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function b8({
  id: e,
  variant: t = ht.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: r,
  lineWidth: o = 1,
  offset: i = 0,
  color: s,
  bgColor: a,
  style: l,
  className: c,
  patternClassName: u
}) {
  const d = ce(null), { transform: f, patternId: h } = de(ya, ve), C = r || va[t], g = t === ht.Dots, v = t === ht.Cross, L = Array.isArray(n) ? n : [n, n], b = [L[0] * f[2] || 1, L[1] * f[2] || 1], p = C * f[2], x = Array.isArray(i) ? i : [i, i], _ = v ? [p, p] : b, y = [
    x[0] * f[2] || 1 + _[0] / 2,
    x[1] * f[2] || 1 + _[1] / 2
  ], S = `${h}${e || ""}`;
  return m.jsxs("svg", { className: ke(["react-flow__background", c]), style: {
    ...l,
    ...v2,
    "--xy-background-color-props": a,
    "--xy-background-pattern-color-props": s
  }, ref: d, "data-testid": "rf__background", children: [m.jsx("pattern", { id: S, x: f[0] % b[0], y: f[1] % b[1], width: b[0], height: b[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${y[0]},-${y[1]})`, children: g ? m.jsx(xa, { radius: p / 2, className: u }) : m.jsx(wa, { dimensions: _, lineWidth: o, variant: t, className: u }) }), m.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${S})` })] });
}
b8.displayName = "Background";
be(b8);
function ba() {
  return m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: m.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function Ea() {
  return m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: m.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function Sa() {
  return m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: m.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function Ma() {
  return m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: m.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function _a() {
  return m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: m.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function W1({ children: e, className: t, ...n }) {
  return m.jsx("button", { type: "button", className: ke(["react-flow__controls-button", t]), ...n, children: e });
}
const ka = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function E8({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: o, onZoomIn: i, onZoomOut: s, onFitView: a, onInteractiveChange: l, className: c, children: u, position: d = "bottom-left", orientation: f = "vertical", "aria-label": h }) {
  const C = me(), { isInteractive: g, minZoomReached: v, maxZoomReached: L, ariaLabelConfig: b } = de(ka, ve), { zoomIn: p, zoomOut: x, fitView: _ } = Ie(), y = () => {
    p(), i == null || i();
  }, S = () => {
    x(), s == null || s();
  }, k = () => {
    _(o), a == null || a();
  }, N = () => {
    C.setState({
      nodesDraggable: !g,
      nodesConnectable: !g,
      elementsSelectable: !g
    }), l == null || l(!g);
  }, V = f === "horizontal" ? "horizontal" : "vertical";
  return m.jsxs(x2, { className: ke(["react-flow__controls", V, c]), position: d, style: e, "data-testid": "rf__controls", "aria-label": h ?? b["controls.ariaLabel"], children: [t && m.jsxs(m.Fragment, { children: [m.jsx(W1, { onClick: y, className: "react-flow__controls-zoomin", title: b["controls.zoomIn.ariaLabel"], "aria-label": b["controls.zoomIn.ariaLabel"], disabled: L, children: m.jsx(ba, {}) }), m.jsx(W1, { onClick: S, className: "react-flow__controls-zoomout", title: b["controls.zoomOut.ariaLabel"], "aria-label": b["controls.zoomOut.ariaLabel"], disabled: v, children: m.jsx(Ea, {}) })] }), n && m.jsx(W1, { className: "react-flow__controls-fitview", onClick: k, title: b["controls.fitView.ariaLabel"], "aria-label": b["controls.fitView.ariaLabel"], children: m.jsx(Sa, {}) }), r && m.jsx(W1, { className: "react-flow__controls-interactive", onClick: N, title: b["controls.interactive.ariaLabel"], "aria-label": b["controls.interactive.ariaLabel"], children: g ? m.jsx(_a, {}) : m.jsx(Ma, {}) }), u] });
}
E8.displayName = "Controls";
be(E8);
function Na({ id: e, x: t, y: n, width: r, height: o, style: i, color: s, strokeColor: a, strokeWidth: l, className: c, borderRadius: u, shapeRendering: d, selected: f, onClick: h }) {
  const { background: C, backgroundColor: g } = i || {}, v = s || C || g;
  return m.jsx("rect", { className: ke(["react-flow__minimap-node", { selected: f }, c]), x: t, y: n, rx: u, ry: u, width: r, height: o, style: {
    fill: v,
    stroke: a,
    strokeWidth: l
  }, shapeRendering: d, onClick: h ? (L) => h(L, e) : void 0 });
}
const Za = be(Na), Ia = (e) => e.nodes.map((t) => t.id), i3 = (e) => e instanceof Function ? e : () => e;
function Ra({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = Za,
  onClick: s
}) {
  const a = de(Ia, ve), l = i3(t), c = i3(e), u = i3(n), d = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return m.jsx(m.Fragment, { children: a.map((f) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    m.jsx(Oa, { id: f, nodeColorFunc: l, nodeStrokeColorFunc: c, nodeClassNameFunc: u, nodeBorderRadius: r, nodeStrokeWidth: o, NodeComponent: i, onClick: s, shapeRendering: d }, f)
  )) });
}
function Aa({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: o, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: a, onClick: l }) {
  const { node: c, x: u, y: d, width: f, height: h } = de((C) => {
    const { internals: g } = C.nodeLookup.get(e), v = g.userNode, { x: L, y: b } = g.positionAbsolute, { width: p, height: x } = it(v);
    return {
      node: v,
      x: L,
      y: b,
      width: p,
      height: x
    };
  }, ve);
  return !c || c.hidden || !y0(c) ? null : m.jsx(a, { x: u, y: d, width: f, height: h, style: c.style, selected: !!c.selected, className: r(c), color: t(c), borderRadius: o, strokeColor: n(c), strokeWidth: i, shapeRendering: s, onClick: l, id: c.id });
}
const Oa = be(Aa);
var $a = be(Ra);
const Ta = 200, Fa = 150, Pa = (e) => !e.hidden, ja = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? x0(y1(e.nodeLookup, { filter: Pa }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, Da = "react-flow__minimap-desc";
function S8({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: r,
  nodeClassName: o = "",
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a,
  bgColor: l,
  maskColor: c,
  maskStrokeColor: u,
  maskStrokeWidth: d,
  position: f = "bottom-right",
  onClick: h,
  onNodeClick: C,
  pannable: g = !1,
  zoomable: v = !1,
  ariaLabel: L,
  inversePan: b,
  zoomStep: p = 1,
  offsetScale: x = 5
}) {
  const _ = me(), y = ce(null), { boundingRect: S, viewBB: k, rfId: N, panZoom: V, translateExtent: T, flowWidth: O, flowHeight: F, ariaLabelConfig: E } = de(ja, ve), A = (e == null ? void 0 : e.width) ?? Ta, I = (e == null ? void 0 : e.height) ?? Fa, $ = S.width / A, R = S.height / I, Z = Math.max($, R), P = Z * A, H = Z * I, j = x * Z, G = S.x - (P - S.width) / 2 - j, X = S.y - (H - S.height) / 2 - j, K = P + j * 2, J = H + j * 2, Q = `${Da}-${N}`, B = ce(0), U = ce();
  B.current = Z, ue(() => {
    if (y.current && V)
      return U.current = ii({
        domNode: y.current,
        panZoom: V,
        getTransform: () => _.getState().transform,
        getViewScale: () => B.current
      }), () => {
        var ee;
        (ee = U.current) == null || ee.destroy();
      };
  }, [V]), ue(() => {
    var ee;
    (ee = U.current) == null || ee.update({
      translateExtent: T,
      width: O,
      height: F,
      inversePan: b,
      pannable: g,
      zoomStep: p,
      zoomable: v
    });
  }, [g, v, b, p, T, O, F]);
  const ie = h ? (ee) => {
    var ae;
    const [fe, ge] = ((ae = U.current) == null ? void 0 : ae.pointer(ee)) || [0, 0];
    h(ee, { x: fe, y: ge });
  } : void 0, re = C ? W((ee, fe) => {
    const ge = _.getState().nodeLookup.get(fe).internals.userNode;
    C(ee, ge);
  }, []) : void 0, te = L ?? E["minimap.ariaLabel"];
  return m.jsx(x2, { position: f, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof l == "string" ? l : void 0,
    "--xy-minimap-mask-background-color-props": typeof c == "string" ? c : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof u == "string" ? u : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof d == "number" ? d * Z : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: ke(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: m.jsxs("svg", { width: A, height: I, viewBox: `${G} ${X} ${K} ${J}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": Q, ref: y, onClick: ie, children: [te && m.jsx("title", { id: Q, children: te }), m.jsx($a, { onClick: re, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: o, nodeStrokeWidth: s, nodeComponent: a }), m.jsx("path", { className: "react-flow__minimap-mask", d: `M${G - j},${X - j}h${K + j * 2}v${J + j * 2}h${-K - j * 2}z
        M${k.x},${k.y}h${k.width}v${k.height}h${-k.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
S8.displayName = "MiniMap";
be(S8);
const Va = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, Ha = {
  [Xt.Line]: "right",
  [Xt.Handle]: "bottom-right"
};
function Ba({ nodeId: e, position: t, variant: n = Xt.Handle, className: r, style: o = void 0, children: i, color: s, minWidth: a = 10, minHeight: l = 10, maxWidth: c = Number.MAX_VALUE, maxHeight: u = Number.MAX_VALUE, keepAspectRatio: d = !1, resizeDirection: f, autoScale: h = !0, shouldResize: C, onResizeStart: g, onResize: v, onResizeEnd: L }) {
  const b = t8(), p = typeof e == "string" ? e : b, x = me(), _ = ce(null), y = n === Xt.Handle, S = de(W(Va(y && h), [y, h]), ve), k = ce(null), N = t ?? Ha[n];
  ue(() => {
    if (!(!_.current || !p))
      return k.current || (k.current = wi({
        domNode: _.current,
        nodeId: p,
        getStoreItems: () => {
          const { nodeLookup: T, transform: O, snapGrid: F, snapToGrid: E, nodeOrigin: A, domNode: I } = x.getState();
          return {
            nodeLookup: T,
            transform: O,
            snapGrid: F,
            snapToGrid: E,
            nodeOrigin: A,
            paneDomNode: I
          };
        },
        onChange: (T, O) => {
          const { triggerNodeChanges: F, nodeLookup: E, parentLookup: A, nodeOrigin: I } = x.getState(), $ = [], R = { x: T.x, y: T.y }, Z = E.get(p);
          if (Z && Z.expandParent && Z.parentId) {
            const P = Z.origin ?? I, H = T.width ?? Z.measured.width ?? 0, j = T.height ?? Z.measured.height ?? 0, G = {
              id: Z.id,
              parentId: Z.parentId,
              rect: {
                width: H,
                height: j,
                ...b0({
                  x: T.x ?? Z.position.x,
                  y: T.y ?? Z.position.y
                }, { width: H, height: j }, Z.parentId, E, P)
              }
            }, X = tn([G], E, A, I);
            $.push(...X), R.x = T.x ? Math.max(P[0] * H, T.x) : void 0, R.y = T.y ? Math.max(P[1] * j, T.y) : void 0;
          }
          if (R.x !== void 0 && R.y !== void 0) {
            const P = {
              id: p,
              type: "position",
              position: { ...R }
            };
            $.push(P);
          }
          if (T.width !== void 0 && T.height !== void 0) {
            const H = {
              id: p,
              type: "dimensions",
              resizing: !0,
              setAttributes: f ? f === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: T.width,
                height: T.height
              }
            };
            $.push(H);
          }
          for (const P of O) {
            const H = {
              ...P,
              type: "position"
            };
            $.push(H);
          }
          F($);
        },
        onEnd: ({ width: T, height: O }) => {
          const F = {
            id: p,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: T,
              height: O
            }
          };
          x.getState().triggerNodeChanges([F]);
        }
      })), k.current.update({
        controlPosition: N,
        boundaries: {
          minWidth: a,
          minHeight: l,
          maxWidth: c,
          maxHeight: u
        },
        keepAspectRatio: d,
        resizeDirection: f,
        onResizeStart: g,
        onResize: v,
        onResizeEnd: L,
        shouldResize: C
      }), () => {
        var T;
        (T = k.current) == null || T.destroy();
      };
  }, [
    N,
    a,
    l,
    c,
    u,
    d,
    g,
    v,
    L,
    C
  ]);
  const V = N.split("-");
  return m.jsx("div", { className: ke(["react-flow__resize-control", "nodrag", ...V, n, r]), ref: _, style: {
    ...o,
    scale: S,
    ...s && { [y ? "backgroundColor" : "borderColor"]: s }
  }, children: i });
}
be(Ba);
function M8(e, t) {
  return t.find((n) => n.id === e);
}
function Wa(e) {
  const t = e.filter((n) => !!n.data.aggregatedNodeId).map((n) => n.data.aggregatedNodeId);
  return Array.from(new Set(t));
}
function za(e, t) {
  return t.filter((n) => n.data.aggregatedNodeId === e);
}
function Xa(e, t) {
  return e.map((n) => za(n, t));
}
function Ga(e, t) {
  const n = M8(e, t);
  return n ? t.filter((r) => r.data.aggregatedNodeId === n.data.aggregatedNodeId && r.id !== e).map((r) => r.id) : [];
}
function Ya(e, t) {
  return t.filter((n) => n.target === e).map((n) => n.source);
}
function qa(e, t) {
  return t.filter((n) => n.source === e).map((n) => n.target);
}
function xe(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function ft(e) {
  return function t(n) {
    return arguments.length === 0 || xe(n) ? t : e.apply(this, arguments);
  };
}
function wt(e) {
  return function t(n, r) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return xe(n) ? t : ft(function(o) {
          return e(n, o);
        });
      default:
        return xe(n) && xe(r) ? t : xe(n) ? ft(function(o) {
          return e(o, r);
        }) : xe(r) ? ft(function(o) {
          return e(n, o);
        }) : e(n, r);
    }
  };
}
function Ua(e) {
  return function t(n, r, o) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return xe(n) ? t : wt(function(i, s) {
          return e(n, i, s);
        });
      case 2:
        return xe(n) && xe(r) ? t : xe(n) ? wt(function(i, s) {
          return e(i, r, s);
        }) : xe(r) ? wt(function(i, s) {
          return e(n, i, s);
        }) : ft(function(i) {
          return e(n, r, i);
        });
      default:
        return xe(n) && xe(r) && xe(o) ? t : xe(n) && xe(r) ? wt(function(i, s) {
          return e(i, s, o);
        }) : xe(n) && xe(o) ? wt(function(i, s) {
          return e(i, r, s);
        }) : xe(r) && xe(o) ? wt(function(i, s) {
          return e(n, i, s);
        }) : xe(n) ? ft(function(i) {
          return e(i, r, o);
        }) : xe(r) ? ft(function(i) {
          return e(n, i, o);
        }) : xe(o) ? ft(function(i) {
          return e(n, r, i);
        }) : e(n, r, o);
    }
  };
}
const Ka = Number.isInteger || function(t) {
  return t << 0 === t;
};
function Qa(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Ja(e, t) {
  var n = e < 0 ? t.length + e : e;
  return Qa(t) ? t.charAt(n) : t[n];
}
var o1 = /* @__PURE__ */ ft(function(t) {
  return t == null;
}), el = /* @__PURE__ */ wt(function(t, n) {
  return n == null || n !== n ? t : n;
});
function tl(e, t) {
  for (var n = t, r = 0; r < e.length; r += 1) {
    if (n == null)
      return;
    var o = e[r];
    Ka(o) ? n = Ja(o, n) : n = n[o];
  }
  return n;
}
var nl = /* @__PURE__ */ Ua(function(t, n, r) {
  return el(t, tl(n, r));
});
const rl = ({
  nodes: e,
  edges: t,
  topN: n
}) => Ee(() => {
  if (e.length === 0 || e.length <= n || n <= 0)
    return [...e];
  const r = ol(e, t), o = il(e, t), i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  o.forEach((c) => {
    var u;
    o1((u = c.data) == null ? void 0 : u.aggregatedNodeId) ? s.add(c.id) : (i.add(c.data.aggregatedNodeId), s.add(c.data.aggregatedNodeId));
  });
  const a = Math.max(n, s.size + i.size);
  return sl(
    o,
    r,
    e,
    a
  );
}, [e, t, n]);
function ol(e, t) {
  const n = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    n.set(r.id, []);
  }), t.forEach((r) => {
    const o = n.get(r.source);
    o && o.push(r);
  }), n;
}
function il(e, t) {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.target);
  }), e.filter((r) => !n.has(r.id));
}
function sl(e, t, n, r) {
  const o = [], i = /* @__PURE__ */ new Set(), s = [], a = /* @__PURE__ */ new Map();
  for (n.forEach((c) => {
    a.set(c.id, c);
  }), e.forEach((c) => {
    var u, d, f, h;
    !i.has(c.id) && (o1((u = c.data) == null ? void 0 : u.aggregatedNodeId) || !i.has((d = c.data) == null ? void 0 : d.aggregatedNodeId)) && (o.push(c), o1((f = c.data) == null ? void 0 : f.aggregatedNodeId) ? i.add(c.id) : i.add((h = c.data) == null ? void 0 : h.aggregatedNodeId), s.push(c.id));
  }); s.length > 0 && o.length < r; ) {
    const c = s == null ? void 0 : s.shift();
    (t.get(c) ?? []).forEach((d) => {
      const f = a.get(d.target);
      f && !i.has(d.target) && o.length < r && (o.push(f), i.add(d.target), s.push(d.target));
    });
  }
  const l = /* @__PURE__ */ new Set();
  return o.forEach((c) => {
    var u;
    o1((u = c.data) == null ? void 0 : u.aggregatedNodeId) || l.add(c.data.aggregatedNodeId);
  }), n.forEach((c) => {
    var u;
    !o1((u = c.data) == null ? void 0 : u.aggregatedNodeId) && l.has(c.data.aggregatedNodeId) && !o.some((d) => d.id === c.id) && o.push(c);
  }), o;
}
const al = (e, t, n, r = 20) => {
  const o = rl({ nodes: e, edges: t, topN: r });
  return Ee(() => {
    const i = Ll(
      e,
      t,
      o.map((a) => a.id)
    ), s = ll(i.nodes, i.edges);
    return cl(s.nodes, s.edges, n ?? []);
  }, [e, t, n, o]);
};
function ll(e, t) {
  const n = Wa(e), r = Xa(n, e);
  let o = { nodes: e, edges: t };
  return r.filter((i) => i.length > 1).forEach((i) => {
    o = pl(i[0].id, o.nodes, o.edges);
  }), o;
}
function cl(e, t, n) {
  const r = new Set(n == null ? void 0 : n.map((s) => s.id));
  if (!n || n.length === 0)
    return { nodes: e, edges: t };
  const o = e.map((s) => ({
    ...s,
    data: {
      ...s.data,
      isFaded: !r.has(s.id)
    }
  })), i = t.map((s) => ({
    ...s,
    style: {
      ...s.style,
      // Full opacity if either source or target node is in focus, otherwise reduced opacity
      opacity: r.has(s.source) || r.has(s.target) ? 1 : 0.3
    }
  }));
  return { nodes: o, edges: i };
}
function ul(e, t) {
  return e.map((n) => t.stackSiblingIds.includes(n.id) ? {
    ...n,
    hidden: !0,
    data: {
      ...n.data,
      isStacked: !0
    }
  } : n.id === t.topOfStackNodeId ? {
    ...n,
    data: {
      ...n.data,
      isStacked: !0,
      isTopOfTheStack: !0
    }
  } : n);
}
function dl(e, t) {
  return t.parentIds.includes(e.source) && t.stackSiblingIds.includes(e.target) ? { ...e, hidden: !0 } : e;
}
function fl(e, t) {
  return !t.parentIds.includes(e.source) && t.stackSiblingIds.includes(e.target) ? {
    ...e,
    target: t.topOfStackNodeId,
    hidden: !1,
    data: { original: { ...e } }
  } : e;
}
function hl(e, t) {
  return t.stackSiblingIds.includes(e.source) && t.childrenIds.includes(e.target) ? { ...e, hidden: !0 } : e;
}
function gl(e, t) {
  return t.stackSiblingIds.includes(e.source) && !t.childrenIds.includes(e.target) ? {
    ...e,
    source: t.topOfStackNodeId,
    hidden: !1,
    data: { original: { ...e } }
  } : e;
}
function Cl(e, t) {
  return e.map((n) => {
    let r = dl(n, t);
    return r = fl(r, t), r = hl(r, t), r = gl(r, t), r;
  });
}
function pl(e, t, n) {
  if (!M8(e, t)) return { nodes: t, edges: n };
  const o = {
    topOfStackNodeId: e,
    stackSiblingIds: Ga(e, t),
    parentIds: Ya(e, n),
    childrenIds: qa(e, n)
  }, i = ul(t, o), s = Cl(n, o);
  return {
    nodes: i,
    edges: s
  };
}
function Ll(e, t, n) {
  const r = new Set(n), o = e.map((s) => r.has(s.id) ? s : { ...s, hidden: !0 }), i = t.map((s) => r.has(s.source) && r.has(s.target) ? s : { ...s, hidden: !0 });
  return { nodes: o, edges: i };
}
const _8 = m1(void 0), ml = ({
  children: e,
  mocks: t
}) => {
  const [n, r] = Me(void 0), [o, i] = Me(null), [s, a] = Me([]);
  return /* @__PURE__ */ m.jsx(
    _8.Provider,
    {
      value: t ?? {
        selectedNodeId: n,
        setSelectedNodeId: r,
        unstackedAggregateNodeIds: s,
        setUnstackedAggregateNodeIds: a,
        activeMenuNodeId: o,
        setActiveMenuNodeId: i
      },
      children: e
    }
  );
}, b2 = () => {
  const e = _t(_8);
  if (e === void 0)
    throw new Error("useCelestialStateContext must be used within a CelestialStateProvider");
  return e;
}, wl = "_container_1ax9i_1", xl = "_mapContainer_1ax9i_9", E5 = {
  container: wl,
  mapContainer: xl
}, vl = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.55582 3.16512C4.89136 2.72085 4 3.19712 4 3.99642L4 12.0037C4 12.8021 4.88955 13.2785 5.55415 12.8361L11.5551 8.84116C12.1488 8.44589 12.1497 7.5739 11.5568 7.17744L5.55582 3.16512Z", fill: "currentColor" })), yl = q(vl), bl = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 19, height: 20, viewBox: "0 0 19 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { d: "M9.5 2C10.0634 2 10.5468 2.33333 10.7451 2.79459L17.3076 15.2946C17.8364 16.5129 17.0457 18 15.5635 18H3.43848C1.90858 17.9998 1.11575 16.3622 1.69434 15.1279L8.25684 2.79459C8.45515 2.33333 8.9366 2 9.5 2Z", fill: "#D13212", stroke: "#F2F3F3", strokeWidth: 2 }), /* @__PURE__ */ w.createElement("path", { d: "M10.4385 15H8.56348V13H10.4385V15ZM10.4385 8V12H8.56348V8H10.4385Z", fill: "white" })), El = q(bl), Sl = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { d: "M14.3637 3.05093L12.9495 1.63672L7.9997 6.58647L3.04996 1.63672L1.63574 3.05093L6.58549 8.00068L1.63574 12.9504L3.04996 14.3646L7.9997 9.41489L12.9495 14.3646L14.3637 12.9504L9.41392 8.00068L14.3637 3.05093Z", fill: "currentColor" })), Ml = q(Sl), _l = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 14, height: 15, viewBox: "0 0 14 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.12402 1.0625L3.00012 2.2562L8.00059 7.56789L3.00012 12.8796L4.12402 14.0733L10.249 7.56789L4.12402 1.0625Z", fill: "currentColor" })), kl = q(_l), Nl = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { d: "M8 3H3v5M3 3l6 6" }), /* @__PURE__ */ w.createElement("path", { d: "M16 3h5v5M21 3l-6 6" }), /* @__PURE__ */ w.createElement("path", { d: "M8 21H3v-5M3 21l6-6" }), /* @__PURE__ */ w.createElement("path", { d: "M16 21h5v-5M21 21l-6-6" }), /* @__PURE__ */ w.createElement("rect", { x: 9, y: 9, width: 6, height: 6, rx: 1 })), Zl = q(Nl), Il = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { d: "M3 6V3H6", stroke: "currentColor", strokeWidth: 1.5 }), /* @__PURE__ */ w.createElement("path", { d: "M10 3H13V6", stroke: "currentColor", strokeWidth: 1.5 }), /* @__PURE__ */ w.createElement("path", { d: "M13 10V13H10", stroke: "currentColor", strokeWidth: 1.5 }), /* @__PURE__ */ w.createElement("path", { d: "M6 13H3V10", stroke: "currentColor", strokeWidth: 1.5 })), Rl = q(Il), Al = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-2.57503e-07 8C-2.57268e-07 3.58172 3.58172 -1.48667e-07 8 -1.48557e-07C12.4183 -1.48447e-07 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 -2.57738e-07 12.4183 -2.57503e-07 8ZM8.4653 13.7382C8.23213 13.9683 8.07605 14 8 14C7.92395 14 7.76787 13.9683 7.5347 13.7382C7.29723 13.5038 7.03751 13.1151 6.79783 12.5558C6.40914 11.6489 6.12491 10.4144 6.03237 9L9.96763 9C9.87509 10.4144 9.59086 11.6489 9.20218 12.5558C8.96249 13.1151 8.70277 13.5038 8.4653 13.7382ZM11.9714 9C11.8822 10.5464 11.5877 11.9709 11.1336 13.1177C12.5825 12.2287 13.6249 10.7415 13.917 9L11.9714 9ZM13.917 7L11.9714 7C11.8822 5.45361 11.5877 4.02907 11.1336 2.88228C12.5825 3.77135 13.6249 5.25848 13.917 7ZM9.96763 7L6.03237 7C6.12491 5.58559 6.40914 4.3511 6.79783 3.44417C7.03751 2.8849 7.29723 2.4962 7.5347 2.26184C7.76787 2.03172 7.92395 2 8 2C8.07605 2 8.23213 2.03172 8.4653 2.26184C8.70277 2.4962 8.96249 2.8849 9.20218 3.44417C9.59086 4.3511 9.87509 5.58559 9.96763 7ZM4.02863 7C4.11784 5.45361 4.41228 4.02907 4.86644 2.88228C3.41752 3.77135 2.37513 5.25848 2.08296 7L4.02863 7ZM2.08296 9C2.37513 10.7415 3.41752 12.2287 4.86644 13.1177C4.41228 11.9709 4.11784 10.5464 4.02863 9L2.08296 9Z", fill: "currentColor" })), Ol = q(Al), $l = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 120, height: 120, viewBox: "0 0 120 120", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("rect", { x: 10, y: 10, width: 40, height: 40, rx: 6, ry: 6, stroke: "currentColor", fillOpacity: 0, strokeWidth: 12 }), /* @__PURE__ */ w.createElement("rect", { x: 70, y: 10, width: 40, height: 40, rx: 6, ry: 6, stroke: "currentColor", fillOpacity: 0, strokeWidth: 12 }), /* @__PURE__ */ w.createElement("rect", { x: 10, y: 70, width: 40, height: 40, rx: 6, ry: 6, stroke: "currentColor", fillOpacity: 0, strokeWidth: 12 }), /* @__PURE__ */ w.createElement("rect", { x: 70, y: 70, width: 40, height: 40, rx: 6, ry: 6, stroke: "currentColor", fillOpacity: 0, strokeWidth: 12 })), Tl = q($l), Fl = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 17, height: 17, viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { d: "M15.102 3.5773L10.852 2.16063H10.8024C10.7694 2.15731 10.7362 2.15731 10.7032 2.16063H10.5403H10.4482H10.3987L6.37533 3.54188L2.35199 2.16063C2.24547 2.1255 2.13213 2.11618 2.0213 2.13342C1.91047 2.15066 1.80531 2.19397 1.71449 2.2598C1.62295 2.32497 1.54822 2.411 1.49649 2.51076C1.44476 2.61053 1.41751 2.72117 1.41699 2.83355V12.7502C1.41661 12.8987 1.46291 13.0436 1.54934 13.1643C1.63577 13.2851 1.75797 13.3756 1.89866 13.4231L6.14866 14.8398C6.29135 14.8863 6.44514 14.8863 6.58783 14.8398V14.8398L10.6253 13.494L14.6487 14.8752C14.7239 14.8854 14.8001 14.8854 14.8753 14.8752C15.0234 14.8773 15.168 14.8299 15.2862 14.7406C15.3777 14.6754 15.4524 14.5894 15.5042 14.4897C15.5559 14.3899 15.5831 14.2793 15.5837 14.1669V4.25021C15.584 4.10171 15.5377 3.95685 15.4513 3.8361C15.3649 3.71535 15.2427 3.62481 15.102 3.5773V3.5773ZM5.66699 13.1823L2.83366 12.2402V3.81813L5.66699 4.76021V13.1823ZM9.91699 12.2402L7.08366 13.1823V4.76021L9.91699 3.81813V12.2402ZM14.167 13.1823L11.3337 12.2402V3.81813L14.167 4.76021V13.1823Z", fill: "currentColor" })), Pl = q(Fl), jl = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 60, height: 28, viewBox: "0 0 60 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("rect", { x: 1, y: 1, width: 58, height: 26, stroke: "currentColor", strokeWidth: 2, strokeDasharray: "7 7" }));
q(jl);
const Dl = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { d: "M7.38477 1C10.9057 1 13.7694 3.86387 13.7695 7.38477C13.7695 8.78478 13.3151 10.0801 12.5479 11.1338L15.707 14.293L14.293 15.707L11.1338 12.5479C10.0802 13.315 8.78499 13.7695 7.38477 13.7695C3.86387 13.7694 1 10.9047 1 7.38477C1.00013 3.86395 3.86395 1.00013 7.38477 1ZM7.38477 3C4.96695 3.00013 3.00013 4.96695 3 7.38477C3 9.80269 4.96687 11.7694 7.38477 11.7695C9.80277 11.7695 11.7695 9.80277 11.7695 7.38477C11.7694 4.96687 9.80269 3 7.38477 3ZM8.5 6.5H10.5V8.5H8.5V10.5H6.5V8.5H4.5V6.5H6.5V4.5H8.5V6.5Z", fill: "currentColor" })), Vl = q(Dl), Hl = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { d: "M7.38477 1C10.9057 1 13.7694 3.86387 13.7695 7.38477C13.7695 8.78478 13.3151 10.0801 12.5479 11.1338L15.707 14.293L14.293 15.707L11.1338 12.5479C10.0802 13.315 8.78499 13.7695 7.38477 13.7695C3.86387 13.7694 1 10.9047 1 7.38477C1.00013 3.86395 3.86395 1.00013 7.38477 1ZM7.38477 3C4.96695 3.00013 3.00013 4.96695 3 7.38477C3 9.80269 4.96687 11.7694 7.38477 11.7695C9.80277 11.7695 11.7695 9.80277 11.7695 7.38477C11.7694 4.96687 9.80269 3 7.38477 3ZM10.5 8.5H4.5V6.5H10.5V8.5Z", fill: "currentColor" })), Bl = q(Hl), E2 = {
  requests: 0,
  faults5xx: 0,
  errors4xx: 0
}, S5 = "ServiceGroup", Wl = "AWS::Service", zl = ({ title: e, onBreadcrumbClick: t, children: n }) => /* @__PURE__ */ m.jsxs("span", { className: "flex items-center", children: [
  n,
  t ? /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: t,
      className: "text-link-default hover:text-link-hover transition-colors duration-200 focus:outline-none rounded px-2 py-1 cursor-pointer",
      children: e
    }
  ) : /* @__PURE__ */ m.jsx("span", { className: "text-body-secondary px-2 py-1", children: e }),
  t && /* @__PURE__ */ m.jsx("span", { className: "text-body-secondary mx-2", children: /* @__PURE__ */ m.jsx(kl, { className: "w-4 h-4" }) })
] }), Xl = () => {
  const [e, t] = Me(!1), n = W((o) => t(!0), []), r = W((o) => t(!1), []);
  return {
    isHovered: e,
    onMouseEnter: n,
    onMouseLeave: r
  };
};
var $e = /* @__PURE__ */ ((e) => (e.de = "de", e.en = "en", e.es = "es", e.fr = "fr", e.id = "id", e.it = "it", e.ja = "ja", e.ko = "ko", e.tr_tr = "tr-TR", e.pt_br = "pt-BR", e.zh_cn = "zh-CN", e.zh_tw = "zh-TW", e))($e || {});
const k8 = "en", Gl = k8, Yl = {
  world: "World"
}, ql = {
  viewInsights: "View insights"
}, Ul = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, Kl = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, Ql = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, Jl = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, ec = "match", tc = "matches", nc = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, rc = "Sli status", oc = {
  breadcrumbs: Yl,
  buttons: ql,
  contextMenu: Ul,
  controls: Kl,
  healthDonut: Ql,
  legend: Jl,
  matchForFilter: ec,
  matchesForFilter: tc,
  node: nc,
  sliStatus: rc
}, ic = {
  world: "World"
}, sc = {
  viewInsights: "View insights"
}, ac = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, lc = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, cc = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, uc = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, dc = "match", fc = "matches", hc = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, gc = "Sli status", Cc = {
  breadcrumbs: ic,
  buttons: sc,
  contextMenu: ac,
  controls: lc,
  healthDonut: cc,
  legend: uc,
  matchForFilter: dc,
  matchesForFilter: fc,
  node: hc,
  sliStatus: gc
}, pc = {
  world: "World"
}, Lc = {
  viewInsights: "View insights"
}, mc = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, wc = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, xc = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, vc = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, yc = "match", bc = "matches", Ec = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, Sc = "Sli status", Mc = {
  breadcrumbs: pc,
  buttons: Lc,
  contextMenu: mc,
  controls: wc,
  healthDonut: xc,
  legend: vc,
  matchForFilter: yc,
  matchesForFilter: bc,
  node: Ec,
  sliStatus: Sc
}, _c = {
  world: "World"
}, kc = {
  viewInsights: "View insights"
}, Nc = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, Zc = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, Ic = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, Rc = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, Ac = "match", Oc = "matches", $c = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, Tc = "Sli status", Fc = {
  breadcrumbs: _c,
  buttons: kc,
  contextMenu: Nc,
  controls: Zc,
  healthDonut: Ic,
  legend: Rc,
  matchForFilter: Ac,
  matchesForFilter: Oc,
  node: $c,
  sliStatus: Tc
}, Pc = {
  world: "World"
}, jc = {
  viewInsights: "View insights"
}, Dc = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, Vc = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, Hc = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, Bc = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, Wc = "match", zc = "matches", Xc = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, Gc = "Sli status", Yc = {
  breadcrumbs: Pc,
  buttons: jc,
  contextMenu: Dc,
  controls: Vc,
  healthDonut: Hc,
  legend: Bc,
  matchForFilter: Wc,
  matchesForFilter: zc,
  node: Xc,
  sliStatus: Gc
}, qc = {
  world: "World"
}, Uc = {
  viewInsights: "View insights"
}, Kc = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, Qc = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, Jc = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, eu = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, tu = "match", nu = "matches", ru = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, ou = "Sli status", iu = {
  breadcrumbs: qc,
  buttons: Uc,
  contextMenu: Kc,
  controls: Qc,
  healthDonut: Jc,
  legend: eu,
  matchForFilter: tu,
  matchesForFilter: nu,
  node: ru,
  sliStatus: ou
}, su = {
  world: "World"
}, au = {
  viewInsights: "View insights"
}, lu = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, cu = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, uu = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, du = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, fu = "match", hu = "matches", gu = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, Cu = "Sli status", pu = {
  breadcrumbs: su,
  buttons: au,
  contextMenu: lu,
  controls: cu,
  healthDonut: uu,
  legend: du,
  matchForFilter: fu,
  matchesForFilter: hu,
  node: gu,
  sliStatus: Cu
}, Lu = {
  world: "World"
}, mu = {
  viewInsights: "View insights"
}, wu = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, xu = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, vu = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, yu = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, bu = "match", Eu = "matches", Su = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, Mu = "Sli status", _u = {
  breadcrumbs: Lu,
  buttons: mu,
  contextMenu: wu,
  controls: xu,
  healthDonut: vu,
  legend: yu,
  matchForFilter: bu,
  matchesForFilter: Eu,
  node: Su,
  sliStatus: Mu
}, ku = {
  world: "World"
}, Nu = {
  viewInsights: "View insights"
}, Zu = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, Iu = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, Ru = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, Au = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, Ou = "match", $u = "matches", Tu = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, Fu = "Sli status", Pu = {
  breadcrumbs: ku,
  buttons: Nu,
  contextMenu: Zu,
  controls: Iu,
  healthDonut: Ru,
  legend: Au,
  matchForFilter: Ou,
  matchesForFilter: $u,
  node: Tu,
  sliStatus: Fu
}, ju = {
  world: "World"
}, Du = {
  viewInsights: "View insights"
}, Vu = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, Hu = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, Bu = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, Wu = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, zu = "match", Xu = "matches", Gu = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, Yu = "Sli status", qu = {
  breadcrumbs: ju,
  buttons: Du,
  contextMenu: Vu,
  controls: Hu,
  healthDonut: Bu,
  legend: Wu,
  matchForFilter: zu,
  matchesForFilter: Xu,
  node: Gu,
  sliStatus: Yu
}, Uu = {
  world: "World"
}, Ku = {
  viewInsights: "View insights"
}, Qu = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, Ju = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, ed = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, td = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, nd = "match", rd = "matches", od = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, id = "Sli status", sd = {
  breadcrumbs: Uu,
  buttons: Ku,
  contextMenu: Qu,
  controls: Ju,
  healthDonut: ed,
  legend: td,
  matchForFilter: nd,
  matchesForFilter: rd,
  node: od,
  sliStatus: id
}, ad = {
  world: "World"
}, ld = {
  viewInsights: "View insights"
}, cd = {
  collapseDependencies: "Collapse dependencies",
  expandDependencies: "Expand dependencies"
}, ud = {
  expandAll: "Expand all nodes",
  fitView: "Fit view",
  layout: "Update layout",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
}, dd = {
  legend: {
    errors: "{value}% errors (4xx)",
    faults: "{value}% faults (5xx)",
    noIssue: "No issues",
    ok: "{value}% requests ok",
    sliBreach: "{value} SLI breaches",
    sliRecovered: "{value} SLI recovered"
  }
}, fd = {
  activeSLIBreach: "Active SLI breach",
  errors: "Error percentage (4xx)",
  faults: "Fault percentage (5xx)",
  ok: "Requests Ok percentage",
  recoveredSLI: "Recovered SLI",
  title: "Legend",
  toggle: "Toggle legend",
  uninstrumentedResource: "Uninstrumented resource"
}, hd = "match", gd = "matches", Cd = {
  labels: {
    platform: "Platform",
    requests: "Requests",
    services: "Services"
  },
  percentOfUninstrumentedServices: "{value}% uninstrumented",
  service: "Service",
  showNodeActions: "Show node actions",
  sliStatus: {
    breached: "SLI breach",
    recovered: "Recovered"
  }
}, pd = "Sli status", Ld = {
  breadcrumbs: ad,
  buttons: ld,
  contextMenu: cd,
  controls: ud,
  healthDonut: dd,
  legend: fd,
  matchForFilter: hd,
  matchesForFilter: gd,
  node: Cd,
  sliStatus: pd
}, M5 = {
  [$e.de]: oc,
  [$e.en]: Cc,
  [$e.es]: Mc,
  [$e.fr]: Fc,
  [$e.id]: Yc,
  [$e.it]: iu,
  [$e.ja]: pu,
  [$e.ko]: _u,
  [$e.tr_tr]: Pu,
  [$e.pt_br]: qu,
  [$e.zh_cn]: sd,
  [$e.zh_tw]: Ld
}, md = (e) => M5[e] ?? M5[k8], wd = (e, t) => t.reduce(
  (n, [r, o]) => n.replace(new RegExp(`{${r}}`, "g"), o),
  e
), oe = (e, t = {}, n = Gl) => {
  const r = md(n), o = e.split("."), i = nl(e, o, r);
  return typeof i == "string" ? wd(i, Object.entries(t)) : e;
}, Be = {
  background: "var(--color-requests)",
  white: "var(--color-container-default)",
  ok2xx: "var(--color-ok)",
  okFill: "var(--color-ok)",
  error4xx: "var(--color-errors)",
  errorFill: "#8a6b05",
  // @todo - convert colors to css colors
  fault5xx: "var(--color-faults)",
  faultFill: "var(--color-faults)"
};
var l2 = /* @__PURE__ */ ((e) => (e.OK = "ok", e.FAULT = "fault", e.ERROR = "error", e))(l2 || {});
const _5 = (e, t) => t ? e / t * 100 : 0, N8 = (e) => Ee(() => {
  const { requests: t, faults5xx: n, errors4xx: r } = e, o = _5(n, t), i = _5(r, t);
  return {
    ok2xxPercent: e.requests ? 100 - (o + i) : 0,
    faults5xxPercent: o,
    errors4xxPercent: i
  };
}, [e]), xd = (e) => {
  const { faults5xxPercent: t, errors4xxPercent: n, ok2xxPercent: r } = N8(e);
  return Ee(
    // Return array of segment objects for donut chart
    () => [
      {
        percent: t,
        color: t ? Be.fault5xx : "transparent",
        label: oe("healthDonut.legend.faults", { value: t.toFixed(1) }),
        offset: 0
        // First segment starts at 0
      },
      {
        percent: n,
        color: n ? Be.error4xx : "transparent",
        label: oe("healthDonut.legend.errors", { value: n.toFixed(1) }),
        offset: t
        // Offset by previous segment
      },
      {
        percent: r,
        color: r ? Be.ok2xx : "transparent",
        label: oe("healthDonut.legend.ok", { value: r.toFixed(1) }),
        offset: t + n
        // Offset by sum of previous segments
      }
    ],
    [t, n, r]
  );
}, vd = 1.618034, F3 = 0.618034, yd = 13, bd = 12, Ed = (e) => {
  const n = e * F3 * F3;
  return {
    centerIconSize: Math.max(yd, n),
    sliStatusIconSize: Math.max(bd, n)
  };
}, Sd = "_sliStatusIcon_1qjea_1", Md = "_animated_1qjea_8", _d = "_popIn_1qjea_1", kd = "_recovered_1qjea_12", Nd = "_breached_1qjea_16", s3 = {
  sliStatusIcon: Sd,
  animated: Md,
  popIn: _d,
  recovered: kd,
  breached: Nd
}, Zd = (e) => `sli-status-icon-${e}`, S2 = ({ status: e, size: t, isPulsing: n = !1 }) => /* @__PURE__ */ m.jsx(
  "div",
  {
    "data-testid": Zd(e),
    className: `${s3.sliStatusIcon} ${s3[e]} ${n ? s3.animated : ""}`,
    style: {
      width: `${t}px`,
      height: `${t}px`
    },
    role: "img",
    "aria-label": oe("sliStatus"),
    children: /* @__PURE__ */ m.jsx(El, { height: t, width: t })
  }
), Id = "_healthDonut_zp24a_1", Rd = {
  healthDonut: Id
}, Ad = (e) => Ee(() => {
  switch (e) {
    case l2.FAULT:
      return { fill: Be.faultFill, stroke: Be.faultFill };
    case l2.ERROR:
      return { fill: Be.errorFill, stroke: Be.errorFill };
    default:
      return { fill: Be.white, stroke: Be.background };
  }
}, [e]), Od = "_absolute_1yflx_1", $d = {
  absolute: Od
}, Td = ({ children: e, ...t }) => /* @__PURE__ */ m.jsx("div", { className: $d.absolute, style: { ...t }, children: e }), Fd = "_donut_1jbrr_1", Pd = "_icon_1jbrr_8", jd = "_inverted_1jbrr_21", a3 = {
  donut: Fd,
  icon: Pd,
  inverted: jd
}, k5 = ({
  center: e,
  radius: t,
  stroke: n,
  strokeWidth: r,
  fill: o = "transparent",
  dashArray: i,
  dashOffset: s = 0,
  ariaLabel: a = "Health donut segment",
  description: l,
  className: c = ""
}) => /* @__PURE__ */ m.jsx(
  "circle",
  {
    className: c,
    cx: e,
    cy: e,
    r: t,
    fill: o,
    stroke: n,
    strokeWidth: r,
    strokeLinecap: "butt",
    strokeDasharray: i,
    strokeDashoffset: s,
    transform: `rotate(-90 ${e} ${e})`,
    role: "img",
    "aria-label": a,
    "aria-description": l
  }
), Dd = 2 * Math.PI, l3 = 5, c3 = 40, N5 = 1, Vd = 0.1, Hd = (e) => e <= c3 ? {
  background: N5,
  segment: l3
} : {
  // Scale background stroke with size, but never smaller than minimum
  background: Math.max(N5, e / (c3 * vd)),
  // Scale segment stroke linearly with diameter difference from minimum
  segment: Math.max(
    l3,
    l3 + (e - c3) * F3 * Vd
  )
}, Bd = (e, t) => {
  const n = (e - t) / 2;
  return {
    radius: n,
    circumference: Dd * n,
    center: e / 2
  };
}, Wd = (e) => Ee(() => {
  const t = Hd(e), n = Bd(e, t.segment);
  return {
    ...n,
    backgroundStrokeWidth: t.background,
    segmentStrokeWidth: t.segment,
    getArcLength: (r) => r / 100 * n.circumference
  };
}, [e]), zd = be(({ diameter: e, segments: t, fill: n, stroke: r }) => {
  const { center: o, radius: i, backgroundStrokeWidth: s, segmentStrokeWidth: a, getArcLength: l, circumference: c } = Wd(e);
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      k5,
      {
        center: o,
        radius: i,
        stroke: r,
        fill: n,
        strokeWidth: s,
        dashArray: ""
      }
    ),
    t.map((u, d) => /* @__PURE__ */ m.jsx(
      k5,
      {
        center: o,
        radius: i,
        stroke: u.color,
        strokeWidth: a,
        dashArray: `${l(u.percent)} ${c}`,
        dashOffset: -l(u.offset),
        ariaLabel: u.label,
        description: u.label
      },
      d
    ))
  ] });
}), Xd = "donut", Gd = "donut-icon", Yd = "donut-torus", qd = ({
  segments: e,
  iconSize: t,
  diameter: n,
  fill: r,
  stroke: o,
  isInverted: i,
  children: s
}) => /* @__PURE__ */ m.jsxs("div", { "data-testid": Xd, className: a3.donut, style: { width: n, height: n }, children: [
  /* @__PURE__ */ m.jsx(
    "svg",
    {
      "data-testid": Yd,
      width: n,
      height: n,
      viewBox: `0 0 ${n} ${n}`,
      children: /* @__PURE__ */ m.jsx(zd, { diameter: n, segments: e, fill: r, stroke: o })
    }
  ),
  s && /* @__PURE__ */ m.jsx(
    "div",
    {
      "data-testid": Gd,
      className: `${a3.icon} ${i ? a3.inverted : ""}`,
      style: {
        width: t,
        height: t
      },
      children: s
    }
  )
] }), z1 = {
  "health-donut-legend": "_health-donut-legend_z9qwp_1",
  "triangle-left": "_triangle-left_z9qwp_14",
  "triangle-right": "_triangle-right_z9qwp_15",
  "health-donut-legend-content": "_health-donut-legend-content_z9qwp_48"
}, kt = ({ text: e, className: t, children: n }) => /* @__PURE__ */ m.jsxs("div", { className: `flex items-center text-body-secondary ${t}`, children: [
  /* @__PURE__ */ m.jsx("div", { className: "flex items-center", children: n }),
  /* @__PURE__ */ m.jsx("div", { className: "flex text-xs", children: e })
] }), Z8 = ({ text: e, children: t = /* @__PURE__ */ m.jsx(S2, { status: "breached", size: 22 }) }) => /* @__PURE__ */ m.jsx(kt, { text: e, className: "gap-0.5", children: t }), rn = {
  ok: "var(--color-ok)",
  faults: "var(--color-faults)",
  errors: "var(--color-errors)"
}, Ud = "color-swatch", on = ({ color: e, ...t }) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ...t,
    "data-testid": Ud,
    className: "w-4 aspect-square rounded-xs inline-block",
    style: { backgroundColor: e }
  }
), Kd = () => /* @__PURE__ */ m.jsx(on, { color: rn.errors }), I8 = ({ text: e, children: t = /* @__PURE__ */ m.jsx(Kd, {}) }) => /* @__PURE__ */ m.jsx(kt, { text: e, className: "gap-1.5", children: t }), Qd = () => /* @__PURE__ */ m.jsx(on, { color: rn.faults }), R8 = ({ text: e, children: t = /* @__PURE__ */ m.jsx(Qd, {}) }) => /* @__PURE__ */ m.jsx(kt, { text: e, className: "gap-1.5", children: t }), A8 = ({ text: e, children: t = /* @__PURE__ */ m.jsx(S2, { status: "recovered", size: 22 }) }) => /* @__PURE__ */ m.jsx(kt, { text: e, className: "gap-0.5", children: t }), Jd = () => /* @__PURE__ */ m.jsx(on, { color: rn.ok }), O8 = ({ text: e, children: t = /* @__PURE__ */ m.jsx(Jd, {}) }) => /* @__PURE__ */ m.jsx(kt, { text: e, className: "gap-1.5", children: t }), ef = ({ metrics: e, health: t, trianglePosition: n = "left" }) => {
  const r = `${z1["health-donut-legend"]} ${n === "right" ? z1["triangle-right"] : z1["triangle-left"]}`, { faults5xxPercent: o, errors4xxPercent: i, ok2xxPercent: s } = N8(
    e ?? {
      requests: 0,
      faults5xx: 0,
      errors4xx: 0
    }
  ), { breached: a, recovered: l } = t ?? {
    breached: 0,
    recovered: 0
  };
  return /* @__PURE__ */ m.jsx("div", { className: r, children: /* @__PURE__ */ m.jsxs("div", { className: z1["health-donut-legend-content"], children: [
    !!o && /* @__PURE__ */ m.jsx(R8, { text: oe("healthDonut.legend.faults", { value: Math.round(o) }) }),
    !!i && /* @__PURE__ */ m.jsx(I8, { text: oe("healthDonut.legend.errors", { value: Math.round(i) }) }),
    !!s && /* @__PURE__ */ m.jsx(O8, { text: oe("healthDonut.legend.ok", { value: Math.round(s) }) }),
    !!a && /* @__PURE__ */ m.jsx("div", { className: "-ml-0.5 -mt-0.5", children: /* @__PURE__ */ m.jsx(Z8, { text: oe("healthDonut.legend.sliBreach", { value: a }) }) }),
    !!l && !a && /* @__PURE__ */ m.jsx("div", { className: "-ml-0.5 -mt-0.5", children: /* @__PURE__ */ m.jsx(A8, { text: oe("healthDonut.legend.sliRecovered", { value: l }) }) }),
    !a && !l && !o && !i && !s && /* @__PURE__ */ m.jsx(kt, { text: oe("healthDonut.legend.noIssue") })
  ] }) });
}, tf = "health-donut", M2 = ({
  metrics: e,
  health: t,
  size: n,
  icon: r,
  status: o,
  isLegendEnabled: i,
  children: s
}) => {
  const { isHovered: a, ...l } = Xl(), c = Ed(n), u = xd(e), d = Ad(o);
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      "data-testid": tf,
      className: Rd.healthDonut,
      style: { width: n, height: n },
      ...i ? l : {},
      children: [
        ((t == null ? void 0 : t.status) === "breached" || (t == null ? void 0 : t.status) === "recovered") && /* @__PURE__ */ m.jsx(Td, { left: "-8%", top: "-8%", children: /* @__PURE__ */ m.jsx(S2, { status: t.status, size: c.sliStatusIconSize, isPulsing: !0 }) }),
        /* @__PURE__ */ m.jsx(
          qd,
          {
            diameter: n,
            iconSize: c.centerIconSize,
            segments: u,
            isInverted: o !== void 0 && o !== l2.OK,
            fill: d.fill,
            stroke: d.stroke,
            children: r
          }
        ),
        i && a && /* @__PURE__ */ m.jsx(ef, { metrics: e, health: t }),
        s
      ]
    }
  );
}, nf = ({ breadcrumbs: e, onBreadcrumbClick: t, hotspot: n }) => /* @__PURE__ */ m.jsxs("div", { className: "flex items-center px-4 py-3", children: [
  e.map((r, o) => {
    var i, s, a, l;
    return /* @__PURE__ */ m.jsx(
      zl,
      {
        title: r.title,
        onBreadcrumbClick: o < e.length - 1 ? () => t(r, o) : void 0,
        children: o === 0 ? /* @__PURE__ */ m.jsx(Ol, { className: "w-5 h-5 text-body-secondary" }) : /* @__PURE__ */ m.jsx(
          M2,
          {
            metrics: ((i = r.node) == null ? void 0 : i.metrics) || { ...E2 },
            size: 30,
            icon: (s = r.node) == null ? void 0 : s.icon,
            health: (a = r.node) == null ? void 0 : a.health
          }
        )
      },
      ((l = r.node) == null ? void 0 : l.id) || r.title
    );
  }),
  n
] }), sn = (e = 100, t = 0.15, n = 400) => {
  const r = ce(), o = Ie(), i = W(() => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      o != null && o.fitView && o.fitView({ minZoom: 0.6, maxZoom: 1, padding: t, duration: n });
    });
  }, [o, e, t, n]);
  return ue(() => () => {
    r.current && clearTimeout(r.current);
  }, []), i;
}, rf = () => {
  const e = sn(), [t, n] = Me([
    {
      title: oe("breadcrumbs.world")
    }
  ]), r = (i, s) => {
    const a = {
      title: i,
      node: s
    };
    n((l) => l.some((c) => {
      var u;
      return !!(s != null && s.id) && ((u = c.node) == null ? void 0 : u.id) === (s == null ? void 0 : s.id);
    }) ? l : [...l, a]), e();
  }, o = W(
    (i) => {
      n((s) => s.slice(0, i + 1)), e();
    },
    [t, e]
  );
  return {
    breadcrumbs: t,
    addBreadcrumb: r,
    navigateToBreadcrumb: o
  };
}, of = () => {
  const { zoomIn: e, zoomOut: t, fitView: n } = Ie(), r = W(
    (s) => {
      s.stopPropagation(), e == null || e({ duration: 300 });
    },
    [e]
  ), o = W(
    (s) => {
      s.stopPropagation(), t == null || t({ duration: 300 });
    },
    [t]
  ), i = W(
    (s) => {
      s.stopPropagation(), n == null || n({ duration: 300 });
    },
    [n]
  );
  return {
    onZoomIn: r,
    onZoomOut: o,
    onFitView: i
  };
}, sf = () => {
  const { onZoomIn: e, onZoomOut: t, onFitView: n } = of();
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-2 bg-container-default text-body-secondary p-2 rounded-full shadow-md dark:shadow-md z-50", children: [
    /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        onClick: e,
        className: "w-6 h-6 flex items-center justify-center hover:text-interactive transition-all cursor-pointer",
        title: oe("controls.zoomIn"),
        "aria-label": oe("controls.zoomIn"),
        children: /* @__PURE__ */ m.jsx(Vl, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        onClick: n,
        className: "w-6 h-6 flex items-center justify-center hover:text-interactive transition-all cursor-pointer",
        title: oe("controls.fitView"),
        "aria-label": oe("controls.fitView"),
        children: /* @__PURE__ */ m.jsx(Rl, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        onClick: t,
        className: "w-6 h-6 flex items-center justify-center hover:text-interactive transition-all cursor-pointer",
        title: oe("controls.zoomOut"),
        "aria-label": oe("controls.zoomOut"),
        children: /* @__PURE__ */ m.jsx(Bl, { className: "w-4 h-4" })
      }
    )
  ] });
};
var af = "\0", Lt = "\0", Z5 = "";
let lf = class {
  constructor(t) {
    Le(this, "_isDirected", !0);
    Le(this, "_isMultigraph", !1);
    Le(this, "_isCompound", !1);
    // Label for the graph itself
    Le(this, "_label");
    // Defaults to be set when creating a new node
    Le(this, "_defaultNodeLabelFn", () => {
    });
    // Defaults to be set when creating a new edge
    Le(this, "_defaultEdgeLabelFn", () => {
    });
    // v -> label
    Le(this, "_nodes", {});
    // v -> edgeObj
    Le(this, "_in", {});
    // u -> v -> Number
    Le(this, "_preds", {});
    // v -> edgeObj
    Le(this, "_out", {});
    // v -> w -> Number
    Le(this, "_sucs", {});
    // e -> edgeObj
    Le(this, "_edgeObjs", {});
    // e -> label
    Le(this, "_edgeLabels", {});
    /* Number of nodes in the graph. Should only be changed by the implementation. */
    Le(this, "_nodeCount", 0);
    /* Number of edges in the graph. Should only be changed by the implementation. */
    Le(this, "_edgeCount", 0);
    Le(this, "_parent");
    Le(this, "_children");
    t && (this._isDirected = Object.hasOwn(t, "directed") ? t.directed : !0, this._isMultigraph = Object.hasOwn(t, "multigraph") ? t.multigraph : !1, this._isCompound = Object.hasOwn(t, "compound") ? t.compound : !1), this._isCompound && (this._parent = {}, this._children = {}, this._children[Lt] = {});
  }
  /* === Graph functions ========= */
  /**
   * Whether graph was created with 'directed' flag set to true or not.
   */
  isDirected() {
    return this._isDirected;
  }
  /**
   * Whether graph was created with 'multigraph' flag set to true or not.
   */
  isMultigraph() {
    return this._isMultigraph;
  }
  /**
   * Whether graph was created with 'compound' flag set to true or not.
   */
  isCompound() {
    return this._isCompound;
  }
  /**
   * Sets the label of the graph.
   */
  setGraph(t) {
    return this._label = t, this;
  }
  /**
   * Gets the graph label.
   */
  graph() {
    return this._label;
  }
  /* === Node functions ========== */
  /**
   * Sets the default node label. If newDefault is a function, it will be
   * invoked ach time when setting a label for a node. Otherwise, this label
   * will be assigned as default label in case if no label was specified while
   * setting a node.
   * Complexity: O(1).
   */
  setDefaultNodeLabel(t) {
    return this._defaultNodeLabelFn = t, typeof t != "function" && (this._defaultNodeLabelFn = () => t), this;
  }
  /**
   * Gets the number of nodes in the graph.
   * Complexity: O(1).
   */
  nodeCount() {
    return this._nodeCount;
  }
  /**
   * Gets all nodes of the graph. Note, the in case of compound graph subnodes are
   * not included in list.
   * Complexity: O(1).
   */
  nodes() {
    return Object.keys(this._nodes);
  }
  /**
   * Gets list of nodes without in-edges.
   * Complexity: O(|V|).
   */
  sources() {
    var t = this;
    return this.nodes().filter((n) => Object.keys(t._in[n]).length === 0);
  }
  /**
   * Gets list of nodes without out-edges.
   * Complexity: O(|V|).
   */
  sinks() {
    var t = this;
    return this.nodes().filter((n) => Object.keys(t._out[n]).length === 0);
  }
  /**
   * Invokes setNode method for each node in names list.
   * Complexity: O(|names|).
   */
  setNodes(t, n) {
    var r = arguments, o = this;
    return t.forEach(function(i) {
      r.length > 1 ? o.setNode(i, n) : o.setNode(i);
    }), this;
  }
  /**
   * Creates or updates the value for the node v in the graph. If label is supplied
   * it is set as the value for the node. If label is not supplied and the node was
   * created by this call then the default node label will be assigned.
   * Complexity: O(1).
   */
  setNode(t, n) {
    return Object.hasOwn(this._nodes, t) ? (arguments.length > 1 && (this._nodes[t] = n), this) : (this._nodes[t] = arguments.length > 1 ? n : this._defaultNodeLabelFn(t), this._isCompound && (this._parent[t] = Lt, this._children[t] = {}, this._children[Lt][t] = !0), this._in[t] = {}, this._preds[t] = {}, this._out[t] = {}, this._sucs[t] = {}, ++this._nodeCount, this);
  }
  /**
   * Gets the label of node with specified name.
   * Complexity: O(|V|).
   */
  node(t) {
    return this._nodes[t];
  }
  /**
   * Detects whether graph has a node with specified name or not.
   */
  hasNode(t) {
    return Object.hasOwn(this._nodes, t);
  }
  /**
   * Remove the node with the name from the graph or do nothing if the node is not in
   * the graph. If the node was removed this function also removes any incident
   * edges.
   * Complexity: O(1).
   */
  removeNode(t) {
    var n = this;
    if (Object.hasOwn(this._nodes, t)) {
      var r = (o) => n.removeEdge(n._edgeObjs[o]);
      delete this._nodes[t], this._isCompound && (this._removeFromParentsChildList(t), delete this._parent[t], this.children(t).forEach(function(o) {
        n.setParent(o);
      }), delete this._children[t]), Object.keys(this._in[t]).forEach(r), delete this._in[t], delete this._preds[t], Object.keys(this._out[t]).forEach(r), delete this._out[t], delete this._sucs[t], --this._nodeCount;
    }
    return this;
  }
  /**
   * Sets node p as a parent for node v if it is defined, or removes the
   * parent for v if p is undefined. Method throws an exception in case of
   * invoking it in context of noncompound graph.
   * Average-case complexity: O(1).
   */
  setParent(t, n) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (n === void 0)
      n = Lt;
    else {
      n += "";
      for (var r = n; r !== void 0; r = this.parent(r))
        if (r === t)
          throw new Error("Setting " + n + " as parent of " + t + " would create a cycle");
      this.setNode(n);
    }
    return this.setNode(t), this._removeFromParentsChildList(t), this._parent[t] = n, this._children[n][t] = !0, this;
  }
  _removeFromParentsChildList(t) {
    delete this._children[this._parent[t]][t];
  }
  /**
   * Gets parent node for node v.
   * Complexity: O(1).
   */
  parent(t) {
    if (this._isCompound) {
      var n = this._parent[t];
      if (n !== Lt)
        return n;
    }
  }
  /**
   * Gets list of direct children of node v.
   * Complexity: O(1).
   */
  children(t = Lt) {
    if (this._isCompound) {
      var n = this._children[t];
      if (n)
        return Object.keys(n);
    } else {
      if (t === Lt)
        return this.nodes();
      if (this.hasNode(t))
        return [];
    }
  }
  /**
   * Return all nodes that are predecessors of the specified node or undefined if node v is not in
   * the graph. Behavior is undefined for undirected graphs - use neighbors instead.
   * Complexity: O(|V|).
   */
  predecessors(t) {
    var n = this._preds[t];
    if (n)
      return Object.keys(n);
  }
  /**
   * Return all nodes that are successors of the specified node or undefined if node v is not in
   * the graph. Behavior is undefined for undirected graphs - use neighbors instead.
   * Complexity: O(|V|).
   */
  successors(t) {
    var n = this._sucs[t];
    if (n)
      return Object.keys(n);
  }
  /**
   * Return all nodes that are predecessors or successors of the specified node or undefined if
   * node v is not in the graph.
   * Complexity: O(|V|).
   */
  neighbors(t) {
    var n = this.predecessors(t);
    if (n) {
      const o = new Set(n);
      for (var r of this.successors(t))
        o.add(r);
      return Array.from(o.values());
    }
  }
  isLeaf(t) {
    var n;
    return this.isDirected() ? n = this.successors(t) : n = this.neighbors(t), n.length === 0;
  }
  /**
   * Creates new graph with nodes filtered via filter. Edges incident to rejected node
   * are also removed. In case of compound graph, if parent is rejected by filter,
   * than all its children are rejected too.
   * Average-case complexity: O(|E|+|V|).
   */
  filterNodes(t) {
    var n = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    n.setGraph(this.graph());
    var r = this;
    Object.entries(this._nodes).forEach(function([s, a]) {
      t(s) && n.setNode(s, a);
    }), Object.values(this._edgeObjs).forEach(function(s) {
      n.hasNode(s.v) && n.hasNode(s.w) && n.setEdge(s, r.edge(s));
    });
    var o = {};
    function i(s) {
      var a = r.parent(s);
      return a === void 0 || n.hasNode(a) ? (o[s] = a, a) : a in o ? o[a] : i(a);
    }
    return this._isCompound && n.nodes().forEach((s) => n.setParent(s, i(s))), n;
  }
  /* === Edge functions ========== */
  /**
   * Sets the default edge label or factory function. This label will be
   * assigned as default label in case if no label was specified while setting
   * an edge or this function will be invoked each time when setting an edge
   * with no label specified and returned value * will be used as a label for edge.
   * Complexity: O(1).
   */
  setDefaultEdgeLabel(t) {
    return this._defaultEdgeLabelFn = t, typeof t != "function" && (this._defaultEdgeLabelFn = () => t), this;
  }
  /**
   * Gets the number of edges in the graph.
   * Complexity: O(1).
   */
  edgeCount() {
    return this._edgeCount;
  }
  /**
   * Gets edges of the graph. In case of compound graph subgraphs are not considered.
   * Complexity: O(|E|).
   */
  edges() {
    return Object.values(this._edgeObjs);
  }
  /**
   * Establish an edges path over the nodes in nodes list. If some edge is already
   * exists, it will update its label, otherwise it will create an edge between pair
   * of nodes with label provided or default label if no label provided.
   * Complexity: O(|nodes|).
   */
  setPath(t, n) {
    var r = this, o = arguments;
    return t.reduce(function(i, s) {
      return o.length > 1 ? r.setEdge(i, s, n) : r.setEdge(i, s), s;
    }), this;
  }
  /**
   * Creates or updates the label for the edge (v, w) with the optionally supplied
   * name. If label is supplied it is set as the value for the edge. If label is not
   * supplied and the edge was created by this call then the default edge label will
   * be assigned. The name parameter is only useful with multigraphs.
   */
  setEdge() {
    var t, n, r, o, i = !1, s = arguments[0];
    typeof s == "object" && s !== null && "v" in s ? (t = s.v, n = s.w, r = s.name, arguments.length === 2 && (o = arguments[1], i = !0)) : (t = s, n = arguments[1], r = arguments[3], arguments.length > 2 && (o = arguments[2], i = !0)), t = "" + t, n = "" + n, r !== void 0 && (r = "" + r);
    var a = i1(this._isDirected, t, n, r);
    if (Object.hasOwn(this._edgeLabels, a))
      return i && (this._edgeLabels[a] = o), this;
    if (r !== void 0 && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(t), this.setNode(n), this._edgeLabels[a] = i ? o : this._defaultEdgeLabelFn(t, n, r);
    var l = cf(this._isDirected, t, n, r);
    return t = l.v, n = l.w, Object.freeze(l), this._edgeObjs[a] = l, I5(this._preds[n], t), I5(this._sucs[t], n), this._in[n][a] = l, this._out[t][a] = l, this._edgeCount++, this;
  }
  /**
   * Gets the label for the specified edge.
   * Complexity: O(1).
   */
  edge(t, n, r) {
    var o = arguments.length === 1 ? u3(this._isDirected, arguments[0]) : i1(this._isDirected, t, n, r);
    return this._edgeLabels[o];
  }
  /**
   * Gets the label for the specified edge and converts it to an object.
   * Complexity: O(1)
   */
  edgeAsObj() {
    const t = this.edge(...arguments);
    return typeof t != "object" ? { label: t } : t;
  }
  /**
   * Detects whether the graph contains specified edge or not. No subgraphs are considered.
   * Complexity: O(1).
   */
  hasEdge(t, n, r) {
    var o = arguments.length === 1 ? u3(this._isDirected, arguments[0]) : i1(this._isDirected, t, n, r);
    return Object.hasOwn(this._edgeLabels, o);
  }
  /**
   * Removes the specified edge from the graph. No subgraphs are considered.
   * Complexity: O(1).
   */
  removeEdge(t, n, r) {
    var o = arguments.length === 1 ? u3(this._isDirected, arguments[0]) : i1(this._isDirected, t, n, r), i = this._edgeObjs[o];
    return i && (t = i.v, n = i.w, delete this._edgeLabels[o], delete this._edgeObjs[o], R5(this._preds[n], t), R5(this._sucs[t], n), delete this._in[n][o], delete this._out[t][o], this._edgeCount--), this;
  }
  /**
   * Return all edges that point to the node v. Optionally filters those edges down to just those
   * coming from node u. Behavior is undefined for undirected graphs - use nodeEdges instead.
   * Complexity: O(|E|).
   */
  inEdges(t, n) {
    var r = this._in[t];
    if (r) {
      var o = Object.values(r);
      return n ? o.filter((i) => i.v === n) : o;
    }
  }
  /**
   * Return all edges that are pointed at by node v. Optionally filters those edges down to just
   * those point to w. Behavior is undefined for undirected graphs - use nodeEdges instead.
   * Complexity: O(|E|).
   */
  outEdges(t, n) {
    var r = this._out[t];
    if (r) {
      var o = Object.values(r);
      return n ? o.filter((i) => i.w === n) : o;
    }
  }
  /**
   * Returns all edges to or from node v regardless of direction. Optionally filters those edges
   * down to just those between nodes v and w regardless of direction.
   * Complexity: O(|E|).
   */
  nodeEdges(t, n) {
    var r = this.inEdges(t, n);
    if (r)
      return r.concat(this.outEdges(t, n));
  }
};
function I5(e, t) {
  e[t] ? e[t]++ : e[t] = 1;
}
function R5(e, t) {
  --e[t] || delete e[t];
}
function i1(e, t, n, r) {
  var o = "" + t, i = "" + n;
  if (!e && o > i) {
    var s = o;
    o = i, i = s;
  }
  return o + Z5 + i + Z5 + (r === void 0 ? af : r);
}
function cf(e, t, n, r) {
  var o = "" + t, i = "" + n;
  if (!e && o > i) {
    var s = o;
    o = i, i = s;
  }
  var a = { v: o, w: i };
  return r && (a.name = r), a;
}
function u3(e, t) {
  return i1(e, t.v, t.w, t.name);
}
var an = lf, uf = "2.2.4", df = {
  Graph: an,
  version: uf
}, ff = an, hf = {
  write: gf,
  read: Lf
};
function gf(e) {
  var t = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: Cf(e),
    edges: pf(e)
  };
  return e.graph() !== void 0 && (t.value = structuredClone(e.graph())), t;
}
function Cf(e) {
  return e.nodes().map(function(t) {
    var n = e.node(t), r = e.parent(t), o = { v: t };
    return n !== void 0 && (o.value = n), r !== void 0 && (o.parent = r), o;
  });
}
function pf(e) {
  return e.edges().map(function(t) {
    var n = e.edge(t), r = { v: t.v, w: t.w };
    return t.name !== void 0 && (r.name = t.name), n !== void 0 && (r.value = n), r;
  });
}
function Lf(e) {
  var t = new ff(e.options).setGraph(e.value);
  return e.nodes.forEach(function(n) {
    t.setNode(n.v, n.value), n.parent && t.setParent(n.v, n.parent);
  }), e.edges.forEach(function(n) {
    t.setEdge({ v: n.v, w: n.w, name: n.name }, n.value);
  }), t;
}
var mf = wf;
function wf(e) {
  var t = {}, n = [], r;
  function o(i) {
    Object.hasOwn(t, i) || (t[i] = !0, r.push(i), e.successors(i).forEach(o), e.predecessors(i).forEach(o));
  }
  return e.nodes().forEach(function(i) {
    r = [], o(i), r.length && n.push(r);
  }), n;
}
let xf = class {
  constructor() {
    Le(this, "_arr", []);
    Le(this, "_keyIndices", {});
  }
  /**
   * Returns the number of elements in the queue. Takes `O(1)` time.
   */
  size() {
    return this._arr.length;
  }
  /**
   * Returns the keys that are in the queue. Takes `O(n)` time.
   */
  keys() {
    return this._arr.map(function(t) {
      return t.key;
    });
  }
  /**
   * Returns `true` if **key** is in the queue and `false` if not.
   */
  has(t) {
    return Object.hasOwn(this._keyIndices, t);
  }
  /**
   * Returns the priority for **key**. If **key** is not present in the queue
   * then this function returns `undefined`. Takes `O(1)` time.
   *
   * @param {Object} key
   */
  priority(t) {
    var n = this._keyIndices[t];
    if (n !== void 0)
      return this._arr[n].priority;
  }
  /**
   * Returns the key for the minimum element in this queue. If the queue is
   * empty this function throws an Error. Takes `O(1)` time.
   */
  min() {
    if (this.size() === 0)
      throw new Error("Queue underflow");
    return this._arr[0].key;
  }
  /**
   * Inserts a new key into the priority queue. If the key already exists in
   * the queue this function returns `false`; otherwise it will return `true`.
   * Takes `O(n)` time.
   *
   * @param {Object} key the key to add
   * @param {Number} priority the initial priority for the key
   */
  add(t, n) {
    var r = this._keyIndices;
    if (t = String(t), !Object.hasOwn(r, t)) {
      var o = this._arr, i = o.length;
      return r[t] = i, o.push({ key: t, priority: n }), this._decrease(i), !0;
    }
    return !1;
  }
  /**
   * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
   */
  removeMin() {
    this._swap(0, this._arr.length - 1);
    var t = this._arr.pop();
    return delete this._keyIndices[t.key], this._heapify(0), t.key;
  }
  /**
   * Decreases the priority for **key** to **priority**. If the new priority is
   * greater than the previous priority, this function will throw an Error.
   *
   * @param {Object} key the key for which to raise priority
   * @param {Number} priority the new priority for the key
   */
  decrease(t, n) {
    var r = this._keyIndices[t];
    if (n > this._arr[r].priority)
      throw new Error("New priority is greater than current priority. Key: " + t + " Old: " + this._arr[r].priority + " New: " + n);
    this._arr[r].priority = n, this._decrease(r);
  }
  _heapify(t) {
    var n = this._arr, r = 2 * t, o = r + 1, i = t;
    r < n.length && (i = n[r].priority < n[i].priority ? r : i, o < n.length && (i = n[o].priority < n[i].priority ? o : i), i !== t && (this._swap(t, i), this._heapify(i)));
  }
  _decrease(t) {
    for (var n = this._arr, r = n[t].priority, o; t !== 0 && (o = t >> 1, !(n[o].priority < r)); )
      this._swap(t, o), t = o;
  }
  _swap(t, n) {
    var r = this._arr, o = this._keyIndices, i = r[t], s = r[n];
    r[t] = s, r[n] = i, o[s.key] = t, o[i.key] = n;
  }
};
var $8 = xf, vf = $8, T8 = bf, yf = () => 1;
function bf(e, t, n, r) {
  return Ef(
    e,
    String(t),
    n || yf,
    r || function(o) {
      return e.outEdges(o);
    }
  );
}
function Ef(e, t, n, r) {
  var o = {}, i = new vf(), s, a, l = function(c) {
    var u = c.v !== s ? c.v : c.w, d = o[u], f = n(c), h = a.distance + f;
    if (f < 0)
      throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + c + " Weight: " + f);
    h < d.distance && (d.distance = h, d.predecessor = s, i.decrease(u, h));
  };
  for (e.nodes().forEach(function(c) {
    var u = c === t ? 0 : Number.POSITIVE_INFINITY;
    o[c] = { distance: u }, i.add(c, u);
  }); i.size() > 0 && (s = i.removeMin(), a = o[s], a.distance !== Number.POSITIVE_INFINITY); )
    r(s).forEach(l);
  return o;
}
var Sf = T8, Mf = _f;
function _f(e, t, n) {
  return e.nodes().reduce(function(r, o) {
    return r[o] = Sf(e, o, t, n), r;
  }, {});
}
var F8 = kf;
function kf(e) {
  var t = 0, n = [], r = {}, o = [];
  function i(s) {
    var a = r[s] = {
      onStack: !0,
      lowlink: t,
      index: t++
    };
    if (n.push(s), e.successors(s).forEach(function(u) {
      Object.hasOwn(r, u) ? r[u].onStack && (a.lowlink = Math.min(a.lowlink, r[u].index)) : (i(u), a.lowlink = Math.min(a.lowlink, r[u].lowlink));
    }), a.lowlink === a.index) {
      var l = [], c;
      do
        c = n.pop(), r[c].onStack = !1, l.push(c);
      while (s !== c);
      o.push(l);
    }
  }
  return e.nodes().forEach(function(s) {
    Object.hasOwn(r, s) || i(s);
  }), o;
}
var Nf = F8, Zf = If;
function If(e) {
  return Nf(e).filter(function(t) {
    return t.length > 1 || t.length === 1 && e.hasEdge(t[0], t[0]);
  });
}
var Rf = Of, Af = () => 1;
function Of(e, t, n) {
  return $f(
    e,
    t || Af,
    n || function(r) {
      return e.outEdges(r);
    }
  );
}
function $f(e, t, n) {
  var r = {}, o = e.nodes();
  return o.forEach(function(i) {
    r[i] = {}, r[i][i] = { distance: 0 }, o.forEach(function(s) {
      i !== s && (r[i][s] = { distance: Number.POSITIVE_INFINITY });
    }), n(i).forEach(function(s) {
      var a = s.v === i ? s.w : s.v, l = t(s);
      r[i][a] = { distance: l, predecessor: i };
    });
  }), o.forEach(function(i) {
    var s = r[i];
    o.forEach(function(a) {
      var l = r[a];
      o.forEach(function(c) {
        var u = l[i], d = s[c], f = l[c], h = u.distance + d.distance;
        h < f.distance && (f.distance = h, f.predecessor = d.predecessor);
      });
    });
  }), r;
}
function P8(e) {
  var t = {}, n = {}, r = [];
  function o(i) {
    if (Object.hasOwn(n, i))
      throw new P3();
    Object.hasOwn(t, i) || (n[i] = !0, t[i] = !0, e.predecessors(i).forEach(o), delete n[i], r.push(i));
  }
  if (e.sinks().forEach(o), Object.keys(t).length !== e.nodeCount())
    throw new P3();
  return r;
}
class P3 extends Error {
  constructor() {
    super(...arguments);
  }
}
var j8 = P8;
P8.CycleException = P3;
var A5 = j8, Tf = Ff;
function Ff(e) {
  try {
    A5(e);
  } catch (t) {
    if (t instanceof A5.CycleException)
      return !1;
    throw t;
  }
  return !0;
}
var D8 = Pf;
function Pf(e, t, n) {
  Array.isArray(t) || (t = [t]);
  var r = e.isDirected() ? (a) => e.successors(a) : (a) => e.neighbors(a), o = n === "post" ? jf : Df, i = [], s = {};
  return t.forEach((a) => {
    if (!e.hasNode(a))
      throw new Error("Graph does not have node: " + a);
    o(a, r, s, i);
  }), i;
}
function jf(e, t, n, r) {
  for (var o = [[e, !1]]; o.length > 0; ) {
    var i = o.pop();
    i[1] ? r.push(i[0]) : Object.hasOwn(n, i[0]) || (n[i[0]] = !0, o.push([i[0], !0]), V8(t(i[0]), (s) => o.push([s, !1])));
  }
}
function Df(e, t, n, r) {
  for (var o = [e]; o.length > 0; ) {
    var i = o.pop();
    Object.hasOwn(n, i) || (n[i] = !0, r.push(i), V8(t(i), (s) => o.push(s)));
  }
}
function V8(e, t) {
  for (var n = e.length; n--; )
    t(e[n], n, e);
  return e;
}
var Vf = D8, Hf = Bf;
function Bf(e, t) {
  return Vf(e, t, "post");
}
var Wf = D8, zf = Xf;
function Xf(e, t) {
  return Wf(e, t, "pre");
}
var Gf = an, Yf = $8, qf = Uf;
function Uf(e, t) {
  var n = new Gf(), r = {}, o = new Yf(), i;
  function s(l) {
    var c = l.v === i ? l.w : l.v, u = o.priority(c);
    if (u !== void 0) {
      var d = t(l);
      d < u && (r[c] = i, o.decrease(c, d));
    }
  }
  if (e.nodeCount() === 0)
    return n;
  e.nodes().forEach(function(l) {
    o.add(l, Number.POSITIVE_INFINITY), n.setNode(l);
  }), o.decrease(e.nodes()[0], 0);
  for (var a = !1; o.size() > 0; ) {
    if (i = o.removeMin(), Object.hasOwn(r, i))
      n.setEdge(i, r[i]);
    else {
      if (a)
        throw new Error("Input graph is not connected: " + e);
      a = !0;
    }
    e.nodeEdges(i).forEach(s);
  }
  return n;
}
var Kf = {
  components: mf,
  dijkstra: T8,
  dijkstraAll: Mf,
  findCycles: Zf,
  floydWarshall: Rf,
  isAcyclic: Tf,
  postorder: Hf,
  preorder: zf,
  prim: qf,
  tarjan: F8,
  topsort: j8
}, O5 = df, Ye = {
  Graph: O5.Graph,
  json: hf,
  alg: Kf,
  version: O5.version
};
let Qf = class {
  constructor() {
    let t = {};
    t._next = t._prev = t, this._sentinel = t;
  }
  dequeue() {
    let t = this._sentinel, n = t._prev;
    if (n !== t)
      return $5(n), n;
  }
  enqueue(t) {
    let n = this._sentinel;
    t._prev && t._next && $5(t), t._next = n._next, n._next._prev = t, n._next = t, t._prev = n;
  }
  toString() {
    let t = [], n = this._sentinel, r = n._prev;
    for (; r !== n; )
      t.push(JSON.stringify(r, Jf)), r = r._prev;
    return "[" + t.join(", ") + "]";
  }
};
function $5(e) {
  e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
}
function Jf(e, t) {
  if (e !== "_next" && e !== "_prev")
    return t;
}
var eh = Qf;
let th = Ye.Graph, nh = eh;
var rh = ih;
let oh = () => 1;
function ih(e, t) {
  if (e.nodeCount() <= 1)
    return [];
  let n = ah(e, t || oh);
  return sh(n.graph, n.buckets, n.zeroIdx).flatMap((o) => e.outEdges(o.v, o.w));
}
function sh(e, t, n) {
  let r = [], o = t[t.length - 1], i = t[0], s;
  for (; e.nodeCount(); ) {
    for (; s = i.dequeue(); )
      d3(e, t, n, s);
    for (; s = o.dequeue(); )
      d3(e, t, n, s);
    if (e.nodeCount()) {
      for (let a = t.length - 2; a > 0; --a)
        if (s = t[a].dequeue(), s) {
          r = r.concat(d3(e, t, n, s, !0));
          break;
        }
    }
  }
  return r;
}
function d3(e, t, n, r, o) {
  let i = o ? [] : void 0;
  return e.inEdges(r.v).forEach((s) => {
    let a = e.edge(s), l = e.node(s.v);
    o && i.push({ v: s.v, w: s.w }), l.out -= a, j3(t, n, l);
  }), e.outEdges(r.v).forEach((s) => {
    let a = e.edge(s), l = s.w, c = e.node(l);
    c.in -= a, j3(t, n, c);
  }), e.removeNode(r.v), i;
}
function ah(e, t) {
  let n = new th(), r = 0, o = 0;
  e.nodes().forEach((a) => {
    n.setNode(a, { v: a, in: 0, out: 0 });
  }), e.edges().forEach((a) => {
    let l = n.edge(a.v, a.w) || 0, c = t(a), u = l + c;
    n.setEdge(a.v, a.w, u), o = Math.max(o, n.node(a.v).out += c), r = Math.max(r, n.node(a.w).in += c);
  });
  let i = lh(o + r + 3).map(() => new nh()), s = r + 1;
  return n.nodes().forEach((a) => {
    j3(i, s, n.node(a));
  }), { graph: n, buckets: i, zeroIdx: s };
}
function j3(e, t, n) {
  n.out ? n.in ? e[n.out - n.in + t].enqueue(n) : e[e.length - 1].enqueue(n) : e[0].enqueue(n);
}
function lh(e) {
  const t = [];
  for (let n = 0; n < e; n++)
    t.push(n);
  return t;
}
let H8 = Ye.Graph;
var _e = {
  addBorderNode: Lh,
  addDummyNode: B8,
  applyWithChunking: _2,
  asNonCompoundGraph: uh,
  buildLayerMatrix: gh,
  intersectRect: hh,
  mapValues: Eh,
  maxRank: z8,
  normalizeRanks: Ch,
  notime: vh,
  partition: wh,
  pick: bh,
  predecessorWeights: fh,
  range: G8,
  removeEmptyRanks: ph,
  simplify: ch,
  successorWeights: dh,
  time: xh,
  uniqueId: X8,
  zipObject: ln
};
function B8(e, t, n, r) {
  for (var o = r; e.hasNode(o); )
    o = X8(r);
  return n.dummy = t, e.setNode(o, n), o;
}
function ch(e) {
  let t = new H8().setGraph(e.graph());
  return e.nodes().forEach((n) => t.setNode(n, e.node(n))), e.edges().forEach((n) => {
    let r = t.edge(n.v, n.w) || { weight: 0, minlen: 1 }, o = e.edge(n);
    t.setEdge(n.v, n.w, {
      weight: r.weight + o.weight,
      minlen: Math.max(r.minlen, o.minlen)
    });
  }), t;
}
function uh(e) {
  let t = new H8({ multigraph: e.isMultigraph() }).setGraph(e.graph());
  return e.nodes().forEach((n) => {
    e.children(n).length || t.setNode(n, e.node(n));
  }), e.edges().forEach((n) => {
    t.setEdge(n, e.edge(n));
  }), t;
}
function dh(e) {
  let t = e.nodes().map((n) => {
    let r = {};
    return e.outEdges(n).forEach((o) => {
      r[o.w] = (r[o.w] || 0) + e.edge(o).weight;
    }), r;
  });
  return ln(e.nodes(), t);
}
function fh(e) {
  let t = e.nodes().map((n) => {
    let r = {};
    return e.inEdges(n).forEach((o) => {
      r[o.v] = (r[o.v] || 0) + e.edge(o).weight;
    }), r;
  });
  return ln(e.nodes(), t);
}
function hh(e, t) {
  let n = e.x, r = e.y, o = t.x - n, i = t.y - r, s = e.width / 2, a = e.height / 2;
  if (!o && !i)
    throw new Error("Not possible to find intersection inside of the rectangle");
  let l, c;
  return Math.abs(i) * s > Math.abs(o) * a ? (i < 0 && (a = -a), l = a * o / i, c = a) : (o < 0 && (s = -s), l = s, c = s * i / o), { x: n + l, y: r + c };
}
function gh(e) {
  let t = G8(z8(e) + 1).map(() => []);
  return e.nodes().forEach((n) => {
    let r = e.node(n), o = r.rank;
    o !== void 0 && (t[o][r.order] = n);
  }), t;
}
function Ch(e) {
  let t = e.nodes().map((r) => {
    let o = e.node(r).rank;
    return o === void 0 ? Number.MAX_VALUE : o;
  }), n = _2(Math.min, t);
  e.nodes().forEach((r) => {
    let o = e.node(r);
    Object.hasOwn(o, "rank") && (o.rank -= n);
  });
}
function ph(e) {
  let t = e.nodes().map((s) => e.node(s).rank), n = _2(Math.min, t), r = [];
  e.nodes().forEach((s) => {
    let a = e.node(s).rank - n;
    r[a] || (r[a] = []), r[a].push(s);
  });
  let o = 0, i = e.graph().nodeRankFactor;
  Array.from(r).forEach((s, a) => {
    s === void 0 && a % i !== 0 ? --o : s !== void 0 && o && s.forEach((l) => e.node(l).rank += o);
  });
}
function Lh(e, t, n, r) {
  let o = {
    width: 0,
    height: 0
  };
  return arguments.length >= 4 && (o.rank = n, o.order = r), B8(e, "border", o, t);
}
function mh(e, t = W8) {
  const n = [];
  for (let r = 0; r < e.length; r += t) {
    const o = e.slice(r, r + t);
    n.push(o);
  }
  return n;
}
const W8 = 65535;
function _2(e, t) {
  if (t.length > W8) {
    const n = mh(t);
    return e.apply(null, n.map((r) => e.apply(null, r)));
  } else
    return e.apply(null, t);
}
function z8(e) {
  const n = e.nodes().map((r) => {
    let o = e.node(r).rank;
    return o === void 0 ? Number.MIN_VALUE : o;
  });
  return _2(Math.max, n);
}
function wh(e, t) {
  let n = { lhs: [], rhs: [] };
  return e.forEach((r) => {
    t(r) ? n.lhs.push(r) : n.rhs.push(r);
  }), n;
}
function xh(e, t) {
  let n = Date.now();
  try {
    return t();
  } finally {
    console.log(e + " time: " + (Date.now() - n) + "ms");
  }
}
function vh(e, t) {
  return t();
}
let yh = 0;
function X8(e) {
  var t = ++yh;
  return e + ("" + t);
}
function G8(e, t, n = 1) {
  t == null && (t = e, e = 0);
  let r = (i) => i < t;
  n < 0 && (r = (i) => t < i);
  const o = [];
  for (let i = e; r(i); i += n)
    o.push(i);
  return o;
}
function bh(e, t) {
  const n = {};
  for (const r of t)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function Eh(e, t) {
  let n = t;
  return typeof t == "string" && (n = (r) => r[t]), Object.entries(e).reduce((r, [o, i]) => (r[o] = n(i, o), r), {});
}
function ln(e, t) {
  return e.reduce((n, r, o) => (n[r] = t[o], n), {});
}
let Sh = rh, Mh = _e.uniqueId;
var _h = {
  run: kh,
  undo: Zh
};
function kh(e) {
  (e.graph().acyclicer === "greedy" ? Sh(e, n(e)) : Nh(e)).forEach((r) => {
    let o = e.edge(r);
    e.removeEdge(r), o.forwardName = r.name, o.reversed = !0, e.setEdge(r.w, r.v, o, Mh("rev"));
  });
  function n(r) {
    return (o) => r.edge(o).weight;
  }
}
function Nh(e) {
  let t = [], n = {}, r = {};
  function o(i) {
    Object.hasOwn(r, i) || (r[i] = !0, n[i] = !0, e.outEdges(i).forEach((s) => {
      Object.hasOwn(n, s.w) ? t.push(s) : o(s.w);
    }), delete n[i]);
  }
  return e.nodes().forEach(o), t;
}
function Zh(e) {
  e.edges().forEach((t) => {
    let n = e.edge(t);
    if (n.reversed) {
      e.removeEdge(t);
      let r = n.forwardName;
      delete n.reversed, delete n.forwardName, e.setEdge(t.w, t.v, n, r);
    }
  });
}
let Ih = _e;
var Rh = {
  run: Ah,
  undo: $h
};
function Ah(e) {
  e.graph().dummyChains = [], e.edges().forEach((t) => Oh(e, t));
}
function Oh(e, t) {
  let n = t.v, r = e.node(n).rank, o = t.w, i = e.node(o).rank, s = t.name, a = e.edge(t), l = a.labelRank;
  if (i === r + 1) return;
  e.removeEdge(t);
  let c, u, d;
  for (d = 0, ++r; r < i; ++d, ++r)
    a.points = [], u = {
      width: 0,
      height: 0,
      edgeLabel: a,
      edgeObj: t,
      rank: r
    }, c = Ih.addDummyNode(e, "edge", u, "_d"), r === l && (u.width = a.width, u.height = a.height, u.dummy = "edge-label", u.labelpos = a.labelpos), e.setEdge(n, c, { weight: a.weight }, s), d === 0 && e.graph().dummyChains.push(c), n = c;
  e.setEdge(n, o, { weight: a.weight }, s);
}
function $h(e) {
  e.graph().dummyChains.forEach((t) => {
    let n = e.node(t), r = n.edgeLabel, o;
    for (e.setEdge(n.edgeObj, r); n.dummy; )
      o = e.successors(t)[0], e.removeNode(t), r.points.push({ x: n.x, y: n.y }), n.dummy === "edge-label" && (r.x = n.x, r.y = n.y, r.width = n.width, r.height = n.height), t = o, n = e.node(t);
  });
}
const { applyWithChunking: Th } = _e;
var k2 = {
  longestPath: Fh,
  slack: Ph
};
function Fh(e) {
  var t = {};
  function n(r) {
    var o = e.node(r);
    if (Object.hasOwn(t, r))
      return o.rank;
    t[r] = !0;
    let i = e.outEdges(r).map((a) => a == null ? Number.POSITIVE_INFINITY : n(a.w) - e.edge(a).minlen);
    var s = Th(Math.min, i);
    return s === Number.POSITIVE_INFINITY && (s = 0), o.rank = s;
  }
  e.sources().forEach(n);
}
function Ph(e, t) {
  return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen;
}
var jh = Ye.Graph, c2 = k2.slack, Y8 = Dh;
function Dh(e) {
  var t = new jh({ directed: !1 }), n = e.nodes()[0], r = e.nodeCount();
  t.setNode(n, {});
  for (var o, i; Vh(t, e) < r; )
    o = Hh(t, e), i = t.hasNode(o.v) ? c2(e, o) : -c2(e, o), Bh(t, e, i);
  return t;
}
function Vh(e, t) {
  function n(r) {
    t.nodeEdges(r).forEach((o) => {
      var i = o.v, s = r === i ? o.w : i;
      !e.hasNode(s) && !c2(t, o) && (e.setNode(s, {}), e.setEdge(r, s, {}), n(s));
    });
  }
  return e.nodes().forEach(n), e.nodeCount();
}
function Hh(e, t) {
  return t.edges().reduce((r, o) => {
    let i = Number.POSITIVE_INFINITY;
    return e.hasNode(o.v) !== e.hasNode(o.w) && (i = c2(t, o)), i < r[0] ? [i, o] : r;
  }, [Number.POSITIVE_INFINITY, null])[1];
}
function Bh(e, t, n) {
  e.nodes().forEach((r) => t.node(r).rank += n);
}
var Wh = Y8, T5 = k2.slack, zh = k2.longestPath, Xh = Ye.alg.preorder, Gh = Ye.alg.postorder, Yh = _e.simplify, qh = Nt;
Nt.initLowLimValues = un;
Nt.initCutValues = cn;
Nt.calcCutValue = q8;
Nt.leaveEdge = K8;
Nt.enterEdge = Q8;
Nt.exchangeEdges = J8;
function Nt(e) {
  e = Yh(e), zh(e);
  var t = Wh(e);
  un(t), cn(t, e);
  for (var n, r; n = K8(t); )
    r = Q8(t, e, n), J8(t, e, n, r);
}
function cn(e, t) {
  var n = Gh(e, e.nodes());
  n = n.slice(0, n.length - 1), n.forEach((r) => Uh(e, t, r));
}
function Uh(e, t, n) {
  var r = e.node(n), o = r.parent;
  e.edge(n, o).cutvalue = q8(e, t, n);
}
function q8(e, t, n) {
  var r = e.node(n), o = r.parent, i = !0, s = t.edge(n, o), a = 0;
  return s || (i = !1, s = t.edge(o, n)), a = s.weight, t.nodeEdges(n).forEach((l) => {
    var c = l.v === n, u = c ? l.w : l.v;
    if (u !== o) {
      var d = c === i, f = t.edge(l).weight;
      if (a += d ? f : -f, Qh(e, n, u)) {
        var h = e.edge(n, u).cutvalue;
        a += d ? -h : h;
      }
    }
  }), a;
}
function un(e, t) {
  arguments.length < 2 && (t = e.nodes()[0]), U8(e, {}, 1, t);
}
function U8(e, t, n, r, o) {
  var i = n, s = e.node(r);
  return t[r] = !0, e.neighbors(r).forEach((a) => {
    Object.hasOwn(t, a) || (n = U8(e, t, n, a, r));
  }), s.low = i, s.lim = n++, o ? s.parent = o : delete s.parent, n;
}
function K8(e) {
  return e.edges().find((t) => e.edge(t).cutvalue < 0);
}
function Q8(e, t, n) {
  var r = n.v, o = n.w;
  t.hasEdge(r, o) || (r = n.w, o = n.v);
  var i = e.node(r), s = e.node(o), a = i, l = !1;
  i.lim > s.lim && (a = s, l = !0);
  var c = t.edges().filter((u) => l === F5(e, e.node(u.v), a) && l !== F5(e, e.node(u.w), a));
  return c.reduce((u, d) => T5(t, d) < T5(t, u) ? d : u);
}
function J8(e, t, n, r) {
  var o = n.v, i = n.w;
  e.removeEdge(o, i), e.setEdge(r.v, r.w, {}), un(e), cn(e, t), Kh(e, t);
}
function Kh(e, t) {
  var n = e.nodes().find((o) => !t.node(o).parent), r = Xh(e, n);
  r = r.slice(1), r.forEach((o) => {
    var i = e.node(o).parent, s = t.edge(o, i), a = !1;
    s || (s = t.edge(i, o), a = !0), t.node(o).rank = t.node(i).rank + (a ? s.minlen : -s.minlen);
  });
}
function Qh(e, t, n) {
  return e.hasEdge(t, n);
}
function F5(e, t, n) {
  return n.low <= t.lim && t.lim <= n.lim;
}
var Jh = k2, er = Jh.longestPath, eg = Y8, tg = qh, ng = rg;
function rg(e) {
  var t = e.graph().ranker;
  if (t instanceof Function)
    return t(e);
  switch (e.graph().ranker) {
    case "network-simplex":
      P5(e);
      break;
    case "tight-tree":
      ig(e);
      break;
    case "longest-path":
      og(e);
      break;
    case "none":
      break;
    default:
      P5(e);
  }
}
var og = er;
function ig(e) {
  er(e), eg(e);
}
function P5(e) {
  tg(e);
}
var sg = ag;
function ag(e) {
  let t = cg(e);
  e.graph().dummyChains.forEach((n) => {
    let r = e.node(n), o = r.edgeObj, i = lg(e, t, o.v, o.w), s = i.path, a = i.lca, l = 0, c = s[l], u = !0;
    for (; n !== o.w; ) {
      if (r = e.node(n), u) {
        for (; (c = s[l]) !== a && e.node(c).maxRank < r.rank; )
          l++;
        c === a && (u = !1);
      }
      if (!u) {
        for (; l < s.length - 1 && e.node(c = s[l + 1]).minRank <= r.rank; )
          l++;
        c = s[l];
      }
      e.setParent(n, c), n = e.successors(n)[0];
    }
  });
}
function lg(e, t, n, r) {
  let o = [], i = [], s = Math.min(t[n].low, t[r].low), a = Math.max(t[n].lim, t[r].lim), l, c;
  l = n;
  do
    l = e.parent(l), o.push(l);
  while (l && (t[l].low > s || a > t[l].lim));
  for (c = l, l = r; (l = e.parent(l)) !== c; )
    i.push(l);
  return { path: o.concat(i.reverse()), lca: c };
}
function cg(e) {
  let t = {}, n = 0;
  function r(o) {
    let i = n;
    e.children(o).forEach(r), t[o] = { low: i, lim: n++ };
  }
  return e.children().forEach(r), t;
}
let u2 = _e;
var ug = {
  run: dg,
  cleanup: gg
};
function dg(e) {
  let t = u2.addDummyNode(e, "root", {}, "_root"), n = fg(e), r = Object.values(n), o = u2.applyWithChunking(Math.max, r) - 1, i = 2 * o + 1;
  e.graph().nestingRoot = t, e.edges().forEach((a) => e.edge(a).minlen *= i);
  let s = hg(e) + 1;
  e.children().forEach((a) => tr(e, t, i, s, o, n, a)), e.graph().nodeRankFactor = i;
}
function tr(e, t, n, r, o, i, s) {
  let a = e.children(s);
  if (!a.length) {
    s !== t && e.setEdge(t, s, { weight: 0, minlen: n });
    return;
  }
  let l = u2.addBorderNode(e, "_bt"), c = u2.addBorderNode(e, "_bb"), u = e.node(s);
  e.setParent(l, s), u.borderTop = l, e.setParent(c, s), u.borderBottom = c, a.forEach((d) => {
    tr(e, t, n, r, o, i, d);
    let f = e.node(d), h = f.borderTop ? f.borderTop : d, C = f.borderBottom ? f.borderBottom : d, g = f.borderTop ? r : 2 * r, v = h !== C ? 1 : o - i[s] + 1;
    e.setEdge(l, h, {
      weight: g,
      minlen: v,
      nestingEdge: !0
    }), e.setEdge(C, c, {
      weight: g,
      minlen: v,
      nestingEdge: !0
    });
  }), e.parent(s) || e.setEdge(t, l, { weight: 0, minlen: o + i[s] });
}
function fg(e) {
  var t = {};
  function n(r, o) {
    var i = e.children(r);
    i && i.length && i.forEach((s) => n(s, o + 1)), t[r] = o;
  }
  return e.children().forEach((r) => n(r, 1)), t;
}
function hg(e) {
  return e.edges().reduce((t, n) => t + e.edge(n).weight, 0);
}
function gg(e) {
  var t = e.graph();
  e.removeNode(t.nestingRoot), delete t.nestingRoot, e.edges().forEach((n) => {
    var r = e.edge(n);
    r.nestingEdge && e.removeEdge(n);
  });
}
let Cg = _e;
var pg = Lg;
function Lg(e) {
  function t(n) {
    let r = e.children(n), o = e.node(n);
    if (r.length && r.forEach(t), Object.hasOwn(o, "minRank")) {
      o.borderLeft = [], o.borderRight = [];
      for (let i = o.minRank, s = o.maxRank + 1; i < s; ++i)
        j5(e, "borderLeft", "_bl", n, o, i), j5(e, "borderRight", "_br", n, o, i);
    }
  }
  e.children().forEach(t);
}
function j5(e, t, n, r, o, i) {
  let s = { width: 0, height: 0, rank: i, borderType: t }, a = o[t][i - 1], l = Cg.addDummyNode(e, "border", s, n);
  o[t][i] = l, e.setParent(l, r), a && e.setEdge(a, l, { weight: 1 });
}
var mg = {
  adjust: wg,
  undo: xg
};
function wg(e) {
  let t = e.graph().rankdir.toLowerCase();
  (t === "lr" || t === "rl") && nr(e);
}
function xg(e) {
  let t = e.graph().rankdir.toLowerCase();
  (t === "bt" || t === "rl") && vg(e), (t === "lr" || t === "rl") && (yg(e), nr(e));
}
function nr(e) {
  e.nodes().forEach((t) => D5(e.node(t))), e.edges().forEach((t) => D5(e.edge(t)));
}
function D5(e) {
  let t = e.width;
  e.width = e.height, e.height = t;
}
function vg(e) {
  e.nodes().forEach((t) => f3(e.node(t))), e.edges().forEach((t) => {
    let n = e.edge(t);
    n.points.forEach(f3), Object.hasOwn(n, "y") && f3(n);
  });
}
function f3(e) {
  e.y = -e.y;
}
function yg(e) {
  e.nodes().forEach((t) => h3(e.node(t))), e.edges().forEach((t) => {
    let n = e.edge(t);
    n.points.forEach(h3), Object.hasOwn(n, "x") && h3(n);
  });
}
function h3(e) {
  let t = e.x;
  e.x = e.y, e.y = t;
}
let V5 = _e;
var bg = Eg;
function Eg(e) {
  let t = {}, n = e.nodes().filter((l) => !e.children(l).length), r = n.map((l) => e.node(l).rank), o = V5.applyWithChunking(Math.max, r), i = V5.range(o + 1).map(() => []);
  function s(l) {
    if (t[l]) return;
    t[l] = !0;
    let c = e.node(l);
    i[c.rank].push(l), e.successors(l).forEach(s);
  }
  return n.sort((l, c) => e.node(l).rank - e.node(c).rank).forEach(s), i;
}
let Sg = _e.zipObject;
var Mg = _g;
function _g(e, t) {
  let n = 0;
  for (let r = 1; r < t.length; ++r)
    n += kg(e, t[r - 1], t[r]);
  return n;
}
function kg(e, t, n) {
  let r = Sg(n, n.map((c, u) => u)), o = t.flatMap((c) => e.outEdges(c).map((u) => ({ pos: r[u.w], weight: e.edge(u).weight })).sort((u, d) => u.pos - d.pos)), i = 1;
  for (; i < n.length; ) i <<= 1;
  let s = 2 * i - 1;
  i -= 1;
  let a = new Array(s).fill(0), l = 0;
  return o.forEach((c) => {
    let u = c.pos + i;
    a[u] += c.weight;
    let d = 0;
    for (; u > 0; )
      u % 2 && (d += a[u + 1]), u = u - 1 >> 1, a[u] += c.weight;
    l += c.weight * d;
  }), l;
}
var Ng = Zg;
function Zg(e, t = []) {
  return t.map((n) => {
    let r = e.inEdges(n);
    if (r.length) {
      let o = r.reduce((i, s) => {
        let a = e.edge(s), l = e.node(s.v);
        return {
          sum: i.sum + a.weight * l.order,
          weight: i.weight + a.weight
        };
      }, { sum: 0, weight: 0 });
      return {
        v: n,
        barycenter: o.sum / o.weight,
        weight: o.weight
      };
    } else
      return { v: n };
  });
}
let Ig = _e;
var Rg = Ag;
function Ag(e, t) {
  let n = {};
  e.forEach((o, i) => {
    let s = n[o.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [o.v],
      i
    };
    o.barycenter !== void 0 && (s.barycenter = o.barycenter, s.weight = o.weight);
  }), t.edges().forEach((o) => {
    let i = n[o.v], s = n[o.w];
    i !== void 0 && s !== void 0 && (s.indegree++, i.out.push(n[o.w]));
  });
  let r = Object.values(n).filter((o) => !o.indegree);
  return Og(r);
}
function Og(e) {
  let t = [];
  function n(o) {
    return (i) => {
      i.merged || (i.barycenter === void 0 || o.barycenter === void 0 || i.barycenter >= o.barycenter) && $g(o, i);
    };
  }
  function r(o) {
    return (i) => {
      i.in.push(o), --i.indegree === 0 && e.push(i);
    };
  }
  for (; e.length; ) {
    let o = e.pop();
    t.push(o), o.in.reverse().forEach(n(o)), o.out.forEach(r(o));
  }
  return t.filter((o) => !o.merged).map((o) => Ig.pick(o, ["vs", "i", "barycenter", "weight"]));
}
function $g(e, t) {
  let n = 0, r = 0;
  e.weight && (n += e.barycenter * e.weight, r += e.weight), t.weight && (n += t.barycenter * t.weight, r += t.weight), e.vs = t.vs.concat(e.vs), e.barycenter = n / r, e.weight = r, e.i = Math.min(t.i, e.i), t.merged = !0;
}
let Tg = _e;
var Fg = Pg;
function Pg(e, t) {
  let n = Tg.partition(e, (u) => Object.hasOwn(u, "barycenter")), r = n.lhs, o = n.rhs.sort((u, d) => d.i - u.i), i = [], s = 0, a = 0, l = 0;
  r.sort(jg(!!t)), l = H5(i, o, l), r.forEach((u) => {
    l += u.vs.length, i.push(u.vs), s += u.barycenter * u.weight, a += u.weight, l = H5(i, o, l);
  });
  let c = { vs: i.flat(!0) };
  return a && (c.barycenter = s / a, c.weight = a), c;
}
function H5(e, t, n) {
  let r;
  for (; t.length && (r = t[t.length - 1]).i <= n; )
    t.pop(), e.push(r.vs), n++;
  return n;
}
function jg(e) {
  return (t, n) => t.barycenter < n.barycenter ? -1 : t.barycenter > n.barycenter ? 1 : e ? n.i - t.i : t.i - n.i;
}
let Dg = Ng, Vg = Rg, Hg = Fg;
var Bg = rr;
function rr(e, t, n, r) {
  let o = e.children(t), i = e.node(t), s = i ? i.borderLeft : void 0, a = i ? i.borderRight : void 0, l = {};
  s && (o = o.filter((f) => f !== s && f !== a));
  let c = Dg(e, o);
  c.forEach((f) => {
    if (e.children(f.v).length) {
      let h = rr(e, f.v, n, r);
      l[f.v] = h, Object.hasOwn(h, "barycenter") && zg(f, h);
    }
  });
  let u = Vg(c, n);
  Wg(u, l);
  let d = Hg(u, r);
  if (s && (d.vs = [s, d.vs, a].flat(!0), e.predecessors(s).length)) {
    let f = e.node(e.predecessors(s)[0]), h = e.node(e.predecessors(a)[0]);
    Object.hasOwn(d, "barycenter") || (d.barycenter = 0, d.weight = 0), d.barycenter = (d.barycenter * d.weight + f.order + h.order) / (d.weight + 2), d.weight += 2;
  }
  return d;
}
function Wg(e, t) {
  e.forEach((n) => {
    n.vs = n.vs.flatMap((r) => t[r] ? t[r].vs : r);
  });
}
function zg(e, t) {
  e.barycenter !== void 0 ? (e.barycenter = (e.barycenter * e.weight + t.barycenter * t.weight) / (e.weight + t.weight), e.weight += t.weight) : (e.barycenter = t.barycenter, e.weight = t.weight);
}
let Xg = Ye.Graph, Gg = _e;
var Yg = qg;
function qg(e, t, n, r) {
  r || (r = e.nodes());
  let o = Ug(e), i = new Xg({ compound: !0 }).setGraph({ root: o }).setDefaultNodeLabel((s) => e.node(s));
  return r.forEach((s) => {
    let a = e.node(s), l = e.parent(s);
    (a.rank === t || a.minRank <= t && t <= a.maxRank) && (i.setNode(s), i.setParent(s, l || o), e[n](s).forEach((c) => {
      let u = c.v === s ? c.w : c.v, d = i.edge(u, s), f = d !== void 0 ? d.weight : 0;
      i.setEdge(u, s, { weight: e.edge(c).weight + f });
    }), Object.hasOwn(a, "minRank") && i.setNode(s, {
      borderLeft: a.borderLeft[t],
      borderRight: a.borderRight[t]
    }));
  }), i;
}
function Ug(e) {
  for (var t; e.hasNode(t = Gg.uniqueId("_root")); ) ;
  return t;
}
var Kg = Qg;
function Qg(e, t, n) {
  let r = {}, o;
  n.forEach((i) => {
    let s = e.parent(i), a, l;
    for (; s; ) {
      if (a = e.parent(s), a ? (l = r[a], r[a] = s) : (l = o, o = s), l && l !== s) {
        t.setEdge(l, s);
        return;
      }
      s = a;
    }
  });
}
let Jg = bg, eC = Mg, tC = Bg, nC = Yg, rC = Kg, oC = Ye.Graph, X1 = _e;
var iC = or;
function or(e, t) {
  if (t && typeof t.customOrder == "function") {
    t.customOrder(e, or);
    return;
  }
  let n = X1.maxRank(e), r = B5(e, X1.range(1, n + 1), "inEdges"), o = B5(e, X1.range(n - 1, -1, -1), "outEdges"), i = Jg(e);
  if (W5(e, i), t && t.disableOptimalOrderHeuristic)
    return;
  let s = Number.POSITIVE_INFINITY, a;
  for (let l = 0, c = 0; c < 4; ++l, ++c) {
    sC(l % 2 ? r : o, l % 4 >= 2), i = X1.buildLayerMatrix(e);
    let u = eC(e, i);
    u < s && (c = 0, a = Object.assign({}, i), s = u);
  }
  W5(e, a);
}
function B5(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = (i, s) => {
    r.has(i) || r.set(i, []), r.get(i).push(s);
  };
  for (const i of e.nodes()) {
    const s = e.node(i);
    if (typeof s.rank == "number" && o(s.rank, i), typeof s.minRank == "number" && typeof s.maxRank == "number")
      for (let a = s.minRank; a <= s.maxRank; a++)
        a !== s.rank && o(a, i);
  }
  return t.map(function(i) {
    return nC(e, i, n, r.get(i) || []);
  });
}
function sC(e, t) {
  let n = new oC();
  e.forEach(function(r) {
    let o = r.graph().root, i = tC(r, o, n, t);
    i.vs.forEach((s, a) => r.node(s).order = a), rC(r, n, i.vs);
  });
}
function W5(e, t) {
  Object.values(t).forEach((n) => n.forEach((r, o) => e.node(r).order = o));
}
let aC = Ye.Graph, nt = _e;
var lC = {
  positionX: wC
};
function cC(e, t) {
  let n = {};
  function r(o, i) {
    let s = 0, a = 0, l = o.length, c = i[i.length - 1];
    return i.forEach((u, d) => {
      let f = dC(e, u), h = f ? e.node(f).order : l;
      (f || u === c) && (i.slice(a, d + 1).forEach((C) => {
        e.predecessors(C).forEach((g) => {
          let v = e.node(g), L = v.order;
          (L < s || h < L) && !(v.dummy && e.node(C).dummy) && ir(n, g, C);
        });
      }), a = d + 1, s = h);
    }), i;
  }
  return t.length && t.reduce(r), n;
}
function uC(e, t) {
  let n = {};
  function r(i, s, a, l, c) {
    let u;
    nt.range(s, a).forEach((d) => {
      u = i[d], e.node(u).dummy && e.predecessors(u).forEach((f) => {
        let h = e.node(f);
        h.dummy && (h.order < l || h.order > c) && ir(n, f, u);
      });
    });
  }
  function o(i, s) {
    let a = -1, l, c = 0;
    return s.forEach((u, d) => {
      if (e.node(u).dummy === "border") {
        let f = e.predecessors(u);
        f.length && (l = e.node(f[0]).order, r(s, c, d, a, l), c = d, a = l);
      }
      r(s, c, s.length, l, i.length);
    }), s;
  }
  return t.length && t.reduce(o), n;
}
function dC(e, t) {
  if (e.node(t).dummy)
    return e.predecessors(t).find((n) => e.node(n).dummy);
}
function ir(e, t, n) {
  if (t > n) {
    let o = t;
    t = n, n = o;
  }
  let r = e[t];
  r || (e[t] = r = {}), r[n] = !0;
}
function fC(e, t, n) {
  if (t > n) {
    let r = t;
    t = n, n = r;
  }
  return !!e[t] && Object.hasOwn(e[t], n);
}
function hC(e, t, n, r) {
  let o = {}, i = {}, s = {};
  return t.forEach((a) => {
    a.forEach((l, c) => {
      o[l] = l, i[l] = l, s[l] = c;
    });
  }), t.forEach((a) => {
    let l = -1;
    a.forEach((c) => {
      let u = r(c);
      if (u.length) {
        u = u.sort((f, h) => s[f] - s[h]);
        let d = (u.length - 1) / 2;
        for (let f = Math.floor(d), h = Math.ceil(d); f <= h; ++f) {
          let C = u[f];
          i[c] === c && l < s[C] && !fC(n, c, C) && (i[C] = c, i[c] = o[c] = o[C], l = s[C]);
        }
      }
    });
  }), { root: o, align: i };
}
function gC(e, t, n, r, o) {
  let i = {}, s = CC(e, t, n, o), a = o ? "borderLeft" : "borderRight";
  function l(d, f) {
    let h = s.nodes(), C = h.pop(), g = {};
    for (; C; )
      g[C] ? d(C) : (g[C] = !0, h.push(C), h = h.concat(f(C))), C = h.pop();
  }
  function c(d) {
    i[d] = s.inEdges(d).reduce((f, h) => Math.max(f, i[h.v] + s.edge(h)), 0);
  }
  function u(d) {
    let f = s.outEdges(d).reduce((C, g) => Math.min(C, i[g.w] - s.edge(g)), Number.POSITIVE_INFINITY), h = e.node(d);
    f !== Number.POSITIVE_INFINITY && h.borderType !== a && (i[d] = Math.max(i[d], f));
  }
  return l(c, s.predecessors.bind(s)), l(u, s.successors.bind(s)), Object.keys(r).forEach((d) => i[d] = i[n[d]]), i;
}
function CC(e, t, n, r) {
  let o = new aC(), i = e.graph(), s = xC(i.nodesep, i.edgesep, r);
  return t.forEach((a) => {
    let l;
    a.forEach((c) => {
      let u = n[c];
      if (o.setNode(u), l) {
        var d = n[l], f = o.edge(d, u);
        o.setEdge(d, u, Math.max(s(e, c, l), f || 0));
      }
      l = c;
    });
  }), o;
}
function pC(e, t) {
  return Object.values(t).reduce((n, r) => {
    let o = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
    Object.entries(r).forEach(([a, l]) => {
      let c = vC(e, a) / 2;
      o = Math.max(l + c, o), i = Math.min(l - c, i);
    });
    const s = o - i;
    return s < n[0] && (n = [s, r]), n;
  }, [Number.POSITIVE_INFINITY, null])[1];
}
function LC(e, t) {
  let n = Object.values(t), r = nt.applyWithChunking(Math.min, n), o = nt.applyWithChunking(Math.max, n);
  ["u", "d"].forEach((i) => {
    ["l", "r"].forEach((s) => {
      let a = i + s, l = e[a];
      if (l === t) return;
      let c = Object.values(l), u = r - nt.applyWithChunking(Math.min, c);
      s !== "l" && (u = o - nt.applyWithChunking(Math.max, c)), u && (e[a] = nt.mapValues(l, (d) => d + u));
    });
  });
}
function mC(e, t) {
  return nt.mapValues(e.ul, (n, r) => {
    if (t)
      return e[t.toLowerCase()][r];
    {
      let o = Object.values(e).map((i) => i[r]).sort((i, s) => i - s);
      return (o[1] + o[2]) / 2;
    }
  });
}
function wC(e) {
  let t = nt.buildLayerMatrix(e), n = Object.assign(
    cC(e, t),
    uC(e, t)
  ), r = {}, o;
  ["u", "d"].forEach((s) => {
    o = s === "u" ? t : Object.values(t).reverse(), ["l", "r"].forEach((a) => {
      a === "r" && (o = o.map((d) => Object.values(d).reverse()));
      let l = (s === "u" ? e.predecessors : e.successors).bind(e), c = hC(e, o, n, l), u = gC(
        e,
        o,
        c.root,
        c.align,
        a === "r"
      );
      a === "r" && (u = nt.mapValues(u, (d) => -d)), r[s + a] = u;
    });
  });
  let i = pC(e, r);
  return LC(r, i), mC(r, e.graph().align);
}
function xC(e, t, n) {
  return (r, o, i) => {
    let s = r.node(o), a = r.node(i), l = 0, c;
    if (l += s.width / 2, Object.hasOwn(s, "labelpos"))
      switch (s.labelpos.toLowerCase()) {
        case "l":
          c = -s.width / 2;
          break;
        case "r":
          c = s.width / 2;
          break;
      }
    if (c && (l += n ? c : -c), c = 0, l += (s.dummy ? t : e) / 2, l += (a.dummy ? t : e) / 2, l += a.width / 2, Object.hasOwn(a, "labelpos"))
      switch (a.labelpos.toLowerCase()) {
        case "l":
          c = a.width / 2;
          break;
        case "r":
          c = -a.width / 2;
          break;
      }
    return c && (l += n ? c : -c), c = 0, l;
  };
}
function vC(e, t) {
  return e.node(t).width;
}
let sr = _e, yC = lC.positionX;
var bC = EC;
function EC(e) {
  e = sr.asNonCompoundGraph(e), SC(e), Object.entries(yC(e)).forEach(([t, n]) => e.node(t).x = n);
}
function SC(e) {
  let t = sr.buildLayerMatrix(e), n = e.graph().ranksep, r = 0;
  t.forEach((o) => {
    const i = o.reduce((s, a) => {
      const l = e.node(a).height;
      return s > l ? s : l;
    }, 0);
    o.forEach((s) => e.node(s).y = r + i / 2), r += i + n;
  });
}
let z5 = _h, X5 = Rh, MC = ng, _C = _e.normalizeRanks, kC = sg, NC = _e.removeEmptyRanks, G5 = ug, ZC = pg, Y5 = mg, IC = iC, RC = bC, Ve = _e, AC = Ye.Graph;
var OC = $C;
function $C(e, t) {
  let n = t && t.debugTiming ? Ve.time : Ve.notime;
  n("layout", () => {
    let r = n("  buildLayoutGraph", () => zC(e));
    n("  runLayout", () => TC(r, n, t)), n("  updateInputGraph", () => FC(e, r));
  });
}
function TC(e, t, n) {
  t("    makeSpaceForEdgeLabels", () => XC(e)), t("    removeSelfEdges", () => tp(e)), t("    acyclic", () => z5.run(e)), t("    nestingGraph.run", () => G5.run(e)), t("    rank", () => MC(Ve.asNonCompoundGraph(e))), t("    injectEdgeLabelProxies", () => GC(e)), t("    removeEmptyRanks", () => NC(e)), t("    nestingGraph.cleanup", () => G5.cleanup(e)), t("    normalizeRanks", () => _C(e)), t("    assignRankMinMax", () => YC(e)), t("    removeEdgeLabelProxies", () => qC(e)), t("    normalize.run", () => X5.run(e)), t("    parentDummyChains", () => kC(e)), t("    addBorderSegments", () => ZC(e)), t("    order", () => IC(e, n)), t("    insertSelfEdges", () => np(e)), t("    adjustCoordinateSystem", () => Y5.adjust(e)), t("    position", () => RC(e)), t("    positionSelfEdges", () => rp(e)), t("    removeBorderNodes", () => ep(e)), t("    normalize.undo", () => X5.undo(e)), t("    fixupEdgeLabelCoords", () => QC(e)), t("    undoCoordinateSystem", () => Y5.undo(e)), t("    translateGraph", () => UC(e)), t("    assignNodeIntersects", () => KC(e)), t("    reversePoints", () => JC(e)), t("    acyclic.undo", () => z5.undo(e));
}
function FC(e, t) {
  e.nodes().forEach((n) => {
    let r = e.node(n), o = t.node(n);
    r && (r.x = o.x, r.y = o.y, r.rank = o.rank, t.children(n).length && (r.width = o.width, r.height = o.height));
  }), e.edges().forEach((n) => {
    let r = e.edge(n), o = t.edge(n);
    r.points = o.points, Object.hasOwn(o, "x") && (r.x = o.x, r.y = o.y);
  }), e.graph().width = t.graph().width, e.graph().height = t.graph().height;
}
let PC = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], jC = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, DC = ["acyclicer", "ranker", "rankdir", "align"], VC = ["width", "height", "rank"], q5 = { width: 0, height: 0 }, HC = ["minlen", "weight", "width", "height", "labeloffset"], BC = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: "r"
}, WC = ["labelpos"];
function zC(e) {
  let t = new AC({ multigraph: !0, compound: !0 }), n = C3(e.graph());
  return t.setGraph(Object.assign(
    {},
    jC,
    g3(n, PC),
    Ve.pick(n, DC)
  )), e.nodes().forEach((r) => {
    let o = C3(e.node(r));
    const i = g3(o, VC);
    Object.keys(q5).forEach((s) => {
      i[s] === void 0 && (i[s] = q5[s]);
    }), t.setNode(r, i), t.setParent(r, e.parent(r));
  }), e.edges().forEach((r) => {
    let o = C3(e.edge(r));
    t.setEdge(r, Object.assign(
      {},
      BC,
      g3(o, HC),
      Ve.pick(o, WC)
    ));
  }), t;
}
function XC(e) {
  let t = e.graph();
  t.ranksep /= 2, e.edges().forEach((n) => {
    let r = e.edge(n);
    r.minlen *= 2, r.labelpos.toLowerCase() !== "c" && (t.rankdir === "TB" || t.rankdir === "BT" ? r.width += r.labeloffset : r.height += r.labeloffset);
  });
}
function GC(e) {
  e.edges().forEach((t) => {
    let n = e.edge(t);
    if (n.width && n.height) {
      let r = e.node(t.v), i = { rank: (e.node(t.w).rank - r.rank) / 2 + r.rank, e: t };
      Ve.addDummyNode(e, "edge-proxy", i, "_ep");
    }
  });
}
function YC(e) {
  let t = 0;
  e.nodes().forEach((n) => {
    let r = e.node(n);
    r.borderTop && (r.minRank = e.node(r.borderTop).rank, r.maxRank = e.node(r.borderBottom).rank, t = Math.max(t, r.maxRank));
  }), e.graph().maxRank = t;
}
function qC(e) {
  e.nodes().forEach((t) => {
    let n = e.node(t);
    n.dummy === "edge-proxy" && (e.edge(n.e).labelRank = n.rank, e.removeNode(t));
  });
}
function UC(e) {
  let t = Number.POSITIVE_INFINITY, n = 0, r = Number.POSITIVE_INFINITY, o = 0, i = e.graph(), s = i.marginx || 0, a = i.marginy || 0;
  function l(c) {
    let u = c.x, d = c.y, f = c.width, h = c.height;
    t = Math.min(t, u - f / 2), n = Math.max(n, u + f / 2), r = Math.min(r, d - h / 2), o = Math.max(o, d + h / 2);
  }
  e.nodes().forEach((c) => l(e.node(c))), e.edges().forEach((c) => {
    let u = e.edge(c);
    Object.hasOwn(u, "x") && l(u);
  }), t -= s, r -= a, e.nodes().forEach((c) => {
    let u = e.node(c);
    u.x -= t, u.y -= r;
  }), e.edges().forEach((c) => {
    let u = e.edge(c);
    u.points.forEach((d) => {
      d.x -= t, d.y -= r;
    }), Object.hasOwn(u, "x") && (u.x -= t), Object.hasOwn(u, "y") && (u.y -= r);
  }), i.width = n - t + s, i.height = o - r + a;
}
function KC(e) {
  e.edges().forEach((t) => {
    let n = e.edge(t), r = e.node(t.v), o = e.node(t.w), i, s;
    n.points ? (i = n.points[0], s = n.points[n.points.length - 1]) : (n.points = [], i = o, s = r), n.points.unshift(Ve.intersectRect(r, i)), n.points.push(Ve.intersectRect(o, s));
  });
}
function QC(e) {
  e.edges().forEach((t) => {
    let n = e.edge(t);
    if (Object.hasOwn(n, "x"))
      switch ((n.labelpos === "l" || n.labelpos === "r") && (n.width -= n.labeloffset), n.labelpos) {
        case "l":
          n.x -= n.width / 2 + n.labeloffset;
          break;
        case "r":
          n.x += n.width / 2 + n.labeloffset;
          break;
      }
  });
}
function JC(e) {
  e.edges().forEach((t) => {
    let n = e.edge(t);
    n.reversed && n.points.reverse();
  });
}
function ep(e) {
  e.nodes().forEach((t) => {
    if (e.children(t).length) {
      let n = e.node(t), r = e.node(n.borderTop), o = e.node(n.borderBottom), i = e.node(n.borderLeft[n.borderLeft.length - 1]), s = e.node(n.borderRight[n.borderRight.length - 1]);
      n.width = Math.abs(s.x - i.x), n.height = Math.abs(o.y - r.y), n.x = i.x + n.width / 2, n.y = r.y + n.height / 2;
    }
  }), e.nodes().forEach((t) => {
    e.node(t).dummy === "border" && e.removeNode(t);
  });
}
function tp(e) {
  e.edges().forEach((t) => {
    if (t.v === t.w) {
      var n = e.node(t.v);
      n.selfEdges || (n.selfEdges = []), n.selfEdges.push({ e: t, label: e.edge(t) }), e.removeEdge(t);
    }
  });
}
function np(e) {
  var t = Ve.buildLayerMatrix(e);
  t.forEach((n) => {
    var r = 0;
    n.forEach((o, i) => {
      var s = e.node(o);
      s.order = i + r, (s.selfEdges || []).forEach((a) => {
        Ve.addDummyNode(e, "selfedge", {
          width: a.label.width,
          height: a.label.height,
          rank: s.rank,
          order: i + ++r,
          e: a.e,
          label: a.label
        }, "_se");
      }), delete s.selfEdges;
    });
  });
}
function rp(e) {
  e.nodes().forEach((t) => {
    var n = e.node(t);
    if (n.dummy === "selfedge") {
      var r = e.node(n.e.v), o = r.x + r.width / 2, i = r.y, s = n.x - o, a = r.height / 2;
      e.setEdge(n.e, n.label), e.removeNode(t), n.label.points = [
        { x: o + 2 * s / 3, y: i - a },
        { x: o + 5 * s / 6, y: i - a },
        { x: o + s, y: i },
        { x: o + 5 * s / 6, y: i + a },
        { x: o + 2 * s / 3, y: i + a }
      ], n.label.x = n.x, n.label.y = n.y;
    }
  });
}
function g3(e, t) {
  return Ve.mapValues(Ve.pick(e, t), Number);
}
function C3(e) {
  var t = {};
  return e && Object.entries(e).forEach(([n, r]) => {
    typeof n == "string" && (n = n.toLowerCase()), t[n] = r;
  }), t;
}
let op = _e, ip = Ye.Graph;
var sp = {
  debugOrdering: ap
};
function ap(e) {
  let t = op.buildLayerMatrix(e), n = new ip({ compound: !0, multigraph: !0 }).setGraph({});
  return e.nodes().forEach((r) => {
    n.setNode(r, { label: r }), n.setParent(r, "layer" + e.node(r).rank);
  }), e.edges().forEach((r) => n.setEdge(r.v, r.w, {}, r.name)), t.forEach((r, o) => {
    let i = "layer" + o;
    n.setNode(i, { rank: "same" }), r.reduce((s, a) => (n.setEdge(s, a, { style: "invis" }), a));
  }), n;
}
var lp = "1.1.8", cp = {
  graphlib: Ye,
  layout: OC,
  debug: sp,
  util: {
    time: _e.time,
    notime: _e.notime
  },
  version: lp
};
const U5 = /* @__PURE__ */ $4(cp), up = {
  direction: "LR",
  nodeWidth: 272,
  nodeHeight: 156,
  rankSeparation: 200,
  nodeSeparation: 100,
  edgeSeparation: 10,
  marginX: 20,
  marginY: 20,
  nodesPerRow: 4,
  gridPadding: 50
}, dp = (e, t) => {
  const n = new Set(t.flatMap((o) => [o.source, o.target])), r = e.filter(
    (o) => e.some((i) => i.parentId === o.id)
  );
  return {
    connectedNodes: e.filter((o) => !r.includes(o) && n.has(o.id)),
    disconnectedNodes: e.filter((o) => !r.includes(o) && !n.has(o.id)),
    parentNodes: r
  };
}, fp = (e, t) => e.map((n) => {
  const r = t.node(n.id);
  return r ? {
    ...n,
    position: {
      x: r.x - r.width / 2,
      y: r.y - r.height / 2
    }
  } : n;
}), hp = (e, t, n, r, o) => {
  if (e.length === 0) return [];
  const i = t + o;
  return e.map((s, a) => {
    const l = Math.floor(a / r), u = a % r * i + o, d = l * (n + o) + o;
    return {
      ...s,
      position: { x: u, y: d }
    };
  });
}, gp = (e, t, n) => e.map((r) => {
  const o = t.filter(
    (i) => i.parentId === r.id
  );
  if (o.length > 0) {
    const i = o.map((L) => {
      var b, p;
      return {
        x: ((b = L.position) == null ? void 0 : b.x) ?? 0,
        y: ((p = L.position) == null ? void 0 : p.y) ?? 0,
        width: L.width ? Number(L.width) : n.nodeWidth,
        height: L.height ? Number(L.height) : n.nodeHeight
      };
    }), s = Math.min(...i.map((L) => L.x)), a = Math.min(...i.map((L) => L.y)), l = Math.max(...i.map((L) => L.x + L.width)), c = Math.max(...i.map((L) => L.y + L.height)), u = 20;
    let d = Math.max(l - s + u * 2, n.nodeWidth);
    const f = Math.max(c - a + u * 2, n.nodeHeight);
    let h = s - u;
    const C = a - u, v = t.filter(
      (L) => L.parentId !== r.id
    ).filter((L) => {
      var y, S;
      const b = ((y = L.position) == null ? void 0 : y.x) ?? 0, p = ((S = L.position) == null ? void 0 : S.y) ?? 0, x = L.width ? Number(L.width) : n.nodeWidth, _ = L.height ? Number(L.height) : n.nodeHeight;
      return !L.hidden && b >= h && p >= C && b + x <= h + d && p + _ <= C + f;
    });
    return v.length > 0 ? (h = Math.max(...v.map((p) => {
      var y;
      const x = ((y = p.position) == null ? void 0 : y.x) ?? 0, _ = p.width ? Number(p.width) : n.nodeWidth;
      return x + _;
    })) + 50, d = n.nodeWidth + 2 * u, o.forEach((p, x) => {
      p.position = {
        x: u,
        y: x * n.nodeHeight + u
      };
    })) : o.forEach((L) => {
      L.position = {
        x: L.position.x - h,
        y: L.position.y - C
      };
    }), {
      ...r,
      position: { x: h, y: C },
      width: d,
      height: f,
      style: {
        ...r.style,
        width: `${d}px`,
        height: `${f}px`
      }
    };
  }
  return r;
}), ar = (e) => ({ getLaidOutElements: W(
  (n, r, o) => {
    if (!n.length) return { nodes: n, edges: r };
    const i = {
      ...up,
      ...e,
      ...o
    }, { connectedNodes: s, disconnectedNodes: a, parentNodes: l } = dp(n, r), c = new U5.graphlib.Graph();
    c.setGraph({
      rankdir: i.direction,
      nodesep: i.nodeSeparation,
      ranksep: i.rankSeparation,
      edgesep: i.edgeSeparation,
      marginx: i.marginX,
      marginy: i.marginY
    }), c.setDefaultEdgeLabel(() => ({})), s.filter((b) => !b.hidden).forEach((b) => {
      const p = b.width ? Number(b.width) : i.nodeWidth, x = b.height ? Number(b.height) : i.nodeHeight;
      c.setNode(b.id, { width: p, height: x });
    }), r.filter((b) => !b.hidden).forEach((b) => {
      c.setEdge(b.source, b.target);
    }), s.length > 0 && U5.layout(c);
    const u = fp(s, c), d = hp(
      a,
      i.nodeWidth,
      i.nodeHeight,
      i.nodesPerRow,
      i.gridPadding
    );
    let f = 0;
    u.length > 0 && (f = Math.max(
      ...u.map(
        (b) => b.position.y + (b.height ? Number(b.height) : i.nodeHeight)
      )
    ), f += i.rankSeparation);
    const h = d.map((b) => ({
      ...b,
      position: {
        ...b.position,
        y: b.position.y + f
      }
    })), C = [...u, ...h], v = [...gp(l, C, i), ...u, ...h], L = r.map((b) => {
      const p = { ...b };
      return i.direction === "TB" || i.direction === "BT" ? (p.sourceHandle = i.direction === "TB" ? "source-bottom" : "source-top", p.targetHandle = i.direction === "TB" ? "target-top" : "target-bottom") : (p.sourceHandle = i.direction === "LR" ? "source-right" : "source-left", p.targetHandle = i.direction === "LR" ? "target-left" : "target-right"), p;
    });
    return { nodes: v, edges: L };
  },
  [e]
) }), Cp = () => {
  const { getLaidOutElements: e } = ar(), { getNodes: t, setNodes: n, getEdges: r, setEdges: o, fitView: i } = Ie(), s = W(
    (l) => {
      l.stopPropagation();
      const c = t(), u = r(), d = e(c, u);
      n(d.nodes), o(d.edges), i({ duration: 300 });
    },
    [e, t, n, r, o]
  ), a = W(
    (l) => {
      l.stopPropagation();
      const c = t().map((f) => ({ ...f, hidden: !1 })), u = r().map((f) => ({ ...f, hidden: !1 })), d = e(c, u);
      n(d.nodes), o(d.edges), i({ duration: 300 });
    },
    [t, r, n, o, i]
  );
  return {
    onLayoutChange: s,
    onExpandAll: a
  };
}, pp = () => {
  const { onLayoutChange: e, onExpandAll: t } = Cp();
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-2 bg-container-default text-body-secondary p-2 rounded-full shadow-md dark:shadow-md z-50", children: [
    /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        onClick: e,
        className: "w-6 h-6 flex items-center justify-center hover:text-interactive transition-all cursor-pointer",
        title: oe("controls.layout"),
        "aria-label": oe("controls.layout"),
        children: /* @__PURE__ */ m.jsx(Tl, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        onClick: t,
        className: "w-6 h-6 flex items-center justify-center hover:text-interactive transition-all cursor-pointer",
        title: oe("controls.expandAll"),
        "aria-label": oe("controls.expandAll"),
        children: /* @__PURE__ */ m.jsx(Zl, { className: "w-4 h-4" })
      }
    )
  ] });
}, Lp = ({ id: e, nodeRef: t, activeMenuNodeId: n, setActiveMenuNodeId: r }) => {
  const [o, i] = Me(null), s = ce(null), a = n === e, l = W(() => {
    r == null || r(null);
  }, [r]), c = W(
    (u) => {
      u.stopPropagation(), r == null || r(a ? null : e);
    },
    [e, a, r]
  );
  return ue(() => {
    if (a && t.current) {
      const u = t.current.getBoundingClientRect();
      i({
        top: u.top,
        left: u.right + 4
      });
    }
  }, [a, t]), { isMenuOpen: a, menuPosition: o, menuRef: s, onToggleMenu: c, onClose: l };
};
var pe = /* @__PURE__ */ ((e) => (e.Visible = "visible", e.Hidden = "hidden", e.Any = "any", e))(pe || {});
const gt = () => {
  const { getEdges: e, getNode: t, getNodes: n } = Ie(), r = W(
    (y, S = "any") => S === "visible" ? e().filter((k) => k.target === y && !k.hidden) : S === "hidden" ? e().filter((k) => k.target === y && !!k.hidden) : e().filter((k) => k.target === y),
    [e]
  ), o = W(
    (y, S = "any") => r(y, S).length,
    [r]
  ), i = W(
    (y, S = "any") => !!o(y, S),
    [o]
  ), s = W(
    (y, S = "any") => S === "visible" ? e().filter((k) => k.source === y && !k.hidden) : S === "hidden" ? e().filter((k) => k.source === y && !!k.hidden) : e().filter((k) => k.source === y),
    [e]
  ), a = W(
    (y, S = "any") => s(y, S).length,
    [s]
  ), l = W(
    (y, S = "any") => !!a(y, S),
    [a]
  ), c = W(
    (y, S = "any") => {
      const k = t(y);
      if (!k) return [];
      const N = y6(k, n(), e());
      return S === "visible" ? N.filter((V) => !V.hidden) : S === "hidden" ? N.filter((V) => !!V.hidden) : N;
    },
    [t, n, e]
  ), u = W(
    (y, S = "any") => c(y, S).length,
    [c]
  ), d = W(
    (y, S = "any") => !!u(y, S),
    [u]
  ), f = W(
    (y, S = "any") => {
      const k = t(y);
      if (!k) return [];
      const N = v6(k, n(), e());
      return S === "visible" ? N.filter((V) => !V.hidden) : S === "hidden" ? N.filter((V) => !!V.hidden) : N;
    },
    [t, n, e]
  ), h = W(
    (y, S = "any") => f(y, S).length,
    [f]
  ), C = W(
    (y, S = "any") => !!h(y, S),
    [h]
  ), g = W(
    (y, S = "any") => {
      const N = c(y, S).map((T) => f(T.id, S)).flat(), V = /* @__PURE__ */ new Map();
      return N.forEach((T) => {
        V.has(T.id) || V.set(T.id, T);
      }), Array.from(V.values());
    },
    [c, f]
  ), v = W(
    (y, S = "any") => g(y, S).length,
    [g]
  ), L = W(
    (y, S = "any") => !!v(y, S),
    [v]
  ), b = W(
    (y, S = "any") => {
      const k = t(y);
      if (!k) return !1;
      const N = !!(k != null && k.data.aggregatedNodeId);
      return S === "visible" ? N && !k.hidden : S === "hidden" ? N && !!k.hidden : N;
    },
    [t]
  ), p = W(
    (y, S = "any") => {
      const k = t(y);
      if (!(k != null && k.data.aggregatedNodeId)) return [];
      const N = n().filter(
        (V) => V.data.aggregatedNodeId === (k == null ? void 0 : k.data.aggregatedNodeId) && V.id !== k.id
      );
      return S === "visible" ? N.filter((V) => !V.hidden) : S === "hidden" ? N.filter((V) => !!V.hidden) : N;
    },
    [t, n]
  ), x = W(
    (y, S = "any") => p(y, S).length,
    [p]
  ), _ = W(
    (y, S = "any") => !!p(y, S).length,
    [p]
  );
  return Ee(
    () => ({
      getAggregateSiblings: p,
      getAggregateSiblingsCount: x,
      getChildrenNodes: f,
      getChildrenNodesCount: h,
      getIncomingEdges: r,
      getIncomingEdgesCount: o,
      getOutgoingEdges: s,
      getOutgoingEdgesCount: a,
      getParentNodes: c,
      getParentNodesCount: u,
      getSiblingNodes: g,
      getSiblingNodesCount: v,
      hasAggregateSiblings: _,
      hasChildren: C,
      hasIncomingEdges: i,
      hasOutgoingEdges: l,
      hasParents: d,
      hasSiblings: L,
      isAggregateNode: b
    }),
    [
      p,
      x,
      f,
      h,
      r,
      o,
      s,
      a,
      c,
      u,
      g,
      v,
      _,
      C,
      i,
      l,
      d,
      L,
      b
    ]
  );
}, mp = () => {
  const { getNode: e } = Ie(), { hasOutgoingEdges: t, getAggregateSiblingsCount: n, hasAggregateSiblings: r, getChildrenNodes: o, hasChildren: i } = gt(), s = W(
    (f) => {
      const h = e(f);
      return h && h.data.isStacked && h.data.isTopOfTheStack ? r(f, pe.Hidden) : !1;
    },
    [e, n]
  ), a = W(
    (f) => {
      const h = e(f);
      return h ? !h.data.isTopOfTheStack && r(f, pe.Visible) : !1;
    },
    [r, e]
  ), l = W(
    (f) => t(f, pe.Visible) ? !1 : t(f, pe.Hidden),
    [t, i, o]
  ), c = W(
    (f) => t(f, pe.Visible) ? i(f, pe.Hidden) ? o(f, pe.Hidden).every((h) => h.data.isStacked) : !0 : !1,
    [t, i, o]
  ), u = W(
    (f) => t(f, pe.Hidden),
    [t]
  ), d = W(
    (f) => t(f, pe.Visible),
    [t]
  );
  return {
    isStacked: s,
    isStackable: a,
    isCollapsed: l,
    isCollapsable: d,
    isExpanded: c,
    isExpandable: u
  };
}, lr = m1(void 0), wp = ({
  onDataFetch: e,
  addBreadcrumb: t,
  onDashboardClick: n,
  children: r
}) => {
  const o = sn(), { selectedNodeId: i, setSelectedNodeId: s, unstackedAggregateNodeIds: a, setUnstackedAggregateNodeIds: l } = b2(), { getNodes: c, getEdges: u, setNodes: d, setEdges: f } = Ie(), h = W(
    (L, b) => {
      L.stopPropagation();
      const p = b.id;
      t == null || t(b.title || p, b), e == null || e(b), s(void 0);
    },
    [e, t]
  ), C = W(
    (L, b) => {
      L.stopPropagation(), n == null || n(b), n && o();
    },
    [n, o]
  ), g = W(
    (L, b) => {
      if (L.stopPropagation(), !b.aggregatedNodeId) return;
      const p = c() ?? [], x = u() ?? [];
      if (!p.some((N) => N.data.aggregatedNodeId === b.aggregatedNodeId && N.hidden === !0)) return;
      const y = [], S = p.map((N) => N.data.aggregatedNodeId === b.aggregatedNodeId ? (y.push(N.id), {
        ...N,
        hidden: !1
      }) : N), k = x.map((N) => y.includes(N.source) || y.includes(N.target) ? {
        ...N,
        hidden: !1
      } : N);
      l([...a, b.aggregatedNodeId]), d(S), f(k);
    },
    [d, f, a, l]
  ), v = W(
    (L, b) => {
      if (L.preventDefault(), !b.aggregatedNodeId) return;
      const p = c() ?? [], x = u() ?? [];
      if (!p.some((N) => N.data.aggregatedNodeId === b.aggregatedNodeId && N.id !== b.id)) return;
      const y = p.filter((N) => N.data.aggregateId === b.aggregatedNodeId && b.id !== N.id).map((N) => N.id), S = p.map((N) => y.includes(N.id) ? {
        ...N,
        hidden: !0
      } : N), k = x.map((N) => y.includes(N.source) || y.includes(N.target) ? {
        ...N,
        hidden: !0
      } : N);
      d(S), f(k);
    },
    [d, f]
  );
  return /* @__PURE__ */ m.jsx(
    lr.Provider,
    {
      value: {
        selectedNodeId: i,
        onGroupToggle: h,
        onDashboardClick: C,
        onUnstackNode: g,
        onStackNode: v
      },
      children: r
    }
  );
}, xp = () => {
  const e = _t(lr);
  if (e === void 0)
    throw new Error("useCelestialNodeActionsContext must be used within a CelestialNodeActionsProvider");
  return e;
}, K5 = (e) => /* @__PURE__ */ m.jsxs("div", { className: e.className, children: [
  /* @__PURE__ */ m.jsx("div", { className: "text-xs text-body-default", children: e.label }),
  /* @__PURE__ */ m.jsxs("div", { className: "text-xs text-body-secondary", children: [
    e.value,
    " "
  ] })
] }), Q5 = (e) => /* @__PURE__ */ m.jsx(
  "button",
  {
    className: "font-medium text-link-default hover:text-link-hover cursor-pointer",
    "aria-label": oe("buttons.viewInsights"),
    title: oe("buttons.viewInsights"),
    ...e,
    children: oe("buttons.viewInsights")
  }
), vp = ({ status: e }) => {
  const t = e === "breached";
  return /* @__PURE__ */ m.jsx(
    kt,
    {
      text: oe(`node.sliStatus.${e}`),
      className: `gap-0.5 ${t ? "text-faults" : "text-errors"}`,
      children: /* @__PURE__ */ m.jsx(S2, { status: e, size: 16 })
    }
  );
}, J5 = (e) => {
  const { id: t, icon: n, title: r, subtitle: o, platform: i, health: s, isGroup: a, numberOfServices: l, metrics: c, isFaded: u, stackedNodeIds: d } = e, f = ce(null), { onGroupToggle: h, onDashboardClick: C, selectedNodeId: g } = xp(), v = c != null && c.requests ? c.requests < 1e3 ? `${c.requests}` : `${Math.round(c.requests / 1e3).toFixed(1)}k` : "0", L = (s == null ? void 0 : s.status) && ["breached", "recovered"].includes(s == null ? void 0 : s.status), b = t === g, p = W(
    (y) => {
      C == null || C(y, e);
    },
    [C, e]
  ), x = W(
    (y) => {
      a && (h == null || h(y, e));
    },
    [h, a, e]
  ), _ = ((d == null ? void 0 : d.length) ?? 0) > 0;
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      ref: f,
      className: `w-68 min-h-24 rounded-xl p-3 flex justify-center items-center border-2 box-border 'border-solid'
                ${s != null && s.breached ? "bg-container-breached border-status-breached" : "bg-container-default border-status-default"} 
                ${s != null && s.breached ? "hover:border-status-breached-hover" : "hover:border-status-default-hover"} 
                ${b ? "outline-2 outline-blue-500 outline-offset-4 shadow-node-selected" : ""} 
                ${u ? "opacity-30" : "opacity-100"} 
                transition-all duration-200`,
      onDoubleClick: x,
      children: /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-58", children: [
          !!n && /* @__PURE__ */ m.jsx("div", { className: "col-span-14", children: /* @__PURE__ */ m.jsx(
            M2,
            {
              metrics: c || { ...E2 },
              size: 60,
              icon: n,
              isLegendEnabled: !0
            }
          ) }),
          /* @__PURE__ */ m.jsxs("div", { className: `col-span-44 flex flex-col justify-center ${L ? "-mt-2" : ""}`, children: [
            L && /* @__PURE__ */ m.jsx("div", { className: "col-span-44 flex flex-row-reverse mb-0.5", children: /* @__PURE__ */ m.jsx(vp, { status: s == null ? void 0 : s.status }) }),
            a ? /* @__PURE__ */ m.jsxs(
              "div",
              {
                className: "flex items-center group hover:cursor-pointer pl-1",
                onClick: (y) => h == null ? void 0 : h(y, e),
                children: [
                  /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      className: "text-group-caret transition-colors mr-0 bg-transparent border-0 p-0",
                      "aria-expanded": !1,
                      children: /* @__PURE__ */ m.jsx(yl, { className: "w-4 h-4 transition-transform duration-200 rotate-0 group-hover:rotate-90" })
                    }
                  ),
                  /* @__PURE__ */ m.jsx("a", { className: "font-bold text-sm text-link-default hover:text-link-hover transition-colors truncate", children: r })
                ]
              }
            ) : /* @__PURE__ */ m.jsx("div", { className: "font-bold text-sm text-body-default transition-colors pl-2 truncate", children: r }),
            /* @__PURE__ */ m.jsx("div", { className: "text-xs text-body-secondary pl-2 truncate", children: o })
          ] })
        ] }),
        !_ && /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-58 py-2", children: [
          /* @__PURE__ */ m.jsx("div", { className: "col-span-16", children: /* @__PURE__ */ m.jsx(K5, { className: "pr-1", label: oe("node.labels.requests"), value: v }) }),
          /* @__PURE__ */ m.jsx("div", { className: "col-span-42 flex flex-col justify-center border-l-1 border-divider-default", children: a || i ? /* @__PURE__ */ m.jsx(
            K5,
            {
              className: "pl-2.5",
              label: oe(a ? "node.labels.services" : "node.labels.platform"),
              value: a ? `${l}` : i
            }
          ) : /* @__PURE__ */ m.jsx("div", { className: "flex flex-row-reverse flex-grow text-xs items-end", children: /* @__PURE__ */ m.jsx(Q5, { onClick: p }) }) })
        ] }),
        (a || i) && !_ && /* @__PURE__ */ m.jsx("div", { className: "flex flex-row-reverse text-xs", children: /* @__PURE__ */ m.jsx(Q5, { onClick: p }) })
      ] })
    }
  );
}, yp = ({
  children: e,
  hiddenChildrenCount: t,
  stackSpacing: n = 6,
  maxVisibleStacks: r = 2,
  button: o,
  isFaded: i
}) => {
  const s = Array.from({ length: r }, (a, l) => l + 1);
  return /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "grid relative", children: [
      s.map((a) => /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "col-start-1 row-start-1 w-68 min-h-24 rounded-xl border-2 border-solid border-status-default bg-container-default/50",
          style: {
            transform: `translate(-${a * n}px, -${a * n}px)`,
            zIndex: r - a,
            opacity: i ? "0.3" : "1"
          },
          "aria-hidden": "true"
        },
        a
      )),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "col-start-1 row-start-1",
          style: {
            zIndex: r + 1
          },
          children: e
        }
      )
    ] }),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: "absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center shadow-lg",
        style: {
          transform: "translate(8px, -8px)",
          zIndex: r + 2
        },
        title: `${t} hidden children`,
        role: "status",
        "aria-label": `${t} hidden children`,
        children: [
          "+",
          t
        ]
      }
    ),
    o && /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "absolute top-1/2 -translate-y-1/2",
        style: {
          right: "-16px",
          // -right-4 equivalent
          zIndex: r + 2
        },
        children: o
      }
    )
  ] });
}, cr = (e, t) => {
  ue(() => {
    const n = (r) => {
      e.current && !e.current.contains(r.target) && t();
    };
    return document.addEventListener("click", n), () => document.removeEventListener("click", n);
  }, [e, t]);
}, e4 = ({ label: e, isDisabled: t, onClick: n }) => /* @__PURE__ */ m.jsx("li", { children: /* @__PURE__ */ m.jsx(
  "button",
  {
    onClick: n,
    disabled: t,
    className: `
                block w-full text-left px-4 py-2 text-sm whitespace-nowrap
                ${t ? "cursor-not-allowed text-gray-400 hover:bg-white" : "hover:bg-gray-100"}
            `,
    children: e
  }
) }, e), bp = () => {
  const { getNodes: e, getEdges: t } = Ie(), { getAggregateSiblings: n, getParentNodes: r, getChildrenNodes: o } = gt();
  return W(
    (s) => {
      const l = n(s).map((g) => g.id), c = e().map((g) => l.includes(g.id) ? {
        ...g,
        hidden: !0,
        data: {
          ...g.data,
          isStacked: !0
        }
      } : g.id === s ? {
        ...g,
        data: {
          ...g.data,
          isStacked: !0,
          isTopOfTheStack: !0
        }
      } : g), d = r(s).map((g) => g.id), h = o(s).map((g) => g.id), C = t().map((g) => d.includes(g.source) && l.includes(g.target) ? {
        ...g,
        hidden: !0
      } : !d.includes(g.source) && l.includes(g.target) ? {
        ...g,
        target: s,
        hidden: !1,
        data: {
          original: { ...g }
        }
      } : l.includes(g.source) && h.includes(g.target) ? {
        ...g,
        hidden: !0
      } : l.includes(g.source) && !h.includes(g.target) ? {
        ...g,
        source: s,
        hidden: !1,
        data: {
          original: { ...g }
        }
      } : g);
      return {
        nodes: c,
        edges: C
      };
    },
    [n, r, o, e, t]
  );
}, Ep = () => {
  const { getNodes: e, getEdges: t } = Ie(), { getAggregateSiblings: n, getParentNodes: r, getChildrenNodes: o } = gt();
  return W(
    (s) => {
      const l = n(s).map((g) => g.id), c = e().map((g) => l.includes(g.id) ? {
        ...g,
        hidden: !1,
        data: {
          ...g.data,
          isStacked: !1
        }
      } : g.id === s ? {
        ...g,
        data: {
          ...g.data,
          isStacked: !1,
          isTopOfTheStack: !1
        }
      } : g), d = r(s).map((g) => g.id), h = o(s).map((g) => g.id), C = t().map((g) => {
        var v, L;
        return l.includes(g.source) && h.includes(g.target) ? {
          ...g,
          hidden: !1
        } : d.includes(g.source) && l.includes(g.target) ? {
          ...g,
          hidden: !1
        } : (g.source === s || g.target === s) && ((v = g.data) != null && v.original) ? {
          ...(L = g.data) == null ? void 0 : L.original,
          hidden: !1
        } : g;
      });
      return {
        nodes: c,
        edges: C
      };
    },
    [n, r, o, e, t]
  );
}, Sp = () => {
  const { getNodes: e, getEdges: t, getNode: n } = Ie(), { getOutgoingEdges: r, getChildrenNodes: o, hasOutgoingEdges: i } = gt();
  return W(
    (a) => {
      const l = r(a).map((f) => f.id), c = o(a).map((f) => f.id), u = e().map((f) => c.includes(f.id) ? {
        ...f,
        hidden: f.data.isStacked ? !f.data.isTopOfTheStack : !1,
        data: {
          ...f.data,
          isCollapsable: i(f.id),
          isCollapsed: i(f.id) && i(f.id, pe.Hidden)
        }
      } : f), d = t().map((f) => {
        if (l.includes(f.id)) {
          const h = n(f.target);
          return {
            ...f,
            hidden: h != null && h.data.isStacked ? !h.data.isTopOfTheStack : !1
          };
        }
        return f;
      });
      return {
        nodes: u,
        edges: d
      };
    },
    [o, r, e, t]
  );
}, Mp = () => {
  const { getNodes: e, getEdges: t } = Ie(), { getIncomingEdgesCount: n, getOutgoingEdges: r, getIncomingEdges: o, getChildrenNodes: i, hasOutgoingEdges: s } = gt(), a = W(
    (c, u, d) => {
      r(c, pe.Visible).forEach((h) => {
        d.add(h.id);
      });
      const f = i(c, pe.Visible).sort((h, C) => n(h.id, pe.Visible) - n(C.id, pe.Visible));
      f.forEach((h) => {
        const C = o(h.id, pe.Visible).map((g) => g.id);
        (C.length === 0 || C.every((g) => d.has(g))) && u.add(h.id);
      }), f.forEach((h) => {
        a(h.id, u, d);
      });
    },
    [r, i, n, o]
  );
  return W(
    (c) => {
      const u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
      a(c, d, u);
      const f = e().map((C) => d.has(C.id) ? {
        ...C,
        hidden: !0,
        data: {
          ...C.data,
          isCollapsable: s(C.id),
          isCollapsed: s(C.id) && s(C.id, pe.Hidden)
        }
      } : C), h = t().map((C) => u.has(C.id) ? {
        ...C,
        hidden: !0
      } : C);
      return {
        nodes: f,
        edges: h
      };
    },
    [a, e, t]
  );
}, ur = (e, t) => {
  const { setNodes: n, setEdges: r } = Ie(), { isAggregateNode: o } = gt(), i = bp(), s = Ep(), a = Sp(), l = Mp(), c = W(
    (h) => {
      if (h.preventDefault(), o(e)) {
        const { nodes: C, edges: g } = s(e);
        n(C), r(g);
      }
      t == null || t();
    },
    [e, t, s, n, r, o]
  ), u = W(
    (h) => {
      if (h.preventDefault(), o(e)) {
        const { nodes: C, edges: g } = i(e);
        n(C), r(g);
      }
      t == null || t();
    },
    [e, t, i, n, r, o]
  ), d = W(
    (h) => {
      h.preventDefault();
      const { nodes: C, edges: g } = a(e);
      n(C), r(g), t == null || t();
    },
    [e, a, t, n, r]
  ), f = W(
    (h) => {
      h.preventDefault();
      const { nodes: C, edges: g } = l(e);
      n(C), r(g), t == null || t();
    },
    [e, l, t, n, r]
  );
  return Ee(
    () => ({
      onExpandSiblings: c,
      onCollapseSiblings: u,
      onExpandChildren: d,
      onCollapseDescendants: f
    }),
    [c, u, d, f]
  );
}, _p = ({ nodeId: e, onClose: t }) => {
  const n = ce(null), { hasOutgoingEdges: r } = gt();
  cr(n, t);
  const { onExpandChildren: o, onCollapseDescendants: i } = ur(e, t);
  return /* @__PURE__ */ m.jsxs(
    "ul",
    {
      ref: n,
      className: "absolute z-9999 overflow-visible bg-white border border-gray-200 rounded shadow-md w-60",
      children: [
        /* @__PURE__ */ m.jsx(
          e4,
          {
            label: oe("contextMenu.expandDependencies"),
            isDisabled: !r(e, pe.Hidden),
            onClick: o
          }
        ),
        /* @__PURE__ */ m.jsx(
          e4,
          {
            label: oe("contextMenu.collapseDependencies"),
            isDisabled: !r(e, pe.Visible),
            onClick: i
          }
        )
      ]
    }
  );
}, kp = (e, t) => {
  const n = ce(t || document.createElement("div"));
  return ue(() => {
    const r = n.current, o = {
      zIndex: "9999",
      // Ensure portal appears above other content
      position: "absolute",
      // Position absolutely relative to closest positioned ancestor
      ...e.top !== void 0 ? { top: `${e.top}px` } : {},
      ...e.left !== void 0 ? { left: `${e.left}px` } : {},
      ...e.right !== void 0 ? { right: `${e.right}px` } : {},
      ...e.bottom !== void 0 ? { bottom: `${e.bottom}px` } : {}
    };
    return Object.assign(r.style, o), document.body.contains(r) || document.body.appendChild(r), () => {
      document.body.contains(r) && document.body.removeChild(r);
    };
  }, [e]), n.current;
}, dr = ({ position: e, children: t }) => {
  const n = ce(null);
  n.current || (n.current = document.createElement("div"));
  const r = kp(e, n.current);
  return Fr.createPortal(t, r);
}, Np = ({ data: e, id: t }) => {
  const { hasOutgoingEdges: n, getAggregateSiblingsCount: r, getOutgoingEdgesCount: o, hasChildren: i, getChildrenNodes: s } = gt(), { isCollapsed: a, isCollapsable: l, isStacked: c, isStackable: u, isExpanded: d, isExpandable: f } = mp(), { onExpandChildren: h, onExpandSiblings: C, onCollapseSiblings: g, onCollapseDescendants: v } = ur(t), L = e.isStacked ? r(t) + 1 : o(t, pe.Hidden), b = ce(null), { activeMenuNodeId: p, setActiveMenuNodeId: x } = b2(), { isMenuOpen: _, onClose: y, onToggleMenu: S, menuPosition: k } = Lp({
    id: t,
    nodeRef: b,
    activeMenuNodeId: p,
    setActiveMenuNodeId: x
  }), N = W(
    (E) => c(E) || u(E) || n(E),
    [c, u, n]
  ), V = W(
    (E) => d(E) || u(E) || l(E) && s(E, pe.Hidden).every((A) => A.data.isStacked) ? "-" : "+",
    [c, d]
  ), T = W(
    (E) => c(E) ? !0 : l(E) && i(E, pe.Hidden) ? !s(E, pe.Hidden).every((A) => A.data.isStacked) : f(E) && i(E, pe.Hidden) ? !s(E, pe.Hidden).every((A) => A.data.isStacked) : a(E) ? i(E, pe.Hidden) && !i(E, pe.Visible) : !1,
    [a, c, l, i, f]
  ), O = W(
    (E) => c(E) ? C : u(E) ? g : d(E) ? v : a(E) ? h : S,
    [c, u, d, a]
  ), F = N(t) ? /* @__PURE__ */ m.jsx(
    "button",
    {
      className: "w-8 h-8 rounded-full border border-blue-400 bg-blue-100 flex items-center justify-center text-sm font-bold cursor-pointer z-10 shadow-sm hover:border-blue-600 transition-colors text-blue-800",
      onClick: O(t),
      title: oe("node.showNodeActions"),
      children: V(t)
    }
  ) : null;
  return /* @__PURE__ */ m.jsxs("div", { className: "relative inline-block", ref: b, children: [
    T(t) ? /* @__PURE__ */ m.jsx(yp, { hiddenChildrenCount: L, button: F, isFaded: !!e.isFaded, children: /* @__PURE__ */ m.jsx(J5, { ...e }) }) : /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ m.jsx(J5, { ...e }),
      F && /* @__PURE__ */ m.jsx("div", { className: "absolute -right-4 top-1/2 -translate-y-1/2", children: F })
    ] }),
    _ && k && /* @__PURE__ */ m.jsx(dr, { position: k, children: /* @__PURE__ */ m.jsx(_p, { nodeId: t, onClose: y }) }),
    /* @__PURE__ */ m.jsx(Ae, { type: "source", position: Y.Right, id: "source-right" }),
    /* @__PURE__ */ m.jsx(Ae, { type: "source", position: Y.Left, id: "source-left" }),
    /* @__PURE__ */ m.jsx(Ae, { type: "source", position: Y.Bottom, id: "source-bottom" }),
    /* @__PURE__ */ m.jsx(Ae, { type: "source", position: Y.Top, id: "source-top" }),
    /* @__PURE__ */ m.jsx(Ae, { type: "target", position: Y.Right, id: "target-right" }),
    /* @__PURE__ */ m.jsx(Ae, { type: "target", position: Y.Left, id: "target-left" }),
    /* @__PURE__ */ m.jsx(Ae, { type: "target", position: Y.Bottom, id: "target-bottom" }),
    /* @__PURE__ */ m.jsx(Ae, { type: "target", position: Y.Top, id: "target-top" })
  ] });
}, Zp = ({ children: e }) => /* @__PURE__ */ m.jsx("div", { className: "bg-container-default/0.2 backdrop-blur-xs absolute inset-0 flex justify-center items-center z-10", children: e }), Ip = ({ onClose: e }) => {
  const t = ce(null);
  return cr(t, e), /* @__PURE__ */ m.jsx("div", { ref: t, className: "w-58 h-80 bg-container-default rounded-xl shadow-xl z-50 overflow-auto", children: /* @__PURE__ */ m.jsxs("div", { className: "p-4 grid gap-3 text-body-secondary", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ m.jsx("h3", { className: "font-bold text-sm", children: oe("legend.title") }),
      /* @__PURE__ */ m.jsx("button", { onClick: e, className: "hover:text-interactive cursor-pointer", children: /* @__PURE__ */ m.jsx(Ml, {}) })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "flex justify-center items-center py-2", children: /* @__PURE__ */ m.jsx(M2, { metrics: { requests: 100, faults5xx: 35, errors4xx: 25 }, size: 60 }) }),
    /* @__PURE__ */ m.jsxs("ul", { className: "grid gap-2", children: [
      /* @__PURE__ */ m.jsx("li", { children: /* @__PURE__ */ m.jsx(R8, { text: oe("legend.faults") }) }),
      /* @__PURE__ */ m.jsx("li", { children: /* @__PURE__ */ m.jsx(I8, { text: oe("legend.errors") }) }),
      /* @__PURE__ */ m.jsx("li", { children: /* @__PURE__ */ m.jsx(O8, { text: oe("legend.ok") }) })
    ] }),
    /* @__PURE__ */ m.jsxs("ul", { className: "grid gap-0.5 -ml-0.5", children: [
      /* @__PURE__ */ m.jsx("li", { children: /* @__PURE__ */ m.jsx(Z8, { text: oe("legend.activeSLIBreach") }) }),
      /* @__PURE__ */ m.jsx("li", { children: /* @__PURE__ */ m.jsx(A8, { text: oe("legend.recoveredSLI") }) })
    ] })
  ] }) });
}, Rp = (e, t) => {
  const [n, r] = Me();
  return ue(() => {
    if (e && t) {
      const o = t.getBoundingClientRect();
      r({
        // Align tops, accounting for scroll position
        top: o.top + window.scrollY,
        // Align right edge of legend with left edge of button + 5px gap
        right: window.innerWidth - o.left + 5
      });
    }
  }, [e]), n;
}, Ap = () => {
  const e = ce(null), [t, n] = Me(!1), r = Rp(t, e.current), o = W(
    (s) => {
      s.stopPropagation(), n(!t);
    },
    [t, n]
  ), i = W(() => n(!1), [n]);
  return {
    ref: e,
    isOpen: t,
    position: r,
    onClose: i,
    onToggle: o
  };
}, Op = () => {
  const { ref: e, isOpen: t, position: n, onClose: r, onToggle: o } = Ap();
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      "button",
      {
        ref: e,
        onClick: o,
        className: "flex items-center justify-center w-10 h-10 rounded-full bg-container-default shadow-md hover:shadow-xl text-body-secondary hover:text-interactive transition-all duration-300 cursor-pointer",
        "aria-label": oe("legend.toggle"),
        children: /* @__PURE__ */ m.jsx(Pl, {})
      }
    ),
    t && /* @__PURE__ */ m.jsx(dr, { position: n ?? {}, children: /* @__PURE__ */ m.jsx(Ip, { onClose: r }) })
  ] });
}, $p = () => /* @__PURE__ */ m.jsx("span", { className: "w-24 h-24 border-8 border-spinner rounded-full animate-spin border-b-transparent" }), Tp = {
  celestialNode: Np
}, Fp = ({
  nodes: e,
  edges: t,
  isLoading: n,
  onNodesChange: r,
  onEdgesChange: o,
  breadcrumbs: i,
  onBreadcrumbClick: s,
  onEdgeClick: a,
  emptyState: l,
  hotspot: c,
  numMatches: u
}) => /* @__PURE__ */ m.jsxs(
  "div",
  {
    className: "flex flex-col h-full overflow-hidden rounded-2xl relative",
    children: [
      /* @__PURE__ */ m.jsx("div", { className: "absolute top-2 left-0 flex z-1000", children: /* @__PURE__ */ m.jsx(nf, { breadcrumbs: i, onBreadcrumbClick: s, hotspot: c }) }),
      u !== void 0 && /* @__PURE__ */ m.jsx("div", { className: "absolute top-[14px] right-4 flex z-1000", children: /* @__PURE__ */ m.jsxs("div", { className: "inline-flex items-center px-3 py-1.5 rounded-lg text-sm bg-blue-50 text-black border-2 border-blue-500", children: [
        u,
        " ",
        oe(u === 1 ? "matchForFilter" : "matchesForFilter")
      ] }) }),
      /* @__PURE__ */ m.jsxs("div", { className: "relative flex-grow", children: [
        n && /* @__PURE__ */ m.jsx(Zp, { children: /* @__PURE__ */ m.jsx($p, {}) }),
        !n && (e == null ? void 0 : e.length) === 0 && /* @__PURE__ */ m.jsx("div", { className: "bg-container-default absolute inset-0 flex items-center justify-center z-10", children: l }),
        /* @__PURE__ */ m.jsxs("div", { className: "absolute top-15 right-4 flex flex-col items-center gap-4 z-50", children: [
          /* @__PURE__ */ m.jsx(Op, {}),
          /* @__PURE__ */ m.jsx(sf, {}),
          /* @__PURE__ */ m.jsx(pp, {})
        ] }),
        /* @__PURE__ */ m.jsx(
          y8,
          {
            nodes: e,
            edges: t,
            onNodesChange: r,
            onEdgesChange: o,
            onEdgeClick: a,
            minZoom: 0,
            fitView: !0,
            nodeTypes: Tp,
            proOptions: { hideAttribution: !0 },
            className: "w-full h-full z-1"
          }
        )
      ] })
    ]
  }
), Pp = ({
  onDataFetch: e,
  navigateToBreadcrumb: t,
  onEdgeClick: n,
  onBreadcrumbClick: r
}) => {
  const { setSelectedNodeId: o } = b2(), i = W(
    (a, l) => {
      r ? r(a, l) : (e == null || e(a.node), t(l));
    },
    [e, t, r]
  ), s = W(
    (a, l) => {
      n == null || n(l), o == null || o(void 0);
    },
    [n]
  );
  return {
    onBreadcrumbClick: i,
    onEdgeClick: s
  };
}, jp = () => {
  const e = Ie();
  return { focusOnNodes: W(
    (n, r, o = 100) => {
      !n || n.length === 0 || setTimeout(() => {
        const i = new Set(n.map((a) => a.id)), s = r.filter((a) => i.has(a.id));
        if (s.length > 0) {
          const a = Math.min(...s.map((h) => h.position.x)), l = Math.max(...s.map((h) => h.position.x + (h.width ?? 272))), c = Math.min(...s.map((h) => h.position.y)), u = Math.max(...s.map((h) => h.position.y + (h.height ?? 156))), d = 5 / s.length * 50, f = {
            x: a - d,
            y: c - d,
            width: l - a + 2 * d,
            height: u - c + 2 * d
          };
          e != null && e.fitBounds && e.fitBounds(f, {
            padding: 0.1,
            duration: 400
          });
        }
      }, o);
    },
    [e]
  ) };
}, Dp = (e) => {
  var b, p, x, _;
  const t = sn(), { focusOnNodes: n } = jp(), { getLaidOutElements: r } = ar(e.layoutOptions), [o, i, s] = La([]), [a, l, c] = ma([]), { setSelectedNodeId: u } = b2(), d = al((p = (b = e.map) == null ? void 0 : b.root) == null ? void 0 : p.nodes, (_ = (x = e.map) == null ? void 0 : x.root) == null ? void 0 : _.edges, e.nodesInFocus, e.topN);
  ue(() => {
    const y = r(d.nodes, d.edges);
    i(y.nodes), l(y.edges);
  }, [d.nodes, d.edges, r]), ue(() => {
    if (u(e.selectedNodeId), e.selectedNodeId) {
      const y = o.find((S) => S.id === e.selectedNodeId);
      y && !y.hidden && n([y], o);
    }
  }, [e.selectedNodeId, o, n]), ue(() => {
    var y;
    if (d.nodes) {
      const S = r(d.nodes, d.edges ?? []);
      i(S.nodes), l(S.edges), (y = e.nodesInFocus) != null && y.length ? n(e.nodesInFocus, S.nodes) : t();
    }
  }, [d.nodes, d.edges, n, t, e.nodesInFocus]);
  const f = rf(), h = e.breadcrumbs ?? f.breadcrumbs, C = e.addBreadcrumb ?? f.addBreadcrumb, g = e.navigateToBreadcrumb ?? f.navigateToBreadcrumb, { onBreadcrumbClick: v, onEdgeClick: L } = Pp({
    onDataFetch: e.onDataFetch,
    navigateToBreadcrumb: g,
    onEdgeClick: e.onEdgeClick,
    onBreadcrumbClick: e.onBreadcrumbClick
  });
  return /* @__PURE__ */ m.jsx(
    wp,
    {
      onDataFetch: e.onDataFetch,
      addBreadcrumb: C,
      onDashboardClick: e.onDashboardClick,
      children: /* @__PURE__ */ m.jsx("div", { className: `${E5.container} celestial reset`, children: /* @__PURE__ */ m.jsx("div", { className: E5.mapContainer, children: /* @__PURE__ */ m.jsx(
        Fp,
        {
          isLoading: e.isLoading,
          nodes: o,
          edges: a,
          onNodesChange: s,
          onEdgesChange: c,
          breadcrumbs: h,
          onBreadcrumbClick: v,
          onEdgeClick: L,
          emptyState: e.emptyState,
          hotspot: e.breadcrumbHotspot,
          numMatches: e.numMatchesForFilters
        }
      ) }) })
    }
  );
}, am = (e) => /* @__PURE__ */ m.jsx(v8, { children: /* @__PURE__ */ m.jsx(ml, { children: /* @__PURE__ */ m.jsx(Dp, { ...e }) }) }), dn = {
  nodesPerRow: 5,
  horizontalSpacing: 300,
  verticalSpacing: 100,
  startX: 0,
  startY: 0
}, fn = (e, t) => ({
  x: t.startX + e % t.nodesPerRow * t.horizontalSpacing,
  y: t.startY + Math.floor(e / t.nodesPerRow) * t.verticalSpacing
}), t4 = (e, t) => e.length <= t ? e : `${e.slice(0, t)}...`, Vp = (e, t, n) => {
  const r = [];
  return t.filter((i) => i.SourceNodeId === e.NodeId).forEach((i) => {
    var a, l, c;
    const s = n.find((u) => u.NodeId === i.DestinationNodeId);
    if ((a = s == null ? void 0 : s.KeyAttributes) != null && a.ResourceType) {
      const u = s.KeyAttributes.ResourceType;
      u && !r.includes(u) && r.push(u);
    }
    if (((l = s == null ? void 0 : s.KeyAttributes) == null ? void 0 : l.Type) === Wl) {
      const u = (c = s.KeyAttributes) == null ? void 0 : c.Name;
      u && !r.includes(u) && r.push(u);
    }
  }), r;
}, Hp = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "48px", viewBox: "0 0 50 48", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / apigateway") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-apigateway", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M36.4812053,0.152004581 L49.4812053,6.50200458 C49.8213708,6.66866339 50.0381698,7.01321907 50.0412053,7.39200458 L50.0412053,42.6820046 C50.0632674,43.1328656 49.7805438,43.5426099 49.3512053,43.6820046 L36.3312053,48.0020046 C36.2217392,48.0173307 36.1106715,48.0173307 36.001202,48.0020046 C35.7893789,48.002759 35.5827845,47.9362286 35.4112053,47.8120046 C35.1527911,47.6231732 35.000375,47.3220585 35.001202,47.0020046 L35.0012053,36.0020046 L32.0012053,36.0020046 L32.0012053,34.0020046 L35.0012053,34.0020046 L35.0012053,14.0020046 L32.0012053,14.0020046 L32.0012053,12.0020046 L35.0012053,12.0020046 L35.001202,1.00200458 C35.0026549,0.654518136 35.1843897,0.332696081 35.4812053,0.152004581 C35.7906064,-0.0266282137 36.1718043,-0.0266282137 36.4812053,0.152004581 Z M14.5312063,0.152003067 C14.8241918,0.335119033 15.0018974,0.65650276 15.0012087,1.00200458 L15.001,12.002 L17.0012053,12.0020046 L17.0012053,14.0020046 L15.001,14.002 L15.001,34.002 L17.0012053,34.0020046 L17.0012053,36.0020046 L15.001,36.002 L15.0012087,47.0020046 C15.0020356,47.3220585 14.8496196,47.6231732 14.5912053,47.8120046 C14.4196262,47.9362286 14.2130318,48.002759 14.0012053,48.0020046 C13.8983716,48.0163743 13.7940391,48.0163743 13.6912053,48.0020046 L0.691205332,43.6820046 C0.261866839,43.5426099 -0.0208566888,43.1328656 0.00120533243,42.6820046 L0.00120533243,7.34200458 C0.00424082934,6.96321907 0.221039908,6.61866339 0.561205332,6.45200458 L13.5612053,0.102004581 C13.8714655,-0.0500172183 14.2382207,-0.0311128994 14.5312063,0.152003067 Z M29.0012053,34.0020046 L29.0012053,36.0020046 L26.0012053,36.0020046 L26.0012053,34.0020046 L29.0012053,34.0020046 Z M23.0012053,34.0020046 L23.0012053,36.0020046 L20.0012053,36.0020046 L20.0012053,34.0020046 L23.0012053,34.0020046 Z M26.0397453,17.7923299 L27.9343896,18.4328946 L23.9596859,30.1891623 L22.0650416,29.5485976 L26.0397453,17.7923299 Z M20.6012053,19.5020046 L21.9012053,21.0020046 L19.0012053,23.4720046 L21.8712053,25.9220046 L20.6112053,27.4420046 L16.8512053,24.2320046 C16.6290389,24.0420163 16.5011284,23.7643288 16.5011284,23.4720046 C16.5011284,23.1796804 16.6290389,22.9019928 16.8512053,22.7120046 L20.6012053,19.5020046 Z M29.3912053,19.4820046 L33.1512053,22.6820046 C33.3733717,22.8719928 33.5012823,23.1496804 33.5012823,23.4420046 C33.5012823,23.7343288 33.3733717,24.0120163 33.1512053,24.2020046 L29.4012053,27.4420046 L28.1012053,25.9220046 L31.0012053,23.4620046 L28.1012053,21.0020046 L29.3912053,19.4820046 Z M29.0012053,12.0020046 L29.0012053,14.0020046 L26.0012053,14.0020046 L26.0012053,12.0020046 L29.0012053,12.0020046 Z M23.0012053,12.0020046 L23.0012053,14.0020046 L20.0012053,14.0020046 L20.0012053,12.0020046 L23.0012053,12.0020046 Z", id: "Combined-Shape", fill: "currentColor" }))), Bp = q(Hp), Wp = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 21, height: 22, viewBox: "0 0 21 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { clipPath: "url(#clip0_5209_82767)" }, /* @__PURE__ */ w.createElement("path", { d: "M10.5039 0L0 5.52821L10.5039 11.0489L21 5.52821L10.5039 0Z", fill: "#7D8998" }), /* @__PURE__ */ w.createElement("path", { d: "M10.5039 12.6558C10.3802 12.6558 10.2488 12.6258 10.1329 12.5656L3.57858 9.11328L0 11.0011L10.5039 16.5293L21 11.0011L17.4214 9.11328L10.8671 12.5581C10.7512 12.6182 10.6275 12.6483 10.5039 12.6483V12.6558Z", fill: "currentColor" }), /* @__PURE__ */ w.createElement("path", { d: "M17.4291 14.5898L10.867 18.0422C10.7511 18.1023 10.6274 18.1324 10.4961 18.1324C10.3647 18.1324 10.241 18.1023 10.1251 18.0422L3.56304 14.5898L-0.0078125 16.4702L10.4961 21.9984L20.9999 16.4702L17.4291 14.5898Z", fill: "currentColor" })), /* @__PURE__ */ w.createElement("defs", null, /* @__PURE__ */ w.createElement("clipPath", { id: "clip0_5209_82767" }, /* @__PURE__ */ w.createElement("rect", { width: 21, height: 22, fill: "white" })))), zp = q(Wp), Xp = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "40px", height: "47px", viewBox: "0 0 40 47", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / appmesh") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-appmesh", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M20.3214726,-1.20204251 L40.2343443,9.48556428 L40.2180093,12.2224804 C40.0912709,11.7902862 39.8519345,11.3769345 39.5,11.025 L39.5,11.025 L39.3651599,10.9002363 C38.8451385,10.4550567 38.1514694,10.2476091 37.4696131,10.2778934 L37.4696131,10.2778934 L37.5,10.225 L31.8,7.125 L30.8,8.925 L35.3573959,11.4049495 C34.9710016,11.9317242 34.8167308,12.5739354 34.8945834,13.2055648 L34.8945834,13.2055648 L30.7,15.225 L31.6,17.025 L35.8606959,14.9730669 C36.0537933,15.1370209 36.2699073,15.2739926 36.4998464,15.3793865 L36.4998464,15.3793865 L36.5,22.525 L38.5,22.525 L38.5009425,15.4614978 C38.873565,15.3246323 39.2184832,15.1065168 39.5,14.825 C39.8429116,14.5132622 40.0789247,14.1334981 40.2080392,13.7250909 L40.0700154,34.2595692 C39.9332725,33.9501251 39.7395994,33.6645994 39.5,33.425 C39.2185222,33.1435222 38.8736607,32.9412742 38.5010976,32.8182559 L38.5010976,32.8182559 L38.5,24.525 L36.5,24.525 L36.499765,32.8927451 C36.2037175,33.0169917 35.9305901,33.1944099 35.7,33.425 C34.8520833,34.1958333 34.6577691,35.3825955 35.1170573,36.3898645 L35.1170573,36.3898645 L30.3,38.925 L31.2,40.725 L36.66523,37.8488206 C36.9643395,37.9631534 37.2821698,38.025 37.6,38.025 C38.3,38.025 39,37.725 39.5,37.225 C39.7308478,36.9941522 39.919063,36.7206718 40.0548041,36.4242422 L40.0428744,38.1909312 L20.4285275,48.5480969 L-0.0290446091,37.8217833 L-0.090655708,9.8606854 L20.3214726,-1.20204251 Z M21.3,34.725 L19.3,34.725 L19.3001155,41.8134381 C18.9767134,41.950897 18.670249,42.154751 18.4,42.425 C18.2765823,42.5484177 18.1653501,42.684021 18.0678074,42.828802 L18.0678074,42.828802 L13,40.125 L12.1,41.925 L17.6649136,44.8936702 C17.7785124,45.3919421 18.0363636,45.8613636 18.4,46.225 C18.9,46.725 19.6,47.025 20.3,47.025 C21,47.025 21.6,46.725 22.2,46.225 C22.5788153,45.8806225 22.8271751,45.4532279 22.9450794,44.9959104 L22.9450794,44.9959104 L28.3,42.225 L27.4,40.425 L22.5929657,42.9119032 C22.4829778,42.7404334 22.3519892,42.5769892 22.2,42.425 C21.9399068,42.1388975 21.6324597,41.9272083 21.3005321,41.7899325 L21.3005321,41.7899325 L21.3,34.725 Z M20.3,43.525 C20.4,43.525 20.6,43.625 20.8,43.725 C21.1,44.025 21.1,44.425 20.8,44.725 C20.5,45.025 20.1,45.025 19.8,44.725 C19.5,44.425 19.5,44.025 19.8,43.725 C19.9,43.625 20.1,43.525 20.3,43.525 Z M3.7,24.525 L1.7,24.525 L1.70028272,32.8529206 C1.36556144,32.9778369 1.05646998,33.16853 0.8,33.425 C0.3,33.925 0,34.625 0,35.325 C0,36.025 0.3,36.725 0.8,37.225 C1.3,37.725 2,38.025 2.7,38.025 C3.09661734,38.025 3.49323467,37.9286906 3.85347299,37.7542614 L3.85347299,37.7542614 L9.1,40.525 L10,38.725 L5.24158761,36.2119687 C5.34454684,35.9269086 5.4,35.6259543 5.4,35.325 C5.4,34.625 5.1,33.925 4.6,33.425 L4.6,33.425 L4.46515986,33.3002363 C4.23827155,33.1060019 3.97832721,32.9570228 3.70073049,32.853299 L3.70073049,32.853299 L3.7,24.525 Z M2.7,34.625 C2.9,34.625 3.1,34.725 3.2,34.825 L3.2,34.825 L3.24953704,34.8828704 C3.33055556,34.9916667 3.4,35.1583333 3.4,35.325 C3.4,35.525 3.3,35.725 3.2,35.825 C2.9,36.125 2.5,36.125 2.2,35.825 C2.1,35.725 2,35.525 2,35.325 C2,35.125 2.1,34.925 2.2,34.825 C2.3,34.725 2.5,34.625 2.7,34.625 Z M37.6,34.625 C37.8,34.625 38,34.725 38.1,34.825 C38.4,35.125 38.4,35.525 38.1,35.825 C37.8,36.125 37.4,36.125 37.1,35.825 C36.8,35.525 36.8,35.125 37.1,34.825 C37.2,34.725 37.4,34.625 37.6,34.625 Z M27.1,17.025 L21.8079169,19.5735515 C20.9783357,18.9726602 19.8667474,18.9436238 18.9604371,19.4864425 L18.9604371,19.4864425 L14.3,17.025 L13.4,18.825 L17.7053544,21.1006552 C17.6365348,21.336437 17.6,21.5807185 17.6,21.825 C17.6,22.525 17.9,23.225 18.4,23.725 C18.6562917,23.9812917 18.9651318,24.1850351 19.2995849,24.3227624 L19.2995849,24.3227624 L19.3,31.625 L21.3,31.625 L21.3005975,24.344714 C21.6083871,24.2193891 21.9041935,24.0208065 22.2,23.725 C22.9121589,23.0775828 23.1632539,22.1367614 22.953285,21.2553092 L22.953285,21.2553092 L28,18.825 L27.1,17.025 Z M20.3,21.125 C20.4,21.125 20.6,21.225 20.8,21.325 C21.1,21.625 21.1,22.025 20.8,22.325 C20.5,22.625 20.1,22.625 19.8,22.325 C19.5,22.025 19.5,21.625 19.8,21.325 C19.9,21.225 20.1,21.125 20.3,21.125 Z M8.8,7.225 L3.12059405,10.3053179 C2.28956448,10.1845775 1.40052847,10.4244715 0.8,11.025 C0.3,11.525 0,12.225 0,12.925 C0,13.625 0.3,14.325 0.8,14.825 C1.05629173,15.0812917 1.36513182,15.2850351 1.69958485,15.4227624 L1.69958485,15.4227624 L1.7,22.525 L3.7,22.525 L3.70142044,15.4223482 C4.03548704,15.2846267 4.34396507,15.0810349 4.6,14.825 C4.73773275,14.6872673 4.86028925,14.5343583 4.96557924,14.3704535 L4.96557924,14.3704535 L9.8,16.925 L10.7,15.125 L5.4,12.325 L5.35040513,12.4280801 C5.29323013,12.1408507 5.18800873,11.8618982 5.04199589,11.6057325 L5.04199589,11.6057325 L9.8,9.025 L8.8,7.225 Z M2.7,12.225 C2.9,12.225 3.1,12.325 3.2,12.425 C3.3,12.525 3.4,12.725 3.4,12.925 C3.4,13.125 3.3,13.325 3.2,13.425 C2.9,13.725 2.5,13.725 2.2,13.425 C2.1,13.325 2,13.125 2,12.925 C2,12.725 2.1,12.525 2.2,12.425 C2.3,12.325 2.5,12.225 2.7,12.225 Z M37.6,12.225 C37.8,12.225 38,12.325 38.1,12.425 C38.4,12.725 38.4,13.125 38.1,13.425 C37.8,13.725 37.4,13.725 37.1,13.425 C36.8,13.125 36.8,12.725 37.1,12.425 C37.2,12.325 37.4,12.225 37.6,12.225 Z M22.2,0.825 C21.2,-0.275 19.5,-0.275 18.4,0.825 C17.9645933,1.2604067 17.6808498,1.84747659 17.6148047,2.45413934 L17.6148047,2.45413934 L17.6,2.425 L12.3,5.325 L13.3,7.125 L18.2247226,4.43174512 C18.279997,4.49894241 18.3384848,4.56348485 18.4,4.625 C18.9,5.125 19.6,5.425 20.3,5.425 C21,5.425 21.6,5.125 22.2,4.625 C22.2821605,4.55030864 22.3581843,4.47171212 22.4280714,4.38975214 L22.4280714,4.38975214 L27.3,7.025 L28.3,5.225 L22.9925445,2.35321011 C22.9050928,1.80322068 22.6409113,1.26591131 22.2,0.825 Z M20.3,2.025 C20.4,2.025 20.6,2.025 20.8,2.225 C21.1,2.525 21.1,2.925 20.8,3.225 C20.5,3.525 20.1,3.525 19.8,3.225 C19.5,2.925 19.5,2.525 19.8,2.225 C19.9,2.125 20.1,2.025 20.3,2.025 Z", id: "Combined-Shape", fill: "currentColor" }))), n4 = q(Xp), Gp = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "48px", height: "48px", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Icon-Service/48/AWS-Fusion_48_White") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Icon-Service/48/AWS-Fusion_48", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M14.707,34.707 L13.293,33.293 L4,42.586 L4,38 L2,38 L2,45 C2,45.552 2.447,46 3,46 L10,46 L10,44 L5.414,44 L14.707,34.707 Z M45,2 L38,2 L38,4 L42.586,4 L33.793,12.793 L35.207,14.207 L44,5.414 L44,10 L46,10 L46,3 C46,2.448 45.553,2 45,2 L45,2 Z M27,39 L39,39 L39,27 L27,27 L27,39 Z M41,26 L41,40 C41,40.552 40.553,41 40,41 L26,41 C25.447,41 25,40.552 25,40 L25,26 C25,25.448 25.447,25 26,25 L40,25 C40.553,25 41,25.448 41,26 L41,26 Z M9,21 L21,21 L21,9 L9,9 L9,21 Z M23,8 L23,22 C23,22.552 22.553,23 22,23 L8,23 C7.447,23 7,22.552 7,22 L7,8 C7,7.448 7.447,7 8,7 L22,7 C22.553,7 23,7.448 23,8 L23,8 Z M22,25 L8,25 C7.447,25 7,25.448 7,26 L7,36.758 L9,34.758 L9,27 L21,27 L21,39 L13.242,39 L11.242,41 L22,41 C22.553,41 23,40.552 23,40 L23,26 C23,25.448 22.553,25 22,25 L22,25 Z M39,13.242 L41,11.242 L41,22 C41,22.552 40.553,23 40,23 L26,23 C25.447,23 25,22.552 25,22 L25,8 C25,7.448 25.447,7 26,7 L36.758,7 L34.758,9 L27,9 L27,21 L39,21 L39,13.242 Z", id: "Fill-4", fill: "currentColor" }))), r4 = q(Gp), Yp = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "49px", height: "45px", viewBox: "0 0 49 45", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / appsync") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-appsync", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M24.84,45.4000225 C21.0243794,45.4000225 17.2709905,44.433048 13.93,42.5900225 L14.93,40.8400225 C23.1635508,45.3463875 33.3990704,43.7457305 39.8637349,36.9408206 C46.3283993,30.1359107 47.4023994,19.8318101 42.48,11.8400225 L41.48,16.8400225 L39.48,16.4500225 L40.93,9.12002247 C41.0674413,8.60303914 41.5874012,8.28577543 42.11,8.40002247 L49.44,9.85002247 L49.05,11.8500225 L44.15,10.8500225 C48.4192989,17.8500763 48.5857648,26.6074018 44.5855787,33.7646484 C40.5853925,40.9218949 33.0391878,45.3686076 24.84,45.4000225 Z M7.5,36.7100225 L7.25,36.7100225 L0,34.8600225 L0.49,32.9200225 L5.16,34.0900225 C0.0379917764,25.2904396 1.40788307,14.1559379 8.5101038,6.86031675 C15.6123245,-0.435304351 26.7060132,-2.1037779 35.64,2.78002247 L34.72,4.53002247 C26.5087448,0 16.2774367,1.5592342 9.78841472,8.32967385 C3.29939271,15.1001135 2.17561481,25.3883667 7.05,33.4000225 L8.35,28.2500225 L10.29,28.7300225 L8.47,35.9500225 C8.35970723,36.3961449 7.95955365,36.7100225 7.5,36.7100225 Z M32.72,32.4000225 C30.8933951,32.4032259 29.2966491,31.1686286 28.84,29.4000225 L20.62,29.4000225 C20.1011489,31.4093284 18.1318482,32.6881503 16.085234,32.3448027 C14.0386199,32.0014552 12.5944693,30.1499802 12.7597466,28.0813573 C12.9250238,26.0127345 14.6448325,24.4140511 16.72,24.4000225 C17.0812176,24.4002607 17.4408806,24.4473194 17.79,24.5400225 L21.97,17.3000225 C20.7806652,16.1740444 20.3978916,14.4367913 21.0038898,12.9152427 C21.609888,11.3936942 23.0822137,10.395285 24.72,10.395285 C26.3577863,10.395285 27.830112,11.3936942 28.4361102,12.9152427 C29.0421084,14.4367913 28.6593348,16.1740444 27.47,17.3000225 L31.72,24.5400225 C32.0464514,24.4531181 32.3822341,24.4061085 32.72,24.4000225 C34.929139,24.4000225 36.7199999,26.1908835 36.7199999,28.4000225 C36.7199999,30.6091614 34.929139,32.4000224 32.72,32.4000225 Z M20.59,27.4000225 L28.84,27.4000225 C29.0259715,26.6911915 29.3989733,26.0453457 29.92,25.5300225 L25.72,18.2700225 C25.0640888,18.439378 24.3759112,18.439378 23.72,18.2700225 L19.52,25.5500225 C20.0529389,26.0513005 20.4341232,26.6923832 20.62,27.4000225 L20.59,27.4000225 Z", id: "Shape", fill: "currentColor" }))), o4 = q(Yp), qp = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / autoscaling") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-autoscaling", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M26,36.8657983 L26,46.455 L30.66,41.7957983 L32.07,43.2057983 L25.71,49.5757983 C25.5212812,49.7629848 25.265803,49.8673351 25,49.8658151 C24.735233,49.8621148 24.4816338,49.7585321 24.29,49.5757983 L17.93,43.2057983 L19.34,41.7957983 L24,46.455 L24,36.8657983 L26,36.8657983 Z M25.52,15.0157983 L33.041,19.236 L33.5289423,18.9541655 L34.5310577,20.6849933 L34.03,20.974 L34.03,29.3757983 C34.0293783,29.7365624 33.8344869,30.0690242 33.52,30.2457983 L26,34.474 L26,34.8667361 L24,34.8667361 L24,34.453 L16.52,30.2457983 C16.2055131,30.0690242 16.0106217,29.7365624 16.01,29.3757983 L16.01,21.001 L15.4802496,20.6947582 L16.4823649,18.9639304 L16.976,19.249 L24.52,15.0157983 C24.8294011,14.8371655 25.2105989,14.8371655 25.52,15.0157983 Z M6.28,17.8657983 L12.64,24.2257983 C12.8271865,24.4145172 12.9315368,24.6699953 12.9300167,24.9357983 C12.9315368,25.2016013 12.8271865,25.4570795 12.64,25.6457983 L6.28,32.0057983 L4.86,30.5857983 L9.588,25.865 L0,25.8657983 L0,23.8657983 L9.45,23.865 L4.86,19.2757983 L6.28,17.8657983 Z M43.72,17.8657983 L45.14,19.2757983 L40.55,23.865 L50,23.8657983 L50,25.8657983 L40.412,25.865 L45.14,30.5857983 L43.72,32.0057983 L37.36,25.6457983 C37.1728135,25.4570795 37.0684632,25.2016013 37.0699833,24.9357983 C37.0684632,24.6699953 37.1728135,24.4145172 37.36,24.2257983 L43.72,17.8657983 Z M25,0 C25.2666375,0 25.5222334,0.106485674 25.71,0.295798324 L32.07,6.65579832 L30.66,8.07579832 L26,3.415 L26,12.8657983 L24,12.8657983 L24,3.415 L19.34,8.07579832 L17.93,6.65579832 L24.29,0.295798324 C24.4777666,0.106485674 24.7333625,0 25,0 Z", id: "Combined-Shape", fill: "currentColor" }))), i4 = q(qp), Up = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "80px", height: "80px", viewBox: "0 0 56 56", x: -40, y: -40, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Icon-Architecture/64/Arch_Amazon-Bedrock_64") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Icon-Architecture/64/Arch_Amazon-Bedrock_64", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("g", { id: "Icon-Service/64/Amazon-Bedrock_64" }, /* @__PURE__ */ w.createElement("path", { d: "M52,26.9998918 C50.897,26.9998918 50,26.1028918 50,24.9998918 C50,23.8968918 50.897,22.9998918 52,22.9998918 C53.103,22.9998918 54,23.8968918 54,24.9998918 C54,26.1028918 53.103,26.9998918 52,26.9998918 L52,26.9998918 Z M20.113,53.9078918 L16.865,52.0138918 L23.53,47.8478918 L22.47,46.1518918 L14.913,50.8748918 L9,47.4258918 L9,38.5348918 L14.555,34.8318918 L13.445,33.1678918 L7.959,36.8248918 L2,33.4198918 L2,28.5798918 L8.496,24.8678918 L7.504,23.1318918 L2,26.2768918 L2,22.5798918 L8,19.1518918 L14,22.5798918 L14,26.4338918 L9.485,29.1428918 L10.515,30.8568918 L15,28.1658918 L19.485,30.8568918 L20.515,29.1428918 L16,26.4338918 L16,22.5348918 L21.555,18.8318918 C21.833,18.6458918 22,18.3338918 22,17.9998918 L22,10.9998918 L20,10.9998918 L20,17.4648918 L14.959,20.8248918 L9,17.4198918 L9,8.57389181 L14,5.65789181 L14,13.9998918 L16,13.9998918 L16,4.49089181 L20.113,2.09189181 L28,4.72089181 L28,33.4338918 L13.485,42.1428918 L14.515,43.8568918 L28,35.7658918 L28,51.2788918 L20.113,53.9078918 Z M50,37.9998918 C50,39.1028918 49.103,39.9998918 48,39.9998918 C46.897,39.9998918 46,39.1028918 46,37.9998918 C46,36.8968918 46.897,35.9998918 48,35.9998918 C49.103,35.9998918 50,36.8968918 50,37.9998918 L50,37.9998918 Z M40,47.9998918 C40,49.1028918 39.103,49.9998918 38,49.9998918 C36.897,49.9998918 36,49.1028918 36,47.9998918 C36,46.8968918 36.897,45.9998918 38,45.9998918 C39.103,45.9998918 40,46.8968918 40,47.9998918 L40,47.9998918 Z M39,7.99989181 C39,6.89689181 39.897,5.99989181 41,5.99989181 C42.103,5.99989181 43,6.89689181 43,7.99989181 C43,9.10289181 42.103,9.99989181 41,9.99989181 C39.897,9.99989181 39,9.10289181 39,7.99989181 L39,7.99989181 Z M52,20.9998918 C50.141,20.9998918 48.589,22.2798918 48.142,23.9998918 L30,23.9998918 L30,18.9998918 L41,18.9998918 C41.553,18.9998918 42,18.5518918 42,17.9998918 L42,11.8578918 C43.72,11.4108918 45,9.85789181 45,7.99989181 C45,5.79389181 43.206,3.99989181 41,3.99989181 C38.794,3.99989181 37,5.79389181 37,7.99989181 C37,9.85789181 38.28,11.4108918 40,11.8578918 L40,16.9998918 L30,16.9998918 L30,3.99989181 C30,3.56889181 29.725,3.18789181 29.316,3.05089181 L20.316,0.050891811 C20.042,-0.039108189 19.744,-0.00910818904 19.496,0.135891811 L7.496,7.13589181 C7.188,7.31489181 7,7.64489181 7,7.99989181 L7,17.4198918 L0.504,21.1318918 C0.192,21.3098918 0,21.6408918 0,21.9998918 L0,33.9998918 C0,34.3588918 0.192,34.6898918 0.504,34.8678918 L7,38.5798918 L7,47.9998918 C7,48.3548918 7.188,48.6848918 7.496,48.8638918 L19.496,55.8638918 C19.65,55.9538918 19.825,55.9998918 20,55.9998918 C20.106,55.9998918 20.213,55.9828918 20.316,55.9488918 L29.316,52.9488918 C29.725,52.8118918 30,52.4308918 30,51.9998918 L30,39.9998918 L37,39.9998918 L37,44.1418918 C35.28,44.5888918 34,46.1418918 34,47.9998918 C34,50.2058918 35.794,51.9998918 38,51.9998918 C40.206,51.9998918 42,50.2058918 42,47.9998918 C42,46.1418918 40.72,44.5888918 39,44.1418918 L39,38.9998918 C39,38.4478918 38.553,37.9998918 38,37.9998918 L30,37.9998918 L30,32.9998918 L42.5,32.9998918 L44.638,35.8498918 C44.239,36.4718918 44,37.2068918 44,37.9998918 C44,40.2058918 45.794,41.9998918 48,41.9998918 C50.206,41.9998918 52,40.2058918 52,37.9998918 C52,35.7938918 50.206,33.9998918 48,33.9998918 C47.316,33.9998918 46.682,34.1878918 46.119,34.4918918 L43.8,31.3998918 C43.611,31.1478918 43.314,30.9998918 43,30.9998918 L30,30.9998918 L30,25.9998918 L48.142,25.9998918 C48.589,27.7198918 50.141,28.9998918 52,28.9998918 C54.206,28.9998918 56,27.2058918 56,24.9998918 C56,22.7938918 54.206,20.9998918 52,20.9998918 L52,20.9998918 Z", id: "Fill-1", fill: "currentColor" })))), s4 = q(Up), Kp = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "34px", height: "29px", viewBox: "0 0 34 29", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / client") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-client", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M16.9461911,16 C33.5534583,16 33.8856036,28.1413796 33.8922465,28.6270348 L33.8923821,28.6420029 L33.8923821,28.6420029 L0,28.6420029 C0,20.214001 5.6487304,16 16.9461911,16 Z M17,0 C21.418278,0 25,3.581722 25,8 C25,12.418278 21.418278,16 17,16 C12.581722,16 9,12.418278 9,8 C9,3.581722 12.581722,0 17,0 Z", id: "Combined-Shape", fill: "currentColor" })));
q(Kp);
const Qp = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "43px", viewBox: "0 0 50 43", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / cloudformation") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-cloudformation", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M23,9.23949772 C23.5522847,9.23949772 24,9.68721297 24,10.2394977 L24,20.239 L5,20.2394977 L5,22.2394977 L24,22.239 L24,42.2394977 C24,42.7917825 23.5522847,43.2394977 23,43.2394977 L1,43.2394977 C0.44771525,43.2394977 0,42.7917825 0,42.2394977 L0,10.2394977 C0,9.68721297 0.44771525,9.23949772 1,9.23949772 L23,9.23949772 Z M11.92,30.2394977 L5,30.2394977 L5,32.2394977 L11.88,32.2394977 L11.92,30.2394977 Z M19,30.2394977 L14,30.2394977 L14,32.2394977 L19,32.2394977 L19,30.2394977 Z M32.88,3.34949772 C33.870599,4.35067613 34.682342,5.51417447 35.28,6.78949772 C36.6436458,5.79867944 38.4029633,5.53030897 40,6.06949772 C42.158694,6.87788798 43.594711,8.93445523 43.61,11.2394977 C46.83,12.0394977 50,14.4694977 50,19.1094977 C50.0790099,23.3751591 46.796712,26.9522479 42.54,27.2394977 L28,27.2394977 L28,22.239 L35,22.2394977 L35,20.2394977 L28,20.239 L28,8.23949772 C28,7.72666189 27.6139598,7.30399056 27.1166211,7.24622546 L27,7.23949772 L14.8,7.23949772 C15.8140697,4.44987689 17.8976633,2.17915568 20.59,0.929497724 C24.7887926,-0.921013883 29.6962119,0.0452964963 32.88,3.34949772 Z M16,25.2394977 L5,25.2394977 L5,27.2394977 L16,27.2394977 L16,25.2394977 Z M41,20.2394977 L37,20.2394977 L37,22.2394977 L41,22.2394977 L41,20.2394977 Z M13,15.2394977 L5,15.2394977 L5,17.2394977 L13,17.2394977 L13,15.2394977 Z", id: "Combined-Shape", fill: "currentColor" }))), a4 = q(Qp), Jp = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / cloudfront") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-cloudfront", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M37.22,3.22365384 C44.5362565,7.32592352 49.3077062,14.8238163 49.9253309,23.1889084 C50.5429555,31.5540004 46.9244352,39.6713547 40.29,44.8036538 C38.1169554,46.4887493 35.6763474,47.7969423 33.07,48.6736538 C30.4753066,49.575244 27.746859,50.0316758 25,50.0237578 C11.1928813,50.0237578 0,38.8307726 0,25.0236538 C0,24.5136538 0,24.0236538 0.05,23.5136538 C0.666817155,13.0177365 7.78476496,4.02937901 17.86,1.02365384 C24.3452872,-0.891499543 31.3297826,-0.0978068829 37.22,3.22365384 Z M34.13,41.6136538 C33.5692085,43.5730962 32.8085466,45.4697245 31.86,47.2736538 L31.86,47.2736538 L33.64,48.1936538 C34.645541,46.2739702 35.4530374,44.2569046 36.05,42.1736538 L36.05,42.1736538 Z M11.02,28.7636538 C10.95,29.1336538 10.87,29.4936538 10.8,29.8436538 C10.4210168,31.389518 10.2131016,32.9723561 10.18,34.5636538 C10.2424439,38.6933713 11.1156476,42.7705868 12.75,46.5636538 L12.75,46.5636538 L14.6,45.8036538 C13.0791778,42.2487044 12.2705738,38.4299192 12.22,34.5636538 C12.2560981,33.110176 12.4505809,31.6649678 12.8,30.2536538 C12.87,29.8936538 12.95,29.5336538 13.02,29.1536538 L13.02,29.1536538 Z M39.28,40.6236538 L37.49,41.5136538 C37.95,42.4436538 38.37,43.3636538 38.74,44.3636538 L38.74,44.3636538 L40.61,43.6236538 C40.2171395,42.6020312 39.7732477,41.6007715 39.28,40.6236538 L39.28,40.6236538 Z M37.4822282,31.7037446 C35.827175,31.0149128 33.9201152,31.3914525 32.6510698,32.6576333 C31.3820243,33.923814 31.0011759,35.8300181 31.6862657,37.4866236 C32.3713554,39.1432292 33.9873232,40.2236652 35.78,40.2236652 C36.9539885,40.2263099 38.0808036,39.7618055 38.9118784,38.9326067 C39.7429533,38.1034078 40.2100114,36.9776454 40.2100114,35.8036538 C40.2140467,34.0109816 39.1372813,32.3925763 37.4822282,31.7037446 Z M35.78,33.3736538 C37.1220519,33.3736538 38.21,34.4616019 38.21,35.8036538 C38.21,37.1457058 37.1220519,38.2336538 35.78,38.2336538 C34.4379481,38.2336538 33.35,37.1457058 33.35,35.8036538 C33.35,34.4616019 34.4379481,33.3736538 35.78,33.3736538 Z M20,23.5236538 L19.3,25.4236538 C23.49758,26.8972542 27.3135799,29.2886597 30.47,32.4236538 L30.47,32.4236538 L31.85,31.0236538 C28.50671,27.6737563 24.4584645,25.1115756 20,23.5236538 L20,23.5236538 Z M31.89,13.1136538 L30.22,14.2036538 C33.3261251,18.8753801 35.1440291,24.2842482 35.49,29.8836538 L35.49,29.8836538 L37.49,29.7636538 C37.1229148,23.8171939 35.1910406,18.073318 31.89,13.1136538 L31.89,13.1136538 Z M15.5202198,18.8953925 C13.8665509,18.1939308 11.9529865,18.5605015 10.6756273,19.8234435 C9.39826807,21.0863856 9.01000135,22.995666 9.69264807,24.6571902 C10.3752948,26.3187144 11.9937068,27.4035394 13.79,27.4036538 C16.2150074,27.3984135 18.1872352,25.4484456 18.22,23.0236538 C18.2402742,21.227475 17.1738887,19.5968541 15.5202198,18.8953925 Z M13.79,20.5436538 C14.4432334,20.5435155 15.0690132,20.8063848 15.5261916,21.2729701 C15.98337,21.7395555 16.233441,22.3705587 16.22,23.0236538 C16.1925209,24.3588516 15.0927074,25.4216533 13.7573513,25.4034275 C12.4219951,25.3852016 11.3515975,24.2927794 11.3605693,22.957329 C11.3695411,21.6218787 12.4545196,20.5439366 13.79,20.5436538 Z M7.59,21.7336538 C5.30759899,21.7821445 3.03738356,22.0805923 0.82,22.6236538 L0.82,22.6236538 L1.28,24.5636538 L1.97081623,24.4041498 C3.81750655,24.0010907 5.69922457,23.7764533 7.59,23.7336538 L7.59,23.7336538 Z M21.37,10.6736538 C19.2771074,12.533341 17.4679034,14.6895617 16,17.0736538 L16,17.0736538 L17.68,18.1636538 C19.0475046,15.9352724 20.7356008,13.9203393 22.69,12.1836538 L22.69,12.1836538 Z M27.43,4.59365384 C24.9833786,4.59365384 23,6.5770324 23,9.02365384 C23,11.4702753 24.9833786,13.4536538 27.43,13.4536538 C28.604909,13.4536538 29.7316969,12.986923 30.562483,12.1561369 C31.3932692,11.3253507 31.86,10.1985629 31.86,9.02365384 C31.86,6.5770324 29.8766214,4.59365384 27.43,4.59365384 Z M27.43,6.60365384 C28.7681564,6.60365384 29.8544932,7.68550879 29.8600207,9.02365384 C29.8640484,10.007397 29.2745715,10.8965276 28.3668707,11.2757983 C27.45917,11.655069 26.4123477,11.4496441 25.7152976,10.7554625 C25.0182474,10.0612809 24.8085075,9.01531462 25.1840319,8.10605756 C25.5595563,7.19680049 26.4462485,6.60365384 27.43,6.60365384 Z M36.54,3.10365384 C34.9500042,3.41582887 33.3881495,3.85729531 31.87,4.42365384 L31.87,4.42365384 L32.55,6.30365384 C33.9670759,5.78198735 35.4255614,5.38056931 36.91,5.10365384 L36.91,5.10365384 Z M18.6,1.13365384 L17.69,2.91365384 C19.3123696,3.71928364 20.8586523,4.66981234 22.31,5.75365384 L22.31,5.75365384 L23.52,4.13365384 C21.9737425,2.9874529 20.3270424,1.9833675 18.6,1.13365384 L18.6,1.13365384 Z", id: "Combined-Shape", fill: "currentColor" }))), l4 = q(Jp), eL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "29px", viewBox: "0 0 50 29", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / cloudtrail") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-cloudtrail", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M31.27,3.6142161 C32.377101,4.7211439 33.2808705,6.01417734 33.94,7.4342161 C35.4116687,6.3276836 37.3326353,6.01375132 39.08,6.5942161 C41.36,7.3542161 42.79,9.4142161 43,12.1742161 C46.49,13.0342161 50,15.6442161 49.9701909,20.6742161 C49.9701909,26.9128126 44.8639925,29.0974848 42.0296258,29.4092914 L41.88,29.4242161 L21,29.4242161 L21,27.4242161 C20.9892328,27.4158442 20.9784721,27.4074775 20.9677179,27.3991161 L31,27.3997642 L31,21.4301631 L21.01,21.4299074 L21.01,17.3719074 L6,17.3719074 L5.999,17.394 L5.51,17.3942161 C6.38315014,15.07844 8.2452028,13.2805213 10.5778559,12.4848543 L10.86,12.3942161 L10.86,11.8542161 C10.9495355,7.18648144 13.6886626,2.97691651 17.92,1.0042161 C22.4790168,-0.993470786 27.799027,0.0466210925 31.27,3.6142161 Z M2,27.4242161 L2,29.4242161 L0,29.4242161 L0,27.4242161 L2,27.4242161 Z M11,27.4242161 L11,29.4242161 L4,29.4242161 L4,27.4242161 L11,27.4242161 Z M19,27.4242161 L19,29.4242161 L13,29.4242161 L13,27.4242161 L19,27.4242161 Z M10,23.4242161 L10,25.4242161 L1,25.4242161 L1,23.4242161 L10,23.4242161 Z M29,23.4242161 L29,25.4242161 L17,25.4242161 L17,23.4242161 L29,23.4242161 Z M15,23.4242161 L15,25.4242161 L12,25.4242161 L12,23.4242161 L15,23.4242161 Z M11,19.4242161 L11,21.4242161 L3,21.4242161 L3,19.4242161 L11,19.4242161 Z M19,19.4242161 L19,21.4242161 L13,21.4242161 L13,19.4242161 L19,19.4242161 Z", id: "Combined-Shape", fill: "currentColor" }))), c4 = q(eL), tL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "45px", viewBox: "0 0 50 45", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / cloudwatch") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-cloudwatch", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("rect", { id: "Rectangle", fill: "#D8D8D8", opacity: 0, x: 0, y: 0, width: 50.0124877, height: 45 }), /* @__PURE__ */ w.createElement("path", { d: "M40.7565926,33.6697747 L47.480615,40.4292333 C48.0756236,41.0263044 48.0756236,41.9921622 47.480615,42.5892333 C46.8750071,43.16321 45.9262228,43.16321 45.320615,42.5892333 L45.320615,42.5892333 L38.6409229,35.9095412 L40.7565926,33.6697747 Z M35.3959894,19.6423359 C38.6068492,20.9714284 40.700615,24.1041664 40.700615,27.5792333 C40.6961524,32.3175015 36.8569877,36.1602962 32.1168406,36.1692455 C28.6436596,36.1725165 25.508945,34.0817107 24.1768202,30.8721092 C22.8446953,27.6625074 23.5776157,23.9664656 26.0336992,21.5080606 C28.4897827,19.0496557 32.1851304,18.3132438 35.3959894,19.6423359 Z M29.130615,4.04923329 C30.3820784,5.32766209 31.3977038,6.81724608 32.130615,8.44923329 C33.172703,7.60813814 34.4714403,7.14934507 35.810615,7.14923329 C38.530615,7.14923329 41.590615,9.21923329 42.150615,13.7392333 C44.720615,14.3492333 50.000615,16.4392333 50.000615,23.2392333 C50.178926,26.7152407 48.3369759,29.9824629 45.270615,31.6292333 L41.8184231,31.8096034 C42.3845737,30.5139351 42.6991988,29.0832312 42.700615,27.5792333 C42.700615,23.2950685 40.119359,19.4329391 36.1609194,17.794396 C32.2024798,16.1558528 27.6467484,17.0637226 24.6188178,20.0945152 C21.5908871,23.1253078 20.6873217,27.6818949 22.3296037,31.6387847 C22.4958539,32.0393454 22.6848775,32.4257715 22.8948044,32.7968157 L19.010615,32.9992333 L8.01061495,32.9992333 C6.89699147,32.9834004 5.80975313,32.6579214 4.87061495,32.0592333 C1.78169856,30.1741245 -0.0699567555,26.7870431 0.0106149542,23.1692333 C-0.191371416,18.9714063 2.5075893,15.1812884 6.54061495,13.9992333 L6.54061495,13.2192333 C6.64260697,8.03770215 9.66178976,3.35796884 14.340615,1.12923329 C19.3928573,-1.11587845 25.3107071,0.0524867512 29.130615,4.04923329 Z M29.4769832,22.2475447 C27.691188,23.010462 26.4564174,24.6780787 26.2477564,26.6087697 C26.0477896,28.4590153 26.8200652,30.2745773 28.2767543,31.4144402 L28.470615,31.5592333 L29.660615,29.9992333 C28.9241499,29.4619443 28.442755,28.6439348 28.330615,27.7392333 C28.1316571,26.3915381 28.763673,25.0566094 29.9322232,24.3563545 C31.0392708,23.6929552 32.4215556,23.7228093 33.4947172,24.4173304 L33.670615,24.5392333 L34.860615,22.9292333 C33.3213363,21.7452871 31.2627785,21.4846274 29.4769832,22.2475447 Z", id: "Combined-Shape", fill: "currentColor" }))), p3 = q(tL), nL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "33px", height: "30px", viewBox: "0 0 33 30", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Icons", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("g", { id: "Group-2", transform: "translate(1.000000, -75.000000)", stroke: "currentColor", strokeWidth: 1.03488372 }, /* @__PURE__ */ w.createElement("path", { d: "M28.0232558,76 C29.6672662,76 31,77.3327338 31,78.9767442 L31,101.023256 C31,102.667266 29.6672662,104 28.0232558,104 L2.97674419,104 C1.33273377,104 1.97769005e-15,102.667266 0,101.023256 L0,78.9767442 C-2.0133321e-16,77.3327338 1.33273377,76 2.97674419,76 L28.0232558,76 Z M7.25581395,81 L5.74418605,81 C5.33318344,81 5,81.3331834 5,81.744186 L5,81.744186 L5,98.255814 C5,98.6668166 5.33318344,99 5.74418605,99 L5.74418605,99 L7.25581395,99 C7.66681656,99 8,98.6668166 8,98.255814 L8,98.255814 L8,81.744186 C8,81.3331834 7.66681656,81 7.25581395,81 L7.25581395,81 Z M13.255814,81 L11.744186,81 C11.3331834,81 11,81.3331834 11,81.744186 L11,81.744186 L11,98.255814 C11,98.6668166 11.3331834,99 11.744186,99 L11.744186,99 L13.255814,99 C13.6668166,99 14,98.6668166 14,98.255814 L14,98.255814 L14,81.744186 C14,81.3331834 13.6668166,81 13.255814,81 L13.255814,81 Z M19.255814,81 L17.744186,81 C17.3331834,81 17,81.3331834 17,81.744186 L17,81.744186 L17,98.255814 C17,98.6668166 17.3331834,99 17.744186,99 L17.744186,99 L19.255814,99 C19.6668166,99 20,98.6668166 20,98.255814 L20,98.255814 L20,81.744186 C20,81.3331834 19.6668166,81 19.255814,81 L19.255814,81 Z M25.255814,81 L23.744186,81 C23.3331834,81 23,81.3331834 23,81.744186 L23,81.744186 L23,98.255814 C23,98.6668166 23.3331834,99 23.744186,99 L23.744186,99 L25.255814,99 C25.6668166,99 26,98.6668166 26,98.255814 L26,98.255814 L26,81.744186 C26,81.3331834 25.6668166,81 25.255814,81 L25.255814,81 Z", id: "Combined-Shape-Copy-4" }))));
q(nL);
const rL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "42px", height: "50px", viewBox: "0 0 42 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / dynamodb") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-dynamodb", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M29.22,2.00840289 L28.46,3.84840289 C24.7818721,2.55488773 20.8973902,1.94814928 17,2.05840289 C8.42,2.05840289 2,4.67840289 2,7.05840289 C2,9.43840289 8.42,12.0584029 17,12.0584029 L17.71,12.0584029 L17.79,14.0584029 L15.07,20.0084029 L15.069,20.008 L15,22.0084029 C10.1642917,21.7834862 5.8994493,20.7857049 3.16022182,19.2455155 C2.55269627,19.7293247 2,20.3418298 2,21.0084029 C2,23.3584029 8.42,26.0084029 17,26.0084029 C17.87,26.0084029 18.73,26.0084029 19.57,25.9184029 L19.71,27.9184029 L19.71,27.9184029 L17.355,34.008 L17.39,34.0084029 L17.39,36.0084029 L17,36.0084029 C11.4169824,36.0084029 6.3286775,34.9748065 3.18815268,33.223137 C2.5698047,33.7105222 2,34.3315917 2,35.0084029 C2,37.3584029 8.42,40.0084029 17,40.0084029 C25.58,40.0084029 32,37.3884029 32,35.0084029 C32,34.3113621 31.4227833,33.6833363 30.8001034,33.2038401 C30.3555391,33.4627636 29.8943978,33.6904904 29.42,33.8884029 L28.66,32.0084029 C29.2317204,31.7762743 29.7807287,31.4917273 30.3,31.1584029 C31.08,30.6584029 32,29.8684029 32,29.0084029 L34,29.0084029 C34,30.0854432 33.4923727,31.0924659 32.4815752,32.0116433 C33.6539682,33.0767192 33.97127,34.1068981 33.9980841,34.8955456 L34,35.0084029 L34,43.0084029 C34,47.5684029 25.24,50.0084029 17,50.0084029 C8.82128424,50.0084029 0.130274624,47.6045625 0.00144986138,43.1097947 L0.000343991934,43.084134 L0.000343991934,43.084134 L0,35.0084029 C0,34.2114452 0.285813689,33.1286739 1.49522902,32.0233029 C0.297196747,30.911151 0,29.8158853 0,29.0684029 L0,21.0084029 C0,20.2132089 0.284550076,19.1334648 1.48721327,18.0306411 C0.294282317,16.9003924 0,15.8122112 0,15.0684029 L0,7.00840289 C0,2.45840289 8.76,0.00840288694 17,0.00840288694 C21.1618349,-0.0844963175 25.3049269,0.593587484 29.22,2.00840289 Z M5,41.8084029 C4.30964406,41.8084029 3.75,42.3680469 3.75,43.0584029 C3.75,43.7487588 4.30964406,44.3084029 5,44.3084029 C5.69035594,44.3084029 6.25,43.7487588 6.25,43.0584029 C6.25,42.3680469 5.69035594,41.8084029 5,41.8084029 Z M37.54,5.02839951 C37.8600539,5.02757257 38.1611686,5.17998865 38.35,5.43840289 C38.5418363,5.70093616 38.5940535,6.04034811 38.49,6.34840289 L35.93,14.0283995 L41.5,14.0283995 C41.9012802,14.0287299 42.2635008,14.2688979 42.42,14.6384029 C42.5747,15.0060715 42.4960999,15.430512 42.22,15.7184029 L20.22,38.7184029 C20.0374135,38.9265184 19.776718,39.0496246 19.5,39.0584029 C19.3239138,39.0565742 19.1514328,39.0082795 19,38.9184029 C18.5991539,38.6875895 18.4089137,38.2119892 18.54,37.7684029 L24.16,19.0084029 L18.5,19.0084029 C18.1554218,19.0522092 17.8188592,18.8819481 17.65,18.5784029 C17.4713672,18.2690018 17.4713672,17.887804 17.65,17.5784029 L23.65,5.57840289 C23.8194502,5.24212324 24.1634418,5.02954419 24.54,5.02839951 L37.54,5.02839951 Z M5,27.8084029 C4.30964406,27.8084029 3.75,28.3680469 3.75,29.0584029 C3.75,29.7487588 4.30964406,30.3084029 5,30.3084029 C5.69035594,30.3084029 6.25,29.7487588 6.25,29.0584029 C6.25,28.3680469 5.69035594,27.8084029 5,27.8084029 Z M5,13.8084029 C4.30964406,13.8084029 3.75,14.3680469 3.75,15.0584029 C3.75,15.7487588 4.30964406,16.3084029 5,16.3084029 C5.69035594,16.3084029 6.25,15.7487588 6.25,15.0584029 C6.25,14.3680469 5.69035594,13.8084029 5,13.8084029 Z", id: "Combined-Shape", fill: "currentColor" }))), u4 = q(rL), oL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / ebs") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-ebs", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M9.48442636,39.0924423 L10.8986399,40.5066558 L3.405,48 L10,48 L10,50 L1,50 C0.44771525,50 0,49.5522847 0,49 L0,40 L2,40 L2,46.576 L9.48442636,39.0924423 Z M40.612203,39.1961966 L48,46.584 L48,40 L50,40 L50,49 C50,49.5522847 49.5522847,50 49,50 L40,50 L40,48 L46.588,48 L39.1979895,40.6104102 L40.612203,39.1961966 Z M25,11.52 C30.297168,11.52 35.9725016,12.8435797 35.9999004,15.738931 L36,15.74 L36,34.26 C36,37.17 30.3,38.5 25,38.5 C19.7,38.5 14,37.17 14,34.26 L14,15.74 L14.001,15.739 L14.0056065,15.6028382 C14.2067835,12.802076 19.7865455,11.52 25,11.52 Z M25,13.5 L25,13.52 C19.17,13.52 16,15.11 16,15.76 C16,16.41 19.15,18 25,18 C30.85,18 34,16.41 34,15.76 C34,15.11 30.81,13.5 25,13.5 Z M10,0 L10,2 L3.414,2 L10.9028968,9.4890873 L9.48868325,10.9033009 L2,3.414 L2,10 L0,10 L0,1 C0,0.44771525 0.44771525,0 1,0 L10,0 Z M49,0 C49.5522847,0 50,0.44771525 50,1 L50,10 L48,10 L48,3.422 L40.6157492,10.8073496 L39.2015357,9.39313603 L46.593,2 L40,2 L40,0 L49,0 Z", id: "Combined-Shape", fill: "currentColor" }))), iL = q(oL), sL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / ec2") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-ec2", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M7,22 L7,24 L2,24 L2,48 L26,48 L26,43 L28,43 L28,48 C28,49.1045695 27.1045695,50 26,50 L2,50 C0.8954305,50 0,49.1045695 0,48 L0,24 C0,22.8954305 0.8954305,22 2,22 L7,22 Z M16,9 L16,12 L19,12 L19,9 L21,9 L21,12 L24,12 L24,9 L26,9 L26,12 L29,12 L29,9 L31,9 L31,12 L34,12 L34,9 L36,9 L36.0006686,12.0081746 C37.0584967,12.0994563 37.9011089,12.9423762 37.9919123,14.0003412 L41,14 L41,16 L38,16 L38,19 L41,19 L41,21 L38,21 L38,24 L41,24 L41,26 L38,26 L38,29 L41,29 L41,31 L38,31 L38,34 L41,34 L41,36 L37.9918254,36.0006686 C37.9005727,37.0581602 37.0581602,37.9005727 36.0006686,37.9918254 L36,41 L34,41 L34,38 L31,38 L31,41 L29,41 L29,38 L26,38 L26,41 L24,41 L24,38 L21,38 L21,41 L19,41 L19,38 L16,38 L16,41 L14,41 L13.9998342,37.9918568 C12.9427607,37.9009195 12.0996904,37.0589575 12.0082102,36.0010757 L9,36 L9,34 L12,34 L12,31 L9,31 L9,29 L12,29 L12,26 L9,26 L9,24 L12,24 L12,21 L9,21 L9,19 L12,19 L12,16 L9,16 L9,14 L12.0081234,13.9999306 C12.0991558,12.9415765 12.9424256,12.0991093 13.9998342,12.0081432 L14,9 L16,9 Z M48,0 C49.1045695,0 50,0.8954305 50,2 L50,26 C50,27.1045695 49.1045695,28 48,28 L43,28 L43,26 L48,26 L48,2 L24,2 L24,7 L22,7 L22,2 C22,0.8954305 22.8954305,0 24,0 L48,0 Z", id: "Combined-Shape", fill: "currentColor" }))), d4 = q(sL), aL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "48px", height: "54px", viewBox: "0 0 48 54", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / ecs") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-ecs", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("rect", { id: "Rectangle", fill: "#D8D8D8", opacity: 0, x: 0, y: 0, width: 48, height: 54 }), /* @__PURE__ */ w.createElement("path", { d: "M21.0007146,2.83889777 L21.0007146,11.9988978 L10.5307146,17.9988978 C10.2037097,18.1853069 10.001502,18.5324938 10.0007146,18.9088978 L10.0007146,18.9088978 L10.0007146,33.7588978 C9.99041693,34.13822 10.1957019,34.4906904 10.5307146,34.6688978 L10.5307146,34.6688978 L23.7807146,42.3288978 C24.1168183,42.5278294 24.534611,42.5278294 24.8707146,42.3288978 L24.8707146,42.3288978 L35.5207146,36.2188978 L43.5207146,40.8388978 L24.3307146,51.8888978 L2.00071461,38.9988978 L2.00071461,13.8388978 L21.0007146,2.83889777 Z M27.0007146,2.83889777 L46.0007146,13.8388978 L46.0007146,35.5988978 L38.0007146,30.9988978 L38.0007146,18.8888978 C37.9999272,18.5124938 37.7977195,18.1653069 37.4707146,17.9788978 L37.4707146,17.9788978 L27.0007146,11.9788978 L27.0007146,2.83889777 Z", id: "Combined-Shape", fill: "currentColor" }))), f4 = q(aL), lL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "48px", height: "54px", viewBox: "0 0 48 54", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / eks") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-eks", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("rect", { id: "Rectangle", fill: "#D8D8D8", opacity: 0, x: 0, y: 0, width: 48, height: 54 }), /* @__PURE__ */ w.createElement("path", { d: "M21.0000157,2.7339746 L21.0000157,12.0039746 L10.5000157,18.1339746 C10.2238965,18.2933888 10.042469,18.5734021 10.0065608,18.885575 L10.0000157,19.0039746 L10.0000157,34.0039746 C10.0109923,34.3052638 10.1570115,34.5830391 10.3933356,34.763036 L10.5000157,34.8339746 L23.5000157,42.3439746 C23.7707417,42.5002783 24.096437,42.5198163 24.3809053,42.4025885 L24.5000157,42.3439746 L35.0000157,36.2539746 L43.0000157,40.8739746 L24.0000157,51.8739746 L2.00001574,39.1639746 L2.00001574,13.7339746 L21.0000157,2.7339746 Z M27.0000157,2.8439746 L46.0000157,13.7639746 L46.0000157,35.7039746 L38.0000157,31.1239746 L38.0000355,18.8782676 C37.9817852,18.5875953 37.8372862,18.318827 37.6048858,18.1432892 L37.5000157,18.0739746 L27.0000157,12.0739746 L27.0000157,2.8439746 Z M21.0000157,19.0039746 L21.0000157,25.8339746 L27.5200157,19.0039746 L30.1600157,19.0039746 L23.3800157,26.3039746 L30.7500157,34.0039746 L28.0000157,34.0039746 L21.0000157,27.0039746 L21.0000157,34.0039746 L19.0000157,34.0039746 L19.0000157,19.0039746 L21.0000157,19.0039746 Z", id: "Combined-Shape", fill: "currentColor" }))), h4 = q(lL), cL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "51px", height: "45px", viewBox: "0 0 51 45", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / elasticache") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-elasticache", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M25.55,12 C32.1383333,12 38.8330306,13.6921528 39.054357,16.933834 L39.06,17.1 L39.06,39.9 C39.06,43.25 32.25,45 25.55,45 C18.85,45 12.06,43.25 12.06,39.9 L12.06,17.1 C12.06,13.75 18.85,12 25.55,12 Z M14.06,32.3 L12.06,32.3 C12.06,35.65 18.85,37.4 25.55,37.4 C32.1383333,37.4 38.8330306,35.7078472 39.054357,32.466166 L39.06,32.3 L37.06,32.3 C37.06,33.35 32.99,35.4 25.55,35.4 C18.11,35.4 14.06,33.35 14.06,32.3 Z M14.06,24.7 L12.06,24.7 C12.06,28.05 18.85,29.8 25.55,29.8 C32.1383333,29.8 38.8330306,28.1078472 39.054357,24.866166 L39.06,24.7 L37.06,24.7 C37.06,25.75 32.99,27.8 25.55,27.8 C18.11,27.8 14.06,25.75 14.06,24.7 Z M50.06,0 C50.6122847,0 51.06,0.44771525 51.06,1 L51.06,3.19 C51.06,3.74228475 50.6122847,4.19 50.06,4.19 C48.9046437,4.25460593 48.0145286,5.23373253 48.06,6.39 C48.0089047,7.55008699 48.9005869,8.53539572 50.06,8.6 C50.6122847,8.6 51.06,9.04771525 51.06,9.6 L51.06,27 C51.06,27.5522847 50.6122847,28 50.06,28 L41.06,28 L41.06,21 L44.06,21 C44.5728358,21 44.9955072,20.6139598 45.0532723,20.1166211 L45.06,20 L45.06,5 C45.06,4.48716416 44.6739598,4.06449284 44.1766211,4.00672773 L44.06,4 L37.06,4 C36.5471642,4 36.1244928,4.38604019 36.0667277,4.88337887 L36.06,5 L36.0610739,11.1020634 C35.7392473,10.9707897 35.4059585,10.8475746 35.0612074,10.732418 L35.06,5 C35.06,4.48716416 34.6739598,4.06449284 34.1766211,4.00672773 L34.06,4 L27.06,4 C26.5471642,4 26.1244928,4.38604019 26.0667277,4.88337887 L26.06,5 L26.06099,9.49844398 C25.8755309,9.49788165 25.6885343,9.49840032 25.5,9.5 L25.06,9.505 L25.06,5 C25.06,4.48716416 24.6739598,4.06449284 24.1766211,4.00672773 L24.06,4 L17.06,4 C16.5471642,4 16.1244928,4.38604019 16.0667277,4.88337887 L16.06,5 L16.0601767,10.8012352 C15.7152257,10.9154991 15.3819521,11.0372773 15.060356,11.1665698 L15.06,5 C15.06,4.48716416 14.6739598,4.06449284 14.1766211,4.00672773 L14.06,4 L7.06,4 C6.54716416,4 6.12449284,4.38604019 6.06672773,4.88337887 L6.06,5 L6.06,20 C6.06,20.5128358 6.44604019,20.9355072 6.94337887,20.9932723 L7.06,21 L10.06,21 L10.06,28 L1,28 C0.44771525,28 0,27.5522847 0,27 L0,9.6 C0,9.04771525 0.44771525,8.6 1,8.6 C1.56772432,8.5844474 2.1054694,8.3417529 2.4927154,7.92630938 C2.8799614,7.51086586 3.08432353,6.9574162 3.06,6.39 C3.11109525,5.22991301 2.21941314,4.24460428 1.06,4.18 C0.50771525,4.18 0.06,3.73228475 0.06,3.18 L0.06,1 C0.06,0.44771525 0.50771525,0 1.06,0 L50.06,0 Z M25.55,14 C18.11,14 14.06,16.05 14.06,17.1 C14.06,18.15 18.11,20.2 25.55,20.2 C32.99,20.2 37.06,18.15 37.06,17.1 C37.06,16.05 32.98,14 25.55,14 Z M13.06,6 L13.06,12 L13.3270442,12.0001521 C11.9471178,12.7904076 10.858103,13.7678598 10.06,14.9325087 L10.06,19 L8.06,19 L8.06,6 L13.06,6 Z M43.06,6 L43.06,19 L41.06,19 L41.06,14.9325087 C40.2655925,13.7680142 39.2049848,12.7906714 37.878177,12.0004803 L38.06,12 L38.06,6 L43.06,6 Z M23.06,6 L23.0603509,9.58194864 C21.2200293,9.69366866 19.5531812,9.9170158 18.0598064,10.2519901 L18.06,6 L23.06,6 Z M33.06,6 L33.0613957,10.1829501 C31.5661754,9.85116148 29.8994479,9.63995076 28.0612132,9.54931795 L28.06,6 L33.06,6 Z", id: "Combined-Shape", fill: "currentColor" }))), g4 = q(cL), uL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "45px", viewBox: "0 0 50 45", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / elasticbeanstalk") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-elasticbeanstalk", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M24.0073304,11.1172598 L24.0073304,11.1572598 C25.891678,11.1571324 27.4254194,12.6730396 27.4473304,14.5572598 C27.4473304,16.1089947 26.4198999,17.4207605 25.0082082,17.8493878 L25.0073304,36.9962598 L31.0073304,36.9972598 L31.0064527,30.5693878 C29.5947609,30.1407605 28.5673304,28.8289947 28.5673304,27.2772598 C28.5673304,25.3774002 30.1074709,23.8372598 32.0073304,23.8372598 C33.9049103,23.8427521 35.4418381,25.3796799 35.4473304,27.2772598 C35.4473304,28.8293608 34.4194151,30.1413794 33.007209,30.569691 L33.0073304,37.9972598 C33.0073304,38.5495445 32.5596152,38.9972598 32.0073304,38.9972598 L25.0073304,38.9962598 L25.0073304,44.9972598 L23.0073304,44.9972598 L23.0073304,33.9962598 L16.0073304,33.9972598 C15.4550457,33.9972598 15.0073304,33.5495445 15.0073304,32.9972598 L15.0064527,28.0393878 C13.5947609,27.6107605 12.5673304,26.2989947 12.5673304,24.7472598 C12.5673304,22.8474002 14.1074709,21.3072598 16.0073304,21.3072598 C17.9071899,21.3072598 19.4473304,22.8474002 19.4473304,24.7472598 C19.4473304,26.2993608 18.4194151,27.6113794 17.007209,28.039691 L17.0073304,31.9972598 L23,31.996 L22.9996373,19.9041104 L23.007,19.905 L23.0074518,17.849691 C21.6528664,17.4388553 20.6518519,16.2149553 20.5724205,14.7460029 L20.5673304,14.5572598 C20.5673304,12.6574002 22.1074709,11.1172598 24.0073304,11.1172598 Z M29.1173304,3.92725976 C30.3656171,5.16652999 31.3816812,6.61950178 32.1173304,8.21725976 C33.1715413,7.38530068 34.4743851,6.93106593 35.8173304,6.92725976 C38.6173304,6.92725976 41.5673304,8.92725976 42.1173304,13.3372598 C47.2173304,14.5972598 50.0073304,17.8572598 50.0073304,22.5872598 C50.0073304,29.5172598 44.8473304,31.9972598 40.0073304,31.9972598 L34.7052732,31.9979757 C36.3409823,31.059674 37.443627,29.2974764 37.4473304,27.2772598 C37.4473304,25.0769851 36.121917,23.0933637 34.0891283,22.2513551 C32.0563396,21.4093465 29.7164986,21.8747698 28.1606695,23.4305989 C27.7282661,23.8630023 27.380088,24.3559645 27.1207942,24.886063 L26.9985759,25.1540985 L26.9998073,19.0963526 C28.4719785,18.1227597 29.4438539,16.4536943 29.4473304,14.5572598 C29.4473304,11.5528307 27.0117594,9.11725976 24.0073304,9.11725976 C21.0029014,9.11725976 18.5673304,11.5528307 18.5673304,14.5572598 C18.5673304,16.3634885 19.4476135,17.9641161 20.8025686,18.9535314 L20.9993189,19.0906747 L21.0008923,22.5786569 C20.4514396,21.3083813 19.4255739,20.2670801 18.0960667,19.7142309 C16.0636017,18.8690705 13.7221224,19.3320223 12.1642191,20.8870617 C10.6063159,22.4421012 10.1390568,24.7827247 10.9804761,26.8167413 C11.3684342,27.7545772 11.9993479,28.5420018 12.7824601,29.1183418 L12.9997415,29.2702463 L12.999,31.997 L9.8573304,31.9972598 C4.75372191,32.1368507 0.429996986,28.2652513 0.00733040386,23.1772598 L0.00733040386,22.5172598 C-0.159802828,18.381327 2.54655167,14.6761495 6.5373304,13.5772598 L6.5373304,12.8472598 C6.6785055,7.75657937 9.70995279,3.1919417 14.3473304,1.08725976 C19.3881357,-1.0760247 25.2382336,0.0488417954 29.1173304,3.92725976 Z M21.0006915,26.8994506 L20.9991795,29.9992598 L18.9991795,29.9992598 L19.0001001,29.2807663 C19.8778555,28.7014391 20.5778883,27.8745593 21.0006915,26.8994506 Z", id: "Combined-Shape", fill: "currentColor" }))), C4 = q(uL), dL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "49px", height: "50px", viewBox: "0 0 49 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / elasticloadbalancing") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-elasticloadbalancing", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M42.8472282,0.476525095 C45.1711597,1.44241452 46.6840461,3.71351949 46.6800081,6.23018071 C46.6744834,9.66148596 43.8913097,12.4401807 40.46,12.4401807 C39.0320957,12.4401807 37.6840265,11.951976 36.609132,11.1048104 L27.5692393,18.7219568 C28.3493376,20.3403278 28.8376869,22.1257783 28.9660492,24.0100704 L36.4008773,24.0103597 C36.6060233,22.7512419 37.1973566,21.5579417 38.1382589,20.6155244 C39.9163772,18.8345428 42.5924929,18.3005506 44.9179755,19.2626995 C47.2434581,20.2248485 48.76,22.4935162 48.76,25.0101807 C48.7545136,28.439216 45.9790221,31.2191769 42.55,31.2301888 C40.0333388,31.2342268 37.7622338,29.7213404 36.7963444,27.3974089 C36.6084955,26.9454443 36.4772147,26.4801265 36.4006837,26.0106433 L28.9646832,26.0107091 C28.8339934,27.8924904 28.3447984,29.6754988 27.5649245,31.2919082 L36.6061171,38.9076456 C37.6657436,38.0701195 39.0044883,37.5701807 40.46,37.5701807 C43.8952111,37.5701807 46.68,40.3549696 46.68,43.7901807 C46.6744941,47.2231086 43.8929279,50.0046748 40.46,50.0101807 C37.0247889,50.0101807 34.24,47.2253919 34.24,43.7901807 C34.24,42.5323188 34.6133803,41.3616644 35.2553538,40.3830048 L26.5550505,33.0566572 C23.9538164,36.9428995 19.526278,39.5032622 14.5,39.5101807 C6.49187113,39.5101807 0,33.0183096 0,25.0101807 C0,17.0020518 6.49187113,10.5101807 14.5,10.5101807 C19.5284002,10.5101807 23.9589801,13.0697533 26.559932,16.9570906 L35.2575769,9.62993885 C35.0464733,9.30773134 34.8634259,8.96289373 34.7125188,8.5981562 C33.7503699,6.27267356 34.2843621,3.59655786 36.0653437,1.81843958 C37.8463253,0.0403212958 40.5232967,-0.489364327 42.8472282,0.476525095 Z", id: "Combined-Shape", fill: "currentColor" }))), L3 = q(dL), fL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "49px", height: "50px", viewBox: "0 0 49 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / emr") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-emr", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M25.0058748,0.41892592 C27.0615667,-0.432686606 29.4278602,0.0382274428 31.0008809,1.61198698 C32.0328894,2.64351118 32.6127065,4.04284895 32.6127065,5.50198698 C32.6127065,6.96112501 32.0328894,8.36046278 31.0008809,9.39198698 L31.0008809,9.39198698 L30.9308809,9.46198698 L34.8408809,16.931987 L38.3908809,15.831987 C37.9741618,13.9893304 38.5287304,12.0615441 39.8608809,10.721987 C40.8924051,9.68997845 42.2917429,9.11016136 43.7508809,9.11016136 C45.2100189,9.11016136 46.6093567,9.68997845 47.6408809,10.721987 C49.4564892,12.5402743 49.7711445,15.3733884 48.398751,17.5457461 C47.0263574,19.7181039 44.332699,20.6507066 41.9108809,19.791987 L41.9108809,19.791987 L39.1108809,25.071987 L41.4108809,29.421987 C42.1476936,29.0701294 42.9543715,28.8889687 43.7708809,28.891987 L43.756,28.891 L43.962088,28.8963542 C46.8237256,29.0095455 49.1233224,31.3091423 49.2365137,34.1707798 L49.2408809,34.391987 C49.2408809,37.4295531 46.778447,39.891987 43.7408809,39.891987 C40.7033148,39.891987 38.2408809,37.4295531 38.2408809,34.391987 L38.2408809,34.391987 L38.2408809,34.311987 L34.7908809,33.221987 L30.9108809,40.551987 L30.9708809,40.611987 C33.0446989,42.684516 33.1281927,46.0194444 31.160684,48.1931526 C29.1931753,50.3668608 25.8664481,50.6150642 23.5981619,48.7573841 C21.3298758,46.8997039 20.9175691,43.5893078 22.6608809,41.231987 L22.6608809,41.231987 L18.4008809,35.321987 C13.3250233,38.4180542 6.75190201,37.3676813 2.89367229,32.8439632 C-0.964557431,28.320245 -0.964557431,21.6637289 2.89367229,17.1400108 C6.75190201,12.6162926 13.3250233,11.5659198 18.4008809,14.661987 L18.4008809,14.661987 L22.6808809,8.76198698 C21.9805948,7.8198649 21.6051062,6.67585293 21.6108809,5.50198698 C21.6101422,3.27687739 22.9501828,1.27053845 25.0058748,0.41892592 Z M23.3008809,29.581987 C22.7027608,31.0813469 21.8043583,32.4425629 20.6608809,33.581987 C20.4608809,33.781987 20.2608809,33.971987 20.0408809,34.161987 L20.0408809,34.161987 L24.1608809,39.891987 C25.6907875,38.9180462 27.6024806,38.7609208 29.2708809,39.471987 L29.2708809,39.471987 L32.8808809,32.581987 Z M37.9908809,27.251987 L35.7708809,31.461987 L38.6708809,32.371987 L38.6708809,32.341987 C38.9219294,31.7089399 39.2996512,31.1338499 39.7808809,30.651987 L39.7808809,30.651987 L37.9908809,27.251987 Z M33.8308809,19.371987 L23.9008809,22.441987 C24.2857926,24.1775687 24.2857926,25.9764053 23.9008809,27.711987 L23.9008809,27.711987 L33.8308809,30.851987 L36.8308809,25.111987 L33.8308809,19.371987 Z M13.1108809,20.001987 L11.1108809,20.001987 L11.1108809,24.001987 L7.11088089,24.001987 L7.11088089,26.001987 L11.1108809,26.001987 L11.1108809,30.001987 L13.1108809,30.001987 L13.1108809,26.001987 L17.1108809,26.001987 L17.1108809,24.001987 L13.1108809,24.001987 L13.1108809,20.001987 Z M39.2108809,17.681987 L35.8008809,18.741987 L38.0108809,22.931987 L40.2008809,18.791987 L39.8808809,18.501987 C39.6298066,18.2525452 39.4052727,17.9777425 39.2108809,17.681987 L39.2108809,17.681987 Z M24.1608809,10.111987 L20.0208809,15.921987 C20.2408809,16.111987 20.4508809,16.311987 20.6608809,16.521987 C21.8238116,17.6708246 22.7333237,19.0504216 23.3308809,20.571987 L23.3308809,20.571987 L32.9008809,17.571987 L29.2408809,10.571987 C28.5664632,10.8552881 27.8423852,11.0014635 27.1108809,11.001987 C26.0623231,10.9958309 25.0378885,10.6867642 24.1608809,10.111987 L24.1608809,10.111987 Z", id: "Combined-Shape", fill: "currentColor" }))), p4 = q(fL), hL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "43px", height: "44px", viewBox: "0 0 43 44", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / events") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-events", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M30.7192872,34.636 L27.6161763,29.438 L31.6522355,22.5 C31.8315712,22.19 31.8315712,21.81 31.6522355,21.5 L26.9975691,13.5 C26.8182335,13.19 26.4857573,13 26.125071,13 L17.8010766,13 L15.0243968,8.349 C15.9865627,7.468 16.6001324,6.217 16.6001324,4.818 C16.6001324,2.162 14.4229172,0 11.7459802,0 C9.0680358,0 6.89082059,2.162 6.89082059,4.818 C6.89082059,7.475 9.0680358,9.636 11.7459802,9.636 C12.2880172,9.636 12.8008365,9.527 13.2884682,9.364 L15.8535722,13.659 L11.2926036,21.5 C11.1122605,21.81 11.1122605,22.19 11.2926036,22.5 L15.9462626,30.5 C16.1255982,30.81 16.4580744,31 16.8187607,31 L26.125071,31 C26.1512661,31 26.1754462,30.992 26.1996263,30.99 L28.9833586,35.651 C28.0211927,36.532 27.4076231,37.783 27.4076231,39.182 C27.4076231,41.838 29.5848382,44 32.2617752,44 C34.9387122,44 37.1159273,41.838 37.1159273,39.182 C37.1159273,36.525 34.9387122,34.364 32.2617752,34.364 C31.7197383,34.364 31.206919,34.473 30.7192872,34.636 Z M39.9792525,16.539 C41.0734013,15.655 41.7877213,14.325 41.7877213,12.818 C41.7877213,10.162 39.6105062,8 36.9335692,8 C36.2958194,8 35.6903098,8.13 35.1331603,8.353 L32.4048407,4.432 C32.21543,4.162 31.9051189,4 31.5746578,4 L22.5071257,4 L22.5071257,6 L31.0467259,6 L33.4576819,9.466 C32.6083564,10.334 32.0784096,11.515 32.0784096,12.818 C32.0784096,15.475 34.2556247,17.636 36.9335692,17.636 C37.3678032,17.636 37.7818872,17.561 38.1838811,17.454 L40.8295855,22 L36.9809219,28.616 L38.725918,29.616 L42.8647426,22.5 C43.0450858,22.19 43.0450858,21.81 42.8647426,21.5 L39.9792525,16.539 Z M9.6221627,34.647 C10.7928819,33.767 11.5626146,32.386 11.5626146,30.818 C11.5626146,28.162 9.3853994,26 6.70846244,26 C6.00723997,26 5.34430263,26.155 4.742823,26.421 L2.17066642,22 L6.64297471,14.311 L4.89797855,13.311 L0.13450173,21.5 C-0.04483391,21.81 -0.04483391,22.19 0.13450173,22.5 L3.10865223,27.614 C2.33791201,28.468 1.8533028,29.583 1.8533028,30.818 C1.8533028,33.475 4.03051799,35.636 6.70846244,35.636 C7.0762012,35.636 7.4308425,35.588 7.7744012,35.511 L10.5954112,39.568 C10.7838143,39.838 11.0931179,40 11.4245866,40 L20.4921186,40 L20.4921186,38 L11.9545335,38 L9.6221627,34.647 Z", id: "AWS-EventBridge_Icon_48_Squid", fill: "currentColor" }))), L4 = q(hL), gL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "52px", height: "52px", viewBox: "0 0 52 52", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / fargate") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-fargate", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M31.984,36.702 L36.9199762,38.9180453 L36.919,45.23 L32.999,43.548 L32.9898145,48.5495001 C32.9885833,49.1471386 32.6326972,49.6870237 32.0839342,49.9237354 L27.919,51.7191892 L27.9199762,45.5712346 L32.7185833,43.4158571 C32.2605782,43.1490499 31.9728925,42.6559844 31.9740032,42.1168251 L31.975,41.558 L27.1729762,43.7152346 L22.033,41.4071892 L26.4083884,39.5459478 C26.7836487,39.3862697 27.207749,39.3862697 27.5830094,39.5459478 L31.975,41.415 L31.984,36.702 Z M22.026,36.863 L22.0158145,42.1233109 C22.0148286,42.6018547 21.7864522,43.0433694 21.413741,43.3218581 L25.9199762,45.3442346 L25.919,51.6561892 L21.8825185,49.9245637 C21.3302831,49.6876056 20.9727652,49.1439399 20.9740032,48.5430143 L20.982,43.552 L16.945,45.293 L16.9459762,39.1450453 L22.026,36.863 Z M44,36.863 L43.9898145,42.1233109 C43.9885833,42.7209493 43.6326972,43.2608344 43.0839342,43.4975462 L38.919,45.293 L38.9199762,39.1450453 L44,36.863 Z M10.01,36.702 L14.9459762,38.9180453 L14.945,45.23 L10.9085185,43.4983744 C10.3562831,43.2614163 9.99876522,42.7177506 10.0000032,42.1168251 L10.01,36.702 Z M16.6090094,33.1197586 L21.1148769,35.0370632 L21.162,35.06 L16.1989762,37.2890453 L11.059,34.981 L15.4343884,33.1197586 C15.8096487,32.9600805 16.233749,32.9600805 16.6090094,33.1197586 Z M38.5830094,33.1197586 L43.0888769,35.0370632 L43.136,35.06 L38.1729762,37.2890453 L33.033,34.981 L37.4083884,33.1197586 C37.7836487,32.9600805 38.207749,32.9600805 38.5830094,33.1197586 Z M43.28,16.1978143 C48.9,17.8478143 52,20.2678143 52,23.0178143 C52,28.8578143 38.6,32.0178143 26,32.0178143 C13.4,32.0178143 0,28.8578143 0,23.0178143 C0,20.2778143 3.1,17.8578143 8.72,16.1978143 L9.28,18.1178143 C4.79,19.4378143 2,21.3078143 2,23.0178143 C2,26.3278143 11.86,30.0178143 26,30.0178143 C40.14,30.0178143 50,26.3278143 50,23.0178143 C50,21.3178143 47.21,19.4478143 42.72,18.1178143 L43.28,16.1978143 Z M39.999301,8.093 L40.0000191,21.7878143 C40.0036138,23.5311847 38.9866261,25.1153387 37.4,25.8378143 C34.103496,27.2307134 30.5715105,27.9711241 26.9994399,28.0216812 L26.999301,13.9325302 L39.999301,8.093 Z M11.997301,7.864 L24.999301,13.7055302 L24.9993275,28.0111766 C22.7621834,27.960277 20.536101,27.667662 18.36,27.1378143 L17.87,27.0178143 L17,26.7278143 C16.41,26.5378143 15.89,26.3478143 15.42,26.1678143 L15.17,26.0678143 L15,26.0178143 L14.9,25.9678143 L14.59,25.8278143 L14.09,25.5678143 L14,25.5178143 C13.84,25.3978143 13.68,25.2778143 13.53,25.1478143 C13.4422548,25.0834059 13.3617809,25.0096382 13.29,24.9278143 L13.09,24.7178143 C12.3858523,23.9041756 11.9988331,22.8638397 11.999888,21.7878143 L11.997301,7.864 Z M26.68,0.15781431 L39.1,6.01781431 C39.197939,6.06349252 39.289622,6.1185747 39.3741596,6.18170705 L26.252301,12.0765302 L12.8339462,6.04787613 L12.9,6.01781431 L25.35,0.15781431 C25.7683656,-0.0526047699 26.2616344,-0.0526047699 26.68,0.15781431 Z", id: "Combined-Shape", fill: "currentColor" }))), CL = q(gL), pL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "48px", height: "50px", viewBox: "0 0 48 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / glacier") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-glacier", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M22.5737183,0 C33.2437183,0 45.1337183,3.26 45.0037183,7.96 L45.0074365,8.025 L45.0074365,8.025 L45.0037183,8.09 L45.0037183,8.53 L45.0002291,8.58 L45.0002291,8.58 L45.0037183,8.63 L43.253,22.111 L43.2510246,22.1103321 L42.844,25.045 L42.8037183,25.33 L42.78,25.502 L42.6554411,26.4065266 L42.658,26.408 L42.639,26.549 L41.9270777,26.3626278 L40.8486885,26.0414636 L39.5309238,25.5773789 C35.1435799,24.007876 30.809631,22.2133169 26.5693311,20.2081033 L25.743,19.812 L25.7297079,19.7507941 C25.3803084,18.3303641 24.0979397,17.28 22.5737183,17.28 C20.7787928,17.28 19.3237183,18.7350746 19.3237183,20.53 C19.3237183,22.3249254 20.7787928,23.78 22.5737183,23.78 L22.7965402,23.7724364 C23.1657605,23.7473085 23.5233761,23.659992 23.85653,23.5167967 L24.043,23.429 L23.967,23.392 L24.8108048,23.7995282 C29.7281013,26.1419439 34.7964267,28.1973448 39.9734901,29.9473404 L40.9290777,30.1820822 L41.189,30.252 L38.4737183,30.7350017 L34.7019725,29.4528411 L33.7325886,32.3115755 L30.5165871,31.48 L29.4837183,35.3502125 L26.2045981,38.3019587 L28.5054104,40.74 L25.9601993,43.3541611 L28.9437183,46.3873761 L29.4837183,49.56 C27.1919348,49.8518871 24.8840144,49.9988459 22.5737183,50 C15.8807183,50 5.31090398,48.513402 4.8761899,44.5441438 L4.86371827,44.37 L0.063718268,8.63 L0.0601268286,8.565 L0.0601268286,8.565 L0.063718268,8.5 L0.003718268,8.06 C-0.00123942267,8.01680847 -0.00123942267,7.97319153 0.003718268,7.93 C0.003718268,3.26 11.8937183,0 22.5737183,0 Z M35.4437183,31.48 L37.3737183,32 L36.4937183,35.31 L38.4737183,38.74 L40.4237183,35.36 L39.5637183,31.99 L41.5037183,31.49 L42.2037183,34.23 L44.9737183,33.49 L45.4937183,35.42 L42.1837183,36.31 L40.2037183,39.74 L44.1137183,39.74 L46.6037183,37.31 L47.9937183,38.74 L45.9737183,40.71 L48.0037183,42.75 L46.5937183,44.16 L44.1737183,41.74 L40.2037183,41.74 L42.1537183,45.12 L45.5037183,46.06 L44.9637183,47.99 L42.2437183,47.22 L41.5037183,50 L39.5737183,49.48 L40.4537183,46.17 L38.4737183,42.74 L36.5237183,46.12 L37.3837183,49.49 L35.4437183,49.99 L34.7437183,47.25 L31.9737183,47.99 L31.4537183,46.06 L34.7637183,45.17 L36.7437183,41.74 L32.8337183,41.74 L30.3437183,44.17 L28.9537183,42.74 L30.9737183,40.77 L28.9437183,38.73 L30.3537183,37.32 L32.7737183,39.74 L36.7437183,39.74 L34.7937183,36.36 L31.4437183,35.42 L31.9837183,33.49 L34.7037183,34.26 L35.4437183,31.48 Z M22.5737183,18.28 C23.7996568,18.28 24.7965962,19.2604617 24.8231742,20.4800229 L24.8637183,20.5 C29.9645417,22.97382 35.207,25.1442645 40.5637183,27 L41.6737183,27.33 L42.5137183,27.55 L43.0137037,27.6690889 L43.4652343,27.7661808 C43.6079311,27.7950875 43.7429457,27.8206414 43.8706716,27.843156 L44.2323772,27.901895 C44.3459194,27.9186443 44.4525667,27.9326676 44.5527124,27.9442784 L44.834039,27.9721866 L45.0787183,27.9875 L45.2891119,27.9920991 L45.5455823,27.983022 L45.6805933,27.9690625 L45.8350594,27.9409621 L45.9094471,27.9201968 L45.9637183,27.9 L45.9391565,27.8469773 L45.9023333,27.7805008 L45.8180461,27.6545383 L45.7384449,27.5523833 L45.5770001,27.3707126 L45.4373002,27.2299587 L45.2687111,27.0729475 L45.0684613,26.8992118 C45.032294,26.8688362 44.9946921,26.8377443 44.9555977,26.8059263 L44.7026609,26.6062277 L44.4111353,26.3886365 C44.359178,26.3508543 44.3054973,26.3123071 44.2500356,26.2729851 L43.8954305,26.0276788 C43.8326136,25.985219 43.7679001,25.941965 43.7012323,25.8979071 L43.2773123,25.6238344 L42.8037183,25.33 L43.1137183,23.19 C43.3288907,23.3113793 43.5363104,23.4309037 43.7361054,23.5486715 L44.3127441,23.8968039 C46.6211618,25.3262188 47.758201,26.4965517 47.9737183,27.6 C48.0621956,28.1484098 47.9049324,28.7079741 47.5437183,29.13 C46.9521708,29.7359446 46.1159477,30.0380164 45.2737183,29.95 C44.2601057,29.9194092 43.2534256,29.7717627 42.2737183,29.51 L41.1637183,29.21 L40.2937183,29 C35.1541156,27.2626671 30.122464,25.2221389 25.2252151,22.8892947 L23.9779658,22.288114 C23.5930749,22.5959372 23.1048917,22.78 22.5737183,22.78 C21.3310776,22.78 20.3237183,21.7726407 20.3237183,20.53 C20.3237183,19.2873593 21.3310776,18.28 22.5737183,18.28 Z M22.5737183,20.28 C22.4356471,20.28 22.3237183,20.3919288 22.3237183,20.53 C22.3237183,20.8 22.8237183,20.8 22.8237183,20.53 C22.8237183,20.3919288 22.7117895,20.28 22.5737183,20.28 Z M22.5737183,2 C10.7374362,2 2.36071202,5.68369822 2.01318558,7.84651534 L2.00371827,7.93 L2.00371827,8.17 L2.050114,8.24740284 L2.10371827,8.32 C2.138502,8.38966082 2.17862165,8.45652691 2.22371827,8.52 C2.27017572,8.59188803 2.32378159,8.65889536 2.38371827,8.72 C2.53359869,8.89361687 2.70117113,9.05113496 2.88371827,9.19 C3.56171611,9.68665493 4.3012047,10.0933737 5.08371827,10.4 C5.30371827,10.4933333 5.53260716,10.5866667 5.7733479,10.677037 L6.14371827,10.81 L6.73371827,11.01 C7.00038493,11.0966667 7.27594049,11.1833333 7.5633479,11.267037 L8.00371827,11.39 L9.47371827,11.75 C10.7837183,12.05 12.2037183,12.31 13.7837183,12.53 C14.1937183,12.59 14.4937183,12.61 15.0437183,12.68 C15.5937183,12.75 16.2937183,12.8 16.7437183,12.85 C17.1937183,12.9 17.6637183,12.96 18.1337183,12.96 C19.5537183,13.1 21.0437183,13.1 22.6037183,13.1 C24.1637183,13.1 25.6537183,13.05 27.0737183,12.96 C27.5437183,12.93 27.8837183,12.89 28.4637183,12.85 C29.0437183,12.81 29.6137183,12.75 30.1637183,12.68 C30.5903849,12.64 31.0103849,12.59 31.4237183,12.53 C32.0012183,12.4475 32.5562183,12.365 33.092937,12.2740625 L33.6237183,12.18 L34.9737183,11.92 L35.7337183,11.75 C36.2437183,11.6225 36.7593433,11.489375 37.251062,11.3464062 L37.7337183,11.2 L38.3537183,11.01 C38.7337183,10.89 39.0837183,10.77 39.4137183,10.64 C39.6144496,10.5703807 39.8113874,10.4902704 40.0037183,10.4 C40.7069312,10.1245299 41.3776459,9.77240461 42.0037183,9.35 C42.3014128,9.16661611 42.5680718,8.9370868 42.7937183,8.67 C42.853655,8.60889536 42.9072608,8.54188803 42.9537183,8.47 C42.9988149,8.40652691 43.0389345,8.33966082 43.0737183,8.27 L43.1069467,8.19629139 L43.1069467,8.19629139 L43.1337183,8.12 L43.1337183,7.88 C43.0037183,5.78 34.5637183,2 22.5737183,2 Z", id: "Combined-Shape", fill: "currentColor" }))), m4 = q(pL), LL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 76, height: 60, viewBox: "0 0 76 60", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { clipPath: "url(#clip0_4486_65465)" }, /* @__PURE__ */ w.createElement("path", { d: "M32.0161 36.8642L31.9979 36.895L31.9842 36.928L29.4976 42.9507C27.4437 41.4626 25.847 39.429 24.8889 37.0805L31.3388 35.9731C31.7311 35.9883 31.9917 36.2359 32.0193 36.4617L32.0261 36.5166L32.0446 36.5687C32.0618 36.617 32.0682 36.6685 32.0632 36.7196C32.0583 36.7707 32.0422 36.8201 32.0161 36.8642ZM34.7426 25.1277L34.7419 25.1402V25.1527C34.7419 25.4831 34.4334 25.7986 34.0236 25.7986C33.9473 25.7986 33.9132 25.7868 33.8052 25.7494C33.7706 25.7374 33.7284 25.7228 33.6747 25.705L28.2867 21.8764C29.9886 20.3574 32.0452 19.2846 34.2716 18.7595L35.0694 18.6003L34.7426 25.1277ZM30.4919 30.6297L30.4704 30.6545L30.4522 30.682C30.4136 30.7403 30.3929 30.7538 30.3795 30.7619C30.3545 30.7769 30.3048 30.7989 30.1737 30.832L30.1656 30.8341L30.1577 30.8364L23.8113 32.6664C23.7451 30.1218 24.3454 27.6036 25.5526 25.3623L30.3947 29.6814L30.403 29.6889L30.4117 29.6959C30.4795 29.7512 30.5355 29.8194 30.5764 29.8967C30.6173 29.974 30.6422 30.0587 30.6497 30.1458C30.6572 30.233 30.6471 30.3207 30.62 30.4038C30.5929 30.4869 30.5493 30.5638 30.4919 30.6297ZM40.0935 25.5067L40.0639 25.4655L40.0267 25.431C40.0086 25.4144 39.9943 25.3941 39.9845 25.3716C39.9747 25.3491 39.9698 25.3248 39.9699 25.3002L39.97 25.284L39.969 25.2678L39.5737 18.6306C42.1036 19.0192 44.4629 20.1468 46.3544 21.8713L40.9945 25.6608C40.672 25.8338 40.2698 25.7527 40.0935 25.5067ZM38.898 33.1193L37.3949 33.8439L35.8866 33.1192L35.4986 31.5059L36.5602 30.1672H38.2272L39.2886 31.5056L38.898 33.1193Z", fill: "#232F3E", stroke: "#879596" }), /* @__PURE__ */ w.createElement("mask", { id: "path-2-inside-1_4486_65465", fill: "white" }, /* @__PURE__ */ w.createElement("path", { d: "M68.8612 36.6215L63.4149 13.1803C63.0591 12.0344 62.1965 11.1026 61.1199 10.5296L39.2591 0.0620141C38.6862 -0.224467 38.0408 -0.296875 37.4678 -0.296875C36.8949 -0.296875 36.2495 -0.296875 35.6765 -0.155208L13.8095 10.3848C13.271 10.631 12.7968 10.9984 12.4238 11.4582C12.0508 11.918 11.7891 12.4579 11.6593 13.0355L6.28228 36.6215C6.06821 37.8398 6.35469 39.0581 7.06932 40.0624L22.1962 58.7718C23.0556 59.6313 24.2739 60.2074 25.4923 60.2798H49.5788C50.8695 60.4215 52.0878 59.8485 52.878 58.7718L68.0049 40.0624C68.7195 39.0581 69.006 37.8398 68.8612 36.6215ZM59.9047 38.1987C59.7599 38.1987 59.6906 38.1987 59.5458 38.1263C59.4765 38.0539 59.4765 38.0539 59.4041 38.0539C59.2593 38.0539 59.19 37.9846 59.1145 37.9846C58.828 37.9122 58.6139 37.7705 58.3275 37.6257C58.1748 37.6119 58.0273 37.5635 57.8962 37.484H57.8269C57.0846 37.1952 56.316 36.979 55.5319 36.8387H55.4626C55.2512 36.8333 55.0458 36.91 54.8897 37.0528C54.8897 37.0528 54.8897 37.1252 54.8173 37.1252L54.2412 37.0496C52.9243 41.1295 50.1728 44.5935 46.4967 46.7994L46.7108 47.3724C46.7108 47.3724 46.6415 47.3724 46.6415 47.4416C46.5768 47.5484 46.537 47.6684 46.525 47.7926C46.513 47.9169 46.5292 48.0423 46.5723 48.1594C46.8588 48.8772 47.2176 49.5918 47.7182 50.2372V50.3789C47.8351 50.4797 47.9322 50.6014 48.0047 50.7378C48.2116 50.9464 48.381 51.1892 48.5052 51.4555C48.5776 51.5248 48.6501 51.5972 48.6501 51.6696C48.6501 51.6696 48.7193 51.6696 48.7193 51.7389C48.851 52.0823 48.8762 52.4575 48.7917 52.8155C48.7486 52.9861 48.6685 53.1451 48.5569 53.2811C48.4454 53.4171 48.3052 53.5269 48.1463 53.6026C47.9323 53.6718 47.7875 53.7442 47.5702 53.7442C47.2875 53.7335 47.0126 53.6484 46.7733 53.4975C46.534 53.3466 46.3387 53.1353 46.2071 52.8848C46.1378 52.8848 46.1378 52.8155 46.1378 52.8155C46.0686 52.7431 46.0686 52.6739 45.993 52.6015C45.8513 52.3874 45.7789 52.1009 45.7065 51.8144L45.5617 51.3831V51.3139C45.3264 50.5436 45.0142 49.799 44.6299 49.0913C44.4918 48.8881 44.2903 48.7365 44.0569 48.66C44.0569 48.5876 44.0569 48.5876 43.9845 48.5876L43.698 48.087C42.9802 48.3011 42.1901 48.5876 41.403 48.7324C40.1123 49.0913 38.8215 49.2329 37.5339 49.2329C35.4014 49.2479 33.2854 48.8591 31.2975 48.087L31.011 48.66C31.011 48.7324 31.011 48.7324 30.9386 48.7324C30.7048 48.8082 30.5032 48.96 30.3656 49.1637C30.0067 49.8815 29.6478 50.5961 29.4338 51.3863L29.2921 51.8176C29.2197 52.104 29.078 52.3181 29.0056 52.6046C28.9364 52.677 28.8639 52.7463 28.8639 52.8187C28.7915 52.8187 28.7915 52.8879 28.7915 52.8879C28.6607 53.139 28.4656 53.3509 28.2261 53.5019C27.9866 53.6529 27.7113 53.7376 27.4284 53.7474C27.254 53.7326 27.0841 53.6846 26.9278 53.6057C26.6043 53.4161 26.3651 53.1105 26.2587 52.7509C26.1523 52.3913 26.1867 52.0047 26.3549 51.6696C26.4273 51.6696 26.4273 51.5972 26.4273 51.5972C26.4965 51.5248 26.4965 51.4555 26.5689 51.3831C26.783 51.0966 26.9278 50.8102 27.0695 50.6653C27.2112 50.5205 27.2836 50.4513 27.356 50.3065V50.234C27.8071 49.5819 28.1911 48.8858 28.5019 48.1563C28.5437 48.0387 28.5588 47.9134 28.5463 47.7893C28.5338 47.6651 28.4939 47.5453 28.4295 47.4385C28.4295 47.4385 28.3602 47.4385 28.3602 47.3692L28.7191 46.8655C28.0309 46.5033 27.3821 46.0707 26.783 45.5748C24.022 43.4368 21.9729 40.513 20.9054 37.1881L20.2601 37.2574C20.2601 37.2574 20.2601 37.1881 20.1876 37.1881C20.0322 37.0442 19.8264 36.9673 19.6147 36.974H19.5454C18.7383 37.1121 17.9465 37.3282 17.1812 37.6194H17.1056C16.9639 37.6194 16.8191 37.6918 16.6743 37.7642C16.4602 37.8335 16.1738 37.9783 15.8873 38.0507C15.818 38.0507 15.6008 37.9815 15.6008 38.0507C15.6008 38.1231 15.6008 38.1231 15.5284 38.1231C15.3867 38.1955 15.3143 38.1955 15.1695 38.1955C14.8493 38.2294 14.5277 38.1464 14.2639 37.9619C14.0001 37.7773 13.8119 37.5036 13.7339 37.1913C13.6982 37.0075 13.6996 36.8184 13.7382 36.6351C13.7768 36.4519 13.8517 36.2782 13.9585 36.1244C14.0653 35.9707 14.2019 35.8398 14.3602 35.7397C14.5184 35.6396 14.6951 35.5723 14.8799 35.5416C14.9523 35.4692 14.9523 35.4692 15.0247 35.4692C15.1664 35.4692 15.2388 35.4 15.3112 35.4C15.5976 35.4 15.8841 35.3276 16.1706 35.3276C16.3123 35.2583 16.4571 35.2583 16.6019 35.2583C17.4258 35.191 18.2416 35.0466 19.0386 34.827C19.2526 34.6822 19.4699 34.5405 19.5423 34.3233C19.5423 34.3233 19.6115 34.3233 19.6115 34.254L20.1845 34.1092C19.5391 30.0229 20.471 25.8674 22.6936 22.354C22.7628 22.2124 22.8352 22.14 22.9076 21.9952L22.4952 21.5796C22.4929 21.5999 22.4887 21.6199 22.4826 21.6394V21.567L22.4952 21.5796C22.5267 21.375 22.3976 21.1231 22.2686 20.994C21.6956 20.4211 20.9778 19.9898 20.2601 19.5616L19.8319 19.3444C19.5608 19.2164 19.297 19.0734 19.0417 18.9163C18.9725 18.9163 18.8276 18.7746 18.8276 18.7746C18.8276 18.7746 18.8276 18.7022 18.7584 18.7022C18.4746 18.4589 18.2887 18.1208 18.2355 17.7508C18.1822 17.3808 18.2651 17.004 18.4688 16.6905C18.6828 16.3316 19.0417 16.19 19.473 16.19C19.8376 16.1988 20.1897 16.3246 20.4773 16.5489L20.5497 16.6213C20.6189 16.6905 20.6914 16.6905 20.7638 16.7629C20.9778 16.9802 21.1226 17.1942 21.3367 17.4083C21.4091 17.4776 21.5508 17.55 21.6232 17.6948C22.1238 18.2678 22.7691 18.8407 23.4145 19.3444C23.5562 19.4137 23.701 19.4861 23.8458 19.4861C23.9875 19.4861 24.0599 19.4137 24.1323 19.4137H24.2047L24.636 19.7002C26.9992 17.173 30.0742 15.4231 33.4539 14.682C34.3134 14.5372 35.1004 14.3955 35.8906 14.3231L35.963 13.7502V13.6085C36.1771 13.4668 36.2495 13.2496 36.3219 13.0355C36.3219 12.1761 36.3219 11.3859 36.1802 10.5989V10.5265C36.1802 10.3848 36.1802 10.24 36.1078 10.0952C36.0255 9.81557 35.978 9.52692 35.9662 9.23572V8.87998C35.9662 8.52109 36.1078 8.1622 36.3975 7.87572C36.7563 7.51683 37.1845 7.30275 37.6158 7.37516C37.9719 7.42457 38.2959 7.60753 38.5222 7.88696C38.7484 8.16638 38.8599 8.52137 38.8341 8.87998V9.31127C38.7617 9.59775 38.7617 9.88424 38.6925 10.1707C38.6925 10.3124 38.6201 10.4572 38.6201 10.5989V10.6713C38.4689 11.5307 38.4689 12.3209 38.4689 13.1079C38.5413 13.322 38.6106 13.5361 38.8278 13.6809V13.6085L38.9002 14.1815C42.292 14.5357 45.5184 15.8262 48.2188 17.9089C48.7949 18.4818 49.4371 19.0548 50.0101 19.6278L50.5862 19.2689H50.6554C50.7247 19.3413 50.8695 19.3413 50.9419 19.3413C51.0867 19.3413 51.2284 19.2689 51.3732 19.1996C52.0186 18.7683 52.6639 18.1953 53.1645 17.6224C53.2338 17.55 53.3786 17.4776 53.451 17.3359C53.5958 17.1218 53.8099 16.9046 54.0271 16.6905C54.0963 16.6905 54.1688 16.6213 54.2412 16.5489L54.3104 16.4765C54.5978 16.254 54.9483 16.1284 55.3115 16.1176C55.6704 16.1176 56.1017 16.3316 56.3158 16.6213C56.8163 17.2666 56.6715 18.1261 56.0293 18.6266C56.0293 18.699 56.0986 18.699 56.0293 18.7715C55.9569 18.8407 55.8845 18.8407 55.8152 18.9131C55.5256 19.0548 55.3115 19.1996 55.025 19.3444L54.5938 19.5585C53.8801 19.9708 53.2075 20.4505 52.5852 20.9909C52.4436 21.1357 52.3712 21.4222 52.3712 21.6363V21.7087L51.943 22.14C53.0889 23.9313 53.9515 25.9398 54.4521 28.0176C54.8834 30.0953 55.025 32.2455 54.7386 34.3233L55.3115 34.4681C55.3558 34.5821 55.4236 34.6856 55.5103 34.7718C55.5971 34.858 55.701 34.9251 55.8152 34.9687C56.6023 35.1827 57.4617 35.3276 58.2488 35.4H58.3212C58.4574 35.4568 58.6052 35.4805 58.7525 35.4692C59.0389 35.4692 59.3254 35.4692 59.6087 35.5416C59.7536 35.5416 59.8984 35.5416 59.8984 35.614C59.8984 35.6833 59.9676 35.6833 60.04 35.6833C60.3867 35.7665 60.6982 35.9571 60.93 36.2279C61.1618 36.4987 61.3021 36.8359 61.3308 37.1913C61.2227 37.4836 61.0286 37.7363 60.774 37.9162C60.5194 38.096 60.2163 38.1945 59.9047 38.1987Z" })), /* @__PURE__ */ w.createElement("path", { d: "M68.8612 36.6215L63.4149 13.1803C63.0591 12.0344 62.1965 11.1026 61.1199 10.5296L39.2591 0.0620141C38.6862 -0.224467 38.0408 -0.296875 37.4678 -0.296875C36.8949 -0.296875 36.2495 -0.296875 35.6765 -0.155208L13.8095 10.3848C13.271 10.631 12.7968 10.9984 12.4238 11.4582C12.0508 11.918 11.7891 12.4579 11.6593 13.0355L6.28228 36.6215C6.06821 37.8398 6.35469 39.0581 7.06932 40.0624L22.1962 58.7718C23.0556 59.6313 24.2739 60.2074 25.4923 60.2798H49.5788C50.8695 60.4215 52.0878 59.8485 52.878 58.7718L68.0049 40.0624C68.7195 39.0581 69.006 37.8398 68.8612 36.6215ZM59.9047 38.1987C59.7599 38.1987 59.6906 38.1987 59.5458 38.1263C59.4765 38.0539 59.4765 38.0539 59.4041 38.0539C59.2593 38.0539 59.19 37.9846 59.1145 37.9846C58.828 37.9122 58.6139 37.7705 58.3275 37.6257C58.1748 37.6119 58.0273 37.5635 57.8962 37.484H57.8269C57.0846 37.1952 56.316 36.979 55.5319 36.8387H55.4626C55.2512 36.8333 55.0458 36.91 54.8897 37.0528C54.8897 37.0528 54.8897 37.1252 54.8173 37.1252L54.2412 37.0496C52.9243 41.1295 50.1728 44.5935 46.4967 46.7994L46.7108 47.3724C46.7108 47.3724 46.6415 47.3724 46.6415 47.4416C46.5768 47.5484 46.537 47.6684 46.525 47.7926C46.513 47.9169 46.5292 48.0423 46.5723 48.1594C46.8588 48.8772 47.2176 49.5918 47.7182 50.2372V50.3789C47.8351 50.4797 47.9322 50.6014 48.0047 50.7378C48.2116 50.9464 48.381 51.1892 48.5052 51.4555C48.5776 51.5248 48.6501 51.5972 48.6501 51.6696C48.6501 51.6696 48.7193 51.6696 48.7193 51.7389C48.851 52.0823 48.8762 52.4575 48.7917 52.8155C48.7486 52.9861 48.6685 53.1451 48.5569 53.2811C48.4454 53.4171 48.3052 53.5269 48.1463 53.6026C47.9323 53.6718 47.7875 53.7442 47.5702 53.7442C47.2875 53.7335 47.0126 53.6484 46.7733 53.4975C46.534 53.3466 46.3387 53.1353 46.2071 52.8848C46.1378 52.8848 46.1378 52.8155 46.1378 52.8155C46.0686 52.7431 46.0686 52.6739 45.993 52.6015C45.8513 52.3874 45.7789 52.1009 45.7065 51.8144L45.5617 51.3831V51.3139C45.3264 50.5436 45.0142 49.799 44.6299 49.0913C44.4918 48.8881 44.2903 48.7365 44.0569 48.66C44.0569 48.5876 44.0569 48.5876 43.9845 48.5876L43.698 48.087C42.9802 48.3011 42.1901 48.5876 41.403 48.7324C40.1123 49.0913 38.8215 49.2329 37.5339 49.2329C35.4014 49.2479 33.2854 48.8591 31.2975 48.087L31.011 48.66C31.011 48.7324 31.011 48.7324 30.9386 48.7324C30.7048 48.8082 30.5032 48.96 30.3656 49.1637C30.0067 49.8815 29.6478 50.5961 29.4338 51.3863L29.2921 51.8176C29.2197 52.104 29.078 52.3181 29.0056 52.6046C28.9364 52.677 28.8639 52.7463 28.8639 52.8187C28.7915 52.8187 28.7915 52.8879 28.7915 52.8879C28.6607 53.139 28.4656 53.3509 28.2261 53.5019C27.9866 53.6529 27.7113 53.7376 27.4284 53.7474C27.254 53.7326 27.0841 53.6846 26.9278 53.6057C26.6043 53.4161 26.3651 53.1105 26.2587 52.7509C26.1523 52.3913 26.1867 52.0047 26.3549 51.6696C26.4273 51.6696 26.4273 51.5972 26.4273 51.5972C26.4965 51.5248 26.4965 51.4555 26.5689 51.3831C26.783 51.0966 26.9278 50.8102 27.0695 50.6653C27.2112 50.5205 27.2836 50.4513 27.356 50.3065V50.234C27.8071 49.5819 28.1911 48.8858 28.5019 48.1563C28.5437 48.0387 28.5588 47.9134 28.5463 47.7893C28.5338 47.6651 28.4939 47.5453 28.4295 47.4385C28.4295 47.4385 28.3602 47.4385 28.3602 47.3692L28.7191 46.8655C28.0309 46.5033 27.3821 46.0707 26.783 45.5748C24.022 43.4368 21.9729 40.513 20.9054 37.1881L20.2601 37.2574C20.2601 37.2574 20.2601 37.1881 20.1876 37.1881C20.0322 37.0442 19.8264 36.9673 19.6147 36.974H19.5454C18.7383 37.1121 17.9465 37.3282 17.1812 37.6194H17.1056C16.9639 37.6194 16.8191 37.6918 16.6743 37.7642C16.4602 37.8335 16.1738 37.9783 15.8873 38.0507C15.818 38.0507 15.6008 37.9815 15.6008 38.0507C15.6008 38.1231 15.6008 38.1231 15.5284 38.1231C15.3867 38.1955 15.3143 38.1955 15.1695 38.1955C14.8493 38.2294 14.5277 38.1464 14.2639 37.9619C14.0001 37.7773 13.8119 37.5036 13.7339 37.1913C13.6982 37.0075 13.6996 36.8184 13.7382 36.6351C13.7768 36.4519 13.8517 36.2782 13.9585 36.1244C14.0653 35.9707 14.2019 35.8398 14.3602 35.7397C14.5184 35.6396 14.6951 35.5723 14.8799 35.5416C14.9523 35.4692 14.9523 35.4692 15.0247 35.4692C15.1664 35.4692 15.2388 35.4 15.3112 35.4C15.5976 35.4 15.8841 35.3276 16.1706 35.3276C16.3123 35.2583 16.4571 35.2583 16.6019 35.2583C17.4258 35.191 18.2416 35.0466 19.0386 34.827C19.2526 34.6822 19.4699 34.5405 19.5423 34.3233C19.5423 34.3233 19.6115 34.3233 19.6115 34.254L20.1845 34.1092C19.5391 30.0229 20.471 25.8674 22.6936 22.354C22.7628 22.2124 22.8352 22.14 22.9076 21.9952L22.4952 21.5796C22.4929 21.5999 22.4887 21.6199 22.4826 21.6394V21.567L22.4952 21.5796C22.5267 21.375 22.3976 21.1231 22.2686 20.994C21.6956 20.4211 20.9778 19.9898 20.2601 19.5616L19.8319 19.3444C19.5608 19.2164 19.297 19.0734 19.0417 18.9163C18.9725 18.9163 18.8276 18.7746 18.8276 18.7746C18.8276 18.7746 18.8276 18.7022 18.7584 18.7022C18.4746 18.4589 18.2887 18.1208 18.2355 17.7508C18.1822 17.3808 18.2651 17.004 18.4688 16.6905C18.6828 16.3316 19.0417 16.19 19.473 16.19C19.8376 16.1988 20.1897 16.3246 20.4773 16.5489L20.5497 16.6213C20.6189 16.6905 20.6914 16.6905 20.7638 16.7629C20.9778 16.9802 21.1226 17.1942 21.3367 17.4083C21.4091 17.4776 21.5508 17.55 21.6232 17.6948C22.1238 18.2678 22.7691 18.8407 23.4145 19.3444C23.5562 19.4137 23.701 19.4861 23.8458 19.4861C23.9875 19.4861 24.0599 19.4137 24.1323 19.4137H24.2047L24.636 19.7002C26.9992 17.173 30.0742 15.4231 33.4539 14.682C34.3134 14.5372 35.1004 14.3955 35.8906 14.3231L35.963 13.7502V13.6085C36.1771 13.4668 36.2495 13.2496 36.3219 13.0355C36.3219 12.1761 36.3219 11.3859 36.1802 10.5989V10.5265C36.1802 10.3848 36.1802 10.24 36.1078 10.0952C36.0255 9.81557 35.978 9.52692 35.9662 9.23572V8.87998C35.9662 8.52109 36.1078 8.1622 36.3975 7.87572C36.7563 7.51683 37.1845 7.30275 37.6158 7.37516C37.9719 7.42457 38.2959 7.60753 38.5222 7.88696C38.7484 8.16638 38.8599 8.52137 38.8341 8.87998V9.31127C38.7617 9.59775 38.7617 9.88424 38.6925 10.1707C38.6925 10.3124 38.6201 10.4572 38.6201 10.5989V10.6713C38.4689 11.5307 38.4689 12.3209 38.4689 13.1079C38.5413 13.322 38.6106 13.5361 38.8278 13.6809V13.6085L38.9002 14.1815C42.292 14.5357 45.5184 15.8262 48.2188 17.9089C48.7949 18.4818 49.4371 19.0548 50.0101 19.6278L50.5862 19.2689H50.6554C50.7247 19.3413 50.8695 19.3413 50.9419 19.3413C51.0867 19.3413 51.2284 19.2689 51.3732 19.1996C52.0186 18.7683 52.6639 18.1953 53.1645 17.6224C53.2338 17.55 53.3786 17.4776 53.451 17.3359C53.5958 17.1218 53.8099 16.9046 54.0271 16.6905C54.0963 16.6905 54.1688 16.6213 54.2412 16.5489L54.3104 16.4765C54.5978 16.254 54.9483 16.1284 55.3115 16.1176C55.6704 16.1176 56.1017 16.3316 56.3158 16.6213C56.8163 17.2666 56.6715 18.1261 56.0293 18.6266C56.0293 18.699 56.0986 18.699 56.0293 18.7715C55.9569 18.8407 55.8845 18.8407 55.8152 18.9131C55.5256 19.0548 55.3115 19.1996 55.025 19.3444L54.5938 19.5585C53.8801 19.9708 53.2075 20.4505 52.5852 20.9909C52.4436 21.1357 52.3712 21.4222 52.3712 21.6363V21.7087L51.943 22.14C53.0889 23.9313 53.9515 25.9398 54.4521 28.0176C54.8834 30.0953 55.025 32.2455 54.7386 34.3233L55.3115 34.4681C55.3558 34.5821 55.4236 34.6856 55.5103 34.7718C55.5971 34.858 55.701 34.9251 55.8152 34.9687C56.6023 35.1827 57.4617 35.3276 58.2488 35.4H58.3212C58.4574 35.4568 58.6052 35.4805 58.7525 35.4692C59.0389 35.4692 59.3254 35.4692 59.6087 35.5416C59.7536 35.5416 59.8984 35.5416 59.8984 35.614C59.8984 35.6833 59.9676 35.6833 60.04 35.6833C60.3867 35.7665 60.6982 35.9571 60.93 36.2279C61.1618 36.4987 61.3021 36.8359 61.3308 37.1913C61.2227 37.4836 61.0286 37.7363 60.774 37.9162C60.5194 38.096 60.2163 38.1945 59.9047 38.1987Z", fill: "#232F3E" }), /* @__PURE__ */ w.createElement("path", { d: "M68.8612 36.6215L69.8542 36.5034L69.8477 36.4488L69.8352 36.3951L68.8612 36.6215ZM63.4149 13.1803L64.3889 12.954L64.3807 12.9186L64.3699 12.8839L63.4149 13.1803ZM61.1199 10.5296L61.5896 9.64682L61.5709 9.63685L61.5517 9.62767L61.1199 10.5296ZM39.2591 0.0620141L38.8119 0.956441L38.8196 0.96026L38.8273 0.963948L39.2591 0.0620141ZM35.6765 -0.155208L35.4365 -1.12597L35.3358 -1.10107L35.2423 -1.05603L35.6765 -0.155208ZM13.8095 10.3848L14.2253 11.2942L14.2346 11.29L14.2437 11.2856L13.8095 10.3848ZM11.6593 13.0355L12.6343 13.2578L12.635 13.2548L11.6593 13.0355ZM6.28228 36.6215L5.3073 36.3992L5.30172 36.4237L5.29737 36.4484L6.28228 36.6215ZM7.06932 40.0624L6.25455 40.6422L6.27237 40.6672L6.29169 40.6911L7.06932 40.0624ZM22.1962 58.7718L21.4185 59.4005L21.4517 59.4416L21.4891 59.4789L22.1962 58.7718ZM25.4923 60.2798L25.433 61.278L25.4626 61.2798H25.4923V60.2798ZM49.5788 60.2798L49.6879 59.2858L49.6335 59.2798H49.5788V60.2798ZM52.878 58.7718L52.1004 58.1431L52.0857 58.1613L52.0718 58.1802L52.878 58.7718ZM68.0049 40.0624L68.7825 40.6911L68.8018 40.6672L68.8196 40.6422L68.0049 40.0624ZM59.9047 38.1987V39.1988L59.9181 39.1986L59.9047 38.1987ZM59.5458 38.1263L58.8231 38.8175L58.9432 38.943L59.0986 39.0207L59.5458 38.1263ZM59.1145 37.9846L58.8694 38.9541L58.9901 38.9846H59.1145V37.9846ZM58.3275 37.6257L58.7786 36.7333L58.6079 36.647L58.4174 36.6298L58.3275 37.6257ZM57.8962 37.484L58.4143 36.6287L58.1754 36.484H57.8962V37.484ZM57.8269 37.484L57.4642 38.416L57.6392 38.484H57.8269V37.484ZM55.5319 36.8387L55.7081 35.8543L55.6207 35.8387H55.5319V36.8387ZM55.4626 36.8387L55.4373 37.8384L55.45 37.8387H55.4626V36.8387ZM54.8897 37.0528H53.8897V39.3215L55.5643 37.7909L54.8897 37.0528ZM54.8173 37.1252L54.6872 38.1167L54.752 38.1252H54.8173V37.1252ZM54.2412 37.0496L54.3712 36.0581L53.5454 35.9498L53.2895 36.7424L54.2412 37.0496ZM46.4967 46.7994L45.9822 45.942L45.2688 46.3701L45.56 47.1494L46.4967 46.7994ZM46.7108 47.3724L46.7108 48.3724L48.1519 48.3723L47.6475 47.0224L46.7108 47.3724ZM46.6415 47.4416L47.4967 47.96L47.6415 47.7211V47.4416H46.6415ZM46.5723 48.1594L45.6338 48.5047L45.6385 48.5175L45.6435 48.5301L46.5723 48.1594ZM47.7182 50.2372H48.7182V49.8948L48.5084 49.6243L47.7182 50.2372ZM47.7182 50.3789H46.7182V50.8368L47.0649 51.136L47.7182 50.3789ZM48.0047 50.7378L47.1216 51.207L47.1908 51.3373L47.2947 51.442L48.0047 50.7378ZM48.5052 51.4555L47.599 51.8783L47.6784 52.0484L47.814 52.1782L48.5052 51.4555ZM48.6501 51.6696H47.6501V52.6695L48.65 52.6696L48.6501 51.6696ZM48.7193 51.7389H47.7193V51.924L47.7856 52.0968L48.7193 51.7389ZM48.7917 52.8155L49.7613 53.0604L49.7632 53.0528L49.765 53.0452L48.7917 52.8155ZM48.1463 53.6026L48.4542 54.554L48.5169 54.5337L48.5764 54.5054L48.1463 53.6026ZM47.5702 53.7442L47.5323 54.7435L47.5513 54.7442H47.5702V53.7442ZM46.2071 52.8848L47.0924 52.4198L46.8114 51.8848L46.2071 51.8848L46.2071 52.8848ZM46.1378 52.8155L47.1378 52.8155L47.1378 52.4143L46.8605 52.1243L46.1378 52.8155ZM45.993 52.6015L45.1591 53.1533L45.2206 53.2463L45.3011 53.3234L45.993 52.6015ZM45.7065 51.8144L46.676 51.5694L46.6667 51.5323L46.6545 51.4961L45.7065 51.8144ZM45.5617 51.3831H44.5617V51.5465L44.6137 51.7014L45.5617 51.3831ZM45.5617 51.3139H46.5617V51.1645L46.5181 51.0217L45.5617 51.3139ZM44.6299 49.0913L45.5087 48.6141L45.4849 48.5703L45.4569 48.5291L44.6299 49.0913ZM44.0569 48.66L43.0569 48.66L43.0569 49.3846L43.7455 49.6102L44.0569 48.66ZM43.9845 48.5876L43.1166 49.0843L43.4046 49.5876H43.9845V48.5876ZM43.698 48.087L44.5659 47.5903L44.1721 46.9021L43.4122 47.1287L43.698 48.087ZM41.403 48.7324L41.2221 47.7489L41.1781 47.757L41.1351 47.7689L41.403 48.7324ZM37.5339 49.2329L37.5339 48.2329L37.5269 48.233L37.5339 49.2329ZM31.2975 48.087L31.6595 47.1548L30.8104 46.8251L30.403 47.6398L31.2975 48.087ZM31.011 48.66L30.1166 48.2128L30.011 48.4239V48.66H31.011ZM30.9386 48.7324V47.7324H30.7804L30.6299 47.7812L30.9386 48.7324ZM30.3656 49.1637L29.5369 48.6039L29.5004 48.6581L29.4712 48.7165L30.3656 49.1637ZM29.4338 51.3863L30.3838 51.6983L30.3921 51.6732L30.399 51.6478L29.4338 51.3863ZM29.2921 51.8176L28.342 51.5055L28.3311 51.5387L28.3226 51.5725L29.2921 51.8176ZM29.0056 52.6046L29.7283 53.2958L29.9105 53.1053L29.9751 52.8496L29.0056 52.6046ZM28.8639 52.8187V53.8187H29.8639V52.8187H28.8639ZM28.7915 52.8879L29.6784 53.3499L29.7915 53.1328L29.7915 52.888L28.7915 52.8879ZM27.4284 53.7474L27.3442 54.7438L27.4035 54.7488L27.4629 54.7468L27.4284 53.7474ZM26.9278 53.6057L26.4221 54.4684L26.4493 54.4843L26.4773 54.4985L26.9278 53.6057ZM26.3549 51.6696V50.6696H25.7379L25.4611 51.221L26.3549 51.6696ZM26.4273 51.5972L25.7046 50.906L25.4273 51.1959L25.4273 51.5972L26.4273 51.5972ZM26.5689 51.3831L27.2761 52.0902L27.3269 52.0393L27.37 51.9817L26.5689 51.3831ZM27.356 50.3065L28.2504 50.7537L28.356 50.5425V50.3065H27.356ZM27.356 50.234L26.5336 49.6651L26.356 49.9219V50.234H27.356ZM28.5019 48.1563L29.4219 48.5483L29.4339 48.5199L29.4443 48.4909L28.5019 48.1563ZM28.4295 47.4385L29.286 46.9224L28.9944 46.4385L28.4295 46.4385L28.4295 47.4385ZM28.3602 47.3692L27.5458 46.789L27.3602 47.0494V47.3692H28.3602ZM28.7191 46.8655L29.5336 47.4458L30.1977 46.5137L29.1849 45.9806L28.7191 46.8655ZM26.783 45.5748L27.4207 44.8045L27.4081 44.7941L27.3953 44.7841L26.783 45.5748ZM20.9054 37.1881L21.8576 36.8824L21.6086 36.1069L20.7987 36.1938L20.9054 37.1881ZM20.2601 37.2574L19.2601 37.2574L19.2601 38.3704L20.3668 38.2517L20.2601 37.2574ZM20.1876 37.1881L19.5084 37.922L19.7959 38.1881H20.1876V37.1881ZM19.6147 36.974V37.974H19.6305L19.6463 37.9735L19.6147 36.974ZM19.5454 36.974V35.974H19.4605L19.3769 35.9884L19.5454 36.974ZM17.1812 37.6194V38.6194H17.365L17.5368 38.5541L17.1812 37.6194ZM16.6743 37.7642L16.9821 38.7157L17.054 38.6924L17.1215 38.6587L16.6743 37.7642ZM15.8873 38.0507V39.0507H16.0117L16.1323 39.0202L15.8873 38.0507ZM15.5284 38.1231V37.1231H15.2876L15.0733 37.2327L15.5284 38.1231ZM15.1695 38.1955V37.1955H15.1167L15.0643 37.2011L15.1695 38.1955ZM13.7339 37.1913L12.7524 37.3823L12.7574 37.408L12.7637 37.4334L13.7339 37.1913ZM14.8799 35.5416L15.0435 36.5282L15.3601 36.4757L15.587 36.2487L14.8799 35.5416ZM16.1706 35.3276V36.3276H16.402L16.6098 36.226L16.1706 35.3276ZM16.6019 35.2583V36.2583H16.6427L16.6833 36.255L16.6019 35.2583ZM19.0386 34.827L19.3042 35.7911L19.4627 35.7474L19.5989 35.6553L19.0386 34.827ZM19.5423 34.3233L19.5423 33.3233L18.8215 33.3233L18.5936 34.0071L19.5423 34.3233ZM19.6115 34.254L19.3665 33.2845L18.6115 33.4753V34.254H19.6115ZM20.1845 34.1092L20.4295 35.0787L21.3147 34.855L21.1723 33.9532L20.1845 34.1092ZM22.6936 22.354L23.5387 22.8887L23.5679 22.8424L23.592 22.7933L22.6936 22.354ZM22.9076 21.9952L23.8021 22.4424L24.1231 21.8003L23.6174 21.2907L22.9076 21.9952ZM22.4826 21.6394H21.4826L23.4382 21.9342L22.4826 21.6394ZM22.4826 21.567L23.1897 20.8599L21.4826 19.153V21.567H22.4826ZM22.2686 20.994L22.9757 20.2869L22.2686 20.994ZM20.2601 19.5616L20.7723 18.7028L20.743 18.6853L20.7125 18.6699L20.2601 19.5616ZM19.8319 19.3444L20.2844 18.4526L20.2718 18.4463L20.2591 18.4402L19.8319 19.3444ZM19.0417 18.9163L19.5659 18.0647L19.3248 17.9163H19.0417V18.9163ZM18.8276 18.7746L17.8276 18.7746L17.8277 19.1953L18.1284 19.4894L18.8276 18.7746ZM18.7584 18.7022L18.1076 19.4615L18.3885 19.7022H18.7584V18.7022ZM18.4688 16.6905L19.3073 17.2354L19.3178 17.2193L19.3276 17.2028L18.4688 16.6905ZM19.473 16.19L19.4972 15.1903L19.4851 15.19H19.473V16.19ZM20.4773 16.5489L21.1844 15.8418L21.1408 15.7982L21.0922 15.7603L20.4773 16.5489ZM20.5497 16.6213L21.2568 15.9142L21.2568 15.9142L20.5497 16.6213ZM20.7638 16.7629L21.476 16.061L21.4709 16.0558L20.7638 16.7629ZM21.3367 17.4083L20.6296 18.1154L20.6375 18.1233L20.6455 18.131L21.3367 17.4083ZM21.6232 17.6948L20.7288 18.142L20.786 18.2564L20.8701 18.3527L21.6232 17.6948ZM23.4145 19.3444L22.7992 20.1327L22.8815 20.197L22.9753 20.2428L23.4145 19.3444ZM24.2047 19.4137L24.758 18.5807L24.5065 18.4137H24.2047V19.4137ZM24.636 19.7002L24.0827 20.5331L24.788 21.0017L25.3664 20.3832L24.636 19.7002ZM33.4539 14.682L33.2878 13.6959L33.2637 13.7L33.2398 13.7052L33.4539 14.682ZM35.8906 14.3231L35.9819 15.319L36.782 15.2456L36.8827 14.4485L35.8906 14.3231ZM35.963 13.7502L36.9551 13.8755L36.963 13.8131V13.7502H35.963ZM35.963 13.6085L35.4111 12.7746L34.963 13.0711V13.6085H35.963ZM36.3219 13.0355L37.2692 13.3559L37.3219 13.2001V13.0355H36.3219ZM36.1802 10.5989H35.1802V10.6881L35.1961 10.776L36.1802 10.5989ZM36.1078 10.0952L35.1485 10.3775L35.1736 10.4628L35.2134 10.5424L36.1078 10.0952ZM35.9662 9.23572H34.9662V9.25598L34.967 9.27623L35.9662 9.23572ZM36.3975 7.87572L37.1007 8.58669L37.1046 8.58282L36.3975 7.87572ZM37.6158 7.37516L37.4502 8.36136L37.4643 8.36372L37.4784 8.36567L37.6158 7.37516ZM38.8341 8.87998L37.8367 8.80827L37.8341 8.84407V8.87998H38.8341ZM38.8341 9.31127L39.8036 9.55631L39.8341 9.43569V9.31127H38.8341ZM38.6925 10.1707L37.7205 9.93573L37.6925 10.0516V10.1707H38.6925ZM38.6201 10.6713L39.6049 10.8444L39.6201 10.7585V10.6713H38.6201ZM38.4689 13.1079H37.4689V13.2725L37.5217 13.4283L38.4689 13.1079ZM38.8278 13.6809L38.2731 14.513L39.8278 15.5494V13.6809H38.8278ZM38.8278 13.6085L39.8199 13.4831L37.8278 13.6085H38.8278ZM38.9002 14.1815L37.9081 14.3068L38.0076 15.0937L38.7964 15.176L38.9002 14.1815ZM48.2188 17.9089L48.9239 17.1998L48.8793 17.1554L48.8295 17.117L48.2188 17.9089ZM50.0101 19.6278L49.3029 20.3349L49.8646 20.8965L50.5388 20.4765L50.0101 19.6278ZM50.5862 19.2689V18.2689H50.3002L50.0574 18.4201L50.5862 19.2689ZM50.6554 19.2689L51.3781 18.5776L51.0827 18.2689H50.6554V19.2689ZM51.3732 19.1996L51.8047 20.1017L51.8693 20.0708L51.9288 20.031L51.3732 19.1996ZM53.1645 17.6224L52.4419 16.9312L52.4263 16.9475L52.4114 16.9645L53.1645 17.6224ZM53.451 17.3359L52.6227 16.7756L52.5884 16.8263L52.5605 16.8808L53.451 17.3359ZM54.0271 16.6905V15.6905H53.6171L53.3252 15.9783L54.0271 16.6905ZM54.2412 16.5489L54.9483 17.256L54.9561 17.2481L54.9638 17.2401L54.2412 16.5489ZM54.3104 16.4765L53.6983 15.6857L53.6393 15.7313L53.5878 15.7852L54.3104 16.4765ZM55.3115 16.1176L55.3115 15.1176H55.2967L55.2818 15.118L55.3115 16.1176ZM56.3158 16.6213L55.5116 17.2157L55.5185 17.225L55.5256 17.2341L56.3158 16.6213ZM56.0293 18.6266L55.4146 17.8379L55.0293 18.1382V18.6266H56.0293ZM56.0293 18.7715L56.7205 19.4941L56.7366 19.4787L56.752 19.4627L56.0293 18.7715ZM55.8152 18.9131L56.2546 19.8114L56.4147 19.7331L56.5379 19.6043L55.8152 18.9131ZM55.025 19.3444L55.4697 20.2402L55.4762 20.2369L55.025 19.3444ZM54.5938 19.5585L54.1492 18.6628L54.1209 18.6768L54.0935 18.6926L54.5938 19.5585ZM52.5852 20.9909L51.9295 20.2359L51.8988 20.2625L51.8704 20.2916L52.5852 20.9909ZM52.3712 21.7087L53.0809 22.4132L53.3712 22.1207V21.7087H52.3712ZM51.943 22.14L51.2333 21.4355L50.6689 22.004L51.1006 22.6789L51.943 22.14ZM54.4521 28.0176L55.4312 27.8143L55.428 27.7988L55.4243 27.7834L54.4521 28.0176ZM54.7386 34.3233L53.7479 34.1867L53.6257 35.0735L54.4935 35.2928L54.7386 34.3233ZM55.3115 34.4681L56.2436 34.1058L56.0567 33.625L55.5566 33.4986L55.3115 34.4681ZM55.8152 34.9687L55.4587 35.903L55.505 35.9206L55.5528 35.9336L55.8152 34.9687ZM58.2488 35.4L58.1571 36.3958L58.2028 36.4H58.2488V35.4ZM58.3212 35.4L58.706 34.477L58.5213 34.4H58.3212V35.4ZM58.7525 35.4692L58.7525 34.4692H58.7142L58.676 34.4722L58.7525 35.4692ZM59.6087 35.5416L59.3612 36.5105L59.483 36.5416H59.6087V35.5416ZM60.04 35.6833L60.2733 34.7109L60.1583 34.6833H60.04V35.6833ZM61.3308 37.1913L62.2687 37.5381L62.3453 37.331L62.3275 37.1109L61.3308 37.1913ZM69.8352 36.3951L64.3889 12.954L62.4408 13.4067L67.8871 36.8478L69.8352 36.3951ZM64.3699 12.8839C63.9232 11.4451 62.858 10.3218 61.5896 9.64682L60.6501 11.4124C61.535 11.8833 62.195 12.6238 62.4598 13.4768L64.3699 12.8839ZM61.5517 9.62767L39.691 -0.83992L38.8273 0.963948L60.688 11.4315L61.5517 9.62767ZM39.7063 -0.832413C38.9335 -1.21884 38.1092 -1.29688 37.4678 -1.29688V0.703125C37.9724 0.703125 38.4388 0.769907 38.8119 0.956441L39.7063 -0.832413ZM37.4678 -1.29688C36.9207 -1.29688 36.1489 -1.30212 35.4365 -1.12597L35.9166 0.815559C36.3501 0.708374 36.8691 0.703125 37.4678 0.703125V-1.29688ZM35.2423 -1.05603L13.3753 9.48397L14.2437 11.2856L36.1107 0.745609L35.2423 -1.05603ZM13.3937 9.47535C12.715 9.78566 12.1173 10.2487 11.6472 10.8282L13.2004 12.0882C13.4763 11.7481 13.8271 11.4763 14.2253 11.2942L13.3937 9.47535ZM11.6472 10.8282C11.177 11.4078 10.8473 12.0882 10.6837 12.8163L12.635 13.2548C12.731 12.8275 12.9245 12.4283 13.2004 12.0882L11.6472 10.8282ZM10.6843 12.8133L5.3073 36.3992L7.25727 36.8437L12.6343 13.2578L10.6843 12.8133ZM5.29737 36.4484C5.03594 37.9363 5.38827 39.4248 6.25455 40.6422L7.88409 39.4826C7.32111 38.6914 7.10048 37.7433 7.26719 36.7945L5.29737 36.4484ZM6.29169 40.6911L21.4185 59.4005L22.9738 58.1431L7.84695 39.4337L6.29169 40.6911ZM21.4891 59.4789C22.5112 60.5011 23.9561 61.1903 25.433 61.278L25.5516 59.2815C24.5918 59.2245 23.6 58.7615 22.9033 58.0647L21.4891 59.4789ZM25.4923 61.2798H49.5788V59.2798H25.4923V61.2798ZM49.4697 61.2738C51.1418 61.4573 52.6988 60.7061 53.6842 59.3635L52.0718 58.1802C51.4768 58.9909 50.5972 59.3856 49.6879 59.2858L49.4697 61.2738ZM53.6556 59.4005L68.7825 40.6911L67.2272 39.4337L52.1004 58.1431L53.6556 59.4005ZM68.8196 40.6422C69.6861 39.4245 70.0267 37.9547 69.8542 36.5034L67.8681 36.7395C67.9853 37.7249 67.7529 38.6917 67.1901 39.4826L68.8196 40.6422ZM59.9047 37.1987C59.8856 37.1987 59.8733 37.1987 59.8624 37.1986C59.8521 37.1985 59.8477 37.1983 59.8467 37.1983C59.8455 37.1983 59.8639 37.1989 59.892 37.2036C59.9221 37.2087 59.95 37.2162 59.9727 37.2242C59.9929 37.2313 60.0013 37.236 59.993 37.2318L59.0986 39.0207C59.2326 39.0877 59.3818 39.1457 59.5585 39.1756C59.7105 39.2013 59.8526 39.1987 59.9047 39.1987V37.1987ZM60.2684 37.435C60.2589 37.425 60.2239 37.3879 60.1882 37.3546C60.1502 37.319 60.062 37.2393 59.9313 37.1725C59.7837 37.0971 59.6467 37.07 59.547 37.06C59.5038 37.0557 59.4679 37.0546 59.4482 37.0542C59.4291 37.0538 59.4103 37.0539 59.4041 37.0539V39.0539C59.441 39.0539 59.397 39.055 59.3471 39.05C59.27 39.0422 59.1508 39.0197 59.021 38.9533C58.908 38.8956 58.8373 38.8295 58.821 38.8142C58.8071 38.8012 58.7981 38.7913 58.8231 38.8175L60.2684 37.435ZM59.4041 37.0539C59.4501 37.0539 59.4944 37.0597 59.534 37.0688C59.5711 37.0774 59.5957 37.0872 59.5934 37.0863C59.5851 37.0831 59.5916 37.0855 59.5679 37.0762C59.5534 37.0705 59.524 37.059 59.4889 37.0472C59.4199 37.0241 59.2857 36.9846 59.1145 36.9846V38.9846C58.9811 38.9846 58.8838 38.9538 58.8536 38.9436C58.8379 38.9384 58.8284 38.9345 58.8344 38.9368C58.8377 38.9381 58.8395 38.9389 58.8474 38.942C58.8537 38.9445 58.8629 38.9481 58.8733 38.9522C58.9158 38.9686 58.9896 38.9957 59.0828 39.0173C59.1785 39.0394 59.2857 39.0539 59.4041 39.0539V37.0539ZM59.3595 37.0151C59.216 36.9788 59.1864 36.9394 58.7786 36.7333L57.8763 38.5182C58.0414 38.6016 58.44 38.8456 58.8694 38.9541L59.3595 37.0151ZM58.4174 36.6298C58.4163 36.6297 58.4152 36.6293 58.4143 36.6287L57.3781 38.3394C57.6393 38.4976 57.9333 38.5942 58.2375 38.6217L58.4174 36.6298ZM57.8962 36.484H57.8269V38.484H57.8962V36.484ZM58.1896 36.5521C57.3869 36.2398 56.5559 36.0061 55.7081 35.8543L55.3557 37.823C56.0761 37.952 56.7822 38.1506 57.4642 38.416L58.1896 36.5521ZM55.5319 35.8387H55.4626V37.8387H55.5319V35.8387ZM55.488 35.839C55.0181 35.8271 54.5619 35.9975 54.215 36.3146L55.5643 37.7909C55.5297 37.8225 55.4842 37.8395 55.4373 37.8384L55.488 35.839ZM54.8897 37.0528C53.8897 37.0527 53.8897 37.0522 53.8897 37.0517C53.8897 37.0516 53.8897 37.0511 53.8897 37.0508C53.8897 37.0501 53.8897 37.0495 53.8897 37.0488C53.8897 37.0475 53.8897 37.0462 53.8897 37.0448C53.8897 37.0422 53.8898 37.0395 53.8898 37.0368C53.8899 37.0314 53.89 37.0259 53.8902 37.0202C53.8906 37.009 53.8912 36.9971 53.8921 36.9846C53.8938 36.96 53.8969 36.9314 53.9022 36.8996C53.9119 36.8409 53.9334 36.7474 53.9862 36.6417C54.041 36.5321 54.1389 36.3921 54.3045 36.2818C54.4763 36.1672 54.6604 36.1252 54.8173 36.1252V38.1252C55.0103 38.1252 55.2216 38.074 55.4138 37.9459C55.5997 37.822 55.7112 37.6639 55.775 37.5362C55.8369 37.4124 55.8629 37.3008 55.8749 37.2285C55.8814 37.19 55.885 37.1557 55.887 37.1271C55.888 37.1127 55.8887 37.0992 55.8891 37.0869C55.8893 37.0807 55.8895 37.0748 55.8895 37.0691C55.8896 37.0663 55.8896 37.0635 55.8896 37.0608C55.8897 37.0594 55.8897 37.0581 55.8897 37.0567C55.8897 37.0561 55.8897 37.0554 55.8897 37.0547C55.8897 37.0544 55.8897 37.0539 55.8897 37.0538C55.8897 37.0533 55.8897 37.0528 54.8897 37.0528ZM54.9473 36.1336L54.3712 36.0581L54.1111 38.0411L54.6872 38.1167L54.9473 36.1336ZM53.2895 36.7424C52.0469 40.592 49.4507 43.8605 45.9822 45.942L47.0113 47.6569C50.8948 45.3264 53.8016 41.6669 55.1928 37.3568L53.2895 36.7424ZM45.56 47.1494L45.774 47.7224L47.6475 47.0224L47.4335 46.4494L45.56 47.1494ZM46.7108 47.3724C46.7107 46.3724 46.7102 46.3724 46.7098 46.3724C46.7096 46.3724 46.7091 46.3724 46.7088 46.3724C46.7081 46.3724 46.7074 46.3724 46.7068 46.3724C46.7055 46.3724 46.7041 46.3724 46.7027 46.3724C46.7 46.3724 46.6972 46.3725 46.6944 46.3725C46.6887 46.3726 46.6828 46.3727 46.6766 46.373C46.6643 46.3734 46.6509 46.374 46.6365 46.3751C46.608 46.3771 46.5739 46.3807 46.5355 46.3871C46.4635 46.3991 46.3523 46.4249 46.2289 46.4866C46.1016 46.5503 45.9439 46.6614 45.8203 46.8469C45.6925 47.0386 45.6415 47.2493 45.6415 47.4416H47.6415C47.6415 47.5993 47.5992 47.784 47.4844 47.9563C47.3738 48.1223 47.2334 48.2205 47.1234 48.2754C47.0174 48.3285 46.9234 48.35 46.8644 48.3598C46.8326 48.3652 46.8038 48.3682 46.7791 48.37C46.7666 48.3709 46.7547 48.3715 46.7434 48.3718C46.7377 48.372 46.7322 48.3722 46.7268 48.3723C46.7241 48.3723 46.7214 48.3723 46.7187 48.3723C46.7174 48.3724 46.7161 48.3724 46.7148 48.3724C46.7141 48.3724 46.7135 48.3724 46.7128 48.3724C46.7125 48.3724 46.712 48.3724 46.7118 48.3724C46.7113 48.3724 46.7108 48.3724 46.7108 47.3724ZM45.7864 46.9233C45.6438 47.1585 45.556 47.4228 45.5296 47.6966L47.5204 47.8887C47.5179 47.9139 47.5098 47.9383 47.4967 47.96L45.7864 46.9233ZM45.5296 47.6966C45.5032 47.9704 45.5388 48.2466 45.6338 48.5047L47.5108 47.8141C47.5195 47.8379 47.5228 47.8634 47.5204 47.8887L45.5296 47.6966ZM45.6435 48.5301C45.9508 49.3 46.3511 50.1062 46.928 50.8501L48.5084 49.6243C48.0842 49.0774 47.7667 48.4544 47.501 47.7887L45.6435 48.5301ZM46.7182 50.2372V50.3789H48.7182V50.2372H46.7182ZM47.0649 51.136C47.0881 51.1559 47.1073 51.18 47.1216 51.207L48.8877 50.2685C48.7572 50.0228 48.5821 49.8035 48.3715 49.6217L47.0649 51.136ZM47.2947 51.442C47.4205 51.5688 47.5235 51.7164 47.599 51.8783L49.4115 51.0327C49.2385 50.662 49.0027 50.3239 48.7146 50.0335L47.2947 51.442ZM47.814 52.1782C47.8565 52.2188 47.8359 52.2024 47.808 52.1656C47.7907 52.1428 47.7549 52.0924 47.7219 52.0171C47.6879 51.9397 47.6501 51.8202 47.6501 51.6696H49.6501C49.6501 51.3067 49.475 51.054 49.4016 50.9572C49.3194 50.8487 49.2264 50.7615 49.1965 50.7329L47.814 52.1782ZM48.6501 51.6696C48.65 52.6696 48.6495 52.6696 48.649 52.6696C48.6489 52.6696 48.6484 52.6696 48.648 52.6696C48.6474 52.6696 48.6467 52.6696 48.6461 52.6696C48.6448 52.6696 48.6434 52.6696 48.6421 52.6696C48.6395 52.6695 48.6368 52.6695 48.6341 52.6695C48.6287 52.6694 48.6231 52.6692 48.6175 52.6691C48.6062 52.6687 48.5942 52.6681 48.5817 52.6672C48.557 52.6654 48.5283 52.6624 48.4964 52.6571C48.4374 52.6472 48.3435 52.6257 48.2374 52.5727C48.1274 52.5177 47.9871 52.4195 47.8764 52.2535C47.7616 52.0813 47.7193 51.8965 47.7193 51.7389H49.7193C49.7193 51.5466 49.6684 51.3359 49.5406 51.1441C49.4169 50.9587 49.2592 50.8475 49.1319 50.7839C49.0086 50.7222 48.8973 50.6963 48.8253 50.6843C48.787 50.6779 48.7528 50.6743 48.7243 50.6723C48.7099 50.6713 48.6965 50.6706 48.6842 50.6702C48.678 50.67 48.6721 50.6698 48.6664 50.6697C48.6636 50.6697 48.6608 50.6697 48.6581 50.6696C48.6567 50.6696 48.6554 50.6696 48.6541 50.6696C48.6534 50.6696 48.6527 50.6696 48.6521 50.6696C48.6517 50.6696 48.6513 50.6696 48.6511 50.6696C48.6506 50.6696 48.6501 50.6696 48.6501 51.6696ZM47.7856 52.0968C47.8454 52.2528 47.8568 52.4232 47.8185 52.5858L49.765 53.0452C49.8956 52.4918 49.8566 51.9119 49.6531 51.3809L47.7856 52.0968ZM47.8222 52.5706C47.8151 52.5986 47.8019 52.6247 47.7836 52.647L49.3302 53.9152C49.535 53.6654 49.6822 53.3736 49.7613 53.0604L47.8222 52.5706ZM47.7836 52.647C47.7653 52.6694 47.7423 52.6874 47.7163 52.6998L48.5764 54.5054C48.868 54.3664 49.1254 54.1649 49.3302 53.9152L47.7836 52.647ZM47.8385 52.6511C47.7703 52.6732 47.707 52.6957 47.6653 52.7104C47.6182 52.7269 47.5939 52.7351 47.5748 52.7407C47.5495 52.7483 47.5574 52.7442 47.5702 52.7442V54.7442C47.9952 54.7442 48.381 54.5777 48.4542 54.554L47.8385 52.6511ZM47.6082 52.745C47.5012 52.7409 47.3972 52.7087 47.3066 52.6516L46.24 54.3434C46.6281 54.5881 47.0738 54.7261 47.5323 54.7435L47.6082 52.745ZM47.3066 52.6516C47.2161 52.5945 47.1422 52.5145 47.0924 52.4198L45.3218 53.3498C45.5351 53.756 45.8518 54.0987 46.24 54.3434L47.3066 52.6516ZM46.2071 51.8848C46.3648 51.8848 46.5495 51.9271 46.7217 52.0419C46.8877 52.1526 46.9859 52.2929 47.0409 52.4029C47.0939 52.509 47.1155 52.6029 47.1253 52.6619C47.1306 52.6938 47.1337 52.7225 47.1354 52.7472C47.1363 52.7598 47.1369 52.7717 47.1373 52.783C47.1375 52.7886 47.1376 52.7942 47.1377 52.7996C47.1377 52.8023 47.1378 52.805 47.1378 52.8076C47.1378 52.809 47.1378 52.8103 47.1378 52.8116C47.1378 52.8122 47.1378 52.8129 47.1378 52.8136C47.1378 52.8139 47.1378 52.8144 47.1378 52.8145C47.1378 52.815 47.1378 52.8155 46.1378 52.8155C45.1378 52.8155 45.1378 52.816 45.1378 52.8165C45.1378 52.8167 45.1378 52.8172 45.1378 52.8175C45.1378 52.8182 45.1378 52.8188 45.1378 52.8195C45.1378 52.8208 45.1378 52.8222 45.1379 52.8235C45.1379 52.8262 45.1379 52.829 45.138 52.8319C45.1381 52.8375 45.1382 52.8435 45.1384 52.8496C45.1388 52.8619 45.1395 52.8754 45.1405 52.8898C45.1425 52.9182 45.1461 52.9524 45.1525 52.9908C45.1645 53.0628 45.1904 53.174 45.2521 53.2974C45.3157 53.4247 45.4269 53.5824 45.6124 53.706C45.8041 53.8338 46.0148 53.8848 46.2071 53.8848V51.8848ZM46.8605 52.1243C46.9414 52.2089 46.9832 52.3024 46.9582 52.2534C46.9483 52.234 46.9178 52.1734 46.8734 52.1059C46.8252 52.0326 46.764 51.9552 46.6849 51.8795L45.3011 53.3234C45.2598 53.2839 45.227 53.2423 45.2022 53.2046C45.1812 53.1727 45.1691 53.1475 45.1773 53.1636C45.1885 53.1855 45.265 53.3498 45.4152 53.5068L46.8605 52.1243ZM46.8269 52.0496C46.7979 52.0057 46.7603 51.9027 46.676 51.5694L44.737 52.0595C44.7976 52.2991 44.9048 52.769 45.1591 53.1533L46.8269 52.0496ZM46.6545 51.4961L46.5097 51.0648L44.6137 51.7014L44.7585 52.1327L46.6545 51.4961ZM46.5617 51.3831V51.3139H44.5617V51.3831H46.5617ZM46.5181 51.0217C46.2632 50.1873 45.925 49.3807 45.5087 48.6141L43.7511 49.5685C44.1034 50.2173 44.3896 50.9 44.6054 51.6061L46.5181 51.0217ZM45.4569 48.5291C45.1946 48.1432 44.8118 47.855 44.3683 47.7097L43.7455 49.6102C43.7688 49.6179 43.789 49.6331 43.8028 49.6534L45.4569 48.5291ZM45.0569 48.66C45.0569 48.654 45.0569 48.6349 45.0566 48.6157C45.0562 48.5974 45.0551 48.5568 45.0497 48.5077C45.0417 48.4365 45.0073 48.1419 44.755 47.8895C44.5026 47.6372 44.208 47.6027 44.1368 47.5948C44.0877 47.5894 44.0471 47.5883 44.0288 47.5879C44.0096 47.5875 43.9905 47.5876 43.9845 47.5876V49.5876C44.027 49.5876 43.9741 49.589 43.9159 49.5826C43.865 49.5769 43.584 49.547 43.3407 49.3037C43.0974 49.0604 43.0675 48.7794 43.0619 48.7285C43.0554 48.6703 43.0569 48.6174 43.0569 48.66H45.0569ZM44.8524 48.0908L44.5659 47.5903L42.8301 48.5837L43.1166 49.0843L44.8524 48.0908ZM43.4122 47.1287C42.6164 47.3661 41.9384 47.6171 41.2221 47.7489L41.584 49.7159C42.4417 49.5581 43.3441 49.2361 43.9838 49.0453L43.4122 47.1287ZM41.1351 47.7689C39.9462 48.0995 38.7475 48.2329 37.5339 48.2329V50.2329C38.8955 50.2329 40.2783 50.083 41.6709 49.6958L41.1351 47.7689ZM37.5269 48.233C35.5206 48.247 33.5298 47.8812 31.6595 47.1548L30.9354 49.0192C33.041 49.8369 35.2823 50.2487 37.5409 50.2329L37.5269 48.233ZM30.403 47.6398L30.1166 48.2128L31.9054 49.1072L32.1919 48.5342L30.403 47.6398ZM30.011 48.66C30.011 48.7025 30.0095 48.6496 30.016 48.5914C30.0216 48.5406 30.0515 48.2596 30.2948 48.0163C30.5381 47.7729 30.8191 47.743 30.87 47.7374C30.9282 47.7309 30.9811 47.7324 30.9386 47.7324V49.7324C30.9446 49.7324 30.9636 49.7324 30.9829 49.732C31.0012 49.7317 31.0418 49.7306 31.0909 49.7251C31.1621 49.7172 31.4567 49.6828 31.7091 49.4304C31.9614 49.1781 31.9958 48.8835 32.0037 48.8123C32.0092 48.7631 32.0103 48.7226 32.0106 48.7043C32.011 48.685 32.011 48.666 32.011 48.66H30.011ZM30.6299 47.7812C30.184 47.9259 29.7993 48.2155 29.5369 48.6039L31.1943 49.7234C31.207 49.7046 31.2256 49.6906 31.2472 49.6836L30.6299 47.7812ZM29.4712 48.7165C29.12 49.4189 28.7131 50.2221 28.4686 51.1248L30.399 51.6478C30.5826 50.9701 30.8935 50.344 31.26 49.6109L29.4712 48.7165ZM28.4837 51.0742L28.342 51.5055L30.2422 52.1296L30.3838 51.6983L28.4837 51.0742ZM28.3226 51.5725C28.3084 51.6287 28.2862 51.685 28.2294 51.8179C28.1792 51.9353 28.0943 52.1292 28.0361 52.3596L29.9751 52.8496C29.9893 52.7935 30.0115 52.7372 30.0683 52.6043C30.1185 52.4869 30.2034 52.2929 30.2616 52.0626L28.3226 51.5725ZM28.283 51.9134C28.276 51.9206 28.1829 52.0136 28.1109 52.1088C28.0423 52.1997 27.8639 52.4528 27.8639 52.8187H29.8639C29.8639 52.9702 29.8257 53.0907 29.791 53.1691C29.7576 53.2446 29.7218 53.2944 29.7067 53.3145C29.6908 53.3354 29.6807 53.3457 29.6872 53.3387C29.6971 53.328 29.7002 53.3251 29.7283 53.2958L28.283 51.9134ZM28.8639 51.8187C28.6797 51.8187 28.4746 51.8651 28.2844 51.9863C28.0984 52.105 27.9826 52.2594 27.9144 52.39C27.8486 52.5159 27.8206 52.6303 27.8075 52.7054C27.8006 52.7453 27.7967 52.7808 27.7945 52.8105C27.7933 52.8255 27.7926 52.8395 27.7922 52.8523C27.7919 52.8587 27.7918 52.8649 27.7917 52.8708C27.7916 52.8738 27.7916 52.8767 27.7916 52.8796C27.7916 52.881 27.7915 52.8824 27.7915 52.8838C27.7915 52.8845 27.7915 52.8852 27.7915 52.8859C27.7915 52.8862 27.7915 52.8867 27.7915 52.8869C27.7915 52.8874 27.7915 52.8879 28.7915 52.8879C29.7915 52.888 29.7915 52.8885 29.7915 52.889C29.7915 52.8892 29.7915 52.8897 29.7915 52.89C29.7915 52.8907 29.7915 52.8914 29.7915 52.8921C29.7915 52.8934 29.7915 52.8948 29.7915 52.8962C29.7915 52.899 29.7914 52.9018 29.7914 52.9046C29.7913 52.9103 29.7912 52.9161 29.7909 52.922C29.7905 52.9338 29.7899 52.9463 29.7889 52.9595C29.787 52.9853 29.7836 53.0155 29.7778 53.0488C29.767 53.1109 29.7435 53.2081 29.6868 53.3166C29.6276 53.4299 29.5254 53.567 29.3598 53.6726C29.1899 53.7809 29.012 53.8187 28.8639 53.8187V51.8187ZM27.9047 52.4259C27.8556 52.52 27.7825 52.5994 27.6928 52.656L28.7595 54.3478C29.1487 54.1024 29.4658 53.758 29.6784 53.3499L27.9047 52.4259ZM27.6928 52.656C27.6031 52.7126 27.4999 52.7443 27.3939 52.748L27.4629 54.7468C27.9228 54.7309 28.3702 54.5932 28.7595 54.3478L27.6928 52.656ZM27.5126 52.7509C27.4658 52.747 27.4202 52.7341 27.3784 52.7129L26.4773 54.4985C26.7479 54.635 27.0422 54.7183 27.3442 54.7438L27.5126 52.7509ZM27.4335 52.743C27.3291 52.6818 27.2519 52.5832 27.2176 52.4671L25.2998 53.0347C25.4783 53.6378 25.8795 54.1504 26.4221 54.4684L27.4335 52.743ZM27.2176 52.4671C27.1832 52.3511 27.1943 52.2263 27.2486 52.1182L25.4611 51.221C25.179 51.7831 25.1213 52.4316 25.2998 53.0347L27.2176 52.4671ZM26.3549 52.6696C26.5479 52.6696 26.7592 52.6185 26.9514 52.4903C27.1373 52.3664 27.2488 52.2083 27.3126 52.0806C27.3745 51.9569 27.4005 51.8452 27.4125 51.7729C27.419 51.7344 27.4226 51.7001 27.4246 51.6715C27.4256 51.6571 27.4263 51.6436 27.4267 51.6313C27.4269 51.6251 27.4271 51.6192 27.4271 51.6135C27.4272 51.6107 27.4272 51.6079 27.4272 51.6052C27.4273 51.6038 27.4273 51.6025 27.4273 51.6011C27.4273 51.6005 27.4273 51.5998 27.4273 51.5992C27.4273 51.5988 27.4273 51.5983 27.4273 51.5982C27.4273 51.5977 27.4273 51.5972 26.4273 51.5972C25.4273 51.5972 25.4273 51.5967 25.4273 51.5962C25.4273 51.5961 25.4273 51.5956 25.4273 51.5953C25.4273 51.5946 25.4273 51.5939 25.4273 51.5933C25.4273 51.592 25.4273 51.5906 25.4273 51.5893C25.4273 51.5867 25.4274 51.584 25.4274 51.5813C25.4275 51.5759 25.4276 51.5704 25.4278 51.5647C25.4282 51.5534 25.4288 51.5415 25.4297 51.5291C25.4314 51.5045 25.4345 51.4758 25.4398 51.4441C25.4495 51.3854 25.471 51.2918 25.5238 51.1862C25.5786 51.0766 25.6765 50.9366 25.842 50.8262C26.0139 50.7117 26.198 50.6696 26.3549 50.6696V52.6696ZM27.1499 52.2884C27.3014 52.1301 27.3768 51.9665 27.3914 51.9374C27.4011 51.918 27.3899 51.9418 27.3711 51.9715C27.3483 52.0076 27.3169 52.0494 27.2761 52.0902L25.8618 50.676C25.7027 50.8352 25.625 50.998 25.6025 51.043C25.5817 51.0847 25.6225 50.9919 25.7046 50.906L27.1499 52.2884ZM27.37 51.9817C27.5033 51.8034 27.6153 51.6242 27.6876 51.5117C27.7275 51.4497 27.7543 51.4091 27.776 51.3787C27.7987 51.3467 27.8003 51.3483 27.7843 51.3646L26.3547 49.966C26.1994 50.1248 26.0734 50.3242 26.0051 50.4305C25.9161 50.569 25.8487 50.6764 25.7679 50.7845L27.37 51.9817ZM27.7843 51.3646C27.9059 51.2404 28.0961 51.0623 28.2504 50.7537L26.4616 49.8592C26.4594 49.8635 26.4608 49.8602 26.4655 49.8531C26.4703 49.8459 26.4737 49.8419 26.4724 49.8435C26.4696 49.8467 26.4616 49.8559 26.4411 49.8775C26.4185 49.9011 26.395 49.9249 26.3547 49.966L27.7843 51.3646ZM28.356 50.3065V50.234H26.356V50.3065H28.356ZM28.1784 50.803C28.6679 50.0953 29.0846 49.3399 29.4219 48.5483L27.5819 47.7643C27.2976 48.4317 26.9463 49.0685 26.5336 49.6651L28.1784 50.803ZM29.4443 48.4909C29.5355 48.234 29.5686 47.9601 29.5412 47.6889L27.5513 47.8896C27.549 47.8666 27.5518 47.8434 27.5596 47.8216L29.4443 48.4909ZM29.5412 47.6889C29.5139 47.4177 29.4267 47.1559 29.286 46.9224L27.573 47.9546C27.561 47.9348 27.5537 47.9126 27.5513 47.8896L29.5412 47.6889ZM28.4295 47.4385C28.4295 46.4385 28.43 46.4385 28.4304 46.4385C28.4306 46.4385 28.4311 46.4385 28.4314 46.4385C28.4321 46.4385 28.4327 46.4385 28.4334 46.4385C28.4347 46.4385 28.436 46.4385 28.4374 46.4385C28.44 46.4385 28.4427 46.4386 28.4454 46.4386C28.4508 46.4387 28.4563 46.4388 28.462 46.439C28.4733 46.4394 28.4852 46.44 28.4977 46.4409C28.5224 46.4427 28.5512 46.4457 28.5831 46.451C28.6421 46.4608 28.736 46.4824 28.8421 46.5354C28.9521 46.5904 29.0925 46.6886 29.2031 46.8546C29.318 47.0268 29.3602 47.2116 29.3602 47.3692H27.3602C27.3602 47.5615 27.4112 47.7722 27.539 47.964C27.6627 48.1494 27.8204 48.2606 27.9477 48.3243C28.071 48.386 28.1823 48.4118 28.2543 48.4238C28.2927 48.4302 28.3268 48.4338 28.3553 48.4358C28.3697 48.4368 28.3831 48.4375 28.3954 48.4379C28.4016 48.4381 28.4075 48.4383 28.4132 48.4384C28.416 48.4384 28.4188 48.4384 28.4215 48.4385C28.4229 48.4385 28.4242 48.4385 28.4256 48.4385C28.4262 48.4385 28.4269 48.4385 28.4276 48.4385C28.4279 48.4385 28.4284 48.4385 28.4285 48.4385C28.429 48.4385 28.4295 48.4385 28.4295 47.4385ZM29.1747 47.9495L29.5336 47.4458L27.9047 46.2853L27.5458 46.789L29.1747 47.9495ZM29.1849 45.9806C28.5578 45.6505 27.9666 45.2564 27.4207 44.8045L26.1453 46.3451C26.7976 46.8851 27.504 47.356 28.2533 47.7504L29.1849 45.9806ZM27.3953 44.7841C24.7939 42.7698 22.8633 40.015 21.8576 36.8824L19.9533 37.4938C21.0825 41.011 23.2501 44.1038 26.1708 46.3655L27.3953 44.7841ZM20.7987 36.1938L20.1533 36.2631L20.3668 38.2517L21.0121 38.1824L20.7987 36.1938ZM20.2601 37.2574C21.2601 37.2574 21.2601 37.2569 21.2601 37.2563C21.2601 37.2562 21.2601 37.2557 21.2601 37.2553C21.2601 37.2546 21.2601 37.2539 21.26 37.2532C21.26 37.2519 21.26 37.2504 21.26 37.249C21.26 37.2462 21.26 37.2433 21.2599 37.2403C21.2598 37.2344 21.2597 37.2282 21.2594 37.2218C21.259 37.2089 21.2583 37.1949 21.2571 37.1799C21.2549 37.1503 21.251 37.1147 21.2441 37.0749C21.231 36.9998 21.203 36.8853 21.1372 36.7595C21.069 36.6289 20.9532 36.4744 20.7672 36.3558C20.577 36.2345 20.3719 36.1881 20.1876 36.1881V38.1881C20.0396 38.1881 19.8617 38.1504 19.6918 38.0421C19.5261 37.9364 19.424 37.7993 19.3648 37.686C19.3081 37.5775 19.2846 37.4804 19.2738 37.4182C19.268 37.3849 19.2646 37.3548 19.2627 37.3289C19.2617 37.3158 19.2611 37.3033 19.2606 37.2914C19.2604 37.2855 19.2603 37.2797 19.2602 37.2741C19.2601 37.2712 19.2601 37.2684 19.2601 37.2656C19.2601 37.2643 19.2601 37.2629 19.2601 37.2615C19.2601 37.2608 19.2601 37.2601 19.2601 37.2594C19.2601 37.2591 19.2601 37.2586 19.2601 37.2584C19.2601 37.2579 19.2601 37.2574 20.2601 37.2574ZM20.8669 36.4542C20.5186 36.1318 20.0574 35.9595 19.583 35.9746L19.6463 37.9735C19.5954 37.9752 19.5458 37.9566 19.5084 37.922L20.8669 36.4542ZM19.6147 35.974H19.5454V37.974H19.6147V35.974ZM19.3769 35.9884C18.5059 36.1373 17.6514 36.3706 16.8255 36.6848L17.5368 38.5541C18.2416 38.2859 18.9707 38.0869 19.714 37.9597L19.3769 35.9884ZM17.1812 36.6194H17.1056V38.6194H17.1812V36.6194ZM17.1056 36.6194C16.6808 36.6194 16.3105 36.8281 16.2271 36.8698L17.1215 38.6587C17.1401 38.6494 17.1554 38.6417 17.1703 38.6344C17.1849 38.6272 17.1971 38.6213 17.2078 38.6163C17.2299 38.6059 17.2406 38.6016 17.2439 38.6004C17.2473 38.5991 17.2366 38.6034 17.215 38.6082C17.193 38.6131 17.1553 38.6194 17.1056 38.6194V36.6194ZM16.3665 36.8128C16.2158 36.8615 16.0346 36.9384 15.9352 36.9784C15.8075 37.0297 15.7164 37.0624 15.6422 37.0812L16.1323 39.0202C16.3446 38.9666 16.5401 38.8907 16.6807 38.8342C16.8497 38.7663 16.9188 38.7362 16.9821 38.7157L16.3665 36.8128ZM15.8873 37.0507C15.9775 37.0507 16.0464 37.0669 15.9902 37.0567C15.9788 37.0547 15.9126 37.0421 15.8543 37.0341C15.8157 37.0288 15.6618 37.0062 15.4861 37.0328C15.3997 37.0458 15.196 37.0859 14.9956 37.2421C14.7456 37.4369 14.6008 37.7348 14.6008 38.0507H16.6008C16.6008 38.1803 16.5745 38.3291 16.5021 38.4776C16.4296 38.6262 16.3282 38.7391 16.225 38.8196C16.0367 38.9663 15.8505 39.0004 15.7855 39.0102C15.7056 39.0223 15.6457 39.0201 15.6247 39.0191C15.5992 39.0179 15.583 39.0156 15.5818 39.0154C15.5796 39.0151 15.5819 39.0154 15.5925 39.0173C15.6091 39.0202 15.6098 39.0204 15.6364 39.0252C15.6404 39.0259 15.7624 39.0507 15.8873 39.0507V37.0507ZM14.6008 38.0507C14.6008 38.0932 14.5993 38.0404 14.6058 37.9821C14.6114 37.9313 14.6413 37.6503 14.8846 37.407C15.1279 37.1637 15.4089 37.1338 15.4598 37.1281C15.518 37.1216 15.5709 37.1231 15.5284 37.1231V39.1231C15.5344 39.1231 15.5535 39.1232 15.5727 39.1228C15.591 39.1224 15.6316 39.1213 15.6807 39.1159C15.7519 39.108 16.0465 39.0735 16.2989 38.8212C16.5512 38.5688 16.5856 38.2742 16.5935 38.203C16.599 38.1539 16.6001 38.1133 16.6004 38.095C16.6008 38.0758 16.6008 38.0567 16.6008 38.0507H14.6008ZM15.0733 37.2327C15.0682 37.2353 15.079 37.2294 15.1014 37.2215C15.126 37.2129 15.1547 37.2053 15.1846 37.2003C15.2123 37.1956 15.2302 37.1951 15.2283 37.1951C15.227 37.1952 15.2224 37.1953 15.2119 37.1954C15.201 37.1955 15.1886 37.1955 15.1695 37.1955V39.1955C15.2216 39.1955 15.3639 39.1982 15.5157 39.1727C15.6936 39.1428 15.8452 39.0842 15.9835 39.0136L15.0733 37.2327ZM15.0643 37.2011C14.984 37.2096 14.9033 37.1888 14.8371 37.1425L13.6907 38.7813C14.1521 39.1041 14.7147 39.2492 15.2747 39.19L15.0643 37.2011ZM14.8371 37.1425C14.771 37.0962 14.7237 37.0275 14.7042 36.9492L12.7637 37.4334C12.9 37.9798 13.2293 38.4585 13.6907 38.7813L14.8371 37.1425ZM14.7155 37.0003C14.7053 36.9477 14.7057 36.8935 14.7168 36.8411L12.7596 36.4291C12.6935 36.7432 12.6911 37.0673 12.7524 37.3823L14.7155 37.0003ZM14.7168 36.8411C14.7278 36.7887 14.7492 36.739 14.7798 36.695L13.1372 35.5539C12.9541 35.8175 12.8257 36.1151 12.7596 36.4291L14.7168 36.8411ZM14.7798 36.695C14.8104 36.6509 14.8495 36.6135 14.8948 36.5849L13.8256 34.8946C13.5544 35.0662 13.3203 35.2904 13.1372 35.5539L14.7798 36.695ZM14.8948 36.5849C14.94 36.5562 14.9906 36.5369 15.0435 36.5282L14.7163 34.5551C14.3997 34.6076 14.0968 34.7231 13.8256 34.8946L14.8948 36.5849ZM15.587 36.2487C15.6127 36.2231 15.6047 36.2315 15.5918 36.2431C15.5769 36.2565 15.5082 36.3184 15.3995 36.3727C15.2737 36.4356 15.1582 36.4577 15.0812 36.4654C15.0317 36.4704 14.9881 36.4692 15.0247 36.4692V34.4692C15.0185 34.4692 14.9997 34.4692 14.9806 34.4696C14.9609 34.47 14.9252 34.471 14.8822 34.4753C14.7826 34.4853 14.6489 34.5119 14.505 34.5839C14.3783 34.6473 14.2915 34.7227 14.2539 34.7565C14.2184 34.7884 14.1833 34.824 14.1728 34.8345L15.587 36.2487ZM15.0247 36.4692C15.1439 36.4692 15.2514 36.4544 15.3461 36.4323C15.4384 36.4108 15.5116 36.3839 15.554 36.3675C15.5644 36.3635 15.5736 36.3599 15.5801 36.3573C15.5883 36.354 15.5898 36.3534 15.5936 36.3519C15.6002 36.3493 15.5912 36.353 15.5764 36.358C15.5499 36.367 15.4497 36.4 15.3112 36.4V34.4C15.1364 34.4 15 34.4416 14.9352 34.4636C14.9012 34.4751 14.8725 34.4864 14.8585 34.4919C14.8366 34.5005 14.8409 34.4989 14.8338 34.5017C14.8313 34.5027 14.8553 34.4931 14.8919 34.4845C14.931 34.4754 14.9763 34.4692 15.0247 34.4692V36.4692ZM15.3112 36.4C15.528 36.4 15.7339 36.3726 15.8663 36.3559C16.0204 36.3364 16.1009 36.3276 16.1706 36.3276V34.3276C15.9538 34.3276 15.7479 34.3549 15.6155 34.3717C15.4614 34.3911 15.3808 34.4 15.3112 34.4V36.4ZM16.6098 36.226C16.5841 36.2385 16.5601 36.247 16.5402 36.2524C16.5208 36.2577 16.5078 36.2594 16.5044 36.2598C16.5017 36.2601 16.5063 36.2595 16.5233 36.2589C16.5316 36.2587 16.5418 36.2585 16.5551 36.2584C16.5688 36.2583 16.5832 36.2583 16.6019 36.2583V34.2583C16.4863 34.2583 16.1112 34.2435 15.7314 34.4292L16.6098 36.226ZM16.6833 36.255C17.5695 36.1826 18.447 36.0273 19.3042 35.7911L18.7729 33.8629C18.0362 34.066 17.2821 34.1994 16.5205 34.2616L16.6833 36.255ZM19.5989 35.6553C19.6862 35.5962 19.8588 35.4832 20.0105 35.3474C20.1706 35.2041 20.379 34.9754 20.491 34.6395L18.5936 34.0071C18.6331 33.8884 18.6968 33.8391 18.6766 33.8572C18.668 33.8649 18.6499 33.8798 18.6143 33.9054C18.5769 33.9322 18.5376 33.9586 18.4783 33.9987L19.5989 35.6553ZM19.5423 34.3233C19.5422 35.3233 19.5427 35.3233 19.5432 35.3233C19.5434 35.3233 19.5439 35.3233 19.5442 35.3233C19.5449 35.3233 19.5455 35.3233 19.5462 35.3233C19.5475 35.3233 19.5489 35.3233 19.5502 35.3233C19.553 35.3233 19.5557 35.3232 19.5586 35.3232C19.5642 35.3231 19.5702 35.3229 19.5763 35.3227C19.5886 35.3223 19.6021 35.3217 19.6165 35.3206C19.645 35.3186 19.6791 35.315 19.7175 35.3086C19.7895 35.2966 19.9007 35.2708 20.0241 35.2091C20.1514 35.1454 20.3091 35.0343 20.4328 34.8488C20.5606 34.6571 20.6115 34.4464 20.6115 34.254H18.6115C18.6115 34.0964 18.6538 33.9116 18.7687 33.7394C18.8793 33.5734 19.0197 33.4752 19.1297 33.4202C19.2358 33.3672 19.3297 33.3457 19.3887 33.3358C19.4206 33.3305 19.4493 33.3275 19.474 33.3257C19.4866 33.3248 19.4985 33.3242 19.5098 33.3238C19.5154 33.3237 19.521 33.3235 19.5264 33.3234C19.5291 33.3234 19.5318 33.3234 19.5344 33.3233C19.5357 33.3233 19.5371 33.3233 19.5384 33.3233C19.539 33.3233 19.5397 33.3233 19.5404 33.3233C19.5407 33.3233 19.5412 33.3233 19.5413 33.3233C19.5418 33.3233 19.5423 33.3233 19.5423 34.3233ZM19.8566 35.2236L20.4295 35.0787L19.9395 33.1397L19.3665 33.2845L19.8566 35.2236ZM21.1723 33.9532C20.5668 30.1197 21.4388 26.2081 23.5387 22.8887L21.8485 21.8194C19.5032 25.5267 18.5114 29.9262 19.1967 34.2652L21.1723 33.9532ZM23.592 22.7933C23.5948 22.7875 23.597 22.7824 23.6324 22.7291C23.6674 22.6765 23.7353 22.576 23.8021 22.4424L22.0132 21.5479C22.0076 21.5591 22.0031 21.5673 21.9664 21.6225C21.9303 21.677 21.8616 21.7789 21.7952 21.9148L23.592 22.7933ZM23.6174 21.2907L23.205 20.8752L21.7855 22.284L22.1979 22.6996L23.6174 21.2907ZM21.5019 21.4641C21.5066 21.4236 21.5151 21.3836 21.5271 21.3447L23.4382 21.9342C23.4623 21.8562 23.4791 21.7762 23.4885 21.6951L21.5019 21.4641ZM23.4826 21.6394V21.567H21.4826V21.6394H23.4826ZM21.7756 22.2742L21.7882 22.2868L23.2023 20.8725L23.1897 20.8599L21.7756 22.2742ZM23.4836 21.7317C23.5375 21.3811 23.4491 21.0714 23.3625 20.8675C23.2727 20.6561 23.1392 20.4505 22.9757 20.2869L21.5615 21.7012C21.5401 21.6797 21.5309 21.666 21.529 21.6632C21.5264 21.6593 21.5243 21.6556 21.5217 21.6495C21.5194 21.644 21.5123 21.6262 21.5068 21.5953C21.5014 21.5652 21.4947 21.5065 21.5069 21.4275L23.4836 21.7317ZM22.9757 20.2869C22.3001 19.6114 21.4718 19.12 20.7723 18.7028L19.7478 20.4205C20.4839 20.8595 21.0911 21.2308 21.5615 21.7012L22.9757 20.2869ZM20.7125 18.6699L20.2844 18.4526L19.3795 20.2362L19.8076 20.4534L20.7125 18.6699ZM20.2591 18.4402C20.0213 18.3279 19.7899 18.2025 19.5659 18.0647L18.5175 19.7679C18.8042 19.9443 19.1004 20.1048 19.4047 20.2486L20.2591 18.4402ZM19.0417 17.9163C19.1927 17.9163 19.3053 17.9524 19.3562 17.9711C19.4137 17.9921 19.4544 18.014 19.474 18.0252C19.4956 18.0375 19.5102 18.0475 19.5167 18.052C19.5238 18.057 19.5278 18.0601 19.5284 18.0606C19.529 18.061 19.5265 18.0591 19.5228 18.0557C19.5214 18.0545 19.5208 18.0538 19.5212 18.0542C19.5214 18.0544 19.522 18.055 19.5229 18.0559C19.5234 18.0563 19.5239 18.0569 19.5246 18.0575C19.5249 18.0578 19.5253 18.0582 19.5257 18.0586C19.5259 18.0587 19.5261 18.0589 19.5263 18.0591C19.5264 18.0592 19.5265 18.0593 19.5266 18.0595C19.5267 18.0595 19.5268 18.0596 19.5268 18.0596C19.5269 18.0597 19.5269 18.0598 18.8276 18.7746C18.1284 19.4894 18.1284 19.4895 18.1285 19.4896C18.1286 19.4896 18.1286 19.4897 18.1287 19.4898C18.1288 19.4899 18.1289 19.49 18.1291 19.4901C18.1293 19.4904 18.1296 19.4906 18.1298 19.4909C18.1303 19.4914 18.1309 19.4919 18.1315 19.4925C18.1327 19.4937 18.1341 19.495 18.1357 19.4965C18.1387 19.4995 18.1425 19.5031 18.1468 19.5072C18.1554 19.5153 18.1666 19.5257 18.1799 19.5378C18.2055 19.561 18.2436 19.5944 18.2891 19.6303C18.3306 19.6631 18.3993 19.7148 18.4841 19.7631C18.5292 19.7888 18.7463 19.9163 19.0417 19.9163V17.9163ZM18.8276 18.7746C19.8276 18.7746 19.8276 18.7741 19.8276 18.7736C19.8276 18.7735 19.8276 18.773 19.8276 18.7727C19.8276 18.7721 19.8276 18.7714 19.8276 18.7708C19.8276 18.7695 19.8276 18.7682 19.8276 18.7669C19.8276 18.7643 19.8276 18.7617 19.8275 18.7589C19.8274 18.7535 19.8273 18.7478 19.8271 18.7419C19.8267 18.7301 19.8261 18.7172 19.8252 18.7033C19.8233 18.6759 19.82 18.6429 19.8141 18.6058C19.803 18.5366 19.7791 18.4281 19.7211 18.3069C19.6618 18.1829 19.555 18.0219 19.3702 17.8931C19.1769 17.7584 18.9601 17.7022 18.7584 17.7022V19.7022C18.5913 19.7022 18.4004 19.655 18.2266 19.5339C18.0614 19.4187 17.9676 19.2758 17.9169 19.1699C17.8676 19.0668 17.8479 18.9764 17.839 18.9207C17.8342 18.8904 17.8314 18.8631 17.8298 18.8397C17.829 18.8278 17.8285 18.8164 17.8281 18.8057C17.828 18.8003 17.8278 18.795 17.8278 18.7898C17.8277 18.7873 17.8277 18.7847 17.8277 18.7822C17.8277 18.7809 17.8277 18.7796 17.8277 18.7784C17.8277 18.7778 17.8277 18.7771 17.8277 18.7765C17.8277 18.7762 17.8277 18.7757 17.8277 18.7756C17.8277 18.7751 17.8276 18.7746 18.8276 18.7746ZM19.4092 17.9429C19.3093 17.8574 19.244 17.7385 19.2252 17.6083L17.2457 17.8933C17.3335 18.5032 17.6398 19.0604 18.1076 19.4615L19.4092 17.9429ZM19.2252 17.6083C19.2065 17.4781 19.2357 17.3456 19.3073 17.2354L17.6302 16.1457C17.2945 16.6624 17.1578 17.2834 17.2457 17.8933L19.2252 17.6083ZM19.3276 17.2028C19.3322 17.195 19.3323 17.197 19.3261 17.2026C19.32 17.2081 19.3151 17.2106 19.3156 17.2103C19.3191 17.2086 19.3625 17.19 19.473 17.19V15.19C18.8141 15.19 18.0602 15.4234 17.6099 16.1783L19.3276 17.2028ZM19.4489 17.1897C19.599 17.1933 19.7439 17.2451 19.8624 17.3375L21.0922 15.7603C20.6354 15.4041 20.0762 15.2043 19.4972 15.1903L19.4489 17.1897ZM19.7702 17.256L19.8426 17.3284L21.2568 15.9142L21.1844 15.8418L19.7702 17.256ZM19.8426 17.3284C20.0071 17.4929 20.1824 17.5725 20.2123 17.5873C20.2437 17.6029 20.147 17.5604 20.0567 17.47L21.4709 16.0558C21.3081 15.8931 21.139 15.8144 21.0988 15.7945C21.057 15.7739 21.1615 15.8189 21.2568 15.9142L19.8426 17.3284ZM20.0515 17.4649C20.125 17.5395 20.1891 17.6158 20.2827 17.7278C20.3705 17.8329 20.4867 17.9725 20.6296 18.1154L22.0438 16.7012C21.9727 16.63 21.9095 16.5556 21.8178 16.4458C21.7319 16.343 21.6165 16.2036 21.476 16.061L20.0515 17.4649ZM20.6455 18.131C20.6807 18.1647 20.7131 18.1919 20.7363 18.2107C20.7595 18.2296 20.7812 18.2462 20.7948 18.2566C20.8119 18.2696 20.8179 18.2742 20.8271 18.2813C20.8344 18.2869 20.8371 18.2892 20.8376 18.2896C20.8422 18.2935 20.7798 18.244 20.7288 18.142L22.5176 17.2476C22.3942 17.0008 22.2247 16.8427 22.1224 16.7568C22.0737 16.7161 22.024 16.6788 22.0089 16.6673C21.9803 16.6454 22.0004 16.6593 22.0279 16.6857L20.6455 18.131ZM20.8701 18.3527C21.4269 18.9901 22.125 19.6065 22.7992 20.1327L24.0298 18.5561C23.4133 18.0749 22.8206 17.5455 22.3763 17.0369L20.8701 18.3527ZM22.9753 20.2428C23.0525 20.2806 23.4222 20.4861 23.8458 20.4861V18.4861C23.8929 18.4861 23.9288 18.492 23.9499 18.4966C23.9706 18.5011 23.9807 18.5051 23.9773 18.5038C23.9737 18.5025 23.963 18.4983 23.9408 18.488C23.9301 18.4831 23.9179 18.4773 23.9031 18.4701C23.8878 18.4627 23.8729 18.4554 23.8537 18.446L22.9753 20.2428ZM23.8458 20.4861C23.9689 20.4861 24.0797 20.47 24.177 20.4463C24.2716 20.4232 24.3465 20.3945 24.3892 20.3772C24.3997 20.373 24.4091 20.3691 24.4155 20.3664C24.4239 20.363 24.4252 20.3624 24.429 20.3608C24.4355 20.3581 24.426 20.3622 24.4105 20.3677C24.383 20.3774 24.2779 20.4137 24.1323 20.4137V18.4137C23.9504 18.4137 23.8092 18.459 23.7433 18.4823C23.7086 18.4946 23.6793 18.5066 23.6653 18.5124C23.6431 18.5216 23.6478 18.5197 23.6408 18.5225C23.6387 18.5234 23.6643 18.5127 23.7033 18.5032C23.7449 18.4931 23.7935 18.4861 23.8458 18.4861V20.4861ZM24.1323 20.4137H24.2047V18.4137H24.1323V20.4137ZM23.6514 20.2467L24.0827 20.5331L25.1893 18.8672L24.758 18.5807L23.6514 20.2467ZM25.3664 20.3832C27.5913 18.004 30.4863 16.3565 33.6681 15.6588L33.2398 13.7052C29.6622 14.4897 26.4072 16.342 23.9056 19.0171L25.3664 20.3832ZM33.6201 15.6681C34.4982 15.5201 35.2389 15.387 35.9819 15.319L35.7994 13.3273C34.9619 13.404 34.1285 13.5542 33.2878 13.6959L33.6201 15.6681ZM36.8827 14.4485L36.9551 13.8755L34.9709 13.6248L34.8985 14.1977L36.8827 14.4485ZM36.963 13.7502V13.6085H34.963V13.7502H36.963ZM36.5149 14.4424C37.0554 14.0847 37.2122 13.5245 37.2692 13.3559L35.3746 12.7151C35.3651 12.7432 35.3578 12.765 35.3504 12.786C35.3433 12.8065 35.3375 12.8224 35.3324 12.8357C35.3219 12.8627 35.3171 12.8713 35.3178 12.8701C35.3192 12.8676 35.3277 12.8526 35.3453 12.8323C35.3638 12.8111 35.3865 12.7909 35.4111 12.7746L36.5149 14.4424ZM37.3219 13.0355C37.3219 12.1924 37.3246 11.3117 37.1644 10.4217L35.1961 10.776C35.3192 11.4602 35.3219 12.1597 35.3219 13.0355H37.3219ZM37.1802 10.5989V10.5265H35.1802V10.5989H37.1802ZM37.1802 10.5265C37.1802 10.4086 37.1946 10.0327 37.0023 9.64795L35.2134 10.5424C35.2013 10.5182 35.1928 10.495 35.1871 10.4748C35.1816 10.4552 35.1796 10.4414 35.179 10.4367C35.1785 10.4326 35.1791 10.4358 35.1796 10.4513C35.1798 10.4589 35.18 10.4684 35.1801 10.4811C35.1802 10.4943 35.1802 10.5081 35.1802 10.5265H37.1802ZM37.0672 9.81284C37.008 9.61192 36.9738 9.40448 36.9653 9.1952L34.967 9.27623C34.9821 9.64937 35.0431 10.0192 35.1485 10.3775L37.0672 9.81284ZM36.9662 9.23572V8.87998H34.9662V9.23572H36.9662ZM36.9662 8.87998C36.9662 8.79176 36.9984 8.68784 37.1007 8.58668L35.6942 7.16476C35.2172 7.63656 34.9662 8.25042 34.9662 8.87998H36.9662ZM37.1046 8.58282C37.2174 8.46997 37.3128 8.40915 37.3776 8.38102C37.4083 8.3677 37.4283 8.36334 37.4381 8.36192C37.4469 8.36063 37.4499 8.36131 37.4502 8.36136L37.7814 6.38896C36.8979 6.24064 36.1618 6.69719 35.6904 7.16861L37.1046 8.58282ZM37.4784 8.36567C37.5831 8.38021 37.6784 8.43402 37.7449 8.5162L39.2994 7.25771C38.9134 6.78104 38.3607 6.46893 37.7532 6.38465L37.4784 8.36567ZM37.7449 8.5162C37.8115 8.59839 37.8443 8.70279 37.8367 8.80827L39.8316 8.95169C39.8755 8.33995 39.6853 7.73438 39.2994 7.25771L37.7449 8.5162ZM37.8341 8.87998V9.31127H39.8341V8.87998H37.8341ZM37.8646 9.06623C37.8109 9.27875 37.7865 9.48177 37.7697 9.6183C37.7506 9.77287 37.7393 9.85789 37.7205 9.93573L39.6645 10.4057C39.7149 10.1971 39.7382 9.9956 39.7546 9.86369C39.7731 9.71374 39.7849 9.63027 39.8036 9.55631L37.8646 9.06623ZM37.6925 10.1707C37.6925 10.1229 37.6984 10.0924 37.6987 10.0907C37.699 10.0892 37.6986 10.0916 37.6965 10.1004C37.6943 10.1099 37.6916 10.1206 37.6867 10.1398C37.679 10.1704 37.6623 10.2353 37.649 10.3054C37.6351 10.3784 37.6201 10.4802 37.6201 10.5989H39.6201C39.6201 10.6467 39.6141 10.6772 39.6138 10.6789C39.6135 10.6804 39.6139 10.678 39.616 10.6692C39.6182 10.6597 39.6209 10.649 39.6258 10.6298C39.6335 10.5992 39.6502 10.5343 39.6636 10.4642C39.6774 10.3911 39.6925 10.2894 39.6925 10.1707H37.6925ZM37.6201 10.5989V10.6713H39.6201V10.5989H37.6201ZM37.6352 10.4981C37.4668 11.4555 37.4689 12.3291 37.4689 13.1079H39.4689C39.4689 12.3127 39.4711 11.6059 39.6049 10.8444L37.6352 10.4981ZM37.5217 13.4283C37.5785 13.5963 37.7317 14.152 38.2731 14.513L39.3825 12.8489C39.4042 12.8633 39.4256 12.8821 39.444 12.9032C39.4617 12.9234 39.4706 12.939 39.4725 12.9425C39.4737 12.9447 39.4693 12.9369 39.4589 12.91C39.4539 12.8967 39.4481 12.8808 39.4409 12.86C39.4333 12.8382 39.4261 12.8166 39.4162 12.7875L37.5217 13.4283ZM39.8278 13.6809V13.6085H37.8278V13.6809H39.8278ZM37.8357 13.7339L37.9081 14.3068L39.8923 14.0561L39.8199 13.4831L37.8357 13.7339ZM38.7964 15.176C42.0036 15.511 45.0546 16.7313 47.608 18.7007L48.8295 17.117C45.9822 14.9211 42.5803 13.5603 39.0041 13.1869L38.7964 15.176ZM47.5136 18.6179C47.8131 18.9158 48.1281 19.212 48.43 19.4963C48.7358 19.7843 49.0288 20.0607 49.3029 20.3349L50.7172 18.9206C50.4184 18.6219 50.1038 18.3253 49.8012 18.0403C49.4946 17.7516 49.2005 17.4749 48.9239 17.1998L47.5136 18.6179ZM50.5388 20.4765L51.1149 20.1176L50.0574 18.4201L49.4813 18.779L50.5388 20.4765ZM50.5862 20.2689H50.6554V18.2689H50.5862V20.2689ZM49.9328 19.9601C50.1935 20.2327 50.5109 20.2981 50.6319 20.3184C50.779 20.3431 50.912 20.3413 50.9419 20.3413V18.3413C50.8994 18.3413 50.9238 18.3394 50.9631 18.346C50.9861 18.3499 51.0376 18.3601 51.1037 18.3876C51.1697 18.4151 51.2755 18.4705 51.3781 18.5776L49.9328 19.9601ZM50.9419 20.3413C51.3649 20.3413 51.7397 20.1328 51.8047 20.1017L50.9417 18.2975C50.9319 18.3022 50.9221 18.3069 50.9132 18.3111C50.9041 18.3155 50.8959 18.3195 50.8879 18.3233C50.8718 18.331 50.8587 18.3372 50.847 18.3426C50.8229 18.3537 50.8115 18.3582 50.8076 18.3597C50.8039 18.361 50.8145 18.3568 50.8359 18.3521C50.8581 18.3472 50.8946 18.3413 50.9419 18.3413V20.3413ZM51.9288 20.031C52.6497 19.5493 53.361 18.9174 53.9176 18.2803L52.4114 16.9645C51.9669 17.4733 51.3875 17.9873 50.8176 18.3682L51.9288 20.031ZM53.8871 18.3136C53.8506 18.3518 53.8227 18.3717 53.8456 18.3537C53.8507 18.3497 53.9047 18.3083 53.9462 18.2738C54.0403 18.1955 54.2147 18.0389 54.3414 17.791L52.5605 16.8808C52.5885 16.8261 52.6187 16.7875 52.6392 16.7645C52.6587 16.7427 52.6718 16.7324 52.6669 16.7364C52.6647 16.7383 52.6603 16.7419 52.6507 16.7493C52.6458 16.7532 52.6409 16.757 52.634 16.7623C52.6277 16.7672 52.6195 16.7736 52.611 16.7803C52.5945 16.7932 52.57 16.8126 52.5434 16.8355C52.5168 16.8582 52.4807 16.8906 52.4419 16.9312L53.8871 18.3136ZM54.2793 17.8962C54.3598 17.7771 54.5021 17.6264 54.729 17.4028L53.3252 15.9783C53.1176 16.1828 52.8318 16.4665 52.6227 16.7756L54.2793 17.8962ZM54.0271 17.6905C54.3842 17.6905 54.6341 17.5197 54.7258 17.4521C54.8315 17.3743 54.9183 17.2859 54.9483 17.256L53.5341 15.8418C53.4916 15.8842 53.506 15.8666 53.54 15.8416C53.5613 15.8259 53.6101 15.792 53.6832 15.7605C53.7579 15.7282 53.8764 15.6905 54.0271 15.6905V17.6905ZM54.9638 17.2401L55.033 17.1677L53.5878 15.7852L53.5185 15.8576L54.9638 17.2401ZM54.9225 17.2672C55.0427 17.1742 55.1893 17.1216 55.3412 17.1171L55.2818 15.118C54.7072 15.1351 54.1529 15.3338 53.6983 15.6857L54.9225 17.2672ZM55.3115 17.1176C55.3039 17.1176 55.3128 17.1168 55.3372 17.1231C55.3609 17.1293 55.39 17.1399 55.4208 17.1552C55.4515 17.1706 55.4769 17.1873 55.4951 17.2018C55.5139 17.2169 55.5173 17.2234 55.5116 17.2157L57.12 16.0269C56.8998 15.729 56.6031 15.5103 56.3152 15.3664C56.027 15.2223 55.6767 15.1176 55.3115 15.1176V17.1176ZM55.5256 17.2341C55.6086 17.3411 55.6254 17.4421 55.6122 17.5294C55.5983 17.6218 55.5437 17.7373 55.4146 17.8379L56.6441 19.4154C57.6837 18.6051 57.9728 17.126 57.106 16.0084L55.5256 17.2341ZM55.0293 18.6266C55.0293 18.8211 55.0798 18.9818 55.1369 19.1011C55.1605 19.1505 55.1839 19.1893 55.1866 19.1939C55.1971 19.2116 55.174 19.1741 55.1531 19.1305C55.1281 19.0782 55.0877 18.9814 55.0695 18.8522C55.0502 18.7153 55.061 18.579 55.0973 18.4526C55.1313 18.3342 55.1813 18.2462 55.2183 18.191C55.2549 18.1364 55.2887 18.099 55.3067 18.0802L56.752 19.4627C56.807 19.4051 56.9494 19.2493 57.0197 19.0043C57.0593 18.8666 57.0706 18.7201 57.05 18.5736C57.0305 18.4348 56.9868 18.3289 56.9574 18.2676C56.9428 18.237 56.9295 18.2129 56.9217 18.1993C56.9177 18.1922 56.9143 18.1863 56.9122 18.1828C56.9112 18.181 56.9103 18.1794 56.9097 18.1785C56.9094 18.178 56.9091 18.1775 56.9089 18.1772C56.9087 18.1768 56.9086 18.1767 56.9085 18.1765C56.9056 18.1715 56.923 18.2001 56.9412 18.2382C56.9874 18.3349 57.0293 18.4684 57.0293 18.6266H55.0293ZM55.3381 18.0488C55.4274 17.9634 55.5251 17.9213 55.4778 17.9447C55.4321 17.9673 55.2576 18.0494 55.0926 18.2219L56.5379 19.6043C56.4923 19.652 56.4454 19.6878 56.4055 19.7133C56.3723 19.7344 56.3457 19.7467 56.3644 19.7375C56.3887 19.7255 56.5588 19.6488 56.7205 19.4941L55.3381 18.0488ZM55.3758 18.0148C55.1986 18.1015 55.0474 18.1879 54.9214 18.2602C54.7907 18.3351 54.6892 18.3937 54.5739 18.452L55.4762 20.2369C55.6473 20.1504 55.7962 20.0641 55.9166 19.995C56.0416 19.9233 56.1423 19.8664 56.2546 19.8114L55.3758 18.0148ZM54.5805 18.4487L54.1492 18.6628L55.0384 20.4542L55.4696 20.2401L54.5805 18.4487ZM54.0935 18.6926C53.3246 19.1368 52.6 19.6536 51.9295 20.2359L53.2409 21.7459C53.8151 21.2473 54.4356 20.8048 55.094 20.4244L54.0935 18.6926ZM51.8704 20.2916C51.6448 20.5223 51.5295 20.7977 51.4692 20.9938C51.4048 21.2032 51.3712 21.4273 51.3712 21.6363H53.3712C53.3712 21.6374 53.3712 21.6297 53.3733 21.6158C53.3754 21.6021 53.3783 21.5899 53.3809 21.5815C53.3838 21.5722 53.3836 21.5758 53.3762 21.5898C53.3723 21.5973 53.365 21.61 53.3535 21.6264C53.3421 21.6426 53.3248 21.665 53.3001 21.6902L51.8704 20.2916ZM51.3712 21.6363V21.7087H53.3712V21.6363H51.3712ZM51.6615 21.0042L51.2333 21.4355L52.6527 22.8445L53.0809 22.4132L51.6615 21.0042ZM51.1006 22.6789C52.1876 24.378 53.0058 26.2837 53.4799 28.2518L55.4243 27.7834C54.8973 25.5959 53.9903 23.4846 52.7854 21.6011L51.1006 22.6789ZM53.473 28.2208C53.8859 30.2101 54.0159 32.2434 53.7479 34.1867L55.7292 34.4599C56.0342 32.2476 55.8809 29.9806 55.4312 27.8143L53.473 28.2208ZM54.4935 35.2928L55.0665 35.4376L55.5566 33.4986L54.9836 33.3538L54.4935 35.2928ZM54.3795 34.8305C54.4745 35.0747 54.6196 35.2964 54.8054 35.4811L56.2152 34.0625C56.2276 34.0748 56.2372 34.0895 56.2436 34.1058L54.3795 34.8305ZM54.8054 35.4811C54.9913 35.6658 55.2139 35.8095 55.4587 35.903L56.1717 34.0344C56.188 34.0406 56.2028 34.0502 56.2152 34.0625L54.8054 35.4811ZM55.5528 35.9336C56.4026 36.1648 57.3199 36.3187 58.1571 36.3958L58.3404 34.4042C57.6036 34.3364 56.802 34.2007 56.0777 34.0037L55.5528 35.9336ZM58.2488 36.4H58.3212V34.4H58.2488V36.4ZM57.9364 36.323C58.2184 36.4406 58.5243 36.4897 58.8289 36.4663L58.676 34.4722C58.6862 34.4714 58.6965 34.473 58.706 34.477L57.9364 36.323ZM58.7525 36.4692C59.0589 36.4692 59.2194 36.4743 59.3612 36.5105L59.8563 34.5728C59.4314 34.4642 59.019 34.4692 58.7525 34.4692L58.7525 36.4692ZM59.6087 36.5416C59.7116 36.5416 59.6891 36.5447 59.6435 36.5371C59.6256 36.5341 59.4883 36.5134 59.3328 36.4134C59.245 36.357 59.1307 36.262 59.039 36.1123C58.9429 35.9553 58.8984 35.7812 58.8984 35.614H60.8984C60.8984 35.1837 60.65 34.8826 60.4142 34.731C60.227 34.6106 60.0445 34.5763 59.9723 34.5643C59.818 34.5386 59.6508 34.5416 59.6087 34.5416V36.5416ZM58.8984 35.614C58.8984 35.8042 58.9493 36.0487 59.1229 36.2705C59.2895 36.4833 59.4953 36.5805 59.6301 36.6247C59.7591 36.6671 59.8702 36.6767 59.9226 36.6801C59.9776 36.6837 60.0291 36.6833 60.04 36.6833V34.6833C60.0148 34.6833 60.0305 34.6829 60.0521 34.6843C60.0711 34.6856 60.1514 34.6909 60.2541 34.7246C60.3624 34.7602 60.5465 34.8444 60.6978 35.0377C60.8561 35.24 60.8984 35.4585 60.8984 35.614H58.8984ZM59.8068 36.6557C59.9484 36.6897 60.0756 36.7676 60.1703 36.8782L61.6897 35.5776C61.3208 35.1466 60.825 34.8432 60.2733 34.7109L59.8068 36.6557ZM60.1703 36.8782C60.265 36.9888 60.3223 37.1265 60.334 37.2717L62.3275 37.1109C62.2819 36.5453 62.0587 36.0087 61.6897 35.5776L60.1703 36.8782ZM60.3929 36.8444C60.3548 36.9472 60.2866 37.0361 60.197 37.0994L61.3509 38.7329C61.7705 38.4365 62.0905 38.02 62.2687 37.5381L60.3929 36.8444ZM60.197 37.0994C60.1075 37.1627 60.0009 37.1973 59.8912 37.1988L59.9181 39.1986C60.4318 39.1917 60.9314 39.0293 61.3509 38.7329L60.197 37.0994Z", fill: "#879596", mask: "url(#path-2-inside-1_4486_65465)" }), /* @__PURE__ */ w.createElement("path", { d: "M44.6279 30.9057L44.6133 30.9015L44.5984 30.8982C44.2595 30.8238 44.0313 30.4785 44.1176 30.0732C44.1452 29.9746 44.1963 29.8841 44.2665 29.8096L49.1709 25.3647C49.7801 26.4817 50.2356 27.6771 50.524 28.9183L50.5241 28.9187C50.8112 30.1498 50.9207 31.4146 50.8502 32.6748L44.6279 30.9057ZM48.8186 39.054L48.8088 39.0675L48.7999 39.0817C47.8511 40.5871 46.6099 41.8842 45.1519 42.8973L42.6002 36.752C42.5685 36.6077 42.5854 36.4567 42.6489 36.3227C42.7148 36.1834 42.8268 36.0714 42.9657 36.0053C43.1018 35.9528 43.2448 35.9204 43.3902 35.9093L49.9022 37.0161C49.5975 37.774 49.2485 38.4635 48.8186 39.054ZM37.1514 38.9222C37.2914 38.8942 37.4366 38.9163 37.5617 38.9845C37.7071 39.0826 37.8128 39.1828 37.996 39.3654L41.0659 44.9294C40.8426 44.9745 40.6079 45.0286 40.3566 45.0993C39.3814 45.3095 38.4184 45.4436 37.3953 45.4436C36.1542 45.4436 34.8514 45.2379 33.6198 44.9147L36.8081 39.1237C36.8965 39.0201 37.0173 38.949 37.1514 38.9222Z", fill: "#232F3E", stroke: "#879596" })), /* @__PURE__ */ w.createElement("defs", null, /* @__PURE__ */ w.createElement("clipPath", { id: "clip0_4486_65465" }, /* @__PURE__ */ w.createElement("rect", { width: 75.5556, height: 60, fill: "white" })))), w4 = q(LL), mL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "64px", height: "64px", viewBox: "0 0 64 64", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("defs", null, /* @__PURE__ */ w.createElement("style", null, ".cls-1{fill:#232f3e;}")), /* @__PURE__ */ w.createElement("g", { stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { className: "cls-1", d: "M58.625,36.072 L57.883,37.928 C54.685,36.649 50.784,36 46.288,36 L46.288,34 C51.04,34 55.19,34.697 58.625,36.072 L58.625,36.072 Z M57.938,34.949 C55.032,33.984 49.152,33 46.288,33 L46.288,31 C49.184,31 55.039,30.017 57.892,29.053 L58.532,30.947 C57.438,31.318 55.96,31.684 54.372,32.004 C55.979,32.323 57.476,32.688 58.569,33.051 L57.938,34.949 Z M58.611,27.934 C55.03,29.305 50.884,30 46.288,30 L46.288,28 C50.639,28 54.544,27.349 57.896,26.066 L58.611,27.934 Z M42.255,35.219 L32.255,37.719 L32.255,26.281 L42.255,28.781 L42.255,35.219 Z M30.255,40 L27.255,40 L27.255,24 L30.255,24 L30.255,25 L30.255,39 L30.255,40 Z M43.497,27.03 L32.255,24.219 L32.255,23 C32.255,22.448 31.808,22 31.255,22 L26.255,22 C25.702,22 25.255,22.448 25.255,23 L25.255,23.93 C10.053,22.821 8.255,16.619 8.255,12 L8.255,7 L6.255,7 L6.255,12 C6.255,20.469 12.485,25.023 25.255,25.927 L25.255,26.963 C17.492,26.652 11.918,25.427 7.786,23.127 L6.813,24.874 C11.242,27.341 17.126,28.644 25.255,28.964 L25.255,30.978 C19.607,30.844 11.956,30.47 6.51,29.033 L6,30.967 C7.633,31.398 9.449,31.734 11.342,32 C9.449,32.267 7.633,32.603 6,33.033 L6.51,34.967 C11.957,33.53 19.608,33.156 25.255,33.023 L25.255,35.037 C17.171,35.353 11.29,36.656 6.816,39.125 L7.783,40.876 C11.958,38.572 17.545,37.356 25.255,37.047 L25.255,38.068 C8.76,39.282 6.255,47.902 6.255,53 L6.253,53.392 C6.236,56.616 6.246,56.974 6.261,57.107 L8.252,56.922 C8.241,56.74 8.242,55.556 8.253,53.403 L8.255,53 C8.255,45.38 14.138,40.933 25.255,40.08 L25.255,41 C25.255,41.552 25.702,42 26.255,42 L31.255,42 C31.808,42 32.255,41.552 32.255,41 L32.255,39.781 L43.497,36.97 C43.942,36.859 44.255,36.459 44.255,36 L44.255,28 C44.255,27.541 43.942,27.141 43.497,27.03 L43.497,27.03 Z", id: "Amazon-Kinesis-Data-Firehose_Icon_64_Squid", fill: "#232F3D" })));
q(mL);
const wL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / kinesis") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-kinesis", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M50.0803143,28 L50.0803143,30 L41.2603143,30 C19.6303143,30 2.08031433,38.44 2.08031433,48.77 C2.06680338,49.1806713 2.08351513,49.5917803 2.13031433,50 L0.0803143298,50 C0.0234898609,49.5925197 -0.00324911792,49.1814079 -7.10553578e-15,48.77 C0.0103143298,37.12 18.1303143,28 41.2503143,28 L50.0803143,28 Z M50.0803143,32 L50.0803143,34 L45.9403143,34 C27.3603143,34 13.3503143,40 13.3503143,48.07 L13.3503143,50 L13.3503143,50 L11.3502938,50 L11.3502938,48.07 L11.3502938,48.07 C11.3303143,38.75 25.8903143,32 45.9403143,32 L50.0803143,32 Z M0.0803143298,15.35 C4.20031433,20.75 18.2703143,24 37.8403143,24 L50.0803143,24 L50.0803143,26 L37.8403143,26 C18.2703143,26 4.20031433,29.17 0.0803143298,34.49 L0.0803143298,31.81 C4.35099615,28.0865909 12.1649579,26.091844 19.9194454,25.0697409 L20.4603143,25 L20.464736,24.998 L19.9294604,24.93026 C12.175397,23.9081973 4.3705416,21.9152273 0.0803143298,18.27 L0.0803143298,15.35 Z M2.16031433,0 C2.09893065,0.417073534 2.07217265,0.838512158 2.08031433,1.26 C2.08031433,11.59 19.6503143,20 41.2703143,20 L50.0803143,20 L50.0803143,22 L41.2603143,22 C18.1703143,22 0.0800482131,12.9 0.0800482131,1.26 C0.0770521059,0.838633872 0.103786325,0.417569923 0.16031433,0 L2.16031433,0 Z M13.4003143,0 L13.4003143,1.83 L13.4003143,1.83 C13.4003143,9.83 27.4003143,16 45.9503143,16 L50.0803143,16 L50.0803143,18 L45.9303143,18 C25.8603143,18 11.2903143,11.2 11.2903143,1.83 L11.2903143,0 L11.2903143,0 L13.4003143,0 Z", id: "Combined-Shape", fill: "currentColor" }))), x4 = q(wL), xL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "51px", height: "49px", viewBox: "0 0 51 49", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / kms") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-kms", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M12.57649,4.97380728e-14 C19.4800494,0.0418784713 25.0429114,5.67189774 25.00149,12.5754571 C25.0207086,17.7480947 21.8345137,22.3919737 17.00149,24.2354571 L17.00149,45.0754571 C17.0015093,45.3677689 16.8736278,45.6454544 16.65149,45.8354571 L13.15149,48.8354571 C12.9703482,48.9903627 12.7398346,49.0754571 12.50149,49.0754571 C12.2142629,49.0754571 11.9410599,48.9512414 11.75149,48.7354571 L8.25149003,44.7354571 C8.0907123,44.5531529 8.00183981,44.3185295 8.00149003,44.0754571 L8.00149003,41.4954571 L5.29149003,38.7854571 C5.10217738,38.5976905 4.99569171,38.3420947 4.99569171,38.0754571 C4.99569171,37.8088196 5.10217738,37.5532237 5.29149003,37.3654571 L8.00149003,34.6654571 L8.00149003,33.4954571 L5.29149003,30.7854571 C5.10217738,30.5976905 4.99569171,30.3420947 4.99569171,30.0754571 C4.99569171,29.8088196 5.10217738,29.5532237 5.29149003,29.3654571 L8.00149003,26.6654571 L8.00149003,24.2454571 C3.11691914,22.3767871 -0.0791124143,17.6546505 0.00149003264,12.4254571 C0.0429113889,5.52189774 5.67293066,-0.0409642412 12.57649,4.97380728e-14 Z M49,16 C50.1045695,16 51,16.8954305 51,18 L51,40 C51,41.1045695 50.1045695,42 49,42 L19.001,42 L19.00149,37.0754571 L26.00149,37.0754571 L26.00149,35.0754571 L19.00149,35.0754571 L19.0000852,30.5109269 C19.6820532,31.742026 20.9944425,32.5754571 22.50149,32.5754571 C24.710629,32.5754571 26.50149,30.7845961 26.50149,28.5754571 C26.50149,26.3663181 24.710629,24.5754571 22.50149,24.5754571 C20.9944425,24.5754571 19.6820532,25.4088882 19.0000852,26.6399874 L19.00149,25.2354571 C23.0637382,23.6859743 25.9625476,20.1580899 26.7724257,16.0007095 L49,16 Z M36.00149,35.0754571 L29.00149,35.0754571 L29.00149,37.0754571 L36.00149,37.0754571 L36.00149,35.0754571 Z M46.00149,35.0754571 L39.00149,35.0754571 L39.00149,37.0754571 L46.00149,37.0754571 L46.00149,35.0754571 Z M32.50149,24.5754571 C30.292351,24.5754571 28.50149,26.3663181 28.50149,28.5754571 C28.50149,30.7845961 30.292351,32.5754571 32.50149,32.5754571 C34.710629,32.5754571 36.50149,30.7845961 36.50149,28.5754571 C36.50149,26.3663181 34.710629,24.5754571 32.50149,24.5754571 Z M22.50149,26.5754571 C23.6060595,26.5754571 24.50149,27.4708876 24.50149,28.5754571 C24.50149,29.6800266 23.6060595,30.5754571 22.50149,30.5754571 C21.3969205,30.5754571 20.50149,29.6800266 20.50149,28.5754571 C20.50149,27.4708876 21.3969205,26.5754571 22.50149,26.5754571 Z M32.50149,26.5754571 C33.6060595,26.5754571 34.50149,27.4708876 34.50149,28.5754571 C34.50149,29.6800266 33.6060595,30.5754571 32.50149,30.5754571 C31.3969205,30.5754571 30.50149,29.6800266 30.50149,28.5754571 C30.50149,27.4708876 31.3969205,26.5754571 32.50149,26.5754571 Z M12.50149,4.57545712 C10.0162087,4.57545712 8.00149003,6.59017574 8.00149003,9.07545712 C8.00149003,11.5607385 10.0162087,13.5754571 12.50149,13.5754571 C14.9844899,13.5699576 16.9959906,11.558457 17.00149,9.07545712 C17.00149,6.59017574 14.9867714,4.57545712 12.50149,4.57545712 Z", id: "Combined-Shape", fill: "currentColor" })));
q(xL);
const vL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "48px", height: "52px", viewBox: "0 0 48 52", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / lambda") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-lambda", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("rect", { id: "Rectangle", fill: "#D8D8D8", opacity: 0, x: 0.35134219, y: 0.300574788, width: 48, height: 52 }), /* @__PURE__ */ w.createElement("path", { d: "M24.4,0 C24.7846594,0.00108889668 25.1345973,0.222716217 25.3,0.57 L42.63,37 L47,37 C47.5522847,37 48,37.4477153 48,38 L48,49 C48,49.5522847 47.5522847,50.0000258 47,50.0000258 L34.69,50.0000258 C34.3017306,50.0027797 33.9469502,49.7805545 33.78,49.43 L16.37,13 L9,13 C8.44771525,13 8,12.5522847 8,12 L8,1 C8,0.44771525 8.44771525,0 9,0 L24.4,0 Z M14.58,19.549996 C14.9623951,19.5492347 15.3117466,19.766609 15.48,20.11 L22,33.54 C22.1327594,33.814806 22.1327594,34.135194 22,34.41 L14.9,49.41 C14.7404169,49.7650848 14.3892681,49.9952823 14,50.000004 L1,50.000004 C0.65449853,50.0006914 0.333115454,49.8229855 0.15,49.53 C-0.028632795,49.2205989 -0.028632795,48.8394011 0.15,48.53 L13.68,20.12 C13.8454027,19.7727162 14.1953406,19.5510889 14.58,19.549996 Z", id: "Combined-Shape", fill: "currentColor" }))), yL = q(vL), bL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 19, height: 19, viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.1956 4.22002C14.6124 4.54183 15.135 4.72727 15.6886 4.72727C17.0191 4.72727 18.0983 3.67136 18.1004 2.36747C18.102 1.41114 17.5153 0.548118 16.6142 0.18108C15.7131 -0.185958 14.6751 0.0153221 13.9845 0.691007C13.2939 1.36669 13.0869 2.38362 13.46 3.2673C13.5184 3.40585 13.5894 3.53684 13.6712 3.65924L10.2986 6.44344C9.29002 4.9664 7.57213 3.99387 5.62245 3.99387C2.51726 3.99387 0 6.46078 0 9.50387C0 12.547 2.51726 15.0139 5.62245 15.0139C7.57136 15.0112 9.28811 14.0384 10.2968 12.5617L13.6704 15.3457C13.4215 15.7175 13.2767 16.1623 13.2767 16.6403C13.2767 17.9456 14.3566 19.0039 15.6886 19.0039C17.0197 19.0018 18.0983 17.9448 18.1004 16.6403C18.1004 15.3349 17.0206 14.2767 15.6886 14.2767C15.1243 14.2767 14.6053 14.4665 14.1945 14.7847L10.6883 11.8912C10.9908 11.2768 11.1806 10.5991 11.2312 9.88387H14.1145C14.1442 10.0623 14.1951 10.2392 14.268 10.411C14.6425 11.2941 15.5231 11.869 16.499 11.8675C17.8286 11.8633 18.9048 10.8069 18.9069 9.50387C18.9069 8.54754 18.3189 7.68544 17.4172 7.31983C16.5155 6.95421 15.4778 7.15713 14.7883 7.8339C14.4235 8.192 14.1942 8.64543 14.1146 9.12387H11.2317C11.182 8.40771 10.9925 7.72912 10.69 7.11405L14.1956 4.22002Z", fill: "currentColor" })), v4 = q(bL), EL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: 50, height: 48, viewBox: "0 0 50 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("path", { d: "M24.7486 34.2833C23.8956 34.2833 22.872 33.2683 21.0978 30.5131C19.3918 33.2 18.6753 33.9251 17.9588 33.9251C16.9181 33.9251 16.0907 32.5603 14.1629 29.0544C13.6031 27.9809 12.9852 26.9387 12.3119 25.9325C11.6124 26.4272 10.0941 27.8261 8.94256 28.8838C4.38754 33.0806 2.6986 34.471 1.62382 33.5327C1.04378 33.0379 1.35939 32.2532 1.62382 31.6134C3.21062 28.1133 4.9758 24.6968 6.91242 21.3774C11.3139 13.7004 11.8598 13.7004 12.4399 13.7004C13.2929 13.7004 13.8047 14.5108 17.6432 21.2751C18.59 23.0067 19.8865 25.2671 21.149 27.2887L21.4817 26.7513C25.3457 20.4989 26.7532 18.5369 28.0498 18.6052C28.7663 18.6052 30.0799 19.407 32.3659 21.0874C35.2405 15.9694 36.4518 14.1269 37.6545 14.1269C40.0003 14.1269 45.8775 24.6956 47.4896 28.355C49.1018 32.0143 48.8459 33.0721 48.3426 33.6521C47.4043 34.6757 46.0481 33.8568 37.1683 26.9049C35.8462 25.8727 34.3449 24.6956 32.9033 23.6294C28.826 30.8543 26.702 34.2577 24.7657 34.2833H24.7486ZM22.1043 28.8838C23.273 30.7519 24.288 32.2105 24.8169 32.5347C26.122 32.1764 29.5425 26.0604 31.4873 22.5631C30.399 21.6949 29.2208 20.9457 27.973 20.3282C27.0347 20.8912 24.433 25.105 22.855 27.6555C22.6076 28.0991 22.3517 28.5256 22.1043 28.9094V28.8838ZM33.7051 22.0598C34.942 23.0067 36.4177 24.1497 38.1493 25.4718C41.2286 27.8773 45.3059 31.0675 46.9522 31.9546C46.4404 28.8753 39.7359 17.1124 37.6375 15.7988C36.8783 16.5153 35.1638 19.5008 33.7051 22.1196V22.0598ZM12.3801 23.9876C13.2331 23.9876 13.8985 25.0795 15.5789 28.1332C16.2586 29.4571 17.0311 30.7312 17.8905 31.9461C18.6605 30.956 19.3726 29.9222 20.023 28.8497C18.9568 27.1437 17.6687 24.8747 16.0651 22.0257C14.7174 19.6544 13.0967 16.7968 12.2948 15.6623C10.5206 17.9569 5.21495 27.3911 3.47483 31.2381C4.71168 30.2828 6.49445 28.6791 7.73983 27.519C10.913 24.7468 11.7063 24.0473 12.4143 24.0473L12.3801 23.9876ZM28.0498 20.2344L37.4328 15.7476L28.0498 20.2344Z", fill: "#687078" })), y4 = q(EL), SL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { viewBox: "0 0 42 42", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", strokeDasharray: 5, strokeLinejoin: "round" }, /* @__PURE__ */ w.createElement("path", { d: "M1,1 L41,1 L41,41 L1,41 L1,1 Z", id: "Path", stroke: "#545B64", strokeWidth: 2 })));
q(SL);
const ML = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / pod") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-pod", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M3,9.94185993 L24.9939243,3.70967741 L47,9.94185993 L25,16.1740425 L3,9.94185993 Z M3,12.3278955 L3,35.1970377 L23.4932339,46.2903226 L23.5965203,18.3167261 L3,12.3278955 Z M47,12.3278955 L47,35.1970377 L26.5006904,46.2903226 L26.397404,18.3167261 L47,12.3278955 Z", id: "Shape", fill: "currentColor" })));
q(ML);
const _L = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "20px", height: "20px", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { transform: "translate(2,2)", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M8.00007059,-0.999717646 C10.4852393,-0.999717646 12.735262,0.00762039856 14.3639704,1.63630007 C15.9926202,3.26492105 17,5.51483259 17,8.00007059 C17,10.4852715 15.9926245,12.7352576 14.3639411,14.3639411 C12.7352576,15.9926245 10.4852715,17 8.00007059,17 C5.51486591,17 3.26483696,15.9926198 1.6361166,14.3639281 C0.0074039296,12.7352442 -1,10.4852629 -1,8.00007059 C-1,5.51482193 0.00738803273,3.26490176 1.63606898,1.63627829 C3.26479081,0.0076139467 5.51483799,-0.999717646 8.00007059,-0.999717646 Z", id: "path4486-path", stroke: "#F2F3F3", strokeWidth: 2, fill: "#E6522C", fillRule: "nonzero" }), /* @__PURE__ */ w.createElement("path", { d: "M10.2762655,13.0975444 C10.2762655,14.1329357 9.25710958,14.972797 8.00007059,14.972797 C6.7430316,14.972797 5.72387566,14.1330769 5.72387566,13.0975444 L10.2762655,13.0975444 Z M11.7597522,11.1130209 L11.7597522,12.4765073 L4.24010659,12.4765073 L4.24010659,11.1130209 L11.7597522,11.1130209 Z M8.06628255,0.930355678 C7.6341401,1.64259307 8.17823582,2.2531831 8.66190783,3.76786991 C8.84332013,4.33681276 8.82016712,5.29427439 8.96021459,5.90147618 C9.00666178,4.64034306 9.22350948,2.80024353 10.0235589,2.16494754 C9.67061668,2.96499696 10.0757943,3.96608225 10.3529246,4.44735426 C10.8000318,5.22382713 11.0710914,5.81211121 11.0710914,6.92472625 C11.0710914,7.67070491 10.7956553,8.37305992 10.3310422,8.92209683 C10.8593261,8.82299066 11.2241271,8.73362569 11.2241271,8.73362569 L12.9397087,8.39889529 C12.9398498,8.39875411 12.6905314,9.42398066 11.7326463,10.4112306 L4.26156548,10.4112306 C4.23671834,10.3825717 4.2113065,10.3543363 4.18730643,10.3252539 C3.41761005,9.39066291 3.23633893,8.9027556 3.06028433,8.4055306 C3.05831254,8.39461293 3.47378199,8.48327201 3.94770808,8.58784748 L4.23620666,8.65183345 C4.38109147,8.68411213 4.52477566,8.7163174 4.65756664,8.74619043 C4.65756664,8.74619043 4.9992147,8.82524949 5.49869853,8.91630858 C5.01912064,8.35414222 4.73436687,7.63950482 4.73436687,6.90905561 C4.73436687,5.30542737 5.96429989,3.9041056 5.52058094,2.77144345 C5.95244104,2.80659649 6.41437181,3.68288142 6.4455719,5.0530031 C6.90467913,4.41855417 7.09682087,3.25991547 7.09682087,2.54951338 C7.09682087,1.81398181 7.58148112,0.959579293 8.06628255,0.930355678 Z", id: "Combined-Shape", fill: "#FFFFFF", fillRule: "nonzero" }))), b4 = q(_L), kL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / rds") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-rds", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M9.48442636,39.0924423 L10.8986399,40.5066558 L3.405,48 L10,48 L10,50 L1,50 C0.44771525,50 0,49.5522847 0,49 L0,40 L2,40 L2,46.576 L9.48442636,39.0924423 Z M40.612203,39.1961966 L48,46.584 L48,40 L50,40 L50,49 C50,49.5522847 49.5522847,50 49,50 L40,50 L40,48 L46.588,48 L39.1979895,40.6104102 L40.612203,39.1961966 Z M25,11.52 C30.297168,11.52 35.9725016,12.8435797 35.9999004,15.738931 L36,15.74 L36,34.26 C36,37.17 30.3,38.5 25,38.5 C19.7,38.5 14,37.17 14,34.26 L14,15.74 L14.001,15.739 L14.0056065,15.6028382 C14.2067835,12.802076 19.7865455,11.52 25,11.52 Z M39.78,15.32 C46.28,17.52 50,21 50,24.75 C50,28.5 46.28,32 39.78,34.18 L39.14,32.28 C44.69,30.41 48,27.59 48,24.75 C48,21.91 44.69,19.09 39.14,17.22 L39.78,15.32 Z M9.66,15.54 L10.34,17.42 C5.15,19.29 2.05,22 2.05,24.75 C2.05,27.5 5.15,30.21 10.34,32.08 L9.66,34 C3.55,31.76 0.05,28.4 0.05,24.75 C0.05,21.1 3.55,17.75 9.66,15.54 Z M16,28.58 L14,28.58 C14,31.49 19.71,32.82 25,32.82 C30.31,32.82 36,31.49 36,28.58 L36,28.58 L34,28.58 C34,29.23 30.85,30.82 25,30.82 C19.15,30.82 16,29.23 16,28.58 L16,28.58 Z M16,22.22 L14,22.22 C14,25.13 19.71,26.45 25,26.45 C30.31,26.45 36,25.13 36,22.22 L36,22.22 L34,22.22 C34,22.87 30.85,24.45 25,24.45 C19.15,24.45 16,22.87 16,22.22 L16,22.22 Z M25,13.5 L25,13.52 C19.17,13.52 16,15.11 16,15.76 C16,16.41 19.15,18 25,18 C30.85,18 34,16.41 34,15.76 C34,15.11 30.81,13.5 25,13.5 Z M10,0 L10,2 L3.414,2 L10.9028968,9.4890873 L9.48868325,10.9033009 L2,3.414 L2,10 L0,10 L0,1 C0,0.44771525 0.44771525,0 1,0 L10,0 Z M49,0 C49.5522847,0 50,0.44771525 50,1 L50,10 L48,10 L48,3.422 L40.6157492,10.8073496 L39.2015357,9.39313603 L46.593,2 L40,2 L40,0 L49,0 Z", id: "Combined-Shape", fill: "currentColor" }))), E4 = q(kL), NL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "34px", height: "50px", viewBox: "0 0 34 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / redshift") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-redshift", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M17,0 C25.1205797,0 33.7461962,2.32122663 33.9945084,6.62867781 L34,6.82 L34,43.18 C34,47.61 25.24,50 17,50 C8.76,50 0,47.61 0,43.18 L0,6.82 C0,2.4 8.76,0 17,0 Z M27.8744004,15.7309932 C26.5682775,15.1734705 25.0547384,15.4604478 24.0433519,16.4573859 C23.0319653,17.4543241 22.7232413,18.9635776 23.2619141,20.2775868 C23.5356319,20.9452791 24.0005734,21.4952969 24.5780523,21.8748498 L24.5780523,21.8748498 L22.9398057,26.0273668 C22.7957436,26.0093055 22.6489585,26 22.5,26 C21.0540878,26 19.8129591,26.8767819 19.2792792,28.1276801 L19.2792792,28.1276801 L14.9920265,27.1518689 C14.8696137,25.3299307 13.3529638,23.89 11.5,23.89 C9.56700338,23.89 8,25.4570034 8,27.39 C8,28.4754881 8.49414897,29.4455616 9.26976596,30.0875394 L9.26976596,30.0875394 L7.90255747,33.2928993 C7.77046685,33.277773 7.63614116,33.27 7.5,33.27 C5.56700338,33.27 4,34.8370034 4,36.77 C4,38.7029966 5.56700338,40.27 7.5,40.27 C9.43299662,40.27 11,38.7029966 11,36.77 C11,35.689215 10.5101238,34.7228468 9.74029985,34.0808237 L9.74029985,34.0808237 L11.1105581,30.8685776 C11.2384218,30.8827328 11.3683622,30.89 11.5,30.89 C12.8098703,30.89 13.9516794,30.1704445 14.5517142,29.1050464 L14.5517142,29.1050464 L19.0563897,30.1291294 C19.3527414,31.7618739 20.7817808,33 22.5,33 C24.4329966,33 26,31.4329966 26,29.5 C26,28.4333245 25.5228308,27.4780978 24.770306,26.8361335 L24.770306,26.8361335 L26.5,22.45 C28.4136376,22.4501953 29.9726623,20.9134423 30,19 C30.0202877,17.5800081 29.1805233,16.2885158 27.8744004,15.7309932 Z M7.5,35.27 C8.32842712,35.27 9,35.9415729 9,36.77 C9,37.5984271 8.32842712,38.27 7.5,38.27 C6.67157288,38.27 6,37.5984271 6,36.77 C6,35.9415729 6.67157288,35.27 7.5,35.27 Z M22.5,28 C23.3284271,28 24,28.6715729 24,29.5 C24,30.3284271 23.3284271,31 22.5,31 C21.6715729,31 21,30.3284271 21,29.5 C21,28.6715729 21.6715729,28 22.5,28 Z M11.5,25.89 C12.3284271,25.89 13,26.5615729 13,27.39 C13,28.2184271 12.3284271,28.89 11.5,28.89 C10.6715729,28.89 10,28.2184271 10,27.39 C10,26.5615729 10.6715729,25.89 11.5,25.89 Z M26.5,17.4499998 C26.9066413,17.449774 27.2959497,17.6146543 27.5787368,17.9068676 C27.8615239,18.199081 28.0135548,18.5935846 28,19 C27.972606,19.8213597 27.2893912,20.4677478 26.4677744,20.4496354 C25.6461577,20.4315231 24.9920917,19.7556549 25.0009201,18.933886 C25.0097485,18.112117 25.6781838,17.4504567 26.5,17.4499998 Z M17,2 C7.71,2 2,4.8 2,6.82 C2,8.84 7.71,11.63 17,11.63 C26.29,11.63 32,8.83 32,6.82 C32,4.81 26.29,2 17,2 Z", id: "Combined-Shape", fill: "currentColor" }))), S4 = q(NL), ZL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / route53") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-route53", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M25.01,0 C25.3306977,0 25.6348088,0.14252412 25.84,0.388986252 C27.98,3.18898625 30.18,4.38898625 32.97,4.38898625 C35.8201435,4.23572712 38.4801656,2.9111447 40.32,0.728986252 C40.5291656,0.50128888 40.8318948,0.383150655 41.14,0.408986252 C41.4512126,0.419902112 41.7395771,0.575175273 41.92,0.828986252 C42.4218868,1.51955229 43.563147,2.95201936 44.7929905,4.47188744 L45.1640502,4.92981539 C47.089231,7.30256048 49.0949057,9.72804286 49.13,9.76898625 C49.497485,10.2152339 49.4396524,10.8736358 49,11.2489863 C46.8021383,13.1923919 45.4913121,15.9476547 45.37,18.8789863 C45.37,21.0689863 46.3,22.6889863 47.37,24.5589863 C49.0123541,26.9810541 49.925148,29.8235569 50,32.7489863 C50,38.7489863 45.09,43.2689863 36.87,44.7489863 C32.8155309,45.6132192 28.9867993,47.3163916 25.63,49.7489863 C25.4500524,49.8887065 25.2277903,49.9627939 25,49.959126 C24.7710047,49.9599502 24.5486159,49.8822906 24.37,49.7389863 C21.0104042,47.3112476 17.182735,45.6085478 13.13,44.7389863 C4.91,43.2689863 0,38.7789863 0,32.7489863 C0.0792258648,29.8197501 1.00291632,26.9757558 2.66,24.5589863 C3.74,22.6889863 4.66,21.0689863 4.66,18.8789863 C4.53215448,15.9428077 3.20995035,13.1864094 1,11.2489863 C0.778057588,11.0739632 0.640549459,10.8131904 0.621494874,10.5311825 C0.60244029,10.2491747 0.703619154,9.97227439 0.9,9.76898625 C0.950943396,9.73332587 2.47338199,7.88879045 4.13067458,5.84569548 L4.50063838,5.38906041 C5.9850267,3.55468223 7.49773585,1.6576655 8.1,0.828986252 C8.28042294,0.575175273 8.56878738,0.419902112 8.88,0.408986252 C9.19020468,0.388787381 9.49364033,0.505774618 9.71,0.728986252 C11.5452283,2.91156287 14.2024625,4.23655979 17.05,4.38898625 C19.84,4.38898625 22.05,3.14898625 24.18,0.388986252 C24.3851912,0.14252412 24.6893023,0 25.01,0 Z M25,2.61898625 C23.0677691,5.06612885 20.1179985,6.48939314 17,6.47898625 C13.9926037,6.37496521 11.1353851,5.13921819 9,3.01898625 C7.46,5.06898625 4.43,8.75898625 3.13,10.3489863 C5.38427903,12.6248494 6.6829648,15.6765821 6.76,18.8789863 C6.76,21.6289863 5.59,23.6489863 4.46,25.5989863 C3.24,27.7089863 2.09,29.6889863 2.09,32.7489863 C2.09,40.0689863 10.83,42.2089863 13.5,42.6889863 C17.6264962,43.5456648 21.5378161,45.2258318 25,47.6289863 C28.465176,45.2246046 32.380014,43.5443874 36.51,42.6889863 C39.19,42.2089863 47.93,40.0689863 47.93,32.7489863 C47.93,29.6889863 46.78,27.7489863 45.56,25.5989863 C44.42,23.6489863 43.25,21.5989863 43.25,18.8789863 C43.3256546,15.6743087 44.6286128,12.6209478 46.89,10.3489863 C45.59,8.75898625 42.57,5.06898625 41,3.01898625 C38.8668791,5.14256109 36.0082816,6.3789045 33,6.47898625 C29.8823407,6.48789894 26.9331894,5.06493347 25,2.61898625 Z M25.59,7.08898625 C27.7429678,8.64889031 30.3415391,9.47299863 33,9.43898625 C35.3799843,9.41802701 37.7133862,8.77694465 39.77,7.57898625 C40.1854999,7.36030128 40.6971886,7.46014298 41,7.81898625 L42.6,9.81898625 C42.8625596,10.1448194 42.8944794,10.5996767 42.68,10.9589863 C41.1359896,13.316309 40.3092247,16.0710342 40.3,18.8889863 C40.3,22.4389863 41.74,24.8889863 43.01,27.0989863 C44.11,28.9989863 45.01,30.4989863 45.01,32.7589863 C45.01,37.7589863 38.13,39.4089863 36.01,39.7589863 C32.3139904,40.4844684 28.7694595,41.8373428 25.53,43.7589863 C25.3763037,43.8753444 25.1922511,43.9447982 25,43.9589863 C24.8239138,43.9571575 24.6514328,43.9088628 24.5,43.8189863 C21.2590879,41.9003516 17.7150881,40.5476799 14.02,39.8189863 C11.91,39.4389863 5.02,37.8189863 5.02,32.8189863 C5.02,30.5589863 5.89,29.0589863 7.02,27.1589863 C8.22,25.0789863 9.72,22.4989863 9.72,18.9489863 C9.72019387,16.1123727 8.89687389,13.3367074 7.35,10.9589863 C7.11554235,10.5968699 7.13972957,10.1252191 7.41,9.78898625 C7.93,9.15898625 8.48,8.48898625 9.01,7.78898625 C9.31781687,7.40940628 9.85489403,7.30791139 10.28,7.54898625 C12.3366138,8.74694465 14.6700157,9.38802701 17.05,9.40898625 C19.6951845,9.4473856 22.2825831,8.63400282 24.43,7.08898625 C24.7771643,6.84180822 25.2428357,6.84180822 25.59,7.08898625 Z M35.39,18.2689863 L27,18.2689863 L27,19.9589863 L33.1,19.9589863 L28.73,24.6889863 L28.73,26.0489863 C29.3943341,25.9790752 30.0620056,25.9456916 30.73,25.9489863 C32.83,25.9489863 33.88,26.7789863 33.88,28.4389863 C33.9280315,29.2003073 33.6172428,29.9402804 33.04,30.4389863 C32.3442675,30.9490509 31.4907252,31.1969677 30.63,31.1389863 C29.4646756,31.1009046 28.3112078,30.8993424 27.2032747,30.5407898 L26.79,30.3989863 L26.79,32.1089863 C27.9983701,32.6496291 29.3062143,32.9323142 30.63,32.9389863 C32.0321423,33.0092021 33.4138372,32.5805224 34.53,31.7289863 C35.4931917,30.9384914 36.0329871,29.7442865 35.99,28.4989863 C36.0520361,27.3709451 35.6128821,26.2730601 34.79,25.4989863 C33.9553092,24.7851659 32.8955017,24.3946091 31.8026866,24.3925383 L31.55,24.3989863 L31.14,24.3989863 L35.39,19.8989863 L35.39,18.2689863 Z M23.34,18.2689863 L15.82,18.2689863 L15.42,24.4389863 L15.42,25.8489863 C16.4823475,25.7254215 17.5505343,25.6586598 18.62,25.6489863 C19.5234731,25.5724816 20.4261335,25.8051987 21.18,26.3089863 C21.746933,26.861521 22.0336377,27.6407698 21.96,28.4289863 C21.9927843,29.1856043 21.6888782,29.9179081 21.13,30.4289863 C20.4384058,30.9482039 19.5826283,31.2003209 18.72,31.1389863 C17.534338,31.1016759 16.3602885,30.9002646 15.231225,30.5410686 L14.81,30.3989863 L14.77,32.0489863 C16.0053868,32.6040785 17.3456582,32.8871384 18.7,32.8789863 C20.0956878,32.9442742 21.467527,32.5000258 22.56,31.6289863 C23.5283138,30.8241989 24.0708119,29.6174173 24.03,28.3589863 C24.0976514,27.1476966 23.6382282,25.9663227 22.77,25.1189863 C21.8013494,24.2930341 20.5507577,23.8737813 19.28,23.9489863 C18.7429728,23.9546865 18.2072065,23.9986626 17.6767672,24.080508 L17.28,24.1489863 L17.55,19.9589863 L23.34,19.9589863 L23.34,18.2689863 Z", id: "Combined-Shape", fill: "currentColor" }))), m3 = q(ZL), IL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Group 2") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("defs", null, /* @__PURE__ */ w.createElement("polygon", { id: "path-1", points: "0 0 1.58618497 0 1.58618497 1.55461673 0 1.55461673" })), /* @__PURE__ */ w.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("g", { id: "Artboard", transform: "translate(-236.000000, -55.000000)" }, /* @__PURE__ */ w.createElement("g", { id: "Group-2", transform: "translate(236.000000, 55.000115)" }, /* @__PURE__ */ w.createElement("path", { d: "M21.0111359,25.4076566 C26.9981601,25.4076566 31.2792918,27.1190306 34.3405732,29.5664926 C30.4032849,31.2129679 27.62327,35.126599 27.62327,39.6731865 C27.62327,42.2448169 28.5126618,44.6139498 29.9976655,46.4848694 L0,46.4857465 C0,32.4336866 7.00412527,25.4076566 21.0111359,25.4076566 Z", id: "Shape", fill: "currentColor" }), /* @__PURE__ */ w.createElement("path", { d: "M9.08870148,12.0709357 C9.08870148,5.40548282 14.4563971,0 21.0806173,0 C27.7024361,0 33.0701317,5.40548282 33.0701317,12.0709357 C33.0701317,18.7363885 27.7024361,24.1418713 21.0806173,24.1418713 C14.4563971,24.1418713 9.08870148,18.7363885 9.08870148,12.0709357", id: "Stroke-1-Copy", fill: "currentColor" }), /* @__PURE__ */ w.createElement("g", { id: "Group", transform: "translate(29.166667, 27.916547)" }, /* @__PURE__ */ w.createElement("g", { id: "Group-7-Copy", transform: "translate(19.247148, 8.772425)" }, /* @__PURE__ */ w.createElement("mask", { id: "mask-2", fill: "white" }, /* @__PURE__ */ w.createElement("use", { xlinkHref: "#path-1" })), /* @__PURE__ */ w.createElement("g", { id: "Clip-6" }), /* @__PURE__ */ w.createElement("path", { d: "M0,1.55461673 L1.53346548,1.55461673 L1.5863436,1.4990947 C1.5863436,0.999396468 1.53346548,0.499698234 1.48058736,0 L0,1.55461673 Z", id: "Fill-5", fill: "currentColor", mask: "url(#mask-2)" })), /* @__PURE__ */ w.createElement("path", { d: "M10.9981616,7.93970524 L16.7089986,1.94332643 C16.3917299,1.72123833 16.1273393,1.49915022 15.8100706,1.33258415 L10.9981616,6.38508851 L10.9981616,7.93970524 Z", id: "Fill-8-Copy", fill: "currentColor" }), /* @__PURE__ */ w.createElement("path", { d: "M14.7525082,0.777419408 C14.3823613,0.61085333 14.0122145,0.499809278 13.6420676,0.388765226 L10.9981616,3.16486653 L10.9981616,4.77500528 L14.7525082,0.777419408 Z", id: "Fill-10-Copy", fill: "currentColor" }), /* @__PURE__ */ w.createElement("path", { d: "M12.3729928,0.111044052 C11.8970897,0.055522026 11.4211866,0 10.9452835,0 L10.9452835,1.61013875 L12.3729928,0.111044052 Z", id: "Fill-12-Copy", fill: "currentColor" }), /* @__PURE__ */ w.createElement("path", { d: "M14.7525082,10.3270413 L19.5644171,5.27453695 C19.4057827,4.94140479 19.1942702,4.60827264 18.9827578,4.33066251 L13.2190427,10.3825633 L14.7525082,10.3270413 Z", id: "Fill-14-Copy", fill: "currentColor" }), /* @__PURE__ */ w.createElement("path", { d: "M11.6854715,10.3270413 L18.2423583,3.44231009 C18.1366021,3.33126604 18.0308459,3.16469996 17.8722115,3.05365591 L17.5020647,2.66500173 L10.9451778,9.54973295 L10.9451778,10.3825633 L11.6854715,10.3825633 L11.6854715,10.3270413 Z", id: "Fill-16-Copy", fill: "currentColor" }), /* @__PURE__ */ w.createElement("path", { d: "M17.7664553,10.3270413 L20.4632394,7.49541799 C20.3574831,7.10676381 20.2517269,6.71810962 20.0930925,6.32945544 L16.2858679,10.3270413 L17.7664553,10.3270413 Z", id: "Fill-18-Copy", fill: "currentColor" }), /* @__PURE__ */ w.createElement("path", { d: "M9.57061675,1.77670483 C4.29910057,1.77670483 0,6.29076043 0,11.8258524 C0,17.3609444 4.29910057,21.875 9.57061675,21.875 C14.8421329,21.875 19.1412335,17.3609444 19.1412335,11.8258524 L9.57061675,11.8258524 L9.57061675,1.77670483 Z", id: "Stroke-20-Copy-2", fill: "currentColor" })))))), M4 = q(IL), RL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "48px", height: "50px", viewBox: "0 0 48 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / s3") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-s3", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M22.5737183,0 C33.2537183,0 45.1337183,3.26 45.1337183,7.93 L45.1338369,8.03679841 C45.1768435,8.18827711 45.1848905,8.35014242 45.1537183,8.51 L43.272,22.245 L42.9273064,22.0402539 L42.52,25.042 L42.79,23.1444914 C43.0051724,23.2686329 43.2125922,23.3908772 43.4123871,23.511325 L43.9890258,23.8673797 C46.2974435,25.3293232 47.4344828,26.5262889 47.65,27.6548479 C47.7384773,28.2157376 47.5812141,28.7880356 47.22,29.2196654 C46.6284526,29.8393993 45.7922294,30.1483452 44.95,30.0583258 C43.9363874,30.0270388 42.9297074,29.8760325 41.95,29.6083129 L40.84,29.301486 L39.97,29.0867071 C34.8303973,27.3098384 29.7987458,25.2228748 24.9014969,22.836943 L23.9033345,22.3452971 C23.5308402,22.6185928 23.0711286,22.78 22.5737183,22.78 C22.3883934,22.78 22.2083017,22.7575942 22.0360042,22.7153437 C20.8939949,22.6049495 20,21.6212318 20,20.4239589 C20,19.1530399 21.0073593,18.1227566 22.25,18.1227566 C22.6514026,18.1227566 23.0282549,18.2302609 23.3545335,18.4186539 C24.212102,18.7363266 24.8237183,19.561738 24.8237183,20.53 L24.823,20.5317566 L25.8181407,21.0193342 C30.51536,23.2911294 35.3296749,25.301392 40.24,27.0411939 L41.35,27.3787036 L42.19,27.60371 L42.6899854,27.725509 L43.141516,27.8248103 C43.2842128,27.8543749 43.4192274,27.8805103 43.5469534,27.9035372 L43.9086589,27.963613 C44.0222012,27.9807434 44.1288484,27.9950859 44.2289942,28.0069609 L44.5103207,28.0355042 L44.755,28.051166 L44.9653936,28.0558698 L45.2218641,28.0465862 L45.356875,28.032309 L45.5113411,28.0035691 L45.5857289,27.9823312 L45.64,27.9616748 L45.6154382,27.9074455 L45.578615,27.8394563 L45.4943278,27.7106273 L45.4147266,27.6061475 L45.2532819,27.4203427 L45.113582,27.2763857 L44.9449928,27.1158015 L44.744743,26.9381122 C44.7085757,26.9070453 44.6709738,26.8752458 44.6318794,26.8427038 L44.3789426,26.6384607 L44.087417,26.4159179 C44.0354597,26.3772759 43.9817791,26.3378515 43.9263173,26.2976347 L43.5717123,26.0467461 C43.5088953,26.00332 43.4441818,25.9590817 43.377514,25.9140211 L42.953594,25.6337115 L42.48,25.334 L42.3317228,26.4342151 L42.668,26.661 L42.667,26.669 L42.4316036,26.6112526 L41.6033594,26.3893173 L40.5249703,26.0608446 L39.2072055,25.5861988 C34.8198616,23.9809795 30.4859127,22.1455823 26.2456128,20.0947369 L25.4192817,19.6896197 L25.4059896,19.6270209 C25.0565902,18.1742668 23.7742215,17.1 22.25,17.1 C20.4550746,17.1 19,18.5881871 19,20.4239589 C19,22.2597307 20.4550746,23.7479177 22.25,23.7479177 L22.4728219,23.740182 C22.8420422,23.7144823 23.1996578,23.6251788 23.5328117,23.4787248 L23.719,23.388 L24.4870865,23.7678904 C29.404383,26.1636114 34.4727084,28.2657862 39.6497718,30.0556057 L40.6053595,30.2956894 L41.689091,30.5956447 L42.114,30.704 L40.2437183,44.37 C40.1937183,45.75 38.9537183,46.93 36.5337183,47.89 C35.4535933,48.3058222 34.3438174,48.640092 33.2137183,48.89 C29.718768,49.6508082 26.150445,50.0230675 22.5737183,50 C15.7837183,50 5.00371827,48.47 4.90371827,44.37 L0.073718268,8.51 C0.0609397163,8.44446897 0.0547515745,8.379181 0.0546923909,8.31482113 L0.003718268,8.06 C-0.00123942267,8.01680847 -0.00123942267,7.97319153 0.003718268,7.93 C0.003718268,3.26 11.8937183,0 22.5737183,0 Z M22.5737183,20.28 C22.4356471,20.28 22.3237183,20.3919288 22.3237183,20.53 C22.3237183,20.8 22.8237183,20.8 22.8237183,20.53 C22.8237183,20.3919288 22.7117895,20.28 22.5737183,20.28 Z M22.5737183,2 C10.5937183,2 2.14371827,5.78 2.00371827,7.88 L2.00430184,7.89966967 C2.03509487,7.96882911 2.05861098,8.04252672 2.07371827,8.12 C2.43555918,9.51375761 6.18287171,11.2846765 12.2024552,12.3015041 C15.1484825,12.7905085 18.6353157,13.1 22.5337183,13.1 C34.3637183,13.1 42.4037183,10.25 43.0537183,8.17 L43.0537183,7.88 C43.0037183,5.78 34.5537183,2 22.5737183,2 Z", id: "Combined-Shape", fill: "currentColor" }))), _4 = q(RL), AL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "38px", viewBox: "0 0 50 38", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / service") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-service", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M42,21 L26,21 L26,29 L30.9090909,29 C31.2354405,29 31.5,29.3979698 31.5,29.8888889 L31.5,36.1111111 C31.5,36.6020302 31.2354405,37 30.9090909,37 L19.0909091,37 C18.7645595,37 18.5,36.6020302 18.5,36.1111111 L18.5,29.8888889 C18.5,29.3979698 18.7645595,29 19.0909091,29 L24,29 L24,21 L8,21 L8,29 L12.4090909,29 C12.7354405,29 13,29.3979698 13,29.8888889 L13,36.1111111 C13,36.6020302 12.7354405,37 12.4090909,37 L0.590909091,37 C0.264559455,37 0,36.6020302 0,36.1111111 L0,29.8888889 C0,29.3979698 0.264559455,29 0.590909091,29 L6,29 L6,20 C6,19.447715 6.447715,19 7,19 L24,19 L24,10 L15,10 C14.447716,10 14,9.60203022 14,9.11111111 L14,2.88888889 C14,2.39796978 14.447716,2 15,2 L35,2 C35.552284,2 36,2.39796978 36,2.88888889 L36,9.11111111 C36,9.60203022 35.552284,10 35,10 L26,10 L26,19 L43,19 C43.552284,19 44,19.447715 44,20 L44,29 L48.9090909,29 C49.2354405,29 49.5,29.3979698 49.5,29.8888889 L49.5,36.1111111 C49.5,36.6020302 49.2354405,37 48.9090909,37 L37.0909091,37 C36.7645595,37 36.5,36.6020302 36.5,36.1111111 L36.5,29.8888889 C36.5,29.3979698 36.7645595,29 37.0909091,29 L42,29 L42,21 Z", id: "Combined-Shape", fill: "#545B64", fillRule: "nonzero" }))), OL = q(AL), $L = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "53px", height: "53px", viewBox: "0 0 53 53", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / servicelensunknownnode") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-servicelensunknownnode", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M30.1227441,0.270571685 C32.0630299,0.550627818 33.5682894,2.10754197 33.7827448,4.05616951 C33.8562681,4.72423105 34.2921404,5.2973279 34.9163004,5.54659933 C35.5404603,5.79587076 36.2512067,5.68070025 36.7647098,5.24708005 C38.2905047,3.95864474 40.5025394,3.89023081 42.1050395,5.08191405 C42.8947802,5.66919682 43.650777,6.30001913 44.3695719,6.97136044 C45.5273945,8.05274578 46.5858087,9.2365684 47.531791,10.5086655 C48.5718566,11.9072799 48.6588134,13.7845778 47.7518436,15.3076328 L47.6279032,15.5042148 L47.3925761,15.8179684 C46.9577656,16.3428181 46.8528048,17.0666854 47.1310193,17.7185358 C47.4070144,18.4092681 47.9770957,18.8513404 48.6518742,18.9255566 C50.6006241,19.1398919 52.15769,20.6451961 52.4377616,22.5855892 C52.7985239,25.0850234 52.7985239,27.6233099 52.4377616,30.1227441 C52.1531456,32.0946221 50.551302,33.6127706 48.567001,33.7912605 C47.89416,33.8517833 47.3102654,34.2801707 47.0505752,34.9038206 C46.7908851,35.5274704 46.8981702,36.2436677 47.3292043,36.7638482 C48.5938591,38.2900592 48.6514742,40.4829843 47.4687055,42.0734968 C45.9339952,44.137278 44.1057352,45.9655379 42.041954,47.5002482 C40.5195603,48.6323611 38.4441684,48.6285781 36.929881,47.5150422 L36.7509311,47.3760927 L36.5478802,47.231755 C36.0556892,46.9303612 35.4436856,46.8780602 34.9014289,47.1028565 C34.281707,47.3597665 33.853675,47.9368985 33.7877206,48.6045122 C33.5932339,50.5731761 32.0807012,52.1551549 30.1227441,52.4377616 C27.6233099,52.7985239 25.0850234,52.7985239 22.5855892,52.4377616 C20.6137112,52.1531456 19.0955628,50.551302 18.9170728,48.567001 C18.8565501,47.89416 18.4281626,47.3102654 17.8045128,47.0505752 C17.1808629,46.7908851 16.4646656,46.8981702 15.9444851,47.3292043 C14.4182742,48.5938591 12.225349,48.6514742 10.6348366,47.4687055 C8.57105534,45.9339952 6.74279539,44.1057352 5.20808509,42.041954 C4.07597227,40.5195603 4.07975523,38.4441684 5.19329118,36.929881 L5.33224064,36.7509311 L5.47657834,36.5478802 C5.77797212,36.0556892 5.83027317,35.4436856 5.60547688,34.9014289 C5.34856684,34.281707 4.77143482,33.853675 4.10382111,33.7877206 C2.13515721,33.5932339 0.553178452,32.0807012 0.270571685,30.1227441 C-0.0901905617,27.6233099 -0.0901905617,25.0850234 0.270571685,22.5855892 C0.553903682,20.6226076 2.1430402,19.1080364 4.11736319,18.9192965 C4.79043731,18.8549525 5.37229757,18.4226221 5.62815412,17.7967577 C5.86268929,17.2230486 5.78781779,16.5734894 5.43846314,16.0706613 L5.33640547,15.9373316 L5.0959416,15.623437 C4.04963038,14.1197163 4.06601731,12.0966575 5.17654233,10.6032938 C6.71125263,8.53951258 8.53951258,6.71125263 10.6032938,5.17654233 C12.1417867,4.03245749 14.2424728,4.04963916 15.7583116,5.19371009 L15.9373316,5.33640547 L16.1401174,5.48439779 C16.6323835,5.79398502 17.2491262,5.8520286 17.7967577,5.62815412 C18.4226221,5.37229757 18.8549525,4.79043731 18.9192965,4.11736319 C19.1080364,2.1430402 20.6226076,0.553903682 22.5855892,0.270571685 C25.0850234,-0.0901905617 27.6233099,-0.0901905617 30.1227441,0.270571685 Z M26.8541667,16.8541667 C24.6150785,16.8541667 22.5478688,17.5900656 20.8812042,18.8331967 C18.4369389,20.6563242 16.8541667,23.5704073 16.8541667,26.8541667 C16.8541667,32.3770142 21.3313192,36.8541667 26.8541667,36.8541667 C32.3770142,36.8541667 36.8541667,32.3770142 36.8541667,26.8541667 C36.8541667,23.4596448 35.1628186,20.4601585 32.5768782,18.6524636 C30.9555238,17.5190599 28.9824923,16.8541667 26.8541667,16.8541667 Z", id: "Combined-Shape", fill: "currentColor" }))), Ot = q($L), TL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "54px", height: "48px", viewBox: "0 0 54 48", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / sns") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-sns", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M27.0300205,0.0018151976 C32.1109845,-0.00737982672 37.0718674,1.546169 41.2400205,4.4518152 L40.1000205,6.0918152 C33.5841175,1.57558441 25.1987287,0.74216619 17.9213487,3.88749174 C11.2817017,6.75718538 6.42236037,12.5680198 4.72908181,19.5189596 C6.75833426,19.6245229 8.4303729,21.0782354 8.86808359,23.0010933 L13.9800205,23.0018152 L13.9800205,25.0018152 L8.86530621,25.001534 C8.67661668,25.820949 8.26034056,26.5781474 7.65493319,27.18087 C6.85818507,27.9740849 5.7953441,28.4385395 4.67709346,28.4875236 C6.85864881,38.9283286 16.1427936,46.0018152 27.0300205,46.0018152 C31.8400425,46.0080877 36.5293776,44.496302 40.4300205,41.6818152 L41.6000205,43.3018152 C37.3599218,46.3645906 32.2606008,48.0095329 27.0300205,48.0018422 C15.1178466,47.9851534 4.95780926,39.5853307 2.5827827,28.0667834 C1.0522025,27.3487516 -0.00531169843,25.7909546 2.00694283e-05,23.9885412 C0.00530506156,22.211727 1.04203151,20.6787533 2.54197529,19.9553301 C4.78769779,8.32223103 15.0601175,-0.142402854 27.0300205,0.0018151976 Z M46.9800205,5.5618152 C49.4653019,5.5618152 51.4800205,7.57653382 51.4800205,10.0618152 C51.4800205,12.5470966 49.4653019,14.5618152 46.9800205,14.5618152 C44.8171156,14.5618152 43.0106137,13.0358729 42.578348,11.0018217 L39.9800205,11.0018152 L39.98,23.001 L45.1084842,23.0010663 C45.2913644,22.1838687 45.7026701,21.4166472 46.3222503,20.7998268 C47.6105316,19.517284 49.5450318,19.1380911 51.2221725,19.8393638 C52.8993133,20.5406365 53.9881178,22.1839816 53.9800654,24.0018152 C53.9635617,26.4714782 51.9597324,28.4663818 49.4900205,28.4718152 C47.6721689,28.4718152 46.0337009,27.3756672 45.3399223,25.6954125 C45.2460065,25.4679586 45.1719106,25.2358772 45.1171855,25.0014076 L39.98,25.001 L39.9800205,37.0018152 L42.0818441,37.001242 C42.2621346,36.1669103 42.6795062,35.3830804 43.3125864,34.7556401 C44.6091833,33.4705942 46.5536523,33.0961974 48.2347144,33.8079116 C49.9157764,34.5196258 51.0002997,36.1764124 50.9800205,38.0018152 C50.9580675,40.4659386 48.9542417,42.4518258 46.4900205,42.4518258 C44.6645093,42.4557593 43.0174938,41.3564538 42.3208508,39.6690904 C42.2304417,39.4501073 42.1583643,39.2268516 42.1042172,39.0013117 L38.9800205,39.0018152 C38.4300205,39.0018152 37.9800205,38.0018152 37.9800205,38.0018152 L37.98,25.001 L29.9800205,25.0018152 L29.9800205,23.0018152 L37.98,23.001 L37.9800205,9.8818152 C37.9800205,9.8818152 38.4300205,8.8818152 38.9800205,9.0018152 L42.5937916,9.05189481 C43.0521759,7.05289135 44.8419684,5.5618152 46.9800205,5.5618152 Z M22.5993063,14.0033014 C24.3527085,14.0205533 30.9800205,14.2362024 30.9800205,16.9318152 C30.9800205,17.1256165 30.945808,17.3072116 30.8816484,17.4773672 L30.9300205,17.5018152 L24.9800205,29.7218152 L24.9800205,33.8418152 C24.8240199,34.1722813 24.5949096,34.4629436 24.3100205,34.6918152 C24.1300205,34.8018152 23.9000205,34.9718152 23.6400205,35.1518152 C22.6454192,35.9881846 21.4771955,36.5927916 20.2200205,36.9218152 C20.173458,36.9428385 20.1297712,36.9697227 20.0900205,37.0018152 L19.9800205,37.0018152 C19.5317376,36.7731688 19.1778605,36.3945203 18.9800205,35.9318152 L18.9800205,29.7318152 L13.6829023,17.6638389 C13.5710281,17.4443879 13.5100205,17.2043562 13.5100205,16.9418152 C13.5100205,14.2539721 19.9043919,14.022988 21.81125,14.0035317 L22.5993063,14.0033014 Z M22.2600205,15.8918152 C18.7000205,15.8918152 16.4700205,16.4918152 15.7100205,16.9318152 L15.7100205,16.9418152 C16.4700205,17.3918152 18.7100205,18.0018152 22.2600205,18.0018152 C25.8100205,18.0018152 28.0600205,17.3918152 28.8200205,16.9418152 C28.0600205,16.5018152 25.8200205,15.8918152 22.2600205,15.8918152 Z", id: "Combined-Shape", fill: "currentColor" }))), k4 = q(TL), FL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "35px", height: "52px", viewBox: "0 0 35 52", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / sql") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-sql", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M-0.0019389623,21.4019298 C0.660475396,23.8502998 3.84044262,25.7806884 8.31507952,26.8840114 L8.31507952,26.8840114 L8.96800871,27.0370874 L9.30092685,27.1092769 L9.30092685,27.1092769 L9.63801227,27.1785332 L10.3242796,27.3081439 L10.6732589,27.3684471 L10.6732589,27.3684471 L11.0260001,27.4257146 L11.7423633,27.5310405 L11.9236469,27.5554347 L11.9236469,27.5554347 L12.1057825,27.5790476 L12.8425896,27.665622 L13.6676179,27.7461116 C14.777353,27.8430192 15.9249191,27.8980369 17.0988078,27.908256 L17.0988078,27.908256 L17.9001714,27.908256 L18.6944647,27.8941483 L19.4800082,27.8661925 L20.1595364,27.8305199 C20.8352178,27.789667 21.4990843,27.7333457 22.1486629,27.6622076 L22.1486629,27.6622076 L22.8846811,27.574492 L23.6074379,27.4740909 L24.1990131,27.3808889 C24.5900314,27.3158955 24.9742139,27.2452126 25.3509276,27.169007 L25.3509276,27.169007 L26.0208093,27.0259083 L26.362579,26.9468356 C31.5672971,25.7102489 35.1139103,23.3669015 35.1299454,20.4101408 L35.1299454,20.4101408 L33.129,20.41 L33.1239512,20.5282321 C33.0233069,21.6825401 31.6709544,22.8923777 29.3841648,23.871939 L29.3841648,23.871939 L28.8951424,24.0722716 L28.5110703,24.2178186 L28.5110703,24.2178186 L28.1124624,24.3590669 L27.5588367,24.5402945 L27.0907765,24.6812048 C25.9798532,25.003101 24.7383773,25.2759011 23.3858034,25.4820801 L23.3858034,25.4820801 L22.66216,25.58456 L21.9185441,25.6741111 L21.1555901,25.750162 L20.3739325,25.812141 L19.6751381,25.85438 C18.9695682,25.8908857 18.2438846,25.91 17.5,25.91 C16.3664615,25.91 15.2751858,25.866374 14.2329404,25.7850319 L14.2329404,25.7850319 L13.4605553,25.717046 L12.707191,25.6354706 L12.118621,25.5607982 C10.3721048,25.3245508 8.79979598,24.9795075 7.44116326,24.5601354 L7.44116326,24.5601354 L6.88753755,24.381188 L6.58616757,24.2765794 C3.61326546,23.2180012 1.87,21.7896278 1.87,20.44 L1.87,20.44 L1.871,20.41 L-0.000938962296,20.409 L-7.10607788e-15,7.48 C-7.10607788e-15,3.26930556 7.41952739,0.089371142 17.214719,0.00185187864 L17.63,0 C27.68,0 35.26,3.21 35.26,7.52 L35.26,7.52 L35.26,44.52 C35.26,48.79 27.63,52 17.63,52 C7.63,52 -7.10607788e-15,48.79 -7.10607788e-15,44.48 L-7.10607788e-15,44.48 L-7.10607788e-15,33.25 C-7.10607788e-15,36.1541802 3.39945872,38.4498994 8.44507952,39.6940114 L8.44507952,39.6940114 L9.09800871,39.8470874 L9.43092685,39.9192769 L9.43092685,39.9192769 L9.76801227,39.9885332 L10.4542796,40.1181439 L10.8032589,40.1784471 L10.8032589,40.1784471 L11.1560001,40.2357146 L11.8723633,40.3410405 L12.0536469,40.3654347 L12.0536469,40.3654347 L12.2357825,40.3890476 L12.9725896,40.475622 L13.7976179,40.5561116 C14.907353,40.6530192 16.0549191,40.7080369 17.2288078,40.718256 L17.2288078,40.718256 L18.0301714,40.718256 L18.8244647,40.7041483 L19.6100082,40.6761925 L20.2895364,40.6405199 C20.9652178,40.599667 21.6290843,40.5433457 22.2786629,40.4722076 L22.2786629,40.4722076 L23.0146811,40.384492 L23.7374379,40.2840909 L24.3290131,40.1908889 C24.7200314,40.1258955 25.1042139,40.0552126 25.4809276,39.979007 L25.4809276,39.979007 L26.1508093,39.8359083 L26.492579,39.7568356 C31.6972971,38.5202489 35.2439103,36.1769015 35.2599454,33.2201408 L35.2599454,33.2201408 L33.259,33.22 L33.2539512,33.3382321 C33.1533069,34.4925401 31.8009544,35.7023777 29.5141648,36.681939 L29.5141648,36.681939 L29.0251424,36.8822716 L28.6410703,37.0278186 L28.6410703,37.0278186 L28.2424624,37.1690669 L27.6888367,37.3502945 L27.2207765,37.4912048 C26.1098532,37.813101 24.8683773,38.0859011 23.5158034,38.2920801 L23.5158034,38.2920801 L22.79216,38.39456 L22.0485441,38.4841111 L21.2855901,38.560162 L20.5039325,38.622141 L19.8051381,38.66438 C19.0995682,38.7008857 18.3738846,38.72 17.63,38.72 C16.4964615,38.72 15.4051858,38.676374 14.3629404,38.5950319 L14.3629404,38.5950319 L13.5905553,38.527046 L12.837191,38.4454706 L12.248621,38.3707982 C10.5021048,38.1345508 8.92979598,37.7895075 7.57116326,37.3701354 L7.57116326,37.3701354 L7.01753755,37.191188 L6.71616757,37.0865794 C3.74326546,36.0280012 2,34.5996278 2,33.25 L2,33.25 L2.001,33.22 L0.000122976393,33.2197806 C4.10168366e-05,33.2298467 -7.10607788e-15,33.2399198 -7.10607788e-15,33.25 Z M17.63,2 C8.42,2 2,4.94 2,7.53 C2,10.12 8.42,13 17.63,13 C26.84,13 33.26,10.07 33.26,7.48 C33.26,4.89 26.84,2 17.63,2 Z", id: "Combined-Shape", fill: "currentColor" })));
q(FL);
const PL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "58px", height: "48px", viewBox: "0 0 58 48", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / sqs") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-sqs", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M49.8700917,31.022673 L51.7600917,31.672673 C48.4217065,41.4644055 39.2152608,48.0404381 28.8700917,48.0227089 C18.5641394,48.0361342 9.38426137,41.5106303 6.01009167,31.772673 L7.87009167,31.122673 C10.9483848,40.108864 19.4071163,46.1373267 28.905906,46.1147105 C38.4046958,46.0920943 46.8346246,40.0234206 49.8700917,31.022673 Z M20.6700917,14.312673 C24.7700917,18.412673 33.1200917,18.412673 37.2200917,14.312673 C37.6101291,13.9249494 38.2400542,13.9249494 38.6300917,14.312673 C38.8209473,14.4997444 38.9289822,14.7554271 38.9300917,15.022673 C38.9289822,15.2899189 38.8209473,15.5456016 38.6300917,15.732673 C36.5895526,17.9924367 35.5129743,20.9602044 35.6300917,24.002673 C35.5129743,27.0451416 36.5895526,30.0129093 38.6300917,32.272673 C38.8209473,32.4597444 38.9289822,32.7154271 38.9300917,32.982673 C38.9300917,33.5349577 38.4823764,33.982673 37.9300917,33.982673 L37.9300917,34.022673 C37.6642887,34.0242098 37.4088105,33.9198595 37.2200917,33.732673 C33.1200917,29.632673 24.7700917,29.632673 20.6700917,33.732673 C20.2800542,34.1203966 19.6501291,34.1203966 19.2600917,33.732673 C19.0729052,33.5439542 18.9685549,33.288476 18.9700917,33.022673 C18.9685549,32.75687 19.0729052,32.5013918 19.2600917,32.312673 C21.3236965,30.0557123 22.4189066,27.0788955 22.3100917,24.022673 C22.4136194,20.9732885 21.3187695,18.0046298 19.2600917,15.752673 C19.0679026,15.5590799 18.9631433,15.2953755 18.9700917,15.022673 C18.9685549,14.75687 19.0729052,14.5013918 19.2600917,14.312673 C19.6501291,13.9249494 20.2800542,13.9249494 20.6700917,14.312673 Z M57.0225347,20.8252786 C58.5139918,23.0634187 58.2728158,26.020223 56.4694791,27.9856251 L56.2900917,28.172673 C55.1954957,29.2617116 53.7141594,29.8729425 52.1700917,29.8726731 C49.3937786,29.8682486 47.0071366,27.9034428 46.4695258,25.1796755 C45.9319149,22.4559082 47.3930383,19.7316394 49.9594626,18.6726779 C52.525887,17.6137164 55.4829662,18.5149405 57.0225347,20.8252786 Z M8.05649025,18.6196886 C10.2364448,19.5269845 11.6521761,21.661478 11.6401684,24.022673 C11.6430478,25.4782955 11.0977743,26.8780867 10.1187198,27.94633 L9.93009167,28.142673 C8.84966059,29.2125406 7.39060078,29.8126957 5.87009167,29.812673 C3.50895262,29.8329275 1.36957323,28.4245905 0.454739655,26.2477884 C-0.460093918,24.0709863 0.0309448717,21.5571768 1.69769259,19.8846518 C3.36444031,18.2121268 5.87653567,17.7123927 8.05649025,18.6196886 Z M16.9500917,19.902673 L20.3600917,23.312673 C20.5494043,23.5004396 20.65589,23.7560355 20.65589,24.022673 C20.65589,24.2893105 20.5494043,24.5449064 20.3600917,24.732673 L16.9500917,28.142673 L15.5400917,26.722673 L17.24,25.022 L12.8700917,25.022673 L12.8700917,23.022673 L17.24,23.022 L15.5400917,21.322673 L16.9500917,19.902673 Z M41.1400917,19.902673 L44.5300917,23.292673 C44.7194043,23.4804396 44.82589,23.7360355 44.82589,24.002673 C44.82589,24.2693105 44.7194043,24.5249064 44.5300917,24.712673 L41.1200917,28.122673 L39.7100917,26.702673 L41.39,25.022 L36.8700917,25.022673 L36.8700917,23.022673 L41.43,23.022 L39.7300917,21.322673 L41.1400917,19.902673 Z M45.9400917,7.112673 C48.523027,9.67397395 50.4833901,12.794133 51.6700917,16.232673 L49.7900917,16.892673 C47.2719869,9.69388635 41.2320192,4.29368777 33.7973568,2.59393021 C26.3626944,0.894172649 18.5761829,3.13327778 13.1800917,8.522673 C10.7938689,10.8781573 8.97761605,13.7479052 7.87009167,16.912673 L5.98009167,16.252673 C8.71003882,8.37902478 15.3035221,2.46706545 23.4272118,0.608944242 C31.5509014,-1.24917696 40.0587982,1.20866289 45.9400917,7.112673 Z", id: "Combined-Shape", fill: "currentColor" }))), N4 = q(PL), jL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 50 50", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / stepfunctions") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-stepfunctions", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M25,0 C27.761423,0 30,2.238576 30,5 C30,7.41853896 28.282835,9.43601229 26.0011862,9.89974092 L26,12 L40,12 C40.552284,12 41,12.447715 41,13 L41,19 L39,19 L39,14 L11,14 L11,17 L19,17 C19.552284,17 20,17.447716 20,18 L20,23 C20,23.552284 19.552284,24 19,24 L11,24 L11,26 L19,26 C19.552284,26 20,26.447716 20,27 L20,32 C20,32.552284 19.552284,33 19,33 L11,33 L11,36 L39,36 L39,32 L41,32 L41,37 C41,37.552284 40.552284,38 40,38 L26,38 L26.0011862,40.100259 C28.282835,40.5639875 30,42.5814602 30,45 C30,47.761425 27.761423,50 25,50 C22.238577,50 20,47.761425 20,45 C20,42.5811074 21.7176659,40.563399 23.9998122,40.1000562 L24,38 L10,38 C9.447715,38 9,37.552284 9,37 L9,33 L1,33 C0.447715,33 0,32.552284 0,32 L0,27 C0,26.447716 0.447715,26 1,26 L9,26 L9,24 L1,24 C0.447715,24 0,23.552284 0,23 L0,18 C0,17.447716 0.447715,17 1,17 L9,17 L9,13 C9,12.447715 9.447715,12 10,12 L24,12 L23.9998122,9.89994373 C21.7176659,9.43660081 20,7.41889172 20,5 C20,2.238576 22.238577,0 25,0 Z M49,21 C49.552284,21 50,21.447716 50,22 L50,29 C50,29.552284 49.552284,30 49,30 L29,30 C28.447716,30 28,29.552284 28,29 L28,22 C28,21.447716 28.447716,21 29,21 L49,21 Z", id: "Combined-Shape", fill: "currentColor" }))), Z4 = q(jL), DL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "18px", height: "17px", viewBox: "0 0 18 17", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / synthetics") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-synthetics", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M8.76,3.92 C14.83,3.92 16.27,9.27 16.27,9.27 L16.27,9.27 L16.27,14.99 C9.9,20.06 1.25,14.99 1.25,14.99 L1.25,14.99 L1.25001243,11.5653812 C1.2016372,11.8326564 0.987565399,12.0516823 0.721081893,12.0929902 L0.63,12.1 C0.28,12.1 0,11.82 0,11.47 L0,9.7 C0,9.38181818 0.231404959,9.1214876 0.536438768,9.07678437 L0.63,9.07 C0.94174668,9.07 1.19795851,9.29213941 1.25024,9.58802276 L1.25,9.04 C1.25,9.04 1.2542843,9.02476694 1.26337058,8.99596261 L1.28809917,8.92075131 C1.55008264,8.15140496 3.24181818,3.92 8.76,3.92 Z M16.91,9.09 C17.26,9.09 17.54,9.37 17.54,9.72 L17.54,11.49 C17.5309091,11.8081818 17.2986777,12.0685124 17.0010819,12.1132156 L16.91,12.12 C16.56,12.12 16.28,11.84 16.28,11.49 L16.28,9.72 C16.28,9.40181818 16.511405,9.1414876 16.8164388,9.09678437 L16.91,9.09 Z M8.77,0 C9.46587878,0 10.03,0.564121215 10.03,1.26 C10.03,1.95587878 9.46587878,2.52 8.77,2.52 C8.07412122,2.52 7.51,1.95587878 7.51,1.26 C7.51,0.564121215 8.07412122,0 8.77,0 Z", id: "Combined-Shape", fill: "currentColor" }))), I4 = q(DL), VL = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ w.createElement("svg", { width: "50px", height: "48px", viewBox: "0 0 50 48", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: r, "aria-labelledby": t, ...n }, e === void 0 ? /* @__PURE__ */ w.createElement("title", { id: t }, "Cw Icons / ServiceMapFilled / vpc") : e ? /* @__PURE__ */ w.createElement("title", { id: t }, e) : null, /* @__PURE__ */ w.createElement("g", { id: "Cw-Icons-/-ServiceMapFilled-/-vpc", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ w.createElement("path", { d: "M38.3577492,16.8810284 L49.3577492,20.9510284 C49.7497561,21.0974924 50.0091086,21.4725559 50.0077545,21.8910284 L50.0074451,34.8083344 C49.9963125,35.4762857 49.6126953,47.5210284 38.0077439,47.5210284 C26.275276,47.5210284 26.0121098,34.4761538 26.0078069,34.0697675 L26.0077439,21.8910284 C26.0063899,21.4725559 26.2657423,21.0974924 26.6577492,20.9510284 L37.6577492,16.8810284 C37.8823809,16.790909 38.1331175,16.790909 38.3577492,16.8810284 Z M38.0077492,18.8810284 L28.0077492,22.5910284 L28.0077492,34.0610284 C28.0077492,34.5310284 28.1577492,45.5210284 38.0077492,45.5210284 C47.6175053,45.5210284 47.9946618,35.7458946 48.007343,34.832617 L48.0077492,22.5910284 L38.0077492,18.8810284 Z M38.3777492,21.1410284 L45.3777492,23.9010284 C45.7584703,24.0526557 46.0081459,24.4212246 46.0077492,24.8310284 L46.0077492,35.1910284 C46.017634,35.2506213 46.017634,35.3114355 46.0077492,35.3710284 C45.9277492,35.7110284 44.3677492,43.7810284 38.0077492,43.7810284 C31.6477492,43.7810284 30.0877492,35.7110284 30.0077492,35.3710284 C30.0028319,35.3111292 30.0028319,35.2509277 30.0077492,35.1910284 L30.0077492,24.8310284 C30.0073525,24.4212246 30.2570282,24.0526557 30.6377492,23.9010284 L37.6377492,21.1410284 C37.8753411,21.0464041 38.1401573,21.0464041 38.3777492,21.1410284 Z M30.2477492,4.1110284 C31.5563921,5.4062837 32.6201567,6.92739932 33.3877492,8.6010284 C34.4848911,7.71959611 35.8503965,7.23972857 37.2577492,7.2410284 C40.1577492,7.2410284 43.2577492,9.3110284 43.7677492,13.9110284 C46.2305112,14.4087436 48.4515588,15.7272702 50.0677492,17.6510284 L50.025,19.065 L39.1024301,15.0248359 C38.3998585,14.7429732 37.6156399,14.7429732 36.9130684,15.0248359 L25.9637314,19.0753047 C24.7817461,19.5169143 24.0036923,20.6420931 24.0077228,21.8974996 L24.0077492,32.7810284 L10.0077492,32.7810284 C4.51774921,32.7810284 0.337749213,29.1210284 0.00774921277,24.0910284 L0.00774921277,23.4010284 C-0.167582792,19.1034891 2.64866715,15.2544759 6.79774921,14.1210284 L6.79774921,13.3210284 C6.95425767,8.0268368 10.1185298,3.28625241 14.9477492,1.1110284 C20.1806804,-1.11842747 26.2442261,0.07050306 30.2477492,4.1110284 Z", id: "Combined-Shape", fill: "currentColor" }))), HL = q(VL), w3 = {
  "AWS::APIGateway": Bp,
  "AWS::APM::Service": Ot,
  "AWS::ApplicationSignals::Application": zp,
  "AWS::AppMesh": n4,
  "AWS::AppMesh::Mesh": n4,
  "AWS::AppRunner": r4,
  "AWS::AppRunner::Service": r4,
  "AWS::AppSync": o4,
  "AWS::AppSync::GraphQLApi": o4,
  "AWS::AutoScaling": i4,
  "AWS::AutoScaling::AutoScalingGroup": i4,
  "AWS::Bedrock": s4,
  "AWS::Bedrock::Model": s4,
  "AWS::CloudFormation": a4,
  "AWS::CloudFormation::Stack": a4,
  "AWS::CloudFront": l4,
  "AWS::CloudFront::Distribution": l4,
  "AWS::CloudTrail": c4,
  "AWS::CloudTrail::Trail": c4,
  "AWS::CloudWatch": p3,
  "AWS::CloudWatch::Alarm": p3,
  "AWS::CloudWatch::Service": p3,
  "AWS::DynamoDB": u4,
  "AWS::DynamoDB::Table": u4,
  "AWS::EC2::Volume": iL,
  "AWS::EC2": d4,
  "AWS::EC2::Instance": d4,
  "AWS::ECS": f4,
  "AWS::ECS::Service": CL,
  "AWS::ECS::Cluster": f4,
  "AWS::EKS": h4,
  "AWS::EKS::Cluster": h4,
  "AWS::Endpoint": Ot,
  "AWS::ElastiCache": g4,
  "AWS::ElastiCache::CacheCluster": g4,
  "AWS::ElasticBeanstalk": C4,
  "AWS::ElasticBeanstalk::Application": C4,
  "AWS::ElasticLoadBalancing": L3,
  "AWS::ElasticLoadBalancing::LoadBalancer": L3,
  "AWS::ElasticLoadBalancingV2::LoadBalancer": L3,
  "AWS::EMR": p4,
  "AWS::EMR::Cluster": p4,
  "AWS::Events": L4,
  "AWS::Events::Rule": L4,
  "AWS::Glacier": m4,
  "AWS::Glacier::Vault": m4,
  "AWS::Kinesis": x4,
  "AWS::Kinesis::Stream": x4,
  K8s: w4,
  "AWS::Kubernetes": w4,
  "AWS::Macie": y4,
  "AWS::Macie::CustomDataIdentifier": y4,
  "AWS::APS": b4,
  "AWS::APS::Workspace": b4,
  "AWS::RDS": E4,
  "AWS::RDS::DBInstance": E4,
  "AWS::Redshift": S4,
  "AWS::Redshift::Cluster": S4,
  "AWS::Route53": m3,
  "AWS::Route53::HostedZone": m3,
  "AWS::Route53::RecordSet": m3,
  "AWS::Lambda": yL,
  "AWS::LoadBalancer": v4,
  "AWS::Resource": OL,
  "AWS::RUM::AppMonitor": M4,
  "AWS::RUM::Monitor": M4,
  "AWS::S3": _4,
  "AWS::S3::Bucket": _4,
  "AWS::SNS": k4,
  "AWS::SNS::Topic": k4,
  "AWS::SQS": N4,
  "AWS::SQS::Queue": N4,
  "AWS::Synthetics": I4,
  "AWS::Synthetics::Canary": I4,
  "AWS::StepFunctions": Z4,
  "AWS::StepFunctions::StateMachine": Z4,
  "AWS::EC2::VPC": HL,
  "AWS::TargetGroup": v4,
  "Remote::Endpoint": Ot,
  Generic: Ot,
  Unknown: Ot
}, fr = (e) => {
  const t = w3 == null ? void 0 : w3[e];
  return t ? /* @__PURE__ */ m.jsx(t, {}) : /* @__PURE__ */ m.jsx(Ot, {});
}, BL = 60, WL = (e) => {
  const {
    data: { title: t, subtitle: n, type: r, status: o, isSource: i, isTarget: s }
  } = e;
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsxs(M2, { metrics: { ...E2 }, size: BL, icon: fr(r), status: o, children: [
      i && /* @__PURE__ */ m.jsx(Ae, { type: "source", position: Y.Right, id: "source-right", style: { opacity: 0 } }),
      s && /* @__PURE__ */ m.jsx(Ae, { type: "target", position: Y.Left, id: "target-left", style: { opacity: 0 } })
    ] }) }),
    /* @__PURE__ */ m.jsxs("div", { className: "mt-1 text-center", children: [
      /* @__PURE__ */ m.jsx("div", { className: "font-medium text-xs", children: t }),
      n && /* @__PURE__ */ m.jsx("div", { className: "text-xs text-gray-500", children: n || r })
    ] })
  ] });
}, R4 = 24, A4 = 20, zL = {
  widget: WL
}, lm = ({ nodes: e, edges: t }) => {
  const n = t.map((o) => {
    var i;
    return {
      ...o,
      markerEnd: {
        type: Ht.Arrow,
        color: Be.background,
        width: R4,
        height: R4
      },
      style: {
        stroke: Be.background,
        ...((i = o.type) == null ? void 0 : i.toLocaleLowerCase()) === "indirect" && { strokeDasharray: "3,5" }
      }
    };
  }), r = e.map((o, i) => {
    const s = fn(i, { ...dn, horizontalSpacing: 150 });
    return {
      id: o.id,
      type: "widget",
      data: {
        ...o,
        title: t4(o.title, A4),
        subtitle: t4(o.subtitle ?? o.type, A4),
        isSource: t.some((a) => a.source === o.id),
        isTarget: t.some((a) => a.target === o.id)
      },
      position: {
        x: s.x,
        y: s.y
      }
    };
  });
  return /* @__PURE__ */ m.jsx("div", { className: "h-full w-full", children: /* @__PURE__ */ m.jsx(
    y8,
    {
      nodes: r,
      edges: n,
      nodeTypes: zL,
      defaultViewport: { x: 0, y: 0, zoom: 1 },
      nodesDraggable: !1,
      nodesConnectable: !1,
      elementsSelectable: !1,
      zoomOnScroll: !1,
      panOnDrag: !1,
      zoomOnPinch: !1,
      zoomOnDoubleClick: !1,
      proOptions: { hideAttribution: !0 }
    }
  ) });
};
function x3(e, t = []) {
  const n = JL(e, t);
  if (n !== null)
    return n;
  const r = t.map(em);
  return QL(gr(hr(e)), r).join(" ");
}
const D3 = (e) => !!e && /^[A-Z]$/.test(e), O4 = (e) => !!e && /^[a-z]$/.test(e), XL = (e) => /^[A-Z]+$/.test(e), GL = (e) => /^[a-z]+$/.test(e);
function YL(e, t, n, r = 0) {
  return !D3(e) || !t ? !1 : O4(t) ? !0 : D3(t) && O4(n) && r > 1;
}
function hr(e) {
  if (!e) return [];
  const t = [];
  let n = e[0] || "";
  for (let r = 1; r < e.length; r++) {
    const o = e[r], i = e[r - 1], s = r < e.length - 1 ? e[r + 1] : void 0;
    YL(o, i, s, r) ? (t.push(n), n = o) : n += o;
  }
  return n && t.push(n), t;
}
const qL = (e) => e.length === 1 && D3(e);
function gr(e) {
  if (!e.length) return [];
  const t = [];
  let n = "";
  for (const r of e)
    qL(r) ? n += r : (n && (t.push(n), n = ""), t.push(r));
  return n && t.push(n), t;
}
function UL(e, t, n) {
  return t + n.length > e.length ? !1 : n.every((r, o) => e[t + o] === r);
}
function KL(e, t, n, r) {
  return [...e.slice(0, t), r, ...e.slice(t + n)];
}
function QL(e, t) {
  if (!t.length || !e.length) return e;
  let n = [...e];
  for (const { original: r, segments: o } of t) {
    if (!o.length) continue;
    let i = 0;
    for (; i <= n.length - o.length; )
      UL(n, i, o) ? (n = KL(n, i, o.length, r), i = 0) : i += 1;
  }
  return n;
}
function JL(e, t = []) {
  return !e || typeof e != "string" ? e || "" : t.includes(e) || GL(e) || XL(e) ? e : null;
}
function em(e) {
  return {
    original: e,
    segments: gr(hr(e))
  };
}
class Cr {
  /**
   * Creates a new TopologyNodePresenter instance
   *
   * @param model - The topology node model to present
   */
  constructor(t) {
    /** The topology node model being presented */
    Le(this, "model");
    this.model = t;
  }
  get title() {
    return this.model.name;
  }
  get subtitle() {
    return this.model.isGroup && this.groupType ? this.groupType : this.model.platform ? oe("node.service") : this.type;
  }
  /**
   * Gets a display-friendly version of the platform name
   * Splits platform strings on '::' and converts from title case to sentence case
   * Preserves specific terms like 'CloudWatch' from being converted
   *
   * @returns A formatted string representing the platform name
   */
  get platform() {
    var t;
    return (t = this.model.platform) == null ? void 0 : t.split("::").map((n) => x3(n, ["CloudWatch"])).join(" ");
  }
  /**
   * Formats the node type for display
   * Splits type strings on '::' and converts from title case to sentence case
   * Preserves specific terms like 'CloudWatch' from being converted
   *
   * @returns A formatted string representing the node type
   */
  get type() {
    return this.model.type.split("::").map((t) => x3(t, ["CloudWatch"])).join(" ");
  }
  /**
   * Gets a localized string indicating the number of services
   *
   * @returns A formatted and translated string showing the service count
   */
  get numberOfServices() {
    return `${this.model.numberOfServices}`;
  }
  /**
   * Gets a localized string indicating the number of uninstrumented services
   *
   * @returns A formatted and translated string showing the uninstrumented service count
   */
  get percentOfUninstrumentedServices() {
    return this.model.numberOfUninstrumentedServices === 0 ? oe("node.percentOfUninstrumentedServices", { value: 0 }) : oe("node.percentOfUninstrumentedServices", {
      value: Math.round(this.model.numberOfUninstrumentedServices / this.model.numberOfServices * 100).toFixed(
        1
      )
    });
  }
  /**
   * Gets a display-friendly version of the group type
   * Applies special case handling for specific group types:
   * - 'Related' is displayed as 'Application'
   * - Other types are converted from title case to sentence case
   *
   * @returns A formatted string representing the group type, or undefined if no group type
   */
  get groupType() {
    const t = this.model.groupType;
    if (t)
      return t === "Related" ? "Application" : x3(this.model.groupType);
  }
}
class pr {
  constructor(t) {
    Le(this, "model");
    Le(this, "presenter");
    this.model = t, this.presenter = new Cr(t);
  }
  toCelestialCard() {
    return {
      id: this.model.id,
      icon: fr(this.model.type),
      title: this.model.name,
      subtitle: this.presenter.subtitle,
      isGroup: this.model.isGroup,
      aggregatedNodeId: this.model.aggregatedNodeId,
      platform: this.presenter.platform,
      type: this.presenter.type,
      isInstrumented: this.model.isInstrumented,
      numberOfServices: this.presenter.numberOfServices,
      percentOfUninstrumentedServices: this.presenter.percentOfUninstrumentedServices,
      keyAttributes: this.model.node.KeyAttributes,
      statisticReferences: this.model.node.StatisticReferences,
      attributes: this.model.node.AttributeMaps,
      applications: this.model.node.Applications,
      isDirectService: this.model.isDirectService,
      metrics: {
        ...E2
      },
      dependencyTypes: this.model.node.DependencyTypes
    };
  }
}
class Lr {
  /**
   * Creates a new TopologyNodeModel instance
   *
   * @param node - The raw topology node data from the SDK
   */
  constructor(t) {
    /** The raw topology node data from the SDK */
    Le(this, "node");
    this.node = t;
  }
  /**
   * Gets the unique identifier of the node
   *
   * @returns The node's ID string
   */
  get id() {
    return this.node.NodeId;
  }
  /**
   * Gets the display name of the node
   *
   * @returns The node's name string
   */
  get name() {
    return this.node.Name;
  }
  /**
   * Determines if this node represents a service group rather than an individual service
   *
   * @returns True if the node is a service group, false otherwise
   */
  get isGroup() {
    var t;
    return ((t = this.node.KeyAttributes) == null ? void 0 : t.Type) === "ServiceGroup";
  }
  /**
   * Gets the aggregated node identifier for this node
   * 
   * This identifier is used to group related nodes together in aggregated views.
   * It may be null or undefined if the node is not part of an aggregated group.
   *
   * @returns The aggregated node ID string, null, or undefined
   */
  get aggregatedNodeId() {
    return this.node.AggregatedNodeId;
  }
  /**
   * Determines if this node has instrumentation
   *
   * The definition of "instrumented" differs based on whether the node is a group:
   * - For groups: Checks if at least one service in the group is instrumented
   * - For services: Checks if the service itself is instrumented
   *
   * @returns True if the node is instrumented, false otherwise
   */
  get isInstrumented() {
    const t = this.node.AttributeMaps;
    return this.isGroup ? !!(t != null && t.some(
      (n) => !!(n != null && n.InstrumentedServiceCount) && Number(n == null ? void 0 : n.InstrumentedServiceCount) > 0
    )) : !!(t != null && t.some(
      (n) => n.InstrumentationType && n.InstrumentationType === "INSTRUMENTED"
    ));
  }
  /**
   * Checks if this node has platform type information
   *
   * @returns True if platform type is available, false otherwise
   */
  get hasPlatformType() {
    var t;
    return !!((t = this.node.AttributeMaps) != null && t.some((n) => !!n.PlatformType));
  }
  /**
   * Checks if this node has resource type information
   *
   * @returns True if resource type is available, false otherwise
   */
  get hasResourceType() {
    var t;
    return !!((t = this.node.KeyAttributes) != null && t.ResourceType);
  }
  /**
   * Gets the platform type of the node
   *
   * @returns The platform type string if available, undefined otherwise
   */
  get platform() {
    var t, n;
    return (n = (t = this.node.AttributeMaps) == null ? void 0 : t.find((r) => !!r.PlatformType)) == null ? void 0 : n.PlatformType;
  }
  /**
   * Determines the type of the node, prioritizing:
   * 1. PlatformType (if available)
   * 2. ResourceType (if available)
   * 3. Falling back to the node's Type property
   *
   * @returns The determined type string for this node
   */
  get type() {
    var t, n, r;
    return this.hasPlatformType ? (n = (t = this.node.AttributeMaps) == null ? void 0 : t.find((o) => !!o.PlatformType)) == null ? void 0 : n.PlatformType : this.hasResourceType ? (r = this.node.KeyAttributes) == null ? void 0 : r.ResourceType : this.node.Type;
  }
  /**
   * Calculates the total number of services within this group
   * Combines both instrumented and uninstrumented services
   *
   * @returns The total number of services, or 0 if not applicable (not a group)
   */
  get numberOfServices() {
    var n;
    if (!this.isGroup) return 0;
    const t = (n = this.node.AttributeMaps) == null ? void 0 : n.find(
      (r) => !!(r != null && r.InstrumentedServiceCount) || !!(r != null && r.UninstrumentedServiceCount)
    );
    return t ? Object.values(t).map(Number).reduce((r, o) => r + o, 0) ?? 0 : 0;
  }
  /**
   * Gets the number of uninstrumented services within this group
   *
   * @returns The count of uninstrumented services, or 0 if not applicable (not a group)
   */
  get numberOfUninstrumentedServices() {
    var n, r;
    if (!this.isGroup) return 0;
    const t = ((r = (n = this.node.AttributeMaps) == null ? void 0 : n.find((o) => !!(o != null && o.UninstrumentedServiceCount))) == null ? void 0 : r.UninstrumentedServiceCount) ?? 0;
    return Number(t);
  }
  /**
   * Gets the group type designation for this node
   *
   * @returns The group type string if available, undefined otherwise
   */
  get groupType() {
    return this.node.KeyAttributes.GroupType;
  }
  /**
   * Determines if this is a user-defined custom group
   * Uses the node ID format to identify the source of the group
   *
   * @returns True if this is a custom group defined by a customer, false otherwise
   */
  get isCustomerDefinedGroup() {
    var n, r;
    if (!this.isGroup) return !1;
    const t = (n = this.node.NodeId.split("/")) == null ? void 0 : n[1];
    return ((r = t == null ? void 0 : t.split(":")) == null ? void 0 : r[1]) === "declared";
  }
  get isDirectService() {
    var t;
    return this.isGroup ? !0 : !((t = this.node.AttributeMaps) != null && t.find((n) => (n == null ? void 0 : n.isDirectService) === "false"));
  }
  /**
   * Creates a presenter instance for this node model
   * Useful for formatting and transforming model data for display purposes
   *
   * @returns A TopologyNodePresenter instance for this node
   */
  get presenter() {
    return new Cr(this);
  }
}
const cm = (e) => Ee(() => {
  const t = e.Nodes.map((r, o) => {
    const i = fn(o, dn), s = {
      ...r,
      DependencyTypes: Vp(r, e.Edges ?? [], e.Nodes)
    }, a = new Lr(s);
    return {
      id: r.NodeId,
      type: "celestialNode",
      position: i,
      data: new pr(a).toCelestialCard(),
      draggable: !0,
      selectable: !0,
      deletable: !1
    };
  }), n = (e.Edges ?? []).map((r) => ({
    id: r.EdgeId,
    source: r.SourceNodeId,
    target: r.DestinationNodeId,
    sourceHandle: "source-right",
    targetHandle: "target-left",
    markerEnd: { type: Ht.ArrowClosed },
    style: { strokeWidth: 2 },
    type: "bezier",
    data: {
      relationship: "Invoke",
      statistics: r.StatisticReferences
    }
  })) || [];
  return { nodes: t, edges: n };
}, [e]), um = (e) => Ee(() => ({ nodes: (e.ServiceGroupingSummaries ?? []).map((o) => {
  var i, s, a, l;
  return {
    Name: (i = o.GroupingAttribute) == null ? void 0 : i.GroupingAttributeValue,
    Type: S5,
    NodeId: (s = o.GroupingAttribute) == null ? void 0 : s.GroupingAttributeIdentifier,
    AttributeMaps: o.AttributeMaps ?? [],
    StatisticReferences: {
      MetricReferences: o.MetricReferences ?? []
    },
    KeyAttributes: {
      Name: (a = o.GroupingAttribute) == null ? void 0 : a.GroupingAttributeValue,
      Type: S5,
      GroupType: ((l = o.GroupingAttribute) == null ? void 0 : l.GroupingAttributeKey) ?? ""
    },
    DependencyTypes: o.DependencyTypes
  };
}).map((o, i) => {
  const s = fn(i, dn), a = new Lr(o);
  return {
    id: o.NodeId,
    type: "celestialNode",
    position: s,
    data: new pr(a).toCelestialCard(),
    draggable: !0,
    selectable: !0,
    deletable: !1
  };
}), edges: [] }), [e]);
export {
  nf as BreadcrumbTrail,
  Dp as Celestial,
  J5 as CelestialCard,
  am as CelestialMap,
  lm as CelestialMapWidget,
  Be as HEALTH_DONUT_COLORS,
  tf as HEALTH_DONUT_TEST_ID,
  M2 as HealthDonut,
  Fp as MapContainer,
  S2 as SliStatusIcon,
  fr as getIcon,
  rf as useBreadcrumbs,
  um as useCelestialGroupNodes,
  cm as useCelestialNodes
};
