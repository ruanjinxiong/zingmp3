    <footer>
        <div class="container">
            <div class="row">
                <div class="col-5 copyright" style="padding-left: 0; padding-right: 0;" itemscope itemtype="http://schema.org/Organization">
                    <div>
						<?php
							$footer_logo = get_field( 'footer_logo', 'option' );
							if( !empty( $footer_logo ) ) : 
						?>
						<img style="width: 55px; margin-right: 0; margin-top: 14px;" itemprop="logo" src="<?php echo $footer_logo[ 'url' ] ?>" alt="<?php echo get_bloginfo( 'name' ) . ' - ' . get_bloginfo( 'description' ) ?>" />
						<?php
							else :
								echo get_bloginfo( 'name' ) . '<sub>' . get_bloginfo( 'description' ) . '</sub>';
							endif;
						?>
					</div>
                    <div style="margin-left: 75px;">
                        <?php the_field( 'copyright', 'option' ) ?>
                    </div>
                </div>
                <div class="col-4">
                    <ul class="link-footer" style="margin-left: 20px;">
                        <li><a title="Giới thiệu" rel="nofollow" href="huong-dan/about.html">Giới thiệu</a></li>
                        <li><a title="Điều khoản" rel="nofollow" href="huong-dan/terms.html">Điều khoản</a></li>
                        <li><a title="Quảng cáo" rel="nofollow" href="http://ads.zing.vn/" target="_blank">Quảng cáo</a></li>
                        <li><a title="Copyright" rel="nofollow" href="huong-dan/copyright.html">Copyright</a></li>
                        <li><a title="Zing MP3 VIP" href="vip/index.html">Zing MP3 VIP</a></li>
                        <li><a title="Ứng dụng" href="apps.html">Ứng dụng</a></li>
                        <li><a title="Góp ý/Báo lỗi" rel="nofollow" href="https://docs.google.com/forms/d/1EHv8aYwV3rqUX3KE4H9IKpawf11cXFt8hr1iuW1pBWA/viewform?c=0&amp;w=1" target="_blank">Góp ý</a></li>
                        <li><a title="APIs" rel="nofollow" href="huong-dan/developer.html">APIs</a></li>
                        <li><a title="Liên hệ" rel="nofollow" href="huong-dan/contact.html">Liên hệ</a></li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul class="social-sq">
                        <li class="fb-sq">
                            <a title="Zing MP3 trên Facebook" href="https://www.facebook.com/zingmp3" rel="nofollow" target="_blank"></a>
                        </li>
                        <li class="zl-sq">
                            <a title="Zing MP3 trên Zalo" class="fn-showhere" data-box="#snZalo" href="#" rel="nofollow" target="_blank"></a>
                        </li>
                        <li class="gp-sq">
                            <a title="Zing MP3 trên Google Plus" href="https://plus.google.com/+zingmp3" rel="publisher" target="_blank"></a>
                        </li>
                        <li class="yt-sq">
                            <a title="Zing MP3 trên Youtube" href="https://www.youtube.com/c/zingmp3" rel="nofollow" target="_blank"></a>
                        </li>
                    </ul>
                    <div class="clearfix"></div>
                    <p class="sw-mobile"><a title="Phiên bản Mobile" href="http://m.mp3.zing.vn/">Phiên bản Mobile</a></p>
                </div>
            </div>
        </div>
    </footer>
    <div id="playlistBox" class="dropdown none playlistbox fn-boxsong" style="top:100px;left:100px"> <span class="arr-top"><i></i></span>
        <ul>
            <li><span>Thêm vào Playlist</span></li>
            <div class="section-hidden">
                <div class="fn-list">
                    <li class="fn-fav none"><a class="fn-add" data-type="song" data-id="0" title="Yêu Thích" href="#"><i class="icon-heart"></i>Yêu Thích</a></li>
                    <li class="fn-item none">
                        <a class="fn-add" data-type="song" data-id="0" title="" href="#"><input type="checkbox" /> <label class="fn-name"></label></a>
                    </li>
                </div>
                <li class="line-top fn-btnnew"><a class="fn-showhide" data-show="#playlistBox .fn-new" data-hide="#playlistBox .fn-btnnew" href="#">Tạo Playlist mới</a></li>
                <li class="line-top none fn-new">
                    <form class="fn-playlist" action="http://mp3.zing.vn/xhr/mydata/save-playlist" data-playlist-box="#playlistBox">
                        <p> <input name="name" type="text" placeholder="Tên Playlist" /> <input name="item_id" type="hidden" value="" /> <span class="close fn-showhide" data-show="#playlistBox .fn-btnnew" data-hide="#playlistBox .fn-new"></span> </p> <button type="submit" class="button btn-dark-blue small-button">Đồng ý</button> </form>
                </li>
            </div>
            <!-- END .section-hidden -->
        </ul>
    </div>
    <div class="overlay none" id="loginBox">
        <div class="box-popup no-padding">
            <h3 class="title-pop">Đăng nhập</h3>
            <div class="login-form fn-content"> </div> <span class="close fn-close" data-box="#loginBox"></span> </div>
    </div>
    <div class="overlay none">
        <div class="box-popup sync-zalo">
            <h3 class="title-pop">Liên kết với tài khoản Zalo</h3>
            <p class="info-login">Liên kết tài khoản Zalo giúp <strong>tăng tính bảo mật</strong> và dễ dàng quản lý tài sản.</p>
            <div class="login-form"> </div>
            <div class="clearfix"></div> <a href="#" class="text-link-login"><span>Đăng nhập với tài khoản Zing</span></a> <span class="close"></span> </div>
    </div>
    <div class="overlay none" id="loginNotiBox">
        <div class="box-popup no-padding">
            <div class="sorry-box"> <img src="http://static.mp3.zdn.vn/skins/zmp3-v4.1/images/noti/sorry.png" alt="Zing MP3" class="pull-left" style="margin-right:20px" />
                <p>Chào <strong class="fn-dname"></strong></p>
                <p>Zing MP3 vô cùng xin lỗi bạn vì sự cố đăng nhập xảy ra cách đây vài ngày đã ảnh hưởng đến trải nghiệm nghe nhạc của bạn trên website Zing MP3.</p>
                <p>Hiện sự cố đã được khắc phục và bạn đã có thể sử dụng Zing MP3 bình thường.</p>
                <p>Nhân đây, chúng tôi xin gửi tặng bạn 1 tháng Zing MP3 VIP và chúc bạn một ngày vui vẻ!</p>
                <div style="margin-top:30px;overflow:hidden">
                    <div class="pull-left">
                        <p>Mọi góp ý và thắc mắc, vui lòng liên hệ <a href="https://docs.google.com/forms/d/14G8q4kI-VCWO7Rh-9pbHBHKI14ZOsVXz03O3FRSlTRk/viewform?c=0&amp;w=1" ref="nofollow" target="_blank">tại đây</a>!</p>
                        <p>Kiểm tra thời hạn Zing MP3 VIP tại:</p>
                        <p><a href="mymusic.html">http://mp3.zing.vn/mymusic</a></p>
                        <p><a href="#" class="button btn-dark-blue fn-close" data-box="#loginNotiBox" data-cb="loginNoti" style="padding: 5px 20px;font-size: 13px;margin-top: 15px;">Đóng</a></p>
                    </div> <img width="165" src="http://static.mp3.zdn.vn/skins/zmp3-v4.1/images/noti/30day.png" alt="Zing MP3" class="pull-right" /> </div>
            </div>
            <!-- /.box-upload --><span class="close fn-close" data-cb="loginNoti" data-box="#loginNotiBox"></span> </div>
        <!-- /.box-popup -->
    </div>
    <div class="box-tooltip box-download fn-boxsong none" id="dlboxvideo"> <span class="arr-top"></span>
        <div class="ul">
            <p class="li"><a class="fn-360" href="#" target="_ifrTemp">360p</a></p>
            <p class="li"><a class="fn-480" href="#" target="_ifrTemp">480p</a></p>
            <p class="li"><a class="fn-720 fn-viprequire" href="#" target="_ifrTemp">720p</a></p>
            <p class="li"><a class="fn-1080 fn-viprequire" href="#" target="_ifrTemp">1080p</a></p>
        </div>
    </div>
    <div class="box-tooltip box-download fn-boxsong none" id="dlboxsong"> <span class="arr-top"></span>
        <div class="ul fn-list">
            <p class="li"><a class="fn-128" href="#" target="_ifrTemp">128 kbps</a></p>
            <p class="li"><a class="fn-320 fn-viprequire" href="#" target="_ifrTemp">320 kbps</a></p>
            <p class="li"><a class="fn-lossless fn-viprequire" href="#" target="_ifrTemp">Lossless</a></p>
        </div>
    </div>
    <div class="box-tooltip nw fn-boxsong none" id="shareSongBox"> <span class="arr-top"></span>
        <div class="ul">
            <p class="li"><a class="social fb fn-sharelink" data-net="fb" href="#">Facebook</a></p>
            <p class="li"><a class="social gp fn-sharelink" data-net="gp" href="#">Google Plus</a></p>
            <p class="li"><a class="social zm fn-sharelink" data-net="zm" href="#">Zing Me</a></p>
        </div>
    </div>
    <div id="confirmBox">
        <div class="overlay none fn-item">
            <div class="box-popup no-padding">
                <div class="popup-heading"> <span class="fn-title">Xác nhận</span> <span class="close fn-close"></span> </div>
                <div class="popup-content">
                    <p class="text-3 lh18 block-center fn-content">Bạn chắc chắn muốn thực hiện thao tác này?</p>
                </div>
                <div class="popup-footer"> <a href="#" class="zbtn-default zbtn-gray fn-close">Bỏ qua</a> <a href="#" class="zbtn-default fn-ok">Đồng ý</a> </div>
            </div>
        </div>
    </div>
    <ul class="page-alert" id="msgBox">
        <li class="box-alert none fn-item"> <i class="zicon"></i>
            <p class="fn-content"></p> <span class="close fn-close" data-box="#msgBox"></span> </li>
    </ul>
    <div class="box-tooltip none" id="snZalo"> <img src="http://static.mp3.zdn.vn/skins/zmp3-v4.1/images/zalo-qr.jpg" alt="Zalo" /> <span class="arr-bottom"></span> </div>
    <div id="fb-root"></div> <span class="geo"> <span class="latitude"> <span class="value-title" title="10.7638115" ></span> </span> <span class="longitude"> <span class="value-title" title="106.6563294"></span> </span>
    </span>
    <div class="body-mask none"></div> <span id="zads-dynamic" values="" data-ad-status=""></span> <iframe name="_ifrTemp" id="_ifrTemp" style="width: 0px; height: 0px" frameborder="0"></iframe>
    <div class="_bannerAdsBalloon">
        <div id="_mp3_adsZoneBalloon"></div>
    </div>
    <div id="_zoneBalloon" class="banner-bottom-right _bannerAds">
        <script type="text/javascript">
            if (MP3.BANNER_OFF != 1 && typeof Ads != 'undefined') {
                Ads.setZoneBalloon();
            }
        </script>
    </div>
    <script type="text/javascript" src="<?php bloginfo('template_url') ?>/js/zmp3.common.js"></script>
    <script type="text/javascript" src="http://static.mp3.zdn.vn/skins/label/js/vip-premium-3.9.widget.js"></script>
    <script type="text/javascript">
        if (MP3.BANNER_OFF != 1 && typeof Ads != 'undefined') {
            document.write('<div id="_zoneBackgroundLeft">');
            Ads.setZoneBackgroundLeft();
            document.write('</div>');
            document.write('<div id="_zoneBackgroundRight">');
            Ads.setZoneBackgroundRight();
            document.write('</div>');
        }
    </script>
    <script type="text/javascript">
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.async = 1;
            js.defer = 1;
            js.src = "https://apis.google.com/js/platform.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'gplatform')); /** * * @param {type} pathName * @param {type} id * @param {type} type * @param {type} linkImpression * @param {type} linkClick * @returns {undefined} */
        function trackingMV(pathName, id, type, linkImpression, linkClick, elements) {
            var timestamp = parseInt(Date.now() / 1000);
            if (pathName) {
                if (pathName.length > 1 && location.pathname.search(pathName) == -1) {
                    return;
                } else if (location.pathname != '/' && location.pathname != '') {
                    return;
                }
            }
            var strImpression = '';
            if (linkImpression) {
                if (typeof linkImpression === 'string') {
                    linkImpression = linkImpression.replace('[timestamp]', timestamp);
                    strImpression = '<img src="' + linkImpression + '" style="position: absolute; top: -9999px" />';
                } else {
                    for (var i = 0; i < linkImpression.length; i++) {
                        linkImpression[i] = linkImpression[i].replace('[timestamp]', timestamp);
                        strImpression += '<img src="' + linkImpression[i] + '" style="position: absolute; top: -9999px" />';
                    }
                }
            }
            switch (type) {
                case 'song':
                    type = 'bai-hat';
                    break;
                case 'video':
                    type = 'video-clip';
                    break;
            }
            if (!elements) elements = $("a[href*='" + id + ".html']");
            elements.each(function() {
                var _this = $(this);
                if (_this.attr('href').search(type) > -1) {
                    if (location.pathname.length < 10 || _this.attr('href').indexOf(location.pathname) < 0) {
                        if (_this.html().length > 1) {
                            if (linkClick) {
                                _this.click(function() { /*timestamp = parseInt(Date.now() / 1000, 10);*/
                                    _this.attr('href', _this.attr('href') + (_this.attr('href').indexOf('?') > 0 ? '&click=' + encodeURIComponent(elements.selector) : '?click=' + encodeURIComponent(elements.selector)));
                                });
                            }
                            _this.html(_this.html() + strImpression);
                        }
                    }
                }
            });
            if (linkClick && decodeURIComponent(location.search).indexOf('click=' + elements.selector) > -1 && location.pathname.search(type) > -1) {
                if (typeof linkClick === 'string') {
                    linkClick = linkClick.replace('[timestamp]', timestamp);
                    $('body').append('<img style="width: 1px; height: 1px; position:absolute; top:-99999px;" tabindex="-1" src="' + linkClick + '" />');
                } else {
                    for (var i = 0; i < linkClick.length; i++) {
                        linkClick[i] = linkClick[i].replace('[timestamp]', timestamp);
                        $('body').append('<img style="width: 1px; height: 1px; position:absolute; top:-99999px;" tabindex="-1" src="' + linkClick[i] + '" />');
                    }
                } /* remove click params tren URL */
                var qString = location.search,
                    results = null;
                var regex = new RegExp("[\\?&]click=([^&#]*)", 'g');
                while ((results = regex.exec(location.search))) {
                    qString = qString.replace(results[0], '');
                }
                if (typeof history.replaceState === 'function') {
                    history.replaceState({
                        state: 1,
                        rand: Math.random()
                    }, document.title, qString.length > 0 ? qString : '?');
                }
            }
        }
        var d = new Date();
        var t = d.getTime(); /* http://mp3.zing.vn/video-clip/My-Sunshine-Dong-Nhi-Hello-Yellow-Band/ZW7U8OBF.html */
        impressionLinks = [];
        clickLinks = [];
        impressionLinks.push('http://bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=18858903&PluID=0&ord=' + t + '&rtu=-1');
        clickLinks.push('http://bs.serving-sys.com/serving/adServer.bs?cn=trd&mc=click&pli=18858903&PluID=0&ord=' + t);
        trackingMV(null, 'ZW7UE9AA', 'video-clip', impressionLinks, clickLinks, $("#feature a[href*='ZW7UE9AA.html']")); /* http://mp3.zing.vn/video-clip/Love-Like-You-Dong-Nhi/ZW7UE9AA.html */
        impressionLinks = [];
        clickLinks = [];
        impressionLinks.push('http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=18565470&PluID=0&ord=' + t + '&rtu=-1');
        clickLinks.push('http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=18565470&PluID=0&ord=' + t);
        trackingMV(null, 'ZW7UE9AA', 'video-clip', impressionLinks, clickLinks, $("#feature a[href*='ZW7UE9AA.html']")); /* video-clip/Pink-Girl-Dong-Nhi/ZW7OAU0I.html */
        impressionLinks = [];
        clickLinks = [];
        impressionLinks.push('http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&amp;c=19&amp;mc=imp&amp;pli=16565679&amp;PluID=0&amp;ord=[timestamp]&amp;rtu=-1');
        impressionLinks.push('http://api.adtimaserver.vn/track/hit.gif?params=XnQpM14k_u9cxfRhiKdfYVHBDkq5MrXoQDk-Bj1e6PDFh6aGTiwBV4nIof12CikG0Owdsifj4psFFKkl_3ECxB73cMXyWTKi5zFG3ZNXYrO-xWIqBelanx-iByymVwCLdpEu-28qfrU-xxg6AIhOhqN3HovKF29V-FwK9bnaEl7JwwpdmV1mucmu&amp;uid=');
        clickLinks.push('http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&amp;c=20&amp;mc=click&amp;pli=16565679&amp;PluID=0&amp;ord=[timestamp]');
        clickLinks.push('http://api.adtimaserver.vn/track/click?params=MhjNO76k_u8w-QzRKCdfDQVRTsq5Mtk0oDk-Bj0yPBdlem1pPprCVbIJhsvnoMmvU8IAOL9Yk2xdgWbgjnq8O_o9Ao95nnAzoosflg3c6TquUTd_4h0A-VgUL6zPqmkckCugV0Vk8CGUflhtZ6_Chy_OloGGXZlaCSZk9S6N2cY4AI9O&amp;uid=');
        trackingMV(null, 'ZW7OAU0I', 'video-clip', impressionLinks, clickLinks, $("#videohot a[href*='ZW7OAU0I.html']"));
        impressionLinks = [];
        clickLinks = [];
        impressionLinks.push('http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&amp;c=19&amp;mc=imp&amp;pli=16565681&amp;PluID=0&amp;ord=[timestamp]&amp;rtu=-1');
        impressionLinks.push('http://api.adtimaserver.vn/track/hit.gif?params=-VMI5Rrs7s_7pII5OGffRkq_Pgo5MpKLfKGOxj159WzN5yaGaQndT8nIodqVsgmG0Ow6kf8zghsFM4izLdOHxhUaWzgWKvTtPsJqe7cWXQgfvhEcHU5BF__iBiWqKPhinB5qJA0sg-9WjYmp17COA4Axg2qXb1WPZd79GVoSKawVLo3Z3RFUdx4&amp;uid=');
        clickLinks.push('http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&amp;c=20&amp;mc=click&amp;pli=16565681&amp;PluID=0&amp;ord=[timestamp]');
        clickLinks.push('http://api.adtimaserver.vn/track/click?params=Ufuw1bps7s9TXFL5OGff7iLfPgo5MjpTrOEOxj3RnYM1mu1p3TsW3RKJhiiEWqG_M4LjXeN4E2ZXULs_EQbMWB7VrYbFYxtnPBQvqNGjUEWekTd_4v8nQkNsVK9TuhYt-l4_zot2nRpVDBZ7gGGzyheXvR91Dj2Zolo5PMVuDSEFwURHXg&amp;uid=');
        trackingMV(null, 'ZW7OAU0I', 'video-clip', impressionLinks, clickLinks, $("#feature a[href*='ZW7OAU0I.html']")); /* video-clip/Cam-On-Me-Trung-Quan-Idol/ZW7ODZ8I.html */
        linkImpression = 'http://api.adtimaserver.vn/track/hit.gif?params=sJpTGz6k_u-yf-xRKCdfj4NJnoo5MluymGmehj2wvvDFh6aGoMJBV4nIoRNcDuGWsKzz6DPzAhsF-sPth8FARvfm0tw45Jn5bcNAQ2hUMSit3vYa5Yc4O0-Chy9HFKZAbyfRH7sqlbjePqdFU4HwDgMZ-B-iBy_VFr4ilbnaErBnixqdGV2In6mu&amp;uid=';
        linkClick = 'http://api.adtimaserver.vn/track/click?params=ownC7Xps7s-hDrrpGOffHBQH7kq5MsjFdDGuRj0jIzOVGu1pL5WahZKJhtrW9mkvU8IRD-voMyrUqqyF4xuRBs9Ro5ydGVwXEyvXh8FEeAsaQRf_4g0WKP1iGLvkz4DCb32efBYyrvm76HRNGOGzyhdlb3eVDj2ZUCyB7AXuDdPb4cRHXg&amp;uid=';
        trackingMV(null, 'ZW7ODZ8I', 'video-clip', linkImpression, linkClick); /* video-clip/Lach-That-Phong-Cach-Ngo-Kien-Huy/ZW7UOFA8.html */
        linkImpression = 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&amp;c=19&amp;mc=imp&amp;pli=17562792&amp;PluID=0&amp;ord=[timestamp]&amp;rtu=-1';
        linkClick = 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&amp;c=20&amp;mc=click&amp;pli=17562792&amp;PluID=0&amp;ord=[timestamp]';
        trackingMV(null, 'ZW7UOFA8', 'video-clip', linkImpression, linkClick, $("#videohot a[href*='ZW7UOFA8.html']")); /* video-clip/Nha-La-Noi-2016-Version-Noo-Phuoc-Thinh-Van-Mai-Huong/ZW7UB696.html */
        linkImpression = 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=18125970&PluID=0&ord=' + t + '&rtu=-1';
        linkClick = [];
        trackingMV(null, 'ZW7UB696', 'video', linkImpression, linkClick, $("#videohot .title-item a[href*='ZW7UB696.html']"));
        var z3AdLog = {
            timerSongList: [],
            timerVideoList: [],
            timerAlbumList: [],
            start: function(id, type) {
                if (!id) {
                    var regEx = /\/([a-z0-9]+).html/i;
                    var match = regEx.exec(location.pathname);
                    id = match[1];
                }
                var timeTracking = [];
                var listLink = [];
                if (type == 'video') {
                    switch (id) {
                        case 'ZW7ODZD8':
                            /* 2016-04-13 video-clip/Lam-Dieu-Minh-Yeu-Diana-Thai-Trinh/ZW7ODZD8.html */ MP3.OVA_DISABLE = 1;
                            break; /* 15-2-2016*/ /* video-clip/Pink-Girl-Dong-Nhi/ZW7OAU0I.html */
                        case 'ZW7OAU0I':
                            MP3.OVA_DISABLE = 1;
                            break;
                        case 'ZW7ODZ8I':
                            /* 2016-09-03 video-clip/Cam-On-Me-Trung-Quan-Idol/ZW7ODZ8I.html */ MP3.OVA_DISABLE = 1;
                            break;
                        case 'ZW7UOFA8':
                            /* The Colors Of Vietnam (Single) */ timeTracking = [1, 3, 30];
                            listLink = ['http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=17562610&PluID=0&ord=[timestamp]&rtu=-1', 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&amp;c=19&amp;mc=imp&amp;pli=17562770&amp;PluID=0&amp;ord=[timestamp]&amp;rtu=-1', 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=17562772&PluID=0&ord=[timestamp]&rtu=-1'];
                            break;
                    }
                    for (var i in this.timerVideoList) {
                        clearTimeout(this.timerVideoList[i]);
                    }
                    this.timerVideoList = [];
                    for (var i = 0; i < timeTracking.length; i++) {
                        listLink[i] = listLink[i].replace('[timestamp]', parseInt(Date.now() / 1000, 10));
                        this.timerVideoList.push(setTimeout('z3AdLog.sendLog("' + listLink[i] + '")', timeTracking[i] * 1000, i));
                    }
                } else if (type == 'album' || type == 'playlist') {
                    switch (id) {
                        case 'ZWZCIU6Z':
                            /* The Colors Of Vietnam (Single) */ timeTracking = [1, 124, 248, 372, 496];
                            listLink = ['http://api.adtimaserver.vn/track/click?params=wOqju76k_u_CbyxRKCdf_zPpHoo5Miti2Omehj3Ajp8VGu1pzCgGHRKJhjl1hAE_M4LyLn9Ykmp7UIVlx062rhGVzrCoqQNkDGDAbCye3IVTG8-Ch8VP6R2QAej9RQPBTrOoOTJEdSqqFor7n__iBy88JOXOvZla-zCQBe4N2TRK6B-O&uid=&timestamp=[timestamp]', 'http://api.adtimaserver.vn/track/click?params=HbdsbXps7s8fiNppGOffou7vfoo5MnaX3CGOxj2dqetlem1pkfc2XRKJhmRYeiG_M4KvaYtoMyjdLjNXg8BMX1Pn_3MBx0f6AZDJ_0FBxKFGIZf_4rP4VDjhlDwt3_58EGeWJJWz2xIM7nIX8AEzyhfb4YdVjj2Z7o4p_EVuDW2xSdSH3g&amp;uid=&amp;timestamp=[timestamp]', 'http://api.adtimaserver.vn/track/click?params=vpRJc14k_u-8ZXRhiKdfgbHBDkq5MlVIwDk-Bj2-iH_VGu1pshZi1bIJhkd7wEmvU8KMtBcoMyrcDPZzzNycbrNvJ3MExGi1hzq-NDHhL7JO0Td_4pCWdD2aVTpLT6RxK52Sk1fzxtOp4HkY_LGTihf43Av9nn0ZzaG3sIXuDU5QvcRHXg&amp;uid=&amp;timestamp=[timestamp]', 'http://api.adtimaserver.vn/track/click?params=G7Fq3Rrs7s8ZhiopGOffpOzHbkq5MnCthPEuRj2bq9PVGu1pl_3qRZKJhmJehikvU8Kpl6voMyzRGxDSVauflbeRZ_IF7AJdinSx6vS_at_yUTd_4rT_Q0JNWtqKah69PMJvzMp5vMVcjrHyKSOql2_ncWGGXZlaoJ9ARW4N2W-PLNee&amp;uid=&amp;timestamp=[timestamp]', 'http://api.adtimaserver.vn/track/click?params=oQvA9Tps7s-jDJL5OGffHhJ_vgo5MsrDbGEOxj0hLSN1mu1pLYu2XRKJhtjUGqG_M4ITDcP4E2dVisj6Zuh8aSN3AsBgJRJcJhi87iT-Um1-ETd_4g8XB8RGZX5IUlyRav260TW_9wPDcAYL4OGzyhdnbV_1Dj2ZUir5vMVuDdHVgcRHXg&uid=&timestamp=[timestamp]'];
                            break;
                    }
                    for (var i in this.timerAlbumList) {
                        clearTimeout(this.timerAlbumList[i]);
                    }
                    this.timerAlbumList = [];
                    for (var i = 0; i < timeTracking.length; i++) {
                        listLink[i] = listLink[i].replace('[timestamp]', parseInt(Date.now() / 1000, 10));
                        this.timerAlbumList.push(setTimeout('z3AdLog.sendLog("' + listLink[i] + '")', timeTracking[i] * 1000, i));
                    }
                } else if (type == 'song') {
                    switch (id) {
                        case 'ZW7O90II':
                            MP3.OVA_DISABLE = 1;
                            break;
                        case 'ZW7O6ZD0':
                            timeTracking = [30];
                            listLink = ['http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=16065617&PluID=0&rtu=-1&ord='];
                            break;
                        case 'ZW7O6ZC6':
                            MP3.OVA_DISABLE = 1;
                            timeTracking = [1, 1, 205, 205];
                            listLink = ['http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=16009643&PluID=0&ord=[timestamp]&rtu=-1', 'http://api.adtimaserver.vn/track/click?params=7MR7yx4k_u_uOxThiKdf0995Xgo5MgcGiCkehj3sesfF-m1p4ETimwVjeNYWyZ2TBMSlYd_zDjycqmwUAOAmG3zZ5mIVvhHyuFr3rNSqYymo1ayF7MiQEQDGb3dUwZjew4BhdhUlx0VPtUv4zdKC6XyAoV_1BcFEgpk&amp;uid=&amp;redirectUrl=http%3A%2F%2F%23', 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&amp;c=19&amp;mc=imp&amp;pli=16009644&amp;PluID=0&amp;ord=[timestamp]&amp;rtu=-1', 'http://api.adtimaserver.vn/track/click?params=po5Bw76k_u-kjYQhiKdfmZkhDkq5Mk1AsHm-Bj2moF-VGu1pqg7W62XjeJ3W9DSro0bI7Ut3lw82D1PzxtKl-9iTRM3-ETfwk5APepctWQExSdGEwOS9BPIr_JWTkZXY4bPKmO5BB1WOPRbfNLGshe6CbEEJVIfe&uid=&redirectUrl=http%3A%2F%2F%23'];
                            break;
                        case 'ZW7UOFA8':
                            MP3.OVA_DISABLE = 1;
                            timeTracking = [1, 30];
                            listLink = ['http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=17548821&PluID=0&ord=[timestamp]&rtu=-1', 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=17548822&PluID=0&ord=[timestamp]&rtu=-1'];
                            break;
                    }
                    for (var i in this.timerSongList) {
                        clearTimeout(this.timerSongList[i]);
                    }
                    this.timerSongList = [];
                    for (var i = 0; i < timeTracking.length; i++) {
                        listLink[i] = listLink[i].replace('[timestamp]', parseInt(Date.now() / 1000, 10));
                        this.timerSongList.push(setTimeout('z3AdLog.sendLog("' + listLink[i] + '")', timeTracking[i] * 1000, i));
                    }
                }
            },
            sendLog: function(url) {
                $('body').append('<img style="width: 1px; height: 1px; position:absolute; top:-99999px;" tabindex="-1" src="' + url + '" />');
            }
        }; /* song da duoc tracking trong zmp3.play.js -> z3AdLog.start(0, 'song'); */
        if (location.pathname.indexOf('video-clip') != -1) {
            z3AdLog.start(0, 'video');
        } else if (location.pathname.indexOf('album/index.html') != -1) {
            z3AdLog.start(0, 'album');
        }
    </script>
</body>

</html>