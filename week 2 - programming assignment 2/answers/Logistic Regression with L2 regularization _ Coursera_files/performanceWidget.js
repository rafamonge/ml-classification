define("pages/open-course/common/views/performanceWidget",["require","exports","module","backbone","underscore","bundles/phoenix/lib/view"],function(require,exports,module){"use strict";var Backbone=require("backbone"),_=require("underscore"),i=require("bundles/phoenix/lib/view"),e=Backbone.Model.extend({defaults:{showValue:!0,disableTransitions:!1}}),n=i.extend({initialize:function initialize(i){this.initializeOptions(i),this.initializeModels(),this.initializeEvents()},initializeOptions:function initializeOptions(i){this.options=i||{},this.evaluation=this.options.evaluation},initializeModels:function initializeModels(){this.model=new e(_(this.options).pick(["showValue","disableTransitions"]))},initializeEvents:function initializeEvents(){this.listenTo(this.model,"change",this.render),this.listenTo(this.evaluation,"change",this.renderPerformance)}});module.exports=n});