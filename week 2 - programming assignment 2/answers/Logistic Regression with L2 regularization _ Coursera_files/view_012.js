define("bundles/assess/questionTypes/optionBase/student/view",["require","exports","module","underscore","bundles/assess/questionTypes/optionBase/student/optionTemplate.html","bundles/assess/questionTypes/optionBase/student/optionView","bundles/assess/questionTypes/optionBase/student/optionView.html","bundles/assess/questionTypes/optionBase/student/template.html","bundles/phoenix/lib/renderContent","bundles/phoenix/lib/view"],function(require,exports,module){"use strict";var _=require("underscore"),e=require("bundles/assess/questionTypes/optionBase/student/optionTemplate.html"),s=require("bundles/assess/questionTypes/optionBase/student/optionView"),t=require("bundles/assess/questionTypes/optionBase/student/optionView.html"),n=require("bundles/assess/questionTypes/optionBase/student/template.html"),i=require("bundles/phoenix/lib/renderContent"),o=require("bundles/phoenix/lib/view"),a=o.extend({className:"coursera-assess-question-optionBase",headerTemplate:null,template:n,optionViewTemplate:t,optionTemplate:e,supportedStyles:["coursera-assess-style-question-default","coursera-assess-style-question-quick","coursera-assess-style-question-in-video","coursera-assess-style-question-survey"],events:{"click [data-option]":"clickOption"},initialize:function initialize(e){this.options=this.options||e||{}},clickOption:function clickOption(e){this.trigger("change")},getDisplayScore:function getDisplayScore(e){return e?e%1===0?e:e.toFixed(1):0},templateOptions:function templateOptions(){var s=this.options.instance,t=s.feedback,e=s.weightedScoring;return{variant:s.variant,headerTemplate:this.headerTemplate,index:this.options.index,showFeedbackIcon:this.options.showFeedbackIcon,feedback:t,isCorrect:t?t.definition.isCorrect:null,score:e?this.getDisplayScore(e.score):null,maxScore:e?e.maxScore:null}},renderSubviews:function renderSubviews(){this.renderReactViews(),this.renderOptions(),this.renderExtra()},renderReactViews:function renderReactViews(){var e=this.options.instance;i(e.variant.definition.prompt,this.$$("prompt"))},renderOptions:function renderOptions(){var e=this.options.instance;_(e.variant.definition.options).each(this.renderOption.bind(this))},renderOption:function renderOption(e){var t=this.options.instance,n=this.normalizeFeedback(t),i=new s({instance:t,option:e,feedback:n&&n[e.id],template:this.optionViewTemplate,contentTemplate:this.optionTemplate});this.$$("options-area").append(i.render().el)},renderExtra:function renderExtra(){},disableInput:function disableInput(){this.$("input").attr("disabled",!0),this.$("[data-option]").addClass("coursera-assess-question-optionBase-option-disabled")},enableInput:function enableInput(){this.$("input").attr("disabled",!1),this.$("[data-option]").removeClass("coursera-assess-question-optionBase-option-disabled")},serializeResponse:function serializeResponse(){return{}},isAnswered:function isAnswered(){return!0},normalizeFeedback:function normalizeFeedback(e){return{}}});module.exports=a});