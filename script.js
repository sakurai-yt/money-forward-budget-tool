/**
 * 数値を3桁区切りの文字列にフォーマットする関数
 * @param {string} input - フォーマットする数値の文字列
 * @returns {string} フォーマットされた数値の文字列
 */
function formatNumber(input) {
    var value = input.replace(/,/g, ''); // カンマを除去
    if (!isNaN(value) && value.length > 0) {
        return parseFloat(value).toLocaleString(); // 3桁区切りにフォーマット
    } else {
        return '';
    }
}

/**
 * 入力が正しい数値かどうかを確認する関数
 * @param {string} input - 入力された値
 * @returns {boolean} 入力が有効な数値ならtrueを返す
 */
function isValidNumber(input) {
    var value = input.replace(/,/g, ''); // カンマを除去
    return !isNaN(value) && value.trim() !== ''; // 数値であり、空ではないことを確認
}

/**
 * 入力された値に基づいて予算残とGAPを計算する関数
 */
function calculate() {
    try {
        // 各入力フィールドから数値を取得し、カンマを除去して数値に変換
        var currentBudget = document.getElementById("currentBudget").value.replace(/,/g, '') || 0;
        var unclassified = document.getElementById("unclassified").value.replace(/,/g, '') || 0;
        var bankBalance = document.getElementById("bankBalance").value.replace(/,/g, '') || 0;
        
        // 入力値が有効な数値かどうかをチェック
        if (!isValidNumber(currentBudget) || !isValidNumber(unclassified) || !isValidNumber(bankBalance)) {
            throw new Error('入力が無効です。数値を入力してください。');
        }

        // 数値に変換
        currentBudget = parseFloat(currentBudget);
        unclassified = parseFloat(unclassified);
        bankBalance = parseFloat(bankBalance);

        // 予算残を計算し、3桁区切りで表示
        var budgetLeft = currentBudget - unclassified;
        document.getElementById("budgetLeft").textContent = budgetLeft.toLocaleString();

        // GAPを計算し、3桁区切りで表示
        var gap = budgetLeft - bankBalance;
        document.getElementById("gap").textContent = gap.toLocaleString();

    } catch (error) {
        console.error('計算中にエラーが発生しました:', error.message); // コンソールにエラーメッセージを表示
    }
}

/**
 * 入力フィールドの値をフォーマットし、計算を実行する関数
 * @param {Event} event - 入力イベント
 */
function formatAndCalculate(event) {
    var input = event.target; // イベントが発生した入力フィールドを取得
    input.value = formatNumber(input.value); // 入力値を3桁区切りにフォーマット
    calculate(); // フォーマット後に計算を実行
}

// 各入力フィールドに対して、入力イベントが発生した際にフォーマットと計算を行う
document.getElementById("currentBudget").addEventListener("input", formatAndCalculate);
document.getElementById("unclassified").addEventListener("input", formatAndCalculate);
document.getElementById("bankBalance").addEventListener("input", formatAndCalculate);
