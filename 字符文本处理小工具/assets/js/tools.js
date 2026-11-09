document.addEventListener('DOMContentLoaded', () => {
  const sourceInput = document.getElementById('sourceText');
  const resultOutput = document.getElementById('resultText');
  const actionBtn = document.getElementById('runAction');
  const copyBtn = document.getElementById('copyAction');
  const clearBtn = document.getElementById('clearAction');
  const toolType = document.body.dataset.tool;

  if (!toolType) return;

  const showResult = (text) => {
    if (resultOutput) {
      resultOutput.textContent = text;
    }
  };

  const normalizeLineBreaks = (text) => text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  const escapeHtml = (value) => value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const handleCleanGarbled = () => {
    const text = sourceInput ? sourceInput.value : '';
    const cleaned = normalizeLineBreaks(text)
      .replace(/\uFEFF/g, '')
      .replace(/[\u200B-\u200D\u2060]/g, '')
      .replace(/[\u00A0\u1680\u180E\u2000-\u200A\u202F\u205F\u3000]/g, ' ')
      .replace(/[\uFFFD]/g, '')
      .replace(/[^\x00-\x7F]/g, (char) => {
        if (char === '　') return ' ';
        if (char === '：') return ':';
        if (char === '；') return ';';
        if (char === '，') return ',';
        if (char === '。') return '.';
        if (char === '（') return '(';
        if (char === '）') return ')';
        if (char === '【') return '[';
        if (char === '】') return ']';
        if (char === '“') return '"';
        if (char === '”') return '"';
        if (char === '‘') return "'";
        if (char === '’') return "'";
        return char;
      })
      .replace(/[ \t]{2,}/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n[ \t]+/g, '\n')
      .trim();

    showResult(cleaned);
  };

  const handleRemoveBlankLines = () => {
    const text = sourceInput ? sourceInput.value : '';
    const cleaned = normalizeLineBreaks(text)
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .join('\n');

    showResult(cleaned);
  };

  const convertFullToHalf = (value) => {
    const sanitized = normalizeLineBreaks(value)
      .replace(/\u3000/g, ' ')
      .replace(/[\uFF01-\uFF5E]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xFEE0));
    return sanitized;
  };

  const handleConvertFullHalf = () => {
    const text = sourceInput ? sourceInput.value : '';
    showResult(convertFullToHalf(text));
  };

  const handleDiff = () => {
    const leftValue = document.getElementById('leftText')?.value ?? '';
    const rightValue = document.getElementById('rightText')?.value ?? '';
    const leftLines = normalizeLineBreaks(leftValue).split('\n');
    const rightLines = normalizeLineBreaks(rightValue).split('\n');
    const max = Math.max(leftLines.length, rightLines.length);
    const diffHtml = [];

    for (let index = 0; index < max; index += 1) {
      const leftLine = leftLines[index] ?? '';
      const rightLine = rightLines[index] ?? '';

      if (leftLine === rightLine) {
        diffHtml.push(`<span class="diff-line">${escapeHtml(leftLine || ' ')}</span>`);
      } else if (leftLine && !rightLine) {
        diffHtml.push(`<span class="diff-line removed">-${escapeHtml(leftLine)}</span>`);
      } else if (!leftLine && rightLine) {
        diffHtml.push(`<span class="diff-line added">+${escapeHtml(rightLine)}</span>`);
      } else {
        diffHtml.push(`<span class="diff-line changed">-${escapeHtml(leftLine)}<br/>+${escapeHtml(rightLine)}</span>`);
      }
    }

    const container = document.getElementById('diffOutput');
    if (container) {
      container.innerHTML = diffHtml.join('');
    }
  };

  switch (toolType) {
    case 'clean-garbled':
      actionBtn?.addEventListener('click', handleCleanGarbled);
      break;
    case 'remove-blank-lines':
      actionBtn?.addEventListener('click', handleRemoveBlankLines);
      break;
    case 'fullwidth-halfwidth':
      actionBtn?.addEventListener('click', handleConvertFullHalf);
      break;
    case 'text-diff':
      actionBtn?.addEventListener('click', handleDiff);
      break;
    default:
      break;
  }

  copyBtn?.addEventListener('click', async () => {
    const text = resultOutput?.textContent || '';
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = '已复制';
      setTimeout(() => {
        copyBtn.textContent = '复制结果';
      }, 1200);
    } catch (error) {
      copyBtn.textContent = '复制失败';
      setTimeout(() => {
        copyBtn.textContent = '复制结果';
      }, 1200);
    }
  });

  clearBtn?.addEventListener('click', () => {
    if (sourceInput) sourceInput.value = '';
    if (resultOutput) resultOutput.textContent = '';
    const leftText = document.getElementById('leftText');
    const rightText = document.getElementById('rightText');
    if (leftText) leftText.value = '';
    if (rightText) rightText.value = '';
    const diffOutput = document.getElementById('diffOutput');
    if (diffOutput) diffOutput.innerHTML = '';
  });

  if (toolType === 'clean-garbled' && sourceInput && !sourceInput.value) {
    sourceInput.value = '复制来的文字里有很多乱码字符：� ���，还混着全角空格　和多余换行\n\n这里是示例文本。';
    handleCleanGarbled();
  }

  if (toolType === 'remove-blank-lines' && sourceInput && !sourceInput.value) {
    sourceInput.value = '第一行\n\n\n第二行\n   \n第三行\n\n';
    handleRemoveBlankLines();
  }

  if (toolType === 'fullwidth-halfwidth' && sourceInput && !sourceInput.value) {
    sourceInput.value = '全角字符示例：１２３　ＡＢＣ　，。！？　中文标点：，。';
    handleConvertFullHalf();
  }

  if (toolType === 'text-diff' && sourceInput && !sourceInput.value) {
    const leftText = document.getElementById('leftText');
    const rightText = document.getElementById('rightText');
    leftText.value = '第一行\n第二行\n第三行\n第四行';
    rightText.value = '第一行\n第二行（修改）\n第三行\n第五行';
    handleDiff();
  }
});
