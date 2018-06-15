//Наприклад є слово "CAATGCCATA". Частота букв следующая

//"A" - 4 шт
//"С" - 3 шт
//"T" - 2 шт
//"G" - 1 шт

//Самая часто встречающаяся буква - "A". Поэтому ответ будет "A".

function getTopLetter(text) {
if(expression) {
		console.log("A", text);
	}	
var cnt=[]

for (var i=0;i<text.length;i++)
  if (!cnt[text[i]]) cnt[text[i]]=1;
    else cnt[text[i]]++;

var max=0, index=0;
for (var key in cnt) {
   if (cnt[key]>max) {max=cnt[key];index=key;}
}
return(index); 
}
	