$('p').click(function(){
	$(this).text("Changed only the text for this paragraph");
});

$('.card').mouseenter(function(){
	$(this).fadeTo(2000, 0.2).fadeTo(2000, 1);
});

$(".module-nav").on("click", function(){
  let allModulesCardsSelector = ".card";
  let thisModuleCardsSelector = "." + this.id + "-card";
  $(allModulesCardsSelector).removeClass("card-highlight");
  $(thisModuleCardsSelector).addClass("card-highlight");
});
