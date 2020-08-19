function loadtext() {
var userLanguage = window.navigator.language || window.navigator.languages[0];
var hasRegion = userLanguage.indexOf('-');
if (hasRegion != -1) {userLanguage = userLanguage.slice(0, hasRegion);}
    var langarr = {
    'en': ['Video maybe is not available for viewing in your country','Please install the Free VPN  to access blocked sites and view taboo videos anonymously.','Install'],
    'id': ['Video mungkin tidak tersedia untuk ditonton di negara Anda','Silakan instal VPN Gratis untuk mengakses situs yang diblokir dan melihat video tabu secara anonim.','Pasang'],
    'ru': ['Возможно видео недоступно для просмотра в вашей стране','Пожалуйста, установите бесплатный VPN для доступа к заблокированным сайтам и анонимного просмотра запрещенных видео.','Установить'],
	'pt': ['Talvez o vídeo não esteja disponível para visualização no seu país','Instale a VPN para acessar sites bloqueados e assista a vídeos tabus anonimamente.','Instalar'],
	'ar': ['ربما لا يتوفر الفيديو للعرض في بلدك','يرجى تثبيت Free VPN للوصول إلى المواقع المحجوبة وعرض مقاطع الفيديو المحظورة بشكل مجهول.','تثبيت'],
	'es': ['El video tal vez no esté disponible para ver en tu país','Instale la VPN gratuita para acceder a sitios bloqueados y ver videos tabú de forma anónima.','Instalar'],
	'fa': ['شاید ویدیو برای مشاهده در کشور شما در دسترس نباشد','لطفاً برای دسترسی به سایتهای مسدود شده و مشاهده فیلمهای تابویی ناشناس ، VPN رایگان را نصب کنید','نصب'],
	'vi': ['Video có thể không có sẵn để xem ở nước bạn','Vui lòng cài đặt VPN miễn phí để truy cập các trang web bị chặn và xem video cấm kỵ.','Cài đặt'],
	'tr': ['Video, ülkenizde görüntülenemeyebilir','Engellenen sitelere erişmek ve tabu videoları anonim olarak görüntülemek için lütfen Ücretsiz VPN\'yi yükleyin.','Yükle'],
	'ro': ['Poate că videoclipul nu este disponibil pentru vizionare în țara dvs.','Vă rugăm să instalați VPN-ul gratuit pentru a accesa site-urile blocate și a vizualiza videoclipuri tabu în mod anonim.','Instalare'],
	'th': ['วิดีโออาจไม่สามารถดูได้ในประเทศของคุณ','โปรดติดตั้ง VPN ฟรีเพื่อเข้าถึงเว็บไซต์ที่ถูกบล็อกและดูวิดีโอต้องห้ามโดยไม่ระบุชื่อ.','ติดตั้ง'],
	'my': ['Video mungkin tidak tersedia untuk ditonton di negara anda','Sila pasang VPN Percuma untuk mengakses laman web yang disekat dan melihat video pantang larang tanpa nama.','Pasang'],
	'ne': ['भिडियो तपाईंको देशमा हेर्नको लागि उपलब्ध छैन','कृपया नि: शुल्क VPN स्थापना गर्नुहोस् अवरुद्ध साइटहरू पहुँच गर्न र निषेधित वर्जित भिडियोहरू हेर्न.','स्थापना']
    };
    document.getElementById('t1').innerText=langarr[userLanguage][0];
    document.getElementById('t2').innerText=langarr[userLanguage][1];
    document.getElementById('t3').innerText=langarr[userLanguage][2];
    }
    if (document.addEventListener) {
      window.addEventListener("load", loadtext, false);
    }
// Klik
function go_away() { location.href = "//aridjaya.blogspot.com"; }
document.querySelector('body').addEventListener('click', go_away);
history.pushState("back", null, null);
window.onpopstate = function () { history.pushState('back', null, null); };
// Laptop
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.indexOf('Android') != -1)){
}
else location.replace("//www.aridjaya.com/");
// Mobile
var uri = window.location.toString();
if (uri.indexOf("%3D", "%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D", "%3D%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1", "&m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1", "?m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, clean_uri);
};
