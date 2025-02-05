// 1. HTML要素を取得
const btn = document.getElementById("btn");
const text = document.getElementById("text");

// 2. イベントリスナーを設定
btn.addEventListener("click", function() {
  // 3. イベント発生時の処理を記述
  text.textContent = "ボタンをクリックしました";
});