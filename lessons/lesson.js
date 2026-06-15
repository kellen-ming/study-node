/* 共享脚本 · 课件互动逻辑
   目前：测验题的即时反馈（支持一页多个 .quiz）。
   非 module 脚本，可在 file:// 下直接运行，无需任何构建。 */
(function () {
  document.querySelectorAll('.quiz .opt').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var quiz = btn.closest('.quiz');
      var fb = quiz.querySelector('.feedback');
      var correct = btn.dataset.correct === 'true';

      quiz.querySelectorAll('.opt').forEach(function (b) {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
      });
      if (!correct) btn.classList.add('wrong');

      if (fb) {
        fb.textContent = (correct ? '✓ 正确！' : '✗ 再想想：') + (btn.dataset.ex || '');
        fb.className = 'feedback show ' + (correct ? 'ok' : 'no');
      }
    });
  });
})();
