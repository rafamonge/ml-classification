!function(e){var s=function(e,s,a){var r=function template(t){var a=[],c={},r,n=t||{};return function(l,c,u,s){var d=l.length,n="",t="",o="",i="";1==d?(c?(n="Show other acceptable response",t="Other acceptable response"):(n="Show acceptable response",t="Acceptable response"),o=" or ",i="try again"):d>1&&(c?(n="Show other acceptable responses",t="Other acceptable responses"):(n="Show acceptable responses",t="Acceptable responses"),o=" or ",i="try again"),u?(a.push("<strong>"+e.escape(null==(r=s(t))?"":r)+'</strong><div data-correct-answers="data-correct-answers" class="coursera-assess-question-shortanswer-correctAnswer">'),function(){var t=l;if("number"==typeof t.length)for(var c=0,o=t.length;o>c;c++){var n=t[c];a.push("<label>"+e.escape(null==(r=s(n.answer))?"":r)+"</label>"),n.feedback&&a.push('<div class="c-assess-common-arrow"></div><div data-js="user-html" class="alert alert-feedback alert-feedback-neutral"><div data-js="correct-answer-feedback-display"'+e.attr("data-correct-answer-id",n.id,!0,!1)+"></div></div>")}else{var o=0;for(var c in t){o++;var n=t[c];a.push("<label>"+e.escape(null==(r=s(n.answer))?"":r)+"</label>"),n.feedback&&a.push('<div class="c-assess-common-arrow"></div><div data-js="user-html" class="alert alert-feedback alert-feedback-neutral"><div data-js="correct-answer-feedback-display"'+e.attr("data-correct-answer-id",n.id,!0,!1)+"></div></div>")}}}.call(this),a.push("</div>")):(a.push('<a data-show-correct-answers="data-show-correct-answers" href="#" onclick="return false;" class="coursera-assess-question-shortanswer-link">'+e.escape(null==(r=s(n))?"":r)+"</a>"),c||a.push('<span data-js="try-again-link-container">'+e.escape(null==(r=s(o))?"":r)+'<a data-retry="data-retry" href="#" onclick="return false;" class="coursera-assess-question-shortanswer-link">'+e.escape(null==(r=s(i))?"":r)+"</a></span>"))}.call(this,"correctAnswers"in n?n.correctAnswers:"undefined"!=typeof correctAnswers?correctAnswers:void 0,"isCorrect"in n?n.isCorrect:"undefined"!=typeof isCorrect?isCorrect:void 0,"seeCorrectAnswers"in n?n.seeCorrectAnswers:"undefined"!=typeof seeCorrectAnswers?seeCorrectAnswers:void 0,"_t"in n?n._t:"undefined"!=typeof s?s:void 0),a.join("")};return function(e){return e&&"_t"in e&&(s=e._t.merge(s)),r(e)}};"function"==typeof define&&define.amd?define(["js/vendor/jade","i18n!bundles/assess/questionTypes/shortanswer/student/nls/correctAnswers"],function(e,r){var a;return s(e,r,a)}):e.jade.templates["bundles.assess.questionTypes.shortanswer.student.correctAnswers"]=s(e.jade.helpers)}(window);