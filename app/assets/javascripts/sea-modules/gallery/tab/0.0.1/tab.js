define("gallery/tab/0.0.1/tab",["_","$","events"],function(a){var b=a("_"),c=a("$"),d=a("events"),e=function(a){b.bindAll(this),this.$el=c(a),this.bindEvents(),d.mixTo(this)};return e.prototype={constructor:e,bindEvents:function(){this.$el.find("a").click(this.handleTabClick)},handleTabClick:function(a){a.preventDefault();var b=c(a.target);this.changeTab(b)},changeTab:function(a){if(!a.hasClass("active")){a.parent().addClass("active"),a.parent().siblings().removeClass("active");var b=c(a.attr("href"));b.show(),b.siblings().hide(),this.trigger("shown",a)}}},e});