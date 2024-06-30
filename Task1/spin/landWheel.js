let eventObj = {
	appended: "",
	scroll_1: 0,
};

var time = 600;
var intr;

function start_timer() {
	intr = setInterval(tick, 1000);
}

function tick() {
	time = time - 1;
	var mins = Math.floor(time / 60);
	var secs = time - mins * 60;
	if (mins == 0 && secs == 0) {
		clearInterval(intr);
	}
	secs = secs >= 10 ? secs : "0" + secs;
	$("#min").html("0" + mins);
	$("#sec").html(secs);
}

// Вставить комментарий "только что"
window.addEventListener('scroll', function (e) {
	if ((window.pageYOffset > `${document.getElementById('scrollg').offsetTop + 50}`) && eventObj.scroll_1 == 0) {
		eventObj.scroll_1++

		function pushComment() {
			$('#first-comment').each(function () {
				$('#first-comment').html(
					`${`
					<div class="comment-item__container">
					<p class="text-style">
					<img src="img/ava005.jpg" class="ava-img" alt="#">
					<span class="name_time__container">	
						<strong>Марія</strong>
							<span class="time">
								тільки що
							</span>
					</span>
				</p>
			
					<p class="text-style">Підтримую! Нещодавно замовила, і я просто у захваті! У <strong><a href="#scroll-to-boxes" class="link-with-delay">Anti-aging line</a></strong>
					дуже ПОТУЖНИЙ ЛІФТИНГ ЕФЕКТ! Шкіра відмінно підтягується з усіх боків, овал обличчя стає чіткішим і молодішим! Всім раджу!
					</p><div class="container__img-responsive"></div>
				</div>
					`}`
				)
			});
			$(".link-with-delay").click(function() {
				var _href = $(this).attr("href");
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
				return false;
			});
		}

		function pushComment_1() {
			$('#first-comment').each(function () {
				$('#first-comment .time').html(
					`${`10 секунд назад`}`
				)
			})
		}

		function pushComment_2() {
			$('#first-comment').each(function () {
				$('#first-comment .time').html(
					`${`30 секунд назад`}`
				)
			})
		}

		function pushComment_3() {
			$('#first-comment').each(function () {
				$('#first-comment .time').html(
					`${`хвилину тому`}`
				)
			})
		}

		function pushComment_4() {
			$('#first-comment').each(function () {
				$('#first-comment .time').html(
					`${`5 хвилин тому`}`
				)
			})
		}

		function pushComment_5() {
			$('#first-comment').each(function () {
				$('#first-comment .time').html(
					`${`10 хвилин тому`}`
				)
			})
		}

		setTimeout(pushComment, 2000);
		setTimeout(pushComment_1, 10000);
		setTimeout(pushComment_2, 30000);
		setTimeout(pushComment_3, 60000);
		setTimeout(pushComment_4, 300000);
		setTimeout(pushComment_5, 600000);
	}
});


// Scroll
$(document).ready(function () {
	$("a[href^='#']").click(function (e) {
		if ($(this).attr('href') === '#') {
			e.preventDefault();
		} else {
			var _href = $(this).attr("href");
			$("html, body").animate({
				scrollTop: $(_href).offset().top + "px"
			});
			return false;
		}
	});
});


// Дата
function pushDate(d) {
	let now = new Date();
	now.setDate(now.getDate() + d);
	let mm = now.getMonth() + 1;
	let day = now.getDate();
	if (now.getDate() < 10) day = '0' + now.getDate();
	if (mm < 10) mm = '0' + mm;
	document.write(day + "." + mm + "." + now.getFullYear());
}