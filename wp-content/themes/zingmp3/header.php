<!DOCTYPE html>
<html lang="vi">

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta property="fb:app_id" content="346193702147647" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="google-site-verification" content="P5DkQ2snxl62jA_Bhe49Kgv4Gxq9fsloWRK-yt6DM1E" />
    <meta name="geo.region" content="VN-SG" />
    <meta name="geo.placename" content="11" />
    <meta name="geo.position" content="10.763945;106.656201" />
    <meta name="ICBM" content="10.763945, 106.656201" />
    <link rel="icon" type="image/png" href="<?php bloginfo('template_url') ?>/img/favicon.png">
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/style-8.3.6.css" media="all" type="text/css" />
    <!--[if lt IE 9]> <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/ie.css" media="all" type="text/css" /> <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script> <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script> <script src="http://static.mp3.zdn.vn/skins/zmp3-v4.1/js/jquery-1.11.1.min.js"></script> <![endif]-->
    <!--[if gte IE 9]> <script src="<?php bloginfo('template_url') ?>/js/jquery-2.1.0.min.js"></script> <![endif]-->
    <!--[if !IE]>-->
    <script src="<?php bloginfo('template_url') ?>/js/jquery-2.1.0.min.js"></script>
    <!--<![endif]-->
    <script src="<?php bloginfo('template_url') ?>/js/jquery.mousewheel.min.js"></script>
    <script src="<?php bloginfo('template_url') ?>/js/jquery.cookie.js"></script>
    <title>Nghe và tải nhạc chất lượng cao | Zing Mp3</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="title" content="Nghe và tải nhạc chất lượng cao | Zing Mp3" />
    <meta name="description" content="Dịch vụ nhạc trực tuyến hàng đầu Việt Nam, đầy đủ album, MV tất cả các thể loại, cập nhật liên tục ca khúc hot chất lượng cao hay nhất hiện nay." />
    <meta name="keywords" content="zing mp3, nghe nhac, tim nhac, tai nhac, chat luong cao, hot nhat, hay nhat, download, upload, album, ca si, the loai, nhac cho, nhac chuong" />
    <meta name="ROBOTS" content="index, follow" />
    <meta http-equiv="refresh" content="900" />
    <link rel="canonical" href="index.html" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="" />
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/slick.css" media="all" type="text/css" />
    <style type="text/css">
        .slide .slide-body .slide-direction .slick-active span {
            background: #ae4ad9;
        }
    </style>
    <meta property="og:updated_time" content="1474468272" />
    <script type="text/javascript">
        document.domain = 'localhost';
        var MP3 = {
            VIP: false,
            ACCOUNT_ID: 0,
            ZALO_ID: 0,
            ACCOUNT_NAME: '',
            DISPLAY_NAME: '',
            GENRE_ID: parseInt(''),
            BANNER_OFF: parseInt(' 0 '),
            MP3_URL: 'http://mp3.zing.vn',
            IMG_URL: 'http://image.mp3.zdn.vn',
            INTER_URL: 'http://interaction.mp3.zing.vn',
            LOG_URL: 'http://log.mp3.zing.vn/',
            LOG_INFO: '',
            IEVERSION: 9,
            LABEL_URL: 'http://label.mp3.zing.vn/'
        };
        window.___gcfg = {
            lang: 'vi'
        };
        var mp3ContentID = '';
        var pathParts = location.pathname.split('index.html');
        if (pathParts.length > 1) switch (pathParts[1]) {
            case 'bai-hat':
                mp3ContentID = 's_{{idnum}}';
                break;
            case 'video-clip':
                mp3ContentID = 'v_{{idnum}}';
                break;
        }

        function setCookie(c_name, value, exdays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            var c_value = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString()) + ";domain=.zing.vn;path=/";
            document.cookie = c_name + "=" + c_value;
        }

        function getCookie(c_name) {
            var i, x, y, cks = document.cookie.split(";");
            for (i = 0; i < cks.length; i++) {
                x = cks[i].substr(0, cks[i].indexOf("="));
                y = cks[i].substr(cks[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == c_name) {
                    return unescape(y);
                }
            }
            return null;
        }
        var Browser = {
            getFlashVersion: function() {
                var version = 0,
                    flash;
                if (window.ActiveXObject) {
                    try {
                        flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        if (flash) {
                            var v = flash.GetVariable("$version");
                            if (v) {
                                v = v.split(" ")[1].split(",");
                                version = parseInt(v[0], 10) + "." + parseInt(v[1], 10);
                            }
                        }
                    } catch (e) {}
                } else if (navigator.plugins && navigator.mimeTypes.length > 0) {
                    flash = navigator.plugins["Shockwave Flash"];
                    if (flash) {
                        version = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1");
                    }
                } /*Converts to a number*/
                return version * 1;
            },
            detectBrowser: function() {
                var type = 0;
                var userAgent = navigator.userAgent;
                switch (true) { /* Symbian 3 */
                    case (userAgent.search(/Symbian\/3/gi) > -1):
                        type = 2;
                        break; /* midp compatible */
                    case userAgent.indexOf('MIDP') > -1:
                        type = 1;
                        break; /* opera mini */
                    case userAgent.indexOf('Opera Mini') > -1:
                        type = 1;
                        break; /* MAUI */
                    case userAgent.indexOf('MAUI') > -1:
                        type = 1;
                        break; /* mobile safari */
                    case userAgent.search(/Mobile.*Safari/gi) > -1:
                        MP3.IS_PC = 0;
                        MP3.BANNER_OFF = 1;
                        if (userAgent.indexOf('iPad') > -1) {
                            setCookie('IS_NOT_PC', '1', 2);
                            type = 0;
                        } else {
                            type = 2;
                        }
                        break; /* Iphone */
                    case userAgent.indexOf('iPhone') > -1:
                        type = 2;
                        break; /* Ipod */
                    case userAgent.indexOf('iPod') > -1:
                        type = 2;
                        break; /* Android */
                    case userAgent.indexOf('Android') > -1:
                        type = 2;
                        break; /* Samsung */
                    case userAgent.indexOf('samsung') > -1:
                        type = 1;
                        break; /* LG */
                    case userAgent.indexOf('LG') > -1:
                        type = 1;
                        break; /* Motorola */
                    case userAgent.indexOf('MOT') > -1:
                        type = 1;
                        break; /* Motorola */
                    case userAgent.indexOf('MOTOROLA') > -1:
                        type = 1;
                        break; /* BlackBerry compatible */
                    case userAgent.indexOf('BlackBerry') > -1:
                        type = 1;
                        break; /* Nokia */
                    case userAgent.indexOf('Nokia') > -1:
                        /* IEMobile compatible */
                    case userAgent.indexOf('IEMobile') > -1:
                        type = 1;
                        if (userAgent.indexOf('Windows Phone') > -1) {
                            type = 2;
                        }
                        break; /* HTC */
                    case userAgent.indexOf('HTC') > -1:
                        type = 1;
                        break;
                    default:
                        type = 0;
                        break;
                }
                return type;
            }
        };
        var type = Browser.detectBrowser();
        if (type > 0) {
            MP3.IS_PC = 0;
            MP3.BANNER_OFF = 1;
        }
        if (MP3.IS_PC) {
            document.write('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1" />');
            if (!MP3.ACCOUNT_ID) {
                setCookie('BANNER_OFF', '');
            }
        }
        var domain, uri = '';
        uri = location.pathname + location.search;
        if (type > 0 && (getCookie('IS_MOBILE') == null || parseInt(getCookie('IS_MOBILE')) != 0)) {
            switch (type) {
                case 2:
                    domain = 'http://m.mp3.zing.vn/';
                    break;
                case 1:
                    domain = 'http://mp3.m.zing.vn/redirect?url=http://mp3.zing.vn';
                    break;
            }
            location.href = domain + uri;
        }(function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-1571128-33', 'auto');
        ga('send', 'pageview');
        ga('create', 'UA-1571128-18', 'auto', {
            'name': 'mp3'
        });
        var _zap = _zap || [];
        _zap.push(["_setAccount", "ZA-42973056503497"]);
        (function(e, t, n, r, a, o, c) {
            e[a + "_q"] = e[a + "_q"] || [], e[a] = e[a] || {};
            var s = ["trackPageview", "trackEvent", "getVisitorID"];
            for (i in s) e[a][s[i]] = function(t) {
                return function() {
                    e[a + "_q"].push([t, arguments])
                }
            }(s[i]);
            o = t.createElement(n), c = t.getElementsByTagName(n)[0], o.async = 1, o.src = r + "?" + Math.floor((new Date).getTime() / 86400000), c.parentNode.insertBefore(o, c)
        })(window, document, "script", "http://stc.za.zaloapp.com/v3/za.js", "ZA");
        (function(d, s, id, a) {
            window.appIdConfig = a;
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://stc.oauth.zaloapp.com/js/zalo-web-sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'zalo-web-jssdk', '2588341350709494368'));

        function loadScript(path, callback) {
            var url = path.indexOf('http') > -1 ? path : 'http://static.mp3.zdn.vn/skins/zmp3-v4.1' + path;
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.charset = "utf-8";
            if (typeof callback == 'function') {
                if (script.readyState) {
                    script.onreadystatechange = function() {
                        if (script.readyState == "loaded" || script.readyState == "complete") {
                            script.onreadystatechange = null;
                            callback();
                        }
                    };
                } else {
                    script.onload = function() {
                        callback();
                    };
                }
            }
            script.src = url;
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    </script>
</head>
<!--[if IE 6]><body class="ie6 ie"><![endif]-->
<!--[if IE 7]><body class="ie7 ie"><![endif]-->
<!--[if IE 8]><body class="ie8 ie"><![endif]-->
<!--[if gte IE 9]><body class="ie9 ie"><![endif]-->
<!--[if !IE]>-->

<body>
    <!--<![endif]-->
    <header>
        <div class="container group">
            <div class="logo">
                <a href="index.html" title="Zing MP3 - Đỉnh cao âm nhạc">
					<?php
						$header_logo = get_field( 'header_logo', 'option' );
						if( !empty( $header_logo ) ) : 
					?>
					<img src="<?php echo $header_logo[ 'url' ] ?>" alt="<?php echo get_bloginfo( 'name' ) . ' - ' . get_bloginfo( 'description' ) ?>" />
					<?php
						else :
							echo get_bloginfo( 'name' ) . '<sub>' . get_bloginfo( 'description' ) . '</sub>';
						endif;
					?>
				</a>
            </div>
			<div id="sug" class="section-search">
				<form action="/tim-kiem/bai-hat.html" method="get" class="search"> <input type="text" name="q" placeholder="Nhập nội dung cần tìm" class="input-txt" autocomplete="off"> <span class="input-btn"> <button type="submit" class="zicon btn hide-text">Tìm kiếm</button> </span></form>
				<div id="sugResult" class="fn-result suggestion-2 none">
					<ul>
						<li id="sugArtist" class="none">
							<div class="title-row"><span class="ics zicon ics-artist"></span>Nghệ Sĩ</div>
							<ul class="fn-list">
								<li id="tplSugArtist" class="none fn-item">
									<a class="fn-link" href="#">
										<div class="meta-search ellipsis"> <img class="fn-thumb"> <span class="fn-name fn-highlight"></span></div>
									</a>
								</li>
							</ul>
						</li>
						<li id="sugSong" class="none">
							<div class="title-row"><span class="ics zicon ics-song"></span>Bài Hát</div>
							<ul class="fn-list">
								<li id="tplSugSong" class="none fn-item">
									<a class="fn-link track-log" href="#">
										<div class="meta-search">
											<p class="ellipsis pad-top-5"> <span class="fn-name fn-highlight"></span> <br> <span class="fn-artist fn-highlight txt-info"></span></p>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li id="sugAlbum" class="none">
							<div class="title-row"><span class="ics zicon ics-album"></span>Album</div>
							<ul class="fn-list">
								<li id="tplSugAlbum" class="none fn-item">
									<a class="fn-link track-log" href="#">
										<div class="meta-search"> <img class="fn-thumb">
											<p class="ellipsis pad-top-5"> <span class="fn-name fn-highlight"></span> <br> <span class="fn-artist fn-highlight txt-info"></span></p>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li id="sugVideo" class="none">
							<div class="title-row"><span class="ics zicon ics-video"></span>Video</div>
							<ul class="fn-list">
								<li id="tplSugVideo" class="none fn-item">
									<a class="fn-link track-log" href="#">
										<div class="meta-search"> <img class="fn-thumb">
											<p class="ellipsis pad-top-5"> <span class="fn-name fn-highlight"></span> <br> <span class="fn-artist fn-highlight txt-info"></span></p>
										</div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
<!--			<ul class="jumper-link pull-left">
				<li class="active"><a href="http://mp3.zing.vn/" title="Zing MP3" target="_blank" rel="nofollow">MP3</a></li>
				<li><a href="http://news.zing.vn" title="Zing News" target="_blank" rel="nofollow">NEWS</a></li>
				<li><a href="http://tv.zing.vn" title="Zing TV" target="_blank" rel="nofollow">TV</a></li>
			</ul>
			<div class="nav-account pull-right none fn-guestbox">
				<a class="fn-login" href="#" title="Đăng nhập">Đăng nhập</a>
				<span class="slash">/</span>
				<a href="https://id.zing.vn/v2/register?pid=10" title="Đăng ký">Đăng ký</a>
			</div>-->
			<div id="userBox" class="user-section pull-right none fn-userbox">
				<a href="#" class="zicon icon-vip fn-vip none"></a>
				<div class="user-jump"> <img height="20px" class="fn-thumb" src=""> <a href="#" class="name-log">Cá nhân <i class="icon-s-arrow"></i></a>
					<div class="tip-dropdown"> <span class="arr-top"></span>
						<div class="avt-header">
							<a class="fn-profile" href="http://me.zing.vn/u/" rel="nofollow" title="Trang cá nhân"><img height="80px" class="fn-thumb" src=""></a>
						</div>
						<ul>
							<li><a class="fn-profile" target="_blank" rel="nofollow" href="http://me.zing.vn/u/" title="Trang cá nhân"><i class="zicon icon-human-round"></i>Trang cá nhân</a></li>
							<li><a class="fn-edit" target="_blank" rel="nofollow" href="http://me.zing.vn/pe/profile?_src=m" title="Cập nhật thông tin"><i class="zicon icon-pen"></i>Cập nhật thông tin</a></li>
							<li><a class="fn-privacy" target="_blank" rel="nofollow" href="http://me.zing.vn/pe/privacy?_src=m" title="Cài đặt riêng tư"><i class="zicon icon-tools"></i>Cài đặt riêng tư</a></li>
							<li><a class="fn-pwd" target="_blank" rel="nofollow" href="http://id.zing.vn/home/index.10.html" title="Đổi mật khẩu"><i class="zicon icon-lock"></i>Đổi mật khẩu</a></li>
							<li><a class="fn-logout" href="http://id.mp3.zing.vn/logout?f=&cburl=&key=" title="Thoát"><i class="zicon icon-door"></i>Thoát</a></li>
						</ul> <a href="http://mp3.zing.vn/vip" target="_blank" class="btn-upgrade-vip fn-viprequire" data-step="2">Nâng cấp VIP</a></div>
				</div>
			</div>
        </div>
    </header>
    <nav>
        <div class="container">
            <ul class="main-nav group">
                <li class="home"><a title="Zing MP3" href="index.html">Zing MP3</a></li>
                <li class="home-logo">
                    <a title="Trang chủ" href="index.html"><img src="http://static.mp3.zdn.vn/skins/zmp3-v4.1/images/logo-gray.png" alt="Zing MP3"></a>
                </li>
                <li class="active"><a class="fn-login" href="mymusic/myplaylist.html" title="Nhạc cá nhân">Nhạc Cá Nhân</a>
                    <div class="megamenu submenu menu-col-1 fn-userbox">
                        <div class="subcol menu-col-1-narrow">
                            <div class="subinner_item">
                                <ul>
                                    <li><a href="u/index.html" title="Kênh của tôi" class="fn-my-channel">Kênh của tôi</a></li>
                                    <li><a href="mymusic/myplaylist.html" title="Playlist cá nhân">Playlist Cá Nhân</a></li>
                                    <li><a href="mymusic/favorites-song.html" title="Yêu thích">Yêu Thích</a></li>
                                    <li><a href="mymusic/following-artist.html" title="Quan tâm">Quan tâm</a></li>
                                    <li><a href="mymusic/upload.html" title="Nhạc upload">Nhạc Upload</a></li>
                                    <li><a href="mymusic/history.html" title="Lịch sử">Lịch Sử</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="separation"></li>
                <li><a title="Chủ đề" href="chu-de.html">Chủ Đề</a>
                    <div class="megamenu submenu menu-col-4">
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a href="chu-de.html#cap-nhat-hang-tuan" title="Cập nhật hàng tuần">Hàng tuần</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Nhạc Hot Việt" href="chu-de/nhac-viet-hot/IWZ9Z0C8.html">Nhạc Hot Việt</a></li>
                                    <li><a title="Nhạc Việt Mới" href="chu-de/nhac-viet-moi/IWZ9Z0ED.html">Nhạc Việt Mới</a></li>
                                    <li><a title="Nhạc Hot Âu Mỹ" href="chu-de/nhac-au-my-hot/IWZ9Z0CB.html">Nhạc Hot Âu Mỹ</a></li>
                                    <li><a title="Nhạc Hot Hàn" href="chu-de/nhac-han-hot/IWZ9Z0CA.html">Nhạc Hot Hàn</a></li>
                                    <li><a title="Nhạc Hot Rap Việt" href="chu-de/rap-viet-hot/IWZ9Z0CC.html">Nhạc Hot Rap Việt</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a href="chu-de.html#bat-hu-theo-thoi-gian" title="Bất hủ theo thời gian">Bất hủ</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Nhạc Việt Bất Hủ" href="chu-de/Nhac-Viet-Bat-Hu/IWZ9ZI79.html">Nhạc Việt Bất Hủ</a></li>
                                    <li><a title="Nhạc Âu Mỹ Bất Hủ" href="chu-de/Nhac-Bat-Hu/IWZ9ZI77.html">Nhạc Âu Mỹ Bất Hủ</a></li>
                                    <li><a title="Tuyệt Phẩm Song Ca" href="chu-de/tuyet-pham-song-ca/IWZ9ZIOU.html">Tuyệt Phẩm Song Ca</a></li>
                                    <li><a title="Nhạc Không Lời" href="chu-de/nhac-hoa-tau/IWZ9ZIOI.html">Nhạc Không Lời</a></li>
                                    <li><a title="Lossless Chọn Lọc" href="chu-de/nhac-lossless/IWZ9ZI60.html">Lossless Chọn Lọc</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a href="chu-de.html#am-nhac-theo-tam-trang" title="Âm nhạc theo tâm trạng">Tâm trạng</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Âm Nhạc Thư Giãn" href="chu-de/relax-music/IWZ9ZIU0.html">Âm Nhạc Thư Giãn</a></li>
                                    <li><a title="Âm Nhạc Mùa Hè" href="chu-de/Am-Nhac-He-2016/IWZ9ZI98.html">Âm Nhạc Mùa Hè</a></li>
                                    <li><a title="Những Ngày Mưa" href="chu-de/Nhung-Ngay-Mua/IWZ9ZIZD.html">Những Ngày Mưa</a></li>
                                    <li><a title="Music For Love" href="chu-de/music-for-love/IWZ9Z0D9.html">Music For Love</a></li>
                                    <li><a title="Sad Songs - F.A" href="chu-de/sad-songs/IWZ9ZIUI.html">Sad Songs - F.A</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a title="Hòa Tấu" href="chu-de.html#am-nhac-theo-su-kien">Sự kiện</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Giải Thưởng Âm Nhạc - Sự Kiện Nổi Bật" href="chu-de/giai-thuong-am-nhac/IWZ9ZIO9.html">Sự Kiện Âm Nhạc</a></li>
                                    <li><a title="Kết Nối Cùng Thần Tượng" href="chu-de/Ket-Noi-Cung-Than-Tuong/IWZ9ZI9Z.html">Kết Nối Cùng Thần Tượng</a></li>
                                    <li><a title="Ngày Lễ Trong Năm" href="chu-de/ng%c3%a0y-l%e1%bb%85-trong-n%c4%83m/IWZ9ZIOB.html">Ngày Lễ Trong Năm</a></li>
                                    <li><a title="The Best Of" href="chu-de/the-best-of/IWZ9Z0FU.html">The Best Of</a></li>
                                    <li><a title="Euro 2016" href="album/Nhac-Euro-2016-Various-Artists/ZWZCU80F.html">Euro 2016</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a title="Album" href="the-loai-album.html">Album</a>
                    <div class="megamenu submenu menu-col-4">
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a href="the-loai-album/Viet-Nam/IWZ9Z08I.html" title="Việt Nam">Việt Nam</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Nhạc Trẻ" href="the-loai-album/Nhac-Tre/IWZ9Z088.html">Nhạc Trẻ</a></li>
                                    <li><a title="Nhạc Trữ Tình" href="the-loai-album/Nhac-Tru-Tinh/IWZ9Z08B.html">Nhạc Trữ Tình</a></li>
                                    <li><a title="Nhạc Dance" href="the-loai-album/Nhac-Dance/IWZ9Z0CW.html">Dance Việt</a></li>
                                    <li><a title="Rock Việt" href="the-loai-album/Rock-Viet/IWZ9Z08A.html">Rock Việt</a></li>
                                    <li><a title="Rap Việt" href="the-loai-album/Rap-Viet/IWZ9Z089.html">Rap / Hip Hop Việt</a></li>
                                    <li><a title="Nhạc Trịnh" href="the-loai-album/Nhac-Trinh/IWZ9Z08E.html">Nhạc Trịnh</a></li>
                                    <li><a title="Nhạc Thiếu Nhi" href="the-loai-album/Nhac-Thieu-Nhi/IWZ9Z08F.html">Nhạc Thiếu Nhi</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a href="the-loai-album/Au-My/IWZ9Z08O.html" title="Âu Mỹ">Âu Mỹ</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Pop" href="the-loai-album/Pop/IWZ9Z097.html">Pop</a></li>
                                    <li><a title="Rock" href="the-loai-album/Rock/IWZ9Z099.html">Rock</a></li>
                                    <li><a title="Rap / Hip Hop" href="the-loai-album/Rap-Hip-Hop/IWZ9Z09B.html">Rap / Hip Hop</a></li>
                                    <li><a title="Country" href="the-loai-album/Country/IWZ9Z096.html">Country</a></li>
                                    <li><a title="Electronic / Dance" href="the-loai-album/Electronic-Dance/IWZ9Z09A.html">Electronic / Dance</a></li>
                                    <li><a title="R&amp;B / Soul" href="the-loai-album/R-B-Soul/IWZ9Z09D.html">R&amp;B / Soul</a></li>
                                    <li><a title="Audiophile" href="the-loai-album/Audiophile/IWZ9Z0EO.html">Audiophile</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a href="the-loai-album/Han-Quoc/IWZ9Z08W.html" title="Châu Á">Châu Á</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Hàn Quốc" href="the-loai-album/Han-Quoc/IWZ9Z08W.html">Hàn Quốc</a></li>
                                    <li><a title="Nhật bản" href="the-loai-album/Viet-Nam/Nhat-Ban/IWZ9Z08Z.html">Nhật Bản</a></li>
                                    <li><a title="Hoa Ngữ" href="the-loai-album/Viet-Nam/Hoa-Ngu/IWZ9Z08U.html">Hoa Ngữ</a></li>
                                    <li><a title="Thái Lan" href="the-loai-album/Thai-Lan/IWZ9Z0CZ.html">Thái Lan</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a title="Hòa Tấu" href="the-loai-album/Hoa-Tau/IWZ9Z086.html">Hòa Tấu</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Classical" href="the-loai-album/Classical/IWZ9Z0BI.html">Classical</a></li>
                                    <li><a title="Piano" href="the-loai-album/Piano/IWZ9Z0B0.html">Piano</a></li>
                                    <li><a title="Guitar" href="the-loai-album/Guitar/IWZ9Z0A9.html">Guitar</a></li>
                                    <li><a title="Violin" href="the-loai-album/Violin/IWZ9Z0BU.html">Violin</a></li>
                                    <li><a title="Cello" href="the-loai-album/Cello/IWZ9Z0AD.html">Cello</a></li>
                                    <li><a title="Saxophone" href="the-loai-album/Saxophone/IWZ9Z0B7.html">Saxophone</a></li>
                                    <li><a title="Nhạc Cụ Dân Tộc" href="the-loai-album/Nhac-Cu-Dan-Toc/IWZ9Z0AA.html">Nhạc Cụ Dân Tộc</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a title="Video" href="the-loai-video.html">Video</a>
                    <div class="megamenu submenu menu-col-4">
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a title="Việt Nam" href="the-loai-video/Viet-Nam/IWZ9Z08I.html">Việt Nam</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Nhạc Trẻ" href="the-loai-video/Nhac-Tre/IWZ9Z088.html">Nhạc Trẻ</a></li>
                                    <li><a title="Nhạc Trữ Tình" href="the-loai-video/Nhac-Tru-Tinh/IWZ9Z08B.html">Nhạc Trữ Tình</a></li>
                                    <li><a title="Nhạc Dance" href="the-loai-video/Nhac-Dance/IWZ9Z0CW.html">Dance Việt</a></li>
                                    <li><a title="Rock Việt" href="the-loai-video/Rock-Viet/IWZ9Z08A.html">Rock Việt</a></li>
                                    <li><a title="Rap Việt" href="the-loai-video/Rap-Viet/IWZ9Z089.html">Rap / Hip Hop Việt</a></li>
                                    <li><a title="Nhạc Trịnh" href="the-loai-video/Nhac-Trinh/IWZ9Z08E.html">Nhạc Trịnh</a></li>
                                    <li><a title="Nhạc Thiếu Nhi" href="the-loai-video/Nhac-Thieu-Nhi/IWZ9Z08F.html">Nhạc Thiếu Nhi</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a title="Âu Mỹ" href="the-loai-video/Au-My/IWZ9Z08O.html">Âu Mỹ</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Pop" href="the-loai-video/Pop/IWZ9Z097.html">Pop</a></li>
                                    <li><a title="Rock" href="the-loai-video/Rock/IWZ9Z099.html">Rock</a></li>
                                    <li><a title="Rap / Hip Hop" href="the-loai-video/Rap-Hip-Hop/IWZ9Z09B.html">Rap / Hip Hop</a></li>
                                    <li><a title="Country" href="the-loai-video/Country/IWZ9Z096.html">Country</a></li>
                                    <li><a title="Electronic / Dance" href="the-loai-video/Electronic-Dance/IWZ9Z09A.html">Electronic / Dance</a></li>
                                    <li><a title="R&amp;B / Soul" href="the-loai-video/R-B-Soul/IWZ9Z09D.html">R&amp;B / Soul</a></li>
                                    <li><a title="Audiophile" href="the-loai-video/Audiophile/IWZ9Z0EO.html">Audiophile</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a title="Châu Á" href="the-loai-video/Han-Quoc/IWZ9Z08W.html">Châu Á</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Hàn Quốc" href="the-loai-video/Han-Quoc/IWZ9Z08W.html">Hàn Quốc</a></li>
                                    <li><a title="Nhật Bản" href="the-loai-video/Viet-Nam/Nhat-Ban/IWZ9Z08Z.html">Nhật Bản</a></li>
                                    <li><a title="Hoa Ngữ" href="the-loai-video/Viet-Nam/Hoa-Ngu/IWZ9Z08U.html">Hoa Ngữ</a></li>
                                    <li><a title="Thái Lan" href="the-loai-video/Thai-Lan/IWZ9Z0CZ.html">Thái Lan</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1">
                            <div class="title-menu"><a title="Hòa Tấu" href="the-loai-video/Hoa-Tau/IWZ9Z086.html">Hòa Tấu</a></div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Classical" href="the-loai-video/Classical/IWZ9Z0BI.html">Classical</a></li>
                                    <li><a title="Piano" href="the-loai-video/Piano/IWZ9Z0B0.html">Piano</a></li>
                                    <li><a title="Guitar" href="the-loai-video/Guitar/IWZ9Z0A9.html">Guitar</a></li>
                                    <li><a title="Violin" href="the-loai-video/Violin/IWZ9Z0BU.html">Violin</a></li>
                                    <li><a title="Cello" href="the-loai-video/Cello/IWZ9Z0AD.html">Cello</a></li>
                                    <li><a title="Saxophone" href="the-loai-video/Saxophone/IWZ9Z0B7.html">Saxophone</a></li>
                                    <li><a title="Nhạc Cụ Dân Tộc" href="the-loai-video/Nhac-Cu-Dan-Toc/IWZ9Z0AA.html">Nhạc Cụ Dân Tộc</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a title="Nghệ Sĩ" href="the-loai-nghe-si.html">Nghệ Sĩ</a>
                    <div class="megamenu submenu menu-col-1">
                        <div class="subcol menu-col-1-narrow">
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Việt Nam" href="the-loai-nghe-si/Viet-Nam/IWZ9Z08I.html">Việt Nam</a></li>
                                    <li><a title="Âu Mỹ" href="the-loai-nghe-si/Au-My/IWZ9Z08O.html">Âu Mỹ</a></li>
                                    <li><a title="Hàn Quốc" href="the-loai-nghe-si/Han-Quoc/IWZ9Z08W.html">Hàn Quốc</a></li>
                                    <li><a title="Nhật Bản" href="the-loai-nghe-si/Nhat-Ban/IWZ9Z08Z.html">Nhật Bản</a></li>
                                    <li><a title="Hao Ngữ" href="the-loai-nghe-si/Hoa-Ngu/IWZ9Z08U.html">Hoa Ngữ</a></li>
                                    <li><a title="Hòa Tấu" href="the-loai-nghe-si/Hoa-Tau/IWZ9Z086.html">Hòa Tấu</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a title="Bảng Xếp Hạng" href="bang-xep-hang/index.html">BXH</a>
                    <div class="megamenu submenu menu-col-3 menu-bxh">
                        <div class="subcol menu-col-1-narrow">
                            <div class="title-menu">Việt Nam</div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Bài Hát" href="bang-xep-hang/bai-hat-Viet-Nam/IWZ9Z08I.html">Bài hát</a></li>
                                    <li><a title="Album" href="bang-xep-hang/album-Viet-Nam/IWZ9Z08O.html">Album</a></li>
                                    <li><a title="MV" href="bang-xep-hang/video-Viet-Nam/IWZ9Z08W.html">MV</a></li>
                                    <li><a title="Social" href="bang-xep-hang/top-40-social/IWZ9Z08U.html">Social</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1-narrow">
                            <div class="title-menu">Âu Mỹ</div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Bài Hát" href="bang-xep-hang/bai-hat-Au-My/IWZ9Z0BW.html">Bài hát</a></li>
                                    <li><a title="Album" href="bang-xep-hang/album-Au-My/IWZ9Z0B6.html">Album</a></li>
                                    <li><a title="MV" href="bang-xep-hang/video-Au-My/IWZ9Z0BU.html">MV</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="subcol menu-col-1-narrow">
                            <div class="title-menu">Hàn Quốc</div>
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Bài Hát" href="bang-xep-hang/bai-hat-Han-Quoc/IWZ9Z0BO.html">Bài hát</a></li>
                                    <li><a title="Album" href="bang-xep-hang/album-Han-Quoc/IWZ9Z0B7.html">Album</a></li>
                                    <li><a title="MV" href="bang-xep-hang/video-Han-Quoc/IWZ9Z0BZ.html">MV</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a title="Top 100" href="top100/Nhac-Tre/IWZ9Z088.html">Top 100</a>
                    <div class="megamenu submenu menu-col-1">
                        <div class="subcol menu-col-1-narrow">
                            <div class="subinner_item">
                                <ul>
                                    <li><a title="Việt Nam" href="top100/Nhac-Tre/IWZ9Z088.html">Việt Nam</a></li>
                                    <li><a title="Âu Mỹ" href="top100/Pop/IWZ9Z097.html">Âu Mỹ</a></li>
                                    <li><a title="Châu Á" href="top100/Han-Quoc/IWZ9Z08W.html">Châu Á</a></li>
                                    <li><a title="Hòa Tấu" href="top100/Classical/IWZ9Z0BI.html">Hòa Tấu</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a title="Real-time" href="real-time.html">Real-time</a></li>
                <li><a title="Radio" href="http://radio.zing.vn/" target="_blank">Radio</a></li>
                <li><a title="Zing MP3 VIP" href="vip/index.html" target="_blank">VIP</a></li>
            </ul> <a title="Tắt quảng cáo" href="#" class="toggle-ads fn-banner-off active"><i class="zicon icon-power"></i>Tắt quảng cáo</a>
            <a title="Upload" href="upload/song.html" class="zicon icon-cloud fn-login"></a>
        </div>
    </nav>