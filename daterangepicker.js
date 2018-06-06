// daterangepicker.js
// version : 1.0.7
// author : Chunlong Liu||He Weihao
// last updated at: 2018-6-6
// license : MIT
// www.jszen.com

(function (factory) {
		if (typeof define === 'function' && define.amd) {
			// AMD. Register as an anonymous module.
			define(['jquery', 'moment'], factory);
		} else if (typeof exports === 'object' && typeof module !== 'undefined') {
			// CommonJS. Register as a module
			module.exports = factory(require('jquery'), require('moment')); 
		} else {
			// Browser globals
			factory(jQuery, moment);
		}
}(function ($, moment)
{

	$.dateRangePickerLanguages =
	{
		'az':
		{
			'selected': 'Seçildi:',
			'day':' gün',
			'days': ' gün',
			'apply': 'tətbiq',
			'week-1' : '1',
			'week-2' : '2',
			'week-3' : '3',
			'week-4' : '4',
			'week-5' : '5',
			'week-6' : '6',
			'week-7' : '7',
			'month-name': ['yanvar','fevral','mart','aprel','may','iyun','iyul','avqust','sentyabr','oktyabr','noyabr','dekabr'],
			'shortcuts' : 'Qısayollar',
			'past': 'Keçmiş',
			'following':'Növbəti',
			'previous' : '&nbsp;&nbsp;&nbsp;',
			'prev-week' : 'Öncəki həftə',
			'prev-month' : 'Öncəki ay',
			'prev-year' : 'Öncəki il',
			'next': '&nbsp;&nbsp;&nbsp;',
			'next-week':'Növbəti həftə',
			'next-month':'Növbəti ay',
			'next-year':'Növbəti il',
			'less-than' : 'Tarix aralığı %d gündən çox olmamalıdır',
			'more-than' : 'Tarix aralığı %d gündən az olmamalıdır',
			'default-more' : '%d gündən çox bir tarix seçin',
			'default-single' : 'Tarix seçin',
			'default-less' : '%d gündən az bir tarix seçin',
			'default-range' : '%d və %d gün aralığında tarixlər seçin',
			'default-default': 'Tarix aralığı seçin'
		},
		'cn':
		{
			'selected': '已选择:',
			'day':'天',
			'days': '天',
			'apply': '确定',
			'week-1' : '一',
			'week-2' : '二',
			'week-3' : '三',
			'week-4' : '四',
			'week-5' : '五',
			'week-6' : '六',
			'week-7' : '日',
			'month-name': ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
			'shortcuts' : '快捷选择',
			'past': '过去',
			'following':'将来',
			'previous' : '&nbsp;&nbsp;&nbsp;',
			'prev-week' : '上周',
			'prev-month' : '上个月',
			'prev-year' : '去年',
			'next': '&nbsp;&nbsp;&nbsp;',
			'next-week':'下周',
			'next-month':'下个月',
			'next-year':'明年',
			'less-than' : '所选日期范围不能大于%d天',
			'more-than' : '所选日期范围不能小于%d天',
			'default-more' : '请选择大于%d天的日期范围',
			'default-less' : '请选择小于%d天的日期范围',
			'default-range' : '请选择%d天到%d天的日期范围',
			'default-single':'请选择一个日期',
			'default-default': '请选择一个日期范围',
			'time':'时间',
			'hour':'小时',
			'minute':'分钟'
		},
		'cz':
		{
			'selected': 'Vybráno:',
			'day':'Den',
			'days': 'Dny',
			'apply': 'Zavřít',
			'week-1' : 'po',
			'week-2' : 'út',
			'week-3' : 'st',
			'week-4' : 'čt',
			'week-5' : 'pá',
			'week-6' : 'so',
			'week-7' : 'ne',
			'month-name': ['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],
			'shortcuts' : 'Zkratky',
			'past': 'po',
			'following':'následující',
			'previous' : 'předchozí',
			'prev-week' : 'týden',
			'prev-month' : 'měsíc',
			'prev-year' : 'rok',
			'next':'další',
			'next-week':'týden',
			'next-month':'měsíc',
			'next-year':'rok',
			'less-than' : 'Rozsah data by neměl být větší než %d dnů',
			'more-than' : 'Rozsah data by neměl být menší než %d dnů',
			'default-more' : 'Prosím zvolte rozsah data větší než %d dnů',
			'default-single' : 'Prosím zvolte datum',
			'default-less' : 'Prosím zvolte rozsah data menší než %d dnů',
			'default-range' : 'Prosím zvolte rozsah data mezi %d a %d dny',
			'default-default': 'Prosím zvolte rozsah data'
		},
		'en':
		{
			'selected': 'Selected:',
			'day':'Day',
			'days': 'Days',
			'apply': 'Close',
			'week-1' : 'mo',
			'week-2' : 'tu',
			'week-3' : 'we',
			'week-4' : 'th',
			'week-5' : 'fr',
			'week-6' : 'sa',
			'week-7' : 'su',
			'month-name': ['january','february','march','april','may','june','july','august','september','october','november','december'],
			'shortcuts' : 'Shortcuts',
			'custom-values': 'Custom Values',
			'past': 'Past',
			'following':'Following',
			'previous' : 'Previous',
			'prev-week' : 'Week',
			'prev-month' : 'Month',
			'prev-year' : 'Year',
			'next':'Next',
			'next-week':'Week',
			'next-month':'Month',
			'next-year':'Year',
			'less-than' : 'Date range should not be more than %d days',
			'more-than' : 'Date range should not be less than %d days',
			'default-more' : 'Please select a date range longer than %d days',
			'default-single' : 'Please select a date',
			'default-less' : 'Please select a date range less than %d days',
			'default-range' : 'Please select a date range between %d and %d days',
			'default-default': 'Please select a date range',
			'time':'Time',
			'hour':'Hour',
			'minute':'Minute'
		},
		'it':
		{
			'selected': 'Selezionati:',
			'day':'Giorno',
			'days': 'Giorni',
			'apply': 'Chiudi',
			'week-1' : 'lu',
			'week-2' : 'ma',
			'week-3' : 'me',
			'week-4' : 'gi',
			'week-5' : 've',
			'week-6' : 'sa',
			'week-7' : 'do',
			'month-name': ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],
			'shortcuts' : 'Scorciatoie',
			'past': 'Scorso',
			'following':'Successivo',
			'previous' : 'Precedente',
			'prev-week' : 'Settimana',
			'prev-month' : 'Mese',
			'prev-year' : 'Anno',
			'next':'Prossimo',
			'next-week':'Settimana',
			'next-month':'Mese',
			'next-year':'Anno',
			'less-than' : 'L\'intervallo non dev\'essere maggiore di %d giorni',
			'more-than' : 'L\'intervallo non dev\'essere minore di %d giorni',
			'default-more' : 'Seleziona un intervallo maggiore di %d giorni',
			'default-single' : 'Seleziona una data',
			'default-less' : 'Seleziona un intervallo minore di %d giorni',
			'default-range' : 'Seleziona un intervallo compreso tra i %d e i %d giorni',
			'default-default': 'Seleziona un intervallo di date'
		},
		'es':
		{
			'selected': 'Seleccionado:',
			'day':'Dia',
			'days': 'Dias',
			'apply': 'Cerrar',
			'week-1' : 'lu',
			'week-2' : 'ma',
			'week-3' : 'mi',
			'week-4' : 'ju',
			'week-5' : 'vi',
			'week-6' : 'sa',
			'week-7' : 'do',
			'month-name': ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
			'shortcuts' : 'Accesos directos',
			'past': 'Pasado',
			'following':'Siguiente',
			'previous' : 'Anterior',
			'prev-week' : 'Semana',
			'prev-month' : 'Mes',
			'prev-year' : 'Año',
			'next':'Siguiente',
			'next-week':'Semana',
			'next-month':'Mes',
			'next-year':'Año',
			'less-than' : 'El rango no deberia ser mayor de %d dias',
			'more-than' : 'El rango no deberia ser menor de %d dias',
			'default-more' : 'Por favor selecciona un rango mayor a %d dias',
			'default-single' : 'Por favor selecciona un dia',
			'default-less' : 'Por favor selecciona un rango menor a %d dias',
			'default-range' : 'Por favor selecciona un rango entre %d y %d dias',
			'default-default': 'Por favor selecciona un rango de fechas.'
		},
		'de':
		{
			'selected': 'Auswahl:',
			'day':'Tag',
			'days': 'Tage',
			'apply': 'Schließen',
			'week-1' : 'mo',
			'week-2' : 'di',
			'week-3' : 'mi',
			'week-4' : 'do',
			'week-5' : 'fr',
			'week-6' : 'sa',
			'week-7' : 'so',
			'month-name': ['januar','februar','märz','april','mai','juni','juli','august','september','oktober','november','dezember'],
			'shortcuts' : 'Schnellwahl',
			'past': 'Vorherige',
			'following':'Folgende',
			'previous' : 'Vorherige',
			'prev-week' : 'Woche',
			'prev-month' : 'Monat',
			'prev-year' : 'Jahr',
			'next':'Nächste',
			'next-week':'Woche',
			'next-month':'Monat',
			'next-year':'Jahr',
			'less-than' : 'Datumsbereich darf nicht größer sein als %d Tage',
			'more-than' : 'Datumsbereich darf nicht kleiner sein als %d Tage',
			'default-more' : 'Bitte mindestens %d Tage auswählen',
			'default-single' : 'Bitte ein Datum auswählen',
			'default-less' : 'Bitte weniger als %d Tage auswählen',
			'default-range' : 'Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen',
			'default-default': 'Bitte ein Start- und Enddatum auswählen'
		},
		'ru':
		{
			'selected': 'Выбрано:',
			'day': 'День',
			'days': 'Дней',
			'apply': 'Закрыть',
			'week-1': 'пн',
			'week-2': 'вт',
			'week-3': 'ср',
			'week-4': 'чт',
			'week-5': 'пт',
			'week-6': 'сб',
			'week-7': 'вс',
			'month-name': ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'],
			'shortcuts': 'Быстрый выбор',
			'past': 'Прошедшие',
			'following': 'Следующие',
			'previous': '&nbsp;&nbsp;&nbsp;',
			'prev-week': 'Неделя',
			'prev-month': 'Месяц',
			'prev-year': 'Год',
			'next': '&nbsp;&nbsp;&nbsp;',
			'next-week': 'Неделя',
			'next-month': 'Месяц',
			'next-year': 'Год',
			'less-than': 'Диапазон не может быть больше %d дней',
			'more-than': 'Диапазон не может быть меньше %d дней',
			'default-more': 'Пожалуйста выберите диапазон больше %d дней',
			'default-single': 'Пожалуйста выберите дату',
			'default-less': 'Пожалуйста выберите диапазон меньше %d дней',
			'default-range': 'Пожалуйста выберите диапазон между %d и %d днями',
			'default-default': 'Пожалуйста выберите диапазон'
		},
		'fr':
		{
			'selected': 'Sélection:',
			'day':'Jour',
			'days': 'Jours',
			'apply': 'Fermer',
			'week-1' : 'lu',
			'week-2' : 'ma',
			'week-3' : 'me',
			'week-4' : 'je',
			'week-5' : 've',
			'week-6' : 'sa',
			'week-7' : 'di',
			'month-name': ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
			'shortcuts' : 'Raccourcis',
			'past': 'Passé',
			'following':'Suivant',
			'previous' : 'Précédent',
			'prev-week' : 'Semaine',
			'prev-month' : 'Mois',
			'prev-year' : 'Année',
			'next':'Suivant',
			'next-week':'Semaine',
			'next-month':'Mois',
			'next-year':'Année',
			'less-than' : 'L\'intervalle ne doit pas être supérieure à %d jours',
			'more-than' : 'L\'intervalle ne doit pas être inférieure à %d jours',
			'default-more' : 'Merci de choisir une intervalle supérieure à %d jours',
			'default-single' : 'Merci de choisir une date',
			'default-less' : 'Merci de choisir une intervalle inférieure %d jours',
			'default-range' : 'Merci de choisir une intervalle comprise entre %d et %d jours',
			'default-default': 'Merci de choisir une date'
		},
		'hu':
		{
			'selected': 'Kiválasztva:',
			'day':'Nap',
			'days': 'Nap',
			'apply': 'Ok',
			'week-1' : 'h',
			'week-2' : 'k',
			'week-3' : 'sz',
			'week-4' : 'cs',
			'week-5' : 'p',
			'week-6' : 'sz',
			'week-7' : 'v',
			'month-name': ['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],
			'shortcuts' : 'Gyorsválasztó',
			'past': 'Múlt',
			'following':'Következő',
			'previous' : 'Előző',
			'prev-week' : 'Hét',
			'prev-month' : 'Hónap',
			'prev-year' : 'Év',
			'next':'Következő',
			'next-week':'Hét',
			'next-month':'Hónap',
			'next-year':'Év',
			'less-than' : 'A kiválasztás nem lehet több %d napnál',
			'more-than' : 'A kiválasztás nem lehet több %d napnál',
			'default-more' : 'Válassz ki egy időszakot ami hosszabb mint %d nap',
			'default-single' : 'Válassz egy napot',
			'default-less' : 'Válassz ki egy időszakot ami rövidebb mint %d nap',
			'default-range' : 'Válassz ki egy %d - %d nap hosszú időszakot',
			'default-default': 'Válassz ki egy időszakot'
		}
	};

	$.fn.dateRangePicker = function(opt)
	{
		if (!opt) opt = {};
		opt = $.extend(true,
		{
			autoClose: false,
			format: 'YYYY-MM-DD',
			separator: ' to ',
			language: 'auto',
			startOfWeek: 'monday',// or  sunday
			getValue: function()
			{
				return $(this).val();
			},
			setValue: function(s)
			{
				if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val())
				{
					$(this).val(s);
				}
			},
			startDate: false,
			endDate: false,
			time: {
				enabled: false
			},
			minDays: 0,
			maxDays: 0,
			showShortcuts: true,
			shortcuts:
			{
				//'prev-days': [1,3,5,7],
				'next-days': [3,5,7],
				//'prev' : ['week','month','year'],
				'next' : ['week','month','year']
			},
			customShortcuts : [],
			inline:false,
			container:'body',
			alwaysOpen:false,
			singleDate:false,
			lookBehind: false,
			batchMode: false,
			duration: 200,
			stickyMonths: false,
			dayDivAttrs: [],
			dayTdAttrs: [],
			applyBtnClass: '',
			singleMonth: 'auto',
			hoveringTooltip: function(days)
			{
				return days > 1 ? days + ' days' : '';
			},
			showTopbar: true
		},opt);

		opt.start = false;
		opt.end = false;

		//show one month on mobile devices
		if (opt.singleMonth == 'auto')
		{
			opt.singleMonth = $(window).width() < 480;
		}
		if (!opt.showTopbar) opt.autoClose = true;

		if (opt.startDate && typeof opt.startDate == 'string') opt.startDate = moment(opt.startDate,opt.format).toDate();
		if (opt.endDate && typeof opt.endDate == 'string') opt.endDate = moment(opt.endDate,opt.format).toDate();

		var langs = getLanguages();
		var box;
		var initiated = false;
		var self = this;
		var selfDom = $(self).get(0);
		var domChangeTimer;

		$(this).unbind('.datepicker').bind('click.datepicker',function(evt)
		{
			var isOpen = box.is(':visible');
			evt.stopPropagation();
			if(!isOpen) open(opt.duration);
		}).bind('change.datepicker', function(evt)
		{
			checkAndSetDefaultValue();
		}).bind('keyup.datepicker',function()
		{
			try{ clearTimeout(domChangeTimer); }catch(e){}
			domChangeTimer = setTimeout(function()
			{
				checkAndSetDefaultValue();
			},2000);
		});

		init_datepicker.call(this);

		if (opt.alwaysOpen)
		{
			open(0);
		}

		// expose some api
		$(this).data('dateRangePicker',
		{
			setDateRange : function(d1,d2,silent)
			{
				if (typeof d1 == 'string' && typeof d2 == 'string')
				{
					d1 = moment(d1,opt.format).toDate();
					d2 = moment(d2,opt.format).toDate();
				}
				setDateRange(d1,d2,silent);
			},
			clear: clearSelection,
			close: closeDatePicker,
			open: open,
			getDatePicker: getDatePicker,
			destroy: function()
			{
				$(self).unbind('.datepicker');
				$(self).data('dateRangePicker','');
				$(self).data('date-picker-opened',null);
				box.remove();
				$(window).unbind('resize.datepicker',calcPosition);
				$(document).unbind('click.datepicker',closeDatePicker);
			}
		});

		$(window).bind('resize.datepicker',calcPosition);

		return this;


		function init_datepicker()
		{
			var self = this;

			if ($(this).data('date-picker-opened'))
			{
				closeDatePicker();
				return;
			}
			$(this).data('date-picker-opened',true);


			box = createDom().hide();
			box.append('<div class="date-range-length-tip"></div>');
			box.delegate('.day', 'mouseleave', function()
			{
				box.find('.date-range-length-tip').hide();
			});

			$(opt.container).append(box);

			if (!opt.inline)
			{
				calcPosition();
			}
			else
			{
				box.addClass("inline-wrapper");
			}

			if (opt.alwaysOpen)
			{
				box.find('.apply-btn').hide();
			}

			var defaultTime = opt.defaultTime ? opt.defaultTime : new Date();
			if (opt.lookBehind)
			{
				if (opt.startDate && compare_month(defaultTime, opt.startDate) < 0 ) defaultTime = nextMonth(moment(opt.startDate).toDate());
				if (opt.endDate && compare_month(defaultTime,opt.endDate) > 0 ) defaultTime = moment(opt.endDate).toDate();

				showMonth(prevMonth(defaultTime),'month1');
				showMonth(defaultTime,'month2');

			} 
			else 
			{
				if (opt.startDate && compare_month(defaultTime,opt.startDate) < 0 ) defaultTime = moment(opt.startDate).toDate();
				if (opt.endDate && compare_month(nextMonth(defaultTime),opt.endDate) > 0 ) defaultTime = prevMonth(moment(opt.endDate).toDate());

				showMonth(defaultTime,'month1');
				showMonth(nextMonth(defaultTime),'month2');
			}

			if (opt.time.enabled) 
			{
				if ((opt.startDate && opt.endDate) || (opt.start && opt.end)) {
					showTime(moment(opt.start || opt.startDate).toDate(),'time1');
					showTime(moment(opt.end || opt.endDate).toDate(),'time2');
				} else {
					showTime(defaultTime,'time1');
					showTime(defaultTime,'time2');
				}
			}

			//showSelectedInfo();


			var defaultTopText = '';
			if (opt.singleDate)
				defaultTopText = lang('default-single');
			else if (opt.minDays && opt.maxDays)
				defaultTopText = lang('default-range');
			else if (opt.minDays)
				defaultTopText = lang('default-more');
			else if (opt.maxDays)
				defaultTopText = lang('default-less');
			else
				defaultTopText = lang('default-default');

			box.find('.default-top').html( defaultTopText.replace(/\%d/,opt.minDays).replace(/\%d/,opt.maxDays));
			if (opt.singleMonth) box.addClass('single-month');


			setTimeout(function()
			{
				var gapMargin = box.find('.gap').css('margin-left');
				if (gapMargin) gapMargin = parseInt(gapMargin);
				var w1 = box.find('.month1').width();
				var w2 = box.find('.gap').width() + ( gapMargin ? gapMargin*2 : 0 );
				var w3 = box.find('.month2').width();
				box.find('.month-wrapper').width(w1 + w2 + w3);
				initiated = true;
			},0);

			box.click(function(evt)
			{
				evt.stopPropagation();
			});

			//if user click other place of the webpage, close date range picker window 关闭
			$(document).bind('click.datepicker',function(evt)
			{
                if (box.is(':visible')) closeDatePicker();
                //清空年月选择控件
                $(".bigboom").hide();
                $(".newbox").hide();
                $(".week-name").show();
                $(".month1 tbody").show();
                $(".month2 tbody").show();
            });
            //何伟豪添加年点击事件

            //下一年事件序列
            box.find('.nextyears').click(function () {
                var isMonth2 = $(this).parents('table').hasClass('month2');//判断是否是第二个月
                var year = isMonth2 ? opt.month1 : opt.month2;//判断对月份做出更改 sao 操作
                var htmlinner = $(this).parents('table').find('.yearinput').val();
                var maxyear = year.getFullYear();//解决向后bug
                if (!isMonth2) {
                    if (maxyear > htmlinner) {
                        htmlinner++;
                    }
                }
                else {
                    htmlinner++;//如果不是第二个前一年不作限制
                }
                $(this).parents('table').find('.yearinput').val(htmlinner);

                gotoNextYear(this);
                
                var tmd = $('.footer').find('.fuck');
                
                tmd.val(opt.month1.getFullYear());
                
                if ($(".bigboom").length == 2) {//待解决Bug，出现两个选择年月时样式修复,此方法解决并不完美mark2
                    $(".month-wrapper").css("height", "198px");
                    $(".gap-lines").css("height", "210px");
                } else {
                    $(".month-wrapper").css("height", "auto");
                    if ($(".newbox ul li").length > 2) {
                        var sum = $(".fuck").val(opt.month1.getFullYear());//bug修复
                        $(".month-wrapper").css('height', '187px');
                    }
                };
                
            });
            function gotoNextYear(self) {//年月日至年月日下一年点击事件
                var isMonth2 = $(self).parents('table').hasClass('month2');
                var year = isMonth2 ? opt.month2 : opt.month1;
                //console.log(year);
                years = year.getFullYear();
                
                year.setFullYear(years);
                year = nextYear(year);
                if (!opt.singleDate && !isMonth2 && compare_month(year, opt.month2) >= 0 || isMonthOutOfBounds(year)) return;
                showYear(year, isMonth2 ? 'month2' : 'month1');
                showGap();
            }
            function nextYear(year) {
                return moment(year).add(1, 'years').toDate();
            }
            function prevyear(year) {
                return moment(year).add(-1, 'years').toDate();
            }
           

            //上一年点击事件序列
            box.find('.prevyears').click(function () {
                gotoPrevYear(this);
                var isMonth2 = $(this).parents('table').hasClass('month2');//判断是否是第二个月
                var year = isMonth2 ? opt.month1 : opt.month2;//判断对月份做出更改 sao 操作
                var htmlinner = $(this).parents('table').find('.yearinput').val();
                var minyear = year.getFullYear();//解决向前bug
                var hastwo = $(this).parent().parent().parent().parent().parent().find('table');
                    if (isMonth2) {
                        if (minyear < htmlinner) {
                            htmlinner--;
                        }
                    }
                    else {
                        htmlinner--;//如果不是第二个前一年不作限制
                        }
                var tmd = $('.footer').find('.fuck');

                tmd.val(opt.month1.getFullYear());
                $(this).parents('table').find('.yearinput').val(htmlinner);
                if ($(".bigboom").length == 2) {//待解决Bug，出现两个选择年月时样式修复,此方法解决并不完美mark2
                    $(".month-wrapper").css("height", "198px");
                    $(".gap-lines").css("height", "210px");
                } else {
                    $(".month-wrapper").css("height", "auto");
                    if ($(".newbox ul li").length > 2) {
                        var sum = $(".fuck").val(opt.month1.getFullYear());//bug修复
                        $(".month-wrapper").css('height', '187px');
                    }
                };
                //修改二
            });

            function gotoPrevYear(self) {//双年月日点击事件
                var isMonth2 = $(self).parents('table').hasClass('month2');
                var year = isMonth2 ? opt.month2 : opt.month1;
                years = year.getFullYear();
               
                year.setFullYear(years);
                year = prevyear(year);
                //if (isMonth2 && month.getFullYear()+''+month.getMonth() <= opt.month1.getFullYear()+''+opt.month1.getMonth()) return;
                if (isMonth2 && compare_month(year, opt.month1) <= 0 || isMonthOutOfBounds(year)) return;
                showYear(year, isMonth2 ? 'month2' : 'month1');
                showGap();
            }

            function showYear(date, month) {//自定义改变年份事件
              // console.log(date+"--"+month);//修改一
                date = moment(date).toDate();
                var monthName = nameMonth(date.getMonth());
                box.find('.' + month + ' .month-name').html(monthName + '' + date.getFullYear());//此处可扩展年和月单独点击事件
                box.find('.' + month + ' tbody').html(createMonthHTML(date));
                opt[month] = date;
            }

            //结束
			box.find('.next').click(function()
            {
                if ($(".bigboom").length == 2) {//待解决Bug，出现两个选择年月时样式修复,此方法解决并不完美mark2
                    $(".month-wrapper").css("height", "198px");
                    $(".gap-lines").css("height", "210px");
                } else {
                    $(".month-wrapper").css("height", "auto");
                    if ($(".newbox ul li").length > 2) {
                        var sum = $(".fuck").val(opt.month1.getFullYear());//bug修复
                        $(".month-wrapper").css('height', '187px');
                    }
                };
                var isMonth2 = $(this).parents('table').hasClass('month2');//判断是否是第二个月
                var year = isMonth2 ? opt.month2 : opt.month1;//判断对月份做出更改
                var index = year.getMonth() + 1;//获取月份作为Index
                $(this).parents('table').find('.yearinput').val(year.getFullYear());
                $('.footer').find('.yearinput').val(year.getFullYear());
                $(this).parents('table').find(`ul li:nth-child(${index})`).addClass('nowmonth').siblings().removeClass('nowmonth');
				if(!opt.stickyMonths && hasMonth2())
                    gotoNextMonth(this);
				else 
                    gotoNextMonth_stickily(this);
                
                
			});

			function gotoNextMonth(self) {
				var isMonth2 = $(self).parents('table').hasClass('month2');
                var month = isMonth2 ? opt.month2 : opt.month1;
				month = nextMonth(month);
				if (!opt.singleDate && !isMonth2 && compare_month(month,opt.month2) >= 0 || isMonthOutOfBounds(month)) return;
				showMonth(month,isMonth2 ? 'month2' : 'month1');
				showGap();
			}

			function gotoNextMonth_stickily(self) {
				var nextMonth1 = nextMonth(opt.month1);
				var nextMonth2 = nextMonth(opt.month2);
				if(isMonthOutOfBounds(nextMonth2)) return;
				if (!opt.singleDate && compare_month(nextMonth1,nextMonth2) >= 0) return;
				showMonth(nextMonth1, 'month1');
				showMonth(nextMonth2, 'month2');
				showSelectedDays();
			}


			box.find('.prev').click(function()
            {
                var isMonth2 = $(this).parents('table').hasClass('month2');//判断是否是第二个月
                var year = isMonth2 ? opt.month2 : opt.month1;//判断对月份做出更改
                var index = year.getMonth() + 1;//获取月份作为Index
                $('.footer').find(`ul li:nth-child(${index})`).addClass('nowmonth').siblings().removeClass('nowmonth');
                $(this).parents('table').find('.yearinput').val(year.getFullYear());
                $('.footer').find('.yearinput').val(year.getFullYear());
                $(this).parents('table').find(`ul li:nth-child(${index})`).addClass('nowmonth').siblings().removeClass('nowmonth');
                if ($(".bigboom").length == 2) {//待解决Bug，出现两个选择年月时样式修复,此方法解决并不完美mark2
                    console.log($('.newboxs').css('height'));
                    $(".month-wrapper").css("height", "198px");
                    $(".gap-lines").css("height", "210px");
                } else {
                    $(".month-wrapper").css("height", "auto");
                    if ($(".newbox ul li").length > 2) {
                        var sum = $(".fuck").val(opt.month1.getFullYear());//bug修复
                        $(".month-wrapper").css('height', '187px');
                    }
                };
				if(!opt.stickyMonths) gotoPrevMonth(this);
				else gotoPrevMonth_stickily(this);
			});

			function gotoPrevMonth(self) {
				var isMonth2 = $(self).parents('table').hasClass('month2');
				var month = isMonth2 ? opt.month2 : opt.month1;
				month = prevMonth(month);
				//if (isMonth2 && month.getFullYear()+''+month.getMonth() <= opt.month1.getFullYear()+''+opt.month1.getMonth()) return;
				if (isMonth2 && compare_month(month,opt.month1) <= 0 || isMonthOutOfBounds(month)) return;
				showMonth(month,isMonth2 ? 'month2' : 'month1');
				showGap();
			}

			function gotoPrevMonth_stickily(self) {
				var prevMonth1 = prevMonth(opt.month1);

				var prevMonth2 = prevMonth(opt.month2);

				if(isMonthOutOfBounds(prevMonth1)) return;
				if(!opt.singleDate && compare_month(prevMonth2,prevMonth1) <= 0) return;
				showMonth(prevMonth2, 'month2');
				showMonth(prevMonth1, 'month1');
				showSelectedDays();
			}

			box.delegate('.day','click', function(evt)
            {
				dayClicked($(this));
			});

			box.delegate('.day','mouseenter',function(evt)
			{
				dayHovering($(this));
			});

			box.attr('unselectable', 'on')
			.css('user-select', 'none')
			.bind('selectstart', function(e)
			{
				e.preventDefault(); return false;
			});

			box.find('.apply-btn').click(function()
			{
				closeDatePicker();
				var dateRange = getDateString(new Date(opt.start))+ opt.separator +getDateString(new Date(opt.end));
				$(self).trigger('datepicker-apply',
				{
					'value': dateRange,
					'date1' : new Date(opt.start),
					'date2' : new Date(opt.end)
				});
			});

			box.find('[custom]').click(function()
			{
				var valueName = $(this).attr('custom');
				opt.start = false;
				opt.end = false;
				box.find('.day.checked').removeClass('checked');
				opt.setValue.call(selfDom, valueName);
				checkSelectionValid();
				showSelectedInfo(true);
				showSelectedDays();
				if (opt.autoClose) closeDatePicker();
            });
            
            box.find('.month-name').click(function () {//何伟豪升级年月点击
   
                if ($(this).parent().next().find(".bigboom").css("display") == 'table-cell') {//存在就消失，不存在就往下走
                    $(this).parent().next().find(".bigboom").remove();
                    $(this).parent().next().next().show();
                    $(this).parent().parent().next().show();
                    return 
                }

                if ($(".month-wrapper .month2 td").length > 2) {//判断是否出现两个年月日
                   //return //暂时中止代码，根据情况修改
                    var widthclient = $(".month-wrapper").width();//获取双年月日容器宽度
                    var heightclient = $(".month-wrapper").height();//获取双年月日容器高度
                    var nowyear = new Date().getFullYear();
                    var nowmonth = new Date().getMonth() + 1;
                    var isMonth2 = $(this).parents('table').hasClass('month2');//判断是否是第二个月
                    var year = isMonth2 ? opt.month2 : opt.month1;//判断对月份做出更改
                    var inputyearhtml = year.getFullYear();//每次点开newboxs，保证对应的Input框对应当前年份
                    var valuemonth = year.getMonth()+1;//默认选中月份
                    $(this).parent().next().html(`
                        <td class="bigboom">
                            <div class="newboxs">
                                <a class="preyeara" style="left:20px;">&lt;&lt;</a>
                                <div class="newinputbox" style="display:block;"><input placeholder="输入年份" class="yearinput" value="${inputyearhtml}"/></div>
                                <a class="nextyeara">&gt;&gt;</a>
                                <div class="monthbox">
                                    <ul>
                                        <li>1月</li>
                                        <li>2月</li>
                                        <li>3月</li>
                                        <li>4月</li>
                                        <li>5月</li>
                                        <li>6月</li>
                                        <li>7月</li>
                                        <li>8月</li>
                                        <li>9月</li>
                                        <li>10月</li>
                                        <li>11月</li>
                                        <li>12月</li>
                                    <ul>
                                </div>
                            </div>
                        </td>  
                    `);
                    $(".yearinput").focus();//直接获取此类焦点无需判断mark
                    $(this).parent().parent().next().hide();//隐藏当前日
                    $(this).parent().parent().find(".week-name").hide();//隐藏当前周
                    $(this).parents('table').find(`.monthbox>ul>li:nth-child(${valuemonth})`).addClass("nowmonth");
                    $(".preyeara").click(function (e) {//前一年点击事件
                        //if ($(".bigboom").length == 2) {//bug修复
                        //    $(".month-wrapper").css("height", "198px");
                        //    $(".gap-lines").css("height", "198px");
                        //} else {
                        //    $(".month-wrapper").css("height", "auto");
                        //};
                        //var isMonth1 = $(this).parent().parent().parent().parent().parent().hasClass("month1");//判断是否是第一个年月日,bug待修复 
                        var htmlinner = $(this).next().find("input").val();//确保不影响其他输入框
                        var newtext = $(this).next().next().next().find("li[class='nowmonth']").html();
                        var isMonth2 = $(this).parents('table').hasClass('month2');//判断是否是第二个月
                        var year = isMonth2 ? opt.month1 : opt.month2;//判断对月份做出更改 sao 操作
                        var minmonth = year.getMonth();//解决向前bug
                        if (isMonth2) {
                            var minyaer = year.getFullYear();
                            if (minyaer < htmlinner) {
                                htmlinner--;
                            }
                        }
                        else {
                            htmlinner--;//如果不是第二个前一年不作限制
                        }
                        $(this).next().find("input").val(htmlinner);//及时作出反应
                        
                        var year = htmlinner;
                        var forme = $(this).next().next().next().find("li[class='nowmonth']").html();
                        if (forme == "1月") {
                            forme = "1"
                        }
                        if (forme == "2月") {
                            forme = "2"
                        }
                        if (forme == "3月") {
                            forme = "3"
                        }
                        if (forme == "4月") {
                            forme = "4"
                        }
                        if (forme == "5月") {
                            forme = "5"
                        }
                        if (forme == "6月") {
                            forme = "6"
                        }
                        if (forme == "7月") {
                            forme = "7"
                        }
                        if (forme == "8月") {
                            forme = "8"
                        }
                        if (forme == "9月") {
                            forme = "9"
                        }
                        if (forme == "10月") {
                            forme = "10"
                        }
                        if (forme == "11月") {
                            forme = "11"
                        }
                        if (forme == "12月") {
                            forme = "12"
                        }
                       
                        var params =new Date(year + '-' + forme + '-01');
                        
                        gotoYearMonth(this, params);//状态传递
                    })
                    $(".nextyeara").click(function (e) {//后一年点击事件
                        //if ($(".bigboom").length == 2) {//bug修复
                        //    $(".month-wrapper").css("height", "198px");
                        //    $(".gap-lines").css("height", "198px");
                        //} else {
                        //    $(".month-wrapper").css("height", "auto");
                        //};
                        var htmlinner = $(this).prev().find("input").val();//确保不影响其他输入框
                        var forme = $(this).next().find("li[class='nowmonth']").html();
                        var isMonth2 = $(this).parents('table').hasClass('month2');//判断是否是第二个月
                        var year = isMonth2 ? opt.month1 : opt.month2;//判断对月份做出更改 sao 操作
                        var maxyaer = year.getFullYear();
                        if (!isMonth2) {
                            if (maxyaer > htmlinner) {
                                htmlinner++;
                            }
                        } else {
                            htmlinner++; //如果是第二个月份的话不作限制
                        }
                       
                        
                        $(this).prev().find("input").val(htmlinner);

                        //判断月份转换格式
                        if (forme == "1月") {
                            forme = "1"
                        }
                        if (forme == "2月") {
                            forme = "2"
                        }
                        if (forme == "3月") {
                            forme = "3"
                        }
                        if (forme == "4月") {
                            forme = "4"
                        }
                        if (forme == "5月") {
                            forme = "5"
                        }
                        if (forme == "6月") {
                            forme = "6"
                        }
                        if (forme == "7月") {
                            forme = "7"
                        }
                        if (forme == "8月") {
                            forme = "8"
                        }
                        if (forme == "9月") {
                            forme = "9"
                        }
                        if (forme == "10月") {
                            forme = "10"
                        }
                        if (forme == "11月") {
                            forme = "11"
                        }
                        if (forme == "12月") {
                            forme = "12"
                        }
                        //$(this).parent().parent().parent().prev().find(".month-name").html(newtext + '' + htmlinner);
                        var parmas = new Date(htmlinner + '-' + forme + '-01');
                        gotoYearMonth(this, parmas);
                    })
                    let thaa = $(this);
                    //input失去焦点事件
                    //$('body').on('blur', '.yearinput', function () {
                    //    var year = $(this).val();
                    //    var reg = /^(19|20)\d{2}$/;
                    //    if (reg.test(year) == false) {
                    //        alert("请输入合理的年月");
                    //        var isMonth2 = $(this).parents('table').hasClass('month2');//判断是否是第二个月
                    //        var year = isMonth2 ? opt.month2 : opt.month1;//判断对月份做出更改 
                    //        $(this).val(year.getFullYear());//输入错误输入框文本重置为当前表的年份
                    //        return
                    //    }
                    //    var forme = $(this).parents('table').find("ul li[class='nowmonth']").html();
                    //    //格式转换
                    //    if (forme == "1月") {
                    //        forme = "1"
                    //    }
                    //    if (forme == "2月") {
                    //        forme = "2"
                    //    }
                    //    if (forme == "3月") {
                    //        forme = "3"
                    //    }
                    //    if (forme == "4月") {
                    //        forme = "4"
                    //    }
                    //    if (forme == "5月") {
                    //        forme = "5"
                    //    }
                    //    if (forme == "6月") {
                    //        forme = "6"
                    //    }
                    //    if (forme == "7月") {
                    //        forme = "7"
                    //    }
                    //    if (forme == "8月") {
                    //        forme = "8"
                    //    }
                    //    if (forme == "9月") {
                    //        forme = "9"
                    //    }
                    //    if (forme == "10月") {
                    //        forme = "10"
                    //    }
                    //    if (forme == "11月") {
                    //        forme = "11"
                    //    }
                    //    if (forme == "12月") {
                    //        forme = "12"
                    //    }
                    //    var params = new Date(year + '-' + forme + '-01');
                    //    gotoYearMonth(this, params);
                            
                    //})
                    //enter改变年份
                    $("body").on('keydown', '.yearinput', function (e) {
                        if (e.keyCode == 13) { 
                            var year = $(this).val();
                            var reg = /^\d{4}$/;
                            if (reg.test(year) == false) {
                                alert("请输入合理的年月");
                                var isMonth2 = $(this).parents('table').hasClass('month2');//判断是否是第二个月
                                var year = isMonth2 ? opt.month2 : opt.month1;//判断对月份做出更改 
                                $(this).val(year.getFullYear());//输入错误输入框文本重置为当前表的年份
                                return
                            }
                            //js处理及时变化
                            $(this).parents('table').find('.bigboom').hide();
                            $(this).parents('table').find('.week-name').show();
                            $(this).parents('table').find('tbody').show();
                            
                            //结束

                            var forme = $(this).parents('table').find("ul li[class='nowmonth']").html();
                            //格式转换
                            if (forme == "1月") {
                                forme = "1"
                            }
                            if (forme == "2月") {
                                forme = "2"
                            }
                            if (forme == "3月") {
                                forme = "3"
                            }
                            if (forme == "4月") {
                                forme = "4"
                            }
                            if (forme == "5月") {
                                forme = "5"
                            }
                            if (forme == "6月") {
                                forme = "6"
                            }
                            if (forme == "7月") {
                                forme = "7"
                            }
                            if (forme == "8月") {
                                forme = "8"
                            }
                            if (forme == "9月") {
                                forme = "9"
                            }
                            if (forme == "10月") {
                                forme = "10"
                            }
                            if (forme == "11月") {
                                forme = "11"
                            }
                            if (forme == "12月") {
                                forme = "12"
                            }
                            var yearm = new Date(year + '-' + forme + '-01');
                           gotoYearMonth(this, yearm);
                           
                        }
                    })
                    $(".monthbox ul li").click(function () {
                        $(this).addClass('nowmonth').siblings().removeClass('nowmonth');//改变默认月份
                        var forme = $(this).html();//最后传参的月份
                        var newtext = $(this).html();//最后传参的月份
                        var lastyear = $(this).parent().parent().prev().prev().find("input").val();//最后传参的年份
                        //格式转换
                        if (forme == "1月") {
                            forme = "1"
                        }
                        if (forme == "2月") {
                            forme = "2"
                        }
                        if (forme == "3月") {
                            forme = "3"
                        }
                        if (forme == "4月") {
                            forme = "4"
                        }
                        if (forme == "5月") {
                            forme = "5"
                        }
                        if (forme == "6月") {
                            forme = "6"
                        }
                        if (forme == "7月") {
                            forme = "7"
                        }
                        if (forme == "8月") {
                            forme = "8"
                        }
                        if (forme == "9月") {
                            forme = "9"
                        }
                        if (forme == "10月") {
                            forme = "10"
                        }
                        if (forme == "11月") {
                            forme = "11"
                        }
                        if (forme == "12月") {
                            forme = "12"
                        }
                        if (newtext == "1月") {//显示转换..为了好看
                            newtext = "一月 "
                        }
                        if (newtext == "2月") {
                            newtext = "二月 "
                        }
                        if (newtext == "3月") {
                            newtext = "三月 "
                        }
                        if (newtext == "4月") {
                            newtext = "四月 "
                        }
                        if (newtext == "5月") {
                            newtext = "五月 "
                        }
                        if (newtext == "6月") {
                            newtext = "六月 "
                        }
                        if (newtext == "7月") {
                            newtext = "七月 "
                        }
                        if (newtext == "8月") {
                            newtext = "八月 "
                        }
                        if (newtext == "9月") {
                            newtext = "九月 "
                        }
                        if (newtext == "10月") {
                            newtext = "十月 "
                        }
                        if (newtext == "11月") {
                            newtext = "十一月 "
                        }
                        if (newtext == "12月") {
                            newtext = "十二月 "
                        }
                        $(this).parent().parent().parent().parent().hide();//隐藏当前月份盒子
                        $(this).parent().parent().parent().parent().parent().next().show();//周盒子打开
                        $(this).parent().parent().parent().parent().parent().parent().next().show();//日盒子打开
                        $(this).parent().parent().parent().parent().parent().prev().find(".month-name").html(newtext + '' + lastyear);//待优化
                        //js及时更改html部分基本结束
                        var yearrr = lastyear + "-" + forme + '-' + '01';
                        var ate = new Date(yearrr);
                         //状态更改开始
                        //gotoYearMonth(this, lastyear, paramsmonth);//lastyear传入输入框的年份
                        gotoYearMonth(this, ate);//lastyear传入输入框的年份
                    });
                    //到哪一年
                    function gotoYearMonth(self, ate) {//年月日至年月日下一年点击事件
                        if ($(".bigboom").length == 2) {//bug修复
                            $(".month-wrapper").css("height", "198px");
                            $(".gap-lines").css("height", "210px");
                        } else {
                            $(".month-wrapper").css("height", "auto");
                        };
                        var isMonth2 = $(self).parents('table').hasClass('month2');//判断是否是第二个月
                        var year = isMonth2 ? opt.month2 : opt.month1;//判断对月份做出更改
                        year = ate;
                        years = year.getFullYear();
                       // console.log(years);
                        year.setFullYear(years);
                        year = howYear(year);
                        if (!opt.singleDate && !isMonth2 && compare_month(year, opt.month2) >= 0 || isMonthOutOfBounds(year)) return;
                        clickYear(year, isMonth2 ? 'month2' : 'month1');
                        showGap();
                    }
                    function howYear(year) {
                        return moment(year).add(0, 'years').toDate();
                    }
                    function clickYear(date, month) {//自定义改变年份事件
                        // console.log(date+"--"+month);//修改一
                        date = moment(date).toDate();
                        var monthName = nameMonth(date.getMonth());
                        box.find('.' + month + ' .month-name').html(monthName + '' + date.getFullYear());//此处可扩展年和月单独点击事件
                        box.find('.' + month + ' tbody').html(createMonthHTML(date));
                        opt[month] = date;
                    }

                    //双年月日控件开始
                }


                else {//单年月控件
                    $(".month-wrapper").css("height", "187px");
                    if ($('.newbox').find("ul li").length > 2) {
                        //$(this).parents('table').parent().prev().$('.newbox').remove();
                        $(this).parents().find('.tap-last>div').remove();
                        //$(this).parents('table').find('tbody').show();
                        $(this).parents('table').find('tbody').show();
                        $(this).parents('table').find('.footer').parent().next().show();
                        return //完成升级功能 2018-6-1 17:17 儿童节快乐
                    }
                    $(this).parents('table').find(".week-name").hide();
                    $(this).parents('table').find(".month1 tbody").hide();
                var nowyear = new Date().getFullYear();
                    var nowmonth = new Date().getMonth() + 1;
                    var isMonth2 = $(this).parents('table').hasClass('month2');//判断是否是第二个月
                    var year = opt.month1.getFullYear();//判断对月份做出更改 
                    var month = opt.month1.getMonth()+1;
                   
                    $(".month-wrapper").prev().html(`<div class="newbox" style="position:absolute;z-index:10100;top:90px;height:138px;border-bottom:0;">
                    <a class="preyear" style="font-weight:600;"><<</a>
                    <div class="newinputbox" style="display:block;text-align:center;"><input placeholder="输入年份" class="yearinput fuck" value="${year}"/></div>
                    <a class="nextyear" style="font-weight:600;">>></a>
                    <div class="monthbox" style="margin:3px 8px;">
                        <ul style="padding-left:3px;">
                            <li>1月</li>
                            <li>2月</li>
                            <li>3月</li>
                            <li>4月</li>
                            <li>5月</li>
                            <li>6月</li>
                            <li>7月</li>
                            <li>8月</li>
                            <li>9月</li>
                            <li>10月</li>
                            <li>11月</li>
                            <li>12月</li>
                        <ul>
                    </div>
                </div>`);
                $(".newinputbox input").focus();//强制获取焦点
                    $(`.monthbox>ul>li:nth-child(${month})`).addClass("nowmonth");//当前月改变背景色
                $(".yeartext").click(function () {
                    $(".yeartext").hide().next().show();
                    })
                    $("body").on("blur", ".yearinput", function () {//失去焦点事件
                        var reg = /^\d{4}$/;;
                        if (reg.test($(this).val()) == false) {
                            alert("请输入合理的年月");
                            $(this).val(year);
                            return
                        }
                    });
                $("body").on("keydown", ".yearinput", function (e) {//enter按下事件
                    if (e.keyCode == 13) {
                        var reg = /^\d{4}$/;;
                        if (reg.test($(this).val()) == false) {
                            alert("请输入合理的年月");
                            $(this).val(nowyear);
                            return
                        } else { 
                        $(".week-name").show();
                        $(".month1 tbody").show();
                        var htmlinner = $(this).val();
                        var years = htmlinner;
                        var forme = $(".monthbox>ul>li[class='nowmonth']").html();
                        //判断月份转换格式
                        if (forme == "1月") {
                            forme = "1"
                        }
                        if (forme == "2月") {
                            forme = "2"
                        }
                        if (forme == "3月") {
                            forme = "3"
                        }
                        if (forme == "4月") {
                            forme = "4"
                        }
                        if (forme == "5月") {
                            forme = "5"
                        }
                        if (forme == "6月") {
                            forme = "6"
                        }
                        if (forme == "7月") {
                            forme = "7"
                        }
                        if (forme == "8月") {
                            forme = "8"
                        }
                        if (forme == "9月") {
                            forme = "9"
                        }
                        if (forme == "10月") {
                            forme = "10"
                        }
                        if (forme == "11月") {
                            forme = "11"
                        }
                        if (forme == "12月") {
                            forme = "12"
                        }
                        var newtext = $(".monthbox>ul>li[class='nowmonth']").html();
                        if (newtext == "1月") {//显示转换..为了好看
                            newtext = "一月 "
                        }
                        if (newtext == "2月") {
                            newtext = "二月 "
                        }
                        if (newtext == "3月") {
                            newtext = "三月 "
                        }
                        if (newtext == "4月") {
                            newtext = "四月 "
                        }
                        if (newtext == "5月") {
                            newtext = "五月 "
                        }
                        if (newtext == "6月") {
                            newtext = "六月 "
                        }
                        if (newtext == "7月") {
                            newtext = "七月 "
                        }
                        if (newtext == "8月") {
                            newtext = "八月 "
                        }
                        if (newtext == "9月") {
                            newtext = "九月 "
                        }
                        if (newtext == "10月") {
                            newtext = "十月 "
                        }
                        if (newtext == "11月") {
                            newtext = "十一月 "
                        }
                        if (newtext == "12月") {
                            newtext = "十二月 "
                        }
                        box.delegate('.day', 'click', function (evt) {//混合处理,此方式会导致页面所有时间选择一起变化
                            dayClicked($(this), Date.parse(`${years}/${forme}/${tripday}`));//序列化保证点击后能在年月日传值成功并显示
                        });
                        $(".month-name").html(newtext + '' + htmlinner);
                        $(".newbox").hide();
                        }
                    }
                });
                $(".preyear").click(function (e) {//前一年点击事件
                    var htmlinner = $(".yearinput").val();
                    var newtext = $(".monthbox>ul>li[class='nowmonth']").html();
                    if (newtext == "1月") {//显示转换..为了好看
                        newtext = "一月 "
                    }
                    if (newtext == "2月") {
                        newtext = "二月 "
                    }
                    if (newtext == "3月") {
                        newtext = "三月 "
                    }
                    if (newtext == "4月") {
                        newtext = "四月 "
                    }
                    if (newtext == "5月") {
                        newtext = "五月 "
                    }
                    if (newtext == "6月") {
                        newtext = "六月 "
                    }
                    if (newtext == "7月") {
                        newtext = "七月 "
                    }
                    if (newtext == "8月") {
                        newtext = "八月 "
                    }
                    if (newtext == "9月") {
                        newtext = "九月 "
                    }
                    if (newtext == "10月") {
                        newtext = "十月 "
                    }
                    if (newtext == "11月") {
                        newtext = "十一月 "
                    }
                    if (newtext == "12月") {
                        newtext = "十二月 "
                    }
                   // console.log(htmlinner);
                    parseInt(htmlinner);
                    htmlinner--;
                    $(".yearinput").val(htmlinner);
                    $(".month-name").html(newtext + '' + htmlinner);
                })
                $(".nextyear").click(function (e) {//后一年点击事件
                    var htmlinner = $(".yearinput").val();
                    var newtext = $(".monthbox>ul>li[class='nowmonth']").html();
                    if (newtext == "1月") {//显示转换..为了好看
                        newtext = "一月 "
                    }
                    if (newtext == "2月") {
                        newtext = "二月 "
                    }
                    if (newtext == "3月") {
                        newtext = "三月 "
                    }
                    if (newtext == "4月") {
                        newtext = "四月 "
                    }
                    if (newtext == "5月") {
                        newtext = "五月 "
                    }
                    if (newtext == "6月") {
                        newtext = "六月 "
                    }
                    if (newtext == "7月") {
                        newtext = "七月 "
                    }
                    if (newtext == "8月") {
                        newtext = "八月 "
                    }
                    if (newtext == "9月") {
                        newtext = "九月 "
                    }
                    if (newtext == "10月") {
                        newtext = "十月 "
                    }
                    if (newtext == "11月") {
                        newtext = "十一月 "
                    }
                    if (newtext == "12月") {
                        newtext = "十二月 "
                    }
                    parseInt(htmlinner);
                    htmlinner++;
                    $(".yearinput").val(htmlinner);
                    $(".month-name").html(newtext + '' + htmlinner);
                })
                    $(".monthbox ul li").click(function () {
                        $(this).addClass('nowmonth').siblings().removeClass('nowmonth');
                        var reg = /^\d{4}$/;;
                    if (reg.test($(".yearinput").val()) == false) {
                        alert("请输入合理的年份");
                        $(".yearinput").val(nowyear);
                        $(".yeartext").html(nowyear);
                        return 
                    }
                    $(".week-name").show();
                    $(".month1 tbody").show();
                    var newtext = $(this).html();
                    var forme = $(this).html();
                    if (newtext == "1月") {//显示转换..为了好看
                        newtext = "一月 "
                    }
                    if (newtext == "2月") {
                        newtext = "二月 "
                    }
                    if (newtext == "3月") {
                        newtext = "三月 "
                    }
                    if (newtext == "4月") {
                        newtext = "四月 "
                    }
                    if (newtext == "5月") {
                        newtext = "五月 "
                    }
                    if (newtext == "6月") {
                        newtext = "六月 "
                    }
                    if (newtext == "7月") {
                        newtext = "七月 "
                    }
                    if (newtext == "8月") {
                        newtext = "八月 "
                    }
                    if (newtext == "9月") {
                        newtext = "九月 "
                    }
                    if (newtext == "10月") {
                        newtext = "十月 "
                    }
                    if (newtext == "11月") {
                        newtext = "十一月 "
                    }
                    if (newtext == "12月") {
                        newtext = "十二月 "
                    }
                    //判断月份转换格式
                    if (forme == "1月") {
                        forme = "1"
                    }
                    if (forme == "2月") {
                        forme = "2"
                    }
                    if (forme == "3月") {
                        forme = "3"
                    }
                    if (forme == "4月") {
                        forme = "4"
                    }
                    if (forme == "5月") {
                        forme = "5"
                    }
                    if (forme == "6月") {
                        forme = "6"
                    }
                    if (forme == "7月") {
                        forme = "7"
                    }
                    if (forme == "8月") {
                        forme = "8"
                    }
                    if (forme == "9月") {
                        forme = "9"
                    }
                    if (forme == "10月") {
                        forme = "10"
                    }
                    if (forme == "11月") {
                        forme = "11"
                    }
                    if (forme == "12月") {
                        forme = "12"
                    }
                    var htmlinner = $(".yearinput").val();
                    var years = htmlinner;
                    //console.log(tripday);
                    box.delegate('.day', 'click', function (evt) {//混合处理,此方式会导致页面所有时间选择一起变化
                        dayClicked($(this),Date.parse(`${years}/${forme}/${tripday}`));//序列化保证点击后能在年月日传值成功并显示
                    });
                    $(".month-name").html(newtext + '' + htmlinner);//月份点击赋值
                        $(".newbox").hide();//隐藏年月盒子
                        //单年月日控件升级结束
                    });
                }
            });
            //单年月日控件升级结束
			box.find('[shortcut]').click(function()
			{
				var shortcut = $(this).attr('shortcut');
				var end = new Date(),start = false;
				if (shortcut.indexOf('day') != -1)
				{
					var day = parseInt(shortcut.split(',',2)[1],10);
					start = new Date(new Date().getTime() + 86400000*day);
					end = new Date(end.getTime() + 86400000*(day>0?1:-1) );
				}
				else if (shortcut.indexOf('week')!= -1)
				{
					var dir = shortcut.indexOf('prev,') != -1 ? -1 : 1;
				
					if (dir == 1)
						var stopDay = opt.startOfWeek == 'monday' ? 1 : 0;
					else
						var stopDay = opt.startOfWeek == 'monday' ? 0 : 6;

					end = new Date(end.getTime() - 86400000);
					while(end.getDay() != stopDay) end = new Date(end.getTime() + dir*86400000);
					start = new Date(end.getTime() + dir*86400000*6);
				}
				else if (shortcut.indexOf('month') != -1)
				{
					var dir = shortcut.indexOf('prev,') != -1 ? -1 : 1;
					if (dir == 1)
						start = nextMonth(end);
					else
						start = prevMonth(end);
					start.setDate(1);
					end = nextMonth(start);
					end.setDate(1);
					end = new Date(end.getTime() - 86400000);
				}
				else if (shortcut.indexOf('year') != -1)
				{
					var dir = shortcut.indexOf('prev,') != -1 ? -1 : 1;
					start = new Date();
					start.setFullYear(end.getFullYear() + dir);
					start.setMonth(0);
					start.setDate(1);
					end.setFullYear(end.getFullYear() + dir);
					end.setMonth(11);
					end.setDate(31);
				}
				else if (shortcut == 'custom')
				{
					var name = $(this).html();
					if (opt.customShortcuts && opt.customShortcuts.length > 0)
					{
						for(var i=0;i<opt.customShortcuts.length;i++)
						{
							var sh = opt.customShortcuts[i];
							if (sh.name == name)
							{
								var data = [];
								// try
								// {
									data = sh['dates'].call();
								//}catch(e){}
								if (data && data.length == 2)
								{
									start = data[0];
									end = data[1];
								}

								// if only one date is specified then just move calendars there
								// move calendars to show this date's month and next months
								if (data && data.length == 1)
								{
									movetodate = data[0];
									showMonth(movetodate,'month1');
									showMonth(nextMonth(movetodate),'month2');
									showGap();
								}

								break;
							}
						}
					}
				}
				if (start && end)
				{
					setDateRange(start,end);
					checkSelectionValid();
				}
			});

			box.find(".time1 input[type=range]").bind("change mousemove", function (e) {
				var target = e.target,
					hour = target.name == "hour" ? $(target).val().replace(/^(\d{1})$/, "0$1") : undefined,
					min = target.name == "minute" ? $(target).val().replace(/^(\d{1})$/, "0$1") : undefined;
				setTime("time1", hour, min);
			});

			box.find(".time2 input[type=range]").bind("change mousemove", function (e) {
				var target = e.target,
					hour = target.name == "hour" ? $(target).val().replace(/^(\d{1})$/, "0$1") : undefined,
					min = target.name == "minute" ? $(target).val().replace(/^(\d{1})$/, "0$1") : undefined;
				setTime("time2", hour, min);
			});

		}


		function calcPosition()
		{
			if (!opt.inline)
			{
				var offset = $(self).offset();
						if ($(opt.container).css("position") == "relative")
						{
							var containerOffset = $(opt.container).offset();
							box.css(
							{
								top: offset.top - containerOffset.top + $(self).outerHeight() + 4,
								//left: offset.left - containerOffset.left 6.4何伟豪更改控件下拉left位置
                                    left: offset.left
							});
						}
						else
						{
							if (offset.left < 460) //left to right
							{
								box.css(
								{
									top: offset.top+$(self).outerHeight() + parseInt($('body').css('border-top') || 0,10 ),
									left: offset.left
								});
							}
							else
							{
								box.css(
								{
									top: offset.top+$(self).outerHeight() + parseInt($('body').css('border-top') || 0,10 ),
									//left: offset.left + $(self).width() - box.width() - 16
                                        left: offset.left
								});
							}
						}
			}
		}

		// Return the date picker wrapper element
		function getDatePicker()
		{
			return box;
		}

		function open(animationTime)
		{
			calcPosition();
			checkAndSetDefaultValue();
			box.slideDown(animationTime, function(){
				$(self).trigger('datepicker-opened', {relatedTarget: box});
			});
			$(self).trigger('datepicker-open', {relatedTarget: box});
			showGap();
		}

		function checkAndSetDefaultValue()
		{
			var __default_string = opt.getValue.call(selfDom);
			var defaults = __default_string ? __default_string.split( opt.separator ) : '';

			if (defaults && ((defaults.length==1 && opt.singleDate) || defaults.length>=2))
			{
				var ___format = opt.format;
				if (___format.match(/Do/))
				{

					___format = ___format.replace(/Do/,'D');
					defaults[0] = defaults[0].replace(/(\d+)(th|nd|st)/,'$1');
					if(defaults.length >= 2){
						defaults[1] = defaults[1].replace(/(\d+)(th|nd|st)/,'$1');
					}
				}
				// set initiated  to avoid triggerring datepicker-change event
				initiated = false;
				if(defaults.length >= 2){
					setDateRange(moment(defaults[0], ___format, moment.locale(opt.language)).toDate(),moment(defaults[1], ___format, moment.locale(opt.language)).toDate());
				}
				else if(defaults.length==1 && opt.singleDate){
					setSingleDate(moment(defaults[0], ___format, moment.locale(opt.language)).toDate());
				}

				initiated = true;
			}
		}


		function renderTime (name, date) {
			box.find("." + name + " input[type=range].hour-range").val(moment(date).hours());
			box.find("." + name + " input[type=range].minute-range").val(moment(date).minutes());
			setTime(name, moment(date).format("HH"), moment(date).format("mm"));
		}

		function changeTime (name, date) {
			opt[name] = parseInt(
				moment(parseInt(date))
					.startOf('day')
					.add(moment(opt[name + "Time"]).format("HH"), 'h')
					.add(moment(opt[name + "Time"]).format("mm"), 'm').valueOf()
				);
		}

		function swapTime () {
			renderTime("time1", opt.start);
			renderTime("time2", opt.end);
		}

		function setTime (name, hour, minute) {
			hour && (box.find("." + name + " .hour-val").text(hour));
			minute && (box.find("." + name + " .minute-val").text(minute));
			switch (name) {
				case "time1":
					if (opt.start) {
						setRange("start", moment(opt.start));
					}
					setRange("startTime", moment(opt.startTime || moment().valueOf()));
					break;
				case "time2":
					if (opt.end) {
						setRange("end", moment(opt.end));
					}
					setRange("endTime", moment(opt.endTime || moment().valueOf()));
					break;
			}
			function setRange(name, timePoint) {
				var h = timePoint.format("HH"),
					m = timePoint.format("mm");
				opt[name] = timePoint
					.startOf('day')
					.add(hour || h, "h")
					.add(minute || m, "m")
					.valueOf();
			}
			checkSelectionValid();
			showSelectedInfo();
			showSelectedDays();
		}

		function clearSelection()
		{
			opt.start = false;
			opt.end = false;
			box.find('.day.checked').removeClass('checked');
			box.find('.day.last-date-selected').removeClass('last-date-selected');
			box.find('.day.first-date-selected').removeClass('first-date-selected');
			opt.setValue.call(selfDom, '');
			checkSelectionValid();
			showSelectedInfo();
			showSelectedDays();
		}

		function handleStart(time)
		{
			var r = time;
			if  (opt.batchMode === 'week-range') 
			{
				if (opt.startOfWeek === 'monday') 
				{
					r = moment(parseInt(time)).startOf('isoweek').valueOf();
				} 
				else 
				{
					r = moment(parseInt(time)).startOf('week').valueOf();
				}
			}
			else if (opt.batchMode === 'month-range') 
			{
				r = moment(parseInt(time)).startOf('month').valueOf();
			}
			return r;
		}

		function handleEnd(time)
		{
			var r = time;
			if  (opt.batchMode === 'week-range') 
			{
				if (opt.startOfWeek === 'monday') 
				{
					r = moment(parseInt(time)).endOf('isoweek').valueOf();
				} 
				else 
				{
					r = moment(parseInt(time)).endOf('week').valueOf();
				}
			} 
			else if (opt.batchMode === 'month') 
			{
				r = moment(parseInt(time)).endOf('month').valueOf();
			}
			return r;
		}

        var tripday;//利用js声明提前，让月份点击时可以获取到该参数
		function dayClicked(day,ne)
        {
            var time;
            if (ne) {
                time = ne
                //console.log(ne)
            } else {
                time = day.attr('time');
            }
            tripday = day.html();
			if (day.hasClass('invalid')) return;
			day.addClass('checked');
			if ( opt.singleDate )
			{
				opt.start = time;
				opt.end = false;
				if (opt.time.enabled) {
					changeTime("start", opt.start);
				}
			}
			else if  (opt.batchMode === 'week')
			{
				if (opt.startOfWeek === 'monday') {
					opt.start = moment(parseInt(time)).startOf('isoweek').valueOf();
					opt.end = moment(parseInt(time)).endOf('isoweek').valueOf();
				} else {
					opt.end = moment(parseInt(time)).endOf('week').valueOf();
					opt.start = moment(parseInt(time)).startOf('week').valueOf();
				}
			}
			else if (opt.batchMode === 'month')
			{
				opt.start = moment(parseInt(time)).startOf('month').valueOf();
				opt.end = moment(parseInt(time)).endOf('month').valueOf();
			}
			else if ((opt.start && opt.end) || (!opt.start && !opt.end) )
			{
				opt.start = handleStart(time);
				opt.end = false;
				if (opt.time.enabled) {
					changeTime("start", opt.start);
				}
			}
			else if (opt.start)
			{
				opt.end = handleEnd(time);
				if (opt.time.enabled) {
					changeTime("end", opt.end);
				}
			}

			if (!opt.singleDate && opt.start && opt.end && opt.start > opt.end)
			{
				var tmp = opt.end;
				opt.end = handleEnd(opt.start);
				opt.start = handleStart(tmp);
				if (opt.time.enabled) {
					swapTime();
				}
			}

			opt.start = parseInt(opt.start);
			opt.end = parseInt(opt.end);

			clearHovering();
			if (opt.start && !opt.end)
			{
				$(self).trigger('datepicker-first-date-selected',
				{
					'date1' : new Date(opt.start)
				});
				dayHovering(day);
			}
			updateSelectableRange(day);

			checkSelectionValid();
			showSelectedInfo();
			showSelectedDays();
			autoclose();
		}

		function updateSelectableRange(day)
		{
			box.find('.day.invalid.tmp').removeClass('tmp').removeClass('invalid').addClass('valid');
			if (opt.start && !opt.end)
			{
				var time = parseInt(day.attr('time'));
				var firstInvalid = 0, lastInvalid = 143403840000000; //a really large number
				box.find('.day.toMonth.invalid').not('.tmp').each(function()
				{
					var _time = parseInt($(this).attr('time'));
					if (_time > time && _time < lastInvalid)
					{
						lastInvalid = _time;
					}
					else if (_time < time && _time > firstInvalid)
					{
						firstInvalid = _time;
					}
				});
				box.find('.day.toMonth.valid').each(function()
				{
					var time = parseInt($(this).attr('time'));
					if ( time <= firstInvalid || time >= lastInvalid)
					{
						$(this).addClass('invalid').addClass('tmp').removeClass('valid');
					}
				});
			}
			else
			{

			}
		}

		function dayHovering(day)
		{
			if (day.hasClass('invalid')) return;
			var hoverTime = parseInt(day.attr('time'));

			if (opt.singleDate)
			{
				box.find('.day.hovering').removeClass('hovering');
				day.addClass('hovering');
			}
			else
			{
				box.find('.day').each(function()
				{
					var time = parseInt($(this).attr('time')),
						start = opt.start,
						end = opt.end;

					if ( time == hoverTime )
					{
						$(this).addClass('hovering');
					}
					else
					{
						$(this).removeClass('hovering');
					}

					if (
						( opt.start && !opt.end )
						&&
						(
							( opt.start < time && hoverTime >= time )
							||
							( opt.start > time && hoverTime <= time )
						)
					)
					{
						$(this).addClass('hovering');
					}
					else
					{
						$(this).removeClass('hovering');
					}
				});

				if (opt.start && !opt.end)
				{
					var days = Math.abs( Math.round( (hoverTime - opt.start) /86400000)) + 1;
					var tooltip = '';
					if (opt.hoveringTooltip)
					{
						if (typeof opt.hoveringTooltip == 'function')
						{
							tooltip = opt.hoveringTooltip(days);
						}
						else if (opt.hoveringTooltip === true && days > 1)
						{
							tooltip = days + ' days';
						}
					}
					if (tooltip)
					{
						var posDay = day.offset();
						var posBox = box.offset();

						var _left = posDay.left - posBox.left;
						var _top = posDay.top - posBox.top;
						_left += day.width()/2;
							

						var $tip = box.find('.date-range-length-tip');
						var w = $tip.css({'visibility':'hidden', 'display':'none'}).html(tooltip).width();
						var h = $tip.height();
						_left -= w/2;
						_top -= h;
						$tip.css({left:_left, top:_top, display:'block','visibility':'visible'});
					}
					else
					{
						box.find('.date-range-length-tip').hide();
					}
				}
			}
		}

		function clearHovering()
		{
			box.find('.day.hovering').removeClass('hovering');
			box.find('.date-range-length-tip').hide();
		}

		function autoclose () {
			if (opt.singleDate === true) {
				if (initiated && opt.start )
				{
					if (opt.autoClose) closeDatePicker();
				}
			} else {
				if (initiated && opt.start && opt.end)
				{
					if (opt.autoClose) closeDatePicker();
				}
			}
		}

		function checkSelectionValid()
		{
			var days = Math.ceil( (opt.end - opt.start) / 86400000 ) + 1;
			if (opt.singleDate) { // Validate if only start is there
				if (opt.start && !opt.end)
					box.find('.drp_top-bar').removeClass('error').addClass('normal');
				else
					box.find('.drp_top-bar').removeClass('error').removeClass('normal');
			}
			else if ( opt.maxDays && days > opt.maxDays)
			{
				opt.start = false;
				opt.end = false;
				box.find('.day').removeClass('checked');
				box.find('.drp_top-bar').removeClass('normal').addClass('error').find('.error-top').html( lang('less-than').replace('%d',opt.maxDays) );
			}
			else if ( opt.minDays && days < opt.minDays)
			{
				opt.start = false;
				opt.end = false;
				box.find('.day').removeClass('checked');
				box.find('.drp_top-bar').removeClass('normal').addClass('error').find('.error-top').html( lang('more-than').replace('%d',opt.minDays) );
			}
			else
			{
				if (opt.start || opt.end)
					box.find('.drp_top-bar').removeClass('error').addClass('normal');
				else
					box.find('.drp_top-bar').removeClass('error').removeClass('normal');
			}

			if ( (opt.singleDate && opt.start && !opt.end) || (!opt.singleDate && opt.start && opt.end) )
			{
				box.find('.apply-btn').removeClass('disabled');
			}
			else
			{
				box.find('.apply-btn').addClass('disabled');
			}

			if (opt.batchMode)
			{
				if ( (opt.start && opt.startDate && compare_day(opt.start, opt.startDate) < 0)
					|| (opt.end && opt.endDate && compare_day(opt.end, opt.endDate) > 0)  )
				{
					opt.start = false;
					opt.end = false;
					box.find('.day').removeClass('checked');
				}
			}
		}

		function showSelectedInfo(forceValid,silent)
		{
			box.find('.start-day').html('...');
			box.find('.end-day').html('...');
			box.find('.selected-days').hide();
			if (opt.start)
			{
				box.find('.start-day').html(getDateString(new Date(parseInt(opt.start))));
			}
			if (opt.end)
			{
				box.find('.end-day').html(getDateString(new Date(parseInt(opt.end))));
			}

			if (opt.start && opt.singleDate)
			{
				box.find('.apply-btn').removeClass('disabled');
				var dateRange = getDateString(new Date(opt.start));
				opt.setValue.call(selfDom, dateRange, getDateString(new Date(opt.start)), getDateString(new Date(opt.end)));

				if (initiated)
				{
					$(self).trigger('datepicker-change',
					{
						'value': dateRange,
						'date1' : new Date(opt.start)
					});
				}
			}
			else if (opt.start && opt.end)
			{
				box.find('.selected-days').show().find('.selected-days-num').html(countDays(opt.end, opt.start)+1);
				box.find('.apply-btn').removeClass('disabled');
				var dateRange = getDateString(new Date(opt.start))+ opt.separator +getDateString(new Date(opt.end));
				opt.setValue.call(selfDom,dateRange, getDateString(new Date(opt.start)), getDateString(new Date(opt.end)));
				if (initiated && !silent)
				{
					$(self).trigger('datepicker-change',
					{
						'value': dateRange,
						'date1' : new Date(opt.start),
						'date2' : new Date(opt.end)
					});
				}
			}
			else if (forceValid)
			{
				box.find('.apply-btn').removeClass('disabled');
			}
			else
			{
				box.find('.apply-btn').addClass('disabled');
			}
		}

		function countDays(start,end)
		{
			var t1 = moment(start), t2 = moment(end);
			var day1 = t1.year() * 365 + t1.dayOfYear();
			var day2 = t2.year() * 365 + t2.dayOfYear();
			return Math.abs( day1 - day2 );
		}

		function setDateRange(date1,date2,silent)
		{
			if (date1.getTime() > date2.getTime())
			{
				var tmp = date2;
				date2 = date1;
				date1 = tmp;
				tmp = null;
			}
			var valid = true;
			if (opt.startDate && compare_day(date1,opt.startDate) < 0) valid = false;
			if (opt.endDate && compare_day(date2,opt.endDate) > 0) valid = false;
			if (!valid)
			{
				showMonth(opt.startDate,'month1');
				showMonth(nextMonth(opt.startDate),'month2');
				showGap();
				return;
			}

			opt.start = date1.getTime();
			opt.end = date2.getTime();

			if (opt.time.enabled) 
			{
				renderTime("time1", date1);
				renderTime("time2", date2);
			}

			if (opt.stickyMonths || (compare_day(date1,date2) > 0 && compare_month(date1,date2) == 0))
			{
				if (opt.lookBehind) {
					date1 = prevMonth(date2);
				} else {
					date2 = nextMonth(date1);
				}
			}

			if(opt.stickyMonths && compare_month(date2,opt.endDate) > 0) {
				date1 = prevMonth(date1);
				date2 = prevMonth(date2);
			}

			if (!opt.stickyMonths) {
				if (compare_month(date1,date2) == 0)
				{
					if (opt.lookBehind) {
						date1 = prevMonth(date2);
					} else {
						date2 = nextMonth(date1);
					}
				}
			}

			showMonth(date1,'month1');
			showMonth(date2,'month2');
			showGap();
			checkSelectionValid();
			showSelectedInfo(false,silent);
			autoclose();
		}

		function setSingleDate(date1)
		{

			var valid = true;
			if (opt.startDate && compare_day(date1,opt.startDate) < 0) valid = false;
			if (opt.endDate && compare_day(date1,opt.endDate) > 0) valid = false;
			if (!valid)
			{
				showMonth(opt.startDate,'month1');

				//showGap();
				return;
			}

			opt.start = date1.getTime();


			if (opt.time.enabled) {
				renderTime("time1", date1);

			}
			showMonth(date1,'month1');
			//showMonth(date2,'month2');
			showGap();
			showSelectedInfo();
			autoclose();
		}

		function showSelectedDays()
		{
			if (!opt.start && !opt.end) return;
			box.find('.day').each(function()
			{
				var time = parseInt($(this).attr('time')),
					start = opt.start,
					end = opt.end;
				if (opt.time.enabled) {
					time = moment(time).startOf('day').valueOf();
					start = moment(start || moment().valueOf()).startOf('day').valueOf();
					end = moment(end || moment().valueOf()).startOf('day').valueOf();
				}
				if (
					(opt.start && opt.end && end >= time && start <= time )
					|| ( opt.start && !opt.end && moment(start).format('YYYY-MM-DD') == moment(time).format('YYYY-MM-DD') )
				)
				{
					$(this).addClass('checked');
				}
				else
				{
					$(this).removeClass('checked');
				}

				//add first-date-selected class name to the first date selected
				if ( opt.start && moment(start).format('YYYY-MM-DD') == moment(time).format('YYYY-MM-DD') )
				{
					$(this).addClass('first-date-selected');
				}
				else
				{
					$(this).removeClass('first-date-selected');
				}
				//add last-date-selected
				if ( opt.end && moment(end).format('YYYY-MM-DD') == moment(time).format('YYYY-MM-DD') )
				{
					$(this).addClass('last-date-selected');
				}
				else
				{
					$(this).removeClass('last-date-selected');
				}
			});
		}

		function showMonth(date,month)
		{
			date = moment(date).toDate();
			var monthName = nameMonth(date.getMonth());
			box.find('.'+month+' .month-name').html(monthName+''+date.getFullYear());//此处可扩展年和月单独点击事件
			box.find('.'+month+' tbody').html(createMonthHTML(date));
			opt[month] = date;
		}

		function showTime(date,name)
		{
			box.find('.' + name).append(getTimeHTML());
			renderTime(name, date);
		}

		function nameMonth(m)
		{
			return lang('month-name')[m];
		}

		function getDateString(d)
		{
			return moment(d).format(opt.format);
		}

		function showGap()
		{
			showSelectedDays();
			var m1 = parseInt(moment(opt.month1).format('YYYYMM'));
			var m2 = parseInt(moment(opt.month2).format('YYYYMM'));
			var p = Math.abs(m1 - m2);
			var shouldShow = (p > 1 && p !=89);
			if (shouldShow)
			{
				box.find('.gap').css('visibility','visible');
			}
			else
				box.find('.gap').css('visibility','hidden');
			var h1 = box.find('table.month1').height();
			var h2 = box.find('table.month2').height();
			box.find('.gap').height(Math.max(h1,h2)+10);
		}

		function closeDatePicker()
		{
			if (opt.alwaysOpen) return;
			$(box).slideUp(opt.duration,function()
			{
				$(self).data('date-picker-opened',false);
				$(self).trigger('datepicker-closed', {relatedTarget: box});
			});
			//$(document).unbind('.datepicker');
			$(self).trigger('datepicker-close', {relatedTarget: box});
		}

		function compare_month(m1,m2)
		{
			var p = parseInt(moment(m1).format('YYYYMM')) - parseInt(moment(m2).format('YYYYMM'));
			if (p > 0 ) return 1;
			if (p == 0) return 0;
			return -1;
		}

		function compare_day(m1,m2)
		{
			var p = parseInt(moment(m1).format('YYYYMMDD')) - parseInt(moment(m2).format('YYYYMMDD'));
			if (p > 0 ) return 1;
			if (p == 0) return 0;
			return -1;
		}

		function nextMonth(month)
		{
			return moment(month).add(1, 'months').toDate();
		}

		function prevMonth(month)
		{
			return moment(month).add(-1, 'months').toDate();
		}

		function getTimeHTML()
		{
			return '<div>\
						<span>'+lang('Time')+': <span class="hour-val">00</span>:<span class="minute-val">00</span></span>\
					</div>\
					<div class="hour">\
						<label>'+lang('Hour')+': <input type="range" class="hour-range" name="hour" min="0" max="23"></label>\
					</div>\
					<div class="minute">\
						<label>'+lang('Minute')+': <input type="range" class="minute-range" name="minute" min="0" max="59"></label>\
					</div>';
		}

		function createDom()
		{
			var html = '<div class="date-picker-wrapper';
			if ( opt.extraClass ) html += ' '+opt.extraClass+' ';
			if ( opt.singleDate ) html += ' single-date ';
			if ( !opt.showShortcuts ) html += ' no-shortcuts ';
			if ( !opt.showTopbar ) html += ' no-topbar ';
			html += '">';

			if (opt.showTopbar)
			{
				html += '<div class="drp_top-bar">';

				if (opt.customTopBar)
				{
					if (typeof opt.customTopBar == 'function') opt.customTopBar = opt.customTopBar();
					html += '<div class="custom-top">'+opt.customTopBar+'</div>';
				}
				else
				{
					html += '<div class="normal-top">\
							<span style="color:#333">'+lang('selected')+' </span> <b class="start-day">...</b>';
					if ( ! opt.singleDate ) {
						html += ' <span class="separator-day">'+opt.separator+'</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> '+lang('days')+')</i>'
					}
					html += '</div>';
				}

			
				html += '<div class="error-top">error</div>\
						<div class="default-top">default</div>\
						<input type="button" class="apply-btn disabled'+ getApplyBtnClass() +'" value="'+lang('apply')+'" />';
				html += '</div>'
			}
            html+=`<div class="tap-last"></div>`
			html += '<div class="month-wrapper">'
                + '<table class="month1" cellspacing="0" border="0" cellpadding="0"><thead><tr class="caption"><th style="width:27px;"><span class="prevyears prevye">&lt;&lt;</span><span class="prev">&lt;</span></th><th colspan="5" class="month-name">January, 2011</th><th style="width:27px;">' + (opt.singleDate || !opt.stickyMonths ? '<span class="next">&gt;</span><span class="nextyears nextye">&gt;&gt;</span>': '') + '</th><tr></tr></tr><tr class="week-name">'+getWeekHead()+'</thead><tbody></tbody></table>';

			if ( hasMonth2() ) 
			{
				html += '<div class="gap">'+getGapHTML()+'</div>'
                    + '<table class="month2" cellspacing="0" border="0" cellpadding="0"><thead><tr class="caption"><th style="width:27px;">' + (!opt.stickyMonths ? '<span class="prevyears prevyear">&lt;&lt;</span><span class="prev">&lt;</span>' : '') + '</th><th colspan="5" class="month-name">January, 2011</th><th style="width:27px;"><span class="next">&gt;</span><span class="nextyears nextyea">&gt;&gt;</span></th><tr></tr></tr><tr class="week-name">'+getWeekHead()+'</thead><tbody></tbody></table>'
			}
				//+'</div>'
			html +=	'<div style="clear:both;height:0;font-size:0;"></div>'
				+'<div class="time">'
				+'<div class="time1"></div>'
			if ( ! opt.singleDate ) {
				html += '<div class="time2"></div>'
			}
			html += '</div>'
				+'<div style="clear:both;height:0;font-size:0;"></div>'
				+'</div>';

			html += '<div class="footer">';
			if (opt.showShortcuts)
			{
				html += '<div class="shortcuts"><b>'+lang('shortcuts')+'</b>';

				var data = opt.shortcuts;
				if (data)
				{
					if (data['prev-days'] && data['prev-days'].length > 0)
					{
						html += '&nbsp;<span class="prev-days">'+lang('past');
						for(var i=0;i<data['prev-days'].length; i++)
						{
							var name = data['prev-days'][i];
							name += (data['prev-days'][i] > 1) ? lang('days') : lang('day');
							html += ' <a href="javascript:;" shortcut="day,-'+data['prev-days'][i]+'">'+name+'</a>';
						}
						html+='</span>';
					}

					if (data['next-days'] && data['next-days'].length > 0)
					{
						html += '&nbsp;<span class="next-days">'+lang('following');
						for(var i=0;i<data['next-days'].length; i++)
						{
							var name = data['next-days'][i];
							name += (data['next-days'][i] > 1) ? lang('days') : lang('day');
							html += ' <a href="javascript:;" shortcut="day,'+data['next-days'][i]+'">'+name+'</a>';
						}
						html+= '</span>';
					}

					if (data['prev'] && data['prev'].length > 0)
					{
						html += '&nbsp;<span class="prev-buttons">'+lang('previous');
						for(var i=0;i<data['prev'].length; i++)
						{
							var name = lang('prev-'+data['prev'][i]);
							html += ' <a href="javascript:;" shortcut="prev,'+data['prev'][i]+'">'+name+'</a>';
						}
						html+='</span>';
					}

					if (data['next'] && data['next'].length > 0)
					{
						html += '&nbsp;<span class="next-buttons">'+lang('next');
						for(var i=0;i<data['next'].length; i++)
						{
							var name = lang('next-'+data['next'][i]);
							html += ' <a href="javascript:;" shortcut="next,'+data['next'][i]+'">'+name+'</a>';
						}
						html+='</span>';
					}
				}

				if (opt.customShortcuts)
				{
					for(var i=0;i<opt.customShortcuts.length; i++)
					{
						var sh = opt.customShortcuts[i];
						html+= '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">'+sh.name+'</a></span>';
					}
				}
				html += '</div>';
			}

			// Add Custom Values Dom
			if (opt.showCustomValues)
			{
				html += '<div class="customValues"><b>'+(opt.customValueLabel || lang('custom-values'))+'</b>';

				if (opt.customValues)
				{
					for(var i=0;i<opt.customValues.length;i++)
					{
						var val = opt.customValues[i];
							html+= '&nbsp;<span class="custom-value"><a href="javascript:;" custom="'+ val.value+'">'+val.name+'</a></span>';
					}
				}
			}

			html += '</div></div>';


			return $(html);
		}

		function getApplyBtnClass()
		{
			klass = ''
			if (opt.autoClose === true) {
				klass += ' hide';
			}
			if (opt.applyBtnClass !== '') {
				klass += ' ' + opt.applyBtnClass;
			}
			return klass;
		}

		function getWeekHead()
		{
			if (opt.startOfWeek == 'monday')
			{
				return '<th>'+lang('week-1')+'</th>\
					<th>'+lang('week-2')+'</th>\
					<th>'+lang('week-3')+'</th>\
					<th>'+lang('week-4')+'</th>\
					<th>'+lang('week-5')+'</th>\
					<th>'+lang('week-6')+'</th>\
					<th>'+lang('week-7')+'</th>';
			}
			else
			{
				return '<th>'+lang('week-7')+'</th>\
					<th>'+lang('week-1')+'</th>\
					<th>'+lang('week-2')+'</th>\
					<th>'+lang('week-3')+'</th>\
					<th>'+lang('week-4')+'</th>\
					<th>'+lang('week-5')+'</th>\
					<th>'+lang('week-6')+'</th>';
			}
		}

		function isMonthOutOfBounds(month)
		{
			var month = moment(month);
			if (opt.startDate && month.endOf('month').isBefore(opt.startDate))
			{
				return true;
			}
			if (opt.endDate && month.startOf('month').isAfter(opt.endDate))
			{
				return true;
			}
			return false;
		}

		function getGapHTML()
		{
			var html = ['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'];
			for(var i=0;i<20;i++)
			{
				html.push('<div class="gap-line">\
					<div class="gap-1"></div>\
					<div class="gap-2"></div>\
					<div class="gap-3"></div>\
				</div>');
			}
			html.push('</div>');
			return html.join('');
		}

		function hasMonth2()
		{
			return ( !opt.singleDate && !opt.singleMonth);
		}

		function attributesCallbacks(initialObject,callbacksArray,today)
		{
			var resultObject = jQuery.extend(true, {}, initialObject);

			jQuery.each(callbacksArray, function(cbAttrIndex, cbAttr){
				var addAttributes = cbAttr(today);
				for(var attr in addAttributes){
					if(resultObject.hasOwnProperty(attr)){
						resultObject[attr] += addAttributes[attr];
					}else{
						resultObject[attr] = addAttributes[attr];
					}
				}
			});

			attrString = '';

			for(var attr in resultObject){
				if(resultObject.hasOwnProperty(attr)){
					attrString += attr + '="' + resultObject[attr] + '" ';
				}
			}

			return attrString;
		}

		function createMonthHTML(d)
		{
			var days = [];
			d.setDate(1);
			var lastMonth = new Date(d.getTime() - 86400000);
			var now = new Date();

			var dayOfWeek = d.getDay();
			if((dayOfWeek == 0) && (opt.startOfWeek == 'monday')) {
				// add one week
				dayOfWeek = 7;
			}

			if (dayOfWeek > 0)
			{
				for (var i = dayOfWeek; i > 0; i--)
				{
					var day = new Date(d.getTime() - 86400000*i);
					var valid = true;
					if (opt.startDate && compare_day(day,opt.startDate) < 0) valid = false;
					if (opt.endDate && compare_day(day,opt.endDate) > 0) valid = false;
					days.push({type:'lastMonth',day: day.getDate(),time:day.getTime(), valid:valid });
				}
			}
			var toMonth = d.getMonth();
			for(var i=0; i<40; i++)
			{
				var today = moment(d).add(i, 'days').toDate();
				var valid = true;
				if (opt.startDate && compare_day(today,opt.startDate) < 0) valid = false;
				if (opt.endDate && compare_day(today,opt.endDate) > 0) valid = false;
				days.push({type: today.getMonth() == toMonth ? 'toMonth' : 'nextMonth',day: today.getDate(),time:today.getTime(), valid:valid });
			}
			var html = [];
			for(var week=0; week<6; week++)
			{
				if (days[week*7].type == 'nextMonth') break;
				html.push('<tr>');
				for(var day = 0; day<7; day++)
				{
					var _day = (opt.startOfWeek == 'monday') ? day+1 : day;
					var today = days[week*7+_day];
					var highlightToday = moment(today.time).format('L') == moment(now).format('L');
					today.extraClass = '';
					today.tooltip = '';
					if(opt.beforeShowDay && typeof opt.beforeShowDay == 'function')
					{
						var _r = opt.beforeShowDay(moment(today.time).toDate());
						today.valid = _r[0];
						today.extraClass = _r[1] || '';
						today.tooltip = _r[2] || '';
						if (today.tooltip != '') today.extraClass += ' has-tooltip ';
					}

					todayDivAttr = {
						time: today.time,
						title: today.tooltip,
						'class': 'day '+today.type+' '+today.extraClass+' '+(today.valid ? 'valid' : 'invalid')+' '+(highlightToday?'real-today':'')
					};

					html.push('<td ' + attributesCallbacks({},opt.dayTdAttrs,today) + '><div ' + attributesCallbacks(todayDivAttr,opt.dayDivAttrs,today) + '>'+showDayHTML(today.time, today.day)+'</div></td>');
				}
				html.push('</tr>');
			}
			return html.join('');
		}

		function showDayHTML(time, date)
		{
			if (opt.showDateFilter && typeof opt.showDateFilter == 'function') return opt.showDateFilter(time, date);
			return date;
		}

		function getLanguages()
		{
			if (opt.language == 'auto')
			{
				var language = navigator.language ? navigator.language : navigator.browserLanguage;
				if (!language) return $.dateRangePickerLanguages['en'];
				var language = language.toLowerCase();
				for(var key in $.dateRangePickerLanguages)
				{
					if (language.indexOf(key) != -1)
					{
						return $.dateRangePickerLanguages[key];
					}
				}
				return $.dateRangePickerLanguages['en'];
			}
			else if ( opt.language && opt.language in $.dateRangePickerLanguages)
			{
				return $.dateRangePickerLanguages[opt.language];
			}
			else
			{
				return $.dateRangePickerLanguages['en'];
			}
		}

		function lang(t)
		{
			var _t = t.toLowerCase();
			return (t in langs) ? langs[t] : ( _t in langs) ? langs[_t] : t;
		}


	};
}));
