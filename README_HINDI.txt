जनप्रदेश 24 NEWS — पूरा वेबसाइट पैकेज

इस ZIP में:
1. index.html — सार्वजनिक न्यूज़ वेबसाइट
2. article.html + article.js — हर खबर का अलग पेज
3. admin.html + admin.js — Admin Login, News Editor, फोटो/वीडियो upload, Draft/Publish, Edit/Delete, Publish/Unpublish
4. site.js — प्रकाशित खबरें Supabase से वेबसाइट पर लोड
5. style.css — responsive Hindi news portal design
6. config.js — Supabase public URL/key
7. setup.sql — Database, categories, RLS और Storage setup

सेटअप (एक बार):
A. ZIP extract करें।
B. Supabase > SQL Editor में setup.sql का पूरा code paste करके Run करें।
C. Supabase > Authentication > Users > Add user से admin user बनाएँ:
   Email: janpradesh24@gmail.com
   Password: अपना मजबूत password बनाएँ (ChatGPT को न भेजें)।
D. Authentication > Settings/Providers में public sign-ups OFF करें।
E. GitHub repository के root में index.html, article.html, article.js, admin.html, admin.js, site.js, style.css, config.js अपडेट करें और setup.sql को भी रखें।
F. आपका पुराना लोगो assets/janpradesh24-logo.png में हो तो वही इस्तेमाल होगा। assets folder और logo न हटाएँ।
G. GitHub Pages deployment पूरा होने पर /admin.html खोलकर login करें।

Admin:
- फोटो JPG/PNG/WEBP; अधिकतम 10MB
- वीडियो MP4/WEBM/MOV; अधिकतम 50MB
- URL भी दे सकते हैं, या file upload कर सकते हैं
- खबर Publish करने पर public homepage पर दिखनी चाहिए

सुरक्षा:
- config.js में केवल Supabase publishable/anon public key रखें।
- Service Role/Secret key कभी वेबसाइट या ChatGPT में paste न करें।
- SQL लिखने/अपडेट/डिलीट की अनुमति सिर्फ janpradesh24@gmail.com ईमेल को देता है।
- Live deploy के बाद अभी भी समस्या हो तो error का screenshot भेजें। यह पैकेज live project पर deploy/test नहीं हुआ है।
