var e=function(e,t,n,i,a){var s=document.createElement("div");s.classList.add("notification"),s.classList.add(a),s.style.top=e+"px",s.style.right=t+"px",document.body.append(s);var o=document.createElement("h2");o.classList.add("title"),o.textContent=n,s.append(o);var c=document.createElement("p");c.textContent=i,s.append(c),setTimeout(function(){s.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.459d2888.js.map
