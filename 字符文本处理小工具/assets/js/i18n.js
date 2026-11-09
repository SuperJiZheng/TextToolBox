const LANGS = {
  zh: {
    nav: { home: '首页', tools: '工具分类', article: '文章中心', clean: '清理乱码', remove: '去空行', full: '全角转半角', diff: '文本比对' },
    site: { name: '文本工具盒', title: 'TextToolBox', subtitle: '清理乱码、去除空行、全角转半角' },
    home: {
      eyebrow: 'TextToolBox',
      heroTitle: '清理乱码、去除空行、全角转半角',
      heroLead: '面向 PDF 复制文字、网页复制内容、微信聊天记录和文档整理等常见场景，帮助你快速处理异常符号、空白行和全角格式，让文本更适合复制、整理和校对使用。',
      btnPrimary: '清理乱码工具',
      btnSecondary: '文本比对工具',
      commonTitle: '常见文本问题',
      commonProblems: ['复制后多余换行', '隐藏空格和乱码', '标点和空格统一', '差异对比查看'],
      commonProblemLabels: { pdf: 'PDF', web: '网页', full: '全角', compare: '校对' },
      toolTitle: '常用文本处理工具',
      quickTitle: '按使用场景选择',
      faqTitle: '常见问题与解决方案',
      faq1: '清理乱码会不会删掉正常中文？',
      faq1Ans: '不会。工具只会去掉常见乱码符号、控制字符和重复空白，正常中文内容会保留。',
      faq2: '全文字转换后如何恢复？',
      faq2Ans: '全角转半角不是数据还原，而是规范格式转换。若有需要，建议先保留原文副本再处理。',
      faq3: '适合处理 PDF 复制内容吗？',
      faq3Ans: '适合。尤其适合处理 PDF、网页、微信复制后的噪音字符、重复空行和全角空格。',
      topCards: {
        clean: { title: '清理乱码字符', desc: '适合处理 PDF、网页和微信复制内容中出现的异常符号、替换字符和杂乱空格。', action: '进入工具 →' },
        remove: { title: '去除空行和多余换行', desc: '清理多余空白行、重复换行和空白内容，方便后续编辑和复制使用。', action: '进入工具 →' },
        full: { title: '全角转半角', desc: '将中文全角空格、标点和字符快速转换为半角，提升文本规范性。', action: '进入工具 →' },
        diff: { title: '文本比对', desc: '对比两段文字差异，便于版本检查、文案修订和内容审核。', action: '进入工具 →' },
        all: { title: '全部工具分类', desc: '查看所有文本处理工具，方便按问题类型快速定位。' },
        article: { title: '文章中心', desc: '查看 PDF、网页复制和微信文本相关的问答与解决方案。' },
        pdf: { title: 'PDF 复制文字换行问题', desc: '了解为什么复制 PDF 时会出现大量空行和换行乱码。' },
        wechat: { title: '微信乱码处理', desc: '适合处理聊天记录中的乱码符号和复制后的异常空白。' }
      },
      faqHeader: '常见问题 FAQ',
      searchIntent: {
        title: '高意图搜索入口',
        item1: 'PDF 复制后出现大量换行怎么处理',
        item2: '微信复制内容乱码和空白怎么清理',
        item3: '网页复制文本里隐藏空格怎么快速去掉',
        item4: '全角字符怎么批量转半角',
        item5: '两版文案怎么快速对比差异'
      },
      toolFlow: {
        title: '推荐清洗路径',
        item1: '复制文本 → 清理乱码 → 去空行 → 全角转半角',
        item2: 'PDF / 网页 / 微信问题统一先做字符清理',
        item3: '文案修订前使用文本比对精准锁定改动',
        item4: '在文章中心查看对应问题的具体解决方案'
      },
      guideCards: [
        { title: '复制 PDF 文字总是多出很多换行符怎么办？', desc: '介绍为什么 PDF 复制文字会出现异常换行，以及如何用一键工具进行清理。' },
        { title: '从网页复制下来的文字有大量多余空格如何清理', desc: '讲解网页复制内容里的空格、换行和隐藏字符来源，以及批量清理方法。' },
        { title: '微信复制文字有乱码符号怎么处理', desc: '适合处理聊天记录、转发内容中的多余符号与异常空白。' },
        { title: '全角字符怎么转成半角？常见问题整理', desc: '适合文档规范化、表格整理和复制文本的格式统一场景。' },
        { title: '两段文字怎么快速比对差异？', desc: '介绍文本比对工具的实际使用方式和内容校对思路。' },
        { title: '从复制文案到清洁文本：噪音字符怎么去掉', desc: '总结常见文本噪音来源和处理顺序，适合日常资料整理。' }
      ],
      scenarios: {
        title: '常见搜索场景',
        list: ['PDF 复制文字出现很多多余换行怎么办', '微信复制文本中有乱码符号如何批量处理', '全角字符如何快速转成半角', '两段文字怎么快速比对差异', '网页复制内容里有大量多余空格如何清理']
      },
      useCases: {
        title: '适合的使用场景',
        list: ['整理转码后的文档内容', '清洗聊天记录和复制粘贴文字', '规范表格和 CSV 数据字段', '快速检查文案修改差异', '减少 PDF 和网页复制文本中的噪音']
      }
    },
    tools: {
      cleanTitle: '清理乱码字符工具',
      cleanLead: '适合处理 PDF 复制文字、网页复制内容和微信聊天记录中的异常符号、替换字符、无效空白和多余换行。',
      cleanBtn: '清理乱码',
      cleanPlaceholder: '把含有乱码的内容粘贴进来...',
      cleanResult: '处理结果',
      removeTitle: '去空行工具',
      removeLead: '批量删除多余空白行、重复换行和空白内容，把混乱文本整理成更适合复制、分发和处理的版本。',
      removeBtn: '去除空行',
      removePlaceholder: '把需要去空行的文本粘贴进来...',
      fullTitle: '全角转半角工具',
      fullLead: '快速把中文全角空格、数字、英文字母和标点转成半角，适合整理文档、表单、复制内容和数据清洗。',
      fullBtn: '转换',
      fullPlaceholder: '例如：１２３　ＡＢＣ　，。！？',
      diffTitle: '文本比对工具',
      diffLead: '输入两段文本后，系统会自动标出新增、删除和修改内容，方便版本回顾、文案审校和合同校对。',
      diffBtn: '开始比对',
      diffOld: '旧文本',
      diffNew: '新文本',
      cleanPage: {
        inputLabel: '待处理文本',
        copy: '复制结果',
        clear: '清空',
        scenarioTitle: '适用场景',
        scenarioItems: ['PDF 复制文字出现大量乱码', '网页内容带有异常符号', '微信聊天记录混入替换字符', '修正多余空格和重复换行'],
        faqTitle: 'FAQ',
        faq1: '能清理哪些乱码？',
        faq1Ans: '主要处理替换字符、无效控制符、异常空格、重复换行等常见噪音内容。',
        faq2: '是否会损坏正常内容？',
        faq2Ans: '正常中文、英文和数字会被保留，工具只处理明显异常字符和多余空白。',
        commonTitle: '常见问题',
        commonIssues: ['复制 PDF 文本后出现大量乱码和断行', '微信聊天记录里有很多不识别的符号', '网页复制内容被混入广告和隐藏空白字符'],
        docsTitle: '相关文档',
        docs: ['PDF 复制文本多余换行怎么办', '微信乱码怎么处理', '复制文本里大量隐藏空格怎么去掉'],
        toolchainTitle: '相关工具链',
        toolchain: ['去空行工具', '全角转半角工具', '文本比对工具']
      },
      removePage: {
        inputLabel: '原始文本',
        resultLabel: '处理结果',
        copy: '复制结果',
        clear: '清空',
        useCaseTitle: '常见用途',
        useCases: ['整理复制来的文案', '清理长文本中的空行', '去除 CSV 和清单列表中的空白', '修正 PDF/网页文本中的断行'],
        adviceTitle: '操作建议',
        advice: '如果需要保留段落分隔，可以只去重复空行；如果需要更紧凑的文本，则连同空白行一并删除。',
        commonTitle: '常见问题',
        commonIssues: ['复制内容中出现很多空白段落和重复换行', 'PDF 和网页文本断行过多，阅读很费力', '文案整理时需要快速压缩空白但保留结构'],
        docsTitle: '相关文档',
        docs: ['PDF 复制文本多余换行怎么办', '复制文本大量隐藏空格怎么去掉', '比对前先清洗文本更准确'],
        toolchainTitle: '相关工具链',
        toolchain: ['清理乱码工具', '全角转半角工具', '文本比对工具'],
        relatedTitle: '相关工具',
        related: ['清理乱码工具', '全角转半角工具', '文本比对工具'],
        relatedDesc: ['去除异常符号、替换字符和杂乱空白，适合 PDF 和网页复制内容处理。', '统一全角空格和中文标点，保证文本格式更规范。', '对比两段文本差异，便于版本校对和内容审核。']
      },
      fullPage: {
        inputLabel: '待转换文本',
        resultLabel: '转换结果',
        copy: '复制结果',
        clear: '清空',
        scenarioTitle: '适用场景',
        scenarios: ['中文文档统一格式', '复制内容规范化', '表格数据清洗', '脚本或代码输入前处理'],
        noteTitle: '注意事项',
        note: '如果原文含有中文字符，转换时只会处理全角标点和空格，不会改变中文文字本身。',
        commonTitle: '常见问题',
        commonIssues: ['复制文本中有很多全角空格和中文标点', '文档格式不统一，影响阅读和排版', '中英文混排时空格和标点不一致'],
        docsTitle: '相关文档',
        docs: ['全角字符怎么转成半角', '复制文本中大量隐藏空格怎么清理', '比对前文本清洗为什么更准确'],
        toolchainTitle: '相关工具链',
        toolchain: ['清理乱码工具', '去空行工具', '文本比对工具'],
        relatedTitle: '相关工具',
        related: ['清理乱码工具', '去空行工具', '文本比对工具'],
        relatedDesc: ['处理 PDF 和网页复制内容中的异常字符、替换符和噪音空白。', '去除多余空行和重复换行，让文本更紧凑、更易编辑。', '对比文本版本差异，适合校对、修订和审阅场景。']
      },
      diffPage: {
        oldLabel: '旧文本',
        newLabel: '新文本',
        resultLabel: '比对结果',
        clear: '清空',
        scenarioTitle: '适合场景',
        scenarios: ['文案修改差异检查', '合同或规则版本比对', '内容改写评审', '博客和稿件修订'],
        noteTitle: '说明',
        note: '当前比对以逐行检测为主，适用于文本校对和版本审阅，便于快速定位差异。',
        commonTitle: '常见问题',
        commonIssues: ['两版文案有哪些不一致，快速看不出来', '修订稿和原文差异过大，无法直接定位', '合同、稿件和说明书修改后需要核对关键变更'],
        docsTitle: '相关文档',
        docs: ['两段文字怎么快速比对差异', '比对前文本清洗为什么更准确', '噪音字符怎么去掉'],
        toolchainTitle: '相关工具链',
        toolchain: ['清理乱码工具', '去空行工具', '全角转半角工具'],
        relatedTitle: '相关工具',
        related: ['清理乱码工具', '去空行工具', '全角转半角工具'],
        relatedDesc: ['先去掉异常字符和噪音空白，再进行文本比对更容易发现真实差异。', '清理复制文本中的空白行后，再进行内容比对会更直观。', '统一全角和半角后，文案校对更容易判断文本差异。']
      }
    },
    blogIndex: {
      lead: '总结 PDF、网页复制、微信文本和文档整理中常见的乱码、空白和格式问题，并提供对应工具入口。',
      cards: [
        { title: '复制 PDF 文字总是多出很多换行符怎么办？', desc: '分析 PDF 文本复制时出现异常断行和多余换行的原因，并给出清理方案。' },
        { title: '从网页复制下来的文字有大量多余空格如何清理', desc: '解决网页复制文本中隐藏空格、重复换行和乱码标记的问题。' },
        { title: '微信复制文字有乱码符号怎么处理', desc: '整理微信聊天记录和转发内容中的异常字符、无效符号和杂乱空白。' },
        { title: '全角字符怎么转成半角？常见问题整理', desc: '涉及中文全角空格、标点和字符转换，适合文档和内容规范化场景。' },
        { title: '两段文字怎么快速比对差异？文本比对工具怎么用', desc: '介绍文本差异对比的方法以及校对和修改审查的实际建议。' },
        { title: '从复制文案到清洁文本：常见噪音字符怎么去掉', desc: '汇总多种文本场景的清洗思路，覆盖乱码、空行和隐形空白。' },
        { title: '复制文本里有大量隐藏空格怎么去掉', desc: '介绍隐藏空格和不可见字符的识别方式，以及如何快速清理。' },
        { title: 'Word 中复制 PDF 文本断行太多怎么办', desc: '针对从 PDF 或网页复制到 Word 后断行异常的集中处理办法。' },
        { title: '比对前先清洗文本，为什么更容易看出真实差异', desc: '解释为什么在文本比对前先做乱码和空白清理，能更准确发现关键修改。' },
        { title: '复制后异常符号怎么一键清理', desc: '适合处理复制文本中的乱码、替换符号和隐形空白字符。' },
        { title: '去掉重复换行和空白段落的最佳方法', desc: '适合清洗 PDF、网页和文档中大量无效空白行的情况。' },
        { title: '文本版本对比怎么做得更快更准', desc: '适合内容审核、文案修订和合同或说明书差异检查。' }
      ],
      categories: {
        title: '按问题类型浏览',
        items: ['PDF 复制文字异常换行', '网页复制内容空格过多', '微信消息乱码和复制噪音', '全角空格与中英文混排', '文本比对和修订审查']
      },
      searchIntent: {
        title: '高意图搜索词',
        items: ['复制 PDF 文字多余换行怎么清理', '网页复制文本空格太多怎么去掉', '微信复制乱码符号怎么处理', '全角字符转半角工具怎么用', '两段文本怎么快速比对差异']
      }
    },
    toolsIndex: {
      lead: '按常见使用场景整理的文本处理工具，适合 PDF 复制文字、网页内容清洗、文档格式统一和文本版本校对。',
      sceneTitle: '按场景快速选择',
      card1: { title: 'PDF 复制文字换行异常', desc: '处理复制 PDF 内容时出现的大量断行和重复空白问题。' },
      card2: { title: '网页复制文本空格过多', desc: '清理网页复制内容中的隐藏空格、重复换行和噪音字符。' },
      card3: { title: '微信复制文本乱码怎么处理', desc: '适合从聊天记录、网页转发和文档中清理异常乱码字符。' },
      card4: { title: '全角字符怎么转半角', desc: '关注全角空格、中文标点和中英文混排时的规范转换方法。' },
      browseByObject: {
        title: '按处理对象浏览',
        items: ['PDF 文本：清理换行、空白和乱码', '网页复制：去除隐藏空格和重排版残留', '微信消息：去掉异常符号与聊天转发噪音', '文档和表格：统一全角标点与空白格式']
      },
      processOrder: {
        title: '处理顺序建议',
        items: ['先清理异常字符和隐藏空白', '再删除重复换行和空白段落', '最后统一全角/半角和版式风格', '必要时用文本比对检查最终差异']
      }
    },
    catalog: {
      clean: { badge: '乱码处理', title: '清理乱码工具', desc: '适合 PDF、网页和微信复制文本中的异常字符、乱码符号和杂乱空白。' },
      remove: { badge: '空白处理', title: '去空行工具', desc: '批量删除多余空行、重复换行和空白内容，提升文本可读性。' },
      full: { badge: '格式统一', title: '全角转半角工具', desc: '快速将中文全角空格和标点统一为半角，规范文档格式。' },
      diff: { badge: '版本校对', title: '文本比对工具', desc: '对比两段文字差异，定位新增、删除和修改内容。' }
    },
    article: {
      pdf: {
        title: '复制 PDF 文字总是多出很多换行符怎么办？',
        p1: '很多人复制 PDF 里的文字后，会发现文本除了正常内容外，还夹杂大量换行、空行或者乱码符号。这通常不是原文真的分段很多，而是 PDF 解析时记录了隐藏的换行标记和列布局信息。',
        h2_1: '为什么会出现多余换行',
        p2: 'PDF 是以页面布局为核心的格式，复制时常会保留页面排版信息。列、段落、行末空白以及编码问题，都会导致原本一句话被拆成多行，或者出现多余空格、符号和换行。',
        h2_2: '常见修复方法',
        li1: '先用“清理乱码”工具去掉异常符号和非正常空白字符',
        li2: '再用“去空行”工具删除多余的空白行和重复换行',
        li3: '若内容中包含全角空格或中文全角标点，可再用“全角转半角”工具统一格式',
        h2_3: '最实用的方案',
        p3: '如果你只是想快速整理复制文本，最省时的方法是直接把内容粘贴到本站的 <a href="/tools/clean-garbled.html">清理乱码工具</a>，再经过 <a href="/tools/remove-blank-lines.html">去空行工具</a>，最终得到干净可复制的版本。',
        faq: 'FAQ',
        q1: 'Q：这样处理后会不会丢字？',
        a1: 'A：通常不会。工具主要去除异常换行、空白和乱码符号，正常文字会保留。',
        q2: 'Q：适合会议纪要和 PDF 资料整理吗？',
        a2: 'A：特别适合。很多会议资料和论文文本都适合用这类方法快速清理。',
        related: '相关工具'
      },
      wechat: {
        title: '微信复制文字有乱码符号怎么处理',
        p1: '微信聊天记录、网页转发和截图内容在复制时，经常会带出隐藏字符、无效空白和特殊符号。看起来像一串乱码，实际常常来源于消息编码、页面样式或复制过程中的非标准字符。',
        h2_1: '最常见的来源',
        li1: '聊天内容中混合了特殊空白字符和控制符',
        li2: '网页分享内容带有隐藏换行和广告元素',
        li3: '复制过程中保留了页面样式导致符号被拆碎',
        h2_2: '建议处理顺序',
        p2: '先使用 <a href="/tools/clean-garbled.html">清理乱码工具</a> 去掉异常符号，再使用 <a href="/tools/remove-blank-lines.html">去空行工具</a> 删除重复空白行，必要时再用 <a href="/tools/fullwidth-halfwidth.html">全角转半角工具</a> 统一格式。',
        h2_3: '适合处理哪些内容',
        p3: '这种方法非常适合整理聊天记录、转发内容、截图抓取文本和复制粘贴后的资料清理。处理后，文本会更适合发给他人、放进文档或用于后续编辑。'
      },
      webpage: {
        title: '从网页复制下来的文字有大量多余空格如何清理',
        p1: '网页内容往往包含隐藏的空白字符、广告布局残留、列表样式和强制换行。复制后，文本看起来像“断断续续”，尤其是多余空格、空行、特殊符号特别明显。',
        h2_1: '问题出现的常见原因',
        li1: '网页排版会用换行元素和强制空格分隔内容',
        li2: '复制时带出可见或不可见空白字符',
        li3: '移动端页面、脚本嵌入内容和广告模块也会混入噪音字符',
        h2_2: '可用的处理方式',
        p2: '最有效的方式是先清理乱码，再去掉空白行。比如将文本粘贴到 <a href="/tools/clean-garbled.html">清理乱码工具</a>，把异常字符和多余空格去掉；再用 <a href="/tools/remove-blank-lines.html">去空行工具</a> 合并空白段落，最后用 <a href="/tools/fullwidth-halfwidth.html">全角转半角</a> 统一特殊符号格式。',
        h2_3: '适合谁用',
        p3: '这种方法比较适合文案整理、聊天记录提取、资料整理和内容抓取后再加工的场景。',
        related: '相关工具'
      },
      fullwidth: {
        title: '全角字符怎么转成半角？常见问题整理',
        p1: '中文文本中常见的全角空格、逗号、句号和括号在复制、转码或网页内容处理中经常残留。它们虽然不影响基本阅读，但会使文本看起来不够规范，尤其在脚本、表格、邮箱和文档整理时更明显。',
        h2_1: '哪些内容通常需要转换',
        li1: '全角空格，常见于网页、Word 和复制文本中',
        li2: '中文括号、逗号和句号等标点',
        li3: '英文数字或字母混排时的全角字符残留',
        h2_2: '建议的处理流程',
        p2: '如果文本里同时存在乱码和异常空白，先用 <a href="/tools/clean-garbled.html">清理乱码工具</a> 去除噪音，然后再用 <a href="/tools/fullwidth-halfwidth.html">全角转半角工具</a> 统一规范格式，最后可用 <a href="/tools/remove-blank-lines.html">去空行工具</a> 做一轮整理。',
        h2_3: '注意事项',
        p3: '全角转半角主要适用于统一排版格式，并不等于改写文案原意。正常中文内容不会被删除，重点是规范空白和标点。'
      },
      diff: {
        title: '两段文字怎么快速比对差异？文本比对工具怎么用',
        p1: '在文案修改、合同校对、稿件审阅和版本更新时，最头疼的往往不是写作，而是找出具体差异。文本比对工具可以把新增、删除和修改的内容直接标出来，节省反复逐行对照的时间。',
        h2_1: '适合的使用场景',
        li1: '评估文案修改后的效果',
        li2: '检查合同或协议文本差异',
        li3: '审核新旧稿件更新内容',
        li4: '对比版本之间的关键差异',
        h2_2: '推荐使用流程',
        p2: '先将旧文本和新文本分别粘贴到 <a href="/tools/text-diff.html">文本比对工具</a> 中，再查看高亮结果。若文本中存在明显空白和乱码，再先用 <a href="/tools/clean-garbled.html">清理乱码工具</a> 和 <a href="/tools/remove-blank-lines.html">去空行工具</a> 处理一遍，会让比对结果更容易阅读。',
        h2_3: '为什么它有用',
        p3: '比对并不是简单对照字符，而是帮助你快速发现“哪些内容新增、哪些内容被删除、哪些地方被修改”。对于内容审校来说，这种方式比手动逐段阅读效率高很多。'
      },
      noise: {
        title: '从复制文案到清洁文本：常见噪音字符怎么去掉',
        p1: '复制文本时，最容易出现的问题并不总是字本身，而是围绕字周边的噪音字符：异常空白、重复换行、乱码符号、全角标点、隐藏空格和控制字符。它们虽然不影响基本内容，但会严重影响阅读、复制和后续处理效率。',
        h2_1: '常见噪音来源',
        li1: 'PDF 复制过程中保留版面换行',
        li2: '网页内容中夹杂隐藏空白和广告元素',
        li3: '聊天记录转发出现控制字符或替换符号',
        li4: '全角空格、中文标点和异常符号混杂',
        h2_2: '更稳妥的处理思路',
        p2: '多数情况下，建议按顺序处理：先清理乱码，再去空行，最后统一全角半角和文本格式。这样可以减少误删正常文字以及避免重复清洗。',
        h2_3: '推荐工具入口',
        p3: '<a href="/tools/clean-garbled.html">清理乱码工具</a>、<a href="/tools/remove-blank-lines.html">去空行工具</a>、<a href="/tools/fullwidth-halfwidth.html">全角转半角工具</a>可以覆盖大部分常见问题。若需要看两版文案差异，可继续使用 <a href="/tools/text-diff.html">文本比对工具</a>。'
      },
      hiddenSpace: {
        title: '复制文本里有大量隐藏空格怎么去掉？',
        p1: '复制网页内容、PDF 和表格文本时，经常会出现“看起来像正常文字，但中间有很多空白、断开，或者不规律的 spacing”。这类问题通常不是普通空格，而是隐藏空格、无效空白字符或换行标记。',
        h2_1: '为什么会出现隐藏空格',
        p2: '网页排版、表格导出、PDF 提取、跨平台复制动作都会带出额外的空白信息。它们可能是非断行空格、全角空格、零宽字符，或者复制时保留的布局标记。用户在编辑器里看不出来，却会让文字拥挤、断裂、难以整理。',
        h2_2: '真正有效的清理顺序',
        li1: '先用“清理乱码”工具去掉异常符号和无效字符',
        li2: '再用“去空行工具”删除多余换行和重复空白段落',
        li3: '最后用“全角转半角”统一中英文空格和符号风格',
        h2_3: '适合哪些场景',
        p3: '这类问题特别常见于网页内容、会议纪要、表格导出文本、复制官网文案时。若原文本需要重新排版、用于客服回复、文稿整理或者转发微信，先清理隐藏空白再处理会更省时。',
        h2_4: '推荐处理方式',
        p4: '最实用的流程是把文本复制进 <a href="/tools/clean-garbled.html">清理乱码工具</a>，再用 <a href="/tools/remove-blank-lines.html">去空行工具</a>，最后按需统一 <a href="/tools/fullwidth-halfwidth.html">全角转半角</a>。这样既能保留正文内容，也能减少排版噪音。',
        related: '相关工具',
        card1Title: '清理乱码工具',
        card1Desc: '去掉异常符号、无效空白和多余换行，适合清洗复制内容。',
        card2Title: '去空行工具',
        card2Desc: '删除重复空白行和无效段落，适合修正网页和 PDF 文本。',
        card3Title: '全角转半角工具',
        card3Desc: '统一全角空格和中文符号，让文本更规范、更适合编辑。'
      },
      wordPdf: {
        title: 'Word 中复制 PDF 文本断行太多怎么办',
        p1: '很多人把 PDF 或网页内容复制到 Word 后发现，内容被拆成了很多小段，甚至每一行都被强制换行。通常这不是内容本身有问题，而是复制过程中保留了布局信息和隐藏空白字符。',
        h2_1: '常见原因',
        p2: 'PDF 设计为页面布局而非纯文本，复制时容易把列边距、换页符和段落信息一并带入。如果同时出现乱码字符、空白段落或双倍换行，Word 中会看起来特别散乱。',
        h2_2: '实用处理流程',
        li1: '先用“清理乱码”工具去掉异常字符',
        li2: '再用“去空行”工具消除重复空白行和断行',
        li3: '必要时再统一全角/半角，保证标点和空格风格一致',
        h2_3: '为什么不能只在 Word 里手动删',
        p3: '手动删除每一处断行效率低，而且很容易误删正常段落。一次性清理后再在 Word 中微调，通常更稳妥，也更能保留原文结构。',
        h2_4: '推荐入口',
        p4: '如果你经常遇到 PDF 复制到 Word 后“每一行都断开”，可以直接先用 <a href="/tools/clean-garbled.html">清理乱码工具</a>，再使用 <a href="/tools/remove-blank-lines.html">去空行工具</a>，最后按需要进行 <a href="/tools/fullwidth-halfwidth.html">全角转半角</a> 处理。'
      },
      cleanBeforeDiff: {
        title: '比对前先清洗文本，为什么更容易看出真实差异',
        p1: '文本比对工具很适合看版本差异，但前提是两段文本的结构尽量“干净”。如果其中一段里混入乱码、重复换行、隐藏空格或者全角符号，平台就可能把这些噪音也识别成“差异”，从而让人看不清真实修改内容。',
        h2_1: '什么叫噪音差异',
        p2: '噪音差异通常不是业务内容变化，而是复制粘贴过程中带来的换行、空白和格式问题。它们可能让两个版本看起来“差异很大”，但实际上只是排版不一致。',
        h2_2: '推荐清洗顺序',
        li1: '先用“清理乱码”去掉异常字符和替换符号',
        li2: '再用“去空行”去掉重复空白段落和多余换行',
        li3: '最后按需要统一全角/半角，避免标点和空格造成误差',
        li4: '再使用“文本比对工具”做最终审核',
        h2_3: '这样做的好处',
        p3: '清洗后再比对，结果更稳定，真正的新增、删除和修改内容会更容易辨认。尤其在合同、文案修订、说明书校对和文章重写时，这个步骤很重要。',
        h2_4: '推荐工具链',
        p4: '可直接从 <a href="/tools/clean-garbled.html">清理乱码工具</a> 开始，然后进入 <a href="/tools/remove-blank-lines.html">去空行工具</a>，最后用 <a href="/tools/text-diff.html">文本比对工具</a> 检查最终版本差异。',
        related: '相关工具',
        card1Title: '清理乱码工具',
        card1Desc: '去掉异常字符、空白和非文本噪音，适合比对前预处理。',
        card2Title: '去空行工具',
        card2Desc: '删掉重复空白行和无效段落，减少误判范围。',
        card3Title: '文本比对工具',
        card3Desc: '在清洗后对照两版内容，精确识别真实修改点。'
      }
    }
  },
  en: {
    nav: { home: 'Home', tools: 'Tools', article: 'Articles', clean: 'Clean Garbled', remove: 'Remove Blank Lines', full: 'Full/Half Width', diff: 'Text Diff' },
    site: { name: 'TextToolBox', title: 'TextToolBox', subtitle: 'Clean garbled text, remove blank lines, convert full-width characters' },
    home: {
      eyebrow: 'TextToolBox',
      heroTitle: 'Clean garbled text, remove blank lines, convert full-width characters',
      heroLead: 'Designed for common text issues such as PDF copied content, webpage text, chat records, and document cleanup. Quickly remove abnormal symbols, empty lines, and full-width formatting for better readability and editing.',
      btnPrimary: 'Cleaner',
      btnSecondary: 'Compare Text',
      commonTitle: 'Common text issues',
      commonProblems: ['Extra line breaks after PDF copy', 'Hidden spaces and garbled characters', 'Full-width punctuation cleanup', 'Difference comparison'],
      commonProblemLabels: { pdf: 'PDF', web: 'Web', full: 'Full-width', compare: 'Compare' },
      toolTitle: 'Popular text tools',
      quickTitle: 'Choose by use case',
      faqTitle: 'Common questions',
      faq1: 'Will cleaning garbled text delete normal Chinese?',
      faq1Ans: 'No. The tool only removes common garbled symbols, control characters, and repeated whitespace while keeping normal text intact.',
      faq2: 'Can I restore content after full-width conversion?',
      faq2Ans: 'Full-width to half-width conversion is a formatting normalization step, not a data restore function. It is recommended to keep a copy before conversion.',
      faq3: 'Is it suitable for PDF copied text?',
      faq3Ans: 'Yes. It works well for PDF, web pages, chat records, and copied text with noisy symbols and repeated line breaks.',
      topCards: {
        clean: { title: 'Clean garbled text', desc: 'Useful for PDF, web, and chat-copy content with abnormal symbols, garbled characters, and noisy spaces.', action: 'Open tool →' },
        remove: { title: 'Remove blank lines', desc: 'Clear extra whitespace, repeated line breaks, and blank content for easier editing and copying.', action: 'Open tool →' },
        full: { title: 'Full-width to half-width', desc: 'Convert full-width spaces, punctuation, and characters to a cleaner and more standard format.', action: 'Open tool →' },
        diff: { title: 'Text compare', desc: 'Highlight changes between two text versions for editing, proofreading, and review.', action: 'Open tool →' },
        all: { title: 'All tools', desc: 'Browse all text utilities and jump to the right cleanup workflow quickly.' },
        article: { title: 'Article center', desc: 'Read practical guides for PDF, web copy, and chat text issues.' },
        pdf: { title: 'PDF copy line breaks', desc: 'Learn why PDF text often includes extra line breaks and weird spacing.' },
        wechat: { title: 'Fix garbled chat text', desc: 'Clean unusual symbols and noisy whitespace from copied chat content.' }
      },
      faqHeader: 'Frequently asked questions',
      searchIntent: {
        title: 'High-intent search entry points',
        item1: 'How do I fix too many line breaks after copying PDF text?',
        item2: 'How do I clean garbled text and extra spaces from copied WeChat messages?',
        item3: 'How do I remove hidden spaces from copied webpage text quickly?',
        item4: 'How do I convert full-width characters to half-width in bulk?',
        item5: 'How do I compare two text versions quickly to find the real differences?'
      },
      toolFlow: {
        title: 'Recommended cleanup flow',
        item1: 'Copied text → Clean garbled characters → Remove blank lines → Normalize full-width/half-width',
        item2: 'Solve PDF, webpage, and WeChat issues by cleaning characters first',
        item3: 'Use text comparison before final approval to detect edits precisely',
        item4: 'Visit the article center for specific solutions to each problem'
      },
      guideCards: [
        { title: 'How do I remove extra line breaks from copied PDF text?', desc: 'Learn why PDF copy often creates abnormal line breaks and how to clean them quickly.' },
        { title: 'How do I clean excessive spaces from copied webpage text?', desc: 'Understand why web copy often includes hidden spaces, repeated breaks, and noisy characters.' },
        { title: 'How do I fix garbled characters in copied WeChat text?', desc: 'Useful for removing abnormal symbols and whitespace from chat content.' },
        { title: 'How do I convert full-width characters to half-width?', desc: 'A practical guide for standardizing punctuation, spacing, and copied document text.' },
        { title: 'How do I compare two text versions quickly?', desc: 'Learn a simple workflow for reviewing content differences and edits.' },
        { title: 'How to remove noisy characters from copied text?', desc: 'A practical cleanup guide for common garbled text issues and repeated breaks.' }
      ],
      scenarios: {
        title: 'Common search scenarios',
        list: ['How do I fix too many line breaks after copying PDF text?', 'How can I remove garbled characters from copied WeChat text?', 'How do I convert full-width characters to half-width quickly?', 'How do I compare two text versions quickly?', 'How do I clean the extra spaces in copied webpage text?']
      },
      useCases: {
        title: 'Common use cases',
        list: ['Clean text after document conversion', 'Clean copied chat and pasted content', 'Normalize table and CSV cell content', 'Quickly review revision differences', 'Reduce noise from PDF and web copy']
      }
    },
    tools: {
      cleanTitle: 'Clean Garbled Text Tool',
      cleanLead: 'Designed to remove abnormal symbols, garbled characters, extra spaces, and repeated line breaks from PDF, web, and chat text.',
      cleanBtn: 'Clean text',
      cleanPlaceholder: 'Paste text with garbled characters here...',
      cleanResult: 'Result',
      removeTitle: 'Remove Blank Lines Tool',
      removeLead: 'Remove extra blank lines, repeated line breaks, and whitespace noise to make the text cleaner and easier to use.',
      removeBtn: 'Remove blanks',
      removePlaceholder: 'Paste text with extra blank lines here...',
      fullTitle: 'Full-width to Half-width Tool',
      fullLead: 'Convert Chinese full-width spaces, punctuation, and characters to half-width format for cleaner document text and better compatibility.',
      fullBtn: 'Convert',
      fullPlaceholder: 'Example: １２３　ＡＢＣ　，。！？',
      diffTitle: 'Text Comparison Tool',
      diffLead: 'Paste two versions of text to see additions, deletions, and modifications clearly for proofreading or version review.',
      diffBtn: 'Compare',
      diffOld: 'Old text',
      diffNew: 'New text',
      cleanPage: {
        inputLabel: 'Text to process',
        copy: 'Copy result',
        clear: 'Clear',
        scenarioTitle: 'Use cases',
        scenarioItems: ['PDF text with many garbled characters', 'Web content with abnormal symbols', 'WeChat records mixed with replacement characters', 'Fix excessive spaces and repeated line breaks'],
        faqTitle: 'FAQ',
        faq1: 'What kinds of garbled text can it clean?',
        faq1Ans: 'It mainly removes replacement characters, invalid control symbols, abnormal spaces, and repeated line breaks.',
        faq2: 'Will it damage normal content?',
        faq2Ans: 'Normal Chinese, English, and numbers are preserved. Only obvious abnormal characters and extra whitespace are cleaned.',
        commonTitle: 'Common issues',
        commonIssues: ['PDF text with many garbled characters and broken lines', 'WeChat chats with many unrecognized symbols', 'Web copy mixed with ads and hidden spaces'],
        docsTitle: 'Related docs',
        docs: ['How to fix extra line breaks in copied PDF text', 'How to handle garbled WeChat text', 'How do I remove a large number of hidden spaces from copied text'],
        toolchainTitle: 'Related tool chain',
        toolchain: ['Remove blank lines tool', 'Full-width to half-width tool', 'Text comparison tool']
      },
      removePage: {
        inputLabel: 'Original text',
        resultLabel: 'Processed result',
        copy: 'Copy result',
        clear: 'Clear',
        useCaseTitle: 'Common uses',
        useCases: ['Organize copied copy', 'Remove blank lines from long text', 'Clean whitespace in CSV and checklist items', 'Fix broken lines in PDF/web text'],
        adviceTitle: 'Recommended usage',
        advice: 'If you need to keep paragraph breaks, remove only repeated blank lines. If you want a more compact text, remove blank lines together.',
        commonTitle: 'Common issues',
        commonIssues: ['Copied content includes many empty paragraphs and repeated line breaks', 'PDF and webpage text has too many broken lines', 'Content needs quick whitespace cleanup while keeping structure'],
        docsTitle: 'Related docs',
        docs: ['How to fix extra line breaks in copied PDF text', 'How do I remove a large number of hidden spaces from copied text', 'Why is it more accurate to clean text before diffing'],
        toolchainTitle: 'Related tool chain',
        toolchain: ['Clean garbled text tool', 'Full-width to half-width tool', 'Text comparison tool'],
        relatedTitle: 'Related tools',
        related: ['Clean garbled text tool', 'Full-width to half-width tool', 'Text comparison tool'],
        relatedDesc: ['Remove abnormal symbols and noisy whitespace before comparing text.', 'Standardize full-width spaces and punctuation for cleaner formatting.', 'Compare two text versions for proofreading and version review.']
      },
      fullPage: {
        inputLabel: 'Text to convert',
        resultLabel: 'Converted result',
        copy: 'Copy result',
        clear: 'Clear',
        scenarioTitle: 'Use cases',
        scenarios: ['Normalize Chinese document formatting', 'Standardize copied content', 'Clean table data', 'Prepare text for scripts or code input'],
        noteTitle: 'Notes',
        note: 'If the source contains Chinese characters, only full-width punctuation and spaces will be normalized; the characters themselves remain the same.',
        commonTitle: 'Common issues',
        commonIssues: ['Copied text contains many full-width spaces and Chinese punctuation marks', 'Document formatting is inconsistent and affects reading', 'Mixed English and Chinese text has inconsistent spacing and punctuation'],
        docsTitle: 'Related docs',
        docs: ['How do I convert full-width characters to half-width?', 'How do I remove a large number of hidden spaces from copied text?', 'Why is it more accurate to clean text before diffing'],
        toolchainTitle: 'Related tool chain',
        toolchain: ['Clean garbled text tool', 'Remove blank lines tool', 'Text comparison tool'],
        relatedTitle: 'Related tools',
        related: ['Clean garbled text tool', 'Remove blank lines tool', 'Text comparison tool'],
        relatedDesc: ['Handle abnormal characters, replacement symbols, and noisy spacing in PDF and web copy.', 'Remove repeated line breaks and empty lines so the text is more compact and editable.', 'Compare version differences more clearly and efficiently.']
      },
      diffPage: {
        oldLabel: 'Old text',
        newLabel: 'New text',
        resultLabel: 'Comparison result',
        clear: 'Clear',
        scenarioTitle: 'Suitable scenarios',
        scenarios: ['Review copy edits', 'Compare contract or rule versions', 'Assess rewritten content', 'Review blog or draft revisions'],
        noteTitle: 'Notes',
        note: 'This comparison is primarily line-by-line, suitable for proofreading and revision review to quickly locate differences.',
        commonTitle: 'Common issues',
        commonIssues: ['It is hard to spot differences between two versions quickly', 'Revisions and original drafts differ too much to locate edits easily', 'Key changes need checking after contract, draft, or document updates'],
        docsTitle: 'Related docs',
        docs: ['How to compare two text versions quickly', 'Why is it more accurate to clean text before diffing', 'How to remove noisy characters'],
        toolchainTitle: 'Related tool chain',
        toolchain: ['Clean garbled text tool', 'Remove blank lines tool', 'Full-width to half-width tool'],
        relatedTitle: 'Related tools',
        related: ['Clean garbled text tool', 'Remove blank lines tool', 'Full-width to half-width tool'],
        relatedDesc: ['Remove weird characters and noisy whitespace before comparing text for clearer real differences.', 'Clean blank lines from copied text to make the diff easier to read.', 'Normalize full-width/half-width punctuation so changes are easier to judge.']
      }
    },
    blogIndex: {
      lead: 'A practical collection of solutions for PDF, webpage, chat, and document text issues including garbled characters, blank lines, and formatting cleanup.',
      cards: [
        { title: 'How do I remove extra line breaks from copied PDF text?', desc: 'Learn why copied PDF text often includes abnormal line breaks and how to clean it quickly.' },
        { title: 'How do I clean excessive spaces from copied webpage text?', desc: 'Remove hidden spaces, repeated line breaks, and noisy characters from website copy.' },
        { title: 'How do I fix garbled characters in copied WeChat text?', desc: 'Clean abnormal symbols and extra whitespace from chat records and forwarded content.' },
        { title: 'How do I convert full-width characters to half-width?', desc: 'A practical guide for standardizing punctuation, spaces, and mixed-width characters.' },
        { title: 'How do I quickly compare two text versions?', desc: 'Use a text diff workflow to evaluate content changes and revisions.' },
        { title: 'How to remove noisy characters from copied content?', desc: 'A simple cleaning workflow for garbled text, blank lines, and hidden spaces.' },
        { title: 'How do I remove a large number of hidden spaces from copied text?', desc: 'A clear explanation of hidden spaces, invisible characters, and the fastest cleanup method.' },
        { title: 'What should I do when copied PDF text breaks into too many lines in Word?', desc: 'A practical guide for fixing abnormal line breaks when pasting PDF or web text into Word.' },
        { title: 'Why should I clean text before comparison so the real differences stand out?', desc: 'Learn why removing garbled characters and blank lines before diffing makes the real edits much clearer.' },
        { title: 'How do I clean abnormal symbols from copied text in one click?', desc: 'Useful for removing garbled characters, replacement symbols, and invisible whitespace.' },
        { title: 'What is the best way to remove repeated line breaks and blank paragraphs?', desc: 'A reliable cleanup workflow for PDF, web, and document content with excessive empty lines.' },
        { title: 'How can I compare text versions faster and more accurately?', desc: 'A practical overview for version review, proofreading, and content auditing.' }
      ],
      categories: {
        title: 'Browse by problem type',
        items: ['PDF copy line-break issues', 'Webpage copy with too many spaces', 'WeChat garbled messages and copy noise', 'Full-width spaces and mixed punctuation', 'Text comparison and revision review']
      },
      searchIntent: {
        title: 'High-intent search terms',
        items: ['How to clean extra line breaks in copied PDF text', 'How to remove excess spaces from copied webpage text', 'How to fix garbled WeChat text', 'How to use a full-width to half-width converter', 'How to compare two text versions quickly']
      }
    },
    toolsIndex: {
      lead: 'A curated set of text tools organized by common use cases, including PDF copying cleanup, web content cleaning, formatting normalization, and version comparison.',
      sceneTitle: 'Quick picks by scenario',
      card1: { title: 'PDF text has abnormal line breaks', desc: 'Fix repeated line breaks and noisy gaps in copied PDF content.' },
      card2: { title: 'Copied webpage text has too many spaces', desc: 'Remove hidden spaces, repeated breaks, and noisy characters from web content.' },
      card3: { title: 'How to fix garbled copied text from WeChat', desc: 'Clean abnormal symbols and whitespace from chat logs and forwarded content.' },
      card4: { title: 'How to convert full-width characters to half-width', desc: 'Standardize punctuation, spacing, and mixed-width text in daily document work.' },
      browseByObject: {
        title: 'Browse by content type',
        items: ['PDF text: remove line breaks, whitespace, and garbled characters', 'Web copy: clear hidden gaps and repeated layout breaks', 'WeChat messages: remove abnormal symbols and forwarded noise', 'Documents and tables: normalize full-width punctuation and spacing']
      },
      processOrder: {
        title: 'Recommended processing order',
        items: ['Clean abnormal characters and hidden whitespace first', 'Remove repeated line breaks and blank paragraphs next', 'Normalize full-width/half-width formatting last', 'Compare final versions before approval when needed']
      }
    },
    catalog: {
      clean: { badge: 'Garbled text', title: 'Clean garbled text', desc: 'Suitable for abnormal characters, garbled symbols, and noisy spaces in PDF, web, and chat copy.' },
      remove: { badge: 'Whitespace cleanup', title: 'Remove blank lines', desc: 'Delete redundant empty lines and repeated breaks to improve readability.' },
      full: { badge: 'Formatting', title: 'Full-width to half-width', desc: 'Convert full-width punctuation and spaces to a cleaner, more standard format.' },
      diff: { badge: 'Comparison', title: 'Text diff', desc: 'Compare two text versions to identify additions, removals, and edits.' }
    },
    article: {
      pdf: {
        title: 'How do I remove extra line breaks from copied PDF text?',
        p1: 'Many people notice that copied PDF text includes extra line breaks, blank lines, or garbled symbols even though the original content is otherwise normal. This usually happens because the PDF parser keeps hidden line break markers and layout information from the page structure.',
        h2_1: 'Why extra line breaks happen',
        p2: 'PDF files are designed around page layout, and copy operations often preserve columns, paragraph breaks, and spacing metadata. This can split a sentence into multiple lines or leave behind extra spaces and symbols.',
        h2_2: 'Common fixes',
        li1: 'Use the clean garbled text tool to remove abnormal symbols and non-standard whitespace',
        li2: 'Use the remove blank lines tool to delete extra breaks and repeated empty rows',
        li3: 'If full-width spaces or punctuation remain, normalize them with the full-width to half-width tool',
        h2_3: 'The most practical workflow',
        p3: 'If your goal is fast cleanup, paste the text into the <a href="/tools/clean-garbled.html">clean garbled text tool</a>, then run it through the <a href="/tools/remove-blank-lines.html">remove blank lines tool</a> to get a cleaner, copy-ready result.',
        faq: 'FAQ',
        q1: 'Q: Will this delete real words?',
        a1: 'A: Usually no. The tool mainly removes abnormal breaks, whitespace, and garbled symbols while keeping normal content intact.',
        q2: 'Q: Is this suitable for meeting notes or PDF research material?',
        a2: 'A: Yes. It is especially useful for meeting notes, research papers, and PDF extracts that need quick cleanup.',
        related: 'Related tools'
      },
      wechat: {
        title: 'How do I fix garbled characters in copied WeChat text?',
        p1: 'Copied WeChat chat records, forwarded text, and screenshots often include hidden characters, invalid whitespace, and special symbols. They can look like garbled text, but they usually come from encoding issues, page style, or the copy process itself.',
        h2_1: 'Common sources',
        li1: 'Mixed special whitespace and control characters in chat messages',
        li2: 'Forwarded page content with hidden formatting and advertising elements',
        li3: 'Copied content that preserves broken page styling or partial symbols',
        h2_2: 'Recommended fix order',
        p2: 'Start with the <a href="/tools/clean-garbled.html">clean garbled text tool</a> to remove abnormal symbols, then use the <a href="/tools/remove-blank-lines.html">remove blank lines tool</a> to remove repeated whitespace. If needed, normalize the format with the <a href="/tools/fullwidth-halfwidth.html">full-width to half-width tool</a>.',
        h2_3: 'Best suited for',
        p3: 'This workflow works well for cleaning chat logs, forwarded text, screenshots, and copied content before sharing or editing it further.'
      },
      webpage: {
        title: 'How do I clean excessive spaces from copied webpage text?',
        p1: 'Webpage text often contains hidden whitespace, layout residue, list breaks, and forced line separators. After copying, text may look broken or uneven, especially when extra spaces, blank lines, or symbols appear.',
        h2_1: 'Why the problem happens',
        li1: 'Web page layouts use break elements and forced spacing to separate content',
        li2: 'Copy operations can carry visible or invisible whitespace characters',
        li3: 'Mobile pages, embedded scripts, and ad elements often add noisy text fragments',
        h2_2: 'Processing approach',
        p2: 'The most effective method is to clean the garbled text first and then remove blank lines. Paste the content into the <a href="/tools/clean-garbled.html">clean garbled text tool</a> to remove abnormal characters and extra spaces, then use the <a href="/tools/remove-blank-lines.html">remove blank lines tool</a> to combine paragraph breaks and finish with the <a href="/tools/fullwidth-halfwidth.html">full-width to half-width tool</a> for formatting consistency.',
        h2_3: 'Who it helps',
        p3: 'This is useful for content drafting, chat extraction, document cleanup, and any workflow that requires repurposing copied web content.',
        related: 'Related tools'
      },
      fullwidth: {
        title: 'How do I convert full-width characters to half-width?',
        p1: 'Common examples include full-width spaces, commas, periods, brackets, and punctuation that remain after copying, encoding, or webpage extraction. While they may not prevent reading, they can make a document look inconsistent—especially in scripts, tables, emails, or drafts.',
        h2_1: 'Typical content needing cleanup',
        li1: 'Full-width spaces often remain in copied webpages and Word text',
        li2: 'Chinese punctuation such as brackets, commas, and periods',
        li3: 'Full-width English numbers or letters mixed into otherwise standard text',
        h2_2: 'Recommended workflow',
        p2: 'If the text contains both garbled characters and extra whitespace, first use the <a href="/tools/clean-garbled.html">clean garbled text tool</a> to remove noise, then use the <a href="/tools/fullwidth-halfwidth.html">full-width to half-width tool</a> to normalize formatting, and finish with the <a href="/tools/remove-blank-lines.html">remove blank lines tool</a> for a final cleanup.',
        h2_3: 'Important note',
        p3: 'Full-width to half-width conversion is mainly for formatting consistency, not for changing the content meaning. Normal text remains intact; the focus is on cleaner spaces and punctuation.'
      },
      diff: {
        title: 'How do I quickly compare two text versions?',
        p1: 'During copy editing, contract review, manuscript checking, and version revision, the hard part is usually spotting the exact differences. A text comparison tool can highlight added, removed, and modified content so you can review changes quickly without reading line by line.',
        h2_1: 'Common use cases',
        li1: 'Assess the impact of copy edits',
        li2: 'Check differences in contracts or agreements',
        li3: 'Review updates between old and new drafts',
        li4: 'Compare revision highlights across versions',
        h2_2: 'Recommended workflow',
        p2: 'Paste the old and new text into the <a href="/tools/text-diff.html">text comparison tool</a> and review the highlighted output. If there are obvious blank lines or garbled characters, clean them first with the <a href="/tools/clean-garbled.html">clean garbled text tool</a> and <a href="/tools/remove-blank-lines.html">remove blank lines tool</a> to make the comparison easier to read.',
        h2_3: 'Why it helps',
        p3: 'Diffing is not just about matching characters. It helps you see what was added, deleted, or modified, which is much faster than manually scanning each section.'
      },
      noise: {
        title: 'From copied content to clean text: how do I remove noisy characters?',
        p1: 'The most common issues in copied text are not always the words themselves but the surrounding noise: abnormal whitespace, repeated line breaks, garbled characters, full-width punctuation, hidden spaces, and control characters. These can seriously affect readability, copying, and downstream processing.',
        h2_1: 'Common sources of noise',
        li1: 'PDF copy retains page layout line breaks',
        li2: 'Web pages inject hidden whitespace and ad-related elements',
        li3: 'Chat forwarding introduces control characters or replacement symbols',
        li4: 'Full-width spaces and punctuation get mixed into otherwise normal text',
        h2_2: 'A safer cleanup process',
        p2: 'In most cases, it is best to clean the garbled text first, then remove blank lines, then normalize full-width and half-width formatting. This reduces the chance of accidentally deleting valid text and avoids repeated cleanup cycles.',
        h2_3: 'Recommended tool entry points',
        p3: 'The <a href="/tools/clean-garbled.html">clean garbled text tool</a>, <a href="/tools/remove-blank-lines.html">remove blank lines tool</a>, and <a href="/tools/fullwidth-halfwidth.html">full-width to half-width tool</a> cover most everyday cases. If you need to compare two versions, use the <a href="/tools/text-diff.html">text comparison tool</a> afterward.'
      },
      hiddenSpace: {
        title: 'How do I remove a large number of hidden spaces from copied text?',
        p1: 'When copying web content, PDF text, or table data, you often see text that looks normal at first glance but has lots of extra spacing, breaks, or irregular gaps. This is usually not ordinary spaces but hidden spaces, invalid whitespace, or line-break markers.',
        h2_1: 'Why hidden spaces appear',
        p2: 'Web layout, table export, PDF extraction, and cross-platform copy operations often carry extra whitespace. These may include non-breaking spaces, full-width spaces, zero-width characters, or layout markers kept by the copy process. They are hard to notice in the editor, yet they can make text look crowded, broken, or difficult to clean up.',
        h2_2: 'A practical cleanup sequence',
        li1: 'Use the clean garbled text tool to remove abnormal symbols and invalid characters',
        li2: 'Use the remove blank lines tool to delete repeated breaks and blank paragraphs',
        li3: 'Use the full-width to half-width tool to normalize English spacing and punctuation style',
        h2_3: 'Where it usually shows up',
        p3: 'This problem is common in webpage copy, meeting notes, table exports, and copied official text. If the content needs to be reformatted for customer replies, document cleanup, or forwarded chat content, it is better to remove hidden whitespace before editing or sharing.',
        h2_4: 'Recommended fix workflow',
        p4: 'The most useful flow is to paste the text into the <a href="/tools/clean-garbled.html">clean garbled text tool</a>, then use the <a href="/tools/remove-blank-lines.html">remove blank lines tool</a>, and finally normalize spacing with the <a href="/tools/fullwidth-halfwidth.html">full-width to half-width tool</a> when needed. This preserves the content while reducing formatting noise.',
        related: 'Related tools',
        card1Title: 'Clean garbled text tool',
        card1Desc: 'Remove abnormal symbols, invalid whitespace, and extra line breaks from copied content.',
        card2Title: 'Remove blank lines tool',
        card2Desc: 'Delete repeated blank lines and invalid paragraphs to make text cleaner.',
        card3Title: 'Full-width to half-width tool',
        card3Desc: 'Normalize full-width spaces and punctuation so the text is easier to edit.'
      },
      wordPdf: {
        title: 'What should I do when copied PDF text breaks into too many lines in Word?',
        p1: 'Many people paste PDF or webpage content into Word and find that the text is broken into tiny chunks, with forced line breaks almost every line. This usually isn’t because the content itself is wrong; it is often caused by preserved layout information and hidden whitespace characters from the copy process.',
        h2_1: 'Common causes',
        p2: 'PDF files are designed around page layout rather than plain text, so copy operations often carry over column spacing, page breaks, and paragraph metadata. If you also have garbled characters, blank paragraphs, or doubled line breaks, the text becomes especially messy in Word.',
        h2_2: 'A practical cleanup flow',
        li1: 'Use the clean garbled text tool to remove abnormal characters',
        li2: 'Use the remove blank lines tool to eliminate repeated blank lines and broken breaks',
        li3: 'Normalize full-width/half-width punctuation and spacing if needed to keep styling consistent',
        h2_3: 'Why not just delete line breaks manually in Word?',
        p3: 'Deleting these breaks manually is inefficient and easy to mess up. Cleaning the text first and then making small adjustments in Word is more reliable and better preserves the original structure.',
        h2_4: 'Recommended entry points',
        p4: 'If this happens often, start with the <a href="/tools/clean-garbled.html">clean garbled text tool</a>, then use the <a href="/tools/remove-blank-lines.html">remove blank lines tool</a>, and finish with the <a href="/tools/fullwidth-halfwidth.html">full-width to half-width tool</a> only when needed.'
      },
      cleanBeforeDiff: {
        title: 'Why should I clean text before comparison so the real differences stand out?',
        p1: 'A text comparison tool is useful for seeing version differences, but only if the text structure is relatively clean. If one version contains garbled characters, repeated line breaks, hidden spaces, or full-width symbols, those noisy differences may be mistaken for real content changes and make the result harder to read.',
        h2_1: 'What are “noise differences”?',
        p2: 'Noise differences are usually not business-content changes at all; they are the extra breaks, whitespace, and formatting issues created during copy and paste. They can make two versions look dramatically different even when the real content is mostly the same.',
        h2_2: 'Recommended cleanup order',
        li1: 'Use the clean garbled text tool to remove abnormal characters and replacement symbols',
        li2: 'Use the remove blank lines tool to delete repeated blank paragraphs and redundant breaks',
        li3: 'Normalize full-width/half-width punctuation and spaces as needed',
        li4: 'Run the text comparison tool for the final review',
        h2_3: 'Why this helps',
        p3: 'Filtering the noise before comparison makes the results more stable and easier to interpret. That is especially important for contracts, copy revisions, product docs, and article edits where the real content change matters more than formatting leftovers.',
        h2_4: 'Recommended tool chain',
        p4: 'Start with the <a href="/tools/clean-garbled.html">clean garbled text tool</a>, continue with the <a href="/tools/remove-blank-lines.html">remove blank lines tool</a>, and then use the <a href="/tools/text-diff.html">text comparison tool</a> to review the final version differences.',
        related: 'Related tools',
        card1Title: 'Clean garbled text tool',
        card1Desc: 'Remove abnormal characters, spacing, and noisy text before comparing versions.',
        card2Title: 'Remove blank lines tool',
        card2Desc: 'Delete repeated blank lines and empty paragraphs to reduce false diffs.',
        card3Title: 'Text comparison tool',
        card3Desc: 'Review two versions side by side and spot the real edits clearly.'
      }
    }
  }
};

