define(['./storage'], function(Storage) {

	// do neccesary configurations for the underscore template pattern
	_.templateSettings = {
		interpolate : /\{\{(.+?)\}\}/g
	};
	
	//Storage.persist("user-language", "sv");
	//Storage.remove("user-language");
	var userLang;
	if (userLang = Storage.retreive("user-language")) {
		require.config({
			locale : userLang
		});
	}

	/**
	Localizer is used to handle the localization of the framework by providing the functions required for setting a different language and 
	resetting the user language settings to the defaults 
 	
 	@namespace Boiler.Helpers
 	@module BoilerCoreClasses
	@class Localizer
	@constructor    
	**/
	var Localizer = function() {
	};
	/**
	Returns an object containing parameters for localization

	@method localize
	@static
	@param {Object} text
	@param {Object} nlsObject
	@return {Object}
	**/
	Localizer.localize = function(text, nlsObject) {
		var compiled = _.template(text);
		return compiled({
			nls : nlsObject
		});
	};
	/**
	Sets the language to the provided locale

	@method setLanguage
	@static
	@param {Object} locale
	**/
	Localizer.setLanguage = function(locale) {
		console.log(locale);
		Storage.persist("user-language", locale);
		location.reload(); 
	};
	/**
	Reset the language to the default language

	@method clearLanguage
	@static
	**/
	Localizer.clearLanguage = function() {
		Storage.remove("user-language");
		location.reload(); 
	};

	return Localizer;

});
