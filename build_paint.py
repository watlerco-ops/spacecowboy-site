import re, urllib.parse
gj = open('gallery.js', encoding='utf-8').read()
m = re.search(r"var _WM='(<svg.*?</svg>)'", gj)
svg = m.group(1)
svg = svg.replace(' style="display:block;height:100%;width:auto"','')
svg = svg.replace(' role="img" aria-label="Space Cowboy"','')
svg = svg.replace('currentColor','#000')
uri = 'data:image/svg+xml;utf8,' + urllib.parse.quote(svg, safe="!*'();:@&=+$,/?-._~")
print('uri bytes:', len(uri))
css = '''<!-- SC brand first paint: draws the correct helmet and Fenway Park wordmark before the page renders, ends the old logo flash. Append only, keep as the last block. gallery.js still runs after load; the :has() guards hand off to it cleanly. -->
<style id="sc-brand-first-paint">
:root{--scwm:url("__URI__");}
.logo-badge{background:none!important;background-color:transparent!important;box-shadow:none!important;border:none!important;border-radius:0!important;width:auto!important;height:auto!important;min-width:0!important;padding:0!important;overflow:visible!important;}
.logo-badge img{content:url('https://watlerco-ops.github.io/spacecowboy-site/logo.webp');height:40px!important;width:auto!important;max-width:none!important;border-radius:0!important;}
.wordmark,.sc-ty-mark,.sc-pp-mark,.sc-est-mark,.sc-est-foot-mark,.sc-ty-foot-mark,.sc-pp-foot-mark{font-size:0!important;letter-spacing:0!important;text-transform:none!important;}
.wordmark .star,.sc-ty-star,.sc-pp-star,.sc-est-star{display:none!important;}
.wordmark:not(:has(svg))::after,.sc-ty-mark:not(:has(svg))::after,.sc-pp-mark:not(:has(svg))::after,.sc-est-mark:not(:has(svg))::after,.sc-est-foot-mark:not(:has(svg))::after,.sc-ty-foot-mark:not(:has(svg))::after,.sc-pp-foot-mark:not(:has(svg))::after{content:'';display:inline-block;vertical-align:middle;background:currentColor;-webkit-mask:var(--scwm) center/contain no-repeat;mask:var(--scwm) center/contain no-repeat;}
.wordmark:not(:has(svg))::after{width:156px;height:32px;}
.sc-ty-mark:not(:has(svg))::after,.sc-pp-mark:not(:has(svg))::after,.sc-est-mark:not(:has(svg))::after{width:146px;height:30px;}
.sc-est-foot-mark:not(:has(svg))::after,.sc-ty-foot-mark:not(:has(svg))::after,.sc-pp-foot-mark:not(:has(svg))::after{width:107px;height:22px;}
</style>'''
out = css.replace('__URI__', uri)
open('sc-brand-first-paint.html','w',encoding='utf-8').write(out)
print('file bytes:', len(out))
