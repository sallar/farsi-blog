"use strict";

var JDate = require('jalali-date');

hexo.extend.helper.register('jdate', function(dateObj, format){
    format = format || 'dddd DD MMMM YYYY';
    var date = new JDate(dateObj.toDate());
    return date.format(format);
});