define("klog/admin/common/pop-confirm",["_","$","events"],function(a){var b=a("_"),c=a("$"),d=a("events"),e='<div class="pop-confirm"><div class="pop-confirm-inner clearfix"><div class="pop-confirm-content"></div><div class="pull-right"><a class="btn btn-small btn-primary submit">确定</a>&nbsp;<a class="btn btn-small cancel">取消</a></div></div></div>',f=function(){b.bindAll(this),this.$el=c(e).appendTo("body"),this.$el.find(".cancel, .submit").click(this.hide),this.$el.find(".submit").click(this.triggerSubmit),d.mixTo(this)};return f.prototype={constructor:f,show:function(a){if(!this.$el.is(":animated")){this.$el.find(".pop-confirm-content").text(a.text),this.$trigger=c(a.trigger);var b=this.$el.height(),d=this.$trigger.position();this.$trigger.outerHeight(),this.$el.css({left:d.left-.4*this.$el.width()+"px",top:d.top+"px",visibility:"visible",height:0}),this.$el.animate({height:b,top:"-="+b+"px"},"fast")}},hide:function(){var a=this.$el.height();this.$el.animate({height:0,top:"+="+a+"px"},"fast",function(){c(this).css({visibility:"hidden",height:"auto"})}),this.isShown=!1},triggerSubmit:function(){this.trigger("submit",this.$trigger)}},f}),define("klog/admin/comments/index",["../common/pop-confirm","$","_","events","jquery-ujs"],function(a){var b=a("$"),c=a("../common/pop-confirm");a("jquery-ujs");var d=new c;b("a.delete").click(function(){var a=b(this);return d.show({text:"确定删除这条评论及其回复？",trigger:this}),d.off().on("submit",function(){a.trigger("click.rails")}),!1}),b("a.delete").on("ajax:success",function(){b(this).closest("article").hide("normal")})});