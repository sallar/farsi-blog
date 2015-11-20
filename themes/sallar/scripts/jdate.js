"use strict";

var JDate = require('jalali-date');

hexo.extend.helper.register('jdate', function(dateObj, format) {
    if (!(dateObj instanceof Date)) {
        dateObj = dateObj.toDate();
    }
    format = format || 'dddd DD MMMM YYYY';
    var date = new JDate(dateObj);
    return date.format(format);
});