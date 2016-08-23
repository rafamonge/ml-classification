define("bundles/verification/viewModels/identityVerification",["require","exports","module","pages/open-course/common/constants","bundles/verification/promises/verifiableId","js/lib/fsm","backbone","underscore"],function(require,exports,module){"use strict";var e=require("pages/open-course/common/constants").signatureTrack.verificationSteps,t=require("bundles/verification/promises/verifiableId"),i=require("js/lib/fsm"),Backbone=require("backbone"),_=require("underscore"),r=Backbone.Model.extend(_.extend({},i.FiniteStateMachine,{logTransitions:!0,defaults:{state:"ready",hasKeytracRecorder:!1},fsm:{states:["ready","verifiable-id-error","keystroke-ready","keystroke-wrong-phrase","keystroke-submitting","keystroke-authenticate-error","keystroke-authenticated","transitioning-to-webcam","webcam-ready","webcam-took-photo","webcam-submitting","webcam-not-authenticated","webcam-authenticate-error","webcam-authenticated"],transitions:{"verifiable-id-error":["ready"],"keystroke-ready":["ready","verifiable-id-error","keystroke-wrong-phrase","keystroke-submitting","webcam-submitting"],"keystroke-wrong-phrase":["keystroke-ready"],"keystroke-submitting":["keystroke-ready","keystroke-authenticate-error"],"keystroke-authenticate-error":["keystroke-submitting"],"keystroke-authenticated":["keystroke-submitting"],"transitioning-to-webcam":["keystroke-submitting"],"webcam-ready":["ready","verifiable-id-error","transitioning-to-webcam","webcam-took-photo","webcam-submitting"],"webcam-took-photo":["webcam-ready"],"webcam-submitting":["webcam-took-photo","webcam-authenticate-error"],"webcam-not-authenticated":["webcam-submitting"],"webcam-authenticate-error":["webcam-submitting"],"webcam-authenticated":["webcam-submitting"]}},initialize:function initialize(e){_.bindAll(this,"fetchVerifiableId","onFetchVerifiableIdSuccess","onFetchVerifiableIdError"),this.verificationViewModel=e.verificationViewModel},fetchVerifiableId:function fetchVerifiableId(){t().then(this.onFetchVerifiableIdSuccess,this.onFetchVerifiableIdError).fin(this.onFetchVerifiableIdComplete).done()},onFetchVerifiableIdComplete:function onFetchVerifiableIdComplete(){},onFetchVerifiableIdSuccess:function onFetchVerifiableIdSuccess(t){this.verificationViewModel.set("verifiableId",t.id),t.get("nextVerificationState")===e.keystrokes?this.transition("keystroke-ready"):t.get("nextVerificationState")===e.webcam?this.transition("webcam-ready"):this.isState("verifiable-id-error")||this.transition("verifiable-id-error")},onFetchVerifiableIdError:function onFetchVerifiableIdError(){this.isState("verifiable-id-error")||this.transition("verifiable-id-error")}}));module.exports=r});