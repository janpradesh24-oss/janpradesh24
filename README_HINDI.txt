# जनप्रदेश 24 — वेबसाइट स्टार्टर

इस पैकेज में:
- `index.html` — मोबाइल-फ्रेंडली न्यूज़ वेबसाइट और Admin Panel
- `logo.png` — आपका दिया हुआ जनप्रदेश 24 लोगो
- `setup.sql` — Supabase डेटाबेस और सुरक्षा नियम

## जरूरी बात
यह वेबसाइट फाइलें तैयार हैं, लेकिन अभी इंटरनेट पर लाइव नहीं हैं। लाइव करने के लिए नीचे के मुफ्त अकाउंट/सेटअप की जरूरत होगी। किसी भी जगह Supabase का `service_role` या secret key वेबसाइट में न डालें।

## 1) Supabase डेटाबेस (मुफ्त स्तर उपलब्ध)
1. https://supabase.com पर अकाउंट बनाकर नया project बनाएँ।
2. Project खोलें → SQL Editor → `setup.sql` की सामग्री पेस्ट करें।
3. SQL में `janpradesh24@gmail.com` को उसी ईमेल से बदलें जिससे आप Admin बनाना चाहते हैं। फिर Run करें।
4. Authentication → Users में जाकर Add user से अपना Admin email और password बनाएँ। ईमेल verification चालू हो तो verify करें।
5. Project Settings → API में Project URL और `anon` / publishable public key कॉपी करें।
6. `index.html` खोलकर नीचे दिए गए दो मान बदलें:
   - `https://hzxasyumqgmvjdatorot.supabase.co`
   - `PASTE_YOUR_SUPABASE_ANON_PUBLIC_KEY`

## 2) सोशल मीडिया लिंक जोड़ना
`index.html` में `SOCIAL_LINKS` खोजें और उदाहरण को अपने सही Facebook/YouTube/Instagram URL से बदलें:
`{label:"Facebook", url:"https://facebook.com/yourpage"}`

## 3) वेबसाइट मुफ्त में प्रकाशित करना
1. https://github.com पर अकाउंट बनाएँ।
2. नया Public repository बनाएँ (उदाहरण: janpradesh24)।
3. `index.html` और `logo.png` अपलोड करें।
4. Repository → Settings → Pages → Deploy from a branch → `main` और `/root` चुनें → Save।
5. कुछ मिनट बाद GitHub Pages का URL मिलेगा। उसी URL को अपने सोशल मीडिया bio में लगाएँ।

## 4) इस्तेमाल کیسے کریں
- वेबसाइट खोलें और Admin Login चुनें।
- Supabase में बनाए Admin email/password से लॉगिन करें।
- हेडलाइन, श्रेणी, फोटो URL और पूरी खबर भरकर प्रकाशित करें।
- हर खबर के नीचे “शेयर करें” बटन है। खबर का अलग URL खुलेगा जिसे WhatsApp/group/social media पर भेज सकते हैं।

## सुरक्षा
- Admin password किसी के साथ साझा न करें।
- `service_role` key कभी भी `index.html` में न डालें।
- Admin email वही रखें जो SQL policy में दिया है।
- फोटो URL सार्वजनिक रूप से खुलने वाला होना चाहिए।
- खबर प्रकाशित करने से पहले तथ्य और स्रोत जाँच लें।
