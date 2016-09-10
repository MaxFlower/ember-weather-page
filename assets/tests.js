define("weather-app/tests/adapters/application.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | adapters/application.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"adapters/application.js should pass jshint.")})}),define("weather-app/tests/adapters/weather.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | adapters/weather.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"adapters/weather.js should pass jshint.")})}),define("weather-app/tests/app.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | app.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"app.js should pass jshint.")})}),define("weather-app/tests/components/city-weather.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | components/city-weather.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"components/city-weather.js should pass jshint.")})}),define("weather-app/tests/components/main-header.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | components/main-header.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"components/main-header.js should pass jshint.")})}),define("weather-app/tests/controllers/weather.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | controllers/weather.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"controllers/weather.js should pass jshint.")})}),define("weather-app/tests/helpers/destroy-app",["exports","ember"],function(t,e){function s(t){e.default.run(t,"destroy")}t.default=s}),define("weather-app/tests/helpers/destroy-app.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | helpers/destroy-app.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"helpers/destroy-app.js should pass jshint.")})}),define("weather-app/tests/helpers/module-for-acceptance",["exports","qunit","ember","weather-app/tests/helpers/start-app","weather-app/tests/helpers/destroy-app"],function(t,e,s,n,i){var r=s.default.RSVP.Promise;t.default=function(t){var s=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];(0,e.module)(t,{beforeEach:function(){if(this.application=(0,n.default)(),s.beforeEach)return s.beforeEach.apply(this,arguments)},afterEach:function t(){var e=this,t=s.afterEach&&s.afterEach.apply(this,arguments);return r.resolve(t).then(function(){return(0,i.default)(e.application)})}})}}),define("weather-app/tests/helpers/module-for-acceptance.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | helpers/module-for-acceptance.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"helpers/module-for-acceptance.js should pass jshint.")})}),define("weather-app/tests/helpers/resolver",["exports","weather-app/resolver","weather-app/config/environment"],function(t,e,s){var n=e.default.create();n.namespace={modulePrefix:s.default.modulePrefix,podModulePrefix:s.default.podModulePrefix},t.default=n}),define("weather-app/tests/helpers/resolver.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | helpers/resolver.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"helpers/resolver.js should pass jshint.")})}),define("weather-app/tests/helpers/start-app",["exports","ember","weather-app/app","weather-app/config/environment"],function(t,e,s,n){function i(t){var i=void 0,r=e.default.merge({},n.default.APP);return r=e.default.merge(r,t),e.default.run(function(){i=s.default.create(r),i.setupForTesting(),i.injectTestHelpers()}),i}t.default=i}),define("weather-app/tests/helpers/start-app.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | helpers/start-app.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"helpers/start-app.js should pass jshint.")})}),define("weather-app/tests/integration/components/city-weather-test",["exports","ember-qunit"],function(t,e){(0,e.moduleForComponent)("city-weather","Integration | Component | city weather",{integration:!0}),(0,e.test)("it renders",function(t){this.render(Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.2",loc:{source:null,start:{line:1,column:0},end:{line:1,column:16}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(t){var e=t.createDocumentFragment(),s=t.createComment("");return t.appendChild(e,s),e},buildRenderNodes:function(t,e,s){var n=new Array(1);return n[0]=t.createMorphAt(e,0,0,s),t.insertBoundary(e,0),t.insertBoundary(e,null),n},statements:[["content","city-weather",["loc",[null,[1,0],[1,16]]],0,0,0,0]],locals:[],templates:[]}}())),t.equal(this.$().text().trim(),""),this.render(Ember.HTMLBars.template(function(){var t=function(){return{meta:{revision:"Ember@2.7.2",loc:{source:null,start:{line:2,column:4},end:{line:4,column:4}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(t){var e=t.createDocumentFragment(),s=t.createTextNode("      template block text\n");return t.appendChild(e,s),e},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.7.2",loc:{source:null,start:{line:1,column:0},end:{line:5,column:2}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(t){var e=t.createDocumentFragment(),s=t.createTextNode("\n");t.appendChild(e,s);var s=t.createComment("");t.appendChild(e,s);var s=t.createTextNode("  ");return t.appendChild(e,s),e},buildRenderNodes:function(t,e,s){var n=new Array(1);return n[0]=t.createMorphAt(e,1,1,s),n},statements:[["block","city-weather",[],[],0,null,["loc",[null,[2,4],[4,21]]]]],locals:[],templates:[t]}}())),t.equal(this.$().text().trim(),"template block text")})}),define("weather-app/tests/integration/components/city-weather-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | integration/components/city-weather-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"integration/components/city-weather-test.js should pass jshint.")})}),define("weather-app/tests/integration/components/main-header-test",["exports","ember-qunit"],function(t,e){(0,e.moduleForComponent)("main-header","Integration | Component | main header",{integration:!0}),(0,e.test)("it renders",function(t){this.render(Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.2",loc:{source:null,start:{line:1,column:0},end:{line:1,column:15}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(t){var e=t.createDocumentFragment(),s=t.createComment("");return t.appendChild(e,s),e},buildRenderNodes:function(t,e,s){var n=new Array(1);return n[0]=t.createMorphAt(e,0,0,s),t.insertBoundary(e,0),t.insertBoundary(e,null),n},statements:[["content","main-header",["loc",[null,[1,0],[1,15]]],0,0,0,0]],locals:[],templates:[]}}())),t.equal(this.$().text().trim(),""),this.render(Ember.HTMLBars.template(function(){var t=function(){return{meta:{revision:"Ember@2.7.2",loc:{source:null,start:{line:2,column:4},end:{line:4,column:4}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(t){var e=t.createDocumentFragment(),s=t.createTextNode("      template block text\n");return t.appendChild(e,s),e},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.7.2",loc:{source:null,start:{line:1,column:0},end:{line:5,column:2}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(t){var e=t.createDocumentFragment(),s=t.createTextNode("\n");t.appendChild(e,s);var s=t.createComment("");t.appendChild(e,s);var s=t.createTextNode("  ");return t.appendChild(e,s),e},buildRenderNodes:function(t,e,s){var n=new Array(1);return n[0]=t.createMorphAt(e,1,1,s),n},statements:[["block","main-header",[],[],0,null,["loc",[null,[2,4],[4,20]]]]],locals:[],templates:[t]}}())),t.equal(this.$().text().trim(),"template block text")})}),define("weather-app/tests/integration/components/main-header-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | integration/components/main-header-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"integration/components/main-header-test.js should pass jshint.")})}),define("weather-app/tests/models/weather.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | models/weather.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"models/weather.js should pass jshint.")})}),define("weather-app/tests/resolver.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | resolver.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"resolver.js should pass jshint.")})}),define("weather-app/tests/router.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | router.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"router.js should pass jshint.")})}),define("weather-app/tests/routes/contact.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | routes/contact.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"routes/contact.js should pass jshint.")})}),define("weather-app/tests/routes/index.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | routes/index.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"routes/index.js should pass jshint.")})}),define("weather-app/tests/routes/weather.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | routes/weather.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"routes/weather.js should pass jshint.")})}),define("weather-app/tests/serializers/weather.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | serializers/weather.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"serializers/weather.js should pass jshint.")})}),define("weather-app/tests/test-helper",["exports","weather-app/tests/helpers/resolver","ember-qunit"],function(t,e,s){(0,s.setResolver)(e.default)}),define("weather-app/tests/test-helper.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | test-helper.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"test-helper.js should pass jshint.")})}),define("weather-app/tests/unit/adapters/application-test",["exports","ember-qunit"],function(t,e){(0,e.moduleFor)("adapter:application","Unit | Adapter | application",{}),(0,e.test)("it exists",function(t){var e=this.subject();t.ok(e)})}),define("weather-app/tests/unit/adapters/application-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | unit/adapters/application-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"unit/adapters/application-test.js should pass jshint.")})}),define("weather-app/tests/unit/adapters/weather-test",["exports","ember-qunit"],function(t,e){(0,e.moduleFor)("adapter:weather","Unit | Adapter | weather",{}),(0,e.test)("it exists",function(t){var e=this.subject();t.ok(e)})}),define("weather-app/tests/unit/adapters/weather-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | unit/adapters/weather-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"unit/adapters/weather-test.js should pass jshint.")})}),define("weather-app/tests/unit/controllers/weather-test",["exports","ember-qunit"],function(t,e){(0,e.moduleFor)("controller:weather","Unit | Controller | weather",{}),(0,e.test)("it exists",function(t){var e=this.subject();t.ok(e)})}),define("weather-app/tests/unit/controllers/weather-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | unit/controllers/weather-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"unit/controllers/weather-test.js should pass jshint.")})}),define("weather-app/tests/unit/models/weather-test",["exports","ember-qunit"],function(t,e){(0,e.moduleForModel)("city-weather","Unit | Model | city weather",{needs:[]}),(0,e.test)("it exists",function(t){var e=this.subject();t.ok(!!e)})}),define("weather-app/tests/unit/models/weather-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | unit/models/weather-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"unit/models/weather-test.js should pass jshint.")})}),define("weather-app/tests/unit/routes/contact-test",["exports","ember-qunit"],function(t,e){(0,e.moduleFor)("route:contact","Unit | Route | contact",{}),(0,e.test)("it exists",function(t){var e=this.subject();t.ok(e)})}),define("weather-app/tests/unit/routes/contact-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | unit/routes/contact-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"unit/routes/contact-test.js should pass jshint.")})}),define("weather-app/tests/unit/routes/index-test",["exports","ember-qunit"],function(t,e){(0,e.moduleFor)("route:index","Unit | Route | index",{}),(0,e.test)("it exists",function(t){var e=this.subject();t.ok(e)})}),define("weather-app/tests/unit/routes/index-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | unit/routes/index-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"unit/routes/index-test.js should pass jshint.")})}),define("weather-app/tests/unit/routes/weather-test",["exports","ember-qunit"],function(t,e){(0,e.moduleFor)("route:weather","Unit | Route | weather",{}),(0,e.test)("it exists",function(t){var e=this.subject();t.ok(e)})}),define("weather-app/tests/unit/routes/weather-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | unit/routes/weather-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"unit/routes/weather-test.js should pass jshint.")})}),define("weather-app/tests/unit/serializers/weather-test",["exports","ember-qunit"],function(t,e){(0,e.moduleForModel)("city-weather","Unit | Serializer | city weather",{needs:["serializer:city-weather"]}),(0,e.test)("it serializes records",function(t){var e=this.subject(),s=e.serialize();t.ok(s)})}),define("weather-app/tests/unit/serializers/weather-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | unit/serializers/weather-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"unit/serializers/weather-test.js should pass jshint.")})}),define("weather-app/tests/unit/services/weather-caller-test",["exports","ember-qunit"],function(t,e){(0,e.moduleFor)("service:weather-caller","Unit | Service | weather caller",{}),(0,e.test)("it exists",function(t){var e=this.subject();t.ok(e)})}),define("weather-app/tests/unit/services/weather-caller-test.jshint",["exports"],function(t){"use strict";QUnit.module("JSHint | unit/services/weather-caller-test.js"),QUnit.test("should pass jshint",function(t){t.expect(1),t.ok(!0,"unit/services/weather-caller-test.js should pass jshint.")})}),require("weather-app/tests/test-helper"),EmberENV.TESTS_FILE_LOADED=!0;
//# sourceMappingURL=tests.map