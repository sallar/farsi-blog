/*!
 * Sallar.me
 * Published under MIT License.
 * Designed and Developed by Sallar Kaboli (sallar.kaboli@gmail.com)
 */

// Helpers
// ------------------------------------------------------
function hasClass(ele,cls)
{
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls)
{
    if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls)
{
    if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
    }
}

var pres = document.querySelectorAll('pre')
  , len  = pres.length;

// Pretty Print
// ------------------------------------------------------
for(i = 0; i < len; i++)
{
    if( !hasClass(pres[i], 'raw') )
    {
        addClass(pres[i], 'prettyprint');
        addClass(pres[i], 'linenums');
    }
}

prettyPrint();

// Social
// ------------------------------------------------------
var socialLink = document.querySelector('#content .meta .share .link')
  , shareBtns  = document.querySelector('#content .really_simple_share');

socialLink.onclick = function(e)
{
    e.preventDefault();
    this.parentNode.innerHTML = shareBtns.outerHTML;
    shareBtns.parentNode.removeChild(shareBtns);
};
