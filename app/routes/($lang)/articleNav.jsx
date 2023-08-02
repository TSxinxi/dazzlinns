import { useRef, useMemo, useEffect, useState } from 'react';

export default function articleNav() {
  const [hasMounted, setHasMounted] = useState(false);
  const [name, setName] = useState('');
  const [id, setID] = useState('');
  useEffect(() => {
    setHasMounted(true);
    var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.localStorage !== "undefined");
    if (canUseDOM) {
      let result = new URLSearchParams(window.location.search);
      setID(result.get('id'));
      setName(result.get('name'));
    }
  }, []);
  return <div className='settle_accounts'>
    <div className='settle_accounts_title shadow_box'>
      <div>
        <span onClick={() => { window.history.back() }} className='prev'><img src="https://platform.antdiy.vip/static/image/xiangzuo.svg" /></span>
        <span>{name}</span>
        <i></i>
      </div>
    </div>
    <div className='article_box'>
      <div className='article_title'>{name}</div>
      <div className='article_text'>
        {
          id == '' ? null : id == 0 ? <div className="shopify-policy__body">
            <div className="rte">
              <div className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc">● <strong>سياسة الإرجاع</strong><br />
                سياسة الإرجاع لدينا صالحة لمدة 7 أيام. إذا مرت 7 أيام منذ تسليم طلبك ، فلن يتم قبول طلب الإرجاع الخاص بك.
                لكي تكون مؤهلاً للإرجاع ، يجب أن يكون العنصر غير مستخدم وغير مغسول وفي نفس الحالة التي استلمته بها. يجب أن يكون أيضًا في العبوة الأصلية الواضحة مع إرفاق جميع الملصقات (إن وجدت).
                المنتجات المخصصة غير مؤهلة للإرجاع ولا يمكن استبدالها إلا بحجم مختلف.
                إذا لم يتم استيفاء الشروط المذكورة أعلاه ، فقد يتم رفض طلب الإرجاع / الاستبدال الخاص بك.<br />
                ● <strong>هل يمكنني إرجاع عنصر؟</strong><br />
                أهلية العودة
                لقد تلقيت المنتج الخطأ ؛
                لقد تلقيت حجمًا خاطئًا ؛
                لقد تلقيت منتج تالف.
                فئات المنتجات غير القابلة للإرجاع
                الملحقات في المنتج ؛
                ثياب داخلية؛
                نسيج غير مخيط
                أمر الصرف.
                ملاحظة: لجميع طلبات الصرف الدولية ، مطلوب رسوم ثابتة قدرها 40 ريال سعودي في المملكة العربية السعودية ، ورسوم ثابتة قدرها 32 درهم إماراتي مطلوبة في الإمارات العربية المتحدة.<br /></span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc">● <strong>هل يمكنني استبدال عنصر؟</strong><br />
                نعم ، يمكنك استبدال طلبك بحجم ولون مختلف من خلال عمليات الإرجاع والاستبدال.
                ملاحظة: لجميع طلبات الصرف الدولية ، مطلوب رسوم ثابتة قدرها 40 ريال سعودي في المملكة العربية السعودية ، ورسوم ثابتة قدرها 32 درهم إماراتي مطلوبة في الإمارات العربية المتحدة.
                <br />● <strong>كيف يمكنني تقديم طلب إرجاع / استبدال؟</strong><br />
                تواصل معنا عبر الواتساب والبريد الإلكتروني. البريد الإلكتروني: support@dazzlinn.com
                يرجى توضيح احتياجات الإرجاع الخاصة بك وسبب الإرجاع ، حتى يتمكن موظفونا عبر الإنترنت من مساعدتك في العودة وتبادل العمل في أقرب وقت ممكن.
                إذا تمت الموافقة على طلب الإرجاع / الاستبدال وتحتاج إلى شحن ، فستتلقى رسالة بريد إلكتروني تحتوي على تعليمات الشحن وملصق إعادة الشحن. سوف تسترد أموالك عند إرجاع المنتج.
                <br />● <strong>هل يمكن استبدال أمر التبادل مرة أخرى؟</strong><br />
                لا ، نحن لا نقبل عمليات الإرجاع أو الاستبدال للمنتجات التي تم استبدالها سابقًا.</span></div>
              <div className="tw-data-text tw-text-large tw-ta" id="tw-target-text"><span classNa="Y2IQFc"><br /><br /></span></div>
            </div>
          </div> : id == 1 ? <div className="shopify-policy__body">
            <div className="rte">
              <div className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc">تصف سياسة الخصوصية هذه كيفية جمع معلوماتك الشخصية واستخدامها ومشاركتها عند زيارة موقع dazzlinn.com أو إجراء عملية شراء من ("الموقع الإلكتروني").
                المعلومات الشخصية التي نجمعها عندما تزور موقع الويب هذا ، نقوم تلقائيًا بجمع معلومات معينة حول جهازك ، بما في ذلك معلومات حول متصفح الويب وعنوان IP والمنطقة الزمنية وبعض ملفات تعريف الارتباط المثبتة على جهازك. بالإضافة إلى ذلك ، أثناء تصفحك للموقع ، نقوم بجمع معلومات حول الصفحات الفردية أو المنتجات التي تعرضها ، والمواقع أو مصطلحات البحث التي أحالتك إلى الموقع ، ومعلومات حول كيفية تفاعلك مع الموقع. نشير إلى هذه المعلومات التي تم جمعها تلقائيًا باسم "معلومات الجهاز".
                نجمع معلومات الجهاز باستخدام التقنيات التالية: "
                "ملف تعريف الارتباط" هو ملف بيانات يتم وضعه على جهازك أو جهاز الكمبيوتر الخاص بك ، وعادةً ما يحتوي على معرف فريد مجهول. لمزيد من المعلومات حول ملفات تعريف الارتباط وكيفية تعطيلها ، قم بزيارة http://www.allaboutcookies.org.
                تتبع "ملفات السجل" الإجراءات التي تحدث على الموقع وتجمع البيانات بما في ذلك عنوان IP الخاص بك ونوع المتصفح ومزود خدمة الإنترنت وصفحات الإحالة / الخروج وطوابع التاريخ / الوقت.<br /></span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc">"إشارات الويب" و "العلامات" و "البكسل" هي ملفات إلكترونية تسجل معلومات حول كيفية تصفحك لموقع الويب هذا.
                بالإضافة إلى ذلك ، عند إجراء عملية شراء أو محاولة إجراء عملية شراء عبر الموقع ، فإننا نجمع معلومات معينة منك ، بما في ذلك اسمك وعنوان إرسال الفواتير وعنوان الشحن ومعلومات الدفع (بما في ذلك رقم بطاقة الائتمان) وعنوان البريد الإلكتروني ورقم الهاتف. نشير إلى هذه المعلومات باسم "معلومات الطلب".
                عندما نتحدث عن "المعلومات الشخصية" في سياسة الخصوصية هذه ، فإننا نتحدث عن معلومات الجهاز ومعلومات الطلب.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc">كيف نستخدم المعلومات الشخصية الخاصة بك؟ نستخدم معلومات الطلب التي نجمعها بشكل عام للوفاء بأي طلب يتم تقديمه عبر الموقع (بما في ذلك معالجة معلومات الدفع الخاصة بك ، وترتيب الشحن ، وتزويدك بفاتورة و / أو تأكيد الطلب).
                بالإضافة إلى ذلك ، نستخدم معلومات الطلب هذه من أجل: التواصل معك ؛ فحص طلباتنا بحثًا عن مخاطر محتملة أو احتيال ؛ وتزويدك بالمعلومات أو الإعلانات المتعلقة بمنتجاتنا أو خدماتنا بناءً على التفضيلات التي شاركتها معنا.
                نستخدم معلومات الجهاز التي نجمعها لمساعدتنا في فحص المخاطر المحتملة والاحتيال (على وجه الخصوص عنوان IP الخاص بك) ، ولتحسين موقعنا الإلكتروني وتحسينه بشكل عام (على سبيل المثال ، من خلال إنشاء معلومات حول كيفية تصفح عملائنا للموقع والتفاعل معه تحليل التفاعلات وتقييم نجاح حملاتنا التسويقية والإعلانية).
                أخيرًا ، قد نشارك أيضًا معلوماتك الشخصية للامتثال للقوانين واللوائح المعمول بها ، للرد على مذكرات الاستدعاء أو أوامر البحث أو الطلبات القانونية الأخرى للحصول على المعلومات التي نتلقاها ، أو لحماية حقوقنا بطريقة أخرى.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc">الإعلان السلوكي كما هو مذكور أعلاه ، نستخدم معلوماتك الشخصية لتزويدك بالإعلانات المستهدفة أو الاتصالات التسويقية التي نعتقد أنها قد تهمك.
                عدم التعقب يرجى ملاحظة أننا لا نغير ممارسات جمع البيانات على موقعنا الإلكتروني واستخدام الممارسات عندما نرى إشارة "عدم التتبع" من متصفحك.

                الاحتفاظ بالبيانات عند تقديم طلب عبر هذا الموقع ، سنحتفظ بمعلومات طلبك في سجلاتنا ، ما لم تطلب منا حذف هذه المعلومات.
                التغييرات قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس ، على سبيل المثال ، التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى.
                اتصل بنا للحصول على مزيد من المعلومات حول ممارسات الخصوصية لدينا ، إذا كانت لديك أي أسئلة ، أو إذا كنت ترغب في تقديم شكوى ، يرجى مراسلتنا عبر البريد الإلكتروني على support@dazzlinn.com</span></div>
            </div>
          </div> : id == 2 ? <div className="shopify-policy__body">
            <div className="rte">
              <div className="tw-data-text tw-text-large tw-ta" id="tw-target-text"><span className="Y2IQFc">تحدد هذه الشروط والأحكام ("الاتفاقية") الشروط والأحكام العامة لاستخدامك لموقع dazzlinn.com ("الموقع" أو "الخدمة") والمنتجات والخدمات ذات الصلة (يشار إليها مجتمعة باسم "الخدمات"). هذه الاتفاقية ملزمة قانونًا بينك ("المستخدم" أو "أنت" أو "الخاص بك") و ("نحن" أو "نحن" أو "خاصتنا"). من خلال الوصول إلى واستخدام الموقع والخدمات ، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بشروط هذه الاتفاقية. إذا كنت تلتزم بهذه الاتفاقية نيابةً عن شركة أو كيان قانوني آخر ، فأنت تقر بأن لديك السلطة لإلزام هذا الكيان ببنود هذه الاتفاقية ، وفي هذه الحالة يكون مصطلح "المستخدم" أو "أنت" أو "الخاص بك" "يشير إلى هذا الكيان. إذا لم يكن لديك مثل هذه السلطة ، أو إذا كنت لا توافق على شروط هذه الاتفاقية ، فيجب عليك عدم قبول هذه الاتفاقية ويجب عدم الوصول إلى الموقع والخدمات واستخدامها.</span></div>
              <div className="tw-data-text tw-text-large tw-ta" id="tw-target-text"><span className="Y2IQFc"><p>● محتوى المستخدم</p>
                نحن لا نملك أي بيانات أو معلومات أو مواد (يشار إليها إجمالاً باسم "المحتوى") التي ترسلها على الموقع أثناء استخدام الخدمات. أنت وحدك المسؤول عن الدقة والجودة والاكتمال والشرعية والموثوقية والملاءمة وملكية الملكية الفكرية أو الحق في استخدام جميع المواد المقدمة. يجوز لنا مراقبة ومراجعة المحتوى على الموقع الذي ترسله أو تنشئه باستخدام خدماتنا. أنت تمنحنا الإذن بالوصول إلى محتوى حساب المستخدم الخاص بك ونسخه وتوزيعه وتخزينه ونقله وإعادة تنسيقه وعرضه وتنفيذه ، ولكن فقط للأغراض الضرورية لتوفير الخدمات لك. بدون تقييد أي من هذه الإقرارات أو الضمانات ، لدينا الحق (ولكن ليس الالتزام) وفقًا لتقديرنا الخاص برفض أو إزالة أي محتوى نعتقد بشكل معقول أنه ينتهك أيًا من سياساتنا أو أنه ضار أو مرفوض بأي شكل من الأشكال. أنت تمنحنا أيضًا ترخيصًا لاستخدام أو إعادة إنتاج أو تكييف أو تعديل أو نشر أو توزيع المحتوى الذي تنشئه أو تخزنه في حساب المستخدم الخاص بك لأغراض تجارية أو تسويقية أو أي أغراض مماثلة.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc"><p>● محتوى المستخدم</p>
                نحن لا نملك أي بيانات أو معلومات أو مواد (يشار إليها إجمالاً باسم "المحتوى") التي ترسلها على الموقع أثناء استخدام الخدمات. أنت وحدك المسؤول عن الدقة والجودة والاكتمال والشرعية والموثوقية والملاءمة وملكية الملكية الفكرية أو الحق في استخدام جميع المواد المقدمة. يجوز لنا مراقبة ومراجعة المحتوى على الموقع الذي ترسله أو تنشئه باستخدام خدماتنا. أنت تمنحنا الإذن بالوصول إلى محتوى حساب المستخدم الخاص بك ونسخه وتوزيعه وتخزينه ونقله وإعادة تنسيقه وعرضه وتنفيذه ، ولكن فقط للأغراض الضرورية لتوفير الخدمات لك. بدون تقييد أي من هذه الإقرارات أو الضمانات ، لدينا الحق (ولكن ليس الالتزام) وفقًا لتقديرنا الخاص برفض أو إزالة أي محتوى نعتقد بشكل معقول أنه ينتهك أيًا من سياساتنا أو أنه ضار أو مرفوض بأي شكل من الأشكال. أنت تمنحنا أيضًا ترخيصًا لاستخدام أو إعادة إنتاج أو تكييف أو تعديل أو نشر أو توزيع المحتوى الذي تنشئه أو تخزنه في حساب المستخدم الخاص بك لأغراض تجارية أو تسويقية أو أي أغراض مماثلة.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc"><p>● دقة المعلومات</p>
                من وقت لآخر ، قد تحتوي المعلومات الموجودة على الموقع على أخطاء مطبعية أو عدم دقة أو سهو يتعلق بالتوافر والعروض الترويجية والعروض. إذا كانت أي معلومات على الموقع أو الخدمات غير دقيقة ، فإننا نحتفظ بالحق في تصحيح أي أخطاء أو عدم دقة أو سهو وتغيير المعلومات أو تحديثها أو إلغاء الطلبات في أي وقت دون إشعار (بما في ذلك بعد تقديمك للطلب). ما لم يكن مطلوبًا بموجب القانون ، لا نتعهد بأي التزام بتحديث أو مراجعة أو توضيح المعلومات الموجودة على الموقع ، بما في ذلك على سبيل المثال لا الحصر معلومات التسعير. لا ينبغي اعتبار أي تحديث محدد أو تاريخ تحديث مطبق على هذا الموقع على أنه يشير إلى أن جميع المعلومات الموجودة على هذا الموقع أو الخدمة قد تمت مراجعتها أو تحديثها.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc"><p>● خدمات الطرف الثالث</p>
                إذا قررت تمكين خدمات الجهات الخارجية أو الوصول إليها أو استخدامها ، فيرجى ملاحظة أن وصولك إلى هذه الخدمات الأخرى واستخدامها يخضع فقط لشروط وأحكام هذه الخدمات الأخرى وأننا لا نؤيدها ، ولا نتحمل أي مسؤولية عنها ، وأي جانب من جوانب هذه الخدمات الأخرى ليس مسؤولاً أو مسؤولاً عن محتواه أو الطريقة التي تتم بها معالجة البيانات (بما في ذلك بياناتك) أو أي تفاعل بينك وبين مقدمي الخدمات الآخرين ، ولا يقدم أي تعهدات بشأنه. أنت تتنازل بشكل نهائي عن أي مطالبات ضدنا فيما يتعلق بهذه الخدمات الأخرى. نحن لسنا مسؤولين أو مسؤولين عن أي ضرر أو خسارة ناتجة أو يُزعم أنها ناجمة عن أو فيما يتعلق بتمكينك أو الوصول إلى أو استخدام أي من هذه الخدمات الأخرى ، أو اعتمادك على ممارسات الخصوصية أو عمليات أمان البيانات أو سياسات أخرى من هذا القبيل خدمات أخرى. قد تحتاج إلى التسجيل أو تسجيل الدخول إلى مثل هذه الخدمات الأخرى على الأنظمة الأساسية الخاصة بها. من خلال تمكين أي خدمة أخرى ، فإنك تسمح لنا صراحة بالكشف عن بياناتك حسب الضرورة لتسهيل استخدام أو تمكين هذه الخدمة الأخرى.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc"><p>● النسخ الاحتياطي</p>
                نقوم بعمل نسخ احتياطية بشكل منتظم من الموقع الإلكتروني ومحتوياته ، وسوف نبذل قصارى جهدنا لضمان اكتمال ودقة هذه النسخ الاحتياطية. في حالة فشل الأجهزة أو فقدان البيانات ، سنقوم تلقائيًا باستعادة النسخ الاحتياطية لتقليل التأثير ووقت التعطل.
                <p>● الإعلان</p>
                  أثناء استخدامك للموقع والخدمات ، يمكنك التواصل مع أو المشاركة في العروض الترويجية للمعلنين أو الرعاة الذين يتم عرض سلعهم أو خدماتهم من خلال الموقع والخدمات. أي نشاط من هذا القبيل ، وأي شروط أو شروط أو ضمانات أو إقرارات متعلقة بهذا النشاط ، هي فقط بينك وبين الطرف الثالث المعني. نحن نخلي مسؤوليتنا أو واجبنا أو التزامنا تجاه أي من هذه الاتصالات أو المشتريات أو العروض الترويجية بينك وبين أي طرف ثالث.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc"><p>● روابط لمصادر أخرى</p>
                على الرغم من أن الموقع والخدمات قد ترتبط بموارد أخرى (مثل مواقع الويب ، وتطبيقات الهاتف المحمول ، وما إلى ذلك) ، فإننا لا نعني ، بشكل مباشر أو غير مباشر ، أي موافقة أو ارتباط أو رعاية أو تأييد أو انتساب إلى أي مورد مرتبط ما لم ينص على وجه التحديد في هذا الصدد. . نحن لسنا مسؤولين عن فحص أو تقييم ، ولا نصادق على منتجات أي شركة أو فرد أو محتوى مواردها. نحن نخلي مسؤوليتنا عن أفعال ومنتجات وخدمات ومحتوى أي طرف ثالث. يجب عليك قراءة الإشعارات القانونية وشروط الاستخدام الأخرى بعناية لأي موارد تصل إليها من خلال الروابط الموجودة على الموقع والخدمات. إن ارتباطك بأي موارد أخرى خارج الموقع يكون على مسؤوليتك الخاصة.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc"><p>● الاستخدام المحظور</p>
                بالإضافة إلى الشروط الأخرى المنصوص عليها في هذه الاتفاقية ، لا يجوز لك استخدام هذا الموقع والخدمات أو المحتوى: (أ) لأي غرض غير قانوني ؛ (ب) تحريض الآخرين على ارتكاب أي عمل غير قانوني أو المشاركة فيه ؛ (ج) انتهاك أي القوانين الدولية أو الفيدرالية أو الإقليمية أو الخاصة بالولاية أو القواعد أو القوانين أو المراسيم المحلية ؛ (د) تنتهك أو تنتهك حقوق الملكية الفكرية الخاصة بنا أو حقوق الآخرين ؛ (هـ) المضايقة على أساس الجنس أو التوجه الجنسي أو الدين أو العرق أو العرق أو العمر أو الأصل القومي أو الإعاقة أو الإساءة أو الإهانة أو الأذى أو التشهير أو التشهير أو التحقير أو التخويف أو التمييز ؛ (و) تقديم معلومات خاطئة أو مضللة ؛ (ز) تحميل أو نقل فيروسات أو أي نوع آخر من الشفرات الخبيثة التعليمات البرمجية التي ستؤثر أو قد تؤثر بأي شكل من الأشكال على وظائف أو تشغيل الموقع والخدمات أو منتجات وخدمات الطرف الثالث أو الإنترنت ؛ (ح) البريد العشوائي أو التصيد الاحتيالي أو التخدير أو التصيد أو التجسس أو الزحف أو التجريف ؛ (i) ) لأي أغراض فاحشة أو غير أخلاقية ؛ أو (ي) التدخل في ميزات الأمان الخاصة بالموقع والخدمات أو منتجات وخدمات الطرف الثالث أو الإنترنت أو التحايل عليها. نحتفظ بالحق في إنهاء استخدامك للموقع والخدمات لانتهاك أي استخدام محظور.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc"><p>● إخلاء المسؤولية</p>
                أنت توافق على تقديم هذه الخدمات على أساس "كما هي" و "حسب توفرها" وأن استخدامك للموقع والخدمات يكون على مسؤوليتك الخاصة بالكامل. نحن نخلي مسؤوليتنا صراحة عن جميع الضمانات من أي نوع ، سواء كانت صريحة أو ضمنية ، بما في ذلك ، على سبيل المثال لا الحصر ، الضمانات الضمنية الخاصة بالتسويق والملاءمة لغرض معين وعدم الانتهاك. نحن لا نضمن أن الخدمات سوف تفي بمتطلباتك ، أو أن الخدمات ستكون دون انقطاع ، أو في الوقت المناسب ، أو آمنة ، أو خالية من الأخطاء ؛ فيما يتعلق بالنتائج التي يمكن الحصول عليها من استخدام الخدمات ، أو دقة أو موثوقية أي معلومات تم الحصول عليها من خلال الخدمات ، أو سيتم تصحيح العيوب ، ولا نقدم أي ضمانات. أنت تدرك وتوافق على أن أي مواد و / أو بيانات يتم تنزيلها أو الحصول عليها بطريقة أخرى من خلال استخدام الخدمات تتم وفقًا لتقديرك الخاص وعلى مسؤوليتك الخاصة وأنك ستكون مسؤولاً عن أي تلف في البيانات أو ضياع لتحمل المسؤولية الكاملة. ما لم يُنص على خلاف ذلك ، لا نضمن أي سلع أو خدمات تم شراؤها أو الحصول عليها من خلال الخدمات أو أي معاملات تتم من خلال الخدمات. لن تنشئ أي مشورة أو معلومات شفهية أو مكتوبة تحصل عليها منا أو من خلال الخدمات أي ضمان غير منصوص عليه صراحةً في هذه الوثيقة.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc"><p>● التغييرات والتصحيحات</p>
                نحتفظ بالحق في تعديل هذه الاتفاقية أو شروطها المتعلقة بالموقع والخدمات في أي وقت ، وتسري فور نشر نسخة محدثة من هذه الاتفاقية على الموقع. عندما نقوم بذلك ، سنقوم بنشر إشعار على الصفحة الرئيسية للموقع. استمرار استخدام الموقع والخدمات بعد أي تغييرات من هذا القبيل يشكل موافقتك على هذه التغييرات.
                <p>● قبول هذه الشروط</p>
                أنت تقر بأنك قد قرأت هذه الاتفاقية وتوافق على جميع الشروط والأحكام الخاصة بها. من خلال الوصول إلى واستخدام الموقع والخدمات ، فإنك توافق على الالتزام بهذه الاتفاقية. إذا كنت لا توافق على الالتزام بشروط هذه الاتفاقية ، فأنت غير مصرح لك بالوصول إلى الموقع والخدمات أو استخدامها.
                <p>● اتصل بنا</p>
                إذا كنت ترغب في الاتصال بنا لمعرفة المزيد حول هذه الاتفاقية ، أو الاتصال بنا بخصوص أي مسألة تتعلق بها ، يمكنك إرسال بريد إلكتروني إلى support@dazzlinn.com</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc"><br /></span></div>
            </div>
          </div> : id == 3 ? <div className="shopify-policy__body">
            <div className="rte">
              <p>&nbsp;</p>
              <div className="tw-data-text tw-text-large tw-ta" id="tw-target-text"><span className="Y2IQFc"><p>● طريقة الشحن</p>
                نحن فخورون بتقديم خدمات الشحن الدولية التي تعمل حاليًا في العديد من دول مجلس التعاون الخليجي ودول الشرق الأوسط الأخرى. ليس هناك ما هو أكثر أهمية بالنسبة لنا من تقديم قيمة وخدمة رائعة لعملائنا. سنستمر في التطور لتلبية احتياجات جميع عملائنا ، وتقديم خدمة تفوق كل التوقعات ، في أي مكان في العالم.
                <p>● نطاق التسليم</p>
                نقدم خدمات الشحن إلى المملكة العربية السعودية والإمارات العربية المتحدة في الشرق الأوسط. ومع ذلك ، هناك بعض المناطق النائية التي لا يمكننا التوصيل إليها. إذا كنت في واحدة ، فسنتواصل معك. تختلف تكاليف اللوجستيات الجوية الدولية من بلد إلى آخر. عادة ما يكون لموقعنا الإلكتروني بعض أنشطة الشحن المجاني.</span></div>
              <div id="tw-target-text" className="tw-data-text tw-text-large tw-ta"><span className="Y2IQFc"><p>● كم من الوقت سيستغرق الشحن؟</p>
                المملكة العربية السعودية: 6-12 يوم
                الإمارات العربية المتحدة: 6-12 يوم
                * إذا تم شحن بعض المنتجات من مصانع محلية ، فيمكن تسليمها إلى المملكة العربية السعودية والإمارات العربية المتحدة في غضون 3 أيام.
                * إذا لم يتم استلام الطلب في غضون 15 يوم عمل ، يرجى التواصل مع لوجستيات التوصيل المحلية التي أرسلت الطلب أو الاتصال بنا.
                <p>● أخرى</p>
                يمكنك رفض التسليم إذا تسببت العبوة في أي خسارة أو تلف.</span></div>
            </div>
          </div> : null}
      </div>
    </div>
  </div>
}