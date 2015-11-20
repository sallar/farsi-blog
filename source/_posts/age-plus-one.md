title: '$سن + 1!'
id: 95
categories:
  - عمومی
date: 2007-12-23 17:06:15
tags:
---

تولد تولد تولدت مبارك! بيا شمعا رو فوت كن كه صد سال مجبوري زنده باشي!
امروز تولدمه...!‌ آه..!‌ چه روز خجسته‌اي!
<div style="font-weight: bold; background-color: #f1f1f1; color: #191919;" dir="ltr" align="left">&lt; ?php
//Life
$age = $life['Db']-&gt;get("SELECT age FROM `life` WHERE `name` = 'sallar'");
$age += 1;
$life['Db']-&gt;save('life', 'age', $age);
$life['Cache']-&gt;save('age', $age);flush(); //Life's like a W.C.
die();
?&gt;

</div>
اينم برنامه زندگي من. خوب برنامه نويسي شده؟ فقط حيف كه پشت سر هم Fatal Error ميده! ميگه: You have to live !
الان چند ساعته كه وارد ۱۸ سالگی شدم

بدرود