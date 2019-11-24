function money(x)
{
  return '&pound;' + (1 * x).toFixed(2);
}

function c(q)
{
  return document.getElementsByClassName(q)[0];
}

function td(html)
{
  return "<td>" + html + "</td>";
}

function p(html)
{
  return "<p>" + html + "</p>";
}

function small(html)
{
  return "<small>" + html + "</small>";
}

function onclickAttribute(onclickFn)
{
  return onclickFn
    ? 'onclick="' + onclickFn + '"'
    : '';
}

function enabledAttribute(enabled)
{
  return enabled
    ? ''
    : 'disabled="disabled"';
}