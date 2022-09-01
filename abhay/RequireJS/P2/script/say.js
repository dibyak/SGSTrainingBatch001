define(["script/translate"], function(translate){
    return {
        hello: function(language){
            return translate[language].hello+" "+translate[language].world
        }
    };
});