function getBrowserLanguage() {
  const navLang = navigator.language || navigator.userLanguage || '';
  if (navLang.toLowerCase().startsWith('zh')) return 'zh';
  return 'en';
}

async function detectLanguage() {
  const saved = localStorage.getItem('site-locale');
  if (saved === 'zh' || saved === 'en') return saved;

  try {
    const response = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      if (data && data.country_code === 'CN') return 'zh';
    }
  } catch (error) {
    // ignore and fall back to browser language
  }

  return getBrowserLanguage();
}

function applyLocale(lang) {
  const locale = LANGS[lang] || LANGS.zh;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh';

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = key.split('.').reduce((obj, part) => obj && obj[part], locale);
    if (typeof value === 'string') {
      node.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((node) => {
    const key = node.getAttribute('data-i18n-html');
    const value = key.split('.').reduce((obj, part) => obj && obj[part], locale);
    if (typeof value === 'string') {
      node.innerHTML = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.getAttribute('data-i18n-placeholder');
    const value = key.split('.').reduce((obj, part) => obj && obj[part], locale);
    if (typeof value === 'string') {
      node.setAttribute('placeholder', value);
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  const activeLang = lang === 'en' ? 'en' : 'zh';
  const body = document.body;
  body.setAttribute('data-lang', activeLang);
  body.classList.toggle('is-en', activeLang === 'en');
}

function setupLanguageSwitch() {
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLang = button.dataset.lang || 'zh';
      localStorage.setItem('site-locale', selectedLang);
      applyLocale(selectedLang);
    });
  });
}

window.addEventListener('DOMContentLoaded', async () => {
  setupLanguageSwitch();
  const detected = await detectLanguage();
  applyLocale(detected);
});
